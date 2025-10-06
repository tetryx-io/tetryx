"use client";

import { useEffect, useRef } from "react";

import { useRouter } from "next/navigation";
import { useTetryxAuth as useAuthUserContext } from "@/lib/providers/auth";
import { useNotificationContext } from "@/components/Shared/Notification";
import { useSessionContext } from "@/lib/context/session";

const IndexPage = ({ inviteObj }) => {
  const notifier: any = useNotificationContext();
  const router = useRouter();

  const { user, loading } = useAuthUserContext();
  const { session } = useSessionContext();
  console.log("user", user, "loading", loading);
  const queryParams = `?invite_id=${inviteObj?.invite_id}`;
  console.log("queryParams", queryParams);
  const hasShownNotification = useRef(false);

  const reroute = (url: string) => {
    if (!inviteObj) {
      if (!hasShownNotification.current) {
        notifier.error({
          title: "Invalid invite link",
        });
        hasShownNotification.current = true;
      }

      // remove query params from url
      router.push(url.split("?")[0]);
      return;
    }

    if (!hasShownNotification.current) {
      notifier.success({
        title: "Please proceed to accept the invitation",
      });
      hasShownNotification.current = true;
    }
    router.push(url);
  };

  useEffect(() => {
    if (!loading) {
      console.log("__user__ snot loading");
      // a user is logged in
      if (user) {
        console.log("___user___", user);
        console.log("user.metadata.email", user.user_metadata?.email);
        console.log("inviteObj.email", inviteObj?.invitee_email);
        // logged-in user is the same as the invitee
        if (
          (user.user_metadata?.email || user.email) === inviteObj?.invitee_email
        ) {
          reroute(`/data/frame/-${queryParams}`);
        } else {
          if (inviteObj?.has_account) reroute(`/auth/login${queryParams}`);
          else reroute(`/auth/signup${queryParams}`);
        }
      } else {
        console.log("__user__ is not logged in");
        // user is not logged in, but exists
        if (inviteObj?.has_account) reroute(`/auth/login${queryParams}`);
        else reroute(`/auth/signup${queryParams}`);
      }
    }

    console.log("__user__ is loading");
  }, [user, loading]);

  return null;
};

export default IndexPage;
