import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiEditLine, RiDeleteBinLine } from 'react-icons/ri';
import { NewPricingOption } from '@/types/pricing';
import PricingModal from './PricingModal';
import { Dialog } from '@headlessui/react';
import { Feature, Price } from '@/types/pricing';
import { RiText, RiHashtag, RiCheckboxCircleLine, RiCloseCircleLine } from 'react-icons/ri';
import { updatePricingOption } from "@/lib/services/product";
import { useNotificationContext } from "@/components/Shared/Notification";
interface PricingCardProps {
  id: string | undefined;
  name: string;
  agent_id: string;
  description: string;
  price_list: Price[];
  feature_list: Feature[];
  default_price_id: string;
  is_default: boolean;
  trial_period_days: number;
  onSave: (updatedData: Partial<PricingCardProps>) => void;
  onDelete: (id: string) => Promise<void>;
}

const PricingCard: React.FC<PricingCardProps> = ({ id, name, agent_id, description, price_list, feature_list, is_default, default_price_id, trial_period_days, onDelete }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const notifier: any = useNotificationContext();
  const handleEdit = () => setIsDialogOpen(true);
  const handleDelete = () => setIsDeleteConfirmOpen(true);

  const handleSave = async (data: NewPricingOption) => {
    setIsUpdating(true);
    console.log("id", id);
    console.log("agent_id", agent_id);
    const response = await updatePricingOption({
      ...data,
      id,
      agent_id,
      pricing_model: 'SUBSCRIPTION',
      });
    if (response?.status) {
      notifier.success({
        title: response?.message,
      });
      setIsDialogOpen(false);
    } else {
      notifier.error({
        title: response?.message,
      });
      // setIsCreating(false);
    }
    setIsUpdating(false);
  };

  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      if (id) {
        await onDelete(id);
      } else {
        console.error("Pricing option ID is undefined");
      }
    } catch (error) {
      console.error("Error deleting pricing option:", error);
      // Optionally, show an error message to the user here
    } finally {
      setIsDeleting(false);
      setIsDeleteConfirmOpen(false);
    }
  };

  const defaultPrice = price_list.find(price => price.interval === 'month') || price_list[0] ;

  return (
    <>
      <div
        className={`bg-gradient-to-br from-white to-neutral-100 hover:cursor-pointer rounded-r-md shadow-md p-4 flex flex-col h-full relative transition-any smooth hover:scale-[1.02] hover:border-2 ${is_default ? 'border-2 border-violet-600 rounded-bl-md' : 'border border-neutral-200 rounded-l-md'}`}
      >
        {is_default && (
          <div className="absolute -top-[24px] -left-[2px] px-3 -z-10 w-fit bg-violet-600 text-white text-xs font-semibold uppercase tracking-wider rounded-t-md text-center py-1">
            DEFAULT
          </div>
        )}
        <div className="absolute top-4 right-4 flex space-x-2 z-20">
          <button
            onClick={handleDelete}
            className="opacity-40 hover:opacity-100 text-neutral-700 bg-neutral-100 hover:bg-red-100 hover:text-red-600 border h-6 px-1 flex items-center rounded"
          >
            <RiDeleteBinLine size={16} />
          </button>
          <button
            onClick={handleEdit}
            className="text-neutral-700 font-medium bg-neutral-100 hover:bg-black hover:text-white border h-6 px-2 flex items-center rounded transition-any"
          >
            <RiEditLine size={16} />
            <span className="ml-1 text-sm">Edit</span>
          </button>
        </div>

        <div onClick={handleEdit}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='space-y-3 mb-3'
          >
            <div className="text-sm font-semibold text-neutral-500 uppercase">{name}</div>
            {defaultPrice && <motion.div
              className="flex items-baseline"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-2xl font-extrabold text-neutral-900">${(defaultPrice.unit_amount / 100).toFixed(2)}</span>
              <span className="text-sm text-neutral-500 ml-1">/{defaultPrice.interval}</span>
            </motion.div>}
            <h3 className="text-neutral-600">{description}</h3>
          </motion.div>

          <hr className='w-11/12 mx-auto mb-3'/>

          <motion.ul
            className="space-y-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {feature_list.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center text-base text-black mb-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                {feature.type.toLowerCase() === 'text' && (
                  <RiText className="mr-2 text-neutral-700" />
                )}
                {feature.type.toLowerCase() === 'number' && (
                  <RiHashtag className="mr-2 text-neutral-700" />
                )}
                {feature.type.toLowerCase() === 'boolean' && (
                  feature.value ? (
                    <RiCheckboxCircleLine className="mr-2 text-green-500" />
                  ) : (
                    <RiCloseCircleLine className="mr-2 text-red-500" />
                  )
                )}
                <span>
                  {feature.name}
                  {feature.type.toLowerCase() === 'number' && feature.value !== undefined && `: ${feature.value}`}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <PricingModal
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSave}
        initialData={{ name, description, price_list, feature_list, default_price_id, trial_period_days }}
        isUpdating={isUpdating}
        is_default={is_default}
      />

      {/* Delete Confirmation Modal */}
      <Dialog 
        open={isDeleteConfirmOpen} 
        onClose={() => !isDeleting && setIsDeleteConfirmOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded-lg max-w-md mx-auto p-6">
            <Dialog.Title className="text-lg font-medium mb-4">
              Confirm Deletion
            </Dialog.Title>
            <p className="mb-4">
              Are you sure you want to delete the pricing option "{name}"? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsDeleteConfirmOpen(false)}
                className="px-4 py-2 text-sm font-medium text-neutral-700 bg-neutral-100 rounded-md hover:bg-neutral-200 disabled:opacity-50"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50 flex items-center"
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deleting...
                  </>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PricingCard;
