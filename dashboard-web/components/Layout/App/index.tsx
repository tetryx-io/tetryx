// @ts-nocheck
import React, { useState } from "react";
import Sidebar from "@/components/Layout/App/SideBar/Left";
import {
  AppProvider,
  useNamespaceContext,
} from "@/components/Pages/context/workspace";
import { clsx } from "clsx";
import Link from "next/link";
import {
  UIStateProvider,
  useUIContext,
} from "@/components/Pages/context/UIContext";
import SidePanel from "@/components/Pages/frame/SidePanel";
import { DataframeProvider } from "@/components/Pages/context/dataframe";
import { siteConfig } from "@/config/site";

const AppBody = ({ children, sideNavOpen }) => {
  const ui_ctx = useUIContext();
  return (
    <div
      className={clsx(
        "w-full",
        ui_ctx.leftCascadeMenuTransform,
        ui_ctx?.leftCascadeMenuOpen ? "" : "-ml-80"
      )}
    >
      <div
        className={
          "h-[calc(100vh_-_1.5rem)] absolute top-0 w-full overflow-y-scroll"
        }
      >
        {children}
      </div>
    </div>
  );
};

const UIBody = ({ children, sideNavOpen }) => {
  return (
    <div
      className={clsx({
        "absolute top-0 overflow-clip h-screen w-screen p-0": true,
      })}
    >
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className={clsx(
        `absolute bottom-0`,
        "flex items-center justify-center",
        "bg-white dark:bg-zinc-900",
        "h-6 w-screen space-x-6",
        "border-t border-gray-900 dark:border-gray-700",
        "text-gray-500 dark:text-gray-400 text-xs"
      )}
    >
      <p>&copy;{siteConfig.company_name} 2023 &middot; All rights reserved.</p>
      <Link href={"/wiki"}>
        <span>📙 Wiki</span>
      </Link>
    </footer>
  );
};

export default ({ children }) => {
  const side_styles = clsx("bg-white dark:bg-zinc-900");
  return (

      <AppProvider>
        <DataframeProvider>
          <UIStateProvider>
            <UIBody>
              <div className="absolute bottom-0 right-1 animate-pulse flex flex-col items-center justify-between">
                <span className="text-xs py-0 px-2 rounded">βeta</span>
              </div>
              <div
                className={" h-[calc(100vh_-_1.5rem)]  w-full flex flex-row"}
              >
                <Sidebar side_styles={side_styles}>
                  <SidePanel />
                </Sidebar>

                <AppBody>{children}</AppBody>
              </div>
              <Footer />
            </UIBody>
          </UIStateProvider>
        </DataframeProvider>
      </AppProvider>

  );
};
