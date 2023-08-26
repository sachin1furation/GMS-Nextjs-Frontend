'use client'
import * as ExcelJS from 'exceljs';

export async function exportToExcel(data: any[], filename: string): Promise<void> {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();

    // Add a worksheet
    const worksheet = workbook.addWorksheet('Data');

    // Add headers to the worksheet
    const headers = Object.keys(data[0]);
    worksheet.addRow(headers);

    // Add data rows to the worksheet
    data.forEach((item) => {
        const row = headers.map((header) => item[header]);
        worksheet.addRow(row);
    });

    // Generate the Excel file
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the buffer
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a download link and trigger the download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
}
