"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import { calenderIcon } from "@/public/assests";
import Image from "next/image";

const GMSDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); // Set the default value to the current date

  useEffect(() => {
    // You can add additional logic here if needed
  }, []);

  // Custom function to add classes to the current date cell
  const highlightCurrentDate = (date: Date) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set the time portion to 00:00:00

    if (date.getTime() === currentDate.getTime()) {
      return "bg-primary text-primary rounded-full"; // Apply your custom styles
    }

    return ""; // Return an empty string for other dates
  };

  return (
    <div className="w-64">
      <div
        onChange={(date) => setSelectedDate(date)}
        className="flex border-2 border-gray bg-white rounded-lg pr-2 "
      >
        <div>
          <DatePicker
            selected={selectedDate}
            highlightDates={[new Date()]} // Highlight the current date
            calendarClassName="w-full"
            className="w-full px-3 py-2  rounded-lg   "
            dayClassName={highlightCurrentDate}
          />
        </div>
        <Image src={calenderIcon} width={20} height={20} alt="" />
      </div>
    </div>
  );
};

export default GMSDatePicker;
