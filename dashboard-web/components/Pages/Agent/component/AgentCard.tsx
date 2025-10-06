import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { truncate as _truncate } from "lodash";
import { motion } from "framer-motion";
import { RiCheckLine, RiPlayFill, RiMoreFill } from "react-icons/ri";
import {
  PlayIcon,
  DotsHorizontalIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import * as Avatar from '@radix-ui/react-avatar';
import { Agent } from "@/types/agent";
import { __agent_url } from "@/lib/utils";
import { Menu, Dialog } from "@headlessui/react";
import { uninstallAgent } from "@/lib/services/agent";
import { useNotificationContext } from "@/components/Shared/Notification";
import DefaultButton from "@/components/Shared/Button/DefaultButton";

interface AgentCardProps {
  agent: Agent;
  installation?: any;
}

// Utility function to format the run count
const formatRunCount = (count: number | null | undefined): string => {
  if (count == null || count == undefined) return "< 10";
  if (count < 10) return "< 10";
  if (count < 100) return `${Math.floor(count / 10) * 10}+`;
  if (count < 10000) return `${Math.floor(count / 100) * 100}+`;
  return `${(count / 1000).toFixed(1)}k+`;
};

export const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  installation,
}) => {
  console.log("installation", agent);
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const notifier: any = useNotificationContext();

  const onRemoveAgent = async () => {
    const result = await uninstallAgent({
      agent_id: agent.id || "",
      install_id: installation?.id || "",
    });

    if (result?.status) {
      notifier.success({
        title: `Agent uninstalled successfully`,
      });
      // You might want to refresh the page or update the UI here
    } else {
      notifier.error({
        title: `Failed to uninstall agent`,
      });
    }
    setIsDialogOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.03 }}
        className="relative max-w-lg bg-white rounded-lg overflow-hidden border border-neutral-200 transition-all duration-300"
      >
        <Link href={__agent_url(agent)}>
          <div className="p-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-start">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="h-16 w-16 rounded-md border overflow-hidden mb-3"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={
                      agent.avatar_url ||
                      "https://icons.veryicon.com/png/o/cartoon/bicolor-icon/robot-9.png"
                    }
                    alt={agent.name}
                  />
                </motion.div>

                {agent.can_edit ||
                  (agent.installed && (
                    <Menu
                      as="div"
                      className="relative"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Menu.Button className="p-1 hover:bg-neutral-100 rounded-full">
                        <DotsHorizontalIcon className="text-neutral-600" />
                      </Menu.Button>

                      <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-neutral-200 z-10">
                        <div className="py-1">
                          {agent.can_edit && (
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`w-full px-4 py-2 text-left text-sm text-neutral-700 ${
                                    active ? "bg-neutral-100" : ""
                                  }`}
                                  onClick={() => {
                                    router.push(
                                      `${__agent_url(agent)}/setup/${installation.id}`,
                                    );
                                  }}
                                >
                                  Edit Agent
                                </button>
                              )}
                            </Menu.Item>
                          )}
                          {agent.installed && (
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`w-full px-4 py-2 text-left text-sm text-red-600 ${
                                    active ? "bg-neutral-100" : ""
                                  }`}
                                  onClick={() => setIsDialogOpen(true)}
                                >
                                  Uninstall Agent
                                </button>
                              )}
                            </Menu.Item>
                          )}
                        </div>
                      </Menu.Items>
                    </Menu>
                  ))}
              </div>
              <div className="h-40">
                <div className="text-lg font-bold mb-1">{agent.name}</div>
                <p className="mb-2 text-neutral-600 line-clamp-3">
                  {_truncate(agent.headline ?? "", { length: 150 })}
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="bg-neutral-50 border rounded-full font-medium">
                <Avatar.Root className="flex items-center">
                  <Avatar.Image
                    src={agent.creator?.picture}
                    alt={agent.creator?.name || "Unknown"}
                    className="h-[30px] w-[30px] rounded-full object-cover"
                  />
                  <Avatar.Fallback 
                    className="h-[30px] w-[30px] rounded-full flex items-center justify-center bg-neutral-50 text-neutral-600 text-sm"
                  >
                    {agent.creator?.name?.charAt(0) || 'U'}
                  </Avatar.Fallback>
                </Avatar.Root>
              </div>

              {/* <div className="flex h-8 items-center bg-neutral-50 border p-1.5 gap-1.5 rounded-md text-neutral-600 text-sm font-medium hover:cursor-pointer hover:bg-black hover:text-white">
                <div className="flex gap-1 items-center">
                  <PersonIcon/>
                  Install
                </div>

                <div className="h-3 border-l border-neutral-400" />
                <div>
                  {agent.install_count == null
                    ? "< 10"
                    : agent.install_count < 10
                      ? "< 10"
                      : agent.install_count < 100
                        ? `${Math.floor(agent.install_count / 10) * 10}+`
                        : `${Math.floor(agent.install_count / 100) * 100}`}
                </div>
              </div> */}

              <div className="flex h-8 items-center bg-neutral-50 border p-1.5 gap-1.5 rounded-md text-neutral-600 text-sm font-medium hover:cursor-pointer hover:bg-black hover:text-white">
                {/* Button for Uninstalled agents ↴
              <div className="flex gap-1 items-center"><RiDownloadFill size={16} />Install</div> */}

                {/* Button for Installed Agents ↴ */}
                <div className="flex gap-1 items-center">
                  <PlayIcon />
                  Run
                </div>

                {agent.run_count && (
                  <>
                    <div className="h-3 border-l border-neutral-400" />
                    <div>{formatRunCount(agent.run_count)}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div
          className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4"
          aria-hidden="true"
        >
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-2">
              Confirm Uninstallation
            </Dialog.Title>
            <Dialog.Description className="mb-4">
              Are you sure you want to uninstall this agent?
            </Dialog.Description>

            <div className="flex justify-end space-x-2">
              <DefaultButton
                label="Cancel"
                variant="secondary"
                size="small"
                onClick={() => setIsDialogOpen(false)}
              />
              <DefaultButton
                label="Uninstall"
                variant="danger"
                size="small"
                onClick={onRemoveAgent}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default React.memo(AgentCard);

{
  /* 

  onRemoveAgent={onRemoveAgent}
  onInstallAgent={onInstallAgent}

  <Tab.Panel>
  <PublicAgentDescription
    agent={agent_data}
    containerRef={containerRef}
  />
</Tab.Panel> 

*/
}
