// @ts-nocheck
import React, { useState } from "react";
import LinkTree from "@/components/Common/LinkTree";
import { HiRefresh } from "react-icons/hi";
import { MdOutlineHelp } from "react-icons/md";

import Loader from "@/components/Common/AtriumLoader";
import { useDocsContext } from "@/components/Layout/Content/context";

import axios from "axios";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { LogoLarge } from "@/components/Common/Logo";
import clsx from "clsx";
import _ from "lodash";
import OmniLink from "@/components/Shared/omnilink";
import { MixIcon } from "@radix-ui/react-icons";
import { getPageTreeTableOfContents, getPageTitle } from "@/lib/notion";
import { useSupabaseAuth as useAuthUserContext } from "@/lib/supabase/provider/auth";
import _get from "lodash/get";
import { useSupabaseAuth } from "@/lib/supabase/provider/auth";

const SearchButton = ({ onClick, onKeyDown }) => {
  const onKeyDownHandler = (e) => {
    console.log(e.key);
    // if (e.key === "Escape") {
    //   handleSearchPanel(false);
    // } if (e.key === 'k' && e.metaKey) {
    //   handleSearchPanel(true)
    // }
  };

  return (
    <button
      type="button"
      onKeyDown={onKeyDownHandler}
      onClick={onClick}
      data-menu="search"
      className="md:w-full order-2 lg:order-1"
    >
      <div className=" flex group items-center justify-between bg-surface-100 bg-opacity-75 hover:bg-surface-200 hover:bg-opacity-100 border transition border-scale-500 pl-1.5 md:pl-3 pr-1.5 w-full h-[32px] rounded text-lighter ">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sbui-icon "
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p className="hidden md:flex text-sm">Search docs...</p>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <div className="md:flex items-center justify-center h-5 w-10 border rounded bg-surface-300 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sbui-icon "
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
            <span className="text-[12px]">K</span>
          </div>
        </div>
      </div>
    </button>
  );
};

const LeftSideBar = ({ page, page_menu, base_page_config, ...props }:any) => {
  // const {page, page_menu, base_page_config } = dataList
  const { user }: any = useAuthUserContext();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const docs_ctx = useDocsContext();

  const page_title = getPageTitle(page);
  const page_icon = _.get(page, ["raw", "page", "icon"], {});

  const data = getPageTreeTableOfContents(_.get(page, "raw.children", []));

  const updateMenu = () => {
    try {
      setLoading(true);
      axios
        .put("/api/menu", {
          id: base_page_config.root_block_id,
          path: base_page_config.path,
        })
        .then((data) => {
          setLoading(false);
        });
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

  function handleSearchPanel(status) {
    docs_ctx.setShowSearch(true);
    docs_ctx.setShowLeftMenu(false);
  }

  const onKeyDownHandler = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      handleSearchPanel(false);
    }
    if (e.key === "k" && e.metaKey) {
      handleSearchPanel(true);
    }
  };

  let DesktopPane = () => {
    return (
      <div
        className={
          "md:block hidden w-80 flex flex-col border-r border-slate-200 h-screen fixed top-0 left-0 z-10"
        }
      >
        <div className="w-full border-b hidden md:block">
          <div className={"py-3 m-auto w-28 h-12"}>
            <LogoLarge href={"/"} className="h-12 md:h-8 w-16" />
          </div>

          <div
            className={clsx(
              "py-4 space-x-2 h-18 w-full flex flex-row items-center justify-between px-2"
            )}
          >
            <OmniLink
              href={"/articles"}
              className={"space-y-1.5 flex flex-col items-center underline"}
            >
              <img
                src={"/icon/icons8-wiki.svg"}
                alt="Articles"
                className="h-6 md:h-6 w-6"
              ></img>
              <span>Articles</span>
            </OmniLink>
            <OmniLink
              href={"/docs"}
              className={"space-y-1.5 flex flex-col items-center underline"}
            >
              <img
                src={"/icon/icons8-document.svg"}
                alt="Docs"
                className="h-6 md:h-6 w-6"
              ></img>
              <span>Docs</span>
            </OmniLink>
            <OmniLink
              href={"/use-case/"}
              className={"space-y-1.5 flex flex-col items-center underline"}
            >
              <MixIcon className="h-6 md:h-6 w-6" />
              <span className={"inline-flex"}>Use Cases</span>
            </OmniLink>
            <OmniLink
              external
              href={"https://github.com/peterwnjenga/reframe"}
              className={"space-y-1.5 flex flex-col items-center underline"}
            >
              <img
                src={"/icon/icons8-github.svg"}
                alt="Docs"
                className="h-6 md:h-6 w-6"
              ></img>
              <span>Git</span>
            </OmniLink>
          </div>
        </div>
        <div className="mt-4 w-full px-4">
          <div className="mb-6">
            <SearchButton
              onKeyDown={onKeyDownHandler}
              onClick={() => handleSearchPanel(true)}
            />
          </div>
          <div className={"inline-flex items-center space-x-2 my-3"}>
            {(() => {
              switch (_.get(page_icon, "type")) {
                case "emoji":
                  return <span>{page_icon.emoji} </span>;
                default:
                  return <p>***</p>;
              }
            })()}
            <Link href={"#top"}>
              <h1 className={"text-md font-bold"}>{page_title}</h1>
            </Link>
          </div>

          {page_menu && <LinkTree data={page_menu.menus} />}
        </div>
        {user && user?.user_metadata?.admin && (
          <div className="absolute bottom-0 w-full flex mx-auto py-3 justify-between border-t">
            <button
              onClick={updateMenu}
              className="reframe-icon-btn inline-flex"
            >
              <HiRefresh size={25} />{" "}
              {loading ? (
                <Loader />
              ) : (
                <span className="ml-2">Refresh Menu</span>
              )}
            </button>
            <button className="ml-4">
              <MdOutlineHelp size={30} />
            </button>
          </div>
        )}
      </div>
    );
  };

  let MobilePane = () => {
    return (
      <div className="fixed sm:hidden supports-backdrop-blur:bg-white/95 w-full top-0 left-0 z-10 max-w-8xl mx-auto lg:border-b lg:border-gray-500/5">
        <div className="py-5 lg:py-4 lg:px-12 border-b border-gray-500/10 lg:border-0 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <div className="flex-1 flex items-center space-x-4">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600"
              >
                <span className="sr-only">Navigation</span>
                <svg
                  className="h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                </svg>
              </button>
              <LogoLarge href={"/"} className="w-32 h-7 relative" />
            </div>
            <div className="relative flex-none bg-white lg:w-64 xl:w-96 pointer-events-auto rounded-md">
              <button
                type="button"
                className="hidden w-full lg:flex items-center text-sm leading-6 rounded-md py-1.5 pl-2 pr-3 zinc-box bg-white ring-1 ring-gray-400/20 hover:ring-gray-600/25 focus:outline-primary"
              >
                <svg className="h-4 w-4 ml-1 mr-3 flex-none bg-gray-500 hover:bg-gray-600"></svg>
                Search...
                <span className="ml-auto flex-none text-xs font-semibold">
                  ⌘K
                </span>
              </button>
            </div>
            <button
              type="button"
              className="ml-auto text-gray-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-gray-600 lg:hidden"
            >
              <span className="sr-only">Search</span>
              <svg className="h-4 w-4 bg-gray-500 hover:bg-gray-600"></svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <DesktopPane />
      <MobilePane />
    </>
  );
};

export default LeftSideBar;