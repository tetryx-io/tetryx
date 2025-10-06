"use client";

import React, { createContext, useContext, useMemo, useCallback } from "react";
import { useSessionSubscription } from "@/generated/graphql";
import { pick as _pick } from "lodash";
import { useSupabaseAuth } from "@/lib/supabase/provider/auth";
import * as Tooltip from "@radix-ui/react-tooltip";
import SessionLoadingIndicator from "@/components/Common/SessionLoadingIndicator";

const SessionContext = createContext({});

export const SessionProvider = ({ children }: any) => {
  const { session_id, user } = useSupabaseAuth();

  const { data, loading, error } = useSessionSubscription({
    variables: { id: session_id },
    skip: !session_id,
  });

  const processMembers = useCallback((workspace: any) => {
    return (
      workspace?.members
        ?.map((member: any) => {
          if (member && member.user) {
            return {
              role: member.role,
              ..._pick(member.user, [
                "id",
                "email",
                "last_seen",
                "_uid",
                "picture",
                "name",
              ]),
            };
          }
          return undefined;
        })
        .filter(Boolean) ?? []
    );
  }, []);

  const ctx_value = useMemo(() => {
    let members: any[] = [];
    const workspace = data?.session?.workspace as any | undefined;

    if (workspace) {
      members = processMembers(workspace);
      workspace.member_list = members;
      workspace.role = members.find((member) => member._uid === user?.id)?.role;
    }

    return {
      session: {
        data: data?.session,
        loading,
        error,
      },
    };
  }, [data, loading, error, user, processMembers]);

  return (
    <SessionContext.Provider value={ctx_value}>
      <Tooltip.Provider>
        {children}
        <SessionLoadingIndicator isLoading={loading} />
      </Tooltip.Provider>
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  const namespaceContext: any = useContext(SessionContext);
  if (!namespaceContext) {
    throw new Error(
      "useSessionContext must be used within the NamespaceProvider",
    );
  }
  return namespaceContext;
};
