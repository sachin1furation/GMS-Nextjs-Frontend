"use client";

import React, { useState } from "react";
import "./style.css";
import { GMSInput } from "@/components";

const AddReservation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-Lato">
          <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white w-1/2 relative">
            <div className="py-3 px-3 bg-purple-900 flex justify-between">
              <p className=" text-white">ADD RESERVATION</p>
              <button
                className="text-white"
                onClick={() => setModalOpen(false)}
              >
                X
              </button>
            </div>

            {/* Heading 1 */}
            <div className="py-5 px-3 modal_heading">
              <p>Availability</p>
            </div>

            {/* Heading 1 content */}
            <div className="py-3">
              <div className="px-3">
                <div className="grid grid-cols-4 grid-flow-row gap-4">
                  <div>
                    <GMSInput label="Date" type="date" />
                  </div>
                </div>

                {/* Guest button group */}
                <div className="flex">
                  {btns.map((btn, index) => (
                    <button className="w-10 bg-purple-600">{btn}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddReservation;
