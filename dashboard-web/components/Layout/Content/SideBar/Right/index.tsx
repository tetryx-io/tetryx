"use client"
import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  EnterIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Comment from "@/components/Comment";
import { Mixpanel } from "@/lib/mixpanel";
import { clsx } from "clsx";
import _ from "lodash";
import { getPageAuthors, getPageTreeTableOfContents } from "@/lib/notion";
import OmniLink from "@/components/Shared/omnilink";
import LinkTree from "@/components/Common/LinkTree";
import { useTetryxAuth as useSupabaseAuth } from "@/lib/providers/auth";
import { useTetryxAuth as useAuthUserContext } from "@/lib/providers/auth";

const RightSideBar = ({ page, ...props }:any) => {
  const router = useRouter()
  const { signOut } = useSupabaseAuth()
  const { user } = useAuthUserContext()

  const [pageAuthors, setPageAuthors] = useState<any>(null)
  const [pageTitles, setPageTitles] = useState<any>(null)

  useEffect(() => {
    const authors = getPageAuthors(page);
    const titles = getPageTreeTableOfContents(_.get(page, "raw.children", []));
    setPageTitles(titles)
    setPageAuthors(authors)
  }, [page])

  return (
    <aside
      className={
        "fixed  leading-6 w-full h-screen overflow-y-auto md:block  border-l dark:border-slate-600 flex flex-col px-4 min-h-screen"
      }
    >
      <div className="items-center justify-end border-b px-0 md:px-2">
        {!user ? (
          <div className={"flex h-full  flex-row justify-between items-center"}>
            <Link
              href="/auth/login"
              className={
                "group backdrop-blur flex-none transition-colors duration-500 supports-backdrop-blur:bg-white/60 bg-zinc-50 hover:bg-zinc-200 border border-slate-100 dark:bg-zinc-900 dark:border-slate-800 py-2 px-2 rounded text-gray-800 dark:text-gray-200"
              }
            >
              <div className=" inline-flex items-center justify-center space-x-2 w-24">
                <span>Sign In</span>
                <EnterIcon
                  className={
                    "hidden group-hover:block duration-300 text-gray-800 dark:text-gray-200"
                  }
                />
              </div>
            </Link>
            <OmniLink
              external
              href="/auth/signup"
              className={"py-2"}
            >
              <div className="group backdrop-blur flex-none transition-colors duration-500 supports-backdrop-blur:bg-white/60 bg-zinc-50 hover:bg-zinc-200 border border-slate-100 dark:bg-zinc-900 dark:border-slate-800 py-2 px-2 rounded text-gray-800 dark:text-gray-200">
                <span>Get Started</span>
              </div>
            </OmniLink>
          </div>
        ) : (
          <div
            className={"py-2 flex flex-row w-full items-center justify-between"}
          >
            <Link
              href="/auth/signup"
              className={
                "group backdrop-blur flex-none transition-colors duration-500 supports-backdrop-blur:bg-white/60 bg-zinc-50 hover:bg-zinc-200 border border-slate-100 dark:bg-zinc-900 dark:border-slate-800 py-2 px-2 rounded text-gray-800 dark:text-gray-200"
              }
            >
              <div className=" inline-flex items-center justify-center space-x-2">
                <span>Reframe Studio</span>
                <EnterIcon
                  className={
                    "hidden group-hover:block duration-300  text-gray-800 dark:text-gray-200"
                  }
                />
              </div>
            </Link>
            <div className="h-full">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? "" : "text-opacity-90"}
                group  inline-flex items-center border-l border-slate-200 px-1 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span>
                        <div className="w-10">
                          <span>
                            <span></span>
                            <img
                              alt="User"
                              sizes="100vw"
                              src={user?.picture ? user.picture : '/images/avatar.svg'}
                              decoding="async"
                              data-nimg="responsive"
                              className="dark:border-dark"
                            />
                          </span>
                        </div>
                      </span>
                      <ChevronDownIcon
                        className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute w-48 left-0 z-10 mt-2 -translate-x-24 transform px-4 sm:px-0 lg:max-w-xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-3 bg-white p-2 lg:grid-cols-2">
                            <div className="cursor-pointer">
                              <div className="flex items-center gap-3">
                                <div className="w-10">
                                  <span>
                                    <span></span>
                                    <img
                                      alt="User"
                                      sizes="100vw"
                                      src={user?.picture ? user.picture : '/images/avatar.svg'}
                                      decoding="async"
                                      data-nimg="responsive"
                                      className="dark:border-dark"
                                    />
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-scale-1200 mb-0 text-sm text-gray-700 dark:text-gray-200">
                                    {user.name}
                                  </span>
                                  <span className="text-scale-900 mb-0 text-xs text-gray-700 dark:text-gray-200">
                                    {user.email}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4">
                            <button
                              onClick={() => signOut()}
                              className={
                                "group flex-none transition-colors duration-500 supports-backdrop-blur:bg-white/60 bg-zinc-50 hover:bg-zinc-200 border border-slate-100 dark:bg-zinc-900 dark:border-slate-800 py-2 px-2 rounded text-gray-800 dark:text-gray-200"
                              }
                            >
                              <div className=" inline-flex items-center justify-center space-x-2 w-24">
                                <span>Sign Out</span>
                                <ExitIcon
                                  className={
                                    "hidden group-hover:block duration-300 text-gray-800 dark:text-gray-200"
                                  }
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 w-full flex flex-col items-center justify-center">
        {_.map(pageAuthors, (author, index) => (
          <div key={index} className="mr-4 w-max my-4">
            <OmniLink external className="cursor-pointer" href={author.url}>
              <div className="flex items-center gap-3">
                <div className="w-10">
                  <span>
                    <span></span>
                    <img
                      alt="User"
                      sizes="100vw"
                      src={user?.picture ? user.picture : '/images/avatar.svg'}
                      decoding="async"
                      data-nimg="responsive"
                      className="dark:border-dark"
                    />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-scale-1200 mb-0 text-sm text-gray-700 dark:text-gray-200">
                    {author.name}
                  </span>
                  <span className="text-scale-900 mb-0 text-xs text-gray-700 dark:text-gray-200">
                    {author.role}
                  </span>
                </div>
              </div>
            </OmniLink>
          </div>
        ))}
      </div>
      {
        pageTitles?.length && <LinkTree data={pageTitles} />
      }
      

      {!user && (
        <div
          className={clsx(
            "mt-20 h-fill w-fill bg-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-500",
            "shadow rounded p-3 hover:shadow-lg transition-shadow duration-300",
            "z-30 sticky top-0 w-full backdrop-blur flex-none transition-colors duration-500 supports-backdrop-blur:bg-white/60",
            "dark:text-white dark:bg-zinc-900/60"
          )}
        >
          <div className="w-full flex flex-row justify-center items-center space-x-4 my-4">
            <img
              className="h-8 w-8 rounded-full"
              src="/reframe-sq-dark.svg"
              alt=""
            />
            <p className="p-0 font-medium">Reframe Studio (Beta) 🔮</p>
          </div>
          <div>
            <p>
              Start using AI Agents to automate your workflows and save time.
            </p>
            <span
              onClick={() => {
                console.log("Mixpanel", Mixpanel);
                Mixpanel.track("Button | Reframe Cloud (Beta)", {});
                router.push("/auth/signup");
              }}
            >
              <OmniLink
                external
                href="/auth/signup"
                className="w-48 group my-4 flex flex-row justify-center items-center space-x-4 transition ease-in-out delay-150"
              >
                <span className={"underline"}>Get early access</span>
                <ArrowRightIcon
                  className={
                    "w-6 group-hover:translate-x-2 duration-300 rounded"
                  }
                />
              </OmniLink>
            </span>
          </div>
        </div>
      )}
      {/* <div className="absolute bottom-40 px-1">
        <Comment />
      </div> */}
    </aside>
  );
};

export default RightSideBar;
