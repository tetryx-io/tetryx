"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import { updateWebhook } from "@/lib/services/webhook";
import { TrashIcon } from "@heroicons/react/24/outline";
import JsonEditor from "@/components/Shared/Input/JsonEditor";
import { Webhook } from "./ListWebhook";
import { ImSpinner8 } from "react-icons/im";

interface EditWebhookProps {
  webhook: Webhook;
  agent_id: string;
  installation_id: string;
  handleClose: () => void;
  handleDelete: () => void;
}

const EditWebhook = ({
  webhook,
  agent_id,
  installation_id,
  handleClose,
  handleDelete,
}: EditWebhookProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    control,
    reset,

  } = useForm({
    values: {
      target_endpoint: webhook.target_endpoint,
      headers: webhook.headers,
    },
  });

  const onSubmit = async (data: any) => {
    data.headers = JSON.stringify(data.headers);
    setIsSaving(true);
    const res = await updateWebhook({
      agent_id: agent_id,
      installation_id: installation_id,
      webhook_id: webhook.id,
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
  return (
    <div className="px-4 py-4 bg-neutral-50">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-700">Name</label>
          <input
            type="text"
            {...register("target_endpoint")}
            className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />

          {errors.target_endpoint && (
            <p className="text-sm text-red-500 mt-1">
              {errors.target_endpoint.message as string}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-700">Body</label>
          <Controller
            control={control}
            name="headers"
            defaultValue={null}
            render={({ field }) => (
              <JsonEditor
                value={field.value}
                onChange={(value) => field.onChange(value)}
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
  );
};

export default EditWebhook;
