// @ts-nocheck
import React, { createContext, useContext, useEffect, useState } from "react";
import axios_instance from "@/lib/services/request";

const Context = createContext({});

export const AxiosProvider = ({ children, token }: any) => {
  const [axiosApiInstance, setAxiosApiInstance] = useState(null);

  useEffect(() => {
    if (!token) return;

    axios_instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios_instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error(error);

        return Promise.reject(error);
      }
    );
  }, [token]);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const useDataframeContext = () => {
  const appContextData = useContext(Context);
  if (!appContextData) {
    throw new Error("useNamespaceContext must be used within the AppProvider");
  }
  return appContextData;
};
