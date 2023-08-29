"use client";

import { GMSInput, PopupCard } from "@/components";
import React, { useState } from "react";

const SourceSection: React.FC = () => {
  const [source, setSource] = useState("a");

  return (
    <>
      <div className="px-3 py-3 font-Lato">
        {/* <div className={`grid grid-cols-2 grid-flow-col gap-2`}></div> */}
        <label className="text-xs">Name, Email, Phone</label>
        <div className="flex border border-gray-300 rounded-md">
          <input type="text" className="flex-1 h-9" />
          <button
            className={`${
              source !== "" ? "border-l" : "hidden"
            } px-2 text-xs btn_gradient font-medium`}
          >
            Add as New Source
          </button>
        </div>
      </div>

      {source === "" && (
        <p className="text-xs text-center grey_text py-2">
          Enter client name, phone, or email to search or add as a new client
        </p>
      )}

      {source !== "" && <PopupCard />}
    </>
  );
};

export default SourceSection;
