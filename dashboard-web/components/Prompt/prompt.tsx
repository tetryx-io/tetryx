import { useState, useEffect, useMemo, useRef } from "react";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import clsx from 'clsx';
import { triggerPrompt } from "@/lib/services/prompt";
import PromptBox from "../Pages/Atrium/PromptBox";

interface PromptFieldProps {
  className?: string;
  setShowModal?: (show: boolean) => void;
  agent_id: string;
  thread_id?: string;
  agent_installation_id?: string;
  on_prompt_success?: (data: any) => void;
  isDevMode?: boolean;
}

const PromptField: React.FC<PromptFieldProps> = ({
  className,
  setShowModal,
  agent_id,
  thread_id,
  agent_installation_id,
  on_prompt_success,
  isDevMode,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [promptData, setPromptData] = useState<any>([]);
  const [fileList, setFileList] = useState<string[]>([]);
  const [customKey, setCustomKey] = useState<number>(0);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [shouldResetFiles, setShouldResetFiles] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        setShowModal
      ) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowModal]);

  const onSubmit = () => {
    setLoading(true);
    triggerPrompt({
      payload: promptData,
      fileIdsArr: fileList.map((item: any) => item?.id),
      thread_id: thread_id,
      agent_id: agent_id
    })
      .then((res) => {
        if (res && res.status && res.data) {
          setLoading(false);
          const customKey = Math.floor(Math.random() * 1000);
          setCustomKey(customKey);

          if (on_prompt_success) {
            on_prompt_success(res.data)
          }

          const initialValue = [
            {
              id: "1",
              type: ELEMENT_PARAGRAPH,
              children: [{ text: "" }],
            },
          ];
          setPromptData(initialValue);
          setShouldResetFiles(true);
          setFileList([]);
        }
      })
      .catch((e) => {
        console.log("error:", e);
        setLoading(false);
        
      });
  };

  const handleUploadProgress = (fileName: string, progress: number) => {
    setUploadProgress(prev => ({
      ...prev,
      [fileName]: progress
    }));
  };

  return (
    <div ref={modalRef} className={clsx(
      className
    )}>
      <PromptBox
        promptData={promptData}
        fileList={fileList}
        setFileList={setFileList}
        loading={loading}
        setPrompt={setPromptData}
        onSubmit={onSubmit}
        customKey={customKey}
        thread_id={thread_id}
        agent_id={agent_id}
        agent_installation_id={agent_installation_id}
        isDevMode={isDevMode}
        shouldResetFiles={shouldResetFiles}
        onResetFiles={() => {
          setFileList([]);
          setShouldResetFiles(false);
        }}
        uploadProgress={uploadProgress}
        onUploadProgress={handleUploadProgress}
      />
    </div>
  );
};

export default PromptField;
