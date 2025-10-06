import { Menu, Transition } from "@headlessui/react";
import { HiDocumentText } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";

const FileAttachments = ({ item, fileData }: any) => {
  return (
    <>
      {item.parentId === "ROOT" && (
        <>
          <div className="ml-4 flex gap-2 items-center mb-2">
            {fileData?.file?.map((file: any, index: any) => {
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
            <div>
              {fileData?.file?.length > 1 &&
              item.chatId ===
                fileData?.file?.filter((file) => file?.chat_id) ? (
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
                              {fileData?.file.slice(1).map((file, index) => {
                                const fileName = file.original_name;
                                const truncatedFileName =
                                  fileName.length > 10
                                    ? fileName.substring(0, 12) + "..."
                                    : fileName;
                                return (
                                  <a
                                    title={file.original_name}
                                    key={index}
                                    href={file.presigned_url}
                                    download={file.original_name}
                                    className="hover:bg-[#f5f5f5] rounded-md my-1 pl-[9px] flex items-center gap-2"
                                  >
                                    <HiDocumentText size={18} />
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
    </>
  );
};

export default FileAttachments;
