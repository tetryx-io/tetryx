"use client";
import React, { useEffect, useState } from "react";
import { useTetryxAuth as useAuthUserContext } from "@/lib/providers/auth";
import { useParams, usePathname, useRouter } from "next/navigation";
import { installAgent, uninstallAgent } from "@/lib/services/agent";
import "react-loading-skeleton/dist/skeleton.css";
import { useNotificationContext } from "@/components/Shared/Notification";
import AgentSetupSidePanel from "@/components/AgentSetupSidePanel/Panel";
import Link from "next/link";
import { __agent_url } from "@/lib/utils";
import { Dialog, Menu, Tab, Transition } from "@headlessui/react";
import { TrashIcon } from "@radix-ui/react-icons";
import PricingSection from "./PricingSection";
import { useQueryState } from "nuqs";
import axiosApiInstance from "@/lib/services/request";
import { triggerPrompt } from "@/lib/services/prompt";
import {
  RiArrowLeftLine,
  RiExternalLinkLine,
  RiFolderOpenLine,
  RiMoreLine,
  RiPriceTag3Line,
  RiCodeLine,
  RiCalendarLine,
  RiWebhookLine,
} from "react-icons/ri";
import {
  PaperPlaneIcon,

  DownloadIcon,
  PlusIcon,
} from "@radix-ui/react-icons";

import DefaultButton from "@/components/Shared/Button/DefaultButton";
import clsx from "clsx";

