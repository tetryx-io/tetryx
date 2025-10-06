"use client";
import React, { useState, useEffect } from "react";
import { useTetryxAuth as useAuthUserContext } from "@/lib/providers/auth";
import { usePathname } from "next/navigation";
import { RiCloseFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi2";
import { FaBug } from "react-icons/fa";
import { uploadFile } from "@/lib/services/prompt";
import {
  TrashIcon,
  Share1Icon,
  CrossCircledIcon,
  PaperPlaneIcon,
  FilePlusIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";

import PlateEditor from "@/components/Plate/components/plate-editor";
import { TooltipProvider } from "@/components/Plate/components/plate-ui/tooltip";

type PromptBoxProps = {
  setPrompt?: (prompt: string) => void;
  loading?: boolean;
  onSubmit?: () => void;
  setFileList?: React.Dispatch<React.SetStateAction<string[]>>;
  fileList?: string[];
  promptData?: string;
  customKey?: number;
  isDevMode?: boolean;
  thread_id?: string;
  agent_id?: string;
  agent_installation_id?: string;
  onResetFiles?: () => void;
  uploadProgress?: Record<string, number>;
  onUploadProgress?: (fileName: string, progress: number) => void;
  shouldResetFiles?: boolean;
};

const PromptBox: React.FC<PromptBoxProps> = ({
  setPrompt = () => {},
  loading = false,
  onSubmit = () => {},
  setFileList,
  promptData,
  fileList,
  customKey,
  isDevMode,
  thread_id,
  agent_id,
  agent_installation_id,
  onResetFiles,
  uploadProgress = {},
  onUploadProgress,
  shouldResetFiles = false,
}) => {
  const { user, loading: promptBoxLoading } = useAuthUserContext();
  const pathname = usePathname();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const resetFiles = () => {
    setUploadedFiles([]);
    if (setFileList) {
      setFileList([]);
    }
    if (onResetFiles) {
      onResetFiles();
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setUploadedFiles((prev) => [...prev, ...files]);

    const response = await uploadFile(
      files,
      thread_id,
      agent_installation_id,
      agent_id,
      (fileName: string, progress: number) => {
        if (onUploadProgress) {
          onUploadProgress(fileName, progress);
        }
      },
    );

    if (response.status && response.data && setFileList) {
      const newFileIds = response.data.files.map((file: any) => file);
      setFileList((prev) => [...prev, ...newFileIds]);
    } else {
      setUploadedFiles((prev) => prev.filter((file) => !files.includes(file)));
    }

    event.target.value = "";
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
    if (setFileList) {
      setFileList((prev) => prev.filter((_, index) => index !== indexToRemove));
    }
  };

  useEffect(() => {
    if (shouldResetFiles) {
      resetFiles();
    }
  }, [shouldResetFiles]);

  return (
    <div
      className={clsx(
        !user && pathname !== "/" && "pointer-events-none",
        "bg-white p-3 rounded-md border border-atrium-offWhite shadow-[0_3px_8px_0px_rgba(0,0,0,0.1)] w-full",
        isDevMode && "border-yellow-300",
      )}
    >
      <TooltipProvider
        disableHoverableContent
        delayDuration={500}
        skipDelayDuration={0}
      >
        <PlateEditor
          promptData={promptData}
          setPromptData={setPrompt}
          onSubmit={onSubmit}
          customKey={customKey}
          isAddingCmnt={false}
        />
      </TooltipProvider>

      <div className="attention-needed flex justify-between mt-3 items-center">
        <div className="relative flex transition-any">
          <button className="flex gap-1.5 items-center justify-center md:px-2 h-8 w-fit border rounded-md hover:bg-neutral-100">
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="absolute left-0 w-10 md:w-[100px] opacity-0 hover:cursor-pointer"
              accept={
                "application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv, image/*"
              }
            />
            <FilePlusIcon />
            <div className="hidden md:flex ">Upload</div>
          </button>

          {uploadedFiles.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap ml-2 border-l border-neutral-300 pl-2">
              {uploadedFiles.map((file, index) => {
                const isUploaded = fileList?.includes(file.name);
                return (
                  <div
                    key={index}
                    className="border border-neutral-200 flex items-center gap-1.5 px-1.5 py-1 rounded-md relative overflow-hidden"
                  >
                    <div
                      className={clsx(
                        "absolute bottom-0 left-0 h-[2px] transition-all duration-300",
                        isUploaded || uploadProgress[file.name] === 100 ? "bg-green-500" : "bg-blue-500",
                      )}
                      style={{
                        width: isUploaded
                          ? "100%"
                          : `${uploadProgress[file.name] || 0}%`,
                      }}
                    />
                    <HiDocumentText size={18} className="text-black/40" />
                    <span className="text-neutral-500 text-sm font-medium truncate max-w-[100px]">
                      {file.name}
                    </span>
                    <button onClick={() => removeFile(index)} className="ml-1">
                      <CrossCircledIcon />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isDevMode && (
            <div className="flex items-center">
              <span className="bg-yellow-50 border border-dashed border-yellow-400 text-yellow-700 h-8 px-3 rounded-md text-sm font-medium flex items-center select-none">
                <FaBug className="mr-1.5 text-yellow-600" /> Dev Mode
              </span>
            </div>
          )}

          <button
            onClick={onSubmit}
            disabled={loading}
            className={clsx(
              "flex items-center justify-center h-8 w-8 rounded-md",
              loading
                ? "bg-black text-white"
                : isDevMode
                  ? "bg-yellow-500 text-black"
                  : "bg-black text-white",
            )}
          >
            {loading ? (
              <div className="circle-loader h-[18px] w-[18px]"></div>
            ) : (
              <PaperPlaneIcon />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;
