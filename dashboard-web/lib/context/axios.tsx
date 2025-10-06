"use client";

import React, { createContext } from "react";
import axiosInstance from "@/lib/services/request";

const Context = createContext({});

export const AxiosProvider = ({ children, token }: any) => {
  let idToken = token;

  // Set the Authorization header for axios
  if (idToken) {
    axiosInstance.defaults.headers.common["Authorization"] =
      `Bearer ${idToken}`;
  }

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error(error);

      return Promise.reject(error);
    },
  );

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
