"use client";

import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import Input from "@/components/Shared/Input";
import AuthLayout from "@/components/Layout/AuthLayout";
import { useSupabaseAuth } from "@/lib/supabase/provider/auth";
import DefaultButton from "@/components/Shared/Button/DefaultButton";

const ForgotPasswordPage = () => {
  const { forgotPassword } = useSupabaseAuth();
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const onForgotPassword = async () => {
    const { status, message } = await forgotPassword(email);
    if (status) {
      setShowSuccess(true);
    } else {
      setError(message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col sm:mt-4 w-full">
      <div className="mb-10">
        <h1 className="mt-8 mb-4 font-bold text-3xl">Reset Your Password</h1>
        <h2 className="text-neutral-600 dark:text-neutral-300">
          Type in your email and we'll send you a link to reset your password
        </h2>
      </div>
      {showSuccess ? (
        <div>
          <h3 className="font-bold">Email sent successfully</h3>
          <h4>We have sent email to reset account. Please check your email.</h4>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            {error && <span className="text-red-600 my-2">{error}</span>}
            <DefaultButton
              label="Send reset link"
              disabled={email === ""}
              size="medium"
              styleClass="mt-8 font-semibold"
              onClick={onForgotPassword}
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

export default ForgotPasswordPage;
