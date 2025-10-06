// @ts-nocheck
import React, { createContext, useContext, useEffect, useState } from "react";

const DocsContext = createContext({});

export const DocsProvider = ({ children, ...props }: any) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showLeftMenu, setShowLeftMenu] = useState(false);

  const onKeyDownHandler = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      handleSearchPanel(false);
    }
    if (e.key === "k" && e.metaKey) {
      handleSearchPanel(true);
    }
  };

  const ctx_value = {
    showSearch,
    setShowSearch,
    showLeftMenu,
    setShowLeftMenu,
  };

  return (
    <DocsContext.Provider value={ctx_value} onKeyDown={onKeyDownHandler}>
      {children}
    </DocsContext.Provider>
  );
};

export const useDocsContext = () => {
  const ctx = useContext(DocsContext);
  if (!ctx) {
    throw new Error("useDocsContext must be used within the AppProvider");
  }
  return ctx;
};
