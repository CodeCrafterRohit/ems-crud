import React from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { HiOutlineTable, HiOutlineDocumentText } from "react-icons/hi";

const ExportActions = ({ selectedData }) => {
  const handleExcelExport = () => {
    const formattedData = selectedData.map((emp) => ({
      ID: emp.eId,
      Name: emp.eName,
      Email: emp.eMail,
      Phone: emp.ePhone,
      Gender: emp.eGender,
      DOB: emp.eDob,
      Role: emp.eRole,
      Department: emp.eDept,
      Salary: emp.eSalary,
      Age: emp.eAge,
      Status: emp.eIsActive,
      "Joining Date": emp.eJoiningDate,
      Address: emp.eAddress,
    }));

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Full Employee Data");
    XLSX.writeFile(wb, `Employee_Full_Report_${new Date().getDate()}.xlsx`);
  };

  const handlePDFExport = () => {
    const doc = new jsPDF("l", "mm", "a4");

    doc.setFontSize(16);
    doc.text("Complete Employee Details", 14, 15);
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(
      `Total Records: ${
        selectedData.length
      } | Generated: ${new Date().toLocaleString()}`,
      14,
      22
    );

    const tableColumn = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Gender",
      "DOB",
      "Role",
      "Dept",
      "Salary",
      "Age",
      "Status",
      "Joined",
      "Address",
    ];

    const tableRows = selectedData.map((emp) => [
      emp.eId,
      emp.eName,
      emp.eMail,
      emp.ePhone,
      emp.eGender,
      emp.eDob,
      emp.eRole,
      emp.eDept,
      emp.eSalary,
      emp.eAge,
      emp.eIsActive,
      emp.eJoiningDate,
      emp.eAddress,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 28,
      theme: "grid",
      headStyles: { fillColor: [79, 70, 229], fontSize: 8, fontStyle: "bold" },
      styles: { fontSize: 7, cellPadding: 2 },
      columnStyles: {
        2: { cellWidth: 35 },
        12: { cellWidth: 40 },
      },
    });

    doc.save(`Employee_Full_Report_${new Date().getDate()}.pdf`);
  };

  if (selectedData.length === 0) return null;

  return (
    <div className="flex items-center gap-2 animate-in slide-in-from-top-2 duration-300">
      <span className="text-[10px] font-black text-slate-400 uppercase mr-2 bg-slate-100 px-2 py-1.5 rounded-md border border-slate-200">
        {selectedData.length} Records Selected
      </span>

      <button
        onClick={handleExcelExport}
        className="group flex items-center gap-2.5 px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg text-sm font-medium hover:border-emerald-500 hover:text-emerald-700 transition-all duration-200 shadow-sm active:scale-95"
      >
        <HiOutlineTable
          size={18}
          className="text-emerald-600 group-hover:text-emerald-700"
        />
        <span>Excel</span>
      </button>

      <button
        onClick={handlePDFExport}
        className="group flex items-center gap-2.5 px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg text-sm font-medium hover:border-rose-500 hover:text-rose-700 transition-all duration-200 shadow-sm active:scale-95"
      >
        <HiOutlineDocumentText
          size={18}
          className="text-rose-600 group-hover:text-rose-700"
        />
        <span>PDF</span>
      </button>
    </div>
  );
};

export default ExportActions;
