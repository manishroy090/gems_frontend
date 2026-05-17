"use client";

import React, { useState } from "react";

const masterData = {
  availableTests: ["CBC", "Blood Sugar", "MRI Scan", "X-Ray", "Lipid Profile"],
  bloodGroups: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  countries: ["Nepal", "India", "USA", "UK", "UAE", "Canada"],
  departments: ["Cardiology", "Neurology", "Orthopedics", "Pathology", "ENT"],
  modules: ["EMR", "Billing", "Lab", "Pharmacy", "Appointments"],
  submodules: ["Reports", "Analytics", "Settings", "Notifications"],
  patientStatus: ["Active", "Discharged", "Critical", "Under Observation"],
};

const tabs = [
  { key: "availableTests", label: "Available Tests" },
  { key: "bloodGroups", label: "Blood Groups" },
  { key: "countries", label: "Countries" },
  { key: "departments", label: "Departments" },
  { key: "modules", label: "Modules" },
  { key: "submodules", label: "Sub Modules" },
  { key: "patientStatus", label: "Patient Status" },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("availableTests");

  const data = masterData[activeTab];

  return (
    <div className="p-6 space-y-6">

      {/* ================= TABS ================= */}
      <div className="flex flex-wrap gap-2 border-b pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === tab.key
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h2 className="font-semibold text-gray-700">
            {tabs.find((t) => t.key === activeTab)?.label}
          </h2>
        </div>

        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3 w-20">#</th>
              <th className="p-3">Name</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 text-gray-500">{index + 1}</td>
                <td className="p-3 font-medium text-gray-700">
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* empty state */}
        {data.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No data available
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;