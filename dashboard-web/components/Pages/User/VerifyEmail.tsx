// @ts-nocheck

import React, { useState, useEffect, Fragment } from "react";
import { useSupabaseAuth as useAuthUserContext } from "@/lib/supabase/provider/auth";
import {
  error,
  success,
  useNotificationContext,
} from "@/components/Shared/Notification";
import _get from "lodash/get";
import {
  Dialog,
  Popover,
  Menu,
  Transition,
  RadioGroup,
} from "@headlessui/react";
import { useForm, useFormState, Controller } from "react-hook-form";
import Link from "next/link";
import {
  CheckCircleIcon,
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import { clsx } from "clsx";
import axios from "axios";
import { useRouter } from "next/router";
import { LogoIcon, LogoLarge } from "@/components/Common/Logo";
import axios_instance from "@/lib/services/request";
import { useSupabaseAuth } from "@/lib/supabase/provider/auth";

const BetaAccessCode = (props) => {
  const { user, show_resend_email, show_beta_access_input } = props;
  const { session } = useSessionContext();
  const [intervalCount, setIntervalCount] = useState(1);
  const [verificationEmailRequestcount, setVerificationEmailRequestcount] =
    useState(1);
  const notifier: any = useNotificationContext();

  const [updatingEmail, setUpdatingEmail] = useState(false);
  const [sendingVerificationEmail, setSendingVerificationEmail] =
    useState(false);
  const {
    formState: { isDirty, dirtyFields },
    register,
    handleSubmit,
    errors,
    getValues,
    reset,
  } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = async (data) => {
    axios_instance
      .post("/user/verify-beta-access/", { ...data, ...session?.data?.user })
      .then((res) => {
        console.log("res", res);
        reset({});
        if (res && res?.data?.message) {
          notifier.success({
            title: "Access Code is Valid",
            message: res?.data?.message,
          });
        } else {
          notifier.error({
            title: "Invalid Access Code",
            message: `Your access code ${data.access_code} is invalid or inactive.`,
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        setUpdatingEmail(false);
        notifier.error({
          title: "Invalid Access Code",
          message: `Your access code ${data.access_code} is invalid or inactive.`,
        });
      });
  };

  return (
    <div className="w-full">
      Got a beta access code? Enter it here:
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <div className={"py-3 flex flex-col items-center"}>
            <div className={"flex flew-row items-center space-x-3 relative"}>
              <input
                {...register("access_code", { required: true })}
                type="text"
                className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="access_code"
              />
              <div className={"absolute -right-10"}>
                {!updatingEmail && (
                  <button type="submit">
                    <HiOutlineArrowRight
                      className={clsx("h-12 w-8", "text-teal-700")}
                    />{" "}
                  </button>
                )}
                {updatingEmail && (
                  <div role="status">
                    <ArrowPathIcon className="animate-pulse h-5 w-5 text-gray-900" />
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const EmailForm = (props) => {
  const { show_resend_email, show_beta_access_input } = props;
  const {
    auth: { user },
  } = useSupabaseAuth();
  const [intervalCount, setIntervalCount] = useState(1);
  const [verificationEmailRequestcount, setVerificationEmailRequestcount] =
    useState(1);
  const notifier: any = useNotificationContext();

  const [updatingEmail, setUpdatingEmail] = useState(false);
  const [sendingVerificationEmail, setSendingVerificationEmail] =
    useState(false);
  const {
    formState: { isDirty, dirtyFields },
    register,
    handleSubmit,
    errors,
    getValues,
    reset,
  } = useForm({
    defaultValues: { email: user.email },
  });

  const resendVerificationEmail = async () => {
    setSendingVerificationEmail(true);
    setVerificationEmailRequestcount(verificationEmailRequestcount + 1);
    setIntervalCount(0);
    const email = getValues("email");
    try {
      await axios_instance.post(`/user/verify-email/${user._id}`, {
        email,
        ...user,
      });
      setSendingVerificationEmail(false);
      notifier.success({
        title: "Email sent 📮",
        message: `Sent verification email to your email: ${user.email}`,
      });
    } catch (error) {
      setSendingVerificationEmail(false);

      notifier.error({
        title: "Failed to send email",
        message: `Email to ${user.email} not sent`,
      });
    }
  };

  const onSubmit = async (data) => {
    console.log("onSubmit", data);
    try {
      setUpdatingEmail(true);
      await axios.patch("/api/user/info", data);
      setUpdatingEmail(false);
      reset({});
      notifier.success({
        title: "Updated email",
        message: `Set email to ${data.email} successfully`,
      });
    } catch (error) {
      console.log("error", error);
      setUpdatingEmail(false);
      notifier.error({
        title: "Failed to set email",
        message: `Email to ${user.email} not set`,
      });
    }
  };

  return (
    <div className="w-full">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <div className={"py-3 flex flex-col items-center"}>
            <div className={"flex flew-row items-center space-x-3 relative"}>
              <input
                {...register("email", { required: true })}
                type="email"
                className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="email"
              />
              <div className={"absolute -right-20"}>
                {!updatingEmail && dirtyFields.email && (
                  <div className={"flex flex-row"}>
                    <button type="submit">
                      <CheckCircleIcon
                        className={clsx("h-8", "text-emerald-200")}
                      />{" "}
                    </button>
                    <button type="">
                      <XCircleIcon
                        className={clsx("h-8", "text-orange-400")}
                        onClick={() => reset({ email: user.email })}
                      />{" "}
                    </button>
                  </div>
                )}
                {updatingEmail && (
                  <div role="status">
                    <ArrowPathIcon className="animate-spin h-5 w-5 text-gray-900" />
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
      {show_beta_access_input && <BetaAccessCode />}

      <div className="flex flex-row justify-center space-x-4 w-full py-4 border-b border-gray-200 dark:border-gray-800">
        <div
          className={
            "flex flex-col justify-center items-center grow px-2 my-3 max-w-[10rem] h-20 bg-orange-500 w-fit rounded hover:scale-105 relative"
          }
        >
          <Link
            className={"flex flex-row items-center justify-evenly w-full"}
            href={"/api/auth/logout"}
          >
            <span className="">Logout</span>
            <ArrowRightOnRectangleIcon className="h-8" />
          </Link>
        </div>

        {show_resend_email && (
          <button
            className={
              "flex flex-col justify-center items-center grow px-2 my-3 h-20 bg-teal-500 w-fit rounded hover:scale-105 relative"
            }
            onClick={() => resendVerificationEmail()}
          >
            <div className="flex flex-row items-center justify-evenly  w-full">
              <span className="">Resend</span>
              {sendingVerificationEmail ? (
                <div role="status">
                  <ArrowPathIcon className="animate-spin h-5 w-5 text-gray-900" />
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div>
                  <FaPaperPlane size={30} />{" "}
                </div>
              )}
            </div>
            <div className="text-xs absolute bottom-0">Verification Email</div>
          </button>
        )}
      </div>
    </div>
  );
};

const PendingEmailVerification = (props) => {
  const { user } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <img className={"w-18 rounded"} src={user?.picture} />
      <p className={"text-xl leading-10 py-3"}>Your email is not verified</p>

      <p className={"text-sm dark:text-gray-300 leading-6 py-2"}>
        Click on the link we sent to you complete the verification process
      </p>
      <EmailForm user={user} show_resend_email />
      <div className="pt-4 flex items-center space-x-3 justify-center w-full ">
        <Link
          href={"/wiki"}
          className={
            "font-medium text-blue-600 dark:text-blue-500 hover:underline"
          }
        >
          Wiki{" "}
        </Link>
        <Link
          className={
            "font-medium text-blue-600 dark:text-blue-500 hover:underline"
          }
          href="mailto:founders@reframe.is?subject=Reframe » Support request"
        >
          Contact Us{" "}
        </Link>
      </div>
    </div>
  );
};

const PendingBetaAccess = (props) => {
  const { user } = useAuthUserContext();

  const {
    formState: { isDirty, dirtyFields },
    register,
    handleSubmit,
    errors,
    reset,
  } = useForm({
    defaultValues: { email: user?.email },
  });

  return (
    <div>
      {
        <div className="flex flex-col items-center align-middle">
          <img className={"w-18 rounded"} src={user?.picture} />

          <p className={"text-xl leading-10 py-3"}>
            Reframe is still in private beta.
          </p>
          <p className={"text-md text-gray-700 leading-7 py-2"}>
            We're rolling out access as fast as we can and will be in touch soon
            to get you on board and start up your data cloud.
          </p>
          <EmailForm user={user} show_beta_access_input />
        </div>
      }
      <div className="pt-4 flex items-center space-x-3 justify-center w-full ">
        <Link
          href={"/wiki"}
          className={
            "font-medium text-blue-600 dark:text-blue-500 hover:underline"
          }
        >
          Wiki{" "}
        </Link>
        <Link
          className={
            "font-medium text-blue-600 dark:text-blue-500 hover:underline"
          }
          href="mailto:founders@reframe.is?subject=Reframe » Support request"
        >
          Contact Us{" "}
        </Link>
      </div>
    </div>
  );
};

const EmailVerificationDialog = (props) => {
  const { data, loading, error } = props;
  const user = _get(data, "user[0]", null);
  const has_beta_access = _get(data, "user[0].beta_access", false);
  const has_email_verified = _get(data, "user[0].email_verified", false);

  console.log(user, has_beta_access);

  return (
    <div>
      {data && (
        <Dialog.Panel
          className={clsx(
            "h-full max-w-md transform overflow-hidden",
            "rounded-xl bg-white dark:bg-slate-900 px-6 text-left align-middle",
            "shadow shadow-slate-500 transition-all"
          )}
        >
          <div className="animate-pulse absolute top-4 right-8">
            <div className=" ">
              <span className="bg-fuchsia-400 text-xs py-1 px-2 rounded">
                βeta
              </span>
            </div>
          </div>
          <Dialog.Title
            as="div"
            className={clsx(
              "text-lg font-medium leading-6 text-gray-800 dark:text-gray-200",
              "py-4 border-b border-gray-200 dark:border-gray-200",
              "flex flex-col justify-center items-center space-y-2"
            )}
          >
            <div className={clsx("w-48")}>
              <LogoLarge className={"w-28"} />
            </div>
            {(() => {
              if (loading) {
                return <div>Loading...</div>;
              } else if (error) {
                return <div>Error</div>;
              } else {
                if (!has_email_verified) {
                  return <div>Verify Email</div>;
                }
                if (!has_beta_access) {
                  return <div>Private Beta</div>;
                }
              }
            })()}
          </Dialog.Title>
          <div className={"w-full px-4 py-8"}>
            {(() => {
              if (loading) {
                return <div>Loading...</div>;
              } else if (error) {
                return <div>Error</div>;
              } else {
                if (!has_email_verified) {
                  return <PendingEmailVerification user={user} />;
                }

                if (!has_beta_access) {
                  return <PendingBetaAccess user={user} />;
                }
              }
            })()}
          </div>
        </Dialog.Panel>
      )}
    </div>
  );
};

export default ({ user }) => {
  const router = useRouter();
  const { session } = useSessionContext();
  const has_beta_access = _get(session?.data?.user, "beta_access", false);

  if (session?.data?.user?.email_verified) {
    router.push("/studio/");
  }

  return (
    <div className="mt-4">
      <Transition appear show={true} as={Fragment}>
        <Dialog static as="div" className="relative z-10" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full  items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div>
                  <EmailVerificationDialog {...system_user} />
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
