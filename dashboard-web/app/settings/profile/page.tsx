"use client";

import Loader from "@/components/Common/AtriumLoader";
import Profile from "@/components/Pages/Settings/Profile";
import { useNotificationContext } from "@/components/Shared/Notification";

import { updateUserProfile, updateUserProfileWithFormData, updateUser } from "@/lib/services/user";
import { useTetryxAuth as useAuthUserContext } from "@/lib/providers/auth";
import { useTetryxAuth as useSupabaseAuth } from "@/lib/providers/auth";
import { useEffect, useState } from "react";
import { useSessionContext } from "@/lib/context/session";

const ProfilePage = () => {
  const { supabase, signOut } = useSupabaseAuth();
  const { session } = useSessionContext();
  const notifier: any = useNotificationContext();
  const { user, loading } = useAuthUserContext();

  const [username, setUsername] = useState(session?.data?.user?.name);
  const [base64Avatar, setBase64Avatar] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [avatarError, setAvatarError] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [nameLoading, setNameLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user?.name);
      setUserEmail(user?.email);
    }
  }, [user]);

  console.log({ user });

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }
  const changeUserEmail = (event) => {
    setUserEmail(event?.target.value);
  };
  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setAvatarError("Image size exceeds 2MB limit");
        return;
      }
      setAvatarError("");
      
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    } else {
      setImageFile(null);
      setImagePreview("");
    }
  }
  async function handleUpdateUsername() {
    setNameLoading(true);

    
    const formData = new FormData();
    formData.append('name', username);

    await updateUserProfileWithFormData(formData)
      .then(async (res) => {
        if (res && res?.data?.success) {
          notifier.success({
            title: `User name updated`,
            message: `Your user name has been updated to ${username}`,
          });
          setNameLoading(false);
          await supabase.auth.refreshSession();
        }
      })
      .catch((error) => {
        notifier.error({
          title: `Failed to update user name`,
        });
        setNameLoading(false);
      });
  }
  const handleUpdatedEmail = async () => {
    const formData = new FormData();
    formData.append('email', userEmail);
    setEmailLoading(true);
    await updateUserProfileWithFormData(formData)
      .then(async (res) => {
        if (res && res?.data) {
          notifier.success({
            title: `Email Updated`,
            message: `Your email has been updated to ${userEmail}`,
          });
          setEmailLoading(false);
          signOut();
        }
      })
      .catch((error) => {
        notifier.error({
          title: `Failed to update user email`,
        });

        setEmailLoading(false);
      });
  };

  const handleUpdatedPassword = async () => {
    const formData = new FormData();
    formData.append('password', password);
    setPasswordLoading(true);
    await updateUserProfileWithFormData(formData)
      .then(async (res) => {
        if (res && res?.data) {
          notifier.success({
            title: `User password updated`,
            message: `Your password has been updated`,
          });
          setPasswordLoading(false);
          signOut();
        }
      })
      .catch((error) => {
        notifier.error({
          title: `Failed to update user password`,
        });
        setPasswordLoading(false);
      });
  };

  async function handleUpdateImage() {
    if (!imageFile) return;
    
    setImageLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      const response = await updateUser(formData);
      if (response?.data?.success) {
        notifier.success({
          title: `Profile avatar updated`,
          message: `Please give a few minutes for changes to take effect`,
        });
        await supabase.auth.refreshSession();
        
        if (imagePreview) {
          URL.revokeObjectURL(imagePreview);
        }
      } else {
        notifier.error({
          title: `Failed to update profile avatar`,
        });
      }
    } catch (e) {
      notifier.error({
        title: `Failed to update profile avatar`,
      });
    } finally {
      setImageLoading(false);
      setImageFile(null);
      setImagePreview("");
    }
  }

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Profile
        user={user}
        session={session}
        handleChangeUsername={handleChangeUsername}
        handleImageChange={handleImageChange}
        handleUpdateUsername={handleUpdateUsername}
        handleUpdateImage={handleUpdateImage}
        changeUserEmail={changeUserEmail}
        handleUpdatedEmail={handleUpdatedEmail}
        username={username}
        userEmail={userEmail}
        imagePreview={imagePreview}
        avatarError={avatarError}
        imageLoading={imageLoading}
        nameLoading={nameLoading}
        emailLoading={emailLoading}
        password={password}
        setPassword={setPassword}
        handleUpdatedPassword={handleUpdatedPassword}
        passwordLoading={passwordLoading}
      />
    </div>
  );
};

export default ProfilePage;
