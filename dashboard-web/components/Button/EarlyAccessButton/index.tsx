"use client";

import { useRouter } from "next/navigation";
import { Mixpanel } from "@/lib/mixpanel";
import { GoTelescope } from "react-icons/go";

const EarlyAccessButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        Mixpanel.track("Button | Early Access", {});
        router.push("/auth/signup");
      }}
      className="py-2.5 md:py-3 px-3 md:px-4 hero-btn text-sm md:text-base font-semibold"
    >
      <span className="">Get Early Access</span>
    </button>
  );
};

export default EarlyAccessButton;
