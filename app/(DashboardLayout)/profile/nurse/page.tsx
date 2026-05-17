"use client";

import React from "react";

const Page = () => {
  const nurse = {
    name: "Nurse Anjali Karki",
    department: "Emergency Department",
    hospital: "City Care Hospital",
    email: "anjali.karki@hospital.com",
    phone: "+977-9800001111",
    shift: "Night Shift (8:00 PM - 8:00 AM)",
    experience: "6+ Years",
    rating: 4.7,
    patientsHandled: 3200,
    duties: "Emergency Care, Patient Monitoring, ICU Assistance",
    address: "Kathmandu, Nepal",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400",
  };

  const stats = [
    { label: "Patients Handled", value: nurse.patientsHandled, icon: "🧑‍🤝‍🧑" },
    { label: "Rating", value: nurse.rating, icon: "⭐" },
    { label: "Experience", value: nurse.experience, icon: "🏆" },
    { label: "Shift", value: "Night", icon: "🌙" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER CARD */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6">

          {/* PROFILE IMAGE */}
          <img
            src={nurse.image}
            alt="nurse"
            className="w-28 h-28 rounded-2xl object-cover border-4 border-[#14967f]"
          />

          {/* INFO */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">
              {nurse.name}
            </h1>

            <p className="text-[#14967f] font-medium mt-1">
              {nurse.department}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              🏥 {nurse.hospital}
            </p>

            <p className="text-sm text-gray-500">
              📍 {nurse.address}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                🌙 {nurse.shift}
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                ⭐ {nurse.rating}
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                🟢 Active Duty
              </span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <button className="bg-[#14967f] text-white px-5 py-2 rounded-xl">
              Update Profile
            </button>
            <button className="border px-5 py-2 rounded-xl hover:bg-gray-50">
              View Schedule
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
                {nurse.name} is a dedicated healthcare professional working in the{" "}
                {nurse.department} at {nurse.hospital}. She is responsible for
                patient monitoring, emergency assistance, and ICU support.
              </p>
            </div>

            {/* DUTIES */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Responsibilities</h2>

              <div className="flex flex-wrap gap-2">
                {nurse.duties.split(",").map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* SHIFT INFO */}
            <div className="border border-emerald-200 bg-emerald-50 rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-700">
                Shift Information
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {nurse.shift}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* CONTACT */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Contact Info</h3>

              <p className="text-sm text-gray-600">📞 {nurse.phone}</p>
              <p className="text-sm text-gray-600 mt-2">✉️ {nurse.email}</p>
              <p className="text-sm text-gray-600 mt-2">
                🏥 {nurse.hospital}
              </p>
            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Quick Actions</h3>

              <button
                className="w-full text-white py-2 rounded-xl"
                style={{ backgroundColor: "#14967f" }}
              >
                View Assigned Patients
              </button>

              <button className="w-full mt-2 border py-2 rounded-xl hover:bg-gray-50">
                Duty Schedule
              </button>

              <button className="w-full mt-2 border py-2 rounded-xl hover:bg-gray-50">
                Emergency Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;