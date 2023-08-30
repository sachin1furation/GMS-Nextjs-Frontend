"use client";

import { AddNewClientForm, PopupCard } from "@/components";
import React, { useState } from "react";
import "./style.css";

const ClientSection: React.FC = () => {
  const [client, setClient] = useState("");
  const [clientForm, setClientForm] = useState(false);

  const displayForm = () => {
    setClientForm(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient(e.target.value);
  };

  const clientData = [
    {
      name: "Neel Narwadkar",
      phone: "9846574635",
      email: "neel@gmail.com",
      net_spend: 20000,
      avg_visit: 8000,
      avg_cover: 4000,
      visits: 4,
      cancels: 2,
      no_shows: 0,
    },
  ];

  return (
    <>
      <div className="font-Lato">
        {!clientForm && (
          <div className="px-3 py-3 font-Lato">
            <label className="text-xs">Name, Email, Phone</label>
            <div className="flex border border-gray-300 rounded-md">
              <input
                type="text"
                className="flex-1 h-9"
                onChange={handleInput}
              />
              <button
                onClick={displayForm}
                className={`${
                  client !== "" ? "border-l" : "hidden"
                } px-2 text-xs btn_gradient font-medium`}
              >
                Add as New Client
              </button>
            </div>
          </div>
        )}

        {client === "" && (
          <p className="text-xs text-center grey_text py-2">
            Enter client name, phone, or email to search or add as a new client
          </p>
        )}

        {client !== "" &&
          !clientForm &&
          clientData.map((data, index) => (
            <PopupCard data={data} key={index} />
          ))}
        {clientForm && <AddNewClientForm />}
      </div>
    </>
  );
};

export default ClientSection;
