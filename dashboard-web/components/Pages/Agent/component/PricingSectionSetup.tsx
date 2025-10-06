import React, { useState } from "react";
import { motion } from "framer-motion";
import PublicPricingCard from "@/components/Pages/Agent/component/PublicPricingCard";
import { SubscriptionOption } from "@/types/agent";
import { Dialog } from "@headlessui/react";
import DefaultButton from "@/components/Shared/Button/DefaultButton";

interface PricingSectionProps {
  product_list?: SubscriptionOption[];
  onChoosePlan: (product: SubscriptionOption) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  product_list,
  onChoosePlan,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<SubscriptionOption | null>(null);

  const openDialog = (product: SubscriptionOption) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleConfirmPlan = () => {
    if (selectedProduct) {
      // Save the selected product ID to local storage
      localStorage.setItem("selectedPlanId", selectedProduct.id ?? "");
      onChoosePlan(selectedProduct);
      // Close the dialog
      setIsDialogOpen(false);
      // You can add additional logic here, such as redirecting to a checkout page
    }
  };

  return (
    <div>
      <div className="">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {product_list?.map((product, index) => (
            <PublicPricingCard
              isSelected={selectedProduct?.id === product.id}
              id={product.id}
              key={index}
              name={product.name || "Unknown"}
              feature_list={product.feature_list}
              description={product.description || "Plan"}
              price_list={product.price_list}
              onChoosePlan={() => openDialog(product)}
            />
          ))}
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-2">
              Confirm Plan Selection
            </Dialog.Title>
            <Dialog.Description className="mb-4">
              Are you sure you want to choose the {selectedProduct?.name} plan?
            </Dialog.Description>

            <div className="flex justify-end space-x-2">
              <DefaultButton
                label="Cancel"
                variant="secondary"
                size="small"
                onClick={() => setIsDialogOpen(false)}
              />
              <DefaultButton
                label="Confirm"
                variant="primary"
                size="small"
                onClick={handleConfirmPlan}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default PricingSection;
