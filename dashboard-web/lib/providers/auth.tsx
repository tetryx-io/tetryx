"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { tetryx } from "@/lib/tetryx";
import type { User, Session, LoginCredentials, SignUpCredentials } from "@/lib/tetryx";

type TetryxAuthContext = {
  signInWithPassword: (credentials: LoginCredentials) => Promise<AuthResponse>;
  signUp: (credentials: SignUpCredentials) => Promise<AuthResponse>;
  signOut: () => Promise<void>;
  user: User | null;
  session: Session | null;
  authenticated: boolean;
  loading: boolean;
};

type AuthResponse = {
  status: boolean;
  message: string;
  data: any;
  error: any;
};

const authInitialState = {
  authenticated: false,
  user: null,
  session: null,
  loading: true,
};

const defaultAuthResponse: AuthResponse = {
  status: false,
  message: "",
  data: null,
  error: null,
};

const initialData: TetryxAuthContext = {
  ...authInitialState,
  signInWithPassword: async () => defaultAuthResponse,
  signUp: async () => defaultAuthResponse,
  signOut: async () => {},
};

const Context = createContext<TetryxAuthContext | undefined>(initialData);

export default function TetryxAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authState, setAuthState] = useState<any>(authInitialState);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { data, error } = await tetryx.getSession();
        if (data.session && !error) {
          setAuthState({
            authenticated: true,
            user: data.session.user,
            session: data.session,
            loading: false,
          });
        } else {
          setAuthState({
            ...authInitialState,
            loading: false,
          });
        }
      } catch (error) {
        console.error("Failed to initialize auth:", error);
        setAuthState({
          ...authInitialState,
          loading: false,
        });
      }
    };

    initializeAuth();

    // Set up auth state change listener
    const cleanup = tetryx.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setAuthState({
          authenticated: true,
          user: session.user,
          session: session,
          loading: false,
        });
      } else if (event === 'SIGNED_OUT') {
        setAuthState({
          ...authInitialState,
          loading: false,
        });
      }
    });

    return cleanup;
  }, []);

  const signInWithPassword = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await tetryx.signInWithPassword(credentials);

      if (response.error) {
        return {
          status: false,
          message: response.error.message,
          data: null,
          error: response.error,
        };
      }

      return {
        status: true,
        message: "Successfully signed in",
        data: response.data,
        error: null,
      };
    } catch (error: any) {
      return {
        status: false,
        message: error.message || "Failed to sign in",
        data: null,
        error,
      };
    }
  };

  const signUp = async (credentials: SignUpCredentials): Promise<AuthResponse> => {
    try {
      const response = await tetryx.signUp(credentials);

      if (response.error) {
        return {
          status: false,
          message: response.error.message,
          data: null,
          error: response.error,
        };
      }

      return {
        status: true,
        message: "Successfully signed up",
        data: response.data,
        error: null,
      };
    } catch (error: any) {
      return {
        status: false,
        message: error.message || "Failed to sign up",
        data: null,
        error,
      };
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      await tetryx.signOut();
      // Clear any local storage or session data if needed
      localStorage.clear();
      sessionStorage.clear();

      // Reload the page to ensure clean state
      window.location.reload();
    } catch (error) {
      console.error("Error signing out:", error);
      // Still clear local state even if API call fails
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  };

  return (
    <Context.Provider
      value={{
        signInWithPassword,
        signUp,
        signOut,
        ...authState,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useTetryxAuth = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useTetryxAuth must be used inside TetryxAuthProvider");
  }
  return context;
};