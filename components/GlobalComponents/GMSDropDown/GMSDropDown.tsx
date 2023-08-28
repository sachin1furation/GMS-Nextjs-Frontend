'use client'
import React, { useState } from 'react';
 import {ThreeDots} from "../../../public/assests/index"
import Image from 'next/image';

const GMSDropDown: React.FC = () => {
    console.log("thre",ThreeDots)
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex border-none justify-center w-full rounded-md  px-4 py-2  shadow-sm   text-md font-medium text-gray-700   "
        onClick={toggleDropdown}
        id="dropdown-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
         <Image width={20} height={20} src={ThreeDots} alt="icon" />

        {/* <svg
          className={`-mr-1 ml-2 h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg> */}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
          <div className="py-1" role="none">
            {/* Dropdown items */}
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Item 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Item 2
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Item 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GMSDropDown;
