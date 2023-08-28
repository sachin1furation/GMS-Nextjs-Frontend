import React from 'react'
import { FaSearch } from 'react-icons/fa';
const GMSSearchInput = () => {

    return (
        <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="pl-10 w-full px-4 py-2   focus:outline-none focus:border-indigo-500"
        placeholder="Search..."
      />
    </div>
    );


}

export default GMSSearchInput
