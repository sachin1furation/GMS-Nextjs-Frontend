import { GMSSelectInputProps } from "@/types/globalComponentTypes";
import React from "react";

const GMSSelectInput: React.FC<GMSSelectInputProps> = ({
  options = [1, 2, 3, 4],
  label = "Number",
  name = "select-number",
  // onChange = () => { },
  value = 1,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 font-medium mb-2 text-xs"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full p-2 h-9 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
        // onChange={onChange}
        value={value}
        style={{ borderColor: "#CED4DA" }}
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
