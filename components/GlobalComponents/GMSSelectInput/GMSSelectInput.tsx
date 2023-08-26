import React from 'react';

const GMSSelectInput = ({
    options = [1, 2, 3, 4],
    label = 'Number',
    name = 'select-number',
    // onChange = () => { },
    value = 1,
}) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
                {label}
            </label>
            <select
                id={name}
                name={name}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                // onChange={onChange}
                value={value}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GMSSelectInput;
