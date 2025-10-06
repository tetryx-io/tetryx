"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, Controller } from "react-hook-form";
import { createSchedule } from "@/lib/services/schedule";
import { toast } from "react-hot-toast";
import JsonEditor from "@/components/Shared/Input/JsonEditor";
import CronJobsModal from "@/components/Modals/CronJobsModal";
import { ImSpinner8 } from "react-icons/im";
import PromptBox from "@/components/Pages/Atrium/PromptBox";

interface AddScheduleProps {
  show: boolean;
  handleClose: () => void;
  agent_id: string;
  installation_id: string;
}

const AddSchedule = ({
  show,
  handleClose,
  agent_id,
  installation_id,
}: AddScheduleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    getValues,
  } = useForm();

  const onSubmit = async (data: any) => {
    data.body = data.body ? JSON.stringify(data.body) : null;
    const scheduleData = {
      data,
      agent_id,
      installation_id,
    };
    setIsSaving(true);
    const res = await createSchedule(scheduleData);
    if (res.status) {
      reset();
      setIsSaving(false);

      handleClose();
      toast.success(res.message);
    } else {
      setIsSaving(false);
      toast.error(res.message);
    }
  };
  
  const handleSelect = (value: string) => {
    setIsOpen(false);
    setValue("frequency", value);
  };
  return (
    <Dialog open={show} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl">
          <Dialog.Title className="text-lg font-semibold text-neutral-900">
            Add New Schedule
          </Dialog.Title>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-700">
                Name
              </label>
              <input
                type="text"
                className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Schedule Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-700">
                Description
              </label>
              <textarea
                className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Schedule Description"
                {...register("description")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-700">
                Frequency
              </label>
              <input
                type="text"
                className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="In unix cron fashion"
                {...register("frequency", { required: true })}
              />
              {errors.frequency && (
                <p className="text-red-500 text-sm mt-1">
                  Frequency is required
                </p>
              )}
              <button
                className="text-blue-500 hover:text-blue-700 text-sm underline text-left"
                onClick={() => setIsOpen(true)}
              >
                Select Suggested Schedule
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-700">
                Body
              </label>
              <Controller
                control={control}
                name="body"
                defaultValue={null}
                render={({ field }) => (
                  <PromptBox
                    promptData={field.value}
                    setPrompt={(value) => field.onChange(value)}
                  />
                )}
              />
            </div>

          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border rounded-md hover:bg-neutral-50"
              onClick={() => {
                reset();
                handleClose();
              }}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium text-white bg-black rounded-md flex items-center gap-2 ${isSaving ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-800"}`}
              onClick={handleSubmit(onSubmit)}
              disabled={isSaving}
            >
              {isSaving && <ImSpinner8 className="w-4 h-4 animate-spin" />}
              Add Schedule
            </button>
          </div>
          <CronJobsModal
            isOpen={isOpen}
            title="Select Suggested Schedule"
            closeModel={setIsOpen}
            onSelect={handleSelect}
            selected={getValues("frequency")}
          />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AddSchedule;
