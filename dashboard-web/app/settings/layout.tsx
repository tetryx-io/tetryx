"use client";

import SecondarySideBar from "@/components/Layouts/SecondarySideBar";
import { usePathname } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);

import {
  RiUser2Fill,
  RiArrowRightLine,
  RiLockPasswordFill,
  RiBankCardLine,
  RiTeamFill,
  RiPriceTag3Fill,
} from "react-icons/ri";

export default function Layout({
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";

  let menuData: any = [
    {
      id: "general",
      name: "General",
      link: `/settings/general/`,
      icon: <RiArrowRightLine />,
      styleClass: "",
      active: true,
      children: [],
    },
    {
      id: "profile",
      name: "Profile",
      link: `/settings/profile/`,
      icon: <RiUser2Fill />,
      styleClass: "",
      active: true,
      children: [],
    },
    {
      id: "member",
      name: "Team",
      link: `/settings/members/`,
      icon: <RiTeamFill />,
      styleClass: "",
      active: true,
      children: [],
    },
    {
      id: "billing",
      name: "Billing",
      link: `/settings/billing/`,
      icon: <RiPriceTag3Fill />,
      styleClass: "",
      active: true,
      children: [],
    },
    {
      id: "api-keys",
      name: "API Keys",
      link: `/settings/api-keys/`,
      icon: <RiLockPasswordFill />,
      styleClass: "",
      active: true,
      children: [],
    },
    {
      id: "payouts",
      name: "Payouts",
      link: `/settings/payouts/`,
      icon: <RiBankCardLine />,
      styleClass: "",
      active: true,
      children: [],
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

  console.log(secondaryMenuItems);

  return (
    <Elements stripe={stripePromise}>
      <div className="grid grid-cols-10 relative sm:px-4 md:px-10">
        <div className="fixed top-0 z-[100] w-fit md:w-[280px]">
          <SecondarySideBar menus={secondaryMenuItems}/>
      </div>
      <div className="col-span-full md:col-span-8 md:col-start-3 h-[calc(100vh-120px)] w-full overflow-hidden overflow-y-auto pt-12 md:pt-6 px-4 md:px-10 hide-scrollbar">
          {children}
        </div>
      </div>
    </Elements>
  );
}
