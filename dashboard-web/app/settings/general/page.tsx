"use client";

import Loader from "@/components/Common/AtriumLoader";
import GeneralWorkspaceMgmt from "@/components/Pages/Settings/General";
import { useNotificationContext } from "@/components/Shared/Notification";

import { updateWorspaceProfile, updateWorkspaceWithFormData } from "@/lib/services/user";
import { useSessionContext } from "@/lib/context/session";
import { useEffect, useState } from "react";

const GeneralPage = () => {
  const { session  } = useSessionContext();
  const notifier: any = useNotificationContext();

  const [username, setUsername] = useState(session?.data?.workspace?.name);
  const [imagePreview, setImagePreview] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarError, setAvatarError] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [nameLoading, setNameLoading] = useState(false);

  useEffect(() => {
    setUsername(session?.data?.workspace?.name);
  }, [session?.data]);
  

  function handleUsernameChange(event: any) {
    setUsername(event.target.value);
  }

  async function handleUpdateUsername() {
    setNameLoading(true);
    const formData = new FormData();
    formData.append('name', username);
    
    await updateWorkspaceWithFormData(formData)
      .then((res) => {
        if (res && res.data.success) {
          notifier.success({
            title: `Workspace name updated`,
            message: `Your workspace name has been updated to ${username}`,
          });
          setNameLoading(false);
        }
      })
      .catch((e) => {
        console.error(e);
        notifier.error({
          title: `Failed to update workspace name`,
        });
        setNameLoading(false);
      });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setAvatarError("Image size exceeds 2MB limit");
        return;
      }

      setAvatarError("");
      setAvatarFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  }

  async function handleUpdateImage() {
    if (!avatarFile) return;

    setImageLoading(true);
    const formData = new FormData();
    formData.append('image', avatarFile);

    try {
      const res = await updateWorkspaceWithFormData(formData);
      if (res && res.data) {
        notifier.success({
          title: `Workspace avatar updated`,
          message: `Please give a few minutes for changes to take effect`,
        });
        
        if (imagePreview) {
          URL.revokeObjectURL(imagePreview);
        }
        setImagePreview("");
        setAvatarFile(null);
      }
    } catch (e) {
      console.error(e);
      notifier.error({
        title: `Failed to update workspace avatar`,
      });
    } finally {
      setImageLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  if (session.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <Loader />
        </div>
      </div>
    );
  }

  // if (error.some((e) => e)) {
  //   console.error(error);
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="flex flex-col items-center">
  //         <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
  //           Something went wrong
  //         </h1>
  //         <p className="text-neutral-600 dark:text-neutral-300">
  //           Please try refreshing the page
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <GeneralWorkspaceMgmt
        handleUsernameChange={handleUsernameChange}
        handleUpdateUsername={handleUpdateUsername}
        handleImageChange={handleImageChange}
        handleUpdateImage={handleUpdateImage}
        username={username}
        imagePreview={imagePreview}
        avatarError={avatarError}
        workspace={session.data?.workspace}
        nameLoading={nameLoading}
        imageLoading={imageLoading}
      />
    </div>
  );
};

export default GeneralPage;
