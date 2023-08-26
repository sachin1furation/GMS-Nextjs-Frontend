'use client'
import React from 'react';
import { exportToExcel } from './ExportTable';
// import { exportToExcel } from '../utils/exportToExcel';

function ExportButton() {
  const dummyData = [
    { Name: 'John', Age: 30, City: 'New York' },
    { Name: 'Alice', Age: 25, City: 'Los Angeles' },
    { Name: 'Bob', Age: 35, City: 'Chicago' },
  ];

  const handleExport = async () => {
    try {
      await exportToExcel(dummyData, 'dummy_data.xlsx');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };

  return (
    <button onClick={handleExport}>Export to Excel</button>
  );
}

export default ExportButton;
