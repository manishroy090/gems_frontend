import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FileText } from "lucide-react";
import { Sheet } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Exportbtn = () => {
  return (
    <div className="relative inline-block">
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
