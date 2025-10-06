"use client";
import DummyAuthBlockText from "@/components/DummyAuthBlock";
import GetEarlyAccessDialog from "@/components/EarlyAccess/earlyAccess";
import { Editor } from "@/components/Plate/components/plate-ui/editor";
import { usePathname, useRouter } from "next/navigation";
import { plugins } from "@/components/Plate/lib/plate/plate-plugins";
import PromptField from "@/components/Prompt/prompt";
import { Plate } from "@udecode/plate-common";
import { useMemo, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { installAgent, uninstallAgent } from "@/lib/services/agent";
import { ImSpinner8 } from "react-icons/im";
import { RiEditLine, RiPlayLargeFill } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import FileAttachments from "./FileAttachments";
import { LiaThumbsUpSolid, LiaThumbsDown } from "react-icons/lia";
import { useSessionContext } from "@/lib/context/session";
import PublicAgentHeader from "@/components/Agent/PublicAgentHeader";

const AgentRender = ({
  agent,
  user,
  threadVisibility,
  groupedContent,
  handleScroll,
  setIsQuesEdit,
  isQuesEdit,
  setEditableChat,
  updateChat,
  fileData,
  getTimeDifferenceString,
  threadName,
  showEarlyAccess,
  setShowEarlyAccess,
  chatIds,
  userLoading,
  chatLoading,
}) => {
  const containerRef = useRef(null);
  const threadEndRef = useRef(null);
  const customKey = useMemo(() => `key-${Math.random()}`, []);
  const { session } = useSessionContext();
  const router = useRouter();
  const pathname = usePathname();
  const [agent_data, set_agent_data] = useState(agent || {});
  const on_prompt_success = (agentId: string) => {
    router.push(`${pathname}/setup`);
  };

  const onInstallAgent = async () => {
    const result = await installAgent({ agent_id: agent_data.id });

    on_prompt_success(agent_data.id);
  };

  const onRemoveAgent = async () => {
    const result = await uninstallAgent({ agent_id: agent_data.id, install_id: agent_data.installation?.id });

    if (result?.status) {
      set_agent_data({ ...agent_data, installed: false });
      toast.success("Agent uninstalled successfully");
    } else {
      toast.error(result?.message || "Failed to enable agent");
    }
  };

  return (
    <div className="search-results mb-5 mt-10 mx-4 md:mx-10 pb-[160px] dark:bg-neutral-900 dark:text-white">
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 mb-8">
        <PublicAgentHeader
          agent={agent_data}
          onRemoveAgent={onRemoveAgent}
          onInstallAgent={onInstallAgent}
        />
      </div>
      {session?.data?.user && threadVisibility === "No" && (
        <div className="lg:w-[65%] w-[100%] ml-4 bg-[#ffffff] dark:bg-neutral-800 mt-[25px] pl-3 text-[22px] font-semibold p-3">
          You do not have access to this content
        </div>
      )}
      {chatLoading ||
        (!groupedContent.length && (
          <div className="w-full mb-8 py-2 pl-6 pr-[40px] bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-lg sm:py-2 sm:pl-6 sm:pr-[60px] h-auto">
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

      <div ref={containerRef} onScroll={handleScroll}>
        {(!session?.data?.user ? [groupedContent[0]] : groupedContent).map(
          (group, index) => (
            <div
              className="main-content grid grid-cols-1 lg:grid-cols-12 my-5 gap-2 lg:gap-10 relative align-top"
              key={index}
            >
              <div className="title-content mb-4 lg:mb-0 lg:col-span-8">
                <div className="w-full mb-[40px] p-4">
                  {session?.data?.user ? (
                    group.map((item, subIndex) => (
                      <div key={`${item.id}-${subIndex}`}>
                        <Plate
                          key={customKey}
                          readOnly={
                            !(
                              item.parentId === "ROOT" &&
                              isQuesEdit?.index === item?.chatId &&
                              isQuesEdit?.editable
                            )
                          }
                          plugins={plugins}
                          value={item.children}
                          onChange={(e) =>
                            item?.parentId === "ROOT" && setEditableChat(e)
                          }
                        >
                          <div
                            className={`relative rounded ${
                              item.parentId === "ROOT"
                                ? "text-base font-medium bg-[#ffffff] dark:bg-neutral-800 border-[#E5E5E5] dark:border-gray-700 border mb-5 ml-auto py-2 px-2 w-[calc(100%-20px)] before:content-[''] before:h-[100%] before:w-[1px] before:bg-neutral-400 before:absolute before:left-[-20px] before:top-0"
                                : item.parentId === "UNKNOWN"
                                  ? " text-[16px] ml-2"
                                  : "leading-[25.6px] text-neutral-600 dark:text-neutral-300 border-[#0A0A0A0D] dark:border-gray-700 border font-medium bg-[#f5f3ff] dark:bg-neutral-700 ml-auto py-1 px-2 w-[calc(100%-20px)] before:content-[''] before:h-[100%] before:w-[1px] before:bg-[#a256f7] before:absolute before:left-[-20px] before:top-0"
                            }`}
                          >
                            <div className="flex items-center">
                              <Editor
                                className={
                                  item.parentId === "ROOT"
                                    ? "text-base font-medium"
                                    : "leading-[25.6px] list-decimal text-neutral-600 dark:text-neutral-300 font-medium"
                                }
                                readOnly={
                                  !(
                                    item.parentId === "ROOT" &&
                                    isQuesEdit?.index === item?.chatId &&
                                    isQuesEdit?.editable
                                  )
                                }
                                autoFocus
                                placeholder=""
                                focusRing={false}
                                variant="ghost"
                                size="md"
                              />
                            </div>
                            {item?.parentId !== "ROOT" &&
                            item?.parentId !== "UNKNOWN" ? (
                              <div className="flex items-center justify-end m-1">
                                <div className="hover:text-[#9f44f1] cursor-pointer">
                                  <LiaThumbsUpSolid size={20} />
                                </div>
                                <div className="hover:text-[#9f44f1] ml-2 cursor-pointer">
                                  <LiaThumbsDown size={20} />
                                </div>
                              </div>
                            ) : (
                              ""
                            )}

                            {item.parentId === "ROOT" && (
                              <div className="flex items-center justify-start gap-2 ml-2">
                                <div className="mb-2">
                                  <img
                                    width={32}
                                    height={32}
                                    className="rounded-full border"
                                    src={
                                      user?.avatar_url &&
                                      user?.avatar_url !== "None"
                                        ? user?.avatar_url
                                        : "/images/avatar.svg"
                                    }
                                    alt="Profile"
                                  />
                                </div>

                                <div className="text-neutral-400 mb-2"> | </div>
                                <div className="text-[#A3A3A3] dark:text-neutral-400 font-medium text-[14px] mb-2">
                                  {getTimeDifferenceString(item?._up)}
                                </div>
                                <div className="ml-auto">
                                  {item.parentId === "ROOT" && (
                                    <div className="flex items-center">
                                      <div className="border dark:border-gray-600 rounded-md p-1">
                                        <RiEditLine
                                          size={16}
                                          className="cursor-pointer"
                                          onClick={() =>
                                            setIsQuesEdit({
                                              index: item?.chatId,
                                              editable: true,
                                            })
                                          }
                                        />
                                      </div>
                                      <div
                                        className={`border dark:border-gray-600 rounded-md p-1 ml-3 ${
                                          isQuesEdit?.index === item?.chatId
                                            ? "bg-[#e5e5e5] dark:bg-neutral-700 cursor-pointer"
                                            : "pointer-events-none"
                                        }`}
                                      >
                                        {chatLoading &&
                                        isQuesEdit?.index === item?.chatId ? (
                                          <ImSpinner8
                                            className="animate-spin"
                                            size={16}
                                            color="#a0a0a0"
                                          />
                                        ) : (
                                          <RiPlayLargeFill
                                            size={16}
                                            className="cursor-pointer"
                                            onClick={updateChat}
                                          />
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </Plate>

                        <FileAttachments item={item} fileData={fileData} />
                      </div>
                    ))
                  ) : (
                    <div className="mb-7">
                      {group && (
                        <Plate
                          key={customKey}
                          readOnly
                          plugins={plugins}
                          value={group[0].children}
                        >
                          <div
                            ref={containerRef}
                            className={`w-full bg-white dark:bg-neutral-800 ${
                              group[0].parentId === "ROOT"
                                ? "text-base font-medium bg-neutral-100 dark:bg-neutral-700 border-l border-neutral-100 dark:border-neutral-600 mb-5 ml-auto py-4 px-2 w-[calc(100%-20px)] before:content-[''] before:h-[100%] before:w-[1px] before:bg-neutral-400 before:absolute before:left-[-20px] before:top-0"
                                : "leading-[25.6px] text-neutral-600 dark:text-neutral-300 border-[#0A0A0A0D] dark:border-gray-700 border font-medium bg-[#f5f3ff] dark:bg-neutral-700 ml-auto py-4 px-2 w-[calc(100%-20px)] before:content-[''] before:h-[100%] before:w-[1px] before:bg-[#a256f7] before:absolute before:left-[-20px] before:top-0"
                            }`}
                          >
                            <Editor
                              className={
                                group[0].parentId === "ROOT"
                                  ? "text-base font-medium"
                                  : "leading-[25.6px] list-decimal text-neutral-600 dark:text-neutral-300 font-medium"
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
                      )}
                      {userLoading ? (
                        <>
                          <div className="bg-[#f5f3ff] dark:bg-neutral-700 p-[15px]">
                            <p className="text-[#7C3AED] dark:text-[#a256f7] font-medium text-[16px] mb-1">
                              Fetching Results ...
                            </p>
                            <Skeleton
                              baseColor="#ebe9f5"
                              highlightColor="#f5f3ff"
                              height={17}
                              count={2}
                              width="100%"
                            />
                            <Skeleton
                              baseColor="#ebe9f5"
                              highlightColor="#f5f3ff"
                              height={17}
                              count={1}
                              width="80%"
                            />
                            <Skeleton
                              baseColor="#ebe9f5"
                              highlightColor="#f5f3ff"
                              height={17}
                              count={1}
                              width={420}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <DummyAuthBlockText
                            setShowEarlyAccess={setShowEarlyAccess}
                          />
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <div ref={threadEndRef}></div>
      <div
        className="grid grid-cols-1 lg:grid-cols-12 mb-8 gap-2 lg:gap-10 z-20 fixed"
        style={{ width: "calc(100% - 5rem)", bottom: "0" }}
      >
        <div className="mb-7 lg:mb-0 col-span-12 lg:col-span-8">
          <PromptField
            agent_id={agent?.id}
            thread_id={threadName}
            className="shadow-[0_3px_12px_0px_rgba(0,0,0,0.1)] dark:shadow-[0_3px_12px_0px_rgba(255,255,255,0.1)]"
          />
        </div>
      </div>

      {showEarlyAccess && (
        <GetEarlyAccessDialog
          user={user}
          chat_id_list={chatIds}
          show={showEarlyAccess}
          setShow={setShowEarlyAccess}
        />
      )}
    </div>
  );
};

export default AgentRender;
