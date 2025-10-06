"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { TbSitemap } from "react-icons/tb";
import {
  RiHome3Line,
  RiTableLine,
  RiSettings3Line,
  RiBookOpenLine,
  RiFileTextLine,
  RiTeamLine,
  RiSettings3Fill,
  RiHome3Fill,
  RiTableFill,
  RiBookOpenFill,
  RiFileTextFill,
  RiTeamFill,
} from "react-icons/ri";
import SideBar from "@/components/Layouts/SideBar";

const AppLayout = ({ children }) => {
  const pathname = usePathname();

  let menuItems: any = [
    {
      label: "Home",
      icon: <RiHome3Line size={20} />,
      activeIcon: <RiHome3Fill size={20} />,
      link: `/studio/`,
      active: true,
      paths: ["/studio/"],
    },
    {
      label: "Settings",
      icon: <RiSettings3Line size={20} />,
      activeIcon: <RiSettings3Fill size={20} />,
      link: `/settings/general/`,
      active: false,
      paths: [
        "/settings/general/",
        "/settings/profile/",
        "/settings/billing/",
        "/settings/members/",
      ],
    },
  ];

  const secondaryMenuItems: any = [
    {
      label: "Docs",
      icon: <RiFileTextLine size={20} />,
      activeIcon: <RiFileTextFill size={20} />,
      link: `https://docs.atrium.st`,
      newTab: true,
    },
    {
      label: "Wiki",
      icon: <RiBookOpenLine size={20} />,
      activeIcon: <RiBookOpenFill size={20} />,
      link: `/wiki`,
      newTab: true,
    },
    {
      label: "Community",
      icon: <RiTeamLine size={20} />,
      activeIcon: <RiTeamFill size={20} />,
      link: `/datasets`,
      newTab: true,
    },
  ];

  menuItems = menuItems.map((m: any) => {
    m.active = m.paths.includes(pathname);
    return m;
  });

  return (
    <Fragment>
      <div className="flex">
        <div>
          <SideBar
            menuItems={menuItems}
            secondaryMenuItems={secondaryMenuItems}
          />
        </div>
        <div className="h-screen overflow-auto w-full bg-neutral-50 dark:bg-neutral-900">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default AppLayout;
