"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Input from "@/components/Shared/Input";
import { useTetryxAuth } from "@/lib/providers/auth";
import PasswordInput from "@/components/Shared/Input/PasswordInput";
import { HOME_ROUTE } from "@/lib/utils";
import { RiAlertFill, RiLockLine, RiUser3Line } from "react-icons/ri";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { useRouter, useSearchParams } from "next/navigation";
import { getRedirectUrl } from "@/lib/utils/auth";
import { ImSpinner8 } from "react-icons/im";

const LoginPage = ({ inviteObj, hasInviteError }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect_url = getRedirectUrl();

  const { signInWithPassword } = useTetryxAuth();

  const [auth, setAuth] = useState({
    email: (inviteObj?.invitee_email as string) || "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (hasInviteError) {
      window.alert("Invalid invite");
    }
  }, []);

  const onLogin = async () => {
    setLoading(true);
    const { status, message, data } = await signInWithPassword(auth);

    if (status) {
      const inviteId = inviteObj?.invite_id;
      if (inviteId) {
        const cleanInviteId = inviteId.replace('inv_', '');
        window.location.href = `/invite/${cleanInviteId}`;
      } else {
       router.push(redirect_url);
      }
      setLoading(false);
    } else {
      setError({
        ...error,
        general: message,
      });
      setLoading(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError({
      email: "",
      password: "",
      general: "",
    });
    const { name, value } = event.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="w-full">
        <h1 className="mb-2 font-bold text-2xl w-full">Sign in</h1>
        <h6 className="text-neutral-500">Let's get you back in</h6>
      </div>

      
      <div 
        className="flex flex-col gap-6"
        onKeyDown={(e) => {
          if (e.key === "Enter") onLogin();
        }}
      >
        <Input
          disabled={!!inviteObj}
          type="email"
          name="email"
          placeholder="Email"
          value={auth.email}
          iconLeft={<RiUser3Line className="mt-2.5 opacity-60" size={18} />}
          onChange={handleChange}
        />
        {error.email && (
          <div className="text-red-500 text-sm mt-1">{error.email}</div>
        )}
        <div className="flex flex-col gap-2">
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
          <label className="hover:underline">
            <Link
              href={"/auth/forgot-password"}
              className="text-neutral-800 text-sm  opacity-60 hover:opacity-100"
            >
              Forgot password?
            </Link>{" "}
          </label>
        </div>
        {error.general && (
          <div className="bg-red-50 text-red-600 flex justify-center items-center gap-2 text-sm font-medium py-1.5 px-4 rounded-md"><RiAlertFill size={16} />{error.general}</div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <DefaultButton
          label="Login"
          variant="primary"
          size="medium"
          styleClass="mt-2 font-semibold"
          iconRight={
            loading && (
              <ImSpinner8
                className="animate-spin"
                size={15}
                color="white"
              />
            )
          }
          onClick={onLogin}
        />

        <div className="self-center text-sm">
          <div>
            <span className="opacity-60 mr-2">Don't have an account?</span>
            <Link
              href={"/auth/signup"}
              className="underline transition text-foreground hover:opacity-70"
            >
              Get access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;