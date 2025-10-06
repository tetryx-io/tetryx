"use client";

import Menu from "./Menu";

const SideBar = (props: any) => {
  const { menuItems, secondaryMenuItems } = props;

  return (
    <div className="flex-shrink-0 w-20 bg-white border-r border-neutral-200 h-screen overflow-hidden relative z-50">
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex flex-col items-center pt-6 h-24"></div>
        <div className="flex flex-col items-center pt-4 justify-between h-full overflow-auto no-scrollbar mt-4">
          <div className="flex flex-col w-full justify-between h-full overflow-auto no-scrollbar">
            <div>
              <Menu items={menuItems} />
            </div>
            <div className="py-4">
              <Menu items={secondaryMenuItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
