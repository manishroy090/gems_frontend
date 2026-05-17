"use client";

import React from "react";

const Page = () => {
  const doctor = {
    name: "Dr. Sarah Sharma",
    specialty: "Cardiologist",
    experience: "12+ Years",
    email: "sarah.sharma@hospital.com",
    phone: "+977-9800000000",
    hospital: "City Care Hospital",
    rating: 4.8,
    patients: 1240,
    appointments: 86,
    availability: "Mon - Fri (10:00 AM - 4:00 PM)",
    qualification: "MBBS, MD (Cardiology)",
    address: "Kathmandu, Nepal",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
  };

  const stats = [
    { label: "Patients", value: doctor.patients, icon: "🧑‍🤝‍🧑" },
    { label: "Appointments", value: doctor.appointments, icon: "📅" },
    { label: "Rating", value: doctor.rating, icon: "⭐" },
    { label: "Experience", value: doctor.experience, icon: "🏆" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER CARD */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6">

          {/* PROFILE IMAGE */}
          <div>
            <img
              src={doctor.image}
              className="w-28 h-28 rounded-2xl object-cover border-4 border-[#14967f]"
              alt="doctor"
            />
          </div>

          {/* INFO */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">
              {doctor.name}
            </h1>

            <p className="text-[#14967f] font-medium mt-1">
              {doctor.specialty}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              🏥 {doctor.hospital}
            </p>

            <p className="text-sm text-gray-500">
              📍 {doctor.address}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                ⭐ {doctor.rating}
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                {doctor.experience}
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                🟢 Available
              </span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <button
              className="text-white px-5 py-2 rounded-xl"
              style={{ backgroundColor: "#14967f" }}
            >
              Edit Profile
            </button>

            <button className="border px-5 py-2 rounded-xl hover:bg-gray-50">
              Update Schedule
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

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">

            {/* ABOUT */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-2">
                Professional Information
              </h2>

              <div className="space-y-2 text-gray-600 text-sm">
                <p><b>Qualification:</b> {doctor.qualification}</p>
                <p><b>Specialty:</b> {doctor.specialty}</p>
                <p><b>Experience:</b> {doctor.experience}</p>
                <p><b>Working Hospital:</b> {doctor.hospital}</p>
              </div>
            </div>

            {/* SCHEDULE */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-2">
                Availability Schedule
              </h2>

              <p className="text-gray-600 text-sm">
                {doctor.availability}
              </p>

              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                  Morning Shift
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                  Consultation
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                  Emergency On-call
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* CONTACT */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Contact Info</h3>

              <p className="text-sm text-gray-600">📞 {doctor.phone}</p>
              <p className="text-sm text-gray-600 mt-2">✉️ {doctor.email}</p>
              <p className="text-sm text-gray-600 mt-2">
                🏥 {doctor.hospital}
              </p>
            </div>

            {/* QUICK ACTION */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Quick Actions</h3>

              <button
                className="w-full text-white py-2 rounded-xl"
                style={{ backgroundColor: "#14967f" }}
              >
                View Appointments
              </button>

              <button className="w-full mt-2 border py-2 rounded-xl hover:bg-gray-50">
                Manage Schedule
              </button>

              <button className="w-full mt-2 border py-2 rounded-xl hover:bg-gray-50">
                Patient Records
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;