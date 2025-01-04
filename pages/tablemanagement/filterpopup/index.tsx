import React, { useEffect, useRef } from 'react';


interface FilterProps {
  onApply: (filterData: { leadType: string }) => void;
  onClear: () => void;
  filterFormData: { leadType: string };
  setFilterFormData: React.Dispatch<React.SetStateAction<any>>;
  onClose: () => void;
}

const FilterPopUp: React.FC<FilterProps> = ({ onApply, onClear, filterFormData, setFilterFormData, onClose }) => {
  const popUpRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFilterFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <div ref={popUpRef} className="min-w-[300px] p-4 bg-white rounded-lg shadow-lg absolute z-50 right-0">

      <div className="my-2">
        <label className="block text-sm font-medium">Filter By Lead Type</label>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center">
            <input
              type="radio"
              value="Hot"
              checked={filterFormData?.leadType === 'Hot'}
              onChange={() => handleInputChange('leadType', 'Hot')}
              className="mr-2"
            />
            <span className="text-sm">Hot</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="Medium"
              checked={filterFormData?.leadType === 'Medium'}
              onChange={() => handleInputChange('leadType', 'Medium')}
              className="mr-2"
            />
            <span className="text-sm">Medium</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="Cold"
              checked={filterFormData?.leadType === 'Cold'}
              onChange={() => handleInputChange('leadType', 'Cold')}
              className="mr-2"
            />
            <span className="text-sm">Cold</span>
          </div>
        </div>
      </div>

      {/* Apply and Clear Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 text-black rounded-md hover:shadow-lg"
        >
          Clear All
        </button>
        <button
          onClick={() => onApply(filterFormData)}
          className="px-4 py-2 bg-violet-500 text-white rounded-md hover:shadow-lg focus:outline-none"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default React.memo(FilterPopUp);
