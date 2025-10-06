"use client";

import { triggerPrompt } from "@/lib/services/prompt";
import {
  CHECK_ARRAY_IS_EMPTY_OR_NOT,
  CHECK_PROMPT_DATA_IS_EMPTY_OR_NOT,
} from "@/lib/utils";
import axiosApiInstance from "@/lib/services/request";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { decodeJwt } from "jose";
import * as Tooltip from "@radix-ui/react-tooltip";
import SupabaseLoadingIndicator from "@/components/Common/SupabaseLoadingIndicator";
import Cookies from "universal-cookie";

type SupabaseAuthContext = {
  googleOneTapLogin: (redirect?: string) => void;
  googleLogin: (redirectTo?: string) => void;
  gitHubLogin: (redirectTo?: string) => void;
  emailPasswordLogin: (auth: UserEmailPass) => Promise<AuthResponse>;
  emailPasswordSignup: (auth: UserEmailPass, inviteId?: string) => Promise<AuthResponse>;
  forgotPassword: (email: string) => Promise<AuthResponse>;
  setNewPassword: (email: string) => Promise<AuthResponse>;
  emailVerify: (email: string) => Promise<AuthResponse>;
  updateUserData: (payload: any) => Promise<any>;
  signOut: () => void;
  postAuthCall: (user: any, chat_id_list?: any) => Promise<any>;
  supabase: any;
  user: any;
  authenticated: boolean;
  loading: boolean;
  session_id: string | null;
  session: any | null;
};

type UserEmailPass = {
  email: string;
  password: string;
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
  loading: true,
  session_id: null,
  session: null,
};

const defaultAuthResponse: AuthResponse = {
  status: false,
  message: "",
  data: null,
  error: null,
};

const initialData: SupabaseAuthContext = {
  ...authInitialState,
  supabase: null,
  updateUserData: async () => {},
  postAuthCall: async () => {},
  googleOneTapLogin: async () => {},
  googleLogin: async () => {},
  gitHubLogin: async () => defaultAuthResponse,
  emailPasswordLogin: async () => defaultAuthResponse,
  emailPasswordSignup: async () => defaultAuthResponse,
  forgotPassword: async () => defaultAuthResponse,
  setNewPassword: async () => defaultAuthResponse,
  emailVerify: async () => defaultAuthResponse,
  signOut: async () => {},
  // Add any other missing properties with placeholder implementations
};

const Context = createContext<SupabaseAuthContext | undefined>(initialData);

