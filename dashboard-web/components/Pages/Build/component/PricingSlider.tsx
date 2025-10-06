import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiCheckLine, RiEditLine, RiSaveLine } from 'react-icons/ri';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface PricingCardProps { 
  product: any;
  onSave: (updatedData: Partial<PricingCardProps>) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ product, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const utilizationPriceMarks = {
    1: '1¢',
    2: '2¢',
    5: '5¢',
    10: '10¢',
    15: '15¢',
    20: '20¢',
    25: '25¢',
    30: '30¢',
    40: '40¢',
    50: '50¢',
    55: '55¢',
    60: '60¢',
    65: '65¢',
    70: '70¢',
    75: '75¢',
    80: '80¢',
    85: '85¢',
    90: '90¢',
    95: '95¢',
    100: '100¢'
  };

  const [utilizationPrice, setUtilizationPrice] = useState(1);

  const handleUtilizationPriceChange = (value: number) => {
    setUtilizationPrice(value);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md p-6 flex flex-col h-full relative"
      whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {!isEditing && (
        <Slider
          min={1}
          max={100}
          step={1}
          marks={utilizationPriceMarks}
          value={utilizationPrice}
          onChange={handleUtilizationPriceChange}
          className="mt-4 mb-8"
        />
      )}
    </motion.div>
  );
};

export default PricingCard;