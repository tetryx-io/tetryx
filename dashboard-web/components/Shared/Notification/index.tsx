// @ts-nocheck
import { GrClose } from "react-icons/gr";
import React, { createContext, useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const ToastVariantBetaSignup = ({ title, message }) => {
  return (
    <div
      className={`max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://reframe-static.s3.us-east-2.amazonaws.com/media/img/next-avatar-small-dark.png"
              alt=""
            />
          </div>
          <a
            target="_blank"
            href="https://console.reframe.is/auth/register"
            className="ml-3 flex-1"
          >
            <p className="font-medium text-gray-900">{title}</p>

            <p className="mt-1 text-gray-500">{message}</p>
          </a>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          // onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Dismiss<span>&nbsp;&nbsp;&nbsp;</span>
          <GrClose size={10} />
        </button>
      </div>
    </div>
  );
};

const ToastVariantSuccess = ({ title, message }) => {
  return (
    <div>
      <p className="font-medium text-gray-900">{title}</p>

      <p className="mt-1 text-gray-500">{message}</p>
    </div>
  );
};

const ToastVariantError = ({ title, message }) => {
  return (
    <div>
      <p className="font-medium text-gray-900">{title}</p>

      <p className="mt-1 text-gray-500">{message}</p>
    </div>
  );
};

export const notify = (props) => {
  toast.custom((t) => <ToastVariantSuccess {...props} />);
};

export const success = (props) => {
  toast.success((t) => <ToastVariantSuccess {...props} />);
};

export const error = (props) => {
  // console.log("props:", props);
  toast.error((t) => <ToastVariantError {...props} />);
};

const AppContext = createContext({});

export const NotificationProvider = ({ children }: any) => {
  return (
    <AppContext.Provider
      value={{
        notify,
        success,
        error,
      }}
    >
      {children}
      <Toaster />
    </AppContext.Provider>
  );
};

export const useNotificationContext = () => {
  const appContextData = useContext(AppContext);
  if (!appContextData) {
    throw new Error("useNamespaceContext must be used within the AppProvider");
  }
  return appContextData;
};
