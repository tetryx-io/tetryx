import DefaultButton from "@/components/Shared/Button/DefaultButton";
import Input from "@/components/Shared/Input";
import { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import { RiGoogleFill, RiMailLine, RiGithubFill } from "react-icons/ri";

const Profile = ({
  handleChangeUsername,
  handleUpdateUsername,
  handleImageChange,
  handleUpdateImage,
  changeUserEmail,
  username,
  userEmail,
  user,
  imagePreview,
  avatarError,
  nameLoading,
  imageLoading,
  emailLoading,
  handleUpdatedEmail,
  setPassword,
  password,
  session,
  handleUpdatedPassword,
  passwordLoading,
}: any) => {
  
  const [notificationPref, setNotificationPref] = useState("");

  return (
    <div className="py-6 w-full lg:w-8/12 flex flex-col gap-10 max-w-6xl h-full">
      <div className="text-2xl font-bold">Profile Settings</div>

      {/* Name */}
      <div className="rounded-md border border-neutral-200 flex flex-col gap-2">
        <div className="flex flex-col p-10 justify-start items-start gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <div className="text-xl font-bold">Profile Name</div>
            </div>
            <p className="text-neutral-600">
              This is your name on this workspace. Your name is used for
              activity logs, team management, and on email communications about
              your account.
            </p>
          </div>
          {user && (
            <div className="w-full sm:w-80">
              {/* Change username */}
              <Input
                type="text"
                name="name"
                value={username}
                onChange={handleChangeUsername}
              />
            </div>
          )}
        </div>
        <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
          <div className="text-sm text-neutral-500">
            Confirm availability of username
          </div>
          {nameLoading ? (
            <ImSpinner8 className="animate-spin" size={16} color="black" />
          ) : (
            <DefaultButton
              disabled={username === user?.name || !username || nameLoading}
              onClick={handleUpdateUsername}
              label="Update"
              variant="primary"
              size="medium"
              styleClass="w-fit font-medium"
            />
          )}
        </div>
      </div>

      {/* Profile Picture */}
      <div className="rounded-md border border-neutral-200 flex flex-col gap-2">
        <div className="flex flex-col p-10 justify-start items-start gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <div className="text-xl font-bold">Profile Avatar</div>
            </div>
            <p className="text-neutral-600">
              This is your profile photo for this workspace. A photo with
              initials of your name is used by default if no picture is
              provided. A profile photo is optional but recommended.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <img
              src={
                imagePreview ||
                (session?.data?.user?.picture
                  ? session?.data?.user?.picture
                  : session?.data?.user?.user_metadata?.avatar_url
                    ? session?.data?.user?.user_metadata?.avatar_url
                    : "/images/avatar.svg")
              }
              className="w-12 h-12 rounded-full object-cover"
              alt="Profile Avatar"
            />
            {/* Change Photo */}
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
          {/* Save new picture */}
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
      </div>

      {/* Example: Email */}
      <div className="rounded-md border border-neutral-200 flex flex-col gap-2">
        <div className="flex flex-col p-10 justify-start items-start gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <div className="text-xl font-bold">Email</div>
            </div>
            <p className="text-neutral-600">
              Update your email address associated with this account.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full sm:w-80">
              <Input
                type="email"
                name="email"
                value={userEmail}
                onChange={changeUserEmail}
                disabled={user?.app_metadata?.provider !== "email"}
              />
            </div>
            {user?.app_metadata?.provider === "email" ? (
              <RiMailLine className="opacity-60" size={20} />
            ) : user?.app_metadata?.provider === "google" ? (
              <RiGoogleFill className="opacity-60" size={20} />
            ) : user?.app_metadata?.provider === "github" ? (
              <RiGithubFill className="opacity-60" size={20} />
            ) : null}
          </div>
        </div>
        <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
          <div className="text-sm text-neutral-500">
            Confirm availability of email
          </div>
          {emailLoading ? (
            <ImSpinner8 className="animate-spin" size={16} color="black" />
          ) : (
            <DefaultButton
              disabled={userEmail === user?.email || !userEmail || emailLoading}
              onClick={handleUpdatedEmail}
              label="Update"
              variant="primary"
              size="medium"
              styleClass="w-fit font-medium"
            />
          )}
        </div>
      </div>

      {/* Example: Password */}
      <div className="rounded-md border border-neutral-200 flex flex-col gap-2">
        <div className="flex flex-col p-10 justify-start items-start gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <div className="text-xl font-bold">Password</div>
            </div>
            <p className="text-neutral-600">
              Change your account password for security reasons.
            </p>
          </div>
          <div className="w-full sm:w-80">
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={user?.app_metadata?.provider !== "email"}
            />
          </div>
        </div>
        <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
          <div className="text-sm text-neutral-500">
            Confirm availability of password
          </div>
          {passwordLoading ? (
            <ImSpinner8 className="animate-spin" size={16} color="black" />
          ) : (
            <DefaultButton
              onClick={handleUpdatedPassword}
              label="Update"
              variant="primary"
              size="medium"
              styleClass="w-fit font-medium"
              disabled={!password || passwordLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
