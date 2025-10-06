// @ts-nocheck
import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

function Logo({ href, className }) {
  return (
    <>
      {href ? (
        <Link className={clsx(className)} href={href}>
          {/*Peter: Do not attempt to use NextJS image here. It is buggy and will mess up lots of things.*/}
          <img src="/reframe-full.svg" layout="fill" />
        </Link>
      ) : (
        <div className={clsx(className)}>
          <img src="/reframe-full.svg" layout="fill" />
        </div>
      )}
    </>
  );
}

export default Logo;
