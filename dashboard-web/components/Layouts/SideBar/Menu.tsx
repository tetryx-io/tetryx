import Link from "next/link";
import { Fragment } from "react";

interface IMenuItem {
  label: string;
  icon: any;
  activeIcon: any;
  link: string;
  active: boolean;
  newTab?: boolean;
  rightIcon?: React.ReactNode; // Add this line
}

interface IMenuItems {
  items: IMenuItem[];
}

const Menu = ({ items }: IMenuItems) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item: IMenuItem, index: number) => {
        return (
          <Fragment key={index}>
            {item.newTab ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col gap-1 py-2 border-l-4 border-transparent items-center hover:text-black hover:bg-neutral-100 hover:border-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 dark:hover:border-neutral-700 group ${
                  item.active
                    ? "text-black !border-black bg-neutral-100 dark:text-white dark:!border-white dark:bg-neutral-800"
                    : "text-neutral-500"
                }`}
              >
                <div className="relative w-full flex justify-center">
                  {item?.rightIcon && (
                    <span className="absolute top-0 right-0 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item?.rightIcon}
                    </span>
                  )}
                  <div className="scale-125">
                    {item.active ? item.activeIcon : item.icon}
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <label className="text-xs font-medium text-center">
                    {item.label}
                  </label>
                </div>
              </a>
            ) : (
              <Link
                key={index}
                href={item.link}
                className={`flex flex-col gap-1 py-2 border-l-4 border-transparent items-center hover:text-black hover:bg-neutral-100 hover:border-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 dark:hover:border-neutral-700 group ${
                  item.active
                    ? "text-black !border-black bg-neutral-100 dark:text-white dark:!border-white dark:bg-neutral-800"
                    : "text-neutral-500"
                }`}
              >
                <div className="relative w-full flex justify-center">
                  {item?.rightIcon && (
                    <span className="absolute top-0 right-0 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item?.rightIcon}
                    </span>
                  )}
                  <div className="scale-125">
                    {item.active ? item.activeIcon : item.icon}
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <label className="text-xs font-medium text-center">
                    {item.label}
                  </label>
                </div>
              </Link>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Menu;
