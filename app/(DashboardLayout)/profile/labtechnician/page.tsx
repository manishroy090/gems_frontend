"use client";

import React from "react";

const Page = () => {
  const labTech = {
    name: "Sujan Shrestha",
    department: "Pathology Lab",
    hospital: "City Care Hospital",
    email: "sujan.shrestha@hospital.com",
    phone: "+977-9800011223",
    shift: "Day Shift (8:00 AM - 4:00 PM)",
    experience: "5+ Years",
    rating: 4.6,
    testsProcessed: 8450,
    reportsGenerated: 6200,
    equipment: "Hematology Analyzer, Biochemistry Analyzer, PCR Machine",
    address: "Kathmandu, Nepal",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400",
  };

  const stats = [
    { label: "Tests Processed", value: labTech.testsProcessed, icon: "🧪" },
    { label: "Reports Generated", value: labTech.reportsGenerated, icon: "📄" },
    { label: "Rating", value: labTech.rating, icon: "⭐" },
    { label: "Experience", value: labTech.experience, icon: "🏆" },
  ];

  const responsibilities = [
    "Blood Sample Analysis",
    "Urine & Stool Testing",
    "Biochemistry Reports",
    "PCR & Molecular Testing",
    "Quality Control Checks",
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6">

          {/* IMAGE */}
          <img
            src={labTech.image}
            alt="lab tech"
            className="w-28 h-28 rounded-2xl object-cover border-4 border-[#14967f]"
          />

          {/* INFO */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">
              {labTech.name}
            </h1>

            <p className="text-[#14967f] font-medium mt-1">
              {labTech.department}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              🏥 {labTech.hospital}
            </p>

            <p className="text-sm text-gray-500">
              📍 {labTech.address}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                🧪 {labTech.shift}
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                ⭐ {labTech.rating}
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                🟢 Active Lab Duty
              </span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <button className="bg-[#14967f] text-white px-5 py-2 rounded-xl">
              Update Profile
            </button>
            <button className="border px-5 py-2 rounded-xl hover:bg-gray-50">
              View Reports
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm text-center"
            >
              <div className="text-2xl">{item.icon}</div>

              <p className="text-lg font-bold text-gray-800 mt-2">
                {item.value}
              </p>

              <p className="text-sm text-gray-500">{item.label}</p>

              <div
                className="h-1 w-10 mx-auto mt-2 rounded-full"
                style={{ backgroundColor: "#14967f" }}
              />
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">

            {/* ABOUT */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-2">
                Professional Overview
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {labTech.name} is a skilled laboratory technician working in the{" "}
                {labTech.department} at {labTech.hospital}. Responsible for
                conducting diagnostic tests, analyzing samples, and generating
                accurate medical reports.
              </p>
            </div>

            {/* RESPONSIBILITIES */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">
                Lab Responsibilities
              </h2>

              <div className="flex flex-wrap gap-2">
                {responsibilities.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* EQUIPMENT */}
            <div className="border border-emerald-200 bg-emerald-50 rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-700">
                Lab Equipment
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {labTech.equipment}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* CONTACT */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Contact Info</h3>

              <p className="text-sm text-gray-600">📞 {labTech.phone}</p>
              <p className="text-sm text-gray-600 mt-2">✉️ {labTech.email}</p>
              <p className="text-sm text-gray-600 mt-2">
                🏥 {labTech.hospital}
              </p>
            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Quick Actions</h3>

              <button
                className="w-full text-white py-2 rounded-xl"
                style={{ backgroundColor: "#14967f" }}
              >
                View Test Queue
              </button>

              <button className="w-full mt-2 border py-2 rounded-xl hover:bg-gray-50">
                Generate Report
              </button>

              <button className="w-full mt-2 border py-2 rounded-xl hover:bg-gray-50">
                Sample Tracking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;