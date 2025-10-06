"use client";

import { useState, useEffect } from "react";
import { NotificationProvider } from "@/components/Shared/Notification";
import { ApolloProvider } from "@apollo/client";
import GlobalProvider from "../context/global";
import TetryxAuthProvider from "./auth";
import { AxiosProvider } from "@/lib/context/axios";
import { initializeApollo } from "../apolloClient";
import { SessionProvider } from "@/lib/context/session";
import { useTetryxAuth } from "./auth";
import { PostHogProvider } from "../posthog";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <PostHogProvider>
      <TetryxAuthProvider>
        <TetryxAwareProviders>
          <NotificationProvider>{children}</NotificationProvider>
        </TetryxAwareProviders>
      </TetryxAuthProvider>
      </PostHogProvider>
    </GlobalProvider>
  );
}

function TetryxAwareProviders({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [client, setClient] = useState(() => initializeApollo(null));
  const { session } = useTetryxAuth();
  const [reloadAttempt, setReloadAttempt] = useState(0);

  useEffect(() => {
    const fetchToken = async () => {
      if (session) {
        try {
          const fetchedToken = session.access_token;
          setToken(fetchedToken);
          let _client = initializeApollo(fetchedToken);
          setClient(_client);
        } catch (error) {
          console.error("Error fetching token:", error);
          if (reloadAttempt === 0) {
            console.log("Scheduling page reload with exponential backoff");
            const backoffTime = Math.pow(2, reloadAttempt + 1) * 1000; // 2 seconds for the first attempt
            setTimeout(() => {
              setReloadAttempt(1);
              window.location.reload();
            }, backoffTime);
          } else {
            console.log("Max reload attempts reached. Not reloading.");
          }
        }
      }
    };

    fetchToken();
  }, [session, reloadAttempt]);

  return (
    <AxiosProvider token={token}>
      <ApolloProvider client={client}>
        <SessionProvider>{children}</SessionProvider>
      </ApolloProvider>
    </AxiosProvider>
  );
}
