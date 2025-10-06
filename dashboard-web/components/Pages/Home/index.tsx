"use client";
import React, { useEffect } from "react";
import AgentPage from "@/components/Pages/Agent";
import { useSessionContext } from "@/lib/context/session";
import axiosApiInstance from "@/lib/services/request";
import { removeQueryParam } from "@/lib/services/invite";
import Loader from "@/components/Common/AtriumLoader";
import { useNotificationContext } from "@/components/Shared/Notification";
import { useRejectInviteMutation } from "@/generated/graphql";

const HomePage = (props: any) => {
  const { session } = useSessionContext();
  const { inviteObj, hasInviteError } = props;
  const notifier: any = useNotificationContext();
  const [rejectInvite] = useRejectInviteMutation();

  useEffect(() => {
    if (inviteObj?.invite_id) {
      const shouldAccept = window.confirm(
        `Do you want to accept the invitation to join ${inviteObj?.namespace_name}? Ok to accept, Cancel to reject.`
      );

      if (shouldAccept) {
        console.log("accepting invite...");
        axiosApiInstance
          .post(`/accept-invite/${inviteObj.invite_id}`)
          .then(() => {
            notifier?.success({
              title: "Successfully accepted the invitation",
            });
            removeQueryParam("invite_id");
          })
          .catch((err) => {
            console.error(err);
            notifier?.error({
              title: "Failed to accept the invitation",
            });
          });
      } else {
        console.log("rejecting invite...");
        rejectInvite({
          variables: {
            invite_id: inviteObj.invite_id,
          },
        })
          .then(() => {
            notifier?.success({
              title: "Successfully rejected the invitation",
            });
            removeQueryParam("invite_id");
          })
          .catch((err) => {
            console.error(err);
            notifier?.error({
              title: "Failed to reject the invitation",
            });
          });
      }
    } else if (
      hasInviteError &&
      new URLSearchParams(window.location.search).get("invite_id")
    ) {
      window.alert("Invalid invite link");
      removeQueryParam("invite_id");
    }
  }, []);

  if (session.loading) {
    return (
      <div className="flex justify-center items-center content-container">
        <div className="flex flex-col items-center">
          <Loader />
        </div>
      </div>
    );
  }

  if (session.error) {
    console.error(session.error);
    return (
      <div className="flex justify-center items-center content-container">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold text-red-500 mx-4">
            Oops..Failed to fetch workspace details.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <AgentPage />
  );
};

export default HomePage;
