import React from 'react'

const GMSInput = () => {
    return (
        <div className="mb-4">
            <label htmlFor="custom-input" className="block text-gray-700 font-medium mb-2">
                Input Label
            </label>
            <input
                type="text"
                id="custom-input"
                name="custom-input"
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                placeholder="Enter your text"
            />
        </div>
    )
}

export default GMSInput
