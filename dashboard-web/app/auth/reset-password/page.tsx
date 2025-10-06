"use client";

import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import Input from "@/components/Shared/Input";
import AuthLayout from "@/components/Layout/AuthLayout";
import { useSupabaseAuth } from "@/lib/supabase/provider/auth";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import PasswordInput from "@/components/Shared/Input/PasswordInput";

const ResetPasswordPage = () => {
  const { setNewPassword } = useSupabaseAuth();
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const onResetPassword = async () => {
    if (!passwords.password || !passwords.confirmPassword) {
      setError("Please enter your new password");
    } else {
      if (passwords.password === passwords.confirmPassword) {
        const { status, message } = await setNewPassword(passwords.password);
        if (status) {
          setShowSuccess(true);
        } else {
          setError(message);
        }
      } else {
        setError("Password does not match!");
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setPasswords({
      ...passwords,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
      <div className="mb-10">
        <h1 className="mt-8 mb-4 font-bold text-3xl">Set Your New Password</h1>
      </div>
      {showSuccess ? (
        <div>
          <h3 className="font-bold">Password reset successfully</h3>
          <h4>Please do login with your new password.</h4>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <div>
            <PasswordInput
              type="password"
              name="password"
              label="Password"
              value={passwords.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <PasswordInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={passwords.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            {error && <span className="text-red-600 my-2">{error}</span>}
            <DefaultButton
              label="Reset password"
              disabled={
                passwords.password === "" || passwords.confirmPassword === ""
              }
              size="medium"
              styleClass="mt-8 font-semibold"
              onClick={onResetPassword}
            />
          </div>
        </div>
      )}

      <div className="self-center my-8 text-sm">
        <div>
          <span className="text-foreground-light mr-2">Have an account?</span>
          <Link
            href={"/auth/login"}
            className="underline transition text-foreground hover:opacity-70"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
