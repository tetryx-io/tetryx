// @ts-nocheck
import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

function Logo({ homepage, className }) {
  return (
    <Link href={homepage ? homepage : "/"}>
      <img
        className={clsx("h-fill", className)}
        src="/reframe-full.svg"
      />
    </Link>
  );
}

export default Logo;
