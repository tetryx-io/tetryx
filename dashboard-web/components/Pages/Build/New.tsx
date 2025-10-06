import React, { useState } from "react";
import { useForm, Controller, FieldValues } from 'react-hook-form';
import AgentDescriptionEditor from "@/components/Plate/components/agent-description-editor";
import { createAgent } from "@/lib/services/agent";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useNotificationContext } from "@/components/Shared/Notification";
import slugify from "slugify";
import { BiErrorCircle, BiX } from 'react-icons/bi';
import Image from 'next/image';
import { FiUpload } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
// Updated interface without pricing-related fields
interface AgentFormData extends FieldValues {
  name: string;
  description: object;
  avatar_file: File | null;
  headline: string;
  imagePreview: string;
}

const Agent = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [createAgentError, setCreateAgentError] = useState("");
  const notifier: any = useNotificationContext();

  const { register, handleSubmit, control, watch, formState: { errors }, setValue } = useForm<AgentFormData>({
    defaultValues: {
      name: '',
      description: [{ id: "1", type: "p", children: [{ text: '' }] }],
      avatar_file: null,
      headline: '',
      imagePreview: '',
    }
  });
  const router = useRouter();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue('avatar_file', file);
      const imageUrl = URL.createObjectURL(file);
      setValue('imagePreview', imageUrl);
    }
  };

  const imagePreview = watch('imagePreview');

  React.useEffect(() => {
    return () => {
      const preview = watch('imagePreview');
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [watch]);

  const onSubmit = async (data: AgentFormData) => {
    const avatarFile = watch('avatar_file');
    if (!avatarFile) {
      toast.error("Please upload an image for your agent.");
      return;
    }
    setIsCreating(true);
    setCreateAgentError("");

   
    data.avatar_file = avatarFile;

    const response = await createAgent({
      ...data
    });
    if (response?.status) {
      notifier.success({
        title: response?.message,
      });
      const slug = slugify(response?.data?.agent?.name, {
        replacement: "-",
        lower: true,
      })
      router.push(`/studio/build/${slug}-_${response?.data?.agent?.id}?tab=code`);
    } else {
      notifier.error({
        title: response?.message,
      });
      setIsCreating(false);
      setCreateAgentError(response?.message ?? '');
    }
  };

  return (
    <div className="max-w-3xl lg:max-w-7xl mx-auto mt-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-8"
      >
        <motion.h1
          className="text-3xl font-bold text-gray-800"
          layout
        >
          Create New Agent
        </motion.h1>
        <div className="flex space-x-4">
          {createAgentError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md text-sm"
              role="alert"
            >
              <BiErrorCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
              <div className="flex-grow">
                <p className="font-semibold">Error: {createAgentError}</p>
                <p className="mt-1">
                  Contact <a href="mailto:sup@atrium.st" className="underline hover:text-red-800">sup@atrium.st</a> for support.
                </p>
              </div>
              <button
                onClick={() => setCreateAgentError('')}
                className="ml-2 text-red-500 hover:text-red-700"
                aria-label="Dismiss error"
              >
                <BiX className="h-5 w-5" />
              </button>
            </motion.div>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={isCreating}
            className={`px-4 py-2 bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${isCreating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
          >
            {isCreating ? (
              <>
                <motion.span
                  className="inline-block mr-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  &#8987;
                </motion.span>
                Creating...
              </>
            ) : 'Create Agent'}
          </motion.button>
        </div>
      </motion.div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="flex items-start gap-8">
          <div className="">
            <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700 mb-1">Agent Image</label>
            <div className="relative w-60 h-60 border-2 border-dashed border-gray-300 rounded-md overflow-hidden p-6">
              {imagePreview ? (
                <Image src={imagePreview} alt="Agent" layout="fill" objectFit="cover" />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <FiUpload className="text-gray-400 text-2xl" />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
              >
                <FiUpload className="text-white text-3xl" />
              </motion.div>
              <input
                id="avatar_file"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full h-full">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Agent Name</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Agent name is required" })}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name?.message?.toString() ?? 'Error In Name'}</p>}
            </div>

            <div className="h-full">
              <label htmlFor="headline" className="h-fit block text-sm font-medium text-gray-700 mb-1">Headline</label>
              <textarea
                id="headline"
                {...register("headline", { required: "Headline is required" })}
                className="w-full h-[120px] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                rows={2}
              />
              <p className="flex mt-1 text-sm text-gray-500">Provide a brief summary of what your agent does. <span className="hidden lg:block">This will be displayed as a quick overview.</span></p>
              {errors.headline && <p className="mt-1 text-sm text-red-600">{errors.headline?.message?.toString() ?? 'Error In Headline'}</p>}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-5">Agent Description</label>
          <Controller
            name="description"
            control={control}
            defaultValue={[{ id: "1", type: "p", children: [{ text: '' }] }]}
            rules={{ required: "Description is required" }}
            render={({ field: { onChange, value } }) => (
              <AgentDescriptionEditor
                showToolBar={true}
                description={value}
                initialValue={value}
                isCreating={isCreating}
                isEditing={true}
                onChange={(newValue) => {
                  onChange(newValue);
                }}
                onSubmit={() => { console.log("submit") }}
                customKey="agent-description"
              />
            )}
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description?.message?.toString() ?? 'Error In Description'}</p>}
        </div>
      </form>
    </div>
  );
};

export default Agent;