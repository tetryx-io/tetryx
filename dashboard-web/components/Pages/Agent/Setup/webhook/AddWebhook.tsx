"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import JsonEditor from "@/components/Shared/Input/JsonEditor";
import { createWebhook } from "@/lib/services/webhook";
import { ImSpinner8 } from "react-icons/im";

interface AddWebhookProps {
  show: boolean;
  handleClose: () => void;
  agent_id: string;
  installation_id: string;
}

const AddWebhook = ({
  show,
  handleClose,
  agent_id,
  installation_id,
}: AddWebhookProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();
  const onSubmit = async (data: any) => {
    data.headers = JSON.stringify(data.headers);
    const webhookData = {
      data,
      agent_id,
      installation_id,
    };
    setIsSaving(true);
    const res = await createWebhook(webhookData);
    if (res.status) {
      setIsSaving(false);
      reset();
      handleClose();
      toast.success(res.message);
    } else {
      setIsSaving(false);
      toast.error(res.message);
    }

  };

  return (
    <Dialog open={show} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl">
          <Dialog.Title className="text-lg font-semibold text-neutral-900">
            Add New Webhook
          </Dialog.Title>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-700">
                Target Endpoint
              </label>
              <input
                type="text"
                className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="https://example.com/webhook"
                {...register("target_endpoint", { required: true })}
              />

              {errors.target_endpoint && (
                <p className="text-red-500 text-sm mt-1">
                  Target Endpoint is required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-700">
                Headers
              </label>
              <Controller
                control={control}
                name="headers"
                defaultValue={{}}
                render={({ field }) => (
                  <JsonEditor
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
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
              Add Webhook
            </button>

          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AddWebhook;
