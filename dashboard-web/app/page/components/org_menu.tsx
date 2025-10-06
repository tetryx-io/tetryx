import React, { useState } from "react";

const OrgMenu = ({ results }: any) => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Overview");

  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="title-content mb-4 hidden lg:block lg:mb-0 lg:col-span-3">
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg sm:p-8">
        <ul style={{ listStyle: "initial", marginLeft: "8px" }}>
          <li
            className={`my-3 ${selectedItem === "Overview" ? "text-black font-semibold" : "text-[#737373]"}`}
            onClick={() => handleClick("Overview")}
          >
            Overview
          </li>
          <li
            className={`my-3 ${selectedItem === "Industry & Competitors" ? "text-black font-semibold" : "text-[#737373]"}`}
            onClick={() => handleClick("Industry & Competitors")}
          >
            Industry & Competitors
          </li>
          <li
            className={`my-3 ${selectedItem === "People" ? "text-black font-semibold" : "text-[#737373]"}`}
            onClick={() => handleClick("People")}
          >
            People
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrgMenu;
