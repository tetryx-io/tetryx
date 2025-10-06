"use client";
import PromptField from "@/components/Prompt/prompt";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine, RiMoreLine } from "react-icons/ri";
import OrgDetails from "../components/org_details";
import OrgMenu from "../components/org_menu";
import OrgPageDetail from "../components/org_page-detail";

const ResultPage = ({ results }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {results && (
        <>
          <div className="search-results mx-auto px-4 md:px-8 mt-4 sm:mt-8 max-w-[1720px]">
            <>
              <div className="flex justify-between items-center">
                <Link
                  href={"/"}
                  className="ml-2 font-semibold leading-[22px] text-[#737373]"
                >
                  <div className="go-back flex">
                    <img src="/images/backArrow.svg" alt="" />
                    <span className="hidden sm:block ml-2"> Go back</span>
                  </div>
                </Link>

                <div className="new-prompt-btn flex h-9 gap-3">
                  <DefaultButton
                    label="New Prompt"
                    iconLeft={<RiAddLine size={18} />}
                    onClick={toggleModal}
                  />
                  <DefaultButton
                    variant="default"
                    size="custom"
                    iconLeft={<RiMoreLine size={18} />}
                    styleClass="w-9"
                  />
                </div>
              </div>

              <div className="main-content grid grid-cols-1 sm:grid-cols-12 mt-5 gap-4 sm:gap-6 lg:gap-10">
                <OrgDetails results={results} />
                <OrgPageDetail results={results} />
                <OrgMenu results={results} />
              </div>
            </>
            {isModalOpen && (
              <Transition
                show={isModalOpen}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog
                  as="div"
                  className="relative z-[100]"
                  onClose={() => {}}
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-70 flex justify-center items-center">
                    <Dialog.Panel>
                      <div className="w-full">
                        <PromptField setShowModal={setIsModalOpen} agent_id={results?.agent?.id} />
                      </div>
                    </Dialog.Panel>
                  </div>
                </Dialog>
              </Transition>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ResultPage;
