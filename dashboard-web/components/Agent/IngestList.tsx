import React, { useState } from "react";
import UploadPanel from "@/components/Common/UploadPanel";
import { RiDriveFill, RiDropboxFill, RiUpload2Fill } from "react-icons/ri";
import clsx from "clsx";
import _ from "lodash";
import { Mixpanel } from "@/lib/mixpanel";
import { useNotificationContext } from "@/components/Shared/Notification";
import { useParams } from "next/navigation";

const IngestList = ({ user, variant="default" }) => {
  const notifier: any = useNotificationContext();
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const [fileUploadLoad, setFileUploadLoad] = useState(false);
  const [filesIds, setFileIds] = useState<any>([]);

  const onClickHubspot = () => {
    const baseUrl = `https://app.hubspot.com/oauth/authorize`;
    const clientId = '5cd10ec9-82e9-4e98-9509-3bd05301c247';
    const redirectUrl = `${window.location.origin}/hubspot/install/`;
    const scope = `crm.export%20crm.objects.contacts.write%20crm.import%20oauth%20crm.lists.write%20crm.lists.read%20crm.objects.contacts.read`;
    const links = `${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}`;
    window.open(links, '_blank');
  }

  const onClickGoogleDrive = () => {
    const baseUrl = `https://accounts.google.com/o/oauth2/auth`;
    const clientId = '5cd10ec9-82e9-4e98-9509-3bd05301c247';
    const redirectUrl = `${window.location.origin}/google-drive/install/`;
    const scope = 'https://www.googleapis.com/auth/drive.file';
    const responseType = 'code';
    const links = `${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=${responseType}`;
    window.open(links, '_blank');
  }

  const onClickUpload = () => {
    console.log("Upload clicked");
  }

  // Get the agent installation id from the next router
  const {agent_installation: agent_installation_id} = useParams();

  const ingestionSources = [
    {
      name: "Upload file",
      icon: <RiUpload2Fill className="w-7 h-7"/>,
      tags: ["file", "upload"],
      description:
        "Upload data from a local machine. PDF, Excel and CSV files are supported.",
      onClick: onClickUpload,
      component: <UploadPanel
        setFileUploadLoad={setFileUploadLoad}
        setFileIds={setFileIds}
        uploadedFiles={uploadedFiles}
        agent_installation_id={agent_installation_id as string}
        setUploadedFiles={setUploadedFiles}
        text={"Browse"}
        label_class_name={clsx(
          "text-center flex gap-2 rounded-md flex-none items-center justify-center border cursor-pointer",  
          "border-black dark:border-neutral-600 hover:bg-black hover:text-white font-semibold",
          "dark:bg-none dark:text-white dark:border-white px-3 text-sm py-1.5"
        )}
      />
    },
    // {
    //   name: "Hubspot",
    //   logo: "https://rfm.sh/media/logo/hubspot.svg",
    //   icon: <RiDropboxFill className="w-7 h-7"/>,
    //   tags: [],
    //   description:"Connect your Hubspot acocunt to sync and enrich your CRM seamlessly",
    //   onClick: onClickHubspot
    // },
    // {
    //   name: "Google Drive",
    //   logo: "https://reframe-static.s3.us-east-2.amazonaws.com/media/img/logo/icons8-google-drive.svg",
    //   icon: <RiDriveFill className="w-7 h-7"/>,
    //   tags: ["Object Storage", "Google"],
    //   description:
    //     "Connect your Google Drive account and import CSVs, Excel and TSV files.",
    //   onClick: onClickGoogleDrive
    // },
  ];

  const handleIngetClick = (event: any, source: any) => {
    event.preventDefault();
    Mixpanel.track("🧫 | Third Party Ingest", {
      provider: source?.name,
      namespace_id: "xx_xx",
      ..._.pick(user, "sub", "email", "name", "_id", "sid"),
    });
    if(source?.onClick) {
      source.onClick()
    } else {
      notifier.error({
        title: `${source?.name} is not enabled yet`,
        message: `Cannot import from ${source?.name}. Contact us at sup@reframe.is to enable this feature.`,
      });
    }
   
  };

  const renderSourceItem = (source: any, index: number, isMinified: boolean) => {
    const commonClasses = "w-full min-w-[200px] max-w-xs bg-neutral-100 flex flex-col gap-2 border border-neutral-200 rounded-md text-neutral-600 dark:text-neutral-200 dark:bg-neutral-900 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800";

    if (index === 0 && isMinified) {
      return (
        <div key={source.name} className={`relative ${commonClasses}`}>
          <UploadPanel
            setFileUploadLoad={setFileUploadLoad}
            setFileIds={setFileIds}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            agent_installation_id={agent_installation_id as string}
            text={"Upload"}
            label_class_name={clsx(
              "cursor-pointer",
            )}
          />
          <div className="p-4 absolute flex flex-col gap-2">
            <div className="flex justify-center items-center w-10 h-10">{source.icon}</div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <a href="#">
                  <h5 className="font-semibold">{source.name}s</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const content = (
      <>
        <div className="flex justify-center items-center w-10 h-10">{source.icon}</div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <a href="#">
              <h5 className="font-semibold">{source.name}</h5>
            </a>
            {!isMinified && (
              <div className="text-neutral-500 text-sm dark:text-neutral-300 h-20">
                {source.description}
              </div>
            )}
          </div>
        </div>
        {!isMinified && source.component ? (
          source.component
        ) : (
          <button
            className="text-center w-fit flex gap-2 rounded-md flex-none items-center justify-center border border-black font-semibold dark:bg-none dark:text-white dark:border-white hover:bg-black hover:text-white px-3 text-sm py-1.5"
            disabled={false}
            onClick={(e) => handleIngetClick(e, source)}
          >
            Connect
          </button>
        )}
      </>
    );

    return isMinified ? (
      <button
        key={source.name}
        onClick={(e) => handleIngetClick(e, source)}
        className={`${commonClasses} p-4`}
      >
        {content}
      </button>
    ) : (
      <div key={source.name} className={`${commonClasses} p-4 h-fit`}>
        {content}
      </div>
    );
  };

  return (
    <div className="flex w-full">
      <div className="flex-grow">
        <div className={`grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 ${variant !== 'minified' ? 'pt-8' : ''}`}>
          {ingestionSources.map((source, index) => renderSourceItem(source, index, variant === 'minified'))}
        </div>
      </div>
    </div>
  );
};

export default IngestList;