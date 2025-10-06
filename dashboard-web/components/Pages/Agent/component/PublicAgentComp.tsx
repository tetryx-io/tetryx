"use client";
import { useSupabaseAuth as useAuthUserContext } from "@/lib/supabase/provider/auth";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { installAgent, uninstallAgent } from "@/lib/services/agent";
import "react-loading-skeleton/dist/skeleton.css";
import GetEarlyAccessDialog from "@/components/EarlyAccess/earlyAccess";
import PublicAgentDescription from "@/components/Agent/PublicAgentDescription";
import clsx from "clsx";
import { getAgent } from "@/lib/services/agent";
import { useQueryState } from "nuqs";
import { Dialog, Menu, Tab, Transition, Popover } from "@headlessui/react";
import AgentNotFound from "./AgentNotFound";
import { useNotificationContext } from "@/components/Shared/Notification";
import { SubscriptionOption } from "@/types/agent";
import { formatDistanceToNow } from "date-fns";
import {
  RiFileTextLine,
  RiFilter3Line,
  RiMoreLine,
  RiPlayLine,
  RiPriceTag3Line,
  RiSettingsLine,
  RiShare2Line,
  RiUser3Line,
} from "react-icons/ri";
import {
  __agent_url,
  __agent_name_url,
  getTimeDifferenceString,
} from "@/lib/utils";
import * as Avatar from "@radix-ui/react-avatar";
import {
  TrashIcon,
  Share1Icon,
  PaperPlaneIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useSessionContext } from "@/lib/context/session";
