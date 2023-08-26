'use client'
import React, { useState } from 'react';

const options = [
  { label: 'Option 1', value: 'option1', subOptions: ['Suboption 1', 'Suboption 2', 'Suboption 3'] },
  { label: 'Option 2', value: 'option2', subOptions: ['Suboption 4', 'Suboption 5', 'Suboption 6'] },
  { label: 'Option 3', value: 'option3', subOptions: ['Suboption 7', 'Suboption 8', 'Suboption 9'] },
];

const GMSFilter = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    setSelectedSubOption('');
  };

  const handleSubOptionClick = (subOption) => {
    setSelectedSubOption(subOption);
  };

  const handleApplyFilter = () => {
    setIsFilterApplied(true);
  };

  const handleCancelFilter = () => {
    setSelectedOption('');
    setSelectedSubOption('');
    setIsFilterApplied(false);
  };

  return (
    <div className="flex items-start">
      <select
     id="filterSelect"
     name="filterSelect"
     className="w-32 p-2 height-auto border border-gray-300 rounded-md"
     onChange={handleSelectChange}
     value={selectedOption}
      >
        <option value="">Filter</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption !== '' && (
        <div className="ml-4  ">
          <div className="bg-gray-100 p-2 rounded-md shadow-md">
            {options
              .find((opt) => opt.value === selectedOption)
              ?.subOptions.map((subOption, index) => (
                <button
                  key={index}
                  className={`block rounded-md  w-full p-2 text-gray-800 hover:bg-gray-300 focus:outline-none ${
                    selectedSubOption === subOption ?  'rounded-md  bg-gray-400 text-white' : ''
                  }`}
                  onClick={() => handleSubOptionClick(subOption)}
                >
                  {subOption}
                </button>
              ))}
          </div>
          {selectedSubOption !== '' && (
  <div className="bg-gray-100 gap-2 flex p-2 rounded-md shadow-md border-t border-gray-300">
    <button
      className="block w-20 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none"
      onClick={handleApplyFilter}
    >
      Apply
    </button>
    <button
      className="block w-20 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
      onClick={handleCancelFilter}
    >
      Cancel
    </button>
  </div>
)}

        </div>
      )}
     
    </div>
  );
};

export default GMSFilter;
