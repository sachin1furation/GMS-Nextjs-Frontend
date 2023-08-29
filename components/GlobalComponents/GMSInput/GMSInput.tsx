import { GMSInputProps } from "@/types/globalComponentTypes";
import React from "react";

const GMSInput: React.FC<GMSInputProps> = ({ label, type, id, required }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-gray-700 font-medium mb-2 text-xs"
      >
        {label}
        {required && <span>*</span>}
      </label>
      <input
        style={{ borderColor: "#CED4DA" }}
        type={type}
        id={id}
        name="custom-input"
        className="w-full text-xs px-4 py-2 border h-9 border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
        placeholder="Enter here.."
      />
    </div>
  );
};

export default GMSInput;
