import React from "react";
import "../reservationStyles.css";

interface Data {
  covers: number;
  name: string;
  table: number;
  notes: string;
  phone: string;
  email: string;
  booked_by: string;
  created_date: string;
  status: string;
  spend: number;
  time: string;
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
      booked_by: "Jane Smith",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
      status: "Pending",
      spend: 0,
    },
    {
      time: "7:00",
      covers: 4,
      name: "John Doe",
      table: 10,
      notes: "Special occasion",
      phone: "123-456-7890",
      email: "john@example.com",
      booked_by: "Jane Smith",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
      status: "Pending",
      spend: 0,
    },
    {
      time: "7:00",
      covers: 4,
      name: "John Doe",
      table: 10,
      notes: "Special occasion",
      phone: "123-456-7890",
      email: "john@example.com",
      booked_by: "Jane Smith",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
      status: "Pending",
      spend: 0,
    },
     {
      time: "7:00",
      covers: 4,
      name: "John Doe",
      table: 10,
      notes: "Special occasion",
      phone: "123-456-7890",
      email: "john@example.com",
      booked_by: "Jane Smith",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
      status: "Pending",
      spend: 0,
    },
    {
      time: "7:00",
      covers: 4,
      name: "John Doe",
      table: 10,
      notes: "Special occasion",
      phone: "123-456-7890",
      email: "john@example.com",
      booked_by: "Jane Smith",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
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
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
      status: "Pending",
      spend: 0,
    },
    {
      time: "8:30",
      covers: 5,
      name: "Boris Johnson",
      table: 11,
      notes: "",
      phone: "987-654-3210",
      email: "alice@example.com",
      booked_by: "Bob Brown",
      created_date: "2023-08-25",
      status: "Pending",
      spend: 0,
    },
  ];

  const groupedByTime: { [key: string]: Data[] } = data.reduce<{
    [key: string]: Data[];
  }>((groups, item) => {
    const { time, ...rest } = item;
    if (!groups[time]) {
      groups[time] = [];
    }

    const dataWithoutTime = {
      ...rest,
    } as Data;

    groups[time].push(dataWithoutTime);
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

      <div className="w-full overflow-x-auto" style={{ maxHeight: "80vh", overflowY: "auto" }}>
        <table className="min-w-full font-Lato font-semibold">
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className="px-6 py-5 text-left text-sm font-semibold  uppercase tracking-wider table-heading"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedByTime).map((time) => {
              const reservations = groupedByTime[time];
              const noOfReservations = groupedByTime[time].length;
              const totalCovers = reservations.reduce(
                (sum, item) => sum + item.covers,
                0
              );
              return (
                <React.Fragment key={time}>
                  <tr className="bg-gray-200">
                    <td
                      colSpan={headings.length}
                      className="px-6 py-3 text-xs font-semibold  group-heading"
                    >
                      {`${time} (${noOfReservations} reservations) - ${totalCovers} covers`}
                    </td>
                  </tr>
                  {groupedByTime[time].map((item, index) => (
                    <tr key={index}>
                      {Object.keys(item).map((key, innerIndex) => {
                        if (key === "vip") {
                          return null; // skip rendering this value
                        }
                        return (
                          <td
                            key={innerIndex}
                            className="px-6 py-3 text-xs font-normal row-values"
                          >
                            {item[key as keyof Data]}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GroupByTImeTable;
