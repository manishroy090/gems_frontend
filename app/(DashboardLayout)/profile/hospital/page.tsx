"use client";

import React from "react";

const Page = () => {
  const hospital = {
    name: "City Care Hospital",
    tagline: "Compassionate Care. Advanced Medicine.",
    address: "Kathmandu, Nepal",
    phone: "+977-1-4123456",
    email: "info@citycarehospital.com",
    rating: 4.6,
    beds: 250,
    doctors: 85,
    icuBeds: 40,
    operationTheatres: 12,
    emergency: "24/7 Emergency Services Available",
    logo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1b9c?w=200",
    coverImage:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200",
    specialties: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "General Surgery",
      "ICU Care",
    ],
  };

  const stats = [
    { label: "Doctors", value: hospital.doctors, icon: "👨‍⚕️" },
    { label: "Beds", value: hospital.beds, icon: "🛏️" },
    { label: "ICU Beds", value: hospital.icuBeds, icon: "🏥" },
    { label: "OT Rooms", value: hospital.operationTheatres, icon: "🧑‍🔬" },
    { label: "Rating", value: hospital.rating, icon: "⭐" },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* COVER */}
      <div className="relative h-64 md:h-80 w-full">
        <img
          src={hospital.coverImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">

        {/* HEADER */}
        <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col md:flex-row gap-6">

          <img
        src="/hrm_image/newlogo.svg"
            className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-md"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">
              {hospital.name}
            </h1>
            <p className="text-gray-500">{hospital.tagline}</p>
            <p className="text-sm text-gray-500 mt-1">📍 {hospital.address}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm">
                ⭐ {hospital.rating}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm">
                🚨 Emergency 24/7
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="bg-[#14967f] text-white px-5 py-2 rounded-xl">
              Book Appointment
            </button>
            <button className="border px-5 py-2 rounded-xl">
              Call Now
            </button>
          </div>
        </div>

        {/* FACILITIES STATS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">

          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-sm text-center"
            >
              <div className="text-2xl">{item.icon}</div>
              <p className="text-lg font-bold text-gray-800 mt-1">
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

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">

            {/* ABOUT */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-2">About Hospital</h2>
              <p className="text-gray-600">
                {hospital.name} is a modern healthcare institution located in{" "}
                {hospital.address}, offering advanced medical services,
                emergency care, and specialized treatments with highly
                experienced doctors.
              </p>
            </div>

            {/* SPECIALTIES */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {hospital.specialties.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* EMERGENCY */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-700">
                Emergency Care
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {hospital.emergency}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* CONTACT */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Contact Info</h3>
              <p className="text-sm text-gray-600">📞 {hospital.phone}</p>
              <p className="text-sm text-gray-600 mt-2">✉️ {hospital.email}</p>
              <p className="text-sm text-gray-600 mt-2">
                📍 {hospital.address}
              </p>
            </div>

            {/* QUICK FEATURES */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Facilities</h3>

              <div className="space-y-2 text-sm text-gray-600">
                <p>✔ Advanced ICU Unit</p>
                <p>✔ Modular Operation Theatres</p>
                <p>✔ 24/7 Emergency Room</p>
                <p>✔ Digital Lab & Diagnostics</p>
                <p>✔ Ambulance Service</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;