import React from "react";
import { motion } from "framer-motion";
import {
  RiCheckboxCircleFill,
  RiCheckboxCircleLine,
  RiCheckboxFill,
  RiCheckLine,
  RiCloseLine,
} from "react-icons/ri";
import { Feature, Price } from "@/types/pricing";
import clsx from "clsx";

interface PublicPricingCardProps {
  name: string;
  id: string;
  description: string;
  price_list: Price[];
  feature_list: Feature[];
  onChoosePlan: (id: string) => void;
  isSelected: boolean;
  selected_price_id?: string;
}

const PublicPricingCard: React.FC<PublicPricingCardProps> = ({
  id,
  name,
  price_list,
  feature_list,
  onChoosePlan,
  isSelected,
}) => {
  const handleChoosePlan = () => {
    onChoosePlan(id);
  };

  return (
    <motion.div
      onClick={handleChoosePlan}
      className={`relative rounded-md px-3 py-4 transition-any border-2 ${isSelected ? " bg-violet-50 border-violet-600" : "bg-white hover:bg-neutral-50 hover:border-neutral-300"}`}
    >
      <div className="">
        {isSelected ? (
          <div className="absolute top-0 left-0 flex w-full h-full p-3 justify-end items-start">
            <div className="uppercase px-1.5 py-1 rounded-md bg-violet-600 text-white flex gap-1 items-center text-xs font-semibold">
              Active
            </div>
          </div>
        ) : (
          <button
            className="group absolute top-0 left-0 flex w-full h-full p-4 justify-end items-start opacity-60 hover:opacity-100 transition-any smooth"
          >
            <div className="uppercase py-0.5 px-[3px] rounded-md border border-neutral-400 text-neutral-600 flex items-center text-xs font-semibold w-fit transition-any smooth">
              <div className="w-0 overflow-x-clip opacity-0 group-hover:mr-1 group-hover:w-[48px] group-hover:opacity-100 group-hover:translate-x-1 transition-any smooth">
                Select
              </div>
              <RiCheckLine size={16} />
            </div>
          </button>
        )}
      </div>
      <div className="text-sm font-medium text-neutral-600 mb-2 uppercase">
        {name}
      </div>
      <div className="text-2xl font-semibold mb-4">
        {price_list.length > 0 &&
          "$" +
            (price_list[0].unit_amount / 100).toFixed(2) +
            "/" +
            price_list[0].interval}
      </div>
      {/* <h3 className="text-sm text-neutral-600 mb-4">{description}</h3> */}

      <ul className="space-y-1">
        {feature_list && feature_list.length > 0
          ? feature_list.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2 text-neutral-600"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <div className="flex items-center ml-1 w-6">
                  {feature.type.toLowerCase() === "boolean" &&
                    (feature.is_offered ? (
                      <RiCheckLine
                        size={16}
                        className="text-green-500 text-base"
                      />
                    ) : (
                      <RiCloseLine
                        size={16}
                        className="text-red-500 text-base"
                      />
                    ))}
                  {feature.type.toLowerCase() === "number" && (
                    <span className="font-semibold">{feature.quantity}</span>
                  )}
                </div>
                <span>{feature.name}</span>
              </motion.li>
            ))
          : null}
      </ul>
    </motion.div>
  );
};

export default PublicPricingCard;
