"use client";
import { useEffect, useState, useCallback } from "react";
import { RiExternalLinkLine, RiArrowLeftLine, RiRocket2Line, RiCodeBlock, RiArrowUpSLine } from "react-icons/ri";
import { TrashIcon } from "@radix-ui/react-icons";
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { useParams } from "next/navigation";
import { useAgentByPk_EditorSubscription } from "@/generated/graphql";
import { Tab } from '@headlessui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'universal-cookie';
import slugify from "slugify";
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Loader from "@/components/Common/AtriumLoader";
import AgentDescriptionEditor from "@/components/Plate/components/agent-description-editor";
import { updateAgent, deployAgent, uploadAgentBanner, deleteAgentBanner, awakeAgent } from "@/lib/services/agent";
import { useNotificationContext } from "@/components/Shared/Notification";
import DeploymentCard from "@/components/Pages/Build/component/DeploymentCard";
import { useSessionContext } from "@/lib/context/session";
import Image from 'next/image';
import { FiUpload } from 'react-icons/fi';
import PricingSection from './PricingSection';
import { SubscriptionOption } from "@/types/agent";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerFile } from "@/types/agent";
import toast from "react-hot-toast";
import { AgentParams } from "@/types/agent";
import BannerUpload from '@/components/Pages/Build/component/BannerUpload';
import SubscriptionsSection from './SubscriptionsSection';
import { AgentRuntimeStatus } from "@/lib/constant";
import { __agent_url } from "@/lib/utils";

interface AgentFormData extends FieldValues {
  name: string;
  headline: string;
  description: object;
  id: string;
  visibility: string;
  enabled: boolean;
  avatar_file: File | null;
  banner_files: BannerFile[];
}

interface ManageAgentProps {
  data: AgentParams;
}

const DEFAULT_BANNER_URL = 'https://test1-emgndhaqd0c9h2db.a01.azurefd.net/images/217467b9-9e98-4046-abc3-74d906b5e332.png'; // Replace with your actual default banner URL

