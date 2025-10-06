import React, { useState } from "react";
import { truncate } from "lodash";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiCheckLine, RiAddLine } from "react-icons/ri";
import { clsx } from "clsx";
import { installAgent, uninstallAgent } from "@/lib/services/agent";
import { Tooltip } from "react-tooltip";
import { format } from 'date-fns';
import { toast } from "react-hot-toast";
import Link from 'next/link';
import { Agent } from "@/types/agent";
import { __agent_url } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const [isInstalled, setIsInstalled] = useState<boolean>(agent.installed || false);
  console.log(agent);

  const onInstallAgent = async (): Promise<void> => {
    if (!agent.id) {
      toast.error("Agent ID is required");
      return;
    }
    const result = await installAgent({ agent_id: agent.id });
    if (result?.status) {
      setIsInstalled(true);
      toast.success("Agent installed successfully");
    } else {
      toast.error(result?.message || "Failed to install agent");
    }
  }

  const onRemoveAgent = async (): Promise<void> => {
    const result = await uninstallAgent({ agent_id: agent?.id as string, install_id: agent.installation?.id as string });
    if (result?.status) {
      setIsInstalled(false);
      toast.success("Agent uninstalled successfully");
    } else {
      toast.error(result?.message || "Failed to uninstall agent");
    }
  }

  return (
    <Link href={__agent_url(agent)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.03 }}
        className={clsx(
          "rounded-lg overflow-hidden border transition-all duration-300",
          "bg-white",
          "border-gray-200",
          "hover:shadow-lg",
          "group flex flex-col",
          "h-full",
          isInstalled && "ring-2 ring-green-500"
        )}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
          <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-20 w-20 rounded-md border-2 border-gray-200 overflow-hidden"
            >
              <img
                className="object-cover w-full h-full"
                src={agent.avatar_url || "https://icons.veryicon.com/png/o/cartoon/bicolor-icon/robot-9.png"}
                alt={agent.name}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={clsx(
                "p-2 rounded-full cursor-pointer",
                isInstalled ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
              )}
              data-tooltip-id="install-tooltip"
              data-tooltip-content={isInstalled ? "Installed" : "Not installed"}
              onClick={isInstalled ? onRemoveAgent : onInstallAgent}
            >
              {isInstalled ? <RiCheckLine size={20} /> : <RiAddLine size={20} />}
            </motion.div>
            <Tooltip id="install-tooltip" place="top" />
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{agent.name}</h2>
          <p className="mb-4 text-gray-600 line-clamp-3 flex-grow">
            {truncate(agent.headline ?? '', { length: 120 })}
          </p>
          <div className="flex justify-between mb-4 text-sm text-gray-600">
            <div>
              <span className="font-semibold">Installs: </span>
              {agent.install_count == null ? "< 10" :
               agent.install_count < 10 ? "< 10" :
               agent.install_count < 100 ? `${Math.floor(agent.install_count / 10) * 10}+` :
               `${Math.floor(agent.install_count / 100) * 100}+`}
            </div>
            <div>
              <span className="font-semibold">Runs: </span>
              {agent.run_count == null ? "< 10" :
               agent.run_count < 10 ? "< 10" :
               agent.run_count < 100 ? `${Math.floor(agent.run_count / 10) * 10}+` :
               `${Math.floor(agent.run_count / 100) * 100}+`}
            </div>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <span
              className="text-xs text-gray-500 cursor-help"
              data-tooltip-id="creation-date-tooltip"
              data-tooltip-content={`Created on: ${format(new Date(agent._cr || ''), 'PPP')}`}
            >
              {format(new Date(agent._cr || ''), 'MMM d, yyyy')}
            </span>
            <Tooltip id="creation-date-tooltip" place="top" />
            <span className="text-green-600 rounded-full p-2 transition-all duration-300 group-hover:bg-green-50 group-hover:scale-110">
              <RiArrowRightLine size={24}/>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default React.memo(AgentCard);