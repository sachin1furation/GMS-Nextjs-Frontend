import React from "react";

interface Data {
  time: string;
  covers: number;
  name: string;
  table: number;
  notes: string;
  phone: string;
  email: string;
  "booked by": string;
  "created date": string;
  status: string;
  spend: number;
}

const GroupByTImeTable: React.FC = () => {
  const headings: string[] = [
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

  const data: Data[] = [
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

  const groupedByTime: { [key: string]: Data[] } = data.reduce<{
    [key: string]: Data[];
  }>((groups, item) => {
    const { time, ...rest } = item;
    if (!groups[time]) {
      groups[time] = [];
    }
    groups[time].push(rest);
    return groups;
  }, {});

  return (
    <>
      {/* <div className="table w-full">
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
      </div> */}

      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row px-5">
            <div className="table-cell text-sm text-left py-3">Name</div>
            <div className="table-cell text-sm text-left py-3">Table</div>
          </div>
        </div>
        <tbody>
          {Object.keys(groupedByTime).map((time) => (
            <React.Fragment key={time}>
              <div className="table-row px-5">
                <div className="table-cell text-sm text-left py-3">
                  <h2>{time}</h2>
                </div>
              </div>
              {groupedByTime[time].map((item, index) => (
                <div key={index} className="table-row px-5">
                  <td className="table-cell text-sm text-left py-3">
                    {item.name}
                  </td>
                  <td className="table-cell text-sm text-left py-3">
                    {item.table}
                  </td>
                </div>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </div>
    </>
  );
};

export default GroupByTImeTable;
