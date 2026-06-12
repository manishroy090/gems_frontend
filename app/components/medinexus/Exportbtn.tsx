import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FileText } from "lucide-react";
import { Sheet } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Exportbtn = ({handleExport}) => {

  
  const downloadReport = async () => {
    try {

      const blob = await handleExport();
      // Create a temporary hidden DOM element to anchor the file stream
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "ServerReport.xlsx");

      document.body.appendChild(link);
      link.click();

      // Clean up DOM and memory pointer
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  return (
    <div className="relative inline-block" onClick={downloadReport}>
      {/* Trigger button */}
      <button className="inline-flex items-center gap-2 text-white px-3 py-2 rounded border border-gray-300 shadow-sm hover:shadow-md transition bg-yellow-100">
        <i
          className="fa-solid fa-file-excel"
          style={{ color: "rgb(24, 158, 86)" }}
        ></i>
      </button>
    </div>
  );
};

export default Exportbtn;
