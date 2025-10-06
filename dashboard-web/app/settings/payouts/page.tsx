"use client";

import React from "react";

import Payouts from "@/components/Pages/Settings/Payouts";
import { useSessionContext } from "@/lib/context/session";
import Loader from "@/components/Common/AtriumLoader";

const BillingPage = () => {
  const { session } = useSessionContext();

  if (session.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <Loader />
        </div>
      </div>
    );
  }

  if (session?.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Something went wrong
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            Please try refreshing the page
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Payouts />
    </div>
  );
};

export default BillingPage;
