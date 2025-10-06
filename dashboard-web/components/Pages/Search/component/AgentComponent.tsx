"use client";
import { createApolloClient } from "@/lib/apolloClient";
import { runCurrentPrompt } from "@/lib/services/prompt";
import { useTetryxAuth as useAuthUserContext } from "@/lib/providers/auth";
import { getTimeDifferenceString } from "@/lib/utils";
import { useQuery, useSubscription } from "@apollo/client";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import {
  GET_FILES,
  AGENT_SUBSCRIPTION,
  UPDATE_CHAT,
} from "@/app/agent/Components/AgentQueries";
import AgentRender from "@/app/agent/Components/AgentRender";
import { useSessionContext } from "@/lib/context/session";

const AgentComponent = ({ id, initialData }: any) => {

  // State variables
  const [threadVisibility, setThreadVisibility] = useState<any>(null);
  const [threadContent, setThreadContent] = useState(
    initialData?.agent_agent?.length
      ? initialData.agent_agent.flatMap((item) => {
          return (
            item?.description?.components?.map((subItem) => ({
              ...subItem,
              chatId: item?.id,
              pair_id: item?.pair_id,
              parentId: item?.parent_id,
            })) || []
          );
        })
      : []
  );

  const [showEarlyAccess, setShowEarlyAccess] = useState<any>(false);
  const [chatIds, setChatIds] = useState<any>([]);
  const [fileIds, setFileIds] = useState<any>([]);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isQuesEdit, setIsQuesEdit] = useState<any>({
    index: 0,
    editable: false,
  });
  const [editableChat, setEditableChat] = useState<any>([]);
  const [chatLoading, setChatLoading] = useState<boolean>(false);
  const [updatedChat, setUpdatedChat] = useState<any>();

  // Hooks
  const {
    user,
    loading: userLoading,
  } = useAuthUserContext();
  const { agent_name } = useParams();
  const threadEndRef = useRef<HTMLDivElement>(null);
  const apolloClient = useMemo(() => createApolloClient(""), []);
  const { session } = useSessionContext();

  const threadId = id || agent_name.slice(-16);


  // Apollo subscriptions and queries
  const { data, loading, error } = useSubscription(AGENT_SUBSCRIPTION, {
    variables: { agent_id: threadId },
  });


  const { data: fileData } = useQuery(GET_FILES, {
    variables: {
      fileIds: fileIds
        .filter((fileId) => fileId.includes("fil_"))
        .map((fileId) => fileId.replace("fil_", "")),
    },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  // Handle thread visibility based on user and workspace
  useEffect(() => {
    if (data && data.agent_agent[0] && session?.data?.workspace.id && user) {
      const visibility = data.agent_agent[0].visibility
      if (
        visibility === "WORKSPACE" &&
        session?.data?.workspace.id === data.agent_agent[0].workspace_id
      ) {
        setThreadVisibility("Yes");
      } else if (
        visibility === "USER" &&
        data.agent_agent[0].creator_id === user.id
      ) {
        setThreadVisibility("Yes");
      } else {
        setThreadVisibility("No");
      }
    }
  }, [session?.data?.workspace.id]);

  // Update chat function
  const updateChat = async () => {
    setChatLoading(true);
    try {
      const { data } = await apolloClient.mutate({
        mutation: UPDATE_CHAT,
        variables: {
          chat_id: editableChat[0]?.chatId,
          description: { components: editableChat },
        },
      });

      const updatedChat = data.update_chat.returning[0];
      setUpdatedChat(updatedChat);
    } catch (error) {
      console.error("Error updating thread:", error);
    } finally {
      setTimeout(() => {
        setChatLoading(false);
        setIsQuesEdit({ index: 0, editable: false });
      }, 2000);
    }
  };

  // Handle new data from subscription
  useEffect(() => {
    if (data?.agent_agent?.length > 0 && !loading) {
      let files: any = [];
      let threadData = data.agent_agent.flatMap((item) => {
        item?.attached_files?.files?.forEach((subItem) => {
          files.push(subItem);
        });

        if (item?.id && !chatIds.includes(item.id)) {
          setChatIds([...chatIds, item.id]);
        }

        return (
          item?.description?.components?.map((subItem) => ({
            ...subItem,
            chatId: item?.id,
            title: item?.thread?.title,
            _up: item?._up,
            pair_id: item?.pair_id,
            parentId: item?.parent_id,
            attachedFiles: item?.attached_files,
          })) || []
        );
      });
      setFileIds([...fileIds, ...files]);
      setThreadContent(threadData);
    }
  }, [data]);

  // Handle updates after chat modification
  useEffect(() => {
    if (updatedChat) {
      runCurrentPrompt(updatedChat?.id,session?.data?.workspace.id).then(() => {
        setUpdatedChat("");
      });
    }
  }, [updatedChat]);

  // Handle auto-scroll on new messages
  useEffect(() => {
    if (autoScroll) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [autoScroll]);

  // Scroll event listener
  const handleScroll = () => {
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setAutoScroll(isAtBottom);
  };

  // Add scroll event listener on mount and remove on unmount
  useEffect(() => {
    threadEndRef.current?.scrollIntoView();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Group chat content based on pair_id
  const groupedContent = useMemo(() => {
    if (!threadContent?.length) return [];
  
    const chatMap = new Map();
  
    threadContent.forEach((chat) => {
      const existingChat = chatMap.get(chat.chatId);
      if (existingChat) {
        existingChat.children.push(chat);
      } else {
        chatMap.set(chat.chatId, { ...chat, children: [chat] });
      }
    });
  
    const groupedChats = Array.from(chatMap.values());
    
    return groupedChats.reduce((acc, current) => {
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
  }, [threadContent]);

  return (
    <>
      <AgentRender
        user={user}
        threadVisibility={threadVisibility}
        groupedContent={groupedContent}
        agent={data?.agent_agent[0]}
        handleScroll={handleScroll}
        setIsQuesEdit={setIsQuesEdit}
        isQuesEdit={isQuesEdit}
        setEditableChat={setEditableChat}
        updateChat={updateChat}
        fileData={fileData}
        getTimeDifferenceString={getTimeDifferenceString}
        threadName={agent_name}
        showEarlyAccess={showEarlyAccess}
        setShowEarlyAccess={setShowEarlyAccess}
        chatIds={chatIds}
        userLoading={userLoading}
        chatLoading={chatLoading}
      />
    </>
  );
};

export default AgentComponent;
