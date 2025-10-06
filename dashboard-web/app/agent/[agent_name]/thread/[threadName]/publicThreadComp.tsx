"use client";
import GetEarlyAccessDialog from "@/components/EarlyAccess/earlyAccess";
import { Editor } from "@/components/Plate/components/plate-ui/editor";
import { plugins } from "@/components/Plate/lib/plate/plate-plugins";
import PromptField from "@/components/Prompt/prompt";
import ThreadHeader from "@/components/Thread/ThreadHeader";
import { Plate } from "@udecode/plate-common";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSessionContext } from "@/lib/context/session";
import "react-loading-skeleton/dist/skeleton.css";
import { useThreadSubscription } from "@/generated/graphql";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import { RiArrowDownLine } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi2";
import { updateThread } from "@/lib/services/thread";
import { toast } from "react-hot-toast";

const PublicThreadComponent = ({ initialData, agent, thread_chat }: any) => {
  const [_thread, _setThread] = useState<any>();
  const { session } = useSessionContext();
  const [showEarlyAccess, setShowEarlyAccess] = useState<any>(false);
  const [chatIds, setChatIds] = useState<any>([]);
  const { threadName, agent_name } = useParams();
  const containerRef = useRef(null);
  const threadEndRef = useRef<null | HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const thread_id = Array.isArray(threadName) ? threadName[0] : threadName;

  const [isAtBottom, setIsAtBottom] = useState(true);
  const agent_id = (
    Array.isArray(agent_name) ? agent_name[0] : agent_name
  ).slice(-16);
  const __thead_subscription = useThreadSubscription({
    variables: { id: thread_id },
  });

  const handleVisibilityChange = async (newVisibility: string) => {
    const response = await updateThread({ thread_id, data: { visibility: newVisibility } });
    if (response.status) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  useEffect(() => {
    if (__thead_subscription?.data?.thread) {
      _setThread(__thead_subscription);
    }
  }, [__thead_subscription]);

  const checkIfAtBottom = (event: Event) => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isBottom = scrollHeight - (scrollTop + clientHeight) <= 12; // Increased threshold
      setIsAtBottom(isBottom);
    }
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
      setIsAtBottom(true);
    }
  };

  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener("scroll", checkIfAtBottom);
      return () => {
        currentScrollRef.removeEventListener("scroll", checkIfAtBottom);
      };
    }
  }, []);

  const ChatComponent = ({ item }) => {
    const creationTime = item._cr ? new Date(item._cr) : null;
    const isPrompt = item.type === "PROMPT";

    return (
      <div
        className={`w-full rounded-md shadow-sm mb-4 overflow-hidden ${
          isPrompt ? "bg-violet-50" : "border border-neutral-100"
        }`}
      >
        <div className="p-4">
          <Plate
            key={item.id}
            readOnly={true}
            plugins={plugins}
            value={item.body_richtext?.components}
          >
            <div
              ref={containerRef}
              className={`w-full ${
                isPrompt ? "text-md font-medium" : "text-base"
              }`}
            >
              <Editor
                className={isPrompt ? "text-md font-medium" : "text-base"}
                readOnly={true}
                autoFocus={false}
                placeholder="Type a prompt..."
                focusRing={false}
                variant="ghost"
                size="md"
              />
            </div>
          </Plate>
        </div>
        <div className={`px-4 py-2 flex items-center justify-between`}>
          <div className="flex items-center gap-4">
            <span className={`text-sm font-medium`}>
              {(() => {
                switch (item.type) {
                  case "PROMPT":
                    return "User";
                  case "RESPONSE":
                    return "AI Assistant";
                  case "INPUT":
                    return "System Input";
                  default:
                    return "Unknown";
                }
              })()}
            </span>

            {item.file_attachment_list &&
              item.file_attachment_list.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  {item.file_attachment_list.map((attachment) => (
                    <a
                      key={attachment.file.sha256_hexdigest}
                      href={attachment.file.presigned_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-neutral-200 flex items-center gap-1.5 px-1.5 py-1 rounded-md hover:bg-neutral-50 transition-colors"
                    >
                      <HiDocumentText size={18} className="text-black/40" />
                      <span className="text-neutral-500 text-sm font-medium truncate max-w-[100px]">
                        {attachment.file.original_name}
                      </span>
                    </a>
                  ))}
                </div>
              )}
          </div>

          {creationTime && (
            <span className="text-xs text-gray-500 shrink-0">
              {formatDistanceToNow(creationTime, { addSuffix: true })}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto relative" suppressHydrationWarning>
      <div className="grid grid-rows-[1fr_216px]">
        <div className="relative">
          <div
            className={`w-full flex items-center z-40 fixed px-6 bg-white border-b h-[54px] transition-any`}
          >
            {_thread?.data?.thread && (
            <div className={`w-full`}>
              <ThreadHeader
                title={_thread?.data?.thread?.title || ""}
                agent={agent}
                  visibility={_thread?.data?.thread?.visibility || ""}
                  thread={_thread}
                  onVisibilityChange={handleVisibilityChange}
                />
              </div>
            )}
          </div>
          <div className="w-full h-[calc(100vh-290px)] relative pt-[88px] px-2">
            <div className="h-full overflow-y-auto" ref={scrollRef}>
              <div className="w-full max-w-screen-xl mx-auto px-4 md:px-10">
                {_thread?.data?.thread?.chat_list.map((chat, index, array) => (
                  <div
                    key={chat.id}
                    ref={index === array.length - 1 ? lastMessageRef : null}
                  >
                    <ChatComponent key={chat.id} item={chat} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {!isAtBottom && (
            <motion.button
              className="fixed group bottom-[212px] left-0 right-0 w-fit mx-auto flex items-center border bg-neutral-100 text-neutral-600 rounded-full px-2 py-1.5 shadow"
              onClick={scrollToBottom}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-0 overflow-x-clip opacity-0 group-hover:mr-1 group-hover:w-[48px] group-hover:opacity-100 group-hover:translate-x-1 text-sm font-medium transition-any smooth">
                Scroll
              </div>
              <RiArrowDownLine size={20} />
            </motion.button>
          )}
        </div>
      </div>

      <div className="lg:col-span-12 hidden" ref={threadEndRef}></div>
      <div className="mb-2 w-full fixed left-0 bottom-5 z-20">
        {_thread?.data?.thread && (
          <PromptField
            isDevMode={_thread?.data?.thread?.agent_debug_mode || false}
            agent_id={agent_id}
            thread_id={thread_id}
            agent_installation_id={agent?.installation?.id}
            className="w-full max-w-screen-xl mx-auto px-4 md:px-10"
          />
        )}
      </div>

      {showEarlyAccess && (
        <GetEarlyAccessDialog
          user={session?.data?.user}
          chat_id_list={chatIds}
          show={showEarlyAccess}
          setShow={setShowEarlyAccess}
        />
      )}
    </div>
  );
};

export default PublicThreadComponent;
