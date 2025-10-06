"use client";
import { gql, useSubscription } from "@apollo/client";
import { Menu, Transition } from "@headlessui/react";
import { debounce, has } from "lodash";
import { useRouter } from "next/navigation";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GrGroup } from "react-icons/gr";
import { PiGlobeSimple } from "react-icons/pi";
import {
  RiArrowRightSLine,
  RiDeleteBinLine,
  RiExternalLinkLine,
  RiFilter2Line,
  RiFilter3Line,
  RiLockLine,
  RiMoreLine,
  RiSearchLine,
} from "react-icons/ri";
import { HiOutlineCheck } from "react-icons/hi";
import { useSessionContext } from "@/lib/context/session";
import { createApolloClient } from "@/lib/apolloClient";
import Loader from "@/components/Common/TetryxLoader";
import {
  CHECK_ARRAY_IS_EMPTY_OR_NOT,
  CHECK_THREAD_VISIBILITY,
  getTimeDifferenceString,
} from "@/lib/utils";
import toast from "react-hot-toast";
import Link from "next/link";
import clsx from "clsx";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "@/components/Shared/Pagination";
import { deleteThread, updateThread } from "@/lib/services/thread";

const GET_CHATS = gql`
  subscription GetChats($workspace_id: String!, $limit: Int!, $offset: Int!) {
    chat: app_chat(
      where: { thread: { workspace_id: { _eq: $workspace_id } } }
      order_by: { _up: desc }
      limit: $limit
      offset: $offset
    ) {
      body_plaintext
      pair_id
      parent_id
      thread_id
      _up
      thread {
        visibility
        title
        id
        _cr
        _up
        agent_debug_mode
        agent_id
        agent {
          id
          name
          avatar_url
        }
        initiator_id
      }
    }
  }
`;

const GET_THREADS_COUNT = gql`
subscription GetThreadsWithChatsCount($workspace_id: String!) {
  app_thread_aggregate(
    where: { 
      workspace_id: { _eq: $workspace_id },
      chat_list: { id: { _is_null: false } } # Ensures the thread has at least one chat
    }
  ) {
    aggregate {
      count
    }
  }
}
`;

