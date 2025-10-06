import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PublicPricingCard from "./PublicPricingCard";
import { SubscriptionOption } from "@/types/agent";
import { useParams } from "next/navigation";
import { updateAgentInstall } from "@/lib/services/agent";

interface PricingSectionProps {
  product_list?: SubscriptionOption[];
  agent_installation?: any;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  product_list,
  agent_installation,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  useEffect(() => {
    const storedPlanId = localStorage.getItem(`selectedPlanId`);
    setSelectedPlanId(storedPlanId);
  }, [agent_installation]);

  const handleChoosePlan = async (id: string) => {
    if (agent_installation?.subscription?.price?.product_id === id) {
      return;
    }
    setSelectedPlanId(id);
    await updateAgentInstall({
      agent_id: agent_installation?.agent_id as string,
      install_id: agent_installation?.id as string,
      product_id: id,
    });
  };

  return (
    <div>
      <div className="">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {product_list?.map((product, index) => (
            <PublicPricingCard
              key={index}
              id={product.id}
              name={product.name || "Unknown"}
              feature_list={product.feature_list}
              description={product.description || "Plan"}
              price_list={product.price_list}
              selected_price_id={agent_installation?.subscription?.price_id}
              onChoosePlan={handleChoosePlan}
              isSelected={
                agent_installation?.subscription?.price?.product_id ===
                product.id
              }
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
