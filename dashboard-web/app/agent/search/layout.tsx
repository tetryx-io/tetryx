"use client";

import SecondarySideBar from "@/components/Layouts/SecondarySideBar";
import { usePathname } from "next/navigation";
import { RiApps2Line } from "react-icons/ri";

export default function Layout({
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";

  let menuData: any = [
    {
      id: "categories",
      name: "CATEGORIES",
      styleClass: "uppercase text-xs font-bold text-gray-500 pl-2 mb-2",
      children: [
        {
          id: "agents",
          name: "Agents",
          link: `/studio/agents/`,
          icon: <RiApps2Line />,
          styleClass: "text-sm",
          active: true,
          children: [],
        },
        // Add more categories here as needed
      ],
    },
  ];

  const menuItems = (menus: any, pathName: string) => {
    return menus.map((menu: any) => {
      if (menu.children && menu.children.length > 0) {
        menu.children = menuItems(menu.children, pathName);
      }
      menu.active = menu.link === pathName;

      return menu;
    });
  };

  const secondaryMenuItems = menuItems(menuData, pathname);

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <div className="flex-shrink-0">
        <SecondarySideBar menus={secondaryMenuItems} />
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="h-full overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
