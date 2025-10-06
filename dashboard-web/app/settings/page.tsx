"use client";

import HomePage from "@/components/Pages/Home";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);

const Page = ({ searchParams }: { searchParams: { invite_id?: string } }) => {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  );
};

export default Page;
