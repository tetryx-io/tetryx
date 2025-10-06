// @ts-nocheck

import React, { Fragment, useEffect, useRef, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";
import { Menu, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Loader from "@/components/Common/AtriumLoader";

import { getDataSets, getProjects, createStateData } from "@/lib/services";
import { FetchProjectMembershipDocument } from "@/generated/graphql";
import Image from "next/image";
import { useSupabaseAuth as useAuthUserContext } from "@/lib/supabase/provider/auth";

const Home = () => {
  const [projectOptions, setProjectOptions] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState<any>();
  const [selectedProject, setSelectedProject] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dataset, setDataset] = useState<any>([]);
  const allDataSets: any = useRef();
  const { user, loading } = useAuthUserContext();
  const states: any = useRef();

  const {
    loading: project_loading,
    error,
    data: project_data,
  } = useQuery(FetchProjectMembershipDocument);

  const userId = user?.session_id;

  useEffect(() => {
    const stateId = localStorage.getItem("stateId");
    // if (stateId) {
    //   getStateData(stateId).then((state: any) => {
    //     if (state.meta) states.current = state.meta;
    //     // setOrganizationData();
    //   })
    // } else {
    //   setOrganizationData();
    // }
  }, []);

  useEffect(() => {
    if (selectedOrg?.value) setProjectData();
  }, [selectedOrg]);

  useEffect(() => {
    if (selectedProject?.value) setDatasetData();
  }, [selectedProject]);

  if (loading || project_loading) {
    return <Loader />;
  }

  const setProjectData = async () => {
    const response = await getProjects(selectedOrg.value, userId);
    const projectOptions: any = [];
    response.forEach((org: any) => {
      projectOptions.push({ name: org?.name, value: org?.id });
    });
    let tempSelectedProject;
    if (states.current?.projectId) {
      tempSelectedProject = projectOptions.find(
        (po: any) => po.value === states.current.projectId
      );
    }
    if (!tempSelectedProject) {
      tempSelectedProject = projectOptions[0];
    }
    setProjectOptions(projectOptions);
    setSelectedProject(tempSelectedProject);
    await createStateData({
      projectId: tempSelectedProject.value,
      projectName: tempSelectedProject.name,
    });
  };

  const setDatasetData = async () => {
    const response = await getDataSets(
      selectedOrg.value,
      selectedProject.value,
      userId
    );
    allDataSets.current = response;
    setDataset(response);
  };

  if (loading || project_loading) {
    return <Loader />;
  }

  const projects = project_data?.project_membership?.map((p: any) => p.project);
  // console.log(project_loading, error, projects);

  const handleModalClose = (e: any) => {
    e.preventDefault();
    isOpen && setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image
              src={"/reframe-full.svg"}
              alt="Reframe logo"
              width={120}
              height={74}
              className="mr-3"
            ></Image>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={user.picture}
                alt="user photo"
              />
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Settings & Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <div className="fixed top-16 w-full max-w-sm px-4">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span>Solutions</span>
                          <ChevronDownIcon
                            className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-8 bg-white p-7 ">
                                {projects.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={`${item.id}`}
                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                  >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                      {/*// <item.icon aria-hidden="true" />*/}
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-sm font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {item.name}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="bg-gray-50 p-4">
                                <a
                                  href="##"
                                  className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                >
                                  <span className="flex items-center">
                                    <span className="text-sm font-medium text-gray-900">
                                      Documentation
                                    </span>
                                  </span>
                                  <span className="block text-sm text-gray-500">
                                    Start integrating products and tools
                                  </span>
                                </a>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {user.email_verified ? (
        <div
          className={`${isOpen && "bg-gray-100"}`}
          onClick={handleModalClose}
        >
          <div className="w-full min-h-screen pt-32 bg-gray-100">
            <div className="pb-32 p-24">
              <div className="grid">
                <div className="grid grid-cols-1">
                  <h1>Welcome to Reframe</h1>
                  <div>
                    <p>
                      You do not have any projects yet. Create a project to
                      continue.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex">
                <button>
                  <div
                    className="gradient-button mr-5 bg-white"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLogout size={30} />{" "}
                    <span className="mr-2 ml-2">Create Project</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${isOpen && "bg-gray-100"}`}
          onClick={handleModalClose}
        >
          <div className="w-full min-h-screen pt-32 bg-gray-100">
            <div className="pb-32 p-24">
              <div className="grid">
                <div className="grid grid-cols-1">
                  <h1>Welcome to Reframe</h1>
                  <div>
                    {user && user.email_verified ? (
                      <p>
                        Your account does not have access to yet. We will be in
                        touch with you soon to enable access.
                      </p>
                    ) : (
                      <p>Check your email and verify to continue.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex">
                <Link href="/api/auth/logout">
                  <div
                    className="gradient-button mr-5 bg-white"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLogout size={30} />{" "}
                    <span className="mr-2 ml-2">Logout</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*{isOpen && <NniftyModal*/}
      {/*  component={<ReactJson*/}
      {/*    src={singleDataset.current}*/}
      {/*    name={false}*/}
      {/*    theme="rjv-default"*/}
      {/*    displayDataTypes={false}*/}
      {/*  />}*/}
      {/*  closeModal={toggleModal}*/}
      {/*/>}*/}
    </>
  );
};

export default Home;
