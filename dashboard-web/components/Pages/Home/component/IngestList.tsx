import UploadPanel from "@/components/Common/UploadPanel";
import { RiDriveFill, RiDropboxFill, RiUpload2Fill } from "react-icons/ri";
import clsx from "clsx";
import _ from "lodash";
import { Mixpanel } from "@/lib/mixpanel";
import { useNotificationContext } from "@/components/Shared/Notification";


const IngestList = ({ user, namespace, variant="default" }) => {
  const notifier: any = useNotificationContext();

  const onClickHubspot = () => {
    const baseUrl = `https://app.hubspot.com/oauth/authorize`;
    const clientId = '5cd10ec9-82e9-4e98-9509-3bd05301c247';
    const redirectUrl = `${window.location.origin}/hubspot/install/`;
    const scope = `crm.export%20crm.objects.contacts.write%20crm.import%20oauth%20crm.lists.write%20crm.lists.read%20crm.objects.contacts.read`;
    const links = `${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}`;
    window.open(links, '_blank');
  }

  const ingestionSources = [
    {
      name: "Upload file",
      icon: <RiUpload2Fill className="w-7 h-7"/>,
      tags: ["file", "upload"],
      description:
        "Upload data from a local machine. Excel, CSV and TSV files are supported.",
    },
    {
      name: "Hubspot",
      logo: "https://rfm.sh/media/logo/hubspot.svg",
      icon: <RiDropboxFill className="w-7 h-7"/>,
      tags: [],
      description:"Connect your Hubspot acocunt to sync and enrich your CRM seamlessly",
      onClick: onClickHubspot
    },
    {
      name: "Google Drive",
      logo: "https://reframe-static.s3.us-east-2.amazonaws.com/media/img/logo/icons8-google-drive.svg",
      icon: <RiDriveFill className="w-7 h-7"/>,
      tags: ["Object Storage", "Google"],
      description:
        "Connect your Google Drive account and import CSVs, Excel and TSV files.",
    },
  ];

  const handleIngetClick = (event: any, source: any) => {
    event.preventDefault();
    Mixpanel.track("🧫 | Third Party Ingest", {
      provider: source?.name,
      namespace_id: namespace?._id,
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

  const renderIngestList = (variant) => {
    if (variant === 'minified') {
      return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          <div className="relative w-full max-w-xs bg-neutral-100 flex flex-col gap-2 border border-neutral-200 rounded-md text-neutral-600 dark:text-neutral-200 dark:bg-neutral-900 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <UploadPanel
                          setFileUploadLoad={() => console.log("setFileUploadLoad")}
                          setFileIds={() => console.log("setFileIds")}
                          uploadedFiles={[]}
                          setUploadedFiles={() => console.log("setUploadedFiles")}
              text={"Upload"}
              label_class_name={clsx(
                "opacity-[.1] z-[50] dark:text-neutral-700 text-neutral-100 w-full h-[104px] cursor-pointer",
              )}
            />
            <div className="p-4 absolute flex flex-col gap-2">
              <div className="flex justify-center items-center w-10 h-10">{ingestionSources[0]?.icon}</div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <a href="#">
                    <h5 className="font-semibold">
                      {ingestionSources[0]?.name}s
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {_.map(ingestionSources.slice(1), (source: any) => (
            <button
              key={source?.name}
              onClick={(e) => handleIngetClick(e, source)}
              className="w-full max-w-xs bg-neutral-100 flex flex-col gap-2 h-fit border border-neutral-200 p-4 rounded-md text-neutral-600 dark:text-neutral-200 dark:bg-neutral-900 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <div className="flex justify-center items-center w-10 h-10">{source?.icon}</div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <a href="#">
                    <h5 className="font-semibold">
                      {source?.name}
                    </h5>
                  </a>
                </div>
              </div>
            </button>
          ))}
        </div>
      )
    } else {
      return (
        <div className="pt-8 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          <div className="w-full max-w-xs bg-white flex flex-col gap-3 h-fit border border-neutral-200 p-4 rounded-md dark:bg-neutral-900 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <div className="flex justify-center items-center w-10 h-10">{ingestionSources[0]?.icon}</div>
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col gap-2">
                <a href="#">
                  <h5 className="font-bold text-neutral-900 dark:text-white">
                    {ingestionSources[0]?.name}
                  </h5>
                </a>
                <div className="text-neutral-500 text-sm dark:text-neutral-300 h-20">
                  {ingestionSources[0]?.description}
                </div>
              </div>

              <div className="">
                <UploadPanel
                              setFileUploadLoad={() => console.log("setFileUploadLoad")}
                              setFileIds={() => console.log("setFileIds")}
                              uploadedFiles={[]}
                              setUploadedFiles={() => console.log("setUploadedFiles")}
                  text={"Browse"}
                  label_class_name={clsx(
                    "text-center flex gap-2 rounded-md flex-none items-center justify-center border cursor-pointer",
                    "border-black dark:border-neutral-600 hover:bg-black hover:text-white font-semibold",
                    "dark:bg-none dark:text-white dark:border-white px-3 text-sm py-1.5"
                  )}
                />
              </div>
            </div>
          </div>

          {_.map(ingestionSources.slice(1), (source: any) => (
            <div
              key={source?.name}
              className="w-full max-w-xs bg-white flex flex-col gap-3 h-fit border border-neutral-200 p-4 rounded-md dark:bg-neutral-900 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <div className="flex justify-center items-center w-10 h-10">
                <img
                  className="w-8 h-8"
                  src={source?.logo}
                  alt="product image"
                />
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col gap-2">
                  <a href="#">
                    <h5 className="font-bold text-neutral-900 dark:text-white">
                      {source?.name}
                    </h5>
                  </a>
                  <div className="text-neutral-500 text-sm dark:text-neutral-300 h-20">
                    {source?.description}
                  </div>
                </div>
                <button
                  className="text-center w-fit flex gap-2 rounded-md flex-none items-center justify-center border border-black font-semibold dark:bg-none dark:text-white dark:border-white hover:bg-black hover:text-white px-3 text-sm py-1.5"
                  disabled={false}
                  onClick={(e) => handleIngetClick(e, source)}
                >
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      )
    }
  }
  return (
    renderIngestList(variant)
  );
};

export default IngestList;