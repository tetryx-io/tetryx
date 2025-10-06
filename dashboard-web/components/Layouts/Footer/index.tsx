import React, { Fragment } from "react";
import Link from "next/link";
import { LogoLarge } from "@/components/Common/Logo";
import OmniLink from "@/components/Shared/omnilink";
import {
  RiLinkedinBoxFill,
  RiArrowRightLine,
  RiGithubFill,
} from "react-icons/ri";
import { siteConfig } from "@/config/site";
import { pagesConfig } from "@/config/docs";

const company = [
  {
    name: "About",
    href: "https://atriumai.notion.site/About-Team-1bc27d1e468148888accc715a8f13702",
  },

  // {
  //   name: "Pricing",
  //   href: "/pricing",
  // },

  // {
  //   name: "Articles",
  //   href: "/articles",
  // },

  {
    name: "Privacy policy",
    href: "/legal/privacy",
  },

  {
    name: "Terms of service",
    href: "/legal/terms",
  },

  // {
  //   name: "Acceptable Use Policy",
  //   href: "/legal/acceptable-use",
  // },
  // {
  //   name: "Support Policy",
  //   href: "/legal/support-policy",
  // },
  // {
  //   name: "Service Level Agreement",
  //   href: "/legal/sla",
  // },
];

const PublicFooter = () => {
  return (
    // <Fragment>
    //   <footer className="relative bg-neutral-50 dark:bg-neutral-900">
    //     <div className="mx-auto w-full px-2 sm:px-6 md:px-8 lg:px-14 xl:px-28 py-6 lg:py-8 max-w-[1920px]">
    //       <div className="flex flex-col gap-12 lg:flex-row md:justify-between">
    //         <div className="flex flex-col gap-4 md:gap-6 w-10/12   sm:w-8/12 md:w-[480px] m-4">
    //           <div className="flex flex-col gap-5">
    //             <div className="h-6 w-24 flex flex-none">
    //               <span className="sr-only">{siteConfig.company_name}</span>
    //               <div className="relative w-fit h-5 flex justify-start">
    //                 <Link href={"/"} className="absolute w-full h-full z-10"></Link>
    //                 <object data="/reframe-full.svg" type="image/svg+xml" className="flex justify-start small-logo dynamic-logo"></object>
    //               </div>
    //             </div>
    //             <p className="text-neutral-700 dark:text-neutral-300">{siteConfig.description}</p>
    //           </div>
    //           <Link href="https://to.reframe.is/cal-20min" className="flex gap-2 w-fit py-1 text-sm font-semibold items-center border-b border-transparent hover:border-black dark:hover:border-white">Contact us <RiArrowRightLine size={20} /></Link>
    //         </div>
    //         <div className="grid grid-flow-dense p-4 grid-cols-1 gap-8 md:gap-20 sm:grid-cols-2 md:grid-cols-3">

    //           <div className="flex flex-col gap-7">
    //             <div className="hidden"> {/* USE CASES */}
    //               <h2 className="mb-5 font-bold text-black dark:text-white">
    //                 Use cases
    //               </h2>
    //               <ul className="">
    //                 {pagesConfig?.use_cases.map((item, index) => (
    //                     <li key={index} className="mb-3 text-neutral-600 hover:text-black dark:hover:text-neutral-200 dark:text-neutral-400">
    //                       <Link href={item.href} className="hover:underline">
    //                         {item.name}
    //                       </Link>
    //                     </li>
    //                 ))}
    //               </ul>
    //             </div>

    //             <div> {/* RESOURCES */}
    //               <h2 className="mb-5 font-bold text-black dark:text-white">
    //                 Resources
    //               </h2>
    //               <ul className="">
    //                 {pagesConfig?.resources.map((item) => (
    //                     <li key={item.name} {...item} className="mb-3 text-neutral-600 hover:text-black dark:hover:text-neutral-200 dark:text-neutral-400">
    //                       <Link href={item.href} className="hover:underline">
    //                         {item.name}
    //                       </Link>
    //                     </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>

    //           <div> {/* INDUSTRIES */}
    //             <h2 className="mb-5 font-bold text-black dark:text-white">
    //               Industries
    //             </h2>
    //             <ul className="">
    //               {pagesConfig?.industries.map((item, index) => (
    //                   <li key={index} className="mb-3 text-neutral-600 hover:text-black dark:hover:text-neutral-200 dark:text-neutral-400">
    //                     <Link href={item.href} className="hover:underline">
    //                       {item.name}
    //                     </Link>
    //                   </li>
    //               ))}
    //             </ul>
    //           </div>

    //           <div> {/* COMPANY & LEGAL */}
    //             <h2 className="mb-5 font-bold text-black dark:text-white">
    //               Company
    //             </h2>
    //             <ul className="">
    //               {company.map((item) => (
    //                   <li key={item.name} {...item} className="mb-3 text-neutral-600 hover:text-black dark:hover:text-neutral-200 dark:text-neutral-400">
    //                     <Link href={item.href} className="hover:underline">
    //                       {item.name}
    //                     </Link>
    //                   </li>
    //               ))}
    //             </ul>
    //           </div>

    //         </div>
    //       </div>
    //       <div className="text-neutral-600 dark:text-neutral-400">
    //         <hr className="mt-6 mb-5 border-neutral-200 sm:mx-auto dark:border-neutral-700 lg:mt-8" />
    //         <div className="flex flex-col px-6 sm:px-0 items-center gap-4 sm:flex-row sm:justify-between text-sm">
    //           <div className="sm:text-center">
    //             © {`${(new Date().getFullYear())} `}
    //             <Link href="/" className="hover:underline">
    //               {siteConfig.company_name}
    //             </Link>{" "}
    //             All Rights Reserved.
    //           </div>
    //           <div className="flex gap-3 text-neutral-600">
    //             <Link href="https://www.linkedin.com/company/reframeai-app"><RiLinkedinBoxFill size={24}/></Link>
    //             <Link href="https://github.com/peterwnjenga/aigent"><RiGithubFill size={24}/></Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </Fragment>

    <div className="w-full mt-12 pb-6">
      <div className="mx-auto px-8 w-fit flex flex-wrap gap-y-4 gap-x-6 md:gap-x-8 items-center justify-center text-sm font-medium text-neutral-500">
        {company.map((item, index) => (
          <div key={index} className="">
            <Link
              href={item.href}
              className="hover:text-neutral-700 relative after:bg-neutral-800 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 after:delay-150"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicFooter;
