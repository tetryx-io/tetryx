import React, { useState, useCallback } from "react";
import { RiAddLine, RiSearchLine } from "react-icons/ri";
import AgentCard from "@/components/Pages/Build/component/AgentCard";
import Loader from "@/components/Common/AtriumLoader";
import { useAgentStreamSubscription } from "@/generated/graphql";
import { useSessionContext } from "@/lib/context/session";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

// AgentHeader component
const AgentHeader = ({ query, setQuery }) => {
  const onSearch = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  return (
    <motion.div 
      className="flex flex-col w-full gap-6 lg:flex-row lg:justify-between lg:items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Agents</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your AI Agents.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-4">
          <div
            className="w-80 flex items-center h-full border rounded-md bg-white text-neutral-600 overflow-hidden"
            style={{ height: "40px" }}
          >
            <RiSearchLine size={20} className="mx-2" />
            <input
              className={clsx(
                "h-full w-full border-none py-2",
                "focus:outline-none"
              )}
              type="search"
              name="search"
              value={query}
              placeholder="Search agents..."
              onChange={onSearch}
            />
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/studio/build/new/" 
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-sm"
          >
            <RiAddLine size={20} className="mr-2" />
            <span>New agent</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

// AgentList component
const AgentList = ({ query, workspaceId }) => {
  const { data, loading, error } = useAgentStreamSubscription({
    variables: {
      workspace_id: workspaceId,
    },
  });
  console.log(data)

  const filteredAgents = data?.agent_agent.filter((agent) =>
    agent.name?.toLowerCase().includes(query) || agent.headline?.toLowerCase().includes(query)
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Error: {error?.message}
      </div>
    );
  }

  if (!data?.agent_agent || data.agent_agent.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <p className="text-xl text-gray-600 mb-6">No agents found. Create your first agent to get started!</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/studio/build/new/" 
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-sm"
          >
            <RiAddLine size={20} className="mr-2" />
            <span>New agent</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {filteredAgents?.map((agent, index) => (
        <AgentCard 
          key={index} 
          agent={{
            ...agent,
            installed: false,
            name: agent.name ?? '',
            runtime: agent.runtime ? { dev_status: agent.runtime.dev_status } : undefined
          }} 
        />
      ))}
    </motion.div>
  );
};

// Main Agent component
const Agent = () => {
  const [query, setQuery] = useState("");
  const { session } = useSessionContext();

  if (!session.data?.workspace_id) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-14 h-fit px-6 md:px-10 w-full max-w-[1920px] gap-8 xl:gap-10 mx-auto transition-all">
      <AgentHeader query={query} setQuery={setQuery} />
      <AgentList query={query} workspaceId={session.data.workspace_id} />
    </div>
  );
};

export default Agent;