export default function SupabaseAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [isReady, setIsReady] = useState(false);
  const [supabase, setSupabase] = useState<any | null>(null);
  const [authState, setAuthState] = useState<any>(authInitialState);

  useEffect(() => {
    const initializeAuth = async () => {
      // Perform any async initialization here
      // For example, checking the current session:
      const supabase = await createClient();
      setSupabase(supabase);
      setIsReady(true);
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    if (supabase) {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (event, session) => {
        // console.log("onAuthStateChange", "session", session, "event", event);
        if (!session) {
          setAuthState({
            ...authInitialState,
            loading: false,
          });
        } else {
          // Decode the access token
          let decodedToken: any;
          try {
            decodedToken = decodeJwt(session.access_token);
          } catch (error) {
            console.error("Error decoding token:", error);
          }

          if (event === "SIGNED_IN") {
            setAuthState((prevState: any) => {
              if (prevState?.session?.access_token === session?.access_token) {
                return prevState;
              }
              return {
                ...prevState,
                authenticated: true,
                user: { ...session?.user },
                loading: false,
                session_id: decodedToken?.session_id,
                session: session,
              };
            });
          }
        }
      });

      const getSession = async () => {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (session) {
          setAuthState((prevState: any) => {
            if (prevState?.session?.access_token === session?.access_token) {
              return prevState;
            }

            let decodedToken: any;
            try {
              decodedToken = decodeJwt(session.access_token);
            } catch (error) {
              console.error("Error decoding token:", error);
              return prevState;
            }

            // console.log("session", prevState?.session?.access_token, session?.access_token);
            return {
              ...prevState,
              authenticated: true,
              user: { ...session?.user },
              loading: false,
              session_id: decodedToken?.session_id,
              session: session,
            };
          });
        }
        return null;
      };
      getSession();

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [supabase]);

  useEffect(() => {
    const checkSessionValidity = async () => {
      if (authState.session_id) {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          console.log("🔴 error", error);
          console.log("🔴 session expired. Signing out.");
          await signOut();
        }
      }
    };
    checkSessionValidity();
  }, [authState.session_id]);

  useEffect(() => {
    console.log("SupabaseAuthProvider mounted");
    return () => console.log("SupabaseAuthProvider unmounted");
  }, []);

  const postAuthCall = async (user: any, chat_id_list?: any) => {
    try {
      // // let idToken = authState?.session?.access_token;
      // let session = await supabase?.auth?.getSession();
      // let idToken = session?.data?.session?.access_token;

      // // Set the auth Bearer token.
      // axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`
      sessionStorage.setItem("postAuthCalled", "true");
      const res = await axiosApiInstance.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/post_auth/`,
        {
          user: {},
          chat_id_list,
        },
      );
      let storedPromptData: any = sessionStorage.getItem("promptData");
      if (storedPromptData) {
        storedPromptData = JSON.parse(storedPromptData);
      }
      if (
        res &&
        res.data &&
        CHECK_PROMPT_DATA_IS_EMPTY_OR_NOT(storedPromptData)
      ) {
        await triggerPrompt({payload: storedPromptData, agent_id: "unknown", thread_id: "unknown"}).then((res) => {
          if (res && res.status && res.data) {
            const splitThreadId = res?.data?.thread_id?.split("_")[1];
            sessionStorage.removeItem("promptData");
            router.push(`/thread/${splitThreadId}`);
          }
        });
      }
      return true;
    } catch (e) {
      console.log(e, "error");
      // await supabase.auth.signOut();
      return false;
    }
  };

  const googleOneTapLogin = async (token: any) => {
    console.log("🌺🌺 token", token);
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: token,
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
          include_profile: "true",
        },
      },
    });
    console.log("🌺🌺 data", data);
    if (error) {
      throw error;
    } else {
      return { status: true, message: "", data, error };
    }
  };

  const googleLogin = async (redirectTo?: string) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: redirectTo || `${location.origin}`,
      },
    });
    if (error) {
      console.log("🔴 error", error);
      return { status: false, message: error.message };
    } else {
      enablePostAuthCall();
      return { status: true, message: "" };
    }
  };

  const gitHubLogin = async (redirectTo?: string) => {
    enablePostAuthCall();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: redirectTo || `${location.origin}`,
      },
    });
    if (error) {
      return { status: false, message: error.message };
    }
  };

  const emailPasswordLogin = async (auth: UserEmailPass) => {
    const { data, error } = await supabase.auth.signInWithPassword(auth);
    if (error) {
      if (error.message === "Email not confirmed") router.push("/auth/verify");
      return { status: false, message: error.message, data: null };
    } else {
      enablePostAuthCall();
      return { status: true, message: "", data };
    }
  };

  const emailPasswordSignup = async (auth: UserEmailPass, inviteId?: string) => {
    const { error } = await supabase.auth.signUp({
      ...auth,
      options: {
        emailRedirectTo: inviteId ? `${location.origin}/invite/${inviteId}` : `${location.origin}`,
      },
    });
    if (error) {
      return { status: false, message: error.message };
    } else {
      enablePostAuthCall();
      return { status: true, message: "" };
    }
  };

  const forgotPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/reset-password/`,
    });
    if (error) {
      return { status: false, message: error.message };
    } else {
      enablePostAuthCall();
      return { status: true, message: "" };
    }
  };

  const setNewPassword = async (password: string) => {
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });
    if (error) {
      return { status: false, message: error.message };
    } else {
      enablePostAuthCall();
      return { status: true, message: "" };
    }
  };

  const signOut = async () => {
    enablePostAuthCall();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("🔴 error", error);
    }

    // Clear local storage
    localStorage.clear();

    // Clear session storage
    sessionStorage.clear();

    // Clear cookies
    const cookies = new Cookies();

    // Remove all cookies that start with 'NEXT_PUBLIC_SUPABASE_TOKEN_KEY'
    Object.keys(cookies.getAll()).forEach((cookieName) => {
      if (
        cookieName.startsWith(
          process.env.NEXT_PUBLIC_SUPABASE_TOKEN_KEY ?? "sb-",
        )
      ) {
        cookies.remove(cookieName, { path: "/" });
      }
    });

    // Remove the 'code-server-session' cookie
    cookies.remove("code-server-session", { path: "/", domain: ".atrium.st" });

    // Reload the window after sign out
    window.location.reload();
  };

  const emailVerify = async (email: string) => {
    const { data, error } = await supabase.auth.resend({
      type: "signup",
      email: email,
      options: {
        emailRedirectTo: `${location.origin}`,
      },
    });
    if (error) {
      return { status: false, message: error.message };
    } else {
      enablePostAuthCall();
      return { status: true, message: "" };
    }
  };

  const updateUserData = async (payload: any) => {
    enablePostAuthCall();
    await supabase.auth.updateUser({ data: payload });
    await supabase.auth.refreshSession();
    return true;
  };

  const enablePostAuthCall = () => {
    sessionStorage.removeItem("postAuthCalled");
  };

  return (
    <Context.Provider
      value={{
        supabase,
        googleOneTapLogin,
        googleLogin,
        gitHubLogin,
        emailPasswordLogin,
        emailPasswordSignup,
        forgotPassword,
        setNewPassword,
        emailVerify,
        updateUserData,
        signOut,
        postAuthCall,
        ...authState,
      }}
    >
      <Tooltip.Provider>
        {children}
        <SupabaseLoadingIndicator isLoading={!isReady} />
      </Tooltip.Provider>
    </Context.Provider>
  );
}

export const useSupabaseAuth = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabaseAuth must be used inside SupabaseAuthProvider");
  }
  return context;
};
