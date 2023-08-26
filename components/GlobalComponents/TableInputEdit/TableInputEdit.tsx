'use client'
import { useState } from 'react';

import { AiOutlineEdit } from 'react-icons/ai';

interface RowData {
  [key: string]: string;
}

const headers = ["Name", "Email", "Phone", "Country"];

const initialData: RowData[] = [
  {
    Name: "John Doe",
    Email: "john@example.com",
    Phone: "123-456-7890",
    Country: "United States",
  },
  {
    Name: "Jane Smith",
    Email: "jane@example.com",
    Phone: "987-654-3210",
    Country: "Canada",
  },
  {
    Name: "Alice Johnson",
    Email: "alice@example.com",
    Phone: "555-555-5555",
    Country: "United Kingdom",
  },
  {
    Name: "Bob Brown",
    Email: "bob@example.com",
    Phone: "111-222-3333",
    Country: "Australia",
  },
  {
    Name: "Eva Wilson",
    Email: "eva@example.com",
    Phone: "777-888-9999",
    Country: "Germany",
  },
];

const TableInputEdit: React.FC = () => {
  const [editableRow, setEditableRow] = useState<number | null>(null);
  const [data, setData] = useState(initialData);

  const handleEditClick = (index: number) => {
    setEditableRow(index);
  };

  const handleSaveClick = () => {
    if (editableRow !== null) {
      // Create a copy of the data array
      const newData = [...data];
      // Iterate through the keys of the row being edited
      Object.keys(newData[editableRow]).forEach((key) => {
        // Update the value in the copied data
        newData[editableRow][key] = newData[editableRow][key];
      });

      // Update the state with the new data
      setData(newData); // Update the state variable with the new data

      console.log('Saved:', newData[editableRow]);
      setEditableRow(null); // Clear editable row after saving.
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Guest List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {headers.map((header, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
                {header}
              </th>
            ))}
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} hover:bg-gray-300`}
            >
              {Object.keys(row).map((key) =>
                editableRow === index ? (
                  <td key={key} className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={row[key]}
                      onChange={(e) => {
                        // Update the field value in the data array.
                        const newData = [...data];
                        newData[index][key] = e.target.value;
                        setData(newData); // Set the state with the updated data
                      }}
                    />
                  </td>
                ) : (
                  <td key={key} className="border border-gray-300 px-4 py-2">
                    {row[key]}
                  </td>
                )
              )}
              <td className="border border-gray-300 px-4 py-2">
                {editableRow === index ? (
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEditClick(index)}
                  >
                    <AiOutlineEdit />  
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableInputEdit;
