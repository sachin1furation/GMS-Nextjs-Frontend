import React from "react";
import "./style.css";

const DefaultTable = () => {
  const headings = [
    "time",
    "covers",
    "name",
    "table",
    "notes",
    "phone",
    "email",
    "booked by",
    "created date",
    "status",
    "spend",
  ];

  const data = [
    {
      time: "7:00",
      covers: 4,
      name: "John Doe",
      table: 10,
      notes: "Special occasion",
      phone: "123-456-7890",
      email: "john@example.com",
      "booked by": "Jane Smith",
      "created date": "2023-08-25",
      status: "Confirmed",
      spend: 100,
    },
    {
      time: "7:30",
      covers: 2,
      name: "Alice Johnson",
      table: 11,
      notes: "",
      phone: "987-654-3210",
      email: "alice@example.com",
      "booked by": "Bob Brown",
      "created date": "2023-08-25",
      status: "Pending",
      spend: 0,
    },
    {
      time: "8:30",
      covers: 2,
      name: "Alice Johnson",
      table: 11,
      notes: "",
      phone: "987-654-3210",
      email: "alice@example.com",
      "booked by": "Bob Brown",
      "created date": "2023-08-25",
      status: "Pending",
      spend: 0,
    },
    // Add more objects as needed
  ];

  return (
    <>
      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row px-5">
            {headings.map((heading, index) => (
              <div key={index} className="table-cell text-sm text-left py-3">
                {heading.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
        <div className="table-row-group">
          {data.map((item, index) => (
            <div
              className={`table-row text-xs ${
                index % 2 === 0 ? "odd-row" : "bg-white"
              } `}
              key={index}
            >
              {Object.values(item).map((value, innerIndex) => (
                <div key={innerIndex} className="table-cell py-3">
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DefaultTable;