import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
// import Tooltip from "@/components/Shared/Tooltip";
import {
  RiCheckLine,
  RiCheckboxCircleFill,
  RiCheckboxCircleLine,
} from "react-icons/ri";

function PricingCard({
  id,
  name,
  cost,
  synopsis,
  cta,
  recommended = false,
  features,
  feature_summary,
  variant = "default",
  onSelect,
  isSelected = false,
  enableFeatures: enableFeatures = false,
}: any) {
  const renderCardContent = (variant) => {
    if (variant === "minified") {
      return (
        <div
          className={`flex flex-col px-4 py-6 gap-4 rounded-md border-2 ${isSelected ? "" : "border-neutral-800"}`}
        >
          <div className="relative flex gap-1 justify-between h-full">
            <div className="flex flex-col gap-1">
              <div className="text-xs text-neutral-400 uppercase mb-2 font-semibold">
                {name}
              </div>
              <div className="w-full">
                <div className="flex gap-2 items-end">
                  <span className="text-2xl font-semibold tracking-tight">
                    {name === "Enterprise" ? "Custom" : `$${cost.amount}`}
                  </span>
                  <span className="text-sm font-medium mb-1">
                    {" "}
                    {cost.duration ? `/ ${cost.duration}` : ""}
                  </span>
                </div>
              </div>
              {enableFeatures && (
                <div className="flex text-neutral-500 pt-2">
                  {feature_summary}
                </div>
              )}
            </div>
            <div className="absolute w-full h-full">
              {isSelected ? (
                <div className="flex w-full h-full justify-end items-start">
                  <RiCheckboxCircleFill size={24} className={`text-black`} />
                </div>
              ) : (
                <button
                  onClick={() => onSelect(id)}
                  className="flex w-full h-full justify-end items-start opacity-30 hover:opacity-100"
                >
                  <RiCheckboxCircleLine
                    size={24}
                    className={`text-neutral-400`}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`flex flex-col px-5 py-8 gap-8 rounded-md border ${recommended ? "border-black bg-neutral-100" : ""}`}
        >
          <div className="flex flex-col gap-4">
            <div className="text-sm text-neutral-400 uppercase font-medium">
              {name}
            </div>
            <div className="w-full">
              <div className="flex font-bold gap-2 items-end">
                <span className="text-4xl tracking-tight">
                  {name === "Enterprise" ? "Custom" : `$${cost.amount}`}
                </span>
                {cost.yearly ? (
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm">
                      {" "}
                      {cost.duration ? `/ ${cost.duration}` : ""}
                    </div>
                    <div className="text-xs font-normal opacity-80">{`or ${cost.yearly}`}</div>
                  </div>
                ) : (
                  <span className="text-sm mb-5">
                    {" "}
                    {cost.duration ? `/ ${cost.duration}` : ""}
                  </span>
                )}
              </div>
              <div className="mt-3 text-neutral-600 h-12">{synopsis}</div>
            </div>
          </div>
          <Link href={cta.url} className="w-full" rel="noopener noreferrer">
            <DefaultButton
              label={cta.label}
              variant={cta.variant}
              styleClass={`!font-semibold !py-2.5 w-full ${cta.variant === "default" ? "!light:border-black" : ""}`}
            />
          </Link>
          <div className="flex flex-col pt-6 pb-4 gap-4 border-t">
            {features.map((item) => (
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <RiCheckLine size={20} className="mt-1 text-green-600" />
                  <div className="w-11/12 ml-2 text-neutral-600">
                    {item.text}
                  </div>
                </div>
                {/* {item.popover ? <div className="w-5"><Tooltip message={item.popover}> <RiErrorWarningFill className="mt-1 text-neutral-300" size={18}/></Tooltip></div> : ''} */}
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  return renderCardContent(variant);
}

export default PricingCard;
