import { Tab } from "@headlessui/react";
import MembersManagement from "./UserManagement";
import Profile from "./Profile";
import GeneralWorkspaceMgmt from "./General";

const handleChange = (event) => {};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SettingsTabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-4 border-b border-neutral-200">
        <Tab
          className={({ selected }) =>
            classNames(
              "font-medium text-sm p-3 focus:outline-none",
              selected ? "text-black border-b border-black" : "text-neutral-400"
            )
          }
        >
          General
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              "font-medium text-sm p-3 focus:outline-none",
              selected ? "text-black border-b border-black" : "text-neutral-400"
            )
          }
        >
          Members
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              "font-medium text-sm p-3 focus:outline-none",
              selected ? "text-black border-b border-black" : "text-neutral-400"
            )
          }
        >
          Billing
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              "font-medium text-sm p-3 focus:outline-none",
              selected ? "text-black border-b border-black" : "text-neutral-400"
            )
          }
        >
          Profile
        </Tab>
      </Tab.List>
      <Tab.Panels className="w-full md:w-10/12 xl:w-7/12">
        <Tab.Panel>
          <GeneralWorkspaceMgmt />
        </Tab.Panel>
        <Tab.Panel>
          <MembersManagement />
        </Tab.Panel>
        <Tab.Panel>
          {/* <Billing /> */}
        </Tab.Panel>
        <Tab.Panel>
          <Profile />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default (props) => {
  return (
    <div className="flex flex-col gap-8 my-16 w-11/12 mx-auto">
      <div className="text-3xl font-bold">Settings</div>
      <SettingsTabs />
    </div>
  );
};
