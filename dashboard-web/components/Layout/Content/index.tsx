"use client"
import _ from "lodash";
import Cookies from 'universal-cookie';
import RightSideBar from "./SideBar/Right";
import LeftSideBar from "./SideBar/Left";
import { MdClose } from "react-icons/md";
import { useRouter, usePathname } from "next/navigation";

import AlgoliaSearch from "@/components/Search";

import { DocsProvider, useDocsContext } from "./context";

import { getMember } from "@/lib/services/notionEditService";
import { DocsPage, wikiPage } from "@/lib/constant";
import _get from "lodash/get";
import { useSupabaseAuth as useAuthUserContext } from "@/lib/supabase/provider/auth";

const SearchPanel = ({ children }) => {
  const docs_ctx:any = useDocsContext();
  function handleSearchModel(status) {
    docs_ctx.setShowSearch(status);
    docs_ctx.setShowLeftMenu(false);
  }

  return (
    <div>
      {docs_ctx.showSearch && (
        <div className="search-model justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-999">
          <div className="relative w-auto my-6 model-min-width">
            <div className="search border rounded-lg shadow-lg relative flex flex-col w-full bg-white">
              <div className="flex items-start justify-end px-4 pt-3 border-b">
                <p
                  className="m-0 pb-2"
                  onClick={() => {
                    handleSearchModel(false);
                  }}
                >
                  {" "}
                  <MdClose size={30} />
                </p>
              </div>
              <div className="relative p-5 flex-auto">
                <AlgoliaSearch handleSearchModel={handleSearchModel} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PrivateLayout = ({ children, ...props }) => {
  const docs_ctx:any = useDocsContext();
  const cookies = new Cookies();

  cookies.remove("requestAction");
  const { user } = useAuthUserContext();
  const profile = user?.profile;

  const router = useRouter();
  const pathname = usePathname();

  let  block_id  = pathname;
  if (!block_id) {
    if (pathname === "/docs/") {
      block_id = DocsPage.block_id;
    }
    if (pathname === "/wiki/") {
      block_id = wikiPage.block_id;
    }
  }

  return (
    <DocsProvider>
      <main className="overflow-scroll md:overflow-auto h-screen">
        <div className="relative antialiased text-gray-500 dark:text-gray-400">
          <div
            className={`${
              docs_ctx.showLeftMenu
                ? "reframe-main-container-menu-open"
                : "reframe-main-container"
            }`}
          >
            <div className="max-w-8xl mx-auto">
              <LeftSideBar {...props} />
              <div className="lg:pl-[20rem]">
                <div className="flex flex-row items-stretch">
                  <div className="relative grow mx-auto max-w-3xl xl:max-w-[96rem]">
                    {children}
                  </div>
                  <div className="z-10 hidden xl:flex flex-none pl-0 w-[20rem]">
                    <RightSideBar {...props} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </DocsProvider>
  );
};

export default PrivateLayout;