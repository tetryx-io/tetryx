import React from "react";
import { motion } from "framer-motion";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";

interface Feature {
  type: string;
  name: string;
  is_offered: boolean;
  quantity: number;
}

interface PricingCardProps {
  name: string;
  description: string;
  price_list: { unit_amount: number; currency: string; interval: string }[];
  trial_period_days: number;
  features: Feature[];
  onChoosePlan?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price_list,
  trial_period_days,
  features,
  onChoosePlan,
}) => {
  
  return (
    <motion.div
      className="bg-white border rounded-md p-6 flex flex-col gap-8 h-fit relative max-w-xs"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="">
        <div className="text-sm font-semibold text-neutral-400 uppercase mb-3">
          {name}
        </div>
        {trial_period_days > 0 && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-medium text-gradient-purple-1 mb-2">
            Try for {trial_period_days} days free
          </div>
        )}
        <motion.div
          className="flex items-end mb-1.5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {!price_list ? (
            <div className="text-3xl font-extrabold text-black">Free Trial</div>
          ) : (
            <>
              <span className="text-3xl font-extrabold text-black">
                ${(price_list[0].unit_amount / 100).toFixed(2)}
              </span>
              <div className="flex pt-[7px] h-8 ml-1">
                <span className="text-sm font-medium text-neutral-500 tracking-wide">
                  /{price_list[0].interval}
                </span>
              </div>
            </>
          )}
        </motion.div>

        <div className="text-neutral-500">{description}</div>
      </div>

      <motion.ul
        className="border-t pt-4 space-y-2 mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {features &&
          features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center capitalize text-neutral-500"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              {feature.type === "Boolean" ? (
                feature.is_offered ? (
                  <>
                    <RiCheckLine
                      size={20}
                      className="mr-2 text-green-600 text-base"
                    />
                    <span>{feature.name}</span>
                  </>
                ) : (
                  <>
                    <RiCloseLine
                      size={20}
                      className="mr-2 text-red-600 text-base"
                    />
                    <span>{feature.name}</span>
                  </>
                )
              ) : feature.type === "Number" ? (
                <span className="ml-6">
                  {feature.quantity} {feature.name}
                </span>
              ) : (
                <span className="ml-6">{feature.name}</span>
              )}
            </motion.li>
          ))}
      </motion.ul>
    </motion.div>
  );
};

export default PricingCard;
