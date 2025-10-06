"use client";

import React, { useState, useEffect } from 'react';
import { Mixpanel } from "@/lib/mixpanel";
import { Dialog, Transition } from "@headlessui/react";
import { clsx } from "clsx";
import _ from "lodash";
import { Fragment } from "react";
import { useSessionContext } from "@/lib/context/session";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { useTetryxAuth as useAuthUserContext } from "@/lib/providers/auth";
import axiosApiInstance from "@/lib/services/request";
import { RiAttachment2, RiCloseCircleFill } from "react-icons/ri";
import GetEarlyAccessDialog from "@/components/EarlyAccess/earlyAccess";
import toast from "react-hot-toast";

interface UploadPanelProps {
  label_class_name?: string;
  text: string;
  subText?: string,
  setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  uploadedFiles: File[];
  setFileIds: React.Dispatch<React.SetStateAction<string[]>>;
  setFileUploadLoad: React.Dispatch<React.SetStateAction<boolean>>;
  agent_installation_id?: string;
}

const UploadPanel: React.FC<UploadPanelProps> = ({
  label_class_name,
  text,
  subText,
  setUploadedFiles,
  uploadedFiles,
  setFileIds,
  setFileUploadLoad,
  agent_installation_id
}) => {
  const MAX_COUNT = 5;

  const { user }: any = useAuthUserContext();
  const { session } = useSessionContext();
  const [showEarlyAccess, setShowEarlyAccess] = useState<any>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [fileLimit, setFileLimit] = useState(false);

  useEffect(() => {
    if (!uploadedFiles.length) {
      closeModal();
    } else {

      const toastId = toast.loading("Uploading files...", {position:"bottom-right"});
      setFileUploadLoad(true);
      try {
        const formData = new FormData();

        uploadedFiles.forEach((file) => {
          formData.append("files", file);
        });
        
        if (agent_installation_id) {
          formData.append("agent_installation_id", `ins_${agent_installation_id}`);
        }

        axiosApiInstance
          .post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/file/upload/`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            setFileIds(response?.data?.files);
            toast.success("Files uploaded successfully!", { id: toastId, position:"bottom-right" })
            setFileUploadLoad(false);
            // Clear uploaded files after successful upload
            setUploadedFiles([]);
            return response.data;
          })
          .catch((error) => {
            toast.error("Something went wrong please try again", {position:"bottom-right"});
            setFileUploadLoad(false);
            throw error;
          });

        setIsOpen(false);
      } catch (error) {
        setFileUploadLoad(false);
      }
    }
  }, [uploadedFiles?.length]);

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;

    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length > MAX_COUNT) {
          toast.error(`You can only add a maximum of ${MAX_COUNT} files`);
          limitExceeded = true;
          return true;
        }
      }
    });

    if (!limitExceeded) {
      setUploadedFiles(uploaded);
      if (uploaded.length === MAX_COUNT) setFileLimit(true);
    }
  };

  const onUploadProgress = (progressEvent, file) => {};

  const onSubmitUploads = (e) => {
    e.preventDefault();
  };
  const handleFileEvent = async (e) => {
    console.log(uploadedFiles, "uploadedFiles");
    console.log(e.target.files, "e.target.files")
    if (uploadedFiles?.length < 6) {
      e.preventDefault();

      try {
        const chosenFiles = Array.prototype.slice?.call(e.target.files);
        handleUploadFiles(chosenFiles);
        await onSubmitUploads(e);

        Mixpanel.track("Upload Ingest", {
          provider: "Reframe Console",
          ..._.pick(user, "sub", "email", "name", "_id", "sid"),
        });
      } catch (error) {
        console.error("Error handling file event:", error);
      }
    } else {
      toast.error(`You can only add a maximum of ${MAX_COUNT} files`);
    }
  };

  function closeModal() {
    setIsOpen(false);
    setUploadedFiles([]);
  }

  return (
    <div className={clsx("")}>
      {user ? (
        <>
          <form
            onSubmit={onSubmitUploads}
            className={"relative w-full flex flex-row items-center justify-center py-8 px-4 rounded-md border border-dashed border-neutral-200 bg-neutral-50 transition-any smooth"}
          >
            <label
              htmlFor="fileUpload"
              className={label_class_name ?? "w-full flex items-center justify-center rounded-md cursor-pointer hover:bg-neutral-100  text-neutral-600 text-sm font-medium"}
              onChange={handleFileEvent}
            >
              <>
                <input
                  id="fileUpload"
                  type="file"
                  multiple
                  className={"absolute inset-0 w-full h-full opacity-0 flex-row space-x-2 cursor-pointer"}
                  accept={
                    "application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv"
                  }
                />
              </>
              <div className="flex flex-col gap-1 text-center">
                <div className="font-medium">{text}</div>
                <div className="text-neutral-400 text-sm">{subText}</div>
              </div>
              <div className="flex items-center mt-5 w-fit px-2 py-1 gap-1.5 relative z-10 font-medium rounded-md cursor-pointer border hover:bg-atrium-offWhite text-neutral-600 hover:text-black transition-any">
                <RiAttachment2 size={18} className="hidden md:flex"/>
                <div className="">Browse file</div>
              </div>
            </label>
          </form>
        </>
      ) : (
        <div
          onClick={() => {
            setShowEarlyAccess(true);
          }}
          className={"flex p-1.5 gap-1 rounded-md cursor-pointer bg-neutral-100 hover:bg-atrium-offWhite text-neutral-600 text-sm font-medium"}
        >
          <div className="hidden md:flex">Attach</div>
          <RiAttachment2 size={20} />
        </div>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white dark:bg-neutral-800 p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl font-bold">
                    Upload files
                    <div className="mt-2 text-base font-normal text-neutral-600 dark:text-neutral-400">
                      Confirm datasets to be added to Reframe.
                    </div>
                  </Dialog.Title>
                  <div className="flex flex-col pl-1.5 pr-6 pt-3 pb-8 gap-4 bg-neutral-50 dark:bg-white/5 border border-atrium-offWhite dark:border-neutral-700 rounded-md max-h-[200px] overflow-y-auto mt-6 mb-8">
                    {uploadedFiles.map((file: any, index: number) => {
                      // const width = `${Math.round(
                      //   fileProgress[file.name] ? fileProgress[file.name] : 0
                      // )}%`;
                      return (
                        <div key={file.name} className="flex items-center mt-4">
                          <DefaultButton
                            onClick={() => {
                              console.log(`Delete ${file.name}`);
                              const newUploadedFiles = [...uploadedFiles];
                              newUploadedFiles.splice(index, 1);
                              setUploadedFiles(newUploadedFiles);
                            }}
                            variant="ghost"
                            size="small"
                            iconRight={<RiCloseCircleFill size={18} />}
                            styleClass="w-fit font-medium text-neutral-400 dark:text-neutral-500 hover:text-red-600 focus:ouline-none focus-visible:ring-0 focus-visible:outline-0"
                          />
                          <div className="w-full">
                            <div className="flex justify-between ">
                              <div className="font-semibold">{file.name}</div>
                              {/* <span className="opacity-60">{width}</span> */}
                            </div>
                            {/* <div className="w-full bg-neutral-200 border border-neutral-300 dark:border-neutral-600 rounded-sm h-2 dark:bg-neutral-700">
                              <div
                                className={clsx(
                                  `bg-black dark:bg-white h-2 rounded-sm transition-all`,
                                  `${width}`
                                )}
                                style={{ width }}
                              ></div>
                            </div> */}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <DefaultButton
                      label="Cancel"
                      variant="default"
                      size="medium"
                      styleClass="focus:ouline-none focus-visible:ring-0 focus-visible:outline-0"
                      onClick={closeModal}
                    />
                    <DefaultButton
                      label="Upload"
                      size="medium"
                      styleClass=""
                      onClick={onSubmitUploads}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {showEarlyAccess && (
        <GetEarlyAccessDialog
          show={showEarlyAccess}
          setShow={setShowEarlyAccess}
        />
      )}
    </div>
  );
};

export default UploadPanel;
