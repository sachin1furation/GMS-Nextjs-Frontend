import React from "react";

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
  vip: boolean;
  seating: string;
}

const GroupBySeatingTable: React.FC = () => {
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
      vip: true,
      seating: "Restaurant", // Added seating property
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
      vip: true,
      seating: "Bar", // Added seating property
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
      vip: false,
      seating: "Basement", // Added seating property
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
      vip: false,
      seating: "Bar", // Added seating property
    },
  ];

  const groupedBySeating: { [key: string]: Data[] } = data.reduce<{
    [key: string]: Data[];
  }>((groups, item) => {
    const { seating, ...rest } = item;
    if (!groups[seating]) {
      groups[seating] = [];
    }

    const dataWithoutSeating = {
      ...rest,
    } as Data;

    groups[seating].push(dataWithoutSeating);
    return groups;
  }, {});

  return (
    <>
      <div className="w-full overflow-x-auto" style={{ maxHeight: "80vh", overflowY: "auto" }}>
        <table className="min-w-full font-Lato font-semibold">
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider table-heading"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedBySeating).map((seating) => {
              const reservations = groupedBySeating[seating];
              const noOfReservations = groupedBySeating[seating].length;
              const totalCovers = reservations.reduce(
                (sum, item) => sum + item.covers,
                0
              );
              return (
                <React.Fragment key={seating}>
                  <tr className="bg-gray-200">
                    <td
                      colSpan={headings.length}
                      className="px-6 py-3 text-xs font-semibold  group-heading"
                    >
                      {`${seating} (${noOfReservations} reservations) - ${totalCovers} covers`}
                    </td>
                  </tr>
                  {groupedBySeating[seating].map((item, index) => {
                    return (
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
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GroupBySeatingTable;
