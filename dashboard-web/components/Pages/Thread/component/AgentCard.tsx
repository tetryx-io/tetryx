import React from "react";
import { truncate as _truncate } from "lodash";
import { motion } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";
import slugify from "slugify";
import Link from "next/link";
import { Agent } from "@/types/agent";
import { __agent_url } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className="max-w-md bg-white dark:bg-neutral-900 rounded-lg overflow-hidden border dark:border-neutral-700 hover:bg-green-50 dark:hover:bg-green-600/10 hover:border-green-600 transition-all duration-300"
    >
      <Link href={__agent_url(agent)}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="object-contain h-16 w-16 rounded-md border-2 border-gray-200"
              src={
                agent.avatar_url ||
                "https://icons.veryicon.com/png/o/cartoon/bicolor-icon/robot-9.png"
              }
              alt={agent.name}
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm bg-gray-100 dark:bg-neutral-800 rounded-full px-3 py-1"
            >
              <span className="font-semibold">Installs: </span>
              {agent.install_count == null
                ? "< 10"
                : agent.install_count < 10
                  ? "< 10"
                  : agent.install_count < 100
                    ? `${Math.floor(agent.install_count / 10) * 10}+`
                    : `${Math.floor(agent.install_count / 100) * 100}+`}
            </motion.div>
          </div>
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold mb-3 text-neutral-800 dark:text-neutral-100"
          >
            {agent.name}
          </motion.h2>
          <p className="h-36 mb-4 text-neutral-600 dark:text-neutral-300 line-clamp-3">
            {_truncate(agent.headline ?? "", { length: 150 })}
          </p>
          <div className="mb-4">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
              Use cases
            </p>
            <div className="flex flex-wrap gap-2">
              {["Prospecting", "Lead Qualification"].map((useCase, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                >
                  {useCase}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="text-green-600 dark:text-green-500 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 p-2 transition-colors duration-300"
            >
              <RiArrowRightLine size={24} />
            </motion.span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default React.memo(AgentCard);
