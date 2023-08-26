'use client'
import React, { useState } from 'react';
import EditDrawer from '../EditDrawer/EditDrawerProps';
import { AiOutlineEdit, AiOutlineEllipsis } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface DynamicTableProps {
  headers: string[];
  data: any[]; // Replace with your data structure
}

const GuestListTable: React.FC<DynamicTableProps> = ({ headers, data }) => {
  const [editableRow, setEditableRow] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<any>(null);
  const [openActionIndex, setOpenActionIndex] = useState<number | null>(null);

  const handleEditClick = (index: number) => {
    const selectedData = data[index];
    setEditedData(selectedData);
    setEditableRow(index);
    setOpenActionIndex(null); // Close the action menu
  };

  const handleDeleteClick = (index: number) => {
    // Implement delete logic here
    // You can update the data array or trigger an API call for deletion
    setOpenActionIndex(null); // Close the action menu
  };

  const handleSaveClick = (editedData: any) => {
    // Implement save logic here
    // You can update the data array or trigger an API call to save edited data
    setEditableRow(null);
    setEditedData(null);
  };

  const handleCancelEdit = () => {
    setEditableRow(null);
    setEditedData(null);
  };

  const toggleActionMenu = (index: number) => {
    if (openActionIndex === index) {
      setOpenActionIndex(null); // Close the menu if already open
    } else {
      setOpenActionIndex(index);
    }
  };

  return (
    <div>
      <table className="w-full">
        {/* Render table headers */}
        <thead>
          <tr>
            {headers?.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                {header}
              </th>
            ))}
            <th className="px-4 py-2 bg-gray-200 hover:bg-gray-300">
              Actions
            </th>
          </tr>
        </thead>
        {/* Render table rows */}
        <tbody>
          {data?.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
              } hover:bg-gray-300`}
            >
              {headers?.map((header, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
                  {editableRow === index ? (
                    <input
                      type="text"
                      value={editedData[header]}
                      onChange={(e) => {
                        // Handle changes to edited data
                        const newEditedData = { ...editedData };
                        newEditedData[header] = e.target.value;
                        setEditedData(newEditedData);
                      }}
                    />
                  ) : (
                    row[header]
                  )}
                </td>
              ))}
              <td className="px-4 py-2">
                <div className="dropdown">
                  <button
                    className="dropDownButton"
                    type="button"
                    id={`actionDropdown${index}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AiOutlineEllipsis />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby={`actionDropdown${index}`}
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleEditClick(index)}
                      >
                        <span className="m-1">
                          <AiOutlineEdit />
                        </span>{" "}
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleDeleteClick(index)}
                      >
                        <span className="m-1">
                          <RiDeleteBin6Line />
                        </span>{" "}
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditDrawer
        isOpen={editableRow !== null}
        data={editedData}
        onSave={handleSaveClick}
        onCancel={handleCancelEdit}
      />
    </div>
  );
};

export default GuestListTable;
