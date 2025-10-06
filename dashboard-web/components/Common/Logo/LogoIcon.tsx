// @ts-nocheck
import React from "react";
import Link from "next/link";

function LogoIcon({ homepage }) {
  return (
    <div className={"main-logo"}>
      <Link href={`${homepage || "/"}`}>
        <img src="/logo.svg" />
      </Link>
    </div>
  );
}

export default LogoIcon;
