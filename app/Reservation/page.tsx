"use client";
import DefaultTable from "@/components/Reservations/DefaultTable/DefaultTable";
import GroupByReservationStatus from "@/components/Reservations/GroupByReservationStatus/GroupByReservationStatus";
import GroupBySeatingTable from "@/components/Reservations/GroupBySeatingTable/GroupBySeatingTable";
import GroupByTImeTable from "@/components/Reservations/GroupByTimeTable/GroupByTImeTable";
import GroupByVipTable from "@/components/Reservations/GroupByVipTable/GroupByVipTable";
import RedervationTableOprations from "@/components/Reservations/ReservationTableOprations/ReservationTableOprations";
import ReservationSideBar from "@/components/Reservations/ReservationSideBar/ReservationSideBar";
import React, { useState } from "react";

const Page = () => {
  const GruopByArra = [
    "Default",
    "Time",
    "Seating Area",
    "VIP / Other",
    "Reservation Tags",
    "Reservation Status",
  ];
  const AvailabilityArray = [
    "Shifts",
    "Access rules",
    "Daily Program",
    "Blackout Dates",
  ];

  // State to store the selected menu item
  const [selectedMenuItem, setSelectedMenuItem] = useState("Default");

  // Function to handle menu item click
  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  return (
    <div className="flex w-full">
      <div>
        <div
          style={{ width: "200px", minHeight: "100vh", background: "#F8F9FA" }}
        >
          <div className="flex flex-col gap-1 ">
            <p className=" p-3 font-Lato text-black font-semibold">Group by</p>
            <div className="flex flex-col gap-1 text-gray-500">
              {GruopByArra.map((item, index) => (
                <div
                  key={index}
                  // Check if the item is selected and apply the appropriate background color
                  className={`cursor-pointer ${
                    selectedMenuItem === item ? "bg-gray-300 text-black " : ""
                  }`}
                  onClick={() => handleMenuItemClick(item)}
                >
                  <p className="pl-2 m-1 font-Lato">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1 ">
            <p className=" p-3 font-Lato text-black font-semibold">
              Availability
            </p>
            <div className="flex flex-col gap-1 text-gray-500">
              {AvailabilityArray.map((item, index) => (
                <div
                  key={index}
                  // Check if the item is selected and apply the appropriate background color
                  className={`cursor-pointer ${
                    selectedMenuItem === item ? "bg-gray-300 text-black" : ""
                  }`}
                  onClick={() => handleMenuItemClick(item)}
                >
                  <p className="pl-2 m-1 font-Lato">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <RedervationTableOprations />
        {/* Render components conditionally based on the selected menu item */}
        {selectedMenuItem === "Default" && <DefaultTable />}
        {selectedMenuItem === "Time" && <GroupByTImeTable />}

        {selectedMenuItem === "Seating Area" && <GroupBySeatingTable />}

        {selectedMenuItem === "VIP / Other" && <GroupByVipTable />}

        {selectedMenuItem === "Reservation Status" && (
          <GroupByReservationStatus />
        )}

        {/* Add other components for different menu items */}
      </div>
    </div>
  );
};

export default Page;
