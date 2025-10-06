import React, { useEffect, useState, useCallback } from "react";
import { RiArrowRightLine, RiSearchLine } from "react-icons/ri";
import { clsx } from "clsx";
import AgentCard from "@/components/Pages/Agent/component/AgentCard";
import Loader from "@/components/Common/AtriumLoader";
import { useGetAgentInstallStreamSubscription } from "@/generated/graphql";
import { motion } from "framer-motion";
import { useSessionContext } from "@/lib/context/session";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { searchAgent } from "@/lib/services/agent";
import { debounce } from "lodash";

const Agent = () => {
  const [query, setQuery] = useState("");
  const [agentSearchLoading, setAgentSearchLoading] = useState(false);
  const [agentSearchError, setAgentSearchError] = useState<string | null>(null);
  const [agentSearchData, setAgentSearchData] = useState([]);
  const { session } = useSessionContext();
  const baseDelay = 1000;

  const {
    data,
    loading: agentLoading,
    error: agentError,
  } = useGetAgentInstallStreamSubscription({
    variables: {
      workspace_id: session?.data?.workspace?.id || "",
      search: `%${query}%`,
    },
  });

  const agentData = data?.agent_installation.map((installation) => ({
    ...installation.agent,
    installation: installation,
  }));

  const debouncedFetchAgents = useCallback(
    debounce(async (q) => {
      setAgentSearchLoading(true);
      try {
        console.log("fetchAgents");
        const params = { q, installed: true };
        const result = await searchAgent(params);
        if (result && result.status) {
          const data = result.data.map((agent) => ({
            ...agent,
            headline: agent.headline,
          }));
          setAgentSearchData(data);
        } else {
          throw new Error(result?.message);
        }
      } catch (error) {
        console.log("error", error);
        setAgentSearchError(error?.message || "An error occurred");
      } finally {
        setAgentSearchLoading(false);
      }
    }, baseDelay),
    [],
  );

  useEffect(() => {
    debouncedFetchAgents(query);
  }, [query]);



  
  const onSearch = (event: any) => {
    setQuery(event.target.value.toLowerCase());
  };

  return (
    <div className="flex flex-col items-center justify-center mt-14 h-fit px-6 md:px-10 w-full max-w-[1920px] gap-8 xl:gap-10 mx-auto transition-all">
      <div className="flex flex-col w-full gap-6 lg:flex-row lg:justify-between">
        <div className="md:w-9/12 xl:w-1/2">
          <div className="text-2xl font-bold">Agents</div>
        </div>

        <div
          className="w-80 flex items-center border rounded-md bg-white text-neutral-600 overflow-hidden"
          style={{ height: "40px" }}
        >
          <RiSearchLine size={20} className="mx-2" />
          <input
            className={clsx(
              "h-full w-full border-none py-2",
              "focus:outline-none",
            )}
            type="search"
            name="search"
            value={query}
            placeholder="Search agents..."
            onChange={onSearch}
          />
        </div>
      </div>

      {agentData && agentData.length > 0 ? (
        <div className="flex flex-col gap-6">
          {agentLoading ? (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Loader />
            </div>
          ) : agentError ? (
            <div className="text-red-500 text-center">
              Error: {agentError?.message}
            </div>
          ) : (
            <div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {data?.agent_installation &&
                  data?.agent_installation
                    .slice(0, 4)
                    .map((installation, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <AgentCard
                          agent={{
                            ...installation.agent,
                            installed: true,
                            name: installation.agent.name ?? undefined,
                            creator: {
                              ...installation.agent.creator,
                              name:
                                installation.agent.creator.name ?? undefined,
                              picture:
                                installation.agent.creator.picture ?? undefined,
                            },
                          }}
                          installation={installation}
                        />
                      </motion.div>
                    ))}
              </motion.div>
              <div className="text-center mt-4">
                <a
                  href="/agent/search/"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                >
                  <DefaultButton
                    label="View All"
                    iconRight={<RiArrowRightLine size={16} />}
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        !agentLoading && (
          <div className="text-center py-12 px-4 rounded-lg bg-gray-50 border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              You haven't installed any agents yet
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Check out our featured agents below to get started and enhance
              your workspace!
            </p>
            <DefaultButton
              label="Browse Agents"
              iconRight={<RiArrowRightLine className="ml-2" size={16} />}
              className="mt-6 inline-flex items-center gap-1"
              onClick={() =>
                (window.location.href =
                  "/agent/search")
              }
            />
          </div>
        )
      )}
      <div className="mt-2 flex flex-col gap-6">
        <div className="w-full">
          <div className="text-neutral-600 mt-2">Featured Agents</div>
        </div>
        {agentSearchLoading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </div>
        ) : agentSearchError ? (
          <div className="text-red-500 text-center">
            Error: {agentSearchError}
          </div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {agentSearchData &&
                agentSearchData.slice(0, 4).map((agent, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <AgentCard agent={agent} />
                  </motion.div>
                ))}
            </motion.div>
            <div className="text-center mt-4 mb-2">
              <a
                href="/agent/search/"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
              >
                <DefaultButton
                  label="View All"
                  iconRight={<RiArrowRightLine size={16} />}
                />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Agent;
