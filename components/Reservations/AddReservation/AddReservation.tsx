"use client";

import React, { useState } from "react";

const AddReservation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      {isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded shadow-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-4">Modal content goes here.</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddReservation;
