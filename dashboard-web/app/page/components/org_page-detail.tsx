import { Editor } from "@/components/Plate/components/plate-ui/editor";
import { plugins } from "@/components/Plate/lib/plate/plate-plugins";
import { Plate } from "@udecode/plate-common";
import React, { useRef } from "react";

const OrgPageDetail = React.memo(({ results }: any) => {
  const containerRef = useRef(null);
  const customKey = Math.floor(Math.random() * 1000);

  return (
    <div className="result-content mb-4 lg:mb-0 sm:col-span-8 lg:col-span-6">
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg">
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <img
              className="hidden sm:block rounded-md h-12 w-12"
              src={
                results?.logo_url
                  ? results?.logo_url
                  : "/images/defaultLogo.svg"
              }
              alt={results?.name}
            />
          </div>
          <div>
            <p className="font-semibold leading-[16px] text-[16px] text-[#0A0A0A]">
              {results?.name}
            </p>
            <p className="leading-[19px] text-[14px] text-[#737373]">
              {results?.seo_description}
            </p>
          </div>
        </div>
        <div className="mt-6">
          {/* <div className="absolute inset-1/4 flex h-fit justify-center">
            <EntityPageSnippet/>
          </div> */}

          <p className="font-semibold leading-[22px] text-[14px] text-[#000000]">
            OVERVIEW
          </p>
          {results?.description_richtext?.components ? (
            <div className="leading-[19px] text-[14px] text-[#737373]">
              <Plate
                key={customKey}
                readOnly={true}
                plugins={plugins}
                value={results?.description_richtext?.components}
              >
                <div
                  ref={containerRef}
                  className={`leading-[19px] text-[14px] text-[#737373]`}
                >
                  <Editor
                    className={"leading-[19px] text-[14px] text-[#737373]"}
                    readOnly={true}
                    autoFocus
                    placeholder="Type a prompt..."
                    focusRing={false}
                    variant="ghost"
                    size="md"
                  />
                </div>
              </Plate>
            </div>
          ) : (
            <div>
              <p className="leading-[19px] text-[14px] text-[#737373]">
                {results?.description_plaintext}
              </p>
            </div>
          )}
        </div>
        <hr className="my-12" />
        {/* <div>
          <p className="font-semibold leading-[22px] text-[14px] text-[#000000]">
            INDUSTRY
          </p>
          <p className="mt-2 leading-[25.6px] text-[16px] text-[#525252] mb-3">
            Sentry is a key player in the following industries and market
            segments:
          </p>
          <div className="mt-2 flex space-x-2">
            {results?.industries?.map((item, index) => {
              return (
                <span
                  key={index}
                  className="px-2 py-1 font-medium bg-[#f5f5f5] border border-gray-300 rounded-md leading-[19px] text-[12px] text-[#404040]"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
});

export default OrgPageDetail;
