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
  vip: boolean;
}

const GroupByVipTable: React.FC = () => {
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
    },
  ];

  const groupByVips = data.filter((item) => item.vip === true);

  const totalCovers = data
    .filter((item) => item.vip === true)
    .reduce((sum, item) => sum + item.covers, 0);

  const totalVipReservations = data.filter((item) => item.vip === true).length;

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full font-Lato">
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className="px-6 py-5 text-left text-xs uppercase tracking-wider table-heading font-bold"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-200">
              <td
                colSpan={headings.length}
                className="px-6 py-3 text-xs font-semibold  group-heading"
              >
                {`Other (${totalVipReservations} reservations) - ${totalCovers} covers`}
              </td>
            </tr>
            {groupByVips.map((item, index) => (
              <tr key={index}>
                {Object.keys(item)
                  .filter((key) => key !== "vip")
                  .map((key, innerIndex) => (
                    <td
                      key={innerIndex}
                      className="px-6 py-3 text-xs font-normal row-values"
                    >
                      {item[key as keyof Data]}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GroupByVipTable;
