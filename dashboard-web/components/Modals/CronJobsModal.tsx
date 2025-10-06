import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { cronJobs } from "@/lib/constant";
const CronJobsModal = ({ isOpen, title, closeModel, onSelect, selected }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        open={isOpen}
        className="fixed inset-0 z-[100] w-full overflow-y-auto bg-black bg-opacity-25 dark:bg-opacity-70"
        onClose={() => {
          closeModel(false);
        }}
      >
        <div className="flex items-center justify-center min-h-screen shadow-lg">
          <Dialog.Panel className="w-full max-w-lg p-6 text-left bg-white shadow-lg rounded-2xl transform transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
            >
              {title}
            </Dialog.Title>
            <div className="mt-2 py-2 max-h-[60vh] overflow-y-auto">
              {cronJobs.map((job) => (
                <ul>
                  <li
                    key={job.value}
                    className={`cursor-pointer hover:bg-gray-100 p-2 rounded ${selected === job.value ? "bg-gray-100" : ""}`}
                    onClick={() => onSelect(job.value)}
                  >
                    {job.label}

                  </li>
                </ul>
              ))}
            </div>

            <div className="mt-4 flex flex-row justify-end items-center space-x-3">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium text-gray-900"
                onClick={() => {
                  closeModel(false);
                }}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CronJobsModal;
