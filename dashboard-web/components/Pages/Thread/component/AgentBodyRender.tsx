"use client";
import { Editor } from "@/components/Plate/components/plate-ui/editor";
import { plugins } from "@/components/Plate/lib/plate/plate-plugins";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { Plate } from "@udecode/plate-common";
import { useMemo, useRef, useState } from "react";
import { RiEditLine, RiSave2Fill } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import { installAgent } from "@/lib/services/agent";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@/lib/context/session";

const AgentRender = ({ data, loading }) => {
  const { session } = useSessionContext();
  const containerRef = useRef(null);
  const customKey = useMemo(() => `key-${Math.random()}`, []);
  const [isEditing, setIsEditing] = useState(false);

  const handleInstallAgent = async () => {
    if (!data?.id || !session?.data?.workspace.id) {
      toast.error("Missing agent ID or workspace ID");
      return;
    }

    const result = await installAgent({ agent_id: data.id });

    if (result?.status) {
      toast.success("Agent enabled successfully");
    } else {
      toast.error(result?.message || "Failed to enable agent");
    }
  };

  return (
    <div className="search-results mb-5 mt-10 mx-4 md:mx-10 pb-[160px] dark:bg-neutral-900 dark:text-white">
      {loading ? (
        <Skeleton count={10} baseColor="#202020" highlightColor="#444" />
      ) : (
        <div>
          <div className="flex w-[100%] mb-4 justify-between items-center">
            <div className="dark:text-white">{data?.name}</div>
            <div className="flex space-x-2">
              <DefaultButton
                label="Enable"
                variant="default"
                size="medium"
                onClick={handleInstallAgent}
                className="dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
              />
              <DefaultButton
                label={isEditing ? "Save" : "Edit"}
                iconRight={
                  isEditing ? (
                    <RiSave2Fill size={15} />
                  ) : (
                    <RiEditLine size={15} />
                  )
                }
                variant="default"
                size="medium"
                onClick={() => setIsEditing(!isEditing)}
                className="dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
              />
            </div>
          </div>

          <div>
            <Plate
              key={customKey}
              readOnly={!isEditing}
              plugins={plugins}
              value={data.description.components}
            >
              <div
                ref={containerRef}
                className={`w-full bg-white dark:bg-neutral-800 leading-[25.6px] text-neutral-600 dark:text-neutral-300 border-[#0A0A0A0D] dark:border-neutral-700 border font-medium ${isEditing ? "bg-white dark:bg-neutral-800" : "bg-[#f5f3ff] dark:bg-neutral-700"} ml-auto py-4 px-2 w-[calc(100%-20px)] before:content-[''] before:h-[100%] before:w-[1px] before:bg-[#a256f7] before:absolute before:left-[-20px] before:top-0"`}
              >
                <Editor
                  className={
                    "leading-[25.6px] list-decimal text-neutral-600 dark:text-neutral-300 font-medium"
                  }
                  readOnly={!isEditing}
                  autoFocus={isEditing}
                  placeholder="Type a prompt..."
                  focusRing={false}
                  variant="ghost"
                  size="md"
                />
              </div>
            </Plate>
          </div>
          <div>
            <div>
              <iframe
                src="https://agent-ldgxdqaemk46nij5.code.atrium.st/?folder=/root/code_workspace"
                width="100%"
                height="600px"
                frameBorder="0"
                title="Agent Code Workspace"
                className="dark:border-neutral-700"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentRender;
