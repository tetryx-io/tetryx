"use client";

import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import Input from "@/components/Shared/Input";
import AuthLayout from "@/components/Layout/AuthLayout";
import { useSupabaseAuth } from "@/lib/supabase/provider/auth";

const EmailVerifyPage = () => {
  const { emailVerify } = useSupabaseAuth();
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const onForgotPassword = async () => {
    const { status, message } = await emailVerify(email);
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
    <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
      <div className="mb-10">
        <h1 className="mt-8 mb-2 text-2xl lg:text-3xl">Account confirmation</h1>
        <h2 className="text-sm text-foreground-light">
          Type in your email and we'll send you a link to verify your account
        </h2>
      </div>
      {showSuccess ? (
        <div>
          <h3 className="font-bold">Email sent successfully</h3>
          <h4>
            We have sent email to confirm your account. Please check your email.
          </h4>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div>
            <Input
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            {error && <span className="text-red-600 my-2">{error}</span>}
            <button
              type="button"
              onClick={onForgotPassword}
              className="shadow-sm w-full flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md outline-none"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <div className="self-center my-8 text-sm">
        <div>
          <span className="text-foreground-light mr-2">
            Already have an account?
          </span>
          <Link
            href={"/auth/login"}
            className="underline transition text-foreground hover:text-foreground-light"
          >
            Sign In Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifyPage;
