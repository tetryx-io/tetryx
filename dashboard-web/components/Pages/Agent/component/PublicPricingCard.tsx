import React from "react";
import { motion } from "framer-motion";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { TextIcon, FrameIcon } from "@radix-ui/react-icons";
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
}

const PublicPricingCard: React.FC<PublicPricingCardProps> = ({
  id,
  name,
  description,
  price_list,
  feature_list,
  onChoosePlan,
  isSelected,
}) => {
  const defaultPrice =
    (price_list || []).find((price) => price.default) ||
    (price_list || [])[0] ||
    [];
  // console.log(" Feature List", feature_list)

  const handleChoosePlan = () => {
    onChoosePlan(id);
  };

  return (
    <motion.div
      className={clsx(
        "bg-gradient-to-br rounded-xl shadow-md p-6 flex flex-col h-full relative",
        isSelected
          ? "from-blue-50 to-blue-100 border-2 border-blue-500"
          : "from-white to-gray-100",
      )}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {name}
        </span>
        <h3 className="text-sm text-gray-600 mb-4">{description}</h3>
      </motion.div>

      <motion.div
        className="flex flex-col mb-6"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {price_list.map((price, index) => (
          <div key={index} className="flex items-baseline mb-2">
            <span className="text-3xl font-extrabold text-gray-900">
              ${(price.unit_amount / 100).toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              /{price.interval}
              {price.interval_count > 1 &&
                ` (${price.interval_count} ${price.interval}s)`}
            </span>
            {price.default && (
              <span className="ml-2 text-xs font-semibold text-blue-600 uppercase">
                Default
              </span>
            )}
          </div>
        ))}
      </motion.div>

      <motion.ul
        className="space-y-2 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {feature_list && feature_list.length > 0
          ? feature_list.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-between text-sm text-gray-700"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <span>{feature.name}</span>
                <div className="flex items-center ml-2">
                  {feature.type.toLowerCase() === "boolean" &&
                    (feature.is_offered ? (
                      <RiCheckLine className="text-green-500 text-base" />
                    ) : (
                      <RiCloseLine className="text-red-500 text-base" />
                    ))}
                  {feature.type.toLowerCase() === "number" && (
                    <span className="font-semibold">{feature.quantity}</span>
                  )}
                </div>
              </motion.li>
            ))
          : null}
      </motion.ul>

      <motion.button
        className={clsx(
          "mt-auto py-2 px-4 rounded-md text-sm font-semibold transition-colors duration-300",
          isSelected
            ? "bg-blue-700 text-white hover:bg-blue-800"
            : "bg-blue-600 text-white hover:bg-blue-700",
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleChoosePlan}
      >
        {isSelected ? "Selected Plan" : "Choose Plan"}
      </motion.button>
    </motion.div>
  );
};

export default PublicPricingCard;