import Loader from "@/components/Common/AtriumLoader";
import { useAgentInstallationByPkSubscription, useAgentInstallationVariablesSubscription } from "@/generated/graphql";
import UploadPanel from "@/components/Common/UploadPanel";
import { formatDistanceToNow } from "date-fns";
import VariablesSection from "./VariablesSection";
import ListSchedule from "./schedule/ListSchedule";
import ListWebhook from "./webhook/ListWebhook";
const SetupAgent = ({ agent }: any) => {
  const { user } = useAuthUserContext();
  const [agent_data, set_agent_data] = useState(agent || {});
  const { agent_name } = useParams();
  const agent_id = (
    Array.isArray(agent_name) ? agent_name[0] : agent_name
  )?.slice(-16);
  const notifier: any = useNotificationContext();
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethodsLoading, setPaymentMethodsLoading] = useState(true);
  // Query based on the installation id
  const { agent_installation: agent_installation_id } = useParams();
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const [fileUploadLoad, setFileUploadLoad] = useState(false);
  const [filesIds, setFileIds] = useState<any>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);

  const openDialog = (action: "add_to_workspace" | "uninstall") => {
    setIsDialogOpen(true);
  };

  const onRemoveAgent = async () => {
    const result = await uninstallAgent({
      agent_id: agent_data.id,
      install_id: agent_data.installation?.id,
    });

    if (result?.status) {
      notifier.success({
        title: `Agent removed successfully`,
      });
      console.log(`${__agent_url(agent_data)}`);
      router.push(`${__agent_url(agent_data)}`);
    } else {
      notifier.error({
        title: `Failed to remove agent`,
      });
    }
  };

  const handleConfirmAction = () => {
    onRemoveAgent();
    setIsDialogOpen(false);
  };

  const {
    data: agent_installation,
    loading: agent_installation_loading,
    error: agent_installation_error,
  } = useAgentInstallationByPkSubscription({
    variables: {
      id: agent_installation_id as string,
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosApiInstance.get(
          `/billing/customer/list_payment_methods`,
        );
        setPaymentMethods(response.data.payment_methods.data);
      } catch (err) {
        console.error(err);
        notifier.error({
          title: "Failed to load payment information",
        });
      } finally {
        setPaymentMethodsLoading(false);
      }
    })();
  }, [paymentMethodsLoading]);

  const router = useRouter();
  const pathname = usePathname();

  const triggerNewThread = async () => {
    const result = await triggerPrompt({ agent_id });
    if (result?.status) {
      router.push(
        `${__agent_url(agent_data)}/thread/${result?.data?.thread_id?.replace(/^trd_/, "")}`,
      );
    } else {
      notifier.error(result?.message || "Failed to trigger new thread");
    }
  };

  const tabOptions = [
    { key: "templates", name: "Templates", icon: <RiFolderOpenLine size={20} /> },
    { key: "variables", name: "Variables", icon: <RiCodeLine size={20} /> },
    { key: "pricing", name: "Pricing", icon: <RiPriceTag3Line size={20} /> },
    { key: "schedules", name: "Schedules", icon: <RiCalendarLine size={20} /> },
    { key: "webhooks", name: "Webhooks", icon: <RiWebhookLine size={20} /> },
  ];


  const [activeTab, setActiveTab] = useQueryState("tab", { defaultValue: "templates" });
  const tabStyles = clsx(
    "font-medium text-left px-5 gap-3 h-10 focus:outline-0 focus-visible:outline-0 rounded-md transition-any",
  );

  const goToNextTab = () => {
    const currentIndex = tabOptions.findIndex(tab => tab.key === activeTab);
    const nextIndex = Math.min(currentIndex + 1, tabOptions.length - 1);
    setActiveTab(tabOptions[nextIndex].key);
  };

  const goToPreviousTab = () => {
    const currentIndex = tabOptions.findIndex(tab => tab.key === activeTab);
    const prevIndex = Math.max(currentIndex - 1, 0);
    setActiveTab(tabOptions[prevIndex].key);
  };

  const handleBack = () => {
    router.back();
  };

  const { data: variablesData, loading: variablesLoading, error: variablesError } = useAgentInstallationVariablesSubscription({
    variables: { agent_installation_id: agent_installation_id as string },
    skip: !agent_installation_id
  });

  if (!agent_data || Object.keys(agent_data).length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Agent Not Found
        </h2>
        <p className="text-gray-600">
          The agent you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  if (agent_installation_loading) {
    return <Loader />;
  } else if (agent_installation_error) {
    return <div>Error loading agent installation</div>;
  }

  console.log(agent_installation?.installation?.active)

  return (
    <div className="transition-any smooth">
      {" "}
      {agent_installation?.installation?.id !== agent_installation_id && !agent_installation?.installation?.active ? (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Unable to find installation
          </h2>
          <p className="text-gray-600 mb-4">
            The installation you're looking for doesn't exist or has been
            removed.
          </p>
          <Link
            href={`/agent/${agent_name}`}
            className="text-blue-500 hover:underline"
          >
            Go back to agent page
          </Link>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between px-6 bg-white border-b h-12">
            <div className="flex items-center gap-8">
              <button onClick={handleBack} className="flex items-center">
                <RiArrowLeftLine size={20} />
              </button>
              <div className="flex items-center">
                <img
                  src={agent_data?.avatar_url || "/default-avatar.png"}
                  alt="Agent Avatar"
                  className="w-8 h-8 rounded-md object-cover mr-4"
                />
                <div className="font-medium capitalize">{agent_data?.name}</div>
              </div>
            </div>
            <div className="flex gap-4 text-neutral-800">
              <Link
                href={__agent_url(agent_data)}
                className="hidden md:flex gap-2 p-1.5 bg-neutral-100 w-fit items-center transition-any text-sm font-medium justify-center border rounded-md hover:bg-atrium-offWhite h-8"
              >
                View agent <RiExternalLinkLine size={18} />
              </Link>
              <button
                onClick={triggerNewThread}
                className="flex gap-2 rounded-md flex-none items-center transition-any bg-black text-white hover:opacity-80 px-2 text-sm py-1 h-8 font-semibold"
              >
                {" "}
                <span className="hidden sm:block">Chat</span> <PaperPlaneIcon />
              </button>
              {/* <button className="w-8 h-8 flex p-1 items-center justify-center text-sm font-medium bg-neutral-100 border rounded-md"><RiMoreLine size={18}/></button> */}
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
                        <Menu.Item>
                          <DefaultButton
                            label="Remove agent"
                            variant="ghost"
                            iconLeft={<TrashIcon />}
                            onClick={() => openDialog("uninstall")}
                            styleClass="!justify-start bg-red-50 text-red-600 h-8 hover:bg-red-600 hover:text-white font-medium transition-all"
                          />
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu.Button>
                )}
              </Menu>
            </div>
          </div>

          {/* Body >> Main */}
          <Tab.Group 
            selectedIndex={tabOptions.findIndex(tab => tab.key === activeTab) || 0}
            onChange={(index) => setActiveTab(tabOptions[index].key)}
          >
            <div className="flex gap-10 px-6 lg:px-8 py-10">
              <Tab.List className="col-span-2 flex flex-col gap-5 md:w-60">
                <div className="text-sm uppercase font-semibold text-neutral-400">
                  Setup Actions
                </div>
                {tabOptions.map((tab) => (
                  <Tab
                    key={tab.key}
                    className={({ selected }) =>
                      `${tabStyles} flex items-center ${
                        selected
                          ? "bg-black text-white"
                          : "text-neutral-600 hover:bg-atrium-offWhite hover:text-neutral-800"
                      }`
                    }
                  >
                    {tab.icon}
                    {tab.name}
                  </Tab>
                ))}
                <div className="text-neutral-500 leading-relaxed">
                  <div className="w-5/6 border" />
                  {/* <div className="mt-4 w-5/6">{`Installed on this workspace ${formatDistanceToNow(agent_data?.installation?._cr)} ago`}</div> */}
                </div>
              </Tab.List>

              <div className="w-full max-w-[1080px]">
                <Tab.Panels className="">
                  <Tab.Panel className="bg-white border border-neutral-200 rounded-md p-6">
                    <h2 className="text-2xl font-bold mb-1">Templates</h2>
                    <p className="text-neutral-600 mb-8 text-lg">
                      Add data or templates you want to use with your agent.
                    </p>
                    <div className="flex flex-col gap-8">
                      <UploadPanel
                        setFileUploadLoad={setFileUploadLoad}
                        setFileIds={setFileIds}
                        uploadedFiles={uploadedFiles}
                        setUploadedFiles={setUploadedFiles}
                        agent_installation_id={agent_installation_id as string}
                        text={"Choose a file or drag & drop here"}
                        subText={"PDF, XLSX, DOCX, PPTX and CSV, up to 10MB"}
                        label_class_name={clsx(
                          "cursor-pointer flex flex-col items-center",
                        )}
                      />
                      <AgentSetupSidePanel />
                    </div>
                  </Tab.Panel>

                  <Tab.Panel className="bg-white border border-neutral-200 rounded-md p-6">
                    <VariablesSection 
                      agent_installation_id={agent_installation_id as string}
                      variables={variablesData?.agent_installation?.[0]?.installation_variables || []}
                      isLoading={variablesLoading}
                      error={variablesError}
                    />
                  </Tab.Panel>

                  <Tab.Panel className="bg-white border border-neutral-200 rounded-md p-6">
                    <h2 className="text-2xl font-bold mb-1">
                      Choose subscription
                    </h2>
                    <p className="text-neutral-600 mb-8 text-lg">
                      Select a subscription plan for your agent.
                    </p>
                    <PricingSection
                      product_list={agent_data.product_list}
                      agent_installation={agent_installation?.installation}
                    />
                  </Tab.Panel>
                  <Tab.Panel className="bg-white border border-neutral-200 rounded-md p-6">
                    <ListSchedule
                      agent_id={agent_data.id}
                      installation_id={agent_installation_id as string}
                    />
                  </Tab.Panel>
                  <Tab.Panel className="bg-white border border-neutral-200 rounded-md p-6">
                    <ListWebhook
                      agent_id={agent_data.id}
                      installation_id={agent_installation_id as string}
                    />
                  </Tab.Panel>
                </Tab.Panels>


                <div className="flex justify-between mt-6 h-10">
                  <DefaultButton
                    label="Previous"
                    variant="ghost"
                    size="custom"
                    onClick={goToPreviousTab}
                    disabled={activeTab === "templates"}
                    styleClass="px-4 py-1.5 bg-neutral-100 hover:bg-atrium-offWhite border text-neutral-700 rounded-md disabled:opacity-50"
                  />
                  {activeTab === "pricing" ? (
                    <DefaultButton
                      label="Save and Continue"
                      onClick={triggerNewThread}
                      styleClass=""
                    />
                  ) : (
                    <DefaultButton
                      label="Next"
                      onClick={goToNextTab}
                      styleClass=""
                    />
                  )}
                </div>
              </div>
            </div>
          </Tab.Group>
        </>
      )}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div
          className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4"
          aria-hidden="true"
        >
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-2">
              Confirm Removal
            </Dialog.Title>
            <Dialog.Description className="mb-4">
              Are you sure you want to remove this agent?
            </Dialog.Description>

            <div className="flex justify-end space-x-2">
              <DefaultButton
                label="Cancel"
                variant="secondary"
                size="small"
                onClick={() => setIsDialogOpen(false)}
              />
              <DefaultButton
                label="Remove"
                variant="danger"
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

export default SetupAgent;
