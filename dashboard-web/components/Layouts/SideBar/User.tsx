"use client";

import { AiOutlineLogout } from "react-icons/ai";

import { Float } from "@headlessui-float/react";
import { Popover } from "@headlessui/react";

import { useSupabaseAuth } from "@/lib/supabase/provider/auth";
import { useSupabaseAuth as useAuthUserContext } from "@/lib/supabase/provider/auth";

import _ from "lodash";

const User = () => {
  const { signOut } = useSupabaseAuth();
  const { user }: any = useAuthUserContext();

  return (
    <div className="flex flex-col justify-between items-center py-2 px-1 h-full">
      {user && (
        <Popover>
          {() => (
            <Float
              placement="bottom-end"
              offset={15}
              shift={6}
              flip={10}
              arrow={5}
              portal
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Button className="flex justify-center px-2 py-2 items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded focus:outline-none">
                <div className="flex justify-center items-center p-0">
                  <img
                    className="rounded-full h-12"
                    src={
                      user?.picture ||
                      user.user_metadata?.picture ||
                      "/images/avatar.svg"
                    }
                    alt="Picture of the author"
                  />
                </div>
              </Popover.Button>

              <Popover.Panel className="shadow w-48 h-fit bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg focus:outline-none">
                <div className="flex flex-col justify-center items-center space-y-4 py-4">
                  <div className="flex justify-center items-center p-0">
                    <img
                      className="rounded-full h-12"
                      src={user?.picture || "/images/avatar.svg"}
                      alt="User"
                    />
                  </div>
                  <span className="text-sm font-semibold">{user?.name}</span>
                  <p className="text-xs dark:text-neutral-300">{user?.email}</p>
                </div>
                <button
                  onClick={() => signOut()}
                  className="relative py-3 w-full px-4 flex flex-row justify-between items-center space-x-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded border-t border-neutral-200 dark:border-neutral-700"
                >
                  <span>Logout</span>
                  <AiOutlineLogout className="w-5 h-5" />
                </button>
              </Popover.Panel>
            </Float>
          )}
        </Popover>
      )}
    </div>
  );
};

export default User;
