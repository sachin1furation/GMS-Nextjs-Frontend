"use client";

import { AddNewClientForm, GMSInput, PopupCard } from "@/components";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import vercel from "../../../public/vercel.svg";

const ClientSection: React.FC = () => {
  const [client, setClient] = useState("a");

  return (
    <>
      <div className="font-Lato">
        {/* <div className="px-3 py-3 font-Lato">
          <label className="text-xs">Name, Email, Phone</label>
          <div className="flex border border-gray-300 rounded-md">
            <input type="text" className="flex-1 h-9" />
            <button
              className={`${
                client !== "" ? "border-l" : "hidden"
              } px-2 text-xs btn_gradient font-medium`}
            >
              Add as New Client
            </button>
          </div>
        </div> */}

        {client === "" && (
          <p className="text-xs text-center grey_text py-2">
            Enter client name, phone, or email to search or add as a new client
          </p>
        )}

        {/* {client !== "" && <PopupCard />} */}
        <AddNewClientForm />
      </div>
    </>
  );
};

export default ClientSection;
