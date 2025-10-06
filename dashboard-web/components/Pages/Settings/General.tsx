import { motion } from "framer-motion";
import { useNotificationContext } from "@/components/Shared/Notification";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import Input from "@/components/Shared/Input";
import { RiFileCopyLine } from "react-icons/ri";
import { ImSpinner8 } from "react-icons/im";

export default function GeneralWorkspaceMgmt({
  username,
  handleUsernameChange,
  handleUpdateUsername,
  imagePreview,
  handleImageChange,
  handleUpdateImage,
  avatarError,
  workspace,
  nameLoading,
  imageLoading,
}: any) {
  const notifier: any = useNotificationContext();
  

  const handleCopyToClipboard = async (valueName: string, valueToBeCopied: string) => {
    await navigator.clipboard.writeText(valueToBeCopied);
    notifier.success({
      title: `${valueName} copied to clipboard`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 w-full lg:w-8/12 flex flex-col gap-10 max-w-6xl h-full overflow-y-clip"
    >
      <h2 className="text-2xl font-bold">General</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="rounded-md border border-neutral-200 flex flex-col gap-2 shadow-sm"
      >
        <div className="flex flex-col p-10 justify-start items-start gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Workspace name</h3>
            <p className="text-neutral-600">
              The workspace name is used for the organization on records like
              workspace activity logs, account reports, and billing information.
            </p>
          </div>

          <div className="flex justify-between gap-8 w-full">
            <div className="flex h-fit flex-col gap-1 mb-2 w-96">
              <label htmlFor="workspaceName" className="text-sm text-neutral-500 font-medium">
                Workspace Name
              </label>
              <div className="rounded-md w-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                <Input
                  name="workspaceName"
                  type="text"
                  value={username}
                  placeholder={username}
                  styleClass="border-0 h-10"
                  onChange={handleUsernameChange}
                  disabled={workspace?.role === "MEMBER"}
                />
              </div>
            </div>

            <div className="flex h-fit flex-col gap-1 mb-2 w-fit">
              <div className="text-sm text-neutral-500 font-medium">ID</div>
              <div className="group relative">
                <div className="flex h-10 px-3 gap-3 bg-neutral-100 justify-between items-center rounded-md w-full border border-neutral-200">
                  <div className="truncate text-neutral-700">{workspace?.id}</div>
                  <button
                    className="w-6 p-1 rounded hover:bg-black/5"
                    onClick={() => handleCopyToClipboard("ID", workspace?.id)}
                  >
                    <RiFileCopyLine size={16} className="text-neutral-500" />
                  </button>
                </div>
                <div className="absolute invisible group-hover:visible bg-neutral-800 text-white text-xs rounded py-1 px-2 -bottom-8 left-0 w-64">
                  Click to copy. This ID helps us identify your workspace during support
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
          <div className="text-sm text-neutral-500">
            Confirm availability of username
          </div>
          {nameLoading ? (
            <ImSpinner8 className="animate-spin" size={16} color="black" />
          ) : (
            <DefaultButton
              disabled={username === workspace?.name || !username || nameLoading}
              onClick={handleUpdateUsername}
              label="Save"
              variant="primary"
              size="medium"
              styleClass="w-fit font-medium"
            />
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="rounded-md border border-neutral-200 flex flex-col gap-2 shadow-sm"
      >
        <div className="flex flex-col p-10 justify-start items-start gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Workspace picture</h3>
            <p className="text-neutral-600">
              Add or change the file for the organization. This picture can be updated by all members of this workspace
            </p>
          </div>

          <div className="flex items-center gap-5">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={
                imagePreview
                  ? imagePreview
                  : workspace?.image_key ? workspace?.image_key : "/images/avatar.svg"
              }
              className="w-12 h-12 rounded"
              alt="Profile Avatar"
            />
            <input
              accept="image/jpeg, image/png"
              type="file"
              id="pictureUpload"
              name="picture"
              className="block w-full text-sm text-neutral-500
                            file:mr-4 file:py-2 file:px-4 file:rounded-md
                            file:border-0 file:text-sm file:font-semibold
                            file:bg-neutral-100 file:text-neutral-700 file:cursor-pointer
                            hover:file:bg-neutral-200"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
          {!!avatarError ? (
            <div className="text-sm text-red-500">{avatarError}</div>
          ) : (
            <div className="text-sm text-neutral-500">
              Maximum file size is 2MB
            </div>
          )}
          {imageLoading ? (
            <ImSpinner8 className="animate-spin" size={16} color="black" />
          ) : (
            <DefaultButton
              disabled={!imagePreview || !!avatarError || imageLoading}
              label="Update"
              variant="primary"
              size="medium"
              styleClass="w-fit font-medium"
              onClick={handleUpdateImage}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
