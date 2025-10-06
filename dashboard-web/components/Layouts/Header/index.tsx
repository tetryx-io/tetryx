"use client";

import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { Menu, Transition, Switch, Popover } from "@headlessui/react";
import { Fragment, useEffect, useState, useCallback } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import GetEarlyAccessDialog from "@/components/EarlyAccess/earlyAccess";
import Logo from "@/components/Shared/Logo";
import { useSessionContext } from "@/lib/context/session";
import { useTetryxAuth } from "@/lib/providers/auth";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  RiArrowDownSLine,
  RiFlashlightFill,
  RiSettings3Line,
  RiExpandUpDownFill,
} from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { switchWorkspace, setDevMode } from "@/lib/services/workspace";
import { CodeSandboxLogoIcon } from "@radix-ui/react-icons";
import { useNotificationContext } from "@/components/Shared/Notification";

import "react-loading-skeleton/dist/skeleton.css";
import { PiCodesandboxLogo } from "react-icons/pi";

const MenuButtonClsx = clsx(
  "font-medium text-neutral-600 flex w-full !justify-start px-3 py-2 hover:bg-neutral-100",
);

const PublicHeader = () => {
  const { user, loading, authenticated, signOut } = useTetryxAuth();
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState([""]);
  const [showEarlyAccess, setShowEarlyAccess] = useState<any>(false);
  const { session } = useSessionContext();

  const pathName = usePathname();

  useEffect(() => {
    setCurrentUrl(pathName.split("/").filter((path) => path));
  }, [pathName]);

  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathIsStudio = pathName.slice(0, 7) === "/studio";
  const onBuildPath = pathName.slice(0, 14) === "/studio/build/";
  const onAgentSetupPage =
    pathName.split("/")[1] === "agent" && pathName.split("/")[3] === "setup";
  const onChatPage = pathName.split("/")[3] === "thread";

  const LoadingSkeletons = () => (
    <div className="flex items-center space-x-4">
      <Skeleton count={1} height={30} width={70} />
      <Skeleton count={1} height={30} width={120} />
    </div>
  );

  const AuthButtons = () => (
    <div className="flex items-center space-x-4">
      {/* <a href="/auth/login"> */}
      <DefaultButton
        label="Sign in"
        variant="ghost"
        size="medium"
        styleClass="text-sm hidden xl:flex gap-2 rounded-md flex-none items-center justify-center transition-all text-neutral-700 bg-neutral-100 border border-neutral-200 hover:bg-atrium-offWhite hover:text-black font-medium px-4 py-2 h-8"
        onClick={() => {
          sessionStorage.removeItem("promptData");
          setShowEarlyAccess(true);
        }}
      />
      {/* </a> */}
      <a href="/auth/signup">
        <DefaultButton
          label="Get Access"
          size="medium"
          iconLeft={<RiFlashlightFill size={16} />}
          styleClass="h-8 font-semibold gradient-purple-1"
          onClick={() => sessionStorage.removeItem("promptData")}
        />
      </a>
    </div>
  );

  const UserMenu = () => {
    const [showWorkspaces, setShowWorkspaces] = useState(false);

    const handleSwitchWorkspace = async (workspaceId: string) => {
      // Stub API call
      console.log(`Switching to workspace ${workspaceId}`);
      // TODO: Implement actual API call
      // setShowWorkspaces(false);
      const response = await switchWorkspace(workspaceId);
      console.log("response", response);
    };

    const workspaces = session?.data?.user?.workspace_list || [];
    const currentWorkspace = session?.data?.workspace;
    // console.log("session", session);

    return (
      <div className="relative flex items-center gap-2">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full object-cover border"
                  src={
                    session?.data?.user?.picture
                      ? session?.data?.user?.picture
                      : session?.data?.user?.user_metadata?.avatar_url
                        ? session?.data?.user?.user_metadata?.avatar_url
                        : "/images/avatar.svg"
                  }
                  alt="Profile"
                />

                <div className="hover:bg-neutral-100 p-0.5 rounded">
                  <RiArrowDownSLine
                    size={18}
                    className={`transition-all ${open && "rotate-180 transform"
                      }`}
                  />
                </div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="w-[264px] absolute right-[-4px] top-14 z-10 flex flex-col gap-5 bg-white shadow rounded-md text-sm">
                  <AnimatePresence
                  // mode="wait"
                  >
                    <motion.div
                      initial={{ x: 0, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-100%", opacity: 0 }}
                      transition={{ type: "tween", duration: 0.5 }}
                    >
                      <div className="flex flex-col gap-y-2 p-3">
                        <div className="flex items-center">
                          <img
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full object-cover"
                            src={
                              session?.data?.user?.picture
                                ? session?.data?.user?.picture
                                : session?.data?.user?.user_metadata
                                  ?.avatar_url
                                  ? session?.data?.user?.user_metadata
                                    ?.avatar_url
                                  : "/images/avatar.svg"
                            }
                            alt="Profile"
                          />
                          {session?.data?.user ? (
                            <div className="ml-3 flex-col items-start text-left">
                              <p className="text-base font-semibold">
                                {session?.data?.user?.name}
                              </p>
                              <div className="flex gap-2 items-center">
                                <p className="text-sm font-medium text-neutral-500 m-0 p-0 text-left">
                                  {session.data?.user?.email}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <Skeleton count={1} height={24} width={80} className="ml-4"/>
                          )}
                        </div>
                        {workspaces.length > 1 ? (
                          <>
                            <hr className="my-1" />
                            <div className="font-medium text-xs text-neutral-400 mb-1 uppercase">Workspaces</div>
                            <div
                              className="px-2 py-1.5 rounded-md hover:bg-neutral-50 cursor-pointer"
                              onClick={() => setShowWorkspaces(!showWorkspaces)}
                              onMouseEnter={() => {
                                clearTimeout((window as any).workspaceTimeout);
                                (window as any).workspaceTimeout = setTimeout(() => {
                                  setShowWorkspaces(true);
                                }, 400);
                              }}
                              onMouseLeave={() => {
                                clearTimeout((window as any).workspaceTimeout);
                                setShowWorkspaces(false);
                              }}
                              onFocus={() => setShowWorkspaces(true)}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  {currentWorkspace?.image_key && (
                                    <img
                                      width={24}
                                      height={24}
                                      className="h-6 rounded object-cover border border-neutral-200 flex-shrink-0"
                                      src={currentWorkspace.image_key}
                                      alt={currentWorkspace.name}
                                    />
                                  )}
                                  <div className="">
                                    <span className="text-sm font-medium text-neutral-800">
                                      {currentWorkspace?.name}
                                    </span>
                                    <p className="text-xs text-neutral-500 uppercase truncate">
                                      {currentWorkspace?.role}
                                    </p>
                                  </div>
                                </div>
                                <RiExpandUpDownFill size={16} />
                              </div>

                              <AnimatePresence>
                                {showWorkspaces && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-4"
                                  >
                                    <div className="flex flex-col gap-2 font-semibold overflow-y-auto max-h-[300px]">
                                      {workspaces
                                        .filter(workspace => currentWorkspace?.id !== workspace.workspace.id)
                                        .map((workspace) => (
                                          <button
                                            key={workspace.id}
                                            className="flex items-center text-neutral-800 gap-2 p-2 rounded-md text-left transition-all hover:bg-atrium-offWhite"
                                            onClick={() => handleSwitchWorkspace(workspace.workspace.id)}
                                          >
                                            <img
                                              width={24}
                                              height={24}
                                              className="rounded flex-shrink-0"
                                              src={
                                                workspace.workspace.image_key
                                                  ? workspace.workspace.image_key
                                                  : "/images/avatar.svg"
                                              }
                                              alt={workspace.workspace.name}
                                            />
                                            <div className="flex-grow min-w-0">
                                              <p className="font-medium text-neutral-800 truncate">
                                                {workspace.workspace.name}
                                              </p>
                                              <p className="text-xs text-neutral-500 truncate capitalize">
                                                {workspace.role}
                                              </p>
                                            </div>
                                          </button>
                                        ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <hr className="my-1" />
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md">
                              {currentWorkspace?.image_key && (
                                <img
                                  width={20}
                                  height={20}
                                  className="rounded flex-shrink-0"
                                  src={currentWorkspace.image_key}
                                  alt={currentWorkspace.name}
                                />
                              )}
                              <div className="">
                                <span className="text-sm font-medium text-neutral-700">
                                  {currentWorkspace?.name}
                                </span>
                                <p className="text-xs text-neutral-500 uppercase truncate">
                                  {currentWorkspace?.role}
                                </p>
                              </div>
                            </div>
                            <hr className="my-1" />
                          </>
                        )}

                        <div className="flex flex-col gap-2">
                          <Link href="/settings/general">
                            <DefaultButton
                              label="Settings"
                              variant="ghost"
                              size="custom"
                              // iconLeft={<RiSettings3Line size={20} />}
                              styleClass={MenuButtonClsx}
                            />
                          </Link>

                          <Link href="/history">
                            <DefaultButton
                              label="History"
                              variant="ghost"
                              size="custom"
                              styleClass={MenuButtonClsx}
                            />
                          </Link>

                          <DefaultButton
                            label="Logout"
                            onClick={() => signOut()}
                            variant="ghost"
                            size="custom"
                            styleClass="font-medium text-red-600 !justify-start px-3 py-2 hover:bg-red-50"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    );
  };

  const StudioMenu = () => {
    const notifier: any = useNotificationContext();
    const { session } = useSessionContext();

    const toggleDebug = useCallback(
      async (checked: boolean) => {
        try {
          const response = await setDevMode(checked);
          if (response?.status) {
            notifier.success({
              message: `Successfully ${checked ? "enabled" : "disabled"} development mode`,
            });
          }
        } catch (error) {
          console.error("Failed to toggle development mode:", error);
        }
      },
      [notifier],
    );

    return (
      <div className="flex h-8 items-center">
        <Popover className="relative">
          <Popover.Button as={Link}
            href="/studio"
            className={clsx(
              "flex items-center gap-1.5 px-3 h-full text-sm font-medium transition-colors",
              session?.data?.is_in_dev_mode
                ? "text-atrium-orange"
                : "text-neutral-700",
              pathName.split("/")[1] === "/studio/" && "bg-neutral-100 opacity-80 cursor-not-allowed"
            )}
          >
            {session?.data?.is_in_dev_mode && (
              <CodeSandboxLogoIcon className="h-4 w-4 animate-[pulse_2s_ease-in-out_infinite] hover:animate-none" />
            )}

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
            <Popover.Panel className="absolute left-0 z-10 mt-2 w-72 transform">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-white p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-atrium-orange">
                      <PiCodesandboxLogo size={20} />
                      <span className="font-medium">Development Mode Active</span>
                    </div>
                    <p className="text-sm text-neutral-600">
                      Your agent is currently running in development mode. Changes won't affect your production environment.
                    </p>
                    <a
                      href="https://docs.tetryx.io/dev-mode/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-atrium-orange hover:text-atrium-orange/80 font-medium flex items-center gap-1"
                    >
                      Learn more about dev mode
                      <ArrowRightIcon
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <Link
          href="/studio"
          className={clsx(
            "flex items-center px-3 h-full rounded-md hover:bg-neutral-100",
            pathName.split("/")[1] === "/studio/" && "bg-neutral-100 opacity-80 cursor-not-allowed"
          )}
        >
          Studio
        </Link>
        <Menu as="div" className="relative h-full">
          {({ open }) => (
            <>
              <Menu.Button className="h-full flex items-center">
                <div className={clsx(
                  "p-1 rounded transition-colors outline-none -ml-px",
                  session?.data?.is_in_dev_mode
                    ? "text-atrium-orange hover:bg-atrium-orange/10"
                    : "hover:bg-neutral-100"
                )}>
                  <RiArrowDownSLine
                    size={18}
                    className={`${open && 'rotate-180'} transition-all duration-200`}
                  />
                </div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-1 w-56 p-3 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <div className="px-3 py-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[15px] font-semibold text-neutral-600">
                            Dev Mode
                          </span>
                          <Switch
                            checked={session?.data?.is_in_dev_mode || false}
                            onChange={toggleDebug}
                            className={`${session?.data?.is_in_dev_mode ? "bg-atrium-orange" : "bg-neutral-200"
                              } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-atrium-orange/20`}
                          >
                            <span
                              className={`${session?.data?.is_in_dev_mode ? "translate-x-5" : "translate-x-1"
                                } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                            />
                          </Switch>
                        </div>
                      </div>
                    )}
                  </Menu.Item>

                  <hr className="my-1" />

                  <div className="flex flex-col gap-1 mt-3 text-sm">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/developers"
                          className={`${active ? 'bg-neutral-50' : ''
                            } block px-3 py-2 rounded-md text-neutral-700 hover:bg-neutral-100`}
                        >
                          Developers
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/editor/playground/"
                          className={`${active ? 'bg-neutral-50' : ''
                            } block px-3 py-2 rounded-md text-neutral-700 hover:bg-neutral-100`}
                        >
                          Playground
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="https://docs.tetryx.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${active ? 'bg-neutral-50' : ''
                            } block px-3 py-2 rounded-md text-neutral-700 hover:bg-neutral-100`}
                        >
                          Documentation
                        </Link>
                      )}
                    </Menu.Item>
                  </div>

                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    );
  };

  return (
    <>
      <header
        className={`w-full fixed z-50 transition-any ${scrollYPosition > 60
          ? "h-20"
          : pathIsStudio || onAgentSetupPage || onChatPage
            ? ""
            : "h-20 sm:px-4 md:px-10 sm:pt-4"
          }`}
      >
        {session?.data?.is_in_dev_mode && (pathIsStudio || onChatPage || onAgentSetupPage) && (
          <motion.div
            className="dev-mode bg-atrium-orange w-full py-2 relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="absolute top-[6px] left-6 flex w-fit">
              <div className="uppercase bg-black/40 rounded text-white text-xs font-semibold px-1.5 py-1 h-fit">Dev Mode</div>
            </div>
            <div className="hidden md:block mx-auto w-fit text-sm">You're now interacting with agents in a development environment</div>
          </motion.div>
        )}
        <div
          className={`atrium-header max-w-[1920px] mx-auto ${scrollYPosition < 60 && "sm:rounded-md mx-auto"}`}
        >
          <div className="flex items-center gap-6 h-8">
            <Logo />
            <nav
              aria-label="breadcrumb"
              className="hidden md:flex ml-1 font-inter font-medium items-center gap-5 h-full"
            >
              <div className="w-1 h-4/6 border-l border-neutral-300 mr-3"></div>
              {!loading && user &&
                <Link
                  href="/home"
                  className={clsx(
                    "flex items-center px-3 h-full rounded-md hover:bg-neutral-100",
                    pathName === "/home/" && "bg-neutral-100 opacity-80 cursor-not-allowed"
                  )}
                >
                  Home
                </Link>
              }
              {!user && <>
                <Link
                  href="/developers"
                  className={clsx(
                    "flex items-center px-3 h-full rounded-md hover:bg-neutral-100",
                    pathName === "/developers/" && "bg-neutral-100 opacity-80 cursor-not-allowed"
                  )}
                >
                  Developers
                </Link>
                <Link
                  href="https://docs.tetryx.io"
                  className="flex items-center px-3 h-full rounded-md hover:bg-neutral-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Docs
                </Link>
                <Link
                  href="/articles"
                  className="hidden lg:flex items-center px-3 h-full rounded-md hover:bg-neutral-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Articles
                </Link>
              </>}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {loading ? (
              <LoadingSkeletons />
            ) : user ? (
              <>

                <div className="flex items-center gap-6">
                  <StudioMenu />
                  <div className="h-8 w-px bg-neutral-200" />
                  <UserMenu />
                </div>
              </>
            ) : (
              <AuthButtons />
            )}
          </div>
        </div>
        {showEarlyAccess && (
          <GetEarlyAccessDialog
            show={showEarlyAccess}
            setShow={setShowEarlyAccess}
          />
        )}
      </header>
    </>
  );
};

export default PublicHeader;