import { triggerPrompt } from "@/lib/services/prompt";
import PricingCard from "./PricingCard";
import { useAgentByPk_ConsumerSubscription } from "@/generated/graphql";
import { debounce } from "lodash";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PublicAgentComponent = ({ agent: initial_agent }: any) => {
  const { user } = useAuthUserContext();
  const [showEarlyAccess, setShowEarlyAccess] = useState<any>(false);
  const [agent_data, set_agent_data] = useState(initial_agent || {}); // Always use the agent data from the server for SSR
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const notifier: any = useNotificationContext();
  const { agent_name } = useParams();
  const containerRef = useRef(null);
  const agent_id = (
    Array.isArray(agent_name) ? agent_name[0] : agent_name
  )?.slice(-16);
  const [activeTab, setActiveTab] = useQueryState("tab");
  const [pendingPrompt, setPendingPrompt] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabOptions = [
    {
      key: "description",
      label: "Description",
      icon: <RiFileTextLine size={20} />,
    },
    {
      key: "runs",
      label: "Runs",
      icon: <RiPlayLine size={20} />,
      count: `${agent_data.run_count}`,
    },
    // { label: 'Reviews', icon: <RiStarLine size={20} />, count: 1 },
    { key: "pricing", label: "Pricing", icon: <RiPriceTag3Line size={20} /> },
  ];
  const defaultTab = searchParams.get("tab") || "description";
  const tabStyles = clsx(
    "px-2.5 py-1.5 focus:outline-0 focus-visible:outline-0 rounded-t-md border-b-2 border-transparent transition-all",
  );

  // Apollo subscriptions and queries
  const {
    data: refreshed_agent_data,
    loading,
    error,
  } = useAgentByPk_ConsumerSubscription({
    variables: { id: agent_id },
    skip: !agent_id,
  });

  useEffect(() => {
    if (refreshed_agent_data?.agent) {
      const mapped_agent_data = {
        ...agent_data,
        ...refreshed_agent_data.agent,
        installation: refreshed_agent_data.agent.installation_list[0]
          ? {
              id: refreshed_agent_data.agent.installation_list[0].id,
              _cr: refreshed_agent_data.agent.installation_list[0]._cr,
            }
          : null,
        product_list: refreshed_agent_data.agent.product_list.map(
          (product) => ({
            ...product,
            trial_period_days: product.trial_period_days,
          }),
        ),
      };
      set_agent_data(mapped_agent_data);
    }
  }, [refreshed_agent_data]);

  const baseDelay = 1_000;

  const hydrateAgent = useCallback(
    debounce(async () => {
      const result = await getAgent({ agent_id });
      if (result?.status) {
        set_agent_data(result.data);
      }
    }, baseDelay),
    [],
  );

  useEffect(() => {
    // Initial hydration when refreshed_agent_data changes
    if (refreshed_agent_data?.agent) {
      hydrateAgent();
    }

    // Set up interval for periodic hydration
    const intervalId = setInterval(() => {
      hydrateAgent();
    }, baseDelay);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [refreshed_agent_data, hydrateAgent]);

  const handleTabChange = (index: number) => {
    const newTab = tabOptions[index].key;
    setActiveTab(newTab);
  };

  // console.log("🐕 pendingPrompt", pendingPrompt, agent_data);

  useEffect(() => {
    if (pendingPrompt && user) {
      setPendingPrompt(false);
      // Run the after the user is logged in.
      triggerNewThread();
    }
  }, [user]);

  const triggerNewThread = async () => {
    if (!user) {
      setShowEarlyAccess(true);
      setPendingPrompt(true);
      return;
    }
    if (!agent_data.installation?.id) {
      setDialogAction("add_to_workspace");
      setIsDialogOpen(true);
      return;
    }
    const result = await triggerPrompt({ agent_id });
    if (result?.status) {
      router.push(
        `${__agent_url(agent_data)}/thread/${result?.data?.thread_id?.replace(/^trd_/, "")}`,
      );
    } else {
      notifier.error({
        title: "Failed to trigger new thread",
        message: result?.message || "Failed to trigger new thread",
      });
    }
  };

  const onInstallAgent = async () => {
    const result = await installAgent({ agent_id: agent_data.id });

    if (result?.status) {
      set_agent_data({ ...agent_data, installed: true });
      notifier.success({
        title: "Agent installed successfully",
      });
      console.log(result.data.id, "result");

      router.push(`${pathname}/setup/${result.data.id}`);
    } else {
      notifier.error({
        title: "Failed to enable agent",
        message: result?.message || "Failed to enable agent",
      });
    }
  };

  const onChoosePlan = async (product: SubscriptionOption) => {
    const result = await installAgent({
      agent_id: agent_data.id,
      product_id: product.id,
    });

    if (result?.status) {
      set_agent_data({ ...agent_data, installed: true });
      notifier.success({
        title: "Agent installed successfully",
      });
      console.log(result.data.id, "result");

      router.push(`${pathname}/setup/${result.data.id}`);
    } else {
      notifier.error({
        title: "Failed to enable agent",
        message: result?.message || "Failed to enable agent",
      });
    }
  };

  const onRemoveAgent = async () => {
    const result = await uninstallAgent({
      agent_id: agent_data.id,
      install_id: agent_data.installation?.id,
    });

    if (result?.status) {
      set_agent_data({ ...agent_data, installed: false });
      notifier.success({
        title: `Agent uninstalled successfully`,
      });
    } else {
      notifier.error({
        title: `Failed to uninstall agent`,
      });
    }
  };

  const copyAgentUrl = async () => {
    navigator.clipboard.writeText(
      `${window.location.origin}${__agent_url(agent_data)}`,
    );
    notifier.success({
      title: "Agent Link Copied!",
    });
  };

  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState<
    "add_to_workspace" | "uninstall"
  >("add_to_workspace");
  const dialogText = {
    add_to_workspace: "add to this agent to your workspace",
    uninstall: "uninstall this agent",
  };

  const openDialog = (action: "add_to_workspace" | "uninstall") => {
    setDialogAction(action);
    setIsDialogOpen(true);
  };

  const handleConfirmAction = () => {
    if (dialogAction === "add_to_workspace") {
      onInstallAgent();
    } else {
      onRemoveAgent();
    }
    setIsDialogOpen(false);
  };

  // console.log("🐕 agent_data", agent_data);

  const startingAt =
    agent_data.product_list.length === 0
      ? "Free Trial"
      : agent_data.product_list[0]?.price_list?.[0]
        ? `$${agent_data.product_list[0].price_list[0].unit_amount / 100} ${
            agent_data.product_list[0].price_list[0].interval_count > 1
              ? `every ${agent_data.product_list[0].price_list[0].interval_count}`
              : "per"
          } ${agent_data.product_list[0].price_list[0].interval}`
        : "Free Trial";
  const trial_period_days = agent_data.product_list[0]?.trial_period_days;
  useEffect(() => {
    const storedPlanId = localStorage.getItem(`selectedPlanId`);
    setSelectedPlanId(storedPlanId);
  }, [agent_id]);

  if (!agent_data || Object.keys(agent_data).length === 0) {
    return <AgentNotFound />;
  }
 
  return (
    <div>
      <div className="grid grid-cols-10 gap-y-10 md:gap-x-10 px-5 md:px-10 w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 col-span-full mt-6 md:mt-10">
          <div className="flex gap-6 items-start">
            <img
              className="flex flex-none object-cover w-[60px] h-[60px] border border-neutral-200 rounded-full"
              src={agent_data.avatar_url}
              alt={agent_data.name}
            />
            <div className="flex flex-col w-full h-[60px] justify-center">
              <div className="text-xl md:text-2xl font-semibold tracking-[-0.015em] mb-[2px]">
                {agent_data.name}
              </div>
              <div className="text-[15px] text-neutral-600">{`Last updated ${formatDistanceToNow(agent_data?._up, { addSuffix: true })}`}</div>
            </div>
          </div>

          <div className="flex gap-4 h-9">
            {!agent_data.enabled && (
              <div className="flex items-center gap-2 text-sm">
                <div className={"h-2.5 w-2.5 rounded-full bg-red-500"} />
                <span className="text-gray-600">Disabled</span>
              </div>
            )}
            <div className="hidden md:flex items-center gap-4 w-full md:w-fit">
              {user && (agent_data.installation?.id || agent_data.can_edit) && (
                <Menu as="div" className="relative hidden md:flex">
                  {({ open }) => (
                    <Menu.Button
                      onClick={() => setIsOptionsMenuOpen(!isOptionsMenuOpen)}
                      className="w-9 h-9 flex p-1 items-center justify-center bg-neutral-100 border rounded-md"
                    >
                      <RiMoreLine size={18} />
                      <Transition as="div">
                        <Menu.Items className="absolute right-0 top-12 z-10 flex flex-col gap-2 bg-white border border-neutral-100 shadow-lg p-3 justify-start rounded-md w-[200px]">
                          <div className="text-sm text-left font-medium text-neutral-400">
                            Options
                          </div>
                          {agent_data.installation?.id && (
                            <Menu.Item>
                              <Link
                                href={`/agent/${agent_name}/setup/${agent_data.installation?.id}`}
                                passHref
                              >
                                <DefaultButton
                                  label="Go to setup"
                                  variant="ghost"
                                  iconLeft={<RiSettingsLine size={18} />}
                                  styleClass="!justify-start text-neutral-600 h-8 hover:bg-neutral-100 hover:text-black font-medium transition-all"
                                />
                              </Link>
                            </Menu.Item>
                          )}
                          {agent_data.installation?.id && (
                            <Menu.Item>
                              <DefaultButton
                                label="Remove agent"
                                variant="ghost"
                                iconLeft={<TrashIcon />}
                                onClick={() => openDialog("uninstall")}
                                styleClass="!justify-start bg-red-50 text-red-600 h-8 hover:bg-red-600 hover:text-white font-medium transition-all"
                              />
                            </Menu.Item>
                          )}
                          {agent_data.can_edit && (
                            <Menu.Item>
                              <Link
                                href={`/studio/build/${__agent_name_url(agent_data)}`}
                                passHref
                              >
                                <DefaultButton
                                  label="Edit agent"
                                  variant="ghost"
                                  iconLeft={<RiSettingsLine size={18} />}
                                  styleClass="!justify-start text-neutral-600 h-8 hover:bg-neutral-100 hover:text-black font-medium transition-all"
                                />
                              </Link>
                            </Menu.Item>
                          )}
                        </Menu.Items>
                      </Transition>
                    </Menu.Button>
                  )}
                </Menu>
              )}
            </div>
            <button
              onClick={copyAgentUrl}
              className="flex gap-2 p-1.5 bg-neutral-100 w-full md:w-9 items-center justify-center border rounded-md hover:bg-atrium-offWhite h-full"
            >
              <Share1Icon />
              <span className="md:hidden">Share</span>
            </button>

            <div className="flex items-center gap-4 w-full md:w-fit">
              <DefaultButton
                label="Run"
                variant="ghost"
                size="custom"
                iconLeft={<PaperPlaneIcon />}
                onClick={triggerNewThread}
                styleClass="h-full w-full bg-black text-white font-semibold rounded-md py-1 md:px-4 md:w-fit"
              />
            </div>
          </div>
        </div>

        <div className="col-span-full lg:col-span-6 transition-all">
          <div className="relative w-full rounded-md overflow-hidden mb-4">
            {(agent_data.banner_list?.length ?? 0) > 0 ? (
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={(agent_data.banner_list?.length ?? 0) > 1}
                showThumbs={true}
                infiniteLoop={true}
                className="w-full custom-carousel-styles"
                renderThumbs={() =>
                  agent_data.banner_list?.map((file) => (
                    <div key={file.id} className="relative group">
                      <div className="aspect-[1.9/1] w-full">
                        {file.file_type?.startsWith("image/") ? (
                          <img
                            src={file.url}
                            alt="thumbnail"
                            className="w-full h-full object-cover"
                          />
                        ) : file.file_type?.startsWith("video/") ? (
                          <video
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                          >
                            <source src={file.url} type={file.file_type} />
                          </video>
                        ) : (
                          <img
                            src="https://atrium-store.s3.amazonaws.com/assets/agent/default-banner.png"
                            alt="Default banner"
                            className="aspect-[1.9/1] object-cover rounded-lg w-full h-full"
                          />
                        )}
                      </div>
                    </div>
                  ))
                }
              >
                {agent_data.banner_list?.map((file) => (
                  <div key={file.id} className="relative group">
                    <div className="aspect-[1.9/1] w-full">
                      {file.file_type?.startsWith("image/") ? (
                        <img
                          src={file.url}
                          alt="thumbnail"
                          className="w-full h-full object-cover"
                        />
                      ) : file.file_type?.startsWith("video/") ? (
                        <video
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                        >
                          <source src={file.url} type={file.file_type} />
                        </video>
                      ) : (
                        <img
                          src="https://atrium-store.s3.amazonaws.com/assets/agent/default-banner.png"
                          alt="Default banner"
                          className="aspect-[1.9/1] object-cover rounded-lg w-full h-full"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <img
                src="https://atrium-store.s3.amazonaws.com/assets/agent/default-banner.png"
                alt="Default banner"
                className="aspect-[1.9/1] object-cover rounded-lg w-full h-full"
              />
            )}
          </div>
        </div>

        <div className="col-span-full lg:col-span-4 transition-all flex flex-col gap-6">
          <div>
            <div className="text-lg font-semibold mb-2">About this agent</div>
            <div className="text-neutral-600 font-normal text-justify leading-relaxed line-clamp-4 xl:line-clamp-6">
              {agent_data.headline}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-1.5 items-center text-neutral-700 font-medium">
              <RiUser3Line size={22} />{" "}
              <span>{agent_data.install_count} subscribers</span>
            </div>{" "}
            {/* agent.install_count */}
            <div className="flex gap-1.5 items-center text-neutral-700 font-medium">
              <RiPlayLine size={22} /> <span>{agent_data.run_count} runs</span>
            </div>{" "}
            {/* agent.run_count */}
          </div>

          <div className="flex py-1.5 px-3 bg-violet-50 w-fit gap-3 items-center rounded-md">
            <RiPriceTag3Line size={22} className="text-purple-600" />
            <div className="text-gradient-purple-1 font-medium">
              {`${startingAt} ${trial_period_days ? `(Try for ${trial_period_days} days free)` : ""}`}
            </div>
          </div>
        
          {/* <div>
              <div className="text-sm font-medium mb-2">Tags</div>
              <div className="flex flex-wrap gap-4">
                {agentTags.map((tag) => (
                  <div key={tag} className="text-sm font-medium border border-neutral-200 flex-none px-3 py-1 h-[30px] text-neutral-700 bg-neutral-100 hover:opacity-80 hover:cursor-pointer rounded capitalize">{tag}</div>
                ))}
              </div>
            </div> */}
        </div>

        <Tab.Group
          selectedIndex={tabOptions.findIndex(
            (tab) => tab.key === activeTab || tab.key === defaultTab,
          )}
          onChange={handleTabChange}
          as={"div"}
          className="col-span-full lg:col-span-6 transition-all relative"
        >
          <hr className="absolute -z-20 top-[46px] w-full border-b" />
          <Tab.List className="flex gap-6 md:gap-10 h-12 relative overflow-x-auto scroll-smooth hide-scrollbar">
            {tabOptions.map((tab) => (
              <Tab
                key={tab.key}
                className={({ selected }) =>
                  `${tabStyles} ${selected ? "font-semibold border-violet-600 text-black" : "font-medium text-neutral-600 hover:text-neutral-700 hover:border-neutral-200 hover:bg-neutral-50"} flex gap-2 items-center focus-none focus-visible:outline-none`
                }
                as={"button"}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab?.count && (
                  <span className="h-6 min-w-6 py-0.5 px-1.5 text-sm rounded-full bg-neutral-100 text-black/50">
                    {tab?.count}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-4">
            <Tab.Panel>
              <PublicAgentDescription
                agent={agent_data}
                containerRef={containerRef}
              />
            </Tab.Panel>
            <Tab.Panel>
              {agent_data.thread_list.length > 0 ? (
                <>
                  <div className="flex gap-6 justify-between items-center mt-6 mb-4">
                    <div className="text-xl font-semibold">Recent activity</div>
                    <button
                      onClick={copyAgentUrl}
                      className="flex gap-2 px-2.5 py-1.5 bg-neutral-50 items-center justify-center border rounded-md hover:bg-atrium-offWhite font-medium text-[15px] h-full"
                    >
                      <RiFilter3Line size={20} />
                      <span className="hidden md:block">Filter</span>
                    </button>
                  </div>
                  {agent_data.thread_list.map((thread, index) => (
                    <ThreadItem
                      key={thread.id}
                      agent_url={__agent_url(agent_data)}
                      thread={thread}
                    />
                  ))}
                </>
              ) : (
                <div className="w-full flex flex-col gap-2 py-24 bg-neutral-50 rounded-lg items-center">
                  {user ? (
                    <p className="font-medium text-neutral-500">
                      This agent has not been run yet
                    </p>
                  ) : (
                    <p className="font-medium text-neutral-500">
                      Please sign in to see recent activity
                    </p>
                  )}
                </div>
              )}
            </Tab.Panel>
            <Tab.Panel className="my-6">
              {agent_data.product_list.length > 0 ? (
                <>
                  <div className="text-xl font-semibold mb-6">
                    Subscription plans
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {agent_data.product_list.map((product, index) => (
                      <PricingCard
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price_list={product.price_list}
                        trial_period_days={product.trial_period_days}
                        features={product?.feature_list?.map((feature) => ({
                          type: feature.type,
                          name: feature.name,
                          is_offered: feature.is_offered,
                          quantity: feature.quantity,
                        }))}
                        onChoosePlan={() => onChoosePlan(product)}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="w-full flex flex-col gap-2 py-12 bg-neutral-50 rounded-lg items-center">
                  <img src={"/images/cubeShadow.svg"} alt="" className="w-16" />
                  <p className="font-medium text-neutral-500">
                    No pricing plans for this agent yet
                  </p>
                </div>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        <div className="col-span-full lg:col-span-4 transition-all">
          <div className="text-lg font-semibold my-2">Creator</div>
          <div className="flex justify-between items-center mt-6 bg-neutral-50 border border-neutral-200 rounded-md p-3">
            <div className="flex items-center">
              <Avatar.Root className="inline-flex mr-4">
                <Avatar.Image
                  src={
                    agent_data.creator?.id
                      ? agent_data.creator.picture
                      : "/atrium/media/agent-creator.png"
                  }
                  alt={
                    agent_data.creator?.id
                      ? agent_data.creator?.name
                      : "Alex Gibley"
                  }
                  className="h-10 w-10 rounded-full object-cover border"
                />
                <Avatar.Fallback className="h-10 w-10 rounded-full flex items-center justify-center bg-[#F5F5F5] text-[#404040] font-semibold border">
                  {(agent_data.creator?.id
                    ? agent_data.creator?.name
                    : "Alex Gibley"
                  )?.charAt(0)}
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="font-semibold">
                {agent_data.creator?.id
                  ? agent_data.creator?.name
                  : "Alex Gibley"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEarlyAccess && (
        <GetEarlyAccessDialog
          user={user}
          chat_id_list={[]}
          show={showEarlyAccess}
          setShow={setShowEarlyAccess}
        />
      )}

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div
          className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4"
          aria-hidden="true"
        >
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
            {dialogAction === "add_to_workspace" ? (
              <>
                <Dialog.Title className="text-lg font-medium mb-2">
                  Add to Workspace Required
                </Dialog.Title>
                <Dialog.Description className="mb-4">
                  <p className="text-neutral-600 mb-2">
                    This agent needs to be added to your workspace before you
                    can start a conversation.
                  </p>
                  <p className="text-neutral-600">
                    Would you like to add it now?
                  </p>
                </Dialog.Description>
              </>
            ) : (
              <>
                <Dialog.Title className="text-lg font-medium mb-2">
                  Confirm Uninstallation
                </Dialog.Title>
                <Dialog.Description className="mb-4">
                  <p className="text-neutral-600">
                    Are you sure you want to uninstall this agent? This will
                    remove it from your workspace.
                  </p>
                </Dialog.Description>
              </>
            )}

            <div className="flex justify-end space-x-2">
              <DefaultButton
                label="Cancel"
                variant="secondary"
                size="small"
                onClick={() => setIsDialogOpen(false)}
              />
              <DefaultButton
                label={
                  dialogAction === "add_to_workspace"
                    ? "Add to Workspace"
                    : "Uninstall"
                }
                variant={
                  dialogAction === "add_to_workspace" ? "primary" : "danger"
                }
                size="small"
                onClick={handleConfirmAction}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

const ThreadItem = ({ thread, agent_url }: any) => {
  return (
    <Link href={`${agent_url}/thread/${thread.id}`} className="block">
      <div
        key={thread.id}
        className="bg-neutral-50 hover:bg-neutral-100 transition-colors rounded-md flex w-full mb-4"
        id={thread.id}
      >
        {/* Agent Chats */}
        <div className="w-full">
          <div className="w-full py-3 px-4">
            <span className="font-semibold w-full">{thread.title}</span>
            {thread.chat_list && thread.chat_list.length > 0 && (
              <div className="flex flex-col w-full">
                <span className="my-2">
                  {
                    thread.chat_list[0].body_richtext.components[0]?.children[0]
                      ?.text
                  }
                </span>
                <div className="text-sm font-medium text-neutral-400">
                  {thread.chat_list[0]._cr &&
                    getTimeDifferenceString(thread.chat_list[0]._cr)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PublicAgentComponent;