const ManageAgentRender: React.FC<ManageAgentProps> = ({ data: initial_data }) => {

  const [isDeploying, setIsDeploying] = useState(false);
  let { id: agent_id } = useParams();
  agent_id = Array.isArray(agent_id) ? agent_id[0] : agent_id;
  agent_id = agent_id?.slice(-16) || '';


  const { session } = useSessionContext();


  // Apollo subscriptions and queries
  const { data, loading, error } = useAgentByPk_EditorSubscription({
    variables: { id: agent_id },
    skip: !agent_id
  });

  const { register, handleSubmit, control, watch, formState: { errors, isDirty }, setValue, reset } = useForm<AgentFormData>();


  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('description');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const notifier: any = useNotificationContext();

  const imagePreview = watch('imagePreview');

  const [bannerFiles, setBannerFiles] = useState<BannerFile[]>([]);
  const [loadingFileIds, setLoadingFileIds] = useState<string[]>([]);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'description' || tab === 'code' || tab === 'deployments' || tab === 'pricing' || tab === 'subscriptions') {
      setActiveTab(tab);
    }
  }, [searchParams]);
  

  useEffect(() => {
    if (data?.agent) {
      setValue('name', data.agent.name || '');
      setValue('visibility', data.agent.visibility || '');
      setValue('headline', data.agent.headline || '');
      setValue('description', data?.agent?.description?.['components'] || [{ id: "1", type: "p", children: [{ text: '' }] }]);
      setValue('id', data.agent.id || '');
    }
  }, [data, setValue]);

  useEffect(() => {
    if (data?.agent?.runtime?.dev_password_hash) {
      const cookies = new Cookies();
      const cookie_domain = ".atrium.st";
      cookies.set('code-server-session', data?.agent?.runtime?.dev_password_hash,
        { path: '/', domain: cookie_domain });
    }
  }, [data?.agent?.runtime?.dev_password_hash, data?.agent?.runtime?.dev_endpoint]);

  useEffect(() => {
    if (data?.agent?.runtime?.dev_endpoint) {
      setIframeLoaded(false);
    }
  }, []);

  const handleAwakeAgent = async   () => {    
       const result = await awakeAgent({ agent_id: data?.agent?.id || '' })
       if (result?.status === 200 ) {
         toast.success("Agent awakened successfully");
       } else {
         toast.error("Failed to awaken agent");
       }
  }

  const handleToggleEnableAgent = useCallback(() => {
    if (!data?.agent?.id) {
      toast.error("Missing agent ID");
      return;
    }

    const newEnableStatus = !data?.agent?.enabled;
    console.log("newEnableStatus ->", newEnableStatus, data?.agent)

    updateAgent({ id: data?.agent?.id, enabled: newEnableStatus })
      .then(result => {
        if (result?.status) {
          toast.success(`Agent ${newEnableStatus ? 'enabled' : 'disabled'} successfully`);
        } else {
          toast.error(result?.message || `Failed to ${newEnableStatus ? 'enable' : 'disable'} agent`);
        }
      });
  }, [data?.agent?.id, data?.agent?.enabled]);

  const handleTabChange = (index: number) => {
    let newTab: string;
    switch (index) {
      case 0:
        newTab = 'description';
        break;
      case 1:
        newTab = 'code';
        break;
      case 2:
        newTab = 'deployments';
        break;
      case 3:
        newTab = 'pricing';
        break;
      case 4:
        newTab = 'subscriptions';
        break;
      default:
        newTab = 'description';
    }
    setActiveTab(newTab);
    router.push(`?tab=${newTab}`, { scroll: false });
  };

  const handleDeployAgent = useCallback(() => {
    if (!data?.agent?.id) {
      toast.error("Missing agent ID or workspace ID");
      return;
    }
    setIsDeploying(true);

    deployAgent({ agent_id: data?.agent?.id })
      .then(result => {
        if (result?.status) {
          toast.success("Agent deployed successfully");
        } else {
          toast.error(result?.message || "Failed to deploy agent");
        }
        setIsDeploying(false);
      });
  }, [data?.agent?.id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading || isCreating) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <Loader />
        </div>
      </div>
    );
  }
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue('avatar_file', file, { shouldDirty: true });
      const imageUrl = URL.createObjectURL(file);
      setValue('imagePreview', imageUrl);
    }
  };

  const ALLOWED_MIME_TYPES = [
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/webp',
    'video/mp4'
  ];

  const handleBannerChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    
    // Validate file types
    const invalidFiles = fileArray.filter(
      file => !ALLOWED_MIME_TYPES.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      notifier.error({
        title: "Invalid file type(s)",
        message: "Supported types: PNG, JPEG, GIF, WEBP, MP4"
      });
      return;
    }

    setLoadingFileIds(prev => [...prev, 'uploading']);
    
    try {
      const response = await uploadAgentBanner({
        agent_id: data?.agent?.id || '',
        files: fileArray
      });

      if (response?.status) {
        notifier.success({
          title: "Banners uploaded successfully"
        });
      } else {
        notifier.error({
          title: "Upload Failed",
          message: response?.message || 'Failed to upload banners'
        });
      }
    } catch (error) {
      console.error('Error uploading banners:', error);
      notifier.error({
        title: "Upload Error",
        message: 'Failed to upload banners'
      });
    } finally {
      setLoadingFileIds(prev => prev.filter(file_id => file_id !== 'uploading'));
    }
  };

  const handleDeleteBanner = async (fileId: string) => {
    setLoadingFileIds(prev => [...prev, fileId]);
    
    try {
      const response = await deleteAgentBanner({
        agent_id: data?.agent?.id || '',
        file_id: fileId
      });

      if (response?.status) {
        notifier.success({
          title: "Banner deleted successfully"
        });
      } else {
        notifier.error({
          title: "Delete Failed",
          message: response?.message || 'Failed to delete banner'
        });
      }
    } catch (error) {
      console.error('Error deleting banner:', error);
      notifier.error({
        title: "Delete Error",
        message: 'Failed to delete banner'
      });
    } finally {
      setLoadingFileIds(prev => prev.filter(file_id => file_id !== fileId));
    }
  };

  const onSubmit = async (agentFormData: AgentFormData) => {
    setIsCreating(true);
    
    try {
      const response = await updateAgent({
        id: data?.agent?.id,
        name: agentFormData.name,
        visibility: agentFormData.visibility,
        headline: agentFormData.headline,
        description: agentFormData.description,
        avatar_file: agentFormData.avatar_file
      });

      if (response?.status) {
        notifier.success({
          title: response?.message,
        });
        reset(agentFormData);
      } else {
        notifier.error({
          title: response?.message,
        });
      }
    } catch (error) {
      console.error("Error updating agent:", error);
      notifier.error({
        title: "Failed to update agent",
      });
    } finally {
      setIsCreating(false);
    }
  };

  const hasActiveDeployments = data?.agent?.deployment_list?.some(
    (deployment) => deployment.status === 'SUCCESS'
  );
  ;

  const tabStyles = clsx("font-medium px-2 pt-[7px] pb-[5px] focus:outline-0 focus-visible:outline-0 rounded-t-md border-b-[2.5px] transition-all")

  // Add this function before the return statement
  const mapProductsToSubscriptionOptions = (products: any[]): SubscriptionOption[] => {
    return products?.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      trial_period_days: product.trial_period_days,
      price_list: product.price_list.map((price: any) => ({
        ...price,
        interval: price.interval as "month" | "year",
        currency: price.currency,
        id: price.id,
        default: price.default
      })),
      feature_list: product.feature_list,
      default_price_id: product.default_price_id
    })) || [];
  };

  // Add this helper function before the return statement
  const renderBannerFile = (file: any) => {
    if (file.file_type?.startsWith('image/')) {
      return <img src={file.url} alt="Banner" className="object-cover w-full h-full" />;
    } else if (file.file_type?.startsWith('video/')) {
      return (
        <video
          className="w-full h-full object-cover"
          controls
          playsInline
        >
          <source src={file.url} type={file.file_type} />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center h-full bg-gray-50">
          <div className="text-gray-600 text-4xl mb-2">FILE</div>
          <div className="text-sm text-gray-600">{file.file_type}</div>
        </div>
      );
    }
  };

  return (
    <div className="h-full overflow-hidden">

      <Tab.Group selectedIndex={['description', 'code', 'deployments', 'pricing', 'subscriptions'].indexOf(activeTab)} onChange={handleTabChange} as="div">
        <div className="flex items-center justify-between px-6 bg-white border-b border-x h-12 mt-[1px] max-w-[1920px] mx-auto">
          <div className="flex items-center h-full w-6/12 lg:w-7/12">
            <Link href="/studio" className="flex items-center mr-10"><RiArrowLeftLine size={20} /></Link>

            <Tab.List className="flex gap-8 h-full relative w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mr-4 flex items-center"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={data?.agent?.avatar_url || '/default-avatar.png'}
                    alt="Agent Avatar"
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </div>
              </motion.div>

              <div className="flex gap-8 h-full relative w-8/12 lg:w-full transition-any overflow-x-auto scroll-smooth hide-scrollbar">
                {['Description', 'Code', "Deployments", "Pricing", "Subscriptions"].map((tabName) => (
                  <Tab key={tabName} className={({ selected }) => `${tabStyles} ${selected ? "font-semibold border-black text-black" : "text-neutral-600 border-transparent hover:text-neutral-800 hover:border-neutral-300"}`} as="button">{tabName}</Tab>
                ))}
              </div>
            </Tab.List>
          </div>

          <div className="flex items-center justify-end gap-4 h-[32px]">
            {activeTab === 'description' && (
              <>
                <button
                  type="submit"
                  form="agent-edit-form"
                  disabled={!isDirty}
                  className={`text-center flex gap-2 rounded-md flex-none items-center justify-center px-3 h-full border transition-all font-medium ${isDirty
                      ? 'border-black hover:bg-opacity-80 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-black focus:border-black'
                      : 'border-black text-neutral-600 cursor-not-allowed'
                    }`}
                >
                  Save Changes
                </button>
              </>
            )}
            <motion.div
              whileHover={isDeploying ? undefined : { scale: 1.03 }}
              whileTap={isDeploying ? undefined : { scale: 0.97 }}
              className="h-full"
            >
              <button
                onClick={isDeploying ? undefined : handleDeployAgent}
                disabled={isDeploying}
                className={`text-center flex gap-2 rounded-md flex-none items-center justify-center px-3 h-full gradient-purple-1 bg-neutral-100 text-white transition-all font-medium ${isDeploying && 'opacity-60 cursor-not-allowed'}`}
              >
                {isDeploying ? (
                  <>
                    <div className="circle-loader h-[18px] w-[18px]"></div>
                    Deploying...
                  </>
                ) : (
                  <>
                    <RiRocket2Line size={20} />
                    Deploy
                  </>
                )}
              </button>
            </motion.div>
            <div className="h-3/4 w-[1px] bg-neutral-200" />

            <div className="h-full">
              <input
                id="enable-agent"
                type="checkbox"
                checked={data?.agent?.enabled}
                onClick={hasActiveDeployments ? handleToggleEnableAgent : undefined}
                disabled={!hasActiveDeployments}
                className="sr-only hidden peer"
              />
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium uppercase">
                  {data?.agent?.enabled ? 'ENABLED' : 'DISABLED'}
                </span>
                <div className="relative pt-0.5">
                  <label htmlFor="enable-agent"
                    className={`relative inline-block w-[52px] h-7 rounded-md cursor-pointer ${hasActiveDeployments
                      ? data?.agent?.enabled
                        ? 'bg-green-600 peer-checked:bg-green-600'
                        : 'bg-neutral-300 peer-checked:bg-green-600'
                      : 'bg-neutral-300 opacity-50 cursor-not-allowed'
                      }`}
                    data-tooltip-id="enable-tooltip"
                    data-tooltip-content={
                      hasActiveDeployments
                        ? data?.agent?.enabled
                          ? "Click to disable this agent"
                          : "Click to enable this agent"
                        : "Deploy the agent successfully to enable it"
                    }
                  >
                    <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-md shadow-md 
                      transition-transform duration-300
                      ${data?.agent?.enabled ? 'translate-x-6' : ''}
                    `}></span>
                  </label>
                </div>

              </div>

            </div>


            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-full"
            >
              <Link
                href={data?.agent ? __agent_url({name: data.agent.name || '', id: data.agent.id}) : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 text-neutral-600 transition-all"
                title="Open Agent in new tab"
              >

                <RiExternalLinkLine size={18} />
              </Link>
            </motion.div>
          </div>

        </div>

        <Tab.Panels as="div" className="px-6 md:px-10 h-[calc(100vh-106px)] overflow-y-auto pt-8 pb-16">
          <Tab.Panel>
            <div className="w-full max-w-[1600px] mx-auto overflow-y-auto">

              <form id="agent-edit-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="text-2xl font-semibold">Edit agent</div>
                <div className="grid grid-cols-10 gap-10">
                  <div className="col-span-full lg:col-span-6">
                    {/* Carousel Display */}
                    <div className="relative w-full rounded-md overflow-hidden mb-4">
                      {(data?.agent?.banner_list?.length ?? 0) > 0 ? (
                        <Carousel
                          showArrows={true}
                          showStatus={false}
                          showIndicators={(data?.agent?.banner_list?.length ?? 0) > 1}
                          showThumbs={true}
                          infiniteLoop={true}
                          className="w-full custom-carousel-styles"
                          renderThumbs={(items) => [
                            ...(data?.agent?.banner_list?.map((file) => (
                              <div key={file.id} className="relative group">
                                <div className="aspect-[1.9/1] w-full">
                                  {loadingFileIds.includes(file.id ?? '') ? (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                      <div className="circle-loader h-6 w-6"></div>
                                    </div>
                                  ) : (
                                    file.file_type?.startsWith('image/') ? (
                                      <img src={file.url} alt="thumbnail" className="w-full h-full object-cover" />
                                    ) : file.file_type?.startsWith('video/') ? (
                                      <video 
                                        className="w-full h-full object-cover"
                                        muted 
                                        playsInline
                                      >
                                        <source src={file.url} type={file.file_type} />
                                      </video>
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                        <span className="text-xs">{file?.file_type?.split('/')[1]?.toUpperCase()}</span>
                                      </div>
                                    )
                                  )}
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleDeleteBanner(file.id ?? '');
                                  }}
                                  disabled={loadingFileIds.includes(file.id ?? '')}
                                  className={`absolute top-1 right-1 p-1 bg-red-500 text-white rounded-md 
                                    opacity-0 group-hover:opacity-100 transition-opacity
                                    ${loadingFileIds.includes(file.id ?? '') ? 'cursor-not-allowed opacity-50' : ''}`}
                                >
                                  <TrashIcon />
                                </button>
                              </div>
                            )) || []),
                            // Replace the upload thumbnail
                            <BannerUpload
                              key="upload"
                              isLoading={loadingFileIds.includes('uploading')}
                              onChange={handleBannerChange}
                            />
                          ]}
                        >
                          {data?.agent?.banner_list.map((file) => (
                            <div key={file.id} className="aspect-[1.9/1]">
                              {renderBannerFile(file)}
                            </div>
                          ))}
                        </Carousel>
                      ) : (
                        <BannerUpload
                          isLoading={loadingFileIds.includes('uploading')}
                          onChange={handleBannerChange}
                        />
                      )}
                    </div>
                  </div>

                  <div className="col-span-full px-0.5 lg:col-span-4 flex flex-col gap-8">
                    {/* Avatar Section */}
                    <div className="flex w-full">
                      <div className="relative h-28 flex gap-3">
                        <div className="flex-shrink-0 rounded-md border border-gray-200 overflow-hidden w-28 h-28 relative">
                          {(imagePreview || data?.agent?.avatar_url) ? (
                            <Image 
                              src={imagePreview || data?.agent?.avatar_url || ''}
                              alt="Agent" 
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full bg-neutral-50">
                              <FiUpload className="text-neutral-400 text-2xl" />
                            </div>
                          )}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all"
                          >
                            <div className="flex flex-col items-center gap-1">
                              <FiUpload className="text-white text-2xl" />
                              <span className="text-white text-xs font-medium">Upload Avatar</span>
                            </div>
                          </motion.div>
                        </div>
                        <button className="text-center flex gap-2 rounded-md items-center justify-center transition-all text-sm text-neutral-700 bg-neutral-100 border border-neutral-200 hover:bg-black hover:text-black font-medium px-4 py-2 h-8">
                          Browse
                        </button>
                        <input
                          id="avatar_file"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                      </div>
                    </div>

                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                        Agent Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name", { required: "Agent name is required" })}
                        className="w-full p-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-black font-semibold text-xl transition-all"
                        placeholder="Enter agent name"
                      />
                      {errors.name && 
                        <p className="text-sm text-red-500 mt-1">
                          {errors.name?.message?.toString() ?? 'Error In Name'}
                        </p>
                      }
                    </div>
                  
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-neutral-700">Visibility</label>
                      <select
                        {...register("visibility", { required: "Visibility is required" })}
                        className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="PUBLIC">Public</option>
                        <option value="WORKSPACE">Workspace</option>
                        <option value="USER">Only Me</option>
                      </select>
                </div>
                    {/* Headline/Description Input */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <label htmlFor="headline" className="block text-sm font-medium text-neutral-700">
                          Short Description
                        </label>
                        <p className="text-sm text-neutral-500">
                          Provide a brief summary of what your agent does.
                        </p>
                      </div>
                      <textarea
                        id="headline"
                        {...register("headline", { required: "Headline is required" })}
                        className="w-full h-[160px] p-3 border border-neutral-200 rounded-lg shadow-sm 
                          focus:outline-none focus:ring-1 focus:ring-black 
                          resize-none transition-all"
                        placeholder="Write a compelling description..."
                      />
                      {errors.headline && 
                        <p className="text-sm text-red-500 mt-1">
                          {errors.headline?.message?.toString() ?? 'Error In Headline'}
                        </p>
                      }
                    </div>
                  </div>
                </div>

                {/* Full Description Editor */}
                <div className="space-y-2">
                  <div className="space-y-1">
                    <label htmlFor="description" className="block text-sm font-medium text-neutral-700">
                      Full Description
                    </label>
                    <p className="text-sm text-neutral-500">
                      Provide detailed information about your agent's capabilities and use cases.
                    </p>
                  </div>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue={data?.agent?.description?.['components'] || [{ id: "1", type: "p", children: [{ text: '' }] }]}
                    rules={{ required: "Description is required" }}
                    render={({ field: { onChange, value } }) => (
                      <div className={`border hover:border-black rounded-lg overflow-hidden ${isDirty ? "border-black" : "border-neutral-200"}`}>
                        <AgentDescriptionEditor
                          description={value}
                          initialValue={data?.agent?.description?.['components'] || [{ id: "1", type: "p", children: [{ text: '' }] }]}
                          isEditing={true}
                          onChange={(newValue) => {
                            console.log("newValue ->", newValue)
                            onChange(newValue);
                          }}
                          onSubmit={() => { console.log("submit") }}
                          customKey="agent-description"
                        />
                      </div>
                    )}
                  />
                  {errors.description && 
                    <p className="text-sm text-red-500 mt-1">
                      {errors.description?.message?.toString() ?? 'Error In Description'}
                    </p>
                  }
                </div>
              </form>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="w-full h-full">
              {data?.agent?.runtime?.dev_endpoint ? (
                <>
                </>
              ) : (
                <div className="text-neutral-500">
                  Agent Does not have a runtime environment.
                </div>
              )}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="w-full h-full">
              <h3 className="text-lg font-semibold mb-4">Deployments</h3>
              <div className="overflow-auto max-h-[700px]">
                {session?.loading ? (
                  <div className="flex justify-center items-center h-full">
                    <div className="circle-loader-dark h-12 w-12"></div>
                  </div>
                ) : data?.agent?.deployment_list && data.agent.deployment_list.length > 0 ? (
                  data.agent.deployment_list.map((deployment, index) => (
                    <DeploymentCard
                      key={index}
                      status={deployment?.status || 'Unknown'}
                      duration={deployment.duration ?? 0}
                      userName={deployment.user?.name ?? 'Unknown User'}
                      createdAt={deployment._cr}
                    />
                  ))
                ) : (
                  <div className="text-neutral-500 text-center py-4">No deployments available.</div>
                )}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <PricingSection
              agent={data?.agent}
              agent_id={data?.agent?.id ?? ''}
              isLoading={session?.loading}
              productList={mapProductsToSubscriptionOptions(data?.agent?.product_list || [])}
            />
          </Tab.Panel>
          <Tab.Panel>
            <SubscriptionsSection />
          </Tab.Panel>
        </Tab.Panels>


      </Tab.Group>




      {/* <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row w-full mb-8 justify-between items-start md:items-center space-y-4 md:space-y-0"
        >
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2"
          >
            
          </motion.div>
          <div className="flex flex-wrap gap-3">
            <motion.div
              whileHover={hasActiveDeployments ? { scale: 1.05 } : undefined}
              whileTap={hasActiveDeployments ? { scale: 0.95 } : undefined}
            >
              <button
                onClick={hasActiveDeployments ? handleInstallAgent : undefined}
                disabled={!hasActiveDeployments}
                className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-sm ${hasActiveDeployments
                    ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-md'
                    : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                  }`}
                data-tooltip-id="enable-tooltip"
                data-tooltip-content={hasActiveDeployments
                  ? "Enable this agent"
                  : "Deploy the agent successfully to enable it"}
              >
                <RiCheckLine size={18} className="mr-1.5" />
                Enable
              </button>
            </motion.div>
            <Tooltip id="enable-tooltip" />
            
            {isDeploying && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => handleTabChange(3)}
                  className="bg-neutral-200 text-neutral-800 hover:bg-neutral-300 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <RiFileListLine size={18} className="mr-1.5" />
                  {showDeployments ? 'Hide Deployments' : 'View Deployments'}
                </button>
              </motion.div>
            )}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleDebugAgent}
                className="bg-neutral-200 text-neutral-800 hover:bg-neutral-300 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <RiBugLine size={18} className="mr-1.5" />
                Debug
                <RiExternalLinkLine size={14} className="ml-1.5" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {showDeployments && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-4 bg-neutral-100 rounded-md shadow-inner"
          >
            <h3 className="text-lg font-semibold mb-2">Deployments</h3>
            <pre className="text-sm overflow-auto max-h-60">
              {_deployments?.loading ? 'Loading Deployments...' : _deployments?.data}
            </pre>
          </motion.div>
        )}

      </div> */}


      {/* Code Workspace */}
      {/* This component is always visible to avoid long reload times due to iframe */}
      <div className={`absolute bottom-0 w-full ${activeTab === 'code' ? 'h-[calc(100vh-106px)]' : 'h-14'} z-[100]`}>
      {data?.agent?.runtime?.dev_status === AgentRuntimeStatus.HIBERNATED ? (
        <div className="flex flex-col items-center justify-center gap-3 p-4">
          <p className="text-neutral-500 text-lg">Your dev environment was hibernated to save on resources.</p>
          <button 
            className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-md font-medium transition-colors"
            onClick={handleAwakeAgent}
          >
            Awake?
          </button>
        </div>
      ) : data?.agent?.runtime?.dev_status === AgentRuntimeStatus.HIBERNATING ? (
        <div className="flex flex-col items-center justify-center gap-3 p-4">
          <p className="text-neutral-500 text-lg">Your dev environment is hibernating to save on resources.</p>
        </div>
      ): data?.agent?.runtime?.dev_status === AgentRuntimeStatus.ERROR ? (
        <div className="flex flex-col items-center justify-center gap-3 p-4">
          <p className="text-neutral-500 text-lg">There was an error occurred while waking up your dev environment.</p>
        </div>
      ): data?.agent?.runtime?.dev_status === AgentRuntimeStatus.WAKING ? (
        <div className="flex flex-col items-center justify-center gap-3 p-4">
          <p className="text-neutral-500 text-lg">Your dev environment is waking up.</p>
        </div>
      ): data?.agent?.runtime?.dev_status === AgentRuntimeStatus.AWAKE ? (
        <>
        {!iframeLoaded && (
          <div className="flex justify-center items-center h-full">
            <div className="circle-loader-dark h-12 w-12"></div>
          </div>
        )}
        
        <motion.div
          initial={{ width: '284px', height: '60px' }}
          animate={{
            width: activeTab === 'code' ? '100%' : '284px',
            height: activeTab === 'code' ? '100%' : '48px',
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className={clsx(
            // 'absolute top-1/2 -translate-y-1/2 right-0',
            'absolute right-0',
            activeTab !== 'code' ? 'overflow-hidden mr-6 md:mr-10 bottom-0 rounded-md shadow-[0_-1px_6px_1px_rgba(0,0,0,0.1)]' : ''
          )}
        >
          <div className={` ${activeTab === 'code' ? 'hidden' : 'flex'} h-12 px-3 py-2 text-[15px] w-full justify-between bg-white border border-neutral-200 rounded-t-md`}>
            <div className="flex gap-3 h-fit font-medium items-center"><RiCodeBlock size={20} />Code Editor</div>
            <button onClick={() => setActiveTab('code')} className="h-6 w-6 rounded flex items-center justify-center hover:bg-neutral-100">
              <RiArrowUpSLine size={20} />
            </button>
          </div>
          <iframe
            src={data?.agent?.runtime?.dev_endpoint}
            title="Agent Code Workspace"
            allow="clipboard-read; clipboard-write"
            className={clsx(
              'w-full h-full',
              iframeLoaded ? 'block' : 'hidden'
            )}
            onLoad={() => setIframeLoaded(true)}
          ></iframe>
        </motion.div>
        </>
        ):("")}
      </div>
    </div>
  );
};

export default ManageAgentRender;