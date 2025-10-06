"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Input from "@/components/Shared/Input";
import { useTetryxAuth } from "@/lib/providers/auth";
import axios from "axios";
import { useNotificationContext } from "@/components/Shared/Notification";
import Button from "@/components/Shared/Button";
import PasswordInput from "@/components/Shared/Input/PasswordInput";
import { HOME_ROUTE } from "@/lib/utils";
import {
  RiAlertFill,
  RiAlertLine,
  RiCheckboxCircleLine,
  RiLockLine,
  RiUser3Line,
} from "react-icons/ri";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { useRouter, useSearchParams } from "next/navigation";
import { getRedirectUrl } from "@/lib/utils/auth";

const SignUpPage = ({ inviteObj, hasInviteError }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  // Use the new function to set redirect_url
  const redirect_url = getRedirectUrl();
  console.log("redirect_url", redirect_url);

  const { signUp, signInWithPassword } = useTetryxAuth();
  const notifier: any = useNotificationContext();

  const [auth, setAuth] = useState({
    email: (inviteObj?.invitee_email as string) || "",
    username: "",
    password: "",
    password_confirm: ""
  });
  const [error, setError] = useState({
    email: "",
    username: "",
    password: "",
    password_confirm: "",
    general: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (hasInviteError) {
      window.alert("Invalid invite");
    }
  }, []);

  const onSignUp = async () => {
    if (auth.password !== auth.password_confirm) {
      setError({
        ...error,
        password_confirm: "Passwords do not match",
      });
      return;
    }

    const { status, message } = await signUp({
      email: auth.email,
      username: auth.username,
      password: auth.password,
    });

    if (status) {
      setShowSuccess(true);
    } else {
      setError({
        ...error,
        general: message,
      });
    }
  };
 
  const onSetPassword = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/workspace/invite/accept-with-password/${inviteObj?.invite_id}/`,
        {
          password: auth.password,
        }
      );

      await signInWithPassword(auth);

      const inviteId = inviteObj?.invite_id;
      if (inviteId) {
        const cleanInviteId = inviteId.replace('inv_', '');
        window.location.href = `/invite/${cleanInviteId}`;
        return;
      }

      window.location.href = HOME_ROUTE;
    } catch (_error) {
      console.error(_error);
      setError({
        ...error,
        general: _error.message,
      });
      notifier.error({
        title: "An error occurred",
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError({
      email: "",
      username: "",
      password: "",
      password_confirm: "",
      general: "",
    });
    const { name, value } = event.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  };
  const onLogin = async () => {
    const redirectTo = redirect ? `?redirect=${redirect}` : "";
    router.push(`/auth/login${redirectTo}`);
  };
  const alreadyAccount = async () => {
    if (redirect) {
      const redirectTo = redirect ? `?redirect=${redirect}` : "";
      router.push(`/auth/login${redirectTo}`);
    } else {
      router.push(`/auth/login`);
    }
  };

  console.log("inviteObj", inviteObj)

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="">
        <h1
          className="mb-2 font-bold text-2xl w-full"
          onClick={() => {
            onLogin();
          }}
        >
          {!!inviteObj
            ? `You've been invited to ${inviteObj.workspace_name}`
            : "Sign up"}
        </h1>
        <h6 className="text-neutral-500">
          {!!inviteObj
            ? "Set a secure password for your account"
            : `${
                showSuccess
                  ? "Thank you for registering your intent. We are excited to have you on board but first, let's verify your email."
                  : "Welcome. Let’s set you up with an account. Use your google account or email address."
              } `}
        </h6>
      </div>
      {showSuccess ? (
        <>
          <div className="confirm-signup">
            <RiCheckboxCircleLine size={24} className="text-green-600 mb-4" />
            <h1 className="text-lg font-bold mb-2">Check your email</h1>
            <h6 className="text-sm md:w-8/12 text-neutral-600">
              We have sent you an email to verify this account. Please check
              your email.
            </h6>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <Link
              href={`https://mail.google.com/mail/u/${auth.email}/#search/from%3A%40atrium.st+in%3Aanywhere+newer_than%3A1d`}
              target="_blank"
              className="w-full"
            >
              <DefaultButton
                label={"Open Gmail"}
                variant="default"
                iconLeft={
                  <img
                    src="/images/gmail-logo.svg"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                }
                size="medium"
                styleClass="font-semibold w-full"
              />
            </Link>

            <Link href="mailto:" target="_blank" className="w-full">
              <DefaultButton
                label={"I use another email client"}
                variant="ghost"
                size="medium"
                styleClass="text-neutral-500 text-neutral-400 w-full"
              />
            </Link>
          </div>
        </>
      ) : (
        <>

          <div 
            className="flex flex-col gap-6"
            onKeyDown={(e) => {
              if (e.key === "Enter") onSignUp;
            }}
          >
            <Input
              type="email"
              name="email"
              placeholder="Email"
              disabled={!!inviteObj}
              value={auth.email}
              iconLeft={<RiUser3Line className="mt-2.5 opacity-60" size={18} />}
              onChange={handleChange}
            />
            {error.email && (
              <div className="text-red-500 text-sm mt-1">{error.email}</div>
            )}

            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={auth.username}
              iconLeft={<RiUser3Line className="mt-2.5 opacity-60" size={18} />}
              onChange={handleChange}
            />
            {error.username && (
              <div className="text-red-500 text-sm mt-1">{error.username}</div>
            )}

            <PasswordInput
              type="password"
              name="password"
              placeholder="Password"
              iconLeft={<RiLockLine className="mt-2.5 opacity-60" size={18} />}
              value={auth.password}
              onChange={handleChange}
            />
            {error.password && (
              <div className="text-red-500 text-sm mt-1">{error.password}</div>
            )}

            <PasswordInput
              type="password"
              name="password_confirm"
              placeholder="Confirm Password"
              iconLeft={<RiLockLine className="mt-2.5 opacity-60" size={18} />}
              value={auth.password_confirm}
              onChange={handleChange}
            />
            {error.password_confirm && (
              <div className="text-red-500 text-sm mt-1">{error.password_confirm}</div>
            )}
          </div>
          <div className="flex flex-col gap-4">
          {error.general && (
            <div className="text-red-500 text-sm mt-1">{error.general}</div>
          )}
            <DefaultButton
              label={!!inviteObj ? "Proceed" : "Request access"}
              variant="primary"
              size="medium"
              styleClass="mt-2 font-semibold"
              onClick={onSignUp}
            />

            {!showSuccess && !inviteObj && (
              <div className="self-center text-sm">
                <div>
                  <span className="opacity-60 mr-2">Have an account?</span>
                  <span
                    onClick={() => {
                      alreadyAccount();
                    }}
                    className="hover:cursor-pointer underline transition text-foreground hover:opacity-70"
                  >
                    Sign In Now
                  </span>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SignUpPage;
