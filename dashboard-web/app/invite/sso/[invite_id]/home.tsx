"use client";

import { useEffect, useRef } from "react";

import { useSupabaseAuth as useAuthUserContext } from "@/lib/supabase/provider/auth";
import { useNotificationContext } from "@/components/Shared/Notification";
import axiosApiInstance from "@/lib/services/request";
import { HOME_ROUTE } from "@/lib/utils";
import { useRejectInviteMutation } from "@/generated/graphql";

const IndexPage = ({ inviteObj }) => {
  const notifier: any = useNotificationContext();
  const [rejectInvite] = useRejectInviteMutation();

  const { user, loading } = useAuthUserContext();
  const queryParams = `?invite_id=${inviteObj?.invite_id}`;
  console.log("queryParams", queryParams);
  const hasRun = useRef(false);
  useEffect(() => {
    if (!loading) {
      // a user is logged in
      if (user) {
        console.log("___user___", user);
        console.log("user.metadata.email", user.user_metadata?.email);
        console.log("inviteObj.email", inviteObj?.invitee_email);
        // logged-in user is the same as the invitee
        if (
          (user.user_metadata?.email || user.email) === inviteObj?.invitee_email
        ) {
          if (inviteObj?.invite_id && !hasRun.current) {
            const shouldAccept = window.confirm(
              `Do you want to accept the invitation to join ${inviteObj?.namespace_name}? Ok to accept, Cancel to reject.`,
            );

            if (shouldAccept) {
              console.log("accepting invite...");
              axiosApiInstance
                .post(`/workspace/invite/accept/${inviteObj.invite_id}/`)
                .then(() => {
                  notifier?.success({
                    title: "Successfully accepted the invitation",
                  });
                })
                .catch((err) => {
                  console.error(err);
                  notifier?.error({
                    title: "Failed to accept the invitation",
                  });
                })
                .finally(() => {
                  window.location.href = HOME_ROUTE;
                });
            } else {
              console.log("rejecting invite...");
              // TODO: set invite status to rejected (GQL mutation)
              rejectInvite({
                variables: {
                  invite_id: inviteObj.invite_id,
                },
              })
                .then(() => {
                  notifier?.success({
                    title: "Successfully rejected the invitation",
                  });
                })
                .finally(() => {
                  window.location.href = HOME_ROUTE;
                });
            }

            hasRun.current = true;
          }
        } else {
          window.location.href = HOME_ROUTE;
        }
      }
    }
  }, [user, loading]);

  return null;
};

export default IndexPage;
