"use client";
import { Editor } from "@/components/Plate/components/plate-ui/editor";
import { plugins } from "@/components/Plate/lib/plate/plate-plugins";
import PromptField from "@/components/Prompt/prompt";
import { useTetryxAuth as useAuthUserContext } from "@/lib/providers/auth";
import { getTimeDifferenceString } from "@/lib/utils";
import { gql, useQuery, useSubscription } from "@apollo/client";
import { Plate } from "@udecode/plate-common";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { HiDocumentText } from "react-icons/hi2";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/navigation";
import "react-loading-skeleton/dist/skeleton.css";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";

import {
  GET_FILES,
  AGENT_SUBSCRIPTION,
} from "@/app/agent/Components/AgentQueries";


const PublicAgentComponent = ({ initialData }: any) => {
  const [secLoading, setSecLoading] = useState(false);

  const [agent_description_blocks, set_agent_description_blocks] = useState(
    initialData?.agent_agent?.length
      ? initialData.agent_agent.flatMap((item) => {
          return (
            item?.description?.components?.map((subItem) => ({
              ...subItem,
              chatId: item?.id
            })) || []
          );
        })
      : []
  );
  const [agent_data, set_agent_data] = useState(initialData?.agent_agent[0])

  const { user } = useAuthUserContext();
  const [showEarlyAccess, setShowEarlyAccess] = useState<any>(false);
  const [chatIds, setChatIds] = useState<any>([]);
  const [fileIds, setFileIds] = useState<any>([]);
  const { agent_name } = useParams();
  const containerRef = useRef(null);
  const threadEndRef = useRef<null | HTMLDivElement>(null);
  const agent_id = Array.isArray(agent_name) ? agent_name[0].slice(-16) : agent_name.slice(-16);
  const { data, loading } = useSubscription(AGENT_SUBSCRIPTION, {
    variables: { agent_id: agent_id },
  });

  const router = useRouter();
  const pathname = usePathname()

  const { data: fileData } = useQuery(GET_FILES, {
    variables: {
      fileIds: fileIds
        .filter((fileId) => fileId.includes("fil_"))
        .map((fileId) => fileId.replace("fil_", "")),
    },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  useEffect(() => {
    if (data?.agent_agent?.length > 0 && !loading) {
      let files: any = [];
      let threadData = data.agent_agent.flatMap((item) => {
        item?.attached_files?.files?.map((subItem) => {
          files.push(subItem);
        });

        if (item?.id && !chatIds.includes(item.id)) {
          setChatIds([...chatIds, item.id]);
        }

        return (
          item?.description?.components?.map((subItem) => ({
            ...subItem,
            chatId: item?.id,
            _up: item?._up,
            attachedFiles: item?.attached_files,
          })) || []
        );
      });
      setFileIds([...fileIds, ...files]);
      set_agent_description_blocks([...threadData]);
      set_agent_data(data?.agent_agent[0]);
    }
  }, [data]);

  const groupedContent = useMemo(() => {
    return agent_description_blocks.reduce((acc, current) => {
      const existingGroup = acc.find(
        (group) => group[0]?.pair_id === current.pair_id
      );
      if (existingGroup) {
        existingGroup.push(current);
      } else {
        acc.push([current]);
      }
      return acc;
    }, []);
  }, [agent_description_blocks]);

  const customKey = useMemo(() => {
    if (groupedContent) {
      return Math.floor(Math.random() * 1000);
    }
  }, [groupedContent]);

  

  const on_prompt_success = (data) => {
    const splitThreadId = data?.thread_id?.split("_")[1];
    router.push(`${pathname}/thread/${splitThreadId}`);
  }


  return (
    <div className="search-results mt-10">
      {(!groupedContent.length && loading) ||
        (secLoading && (
          <div className="w-full mb-8 py-2 pl-6 pr-[40px] bg-white border border-gray-200 rounded-lg sm:py-2 sm:pl-6 sm:pr-[60px] h-auto">
            <Skeleton
              baseColor="#f2f2f2"
              highlightColor="#fafafa"
              height={40}
              count={1}
              width="80%"
              style={{ marginBottom: "24px" }}
            />
            <Skeleton
              baseColor="#f2f2f2"
              highlightColor="#fafafa"
              count={4}
              height={18}
              style={{ marginBottom: "4px" }}
            />
            <Skeleton
              baseColor="#f2f2f2"
              highlightColor="#fafafa"
              count={1}
              height={18}
              style={{ width: "60%" }}
            />
          </div>
        ))}
      {!secLoading &&
        groupedContent.map((group: any, index) => (
          <>
            <div className="main-content flex justify-center items-center sm:px-12 p-4 mb-[212px]">
              <div className="w-full max-w-6xl">
                
                <div
                  key={index}
                  className="w-full mb-2 p-4 bg-white border border-gray-200 rounded-md"
                >
                  <div className="text-[22px] font-semibold mt-2">{agent_data?.name}</div>
                  {group.map((item, subIndex) => (
                    <>
                      <Plate
                        key={customKey}
                        readOnly={true}
                        plugins={plugins}
                        value={[item]}
                      >
                        
                        <div
                          ref={containerRef}
                          className={`w-full bg-white ${
                            item.parentId === "ROOT"
                              ? "text-[22px] font-semibold mt-2"
                              : "leading-[25.6px] list-decimal text-neutral-600 font-medium mb-2 pt-1"
                          }`}
                        >
                          <Editor
                            className={
                              item.parentId === "ROOT"
                                ? "text-[22px] font-semibold mt-2"
                                : "leading-[25.6px] list-decimal text-neutral-600 font-medium mb-2 pt-1"
                            }
                            readOnly={true}
                            autoFocus
                            placeholder="Type a prompt..."
                            focusRing={false}
                            variant="ghost"
                            size="md"
                          />
                        </div>
                      </Plate>
                      {item.parentId === "ROOT" && (
                        <>
                          <div className="ml-4 flex items-center">
                            <div>
                              {fileData?.file
                                ?.slice(0, 1)
                                .map((file: any, index: any) => {
                                  if (file.chat_id === item.chatId) {
                                    const fileName = file.original_name;
                                    const truncatedFileName =
                                      fileName?.length > 17
                                        ? fileName.substring(0, 17) + "..."
                                        : fileName;

                                    return (
                                      <a
                                        title={file.original_name}
                                        key={index}
                                        href={file.presigned_url}
                                        download={file.original_name}
                                        className="flex items-center gap-1.5 px-1.5 py-1 bg-[#f5f5f5] rounded-md w-fit hover:cursor-pointer hover:border-black transition-all"
                                      >
                                        <div className="text-[#525252]">
                                          <HiDocumentText size={16} />
                                        </div>
                                        <span className="text-[#454545] text-[14px] h-fit truncate font-semibold">
                                          {truncatedFileName}
                                        </span>
                                      </a>
                                    );
                                  }
                                })}
                            </div>
                            <div>
                              {fileData?.file?.length > 1 ? (
                                <div className="relative flex items-center bg-[#f5f5f5] gap-1.5 px-1.5 ml-2 rounded-md w-fit hover:cursor-pointer hover:border-black transition-all">
                                  <Menu>
                                    {({ open }) => (
                                      <>
                                        <Menu.Button className="flex items-center gap-2 px-2 py-[4px] rounded cursor-pointer ">
                                          <span className="text-[#454545] text-[14px] font-semibold">
                                            {fileData?.file?.length - 1} files
                                          </span>
                                          <RiArrowDownSLine
                                            size={15}
                                            className={`transition-all ${
                                              open ? "rotate-180 transform" : ""
                                            }`}
                                          />
                                        </Menu.Button>
                                        <Transition
                                          enter="transition ease-out duration-100"
                                          enterFrom="transform opacity-0 scale-95"
                                          enterTo="transform opacity-100 scale-100"
                                          leave="transition ease-in duration-75"
                                          leaveFrom="transform opacity-100 scale-100"
                                          leaveTo="transform opacity-0 scale-95"
                                        >
                                          {open && (
                                            <Menu.Items className="absolute right-0 top-full z-10 bg-white shadow py-1 px-2 rounded-md w-[185px] mt-2 text-sm text-neutral-500">
                                              {fileData?.file
                                                .slice(1)
                                                .map((file, index) => {
                                                  const fileName =
                                                    file.original_name;
                                                  const truncatedFileName =
                                                    fileName.length > 10
                                                      ? fileName.substring(
                                                          0,
                                                          12
                                                        ) + "..."
                                                      : fileName;
                                                  return (
                                                    <a
                                                      title={file.original_name}
                                                      key={index}
                                                      href={file.presigned_url}
                                                      download={
                                                        file.original_name
                                                      }
                                                      className="hover:bg-[#f5f5f5] rounded-md my-1 pl-[9px] flex items-center gap-2"
                                                    >
                                                      <HiDocumentText
                                                        size={18}
                                                      />
                                                      <span className="w-[100px]">
                                                        {truncatedFileName}
                                                      </span>
                                                    </a>
                                                  );
                                                })}
                                            </Menu.Items>
                                          )}
                                        </Transition>
                                      </>
                                    )}
                                  </Menu>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </>
                      )}
                      {group[group.length - 1].id === item.id &&
                      item.parentId !== "ROOT" ? (
                        <div className="flex items-center justify-end gap-2">
                          <img
                            width={32}
                            height={32}
                            className="rounded-full border"
                            src={
                              user?.avatar_url && user?.avatar_url !== "None"
                                ? user?.avatar_url
                                : "/images/avatar.svg"
                            }
                            alt="Profile"
                          />
                          <div className="text-neutral-400"> | </div>
                          <div className="text-neutral-400">
                            {getTimeDifferenceString(item?._up)}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}

      <div className="lg:col-span-12 hidden" ref={threadEndRef}></div>
      <div className="main-content flex fixed w-full bottom-0 z-50 bg-neutral-50 justify-center items-center sm:px-12 px-4 pt-4 pb-6">
        <div className="w-full max-w-6xl">
          <PromptField
            agent_id={agent_id}
            on_prompt_success={on_prompt_success}
            className="shadow-[0_3px_12px_0px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
    </div>
  );
};

export default PublicAgentComponent;
