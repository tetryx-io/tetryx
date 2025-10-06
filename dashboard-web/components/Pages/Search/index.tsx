"use client";
import React, { useEffect, useState, Suspense } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import AgentCard from "@/components/Pages/Search/component/AgentCard";
import Loader from "@/components/Common/AtriumLoader";
import { useDebounce } from "@/hooks/use-debounce";
import { searchAgent } from "@/lib/services/agent";
import { useSessionContext } from "@/lib/context/session";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSearchParams } from "next/navigation";

interface Agent {
  id: string;
  // Add other properties as needed
}

interface Filters {
  installed?: boolean;
}

const Agent = () => {
  const { session } = useSessionContext();
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({});
  const searchParams = useSearchParams();

  const [agentLoading, setAgentLoading] = useState(true);
  const [agentError, setAgentError] = useState<string | null>(null);
  const [agentData, setAgentData] = useState<Agent[]>([]);
  const debouncedValue = useDebounce(query);
  useEffect(() => {
    const fetchAgents = async () => {
      setAgentLoading(true);
      try {
        const params = {
          ...filters,
          q: debouncedValue,
        };
        const result = await searchAgent(params);
        if (result && result.status) {
          setAgentData(result?.data);
        } else {
          throw new Error(result?.message);
        }
      } catch (error) {
        setAgentError(error?.message || "An error occurred");
      } finally {
        setAgentLoading(false);
      }
    };
    fetchAgents();
  }, [debouncedValue, filters]);

  const onSearch = (event: any) => {
    setQuery(event.target.value.toLowerCase());
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            AI Agents
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Discover and manage your intelligent assistants.
          </p>
        </div>

        <div className="w-full lg:w-80">
          <div className="relative">
            <input
              className="w-full h-12 pl-10 pr-4 py-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
              type="search"
              name="search"
              value={query}
              placeholder="Search Agents..."
              onChange={onSearch}
            />
            <RiSearchLine
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
              size={20}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Filter
              <RiArrowDownSLine size={20} className="text-gray-500" />
              {Object.keys(filters).length > 0 && (
                <RiCloseLine
                  size={20}
                  className="text-gray-500 cursor-pointer" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilters({});
                  }}
                />
              )}
            </Menu.Button>
            <Transition
              as="div"
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={clsx(
                          active ? "bg-gray-100" : "",
                          filters?.installed === true ? "bg-blue-50 text-blue-600" : "",
                          "block w-full text-left px-4 py-2 text-sm text-gray-700",
                        )}
                        onClick={() =>
                          setFilters({ ...filters, installed: true })
                        }
                      >
                        Installed Only
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={clsx(
                          active ? "bg-gray-100" : "",
                          filters?.installed === false ? "bg-blue-50 text-blue-600" : "",
                          "block w-full text-left px-4 py-2 text-sm text-gray-700",
                        )}
                        onClick={() =>
                          setFilters({ ...filters, installed: false })
                        }
                      >
                        Uninstalled Only
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      <div className="w-full">
        {agentLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        ) : agentError ? (
          <div className="text-red-500 text-center p-4 bg-red-100 dark:bg-red-900 rounded-lg">
            Error: {agentError}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {agentData &&
              agentData.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent as Partial<Agent>} />
              ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Agent;
