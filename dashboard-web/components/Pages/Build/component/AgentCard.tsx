import React, { useState } from "react";
import { truncate as _truncate } from "lodash";
import Link from 'next/link';
import { motion } from "framer-motion";
import { Agent } from "@/types/agent";
import { __agent_name_url } from "@/lib/utils";
import { AgentRuntimeStatus } from "@/lib/constant";
import { RiShutDownLine } from "react-icons/ri";
interface AgentCardProps {
  agent: Agent;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const agent_url=`/studio/build/${__agent_name_url(agent)}`
  console.log(agent)


  return (
    <Link href={agent_url}>
    <motion.div
      className="w-full max-w-lg bg-white rounded-lg overflow-hidden border border-neutral-200 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <div className="flex justify-between items-start">
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
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 text-sm">
            {agent?.runtime?.dev_status === AgentRuntimeStatus.HIBERNATED && (
              <>
             <RiShutDownLine/>
              <span className="text-gray-600">
                Hibernated
              </span>
              </>
            )}
              <div className={`h-2.5 w-2.5 rounded-full ${agent.enabled ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-gray-600">
                {agent.enabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
           
            
            {agent.creator && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>by {agent.creator.name || 'Anonymous'}</span>
                {agent.creator.picture && (
                  <img 
                    src={agent.creator.picture} 
                    alt={agent.creator.name || 'Creator'} 
                    className="w-6 h-6 rounded-full object-cover"
                  />
                )}
              </div>
            )}
          </div>
        </div>
        
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-lg font-bold mt-2 mb-2"
        >
          {agent.name}
        </motion.h2>
        <p className="h-32 mb-2 text-neutral-600 line-clamp-3">
          {_truncate(agent.headline ?? '', { length: 150 })}
        </p>
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <div className="flex flex-col gap-1">
            <div>
              <span className="font-semibold">Created: </span>
              {new Date(agent._cr || new Date()).toLocaleDateString()}
            </div>
            <div>
              <span className="font-semibold">Updated: </span>
              {new Date(agent._up || new Date()).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
      
    </motion.div>
    </Link>
  );
};

export default React.memo(AgentCard);