"use client";

import OmniLink from "@/components/Shared/omnilink";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

const GetInTouchButton = () => {
  return (
    <div
      className={
        " border rounded shadow-lg ring-1 shadow-zinc-800 border-solid border-black  max-w-md w-52 p-2 md:p-4 bg-white dark:bg-black dark:text-white"
      }
    >
      <OmniLink
        href="mailto:team@reframe.is?subject=Reframe » Hello from Landing Page"
        className="flex flex-row h-full items-center justify-center space-x-2"
      >
        <EnvelopeClosedIcon />
        <span className="grow text-center">Get In Touch</span>
        <FaExternalLinkAlt size={15} />
      </OmniLink>
    </div>
  );
};


export default GetInTouchButton