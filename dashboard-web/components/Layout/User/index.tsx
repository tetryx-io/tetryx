import React from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default ({ children, sideNavOpen, ...props }) => {
  const Footer = () => {
    return (
      <footer
        className={clsx(
          "flex items-center justify-center",
          "bg-white dark:bg-neutral-900",
          "h-6 w-full z-10",
          "border-t border-1 dark:border-neutral-700"
        )}
      >
        <p className="text-neutral-500 dark:text-neutral-400 text-xs">
          &copy;{siteConfig.company_name} 2023 &middot; All rights reserved.
        </p>
        <Link
          href={"/articles"}
          className="text-neutral-500 dark:text-neutral-400 text-xs"
        >
          Wiki
        </Link>
      </footer>
    );
  };

  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col",
        "bg-white dark:bg-black",
        "justify-between overflow-y-clip overscroll-none fixed top-0 w-full max-w-[1920px]"
      )}
    >
      <div className={"h-[calc(100vh_-_1.5rem)] w-full flex flex-row"}>
        <div className={"w-full absolute top-0 overflow-y-scroll"}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
