"use client";

import React, { useState } from "react";
import { Schedule } from "./ListSchedule";
import { Controller, useForm } from "react-hook-form";
import { TrashIcon } from "@radix-ui/react-icons";
import { updateSchedule } from "@/lib/services/schedule";
import { toast } from "react-hot-toast";

import CronJobsModal from "@/components/Modals/CronJobsModal";
import { ImSpinner8 } from "react-icons/im";
import PromptBox from "@/components/Pages/Atrium/PromptBox";
interface EditScheduleProps {
  schedule: Schedule;
  agent_id: string;
  installation_id: string;
  handleDelete: () => void;
  handleClose: () => void;
}

const EditSchedule: React.FC<EditScheduleProps> = ({
  schedule,
  agent_id,
  installation_id,
  handleDelete,
  handleClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    control,
    reset,

    setValue,
    getValues,
  } = useForm({
    values: {
      name: schedule.name,
      description: schedule.description,
      frequency: schedule.frequency,
      body: schedule.body,
    },
  });
  
  const onSubmit = async (data: any) => {
    data.body = data.body ? JSON.stringify(data.body) : null;
    setIsSaving(true);
    const res = await updateSchedule({

      agent_id: agent_id,
      installation_id: installation_id,
      schedule_id: schedule.id,
      data,
    });

    if (res.status) {
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
    setValue("frequency", value, { shouldDirty: true });
  };

  return (
    <>
      <div className="px-4 py-4 bg-neutral-50">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">Name</label>
            <input
              type="text"
              {...register("name")}
              className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-not-allowed`}
              readOnly
            />

            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">
              Frequency
            </label>
            <input
              type="text"
              {...register("frequency")}
              className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {errors.frequency && (
              <p className="text-sm text-red-500 mt-1">
                {errors.frequency.message}
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
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Schedule Description"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">Body</label>
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

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2.5 text-red-600 hover:bg-red-100 rounded-md transition-colors"
            >
              <TrashIcon className="w-5 h-5" />
              <span className="font-medium">Delete</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  reset();
                  handleClose();
                }}
                className="px-4 py-2 border bg-white rounded-md hover:bg-neutral-50"
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 bg-black text-white rounded-md flex items-center gap-2 ${isSaving || !isDirty ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-800"}`}
                onClick={handleSubmit(onSubmit)}
                disabled={isSaving || !isDirty}
              >
                {isSaving && <ImSpinner8 className="w-4 h-4 animate-spin" />}
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <CronJobsModal
        isOpen={isOpen}
        title="Select Suggested Schedule"
        closeModel={setIsOpen}
        onSelect={handleSelect}
        selected={getValues("frequency")}
      />
    </>
  );
};
export default EditSchedule;
