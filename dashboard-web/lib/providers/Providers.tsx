"use client";

import { useState, useEffect } from "react";
import { NotificationProvider } from "@/components/Shared/Notification";
import { ApolloProvider } from "@apollo/client";
import GlobalProvider from "../context/global";
import SupabaseAuthProvider from "../supabase/provider/auth";
import { AxiosProvider } from "@/lib/context/axios";
import { initializeApollo } from "../apolloClient";
import { SessionProvider } from "@/lib/context/session";
import { useSupabaseAuth } from "@/lib/supabase/provider/auth";
import { PostHogProvider } from "../posthog";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <PostHogProvider>
      <SupabaseAuthProvider>
        <SupabaseAwareProviders>
          <NotificationProvider>{children}</NotificationProvider>
        </SupabaseAwareProviders>
      </SupabaseAuthProvider>
      </PostHogProvider>
    </GlobalProvider>
  );
}

function SupabaseAwareProviders({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [client, setClient] = useState(() => initializeApollo(null));
  const { supabase, session_id } = useSupabaseAuth();
  const [reloadAttempt, setReloadAttempt] = useState(0);

  useEffect(() => {
    // console.log("session_id", supabase, session_id);
    const fetchToken = async () => {
      // console.log("supabase", supabase);
      if (supabase) {
        // console.log("before getSession");
        try {
          const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("getSession timeout")), 1000),
          );
          const sessionPromise = supabase.auth.getSession();
          const {
            data: { session },
            error,
          } = await Promise.race([sessionPromise, timeoutPromise]);

          // console.log("session", session, error);
          if (session) {
            const fetchedToken = session.access_token;
            setToken(fetchedToken);
            let _client = initializeApollo(fetchedToken);
            setClient(_client);
          }
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
  }, [supabase, session_id, reloadAttempt]);

  return (
    <AxiosProvider token={token}>
      <ApolloProvider client={client}>
        <SessionProvider>{children}</SessionProvider>
      </ApolloProvider>
    </AxiosProvider>
  );
}
