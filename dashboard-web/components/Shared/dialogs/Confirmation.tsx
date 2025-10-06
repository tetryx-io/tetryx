import React,{Fragment} from "react";
import { Dialog, Transition} from "@headlessui/react";
import DefaultButton from "../Button/DefaultButton";

interface IConfirmationDialog {
  title: string,
  message: string,
  isOpen: boolean,
  onConfirm: any,
  onCancel: any
}

const ConfirmationDialog = (props: IConfirmationDialog) => {

  const { title, message, isOpen, onConfirm, onCancel} = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        open={isOpen}
        className="fixed inset-0 z-[100] overflow-y-auto bg-black bg-opacity-25 dark:bg-opacity-70"
        onClose={() => {
          onCancel(false);
        }}
      >
        <div className="flex items-center justify-center min-h-screen shadow-lg">
          <Dialog.Panel className="dark:bg-neutral-900 w-full max-w-md transform overflow-hidden rounded-md bg-white p-10 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-xl font-bold text-black dark:text-neutral-100"
            >
              {title}
            </Dialog.Title>
            <div className="mt-1 py-2 text-neutral-600 dark:text-neutral-400">
              {message}
            </div>

            <div className="mt-6 flex flex-row justify-end items-center space-x-3">
              <DefaultButton
                label="No"
                variant="default"
                onClick={() => {
                  onCancel(false);
                }}
              />
              <DefaultButton
                label="Yes, Delete"
                variant={(title.toLowerCase()).includes("delete") ? "danger" : "primary"}
                styleClass="font-semibold"
                onClick={onConfirm}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )

}

export default ConfirmationDialog;