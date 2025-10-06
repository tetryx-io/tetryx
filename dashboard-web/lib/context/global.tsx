import { useState, createContext, useContext } from "react";

const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [globalState, setGlobalState] = useState<any>({
    secondarySideBar: true,
  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const globalContext: any = useContext(GlobalContext);
  if (!globalContext) {
    throw new Error("useGlobalContext must be used within the GlobalProvider");
  }
  return globalContext;
};
