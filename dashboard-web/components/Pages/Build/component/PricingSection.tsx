import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import { SubscriptionOption } from '@/types/agent';
import { createPricingOption, deletePricingOption, updatePricingOption } from "@/lib/services/product";
import AddPricingOptionCard from './AddPricingOptionCard';
import { NewPricingOption } from '@/types/pricing';
import { useNotificationContext } from "@/components/Shared/Notification";

interface PricingSectionProps {
  agent: any;
  agent_id: string;
  isLoading: boolean;
  productList?: SubscriptionOption[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ 
  agent,
  agent_id,
  isLoading, 
  productList,
}) => { 
    const notifier: any = useNotificationContext();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="circle-loader-dark h-10 w-10"></div>
      </div>
    );
  }

  const handleSaveSubscriptionPrice = async (updatedData: any) => {
    console.log("Updated Data", updatedData)
    const response = await updatePricingOption({
      ...updatedData,
      agent_id,
      product_id: updatedData?.id,
      pricing_model: 'SUBSCRIPTION',
      });
    if (response?.status) {
      notifier.success({
        title: response?.message,
      });
      console.log("response ->", response?.data)
    } else {
      notifier.error({
        title: response?.message,
      });
      // setIsCreating(false);
    }
  }

  const handleSaveNewPricingOption = async (newOption: NewPricingOption) => {
    // TODO: Implement the logic to save the new pricing option
    console.log('New pricing option:', newOption);
    const result = await createPricingOption({
      agent_id,
      ...newOption
    });
    if (result?.status) {
        notifier.success({
            title: result?.message,
          });
    } else {
      notifier.error({
        title: result?.message || "Failed to create pricing option",
      });
    }
  };

  const handleDeletePricingOption = async (id: string) => {
    // TODO: Implement the logic to delete the pricing option
    console.log('Deleting pricing option with id:', id);
    const result = await deletePricingOption({
      id,
      agent_id: agent?.id
    });
    if (result?.status) {
      notifier.success({
        title: result?.message,
      });
    } else {
      notifier.error({
        title: result?.message || "Failed to delete pricing option",
      });
    }
  };

  return (
    <div>
      <h4 className="text-sm text-gray-500 mb-4">Your pricing options for this agent</h4>
      <div className="overflow-auto max-h-[700px]">
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8 px-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {productList?.map((product, index) => (
              <PricingCard
                key={index}
                agent_id={agent_id}
                is_default={agent.default_product_id === product.id}
                default_price_id={product.default_price_id}
                id={product.id}
                trial_period_days={product.trial_period_days}
                name={product.name || 'Unknown'}
                description={product.description || 'Unknown'}
                price_list={product.price_list}
                feature_list={product.feature_list || []}
                onSave={handleSaveSubscriptionPrice}
                onDelete={handleDeletePricingOption}
              />
            ))}
            
            <AddPricingOptionCard agent_id={agent_id} onSave={handleSaveNewPricingOption} />
          </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