const AccordionItem = React.memo(
  ({
    thread,
    isOpen,
    onToggle,
    onItemClick,
    onItemDelete,
    onNavigate,
    user,
  }: any) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (isOpen) {
        const contentEl: any = contentRef.current;
        setHeight(contentEl.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [isOpen]);

    const truncateText = (text, lines = 2) => {
      const truncated = text?.split("\n").slice(0, lines).join("\n");
      return truncated;
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div className="my-8">
        <div id="accordion-collapse">
          <div
            className="bg-neutral-50 rounded-md flex w-full"
            id={`accordion-collapse-heading-${thread.threadId}`}
          >
            <div className="w-full">
              <button
                onClick={onToggle}
                type="button"
                className="flex items-start justify-between w-full py-5 font-semibold text-neutral-950 gap-3 w-100 "
                aria-expanded={isOpen}
                aria-controls={`accordion-collapse-body-${thread.threadId}`}
              >
                <div className="flex justify-center items-start ml-6 sm:ml-8 mt-0.5">
                  <span className="hidden sm:block mr-1 sm:mr-1.5">
                    <RiArrowRightSLine
                      size={20}
                      className={`transition-transform ${!isOpen ? "" : "rotate-90"}`}
                    />
                  </span>
                  <div className="flex flex-col text-left w-full">
                    <span className="text-base font-semibold w-full truncate text-wrap max-h-60">
                      {thread.threadContent}
                    </span>
                    <div className="flex flex-col md:flex-row gap-2 font-normal text-sm md:items-center mt-4">
                      <div className="flex gap-2">
                        <img
                          width={20}
                          height={20}
                          src={thread.chats[0].thread.agent.avatar_url}
                          alt="AI Agent"
                          className="rounded object-cover w-5 h-5"
                        />
                        <span className="max-w-40 truncate text-nowrap font-medium text-neutral-700">
                          {thread.chats[0].thread.agent.name}
                        </span>
                      </div>
                      <div className="hidden md:block border-l border-neutral-400 h-4 w-1" />
                      <div className="text-neutral-500">
                        {getTimeDifferenceString(thread.chats[0]._up)}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <div className="relative ml-auto mx-2 flex gap-1 items-start">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button
                      className="hidden sm:block p-1 sm:mx-1 my-3"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <div className="p-2 rounded opacity-60 hover:opacity-100 hover:bg-offWhite">
                        <RiMoreLine />
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
                      <Menu.Items
                        style={{ right: "0" }}
                        className="absolute  top-8 z-10 flex flex-col gap-2 bg-white shadow py-2 px-3 rounded-md w-[280px] text-sm "
                      >
                        <p className="text-sm text-[#A3A3A3] font-semibold mt-1 mb-2">
                          Manage access
                        </p>
                        {CHECK_THREAD_VISIBILITY(
                          thread.chats[0].thread.visibility,
                        ).map((item, index) => (
                          <div
                            key={index}
                            className={`flex items-center w-full p-[8px] mt-1 ${
                              item.isActive
                                ? "bg-[#f5f5f5]"
                                : "hover:bg-[#f5f5f5]"
                            } rounded cursor-pointer `}
                            onClick={() =>
                              onItemClick(item.value, thread.threadId)
                            }
                          >
                            <p>
                              {item.value === "PUBLIC" ? (
                                <PiGlobeSimple size={18} color={item.color} />
                              ) : item.value === "USER" ? (
                                <RiLockLine size={18} color={item.color} />
                              ) : (
                                <GrGroup size={18} color={item.color} />
                              )}
                            </p>
                            <p
                              style={{ color: item.color }}
                              className="ml-2 w-full font-medium text-left"
                            >
                              {item.label}{" "}
                            </p>
                            <p>
                              {item?.isActive && <HiOutlineCheck size={18} />}
                            </p>
                          </div>
                        ))}
                        <hr />
                        <div
                          className="flex w-full rounded p-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                          onClick={() => {
                            onItemDelete(thread.threadId);
                            setIsMenuOpen(false);
                          }}
                        >
                          <p>
                            <RiDeleteBinLine size={18} color="#ef4444" />
                          </p>
                          <p className="ml-2 text-left w-full font-medium text-[#ef4444]">
                            Delete
                          </p>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
              <Link
                href={`../agent/${thread.chats[0].thread.agent_id}/thread/${thread.threadId}`}
                className="p-1 sm:mx-1 my-3 hover:cursor-pointer "
              >
                <div className="p-2 rounded opacity-60 hover:opacity-100 hover:bg-offWhite">
                  <RiExternalLinkLine />
                </div>
              </Link>
            </div>
          </div>
          <div
            ref={contentRef}
            style={{
              height: `${height}px`,
              overflow: "hidden",
              transition: "height 0.3s ease-out",
            }}
          >
            <div className="relative border-left-1 pl-10 pr-5 mt-[40px]">
              <span className="h-full w-[1px] bg-neutral-200 absolute left-3 top-0 z-10"></span>
              {thread.chats.map((subItem, index) => (
                <div key={index} className="mb-1">
                  {subItem.parent_id === "ROOT" ? (
                    <div
                      className="flex gap-2"
                      onClick={() => onNavigate(subItem?.thread)}
                    >
                      <img
                        width={32}
                        height={32}
                        className="rounded-full border w-8 h-8"
                        src={
                          user?.avatar_url && user?.avatar_url !== "None"
                            ? user.avatar_url
                            : "/images/avatar.svg"
                        }
                        alt="Profile"
                      />
                      <p className="ml-2 text-neutral-950 mb-1 hover:text-violet-700 hover:underline hover:cursor-pointer font-medium text-[16px] leading-[25.6px]">
                        {subItem.body_plaintext}
                      </p>
                    </div>
                  ) : (
                    <p className="text-[#737373] text-[16px] leading-[25.6px] ml-[50px]">
                      {truncateText(subItem.body_plaintext)}
                      <span
                        className="ml-1 cursor-pointer font-medium"
                        onClick={() => onNavigate(subItem?.thread)}
                      >
                        view more...
                      </span>
                    </p>
                  )}

                  {subItem.parent_id !== "ROOT" && (
                    <p className="ml-[50px] mb-3 text-neutral-400">
                      {getTimeDifferenceString(subItem._up)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

const HistoryPage = () => {
  const router = useRouter();
  const [threadChats, setThreadChats] = useState<any>([]);
  const [chatLoading, setChatLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const { session } = useSessionContext();
  const apolloClient = useMemo(() => createApolloClient(""), []);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [agents, setAgents] = useState<any[]>([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const limit = 50;
  const offset = (currentPage - 1) * limit;

  const {
    data: chatData,
    loading,
    error,
  } = useSubscription(GET_CHATS, {
    variables: {
      workspace_id: session?.data?.workspace?.id,
      limit,
      offset,
    },
  });

  const { data: threadsCountData } =
    useSubscription(GET_THREADS_COUNT, {
      variables: {
        workspace_id: session?.data?.workspace?.id,
      },
    });


  const memoizedThreadChats = useMemo(() => {
    if (!chatData || !CHECK_ARRAY_IS_EMPTY_OR_NOT(chatData.chat)) {
      return [];
    }

    return chatData.chat.reduce((acc, chat) => {
      const existingThread = acc.find(
        (item) => item.threadId === chat.thread_id,
      );
      if (!existingThread) {
        const allThreadChats = chatData.chat
          .filter((item) => item.thread_id === chat.thread_id)
          .reverse();
        acc.push({
          threadId: chat.thread_id,
          threadContent: chat.thread.title,
          chats: allThreadChats,
        });
      }
      return acc;
    }, []);
  }, [chatData]);
 

  useEffect(() => {
    if (chatData && CHECK_ARRAY_IS_EMPTY_OR_NOT(chatData.chat)) {
      setThreadChats((prev) => [...prev, ...memoizedThreadChats]);
      setChatLoading(false);
    }
  }, [chatData, memoizedThreadChats]);

  useEffect(() => {
    if (chatData && chatData.chat) {
      const agentIds = Array.from(
        new Set(chatData.chat.map((chat) => chat.thread.agent.id)),
      );
      const agentDetails = agentIds.map((id) => {
        return {
          id,
          name: chatData.chat.find((chat) => chat.thread.agent.id === id)
            ?.thread.agent.name,
          avatar_url: chatData.chat.find((chat) => chat.thread.agent.id === id)
            ?.thread.agent.avatar_url,
        };
      });
      setAgents(agentDetails);
    }
  }, [chatData]);

  const handleFilterChange = (agentId: string) => {
    setSelectedAgents((prev) =>
      prev.includes(agentId)
        ? prev.filter((id) => id !== agentId)
        : [...prev, agentId],
    );
  };

  const filteredThreadChats = useMemo(() => {
    return threadChats.filter(
      (thread) =>
        selectedAgents.length === 0 ||
        selectedAgents.includes(thread.chats[0]?.thread.agent.id),
    );
  }, [threadChats, selectedAgents]);

  useEffect(() => {
    if (chatData && CHECK_ARRAY_IS_EMPTY_OR_NOT(chatData.chat)) {
      setThreadChats(memoizedThreadChats);
      setChatLoading(false);
    }
  }, [chatData, memoizedThreadChats]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setThreadChats([]);
    setChatLoading(true);
  };

  const debouncedToggle = useCallback(
    debounce((index) => {
      setOpenAccordionIndex((prevIndex) =>
        prevIndex === index ? null : index,
      );
    }, 100),
    [],
  );

  const navigateToThread = useCallback(
    (thread) => {
      console.log(thread);
      if (thread.agent_id) {
        router.push(`/agent/${thread.agent_id}/thread/${thread.id}`);
      } else {
        router.push(`/thread/${thread.id}`);
      }
    },
    [router],
  );

  const handleItemClick = useCallback(
    async (value, thread_id) => {
      setChatLoading(true);
      try {
        await updateThread({ thread_id, data: { visibility: value } });
        toast.success("Thread Visibility Updated Successfully");
      } catch (error) {
        console.error("Error updating thread:", error);
      } finally {
        setChatLoading(false);
      }
    },
    [apolloClient],
  );

  const handleItemDelete = useCallback(
    async (thread_id) => {
      setChatLoading(true);
      try {
         await deleteThread({ thread_id });
        setThreadChats((prevThreads) =>
          prevThreads.filter((thread) => thread.threadId !== thread_id),
        );
        toast.success("Thread Deleted Successfully");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setChatLoading(false);
      }
    },
    [apolloClient],
  );

  // console.log("Chats", chatData)
  const hasMore = threadChats.length >= 20;

  const handleApplyFilter = () => {
    setThreadChats(filteredThreadChats);
  };

  if (loading) {
    return (
      <div className="ml-3">
        <Loader />
      </div>
    );
  }

  return (
    <div className="search-results mb-10 mt-10 mx-4 md:mx-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-7 gap-4 lg:gap-14">
        <div className="lg:col-span-9">
          <div className="bg-white rounded-lg shadow-md p-7">
            <div className="heading-search flex justify-between w-100 mb-8 ">
              <p className="text-3xl font-semibold">History</p>
              <div className="hidden sm:block relative ml-auto rounded-r-3xl w-[260px]">
                <div className="absolute top-[9px] left-0 pl-3 flex items-center pointer-events-none">
                  <RiSearchLine size={20} />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 bg-[#f5f5f5] py-2 rounded-md sm:text-sm"
                  placeholder="Search..."
                />
              </div>
              <div className="filter-section ml-3">
                <Menu as="div" className="relative block text-left h-9">
                  {({ open }) => (
                    <div>
                      <Menu.Button
                        className={`flex items-center w-full rounded-md h-9 px-2.5 font-medium focus:outline-none focus:ring-0 focus-visible::ring-0 border ${open ? "bg-offWhite border-neutral-300" : "bg-neutral-100 text-black hover:bg-neutral-200"}`}
                        onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                      >
                        <RiFilter3Line size={18} />
                        <span className="hidden md:block ml-1">Filter</span>
                      </Menu.Button>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4">
                        <div className="text-neutral-500 text-sm font-medium uppercase mb-2">
                          Filter by Agents
                        </div>

                        {agents.map((agent) => (
                          <Menu.Item key={agent.id}>
                            {({ active }) => (
                              <label
                                onClick={(e) => e.preventDefault()}
                                className={`flex items-center p-2 rounded-md cursor-pointer ${
                                  active ? "bg-neutral-100" : ""
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedAgents.includes(agent.id)}
                                  onChange={() => handleFilterChange(agent.id)}
                                  className="mr-2 w-5 h-5 border accent-black border-neutral-300 rounded"
                                />
                                <img
                                  src={agent.avatar_url}
                                  alt={agent.name}
                                  className="w-6 h-6 rounded mr-2 object-cover"
                                />
                                {agent.name}
                              </label>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu.Item>
                          <button
                            onClick={() => {
                              handleApplyFilter();
                              setIsFilterMenuOpen(false);
                            }}
                            disabled={selectedAgents.length === 0}
                            className={`mt-4 w-full py-2 text-white font-medium rounded-md bg-black disabled:opacity-60 disabled:cursor-not-allowed`}
                          >
                            Apply Filter
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </div>
                  )}
                </Menu>
              </div>
            </div>
            {threadChats.length === 0 && (
              <div className="flex justify-center items-center h-screen">
                <p className="text-neutral-500 text-lg">No thread(s) found</p>
              </div>
            )}
            {!chatLoading && (
              <div>
                {threadChats.map((thread, index) => (
                  <AccordionItem
                    key={thread.id}
                    thread={thread}
                    isOpen={openAccordionIndex === index}
                    onToggle={() => debouncedToggle(index)}
                    onItemClick={handleItemClick}
                    onItemDelete={handleItemDelete}
                    onNavigate={navigateToThread}
                    user={session?.data?.user}
                  />
                ))}
                <Pagination
                  total={threadsCountData?.app_thread_aggregate?.aggregate?.count}
                  limit={limit}
                  hasMore={threadsCountData?.app_thread_aggregate?.aggregate?.count > limit}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
