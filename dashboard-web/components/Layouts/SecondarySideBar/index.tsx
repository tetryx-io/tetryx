"use client";

import { useGlobalContext } from "@/lib/context/global";
import TreeMenu from "@/components/Shared/TreeMenu";
import { RiArrowLeftSLine, RiMenuLine } from "react-icons/ri";
import { useEffect } from "react";

const SecondarySideBar = ({ menus }) => {
  const { globalState, setGlobalState } = useGlobalContext();
  const { secondarySideBar } = globalState;

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setGlobalState({
        ...globalState,
        secondarySideBar: !isMobile,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSideBar = () => {
    setGlobalState({
      ...globalState,
      secondarySideBar: !secondarySideBar,
    });
  };

  return (
    <div
      className={`h-screen ${secondarySideBar ? "bg-white" : ""} md:bg-transparent md:h-full pt-[100px] pl-4 md:pl-10 transform duration-300`}
    >
      <div
        onClick={toggleSideBar}
        className="group relative flex items-center gap-1 px-2 py-1.5 w-fit hover:bg-atrium-offWhite hover:cursor-pointer rounded-md"
      >
        <RiMenuLine className="text-neutral-600" size={18} />
        <span className="md:opacity-40 md:group-hover:opacity-100 md:group-hover:translate-x-1 transition-all duration-300 pl-1 pr-2 text-[15px] uppercase font-medium text-neutral-600">
          Menu
        </span>
      </div>

      <div
        className={`h-full flex flex-col mt-4 pr-4 ${secondarySideBar ? "w-full" : "w-0"} transition-any smooth`}
      >
        <div
          className="flex-grow overflow-y-auto"
          onClick={() => {
            if (window.innerWidth < 768) toggleSideBar();
          }}
        >
          <TreeMenu data={menus} />
        </div>
      </div>
    </div>
  );
};

export default SecondarySideBar;
