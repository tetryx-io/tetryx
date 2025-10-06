"use client";
import Providers from "@/lib/providers/Providers";
import Loader from "@/components/Common/TetryxLoader";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useMemo } from "react";
import { useSessionContext } from "@/lib/context/session";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

export default function Layout({
  children,
  params,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const { session } = useSessionContext();
  const options: any = useMemo(
    () => ({
      mode: "setup",
      currency: "usd",
      appearance: {},
    }),
    [],
  );

  if (!session.data?.workspace_id) {
    return <Loader />;
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <Providers>
        <div className="overflow-auto w-full">{children}</div>
      </Providers>
    </Elements>
  );
}
