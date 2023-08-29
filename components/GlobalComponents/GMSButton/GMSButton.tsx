import React from 'react'

const GMSButton = ({ content = "add" }) => {
  return (
    <div>
      <button
        className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-medium text-lg leading-[19.36px] px-5   min-w-[15px]    min-h-[38px] rounded-md shadow-md hover:shadow-lg  font-inter"
      >
        {content}
      </button>
    </div>
  )
}

export default GMSButton
