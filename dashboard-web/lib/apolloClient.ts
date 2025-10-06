import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  split,
  from,
} from "@apollo/client";
import { InMemoryCache, NormalizedCacheObject } from "@apollo/client/cache";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { RetryLink } from "@apollo/client/link/retry";
import { getMainDefinition } from "@apollo/client/utilities";
import fetch from "isomorphic-unfetch";
import React from "react";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
let token: string | null = null;

const getAuthHeaders = (token: string | null, link_type: string) => {
  let headers = {};
  if (token) {
    console.log(
      `Creating Apollo ${link_type} Link with "Authorization Bearer". Token found.`,
    );
    headers["Authorization"] = `Bearer ${token}`;
  } else if (
    process.env.HASURA_ADMIN_SECRET
  ) {
    console.log(
      `Creating Apollo ${link_type} Link with "x-hasura-admin-secret (HASURA_ADMIN_SECRET)"`,
    );
    headers["x-hasura-admin-secret"] = process.env.HASURA_ADMIN_SECRET;
  } else {
    console.log(`Empty Authorization header for Apollo ${link_type} Link`);
  }
  return headers;
};

const createHttpLink = (token: string | null) => {
  const getHttpUri = () => {
    if (process.env.NODE_ENV === "production") {
      return process.env.NEXT_PUBLIC_GQL_API_URL;
    }

    return process.browser
      ? process.env.NEXT_PUBLIC_GQL_CSR_API_URL
      : process.env.NEXT_PUBLIC_GQL_SSR_API_URL;
  };

  let headers = getAuthHeaders(token, "HTTP");

  const httpLink = new HttpLink({
    uri: getHttpUri(),
    credentials: "include",
    headers,
    fetch,
  });
  return httpLink;
};

const createWSLink = (token: string | null) => {
  let headers = getAuthHeaders(token, "WS");

  return new GraphQLWsLink(
    createClient({
      url:
        process.env.NEXT_PUBLIC_GQL_WS_URL ??
        (() => {
          throw new Error("NEXT_PUBLIC_GQL_WS_URL is not defined");
        })(),
      connectionParams: async () => ({
        headers,
      }),
      retryAttempts: 5,
      shouldRetry: (error) => {
        return true; // Retry on all errors
      },
      keepAlive: 10000, // Send keep-alive every 10 seconds
    }),
  );
};

const roundTripLink = new ApolloLink((operation, forward) => {
  // Called before operation is sent to server
  operation.setContext({ start: new Date() });

  return forward(operation);
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error,
  },
});

export const createApolloClient = (token: string | null) => {
  const ssrMode = typeof window === "undefined";
  const httpLink = createHttpLink(token);

  let finalLink: ApolloLink;

  if (ssrMode) {
    finalLink = httpLink;
  } else {
    const wsLink = createWSLink(token);
    finalLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink,
    );
  }

  const linkChain = from([retryLink, roundTripLink, finalLink]);

  console.log("🐣 Created new Apollo Client");

  return new ApolloClient({
    ssrMode,
    link: linkChain,
    cache: new InMemoryCache(),
    name: "atrium-web",
  });
};

export function initializeApollo(_token: string | null, initialState = null) {
  const _apolloClient =
    apolloClient && _token === token
      ? apolloClient
      : createApolloClient(_token);

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client.
  // If the token changes, create a new client.
  if (!apolloClient || _token !== token) apolloClient = _apolloClient;

  token = _token;
  return apolloClient;
}

export function useApollo(token: string, initialState = null) {
  const store = React.useMemo(
    () => initializeApollo(token, initialState),
    [token, initialState],
  );
  return store;
}
