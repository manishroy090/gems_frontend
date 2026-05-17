"use client";

import React from "react";

const Page = () => {
  const accountant = {
    name: "Ramesh Adhikari",
    role: "Senior Accountant",
    department: "Finance Department",
    hospital: "City Care Hospital",
    email: "ramesh.adhikari@hospital.com",
    phone: "+977-9800012345",
    address: "Kathmandu, Nepal",
    joinDate: "March 2021",
    status: "Active",
    salaryRange: "NPR 80,000 - 1,00,000",
    invoicesHandled: 1240,
    reportsGenerated: 320,
    transactionsVerified: 5680,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400",
  };

  const stats = [
    { label: "Invoices Handled", value: accountant.invoicesHandled, icon: "🧾" },
    { label: "Reports Generated", value: accountant.reportsGenerated, icon: "📊" },
    { label: "Transactions Verified", value: accountant.transactionsVerified, icon: "💳" },
    { label: "Status", value: accountant.status, icon: "🟢" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-6xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6">

          {/* IMAGE */}
          <img
            src={accountant.image}
            alt="accountant"
            className="w-28 h-28 rounded-2xl object-cover border-4 border-[#14967f]"
          />

          {/* INFO */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">
              {accountant.name}
            </h1>

            <p className="text-[#14967f] font-medium mt-1">
              {accountant.role}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              🏢 {accountant.department}
            </p>

            <p className="text-sm text-gray-500">
              🏥 {accountant.hospital}
            </p>

            <p className="text-sm text-gray-500">
              📍 {accountant.address}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                📅 Joined {accountant.joinDate}
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                {accountant.status}
              </span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <button className="bg-[#14967f] text-white px-5 py-2 rounded-xl">
              Edit Profile
            </button>
            <button className="border px-5 py-2 rounded-xl hover:bg-gray-50">
              Financial Dashboard
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">

            {/* PROFILE INFO */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">
                Professional Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">

                <p><b>Name:</b> {accountant.name}</p>
                <p><b>Email:</b> {accountant.email}</p>
                <p><b>Phone:</b> {accountant.phone}</p>
                <p><b>Role:</b> {accountant.role}</p>
                <p><b>Department:</b> {accountant.department}</p>
                <p><b>Hospital:</b> {accountant.hospital}</p>
                <p><b>Salary Range:</b> {accountant.salaryRange}</p>
                <p><b>Address:</b> {accountant.address}</p>

              </div>
            </div>

            {/* FINANCIAL ACTIVITY */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">
                Financial Activity
              </h2>

              <div className="space-y-3 text-sm text-gray-600">
                <p>✔ Invoice Processing & Verification</p>
                <p>✔ Monthly Financial Reports</p>
                <p>✔ Budget Allocation Tracking</p>
                <p>✔ Payroll Management Support</p>
                <p>✔ Expense Monitoring</p>
              </div>
            </div>

            {/* REPORTS */}
            <div className="border border-emerald-200 bg-emerald-50 rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-700">
                Financial Summary Access
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Authorized to access hospital financial reports and transaction logs.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* CONTACT */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Contact Info</h3>

              <p className="text-sm text-gray-600">📞 {accountant.phone}</p>
              <p className="text-sm text-gray-600 mt-2">✉️ {accountant.email}</p>
              <p className="text-sm text-gray-600 mt-2">
                🏥 {accountant.hospital}
              </p>
            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Quick Actions</h3>

              <button
                className="w-full text-white py-2 rounded-xl"
                style={{ backgroundColor: "#14967f" }}
              >
                View Financial Dashboard
              </button>

              <button className="w-full mt-2 border py-2 rounded-xl hover:bg-gray-50">
                Manage Invoices
              </button>

              <button className="w-full mt-2 border py-2 rounded-xl hover:bg-gray-50">
                Generate Reports
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;