import React from 'react';
import { Dialog, Popover, Switch } from '@headlessui/react';
import { useForm, useFieldArray, SubmitHandler, Controller } from 'react-hook-form';
import { NewPricingOption } from '@/types/pricing';
import { TrashIcon, TextIcon, FrameIcon, CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { NumericFormat } from 'react-number-format';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: NewPricingOption) => void;
  initialData?: Partial<NewPricingOption>;
  isCreating?: boolean;
  isUpdating?: boolean;
  product_id?: string;
  is_default?: boolean;
}

interface TrialPeriodSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const TrialPeriodSlider: React.FC<TrialPeriodSliderProps> = ({ value, onChange }) => {
  const marks = {
    0: '0',
    7: '7 days',
    14: '14 days',
    21: '21 days',
    28: '28 days',
    30: '30 days'
  };

  const safeValue = value ?? 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Trial Period</h3>
        <span className="text-sm font-medium text-gray-900">
          {safeValue} days
        </span>
      </div>
      <Slider
        min={0}
        max={30}
        step={7}
        marks={marks}
        value={safeValue}
        onChange={onChange}
        styles={{
          handle: {
            borderColor: '#2563EB',
            backgroundColor: '#FFFFFF',
            opacity: 1,
          },
          track: {
            backgroundColor: '#2563EB'
          },
          rail: {
            backgroundColor: '#E5E7EB'
          }
        }}
        dotStyle={{
          borderColor: '#E5E7EB',
          backgroundColor: '#FFFFFF',
        }}
        activeDotStyle={{
          borderColor: '#2563EB',
        }}
      />
    </div>
  );
};

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, onSave, initialData, isCreating, isUpdating, is_default }) => {
  const modifiedInitialData = initialData ? {
    ...initialData,
    price_list: initialData?.price_list?.map(price => ({
      ...price,
      default: price.id === initialData?.default_price_id
    })) || []
  } : undefined;

  const { register, control, handleSubmit, reset, formState: { errors, ...formState }, watch, setValue } = useForm<NewPricingOption>({
    defaultValues: modifiedInitialData || {
      name: 'Default Plan',
      description: 'The default plan for this agent',
      trial_period_days: 14,
      feature_list: [
        { name: 'Basic Feature', type: 'text' },
        { name: 'Number of Users', type: 'number', quantity: 5 },
        { name: 'Advanced Support', type: 'boolean', value: true },
        { name: 'Storage Limit', type: 'number', quantity: 10 },
        { name: 'Custom Domain', type: 'boolean', value: false },
      ],
      price_list: [{ unit_amount: 2499, interval: 'month', interval_count: 1, currency: 'usd', default: true }],
    }
  });

  const { fields: priceFields, append: appendPrice, remove: removePrice } = useFieldArray({
    control,
    name: "price_list"
  });

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control,
    name: "feature_list",
    rules: {
      required: "At least one feature is required",
      minLength: {
        value: 1,
        message: "At least one feature is required"
      }
    }
  });

  // Watch for changes in the feature type
  const featureTypes = watch('feature_list');

  const [isDefaultProduct, setIsDefaultProduct] = React.useState(is_default || false);

  const onSubmit: SubmitHandler<NewPricingOption> = (data) => {
    // Check if exactly one default price is selected
    const defaultPrices = data.price_list.filter(price => price.default);
    if (defaultPrices.length !== 1) {
      alert("Please select exactly one default price.");
      return;
    }

    // Convert dollar amounts to cents
    const convertedData = {
      ...data,
      is_default: isDefaultProduct,
      price_list: data.price_list.map(price => ({
        ...price,
        unit_amount: Math.round(parseFloat(price.unit_amount.toString()))
      }))
    };

    // Validate number features
    const isValid = convertedData.feature_list.every(feature => 
      feature.type !== 'number' || (feature.type === 'number' && feature.quantity !== undefined)
    );

    if (isValid) {
      onSave(convertedData);
    } else {
      alert("Please ensure all number features have a value.");
    }
  };

  const FeatureTypeSelect = ({ value, onChange }) => {
    const options = [
      { value: 'text', label: 'Text', icon: <TextIcon className="inline-block mr-2" /> },
      { value: 'number', label: 'Number', icon: <FrameIcon className="inline-block mr-2" /> },
      { value: 'boolean', label: 'Yes/No', icon: <CheckIcon className="inline-block mr-2" /> },
    ];

    const selectedOption = options.find(option => option.value === value) || options[0];

    return (
      <Popover className="relative">
        <Popover.Button className="w-32 p-2 border rounded flex items-center justify-between">
          {selectedOption.icon}
          {selectedOption.label}
          <ChevronDownIcon className="ml-2" />
        </Popover.Button>
        <Popover.Panel className="absolute z-10 w-32 mt-1 bg-white border rounded shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              className="w-full p-2 text-left hover:bg-gray-100 flex items-center"
              onClick={() => {
                onChange(option.value);  
              }}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </Popover.Panel>
      </Popover>
    );
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-2xl mx-auto">
          <div className="max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <Dialog.Title className="text-lg font-medium">
                {initialData ? 'Edit Pricing Option' : 'Add New Pricing Option'}
              </Dialog.Title>

              {/* Default Product Switch */}
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Set as default product</label>
                <Switch
                  checked={isDefaultProduct}
                  onChange={setIsDefaultProduct}
                  className={`${isDefaultProduct ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11`}
                >
                  <span className="sr-only">Set as default product</span>
                  <span
                    className={`${isDefaultProduct ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`}
                  />
                </Switch>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("name", { required: "Plan name is required" })}
                type="text"
                placeholder="Plan Name"
                className="w-full p-2 border rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <input
                {...register("description", { required: "Description is required" })}
                type="text"
                placeholder="Description"
                className="w-full p-2 border rounded"
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

              {/* Price List Section */}
              <div>
                <h3 className="font-medium mb-2">Pricing</h3>
                {priceFields.map((field, index) => (
                  <div key={field.id} className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center space-x-2">
                      <Controller
                        name={`price_list.${index}.unit_amount`}
                        control={control}
                        defaultValue={field.unit_amount}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <NumericFormat
                            thousandSeparator=","
                            decimalSeparator="."
                            prefix="$"
                            decimalScale={2}
                            fixedDecimalScale={true}
                            allowNegative={false}
                            value={value/100}
                            onValueChange={(values) => {
                              onChange(values.floatValue ? values.floatValue * 100 : 0);
                            }}
                            onBlur={onBlur}
                            getInputRef={ref}
                            className="currency-input w-32 p-2 border rounded"
                          />
                        )}
                      />
                      <select
                        {...register(`price_list.${index}.currency` as const, { required: true })}
                        className="w-24 p-2 border rounded bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="usd">USD</option>
                      </select>
                    </div>
                    <select
                      {...register(`price_list.${index}.interval` as const)}
                      className="p-2 border rounded"
                    >
                      <option value="month">Monthly</option>
                      <option value="year">Yearly</option>
                    </select>
                    <input
                      {...register(`price_list.${index}.default` as const)}
                      type="checkbox"
                      className="p-2 border rounded"
                      onChange={(e) => {
                        if (e.target.checked) {
                          // Uncheck all other default checkboxes
                          priceFields.forEach((_, i) => {
                            if (i !== index) {
                              setValue(`price_list.${i}.default`, false);
                            }
                          });
                        }
                      }}
                    />
                    <label>Default</label>
                    <button type="button" onClick={() => removePrice(index)} className="text-red-500">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => appendPrice({ unit_amount: 2499, interval: 'month', interval_count: 1, currency: 'usd', default: false })}
                  className="mt-2 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
                >
                  Add Price Option
                </button>
              </div>

              <Controller
                name="trial_period_days"
                control={control}
                defaultValue={0}
                render={({ field: { value, onChange } }) => (
                  <TrialPeriodSlider 
                    value={value ?? 0} 
                    onChange={onChange}
                  />
                )}
              />

              {/* Feature List Section */}
              <div>
                <h3 className="font-medium mb-2">Features</h3>
                <div className="max-h-60 pb-4 overflow-y-auto">
                  {featureFields.map((field, index) => (
                    <div key={field.id} className="flex items-center space-x-2 mb-2">
                      <div className="flex-grow flex items-center space-x-2">
                        <FeatureTypeSelect
                          value={featureTypes[index]?.type.toLowerCase()}
                          onChange={(value) => {
                            const newType = value as 'text' | 'number' | 'boolean';
                            const newValue = newType === 'boolean' ? true : newType === 'number' ? 0 : '';
                            setValue(`feature_list.${index}.type`, newType);
                            setValue(`feature_list.${index}.quantity`, newValue as any);
                          }}
                        />
                        <input
                          {...register(`feature_list.${index}.name` as const, { required: true })}
                          placeholder="Feature name"
                          className="w-48 p-2 border rounded"
                        />
                      </div>
                      <div className="w-32 flex items-center">
                        {featureTypes[index]?.type.toLowerCase() === 'number' && (
                          <input
                            {...register(`feature_list.${index}.quantity` as const, { 
                              valueAsNumber: true,
                              required: "Quantity is required for number features"
                            })}
                            type="number"
                            placeholder="Quantity"
                            className="w-full p-2 border rounded"
                          />
                        )}
                        {featureTypes[index]?.type.toLowerCase() === 'boolean' && (
                          <div className="flex items-center">
                            <input
                              {...register(`feature_list.${index}.value` as const)}
                              type="checkbox"
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label className="ml-2 text-sm text-gray-700">Included</label>
                          </div>
                        )}
                      </div>
                      <button 
                        type="button" 
                        onClick={() => removeFeature(index)} 
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
                {errors.feature_list && (
                  <p className="text-red-500 text-sm mt-1">{errors.feature_list.message}</p>
                )}
                <button
                  type="button"
                  onClick={() => appendFeature({ name: '', type: 'text' as const, value: undefined })}
                  className="mt-2 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
                >
                  Add Feature
                </button>
              </div>

              <div className="flex justify-end space-x-2">
                <button 
                  type="button" 
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200" 
                  onClick={() => {
                    onClose();
                    reset();
                  }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isCreating || isUpdating}
                >
                  {isCreating || isUpdating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default PricingModal;
