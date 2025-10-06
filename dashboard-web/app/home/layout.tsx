"use client";
import Providers from "@/lib/providers/Providers";
import Loader from "@/components/Common/AtriumLoader";
import { useMemo } from "react";
import { useSessionContext } from "@/lib/context/session";

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
    <Providers>
      <div className="overflow-auto w-full">{children}</div>
    </Providers>
  );
}
