"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyClassManager() {
  const pathname = usePathname();

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      if (
        pathname === "/" ||
        pathname === "/developers/" ||
        (pathname.split("/")[1] === "agent" &&
          pathname.split("/")[3] !== "setup")
      ) {
        bodyElement.className = "body-white";
      } else {
        bodyElement.className = "body-default";
      }
    }
  }, [pathname]);

  return null; // This component doesn't render anything
}
