import React, { useState } from 'react';
import { NewPricingOption } from '@/types/pricing';
import { useNotificationContext } from "@/components/Shared/Notification";
import PricingModal from './PricingModal';
import { createPricingOption } from "@/lib/services/product";


interface AddPricingOptionCardProps {
    agent_id: string;
    onSave: (newOption: NewPricingOption) => void;
}

const AddPricingOptionCard: React.FC<AddPricingOptionCardProps> = ({ agent_id, onSave }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const notifier: any = useNotificationContext();

  const handleAddPricingOption = () => {
    setIsDialogOpen(true);
  };

  const handleSave = async (newOption: NewPricingOption) => {
    setIsCreating(true);
    const result = await createPricingOption({
      agent_id,
      pricing_model: 'SUBSCRIPTION',
      ...newOption
    });
    if (result?.status) {
        notifier.success({
            title: result?.message,
          });
          setIsDialogOpen(false);
          setIsCreating(false);
    } else {
      notifier.error({
        title: result?.message || "Failed to create pricing option",
      });
      setIsCreating(false);
    }
  };

  return (
    <>
      <div 
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={handleAddPricingOption}
      >
        <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <p className="text-gray-500 text-center">Add another pricing option</p>
      </div>

      <PricingModal
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSave}
        isCreating={isCreating}
      />
    </>
  );
};

export default AddPricingOptionCard;