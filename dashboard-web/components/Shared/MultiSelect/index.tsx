import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface IMultiSelect {
  options: Array<any>;
  selected?: Array<any>;
  labelKey?: string;
  valueKey?: string;
  onSelect: (items: any) => void;
}

const MultiSelect = (props: IMultiSelect) => {
  const { options, selected, labelKey, valueKey, onSelect }: any = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any>(selected);

  useEffect(() => {
    if (selected) {
      setSelectedItems(selected);
    }
  }, [selected]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (event: any, item: any) => {
    let newItems: any = [];
    if (event.target.checked) {
      newItems = [...selectedItems];
      newItems.push(item);
    } else {
      if (typeof item === "string") {
        newItems = selectedItems.filter((si: string) => si !== item);
      } else {
        newItems = selectedItems.filter(
          (si: any) => si[valueKey] !== item[valueKey]
        );
      }
    }
    setSelectedItems([...newItems]);
    onSelect(newItems);
  };

  const handleSelectAll = (event: any) => {
    if (event.target.checked) {
      setSelectedItems([...options]);
      onSelect(options);
    } else {
      setSelectedItems([]);
      onSelect([]);
    }
  };

  const isSelected = (item: any) => {
    if (typeof item === "string") {
      return selectedItems.includes(item);
    } else {
      return selectedItems.find((si) => si[valueKey] === item[valueKey])
        ? true
        : false;
    }
  };

  return (
    <div className="relative">
      <button
        className="flex gap-2 items-center justify-between bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md py-1.5 px-4 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="font-semibold text-sm">
          {/* {selectedItems.length > 0
            ? `${selectedItems.length} Column Selected`
            : "Select Column"} */}
          Select input field
        </span>
        <RiArrowDownSLine
          className={`${
            isOpen ? "rotate-180 transform" : ""
          } h-6 w-6`}
        />
      </button>
      {isOpen && (
        <div className="bg-white dark:bg-neutral-900 h-60 mb-6">
          <div className="absolute z-10 mt-2 w-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md dropdown-inner-shadow py-2 overflow-auto h-60 no-scrollbar">
            <div className="flex items-center gap-2 cursor-pointer p-2 border-b dark:border-neutral-700">
              <input
                type="checkbox"
                id="select-all"
                checked={selectedItems.length === options.length}
                onChange={handleSelectAll}
                className="w-4 h-4 accent-blue-500 border border-neutral-300 rounded"
              />
              <span className="text-neutral-700 dark:text-neutral-100 cursor-pointer ml-2">
                Select All
              </span>
            </div>
            {options.map((item: any, index: number) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer p-2 border-b dark:border-neutral-700"
              >
                <input
                  type="checkbox"
                  id={typeof item === "string" ? item : item[valueKey]}
                  checked={isSelected(item)}
                  onChange={(event) => handleSelect(event, item)}
                  className="w-4 h-4 accent-blue-500 border border-neutral-300 rounded"
                />
                <span className="text-neutral-700 dark:text-neutral-100 cursor-pointer ml-2">
                  {typeof item === "string" ? item : item[labelKey]}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
