// @ts-nocheck
import { createContext, useContext, useEffect, useState } from "react";
import { get as _get, set as _set } from "lodash";
import { uuidv7 } from "@kripod/uuidv7";
import { useTetryxAuth as useAuthUserContext } from "@/lib/providers/auth";
import { useNamespaceContext } from "@/components/Pages/context/workspace";

const UIContext = createContext({});

export const UIStateProvider = ({ children }: any) => {
  const local_ui_state = JSON.parse(localStorage.getItem("ui"));
  const [leftCascadeMenuOpen, setLeftCascadeMenuOpen] = useState(
    _get(local_ui_state, "leftCascadeMenuOpen", false)
  );
  const namespace_ctx: any = useNamespaceContext();

  const curr_ui_state = _get(
    namespace_ctx?.state,
    "data.app_state[0].meta.ui",
    {}
  );

  const _setLeftCascadeMenuOpen = (open: boolean) => {
    // console.log("setting left cascade menu open to: ", open, namespace_ctx);

    setLeftCascadeMenuOpen(open);
  };

  useEffect(() => {
    if (
      curr_ui_state?.leftCascadeMenuOpen &&
      curr_ui_state?.leftCascadeMenuOpen !== leftCascadeMenuOpen
    ) {
      setLeftCascadeMenuOpen(curr_ui_state.leftCascadeMenuOpen);
    }
  }, [curr_ui_state]);

  const ctx_value = {
    leftCascadeMenuOpen: leftCascadeMenuOpen,
    setLeftCascadeMenuOpen: _setLeftCascadeMenuOpen,
    leftCascadeMenuTransform: "transform duration-200",

    loading: [],
    error: [],
  };

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("ui", JSON.stringify(ctx_value));
  }, [ctx_value]);

  return <UIContext.Provider value={ctx_value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const appContextData = useContext(UIContext);
  if (!appContextData) {
    throw new Error("useNamespaceContext must be used within the AppProvider");
  }
  return appContextData;
};
