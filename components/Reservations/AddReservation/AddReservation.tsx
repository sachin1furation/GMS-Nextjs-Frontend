"use client";

import React, { useState } from "react";
import "./style.css";
import {
  GMSInput,
  GMSSelectInput,
  ClientSection,
  SourceSection,
  AdditionalInfoSection,
  GMSButton,
} from "@/components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { preExpanded } from "@/types/reservationTypes";

const AddReservation = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [shift, setShift] = useState("dinner");

  const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const dinnerTimings = [
    "7:30",
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
  ];

  const lunchTimings = [
    "12:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
  ];

  const timings = shift === "lunch" ? lunchTimings : dinnerTimings;

  const accordionItems = [
    {
      uuid: "client",
      heading: "Client",
      content: ClientSection,
    },
    {
      uuid: "source",
      heading: "Source",
      content: SourceSection,
    },
    {
      uuid: "additionalInfo",
      heading: "Additional Information",
      content: AdditionalInfoSection,
    },
  ];

  const preExpanded: preExpanded = ["client", "source", "additionalInfo"];

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-Lato">
          <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white w-1/2 relative max-h-full overflow-y-auto">
            <div className="py-3 px-3 theme_color flex justify-between">
              <p className=" text-white">ADD RESERVATION</p>
              <button
                className="text-white"
                onClick={() => setModalOpen(false)}
              >
                X
              </button>
            </div>

            {/* Heading 1 */}
            <div className="py-4 px-3 modal_heading">
              <p className="text-sm font-semibold">Availability</p>
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
                  <label htmlFor="">
                    <span className="block text-xs font-medium text-slate-700">
                      Guests
                    </span>
                    {btns.map((btn, index) => (
                      <button
                        key={index}
                        type="button"
                        className="peer border rounded-md py-2 px-4 text-white theme_color"
                      >
                        {btn}
                      </button>
                    ))}
                  </label>
                </div>

                <div className="pt-4 grid grid-cols-3 grid-flow-row gap-4">
                  <div>
                    <GMSSelectInput label="Shift" />
                  </div>
                  <div>
                    <GMSInput label="Duration" type="number" />
                  </div>
                  <div>
                    <GMSSelectInput />
                  </div>
                </div>

                {/* Timings */}
                <div>
                  <p className="text-sm font-semibold uppercase pb-2 pt-1">
                    Monday, March 27
                  </p>
                  <div className="pt-4 grid grid-cols-1 grid-flow-row gap-2">
                    {timings.map((time, index) => (
                      <div
                        key={index}
                        className="timing_div text-xs py-3 px-4 rounded-sm cursor-pointer hover:bg-slate-200"
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* <AccordionItemButton className="py-4 text-sm font-semibold modal_heading flex justify-between px-4">
                      <p>Client</p>
                      <button>open</button>
                    </AccordionItemButton> */}

            <div className="py-4">
              <Accordion preExpanded={preExpanded} allowMultipleExpanded>
                {accordionItems.map((item) => (
                  <AccordionItem key={item.uuid} uuid={item.uuid}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="py-4 text-sm font-semibold modal_heading flex justify-between px-4">
                        {item.heading}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <item.content />
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="px-3">
              {/* <GMSButton content="Book Reservation" /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddReservation;
