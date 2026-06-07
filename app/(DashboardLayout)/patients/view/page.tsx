"use client";

import { useState } from "react";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import DuoIcon from "@mui/icons-material/Duo";

import CakeIcon from "@mui/icons-material/Cake";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import WcIcon from "@mui/icons-material/Wc";
import EmailIcon from "@mui/icons-material/Email";

import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AirIcon from "@mui/icons-material/Air";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ScaleIcon from "@mui/icons-material/Scale";
import CompressIcon from "@mui/icons-material/Compress";
import Table from "@/components/medinexus/Table";

const Page = () => {
  const [activeTab, setActiveTab] = useState("appointments");

  const aboutData = [
    { label: "DOB", value: "25 Jan 1990", icon: <CakeIcon fontSize="small" /> },
    { label: "Blood Group", value: "O+", icon: <BloodtypeIcon fontSize="small" /> },
    { label: "Gender", value: "Male", icon: <WcIcon fontSize="small" /> },
    { label: "Email", value: "manish@example.com", icon: <EmailIcon fontSize="small" /> },
  ];

  const vitals = [
    { label: "Blood Pressure", value: "100/67 mmHg", icon: <MonitorHeartIcon fontSize="small" /> },
    { label: "Heart Rate", value: "89 bpm", icon: <FavoriteIcon fontSize="small" /> },
    { label: "SPO2", value: "98%", icon: <AirIcon fontSize="small" /> },
    { label: "Temperature", value: "101°C", icon: <DeviceThermostatIcon fontSize="small" /> },
    { label: "Respiratory Rate", value: "24 rpm", icon: <CompressIcon fontSize="small" /> },
    { label: "Weight", value: "100 kg", icon: <ScaleIcon fontSize="small" /> },
  ];

  const appointmentsData = [
  {
    date: "20 Jan 2025",
    doctorName: "Dr. John Smith",
    mode: "In-person",
    status: "Completed",
  },
  {
    date: "18 Jan 2025",
    doctorName: "Dr. Maya Joshi",
    mode: "Online",
    status: "Pending",
  },
  {
    date: "15 Jan 2025",
    doctorName: "Dr. Ramesh Khatri",
    mode: "In-person",
    status: "Cancelled",
  },
  {
    date: "10 Jan 2025",
    doctorName: "Dr. Anil Sharma",
    mode: "Online",
    status: "Completed",
  },
  {
    date: "05 Jan 2025",
    doctorName: "Dr. Sita Thapa",
    mode: "In-person",
    status: "Completed",
  },
  {
    date: "02 Jan 2025",
    doctorName: "Dr. John Smith",
    mode: "Online",
    status: "Pending",
  },
];

const transactionsData = [
  {
    trnId: "TRN-1001",
    des: "Cardiology Consultation",
    paidDate: "20 Jan 2025",
    paymentMethod: "Credit Card",
    status: "Paid",
  },
  {
    trnId: "TRN-1002",
    des: "Follow-up Checkup",
    paidDate: "18 Jan 2025",
    paymentMethod: "Cash",
    status: "Paid",
  },
  {
    trnId: "TRN-1003",
    des: "Lab Test - Blood Report",
    paidDate: "15 Jan 2025",
    paymentMethod: "Online Transfer",
    status: "Pending",
  },
  {
    trnId: "TRN-1004",
    des: "Orthopedic Consultation",
    paidDate: "12 Jan 2025",
    paymentMethod: "Credit Card",
    status: "Failed",
  },
  {
    trnId: "TRN-1005",
    des: "ECG Test",
    paidDate: "10 Jan 2025",
    paymentMethod: "Debit Card",
    status: "Paid",
  },
  {
    trnId: "TRN-1006",
    des: "General Checkup",
    paidDate: "08 Jan 2025",
    paymentMethod: "Cash",
    status: "Paid",
  },
];
  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-50 p-4">

      {/* ================= HEADER ================= */}
      <div className="bg-white col-span-4 p-5 rounded-xl shadow-sm">

        <div className="flex justify-between items-center">

          {/* LEFT */}
          <div className="flex space-x-5">

            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687"
              className="w-40 h-32 rounded-xl object-cover shadow"
            />

            <div className="flex flex-col justify-center space-y-2">

              <span className="text-xs text-gray-500">#PT0025</span>
              <h1 className="text-xl font-semibold">Alberto Ripley</h1>

              <p className="text-sm text-gray-500">
                4150 Hiney Road, Las Vegas, NV 89109
              </p>

              <div className="flex gap-6 text-sm text-gray-600">

                <div className="flex items-center gap-2">
                  <LocalPhoneIcon fontSize="small" />
                  <span>+1 54546 45648</span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarMonthIcon fontSize="small" />
                  <span>Last Visit: 20 Jan 2025</span>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex flex-col items-end space-y-3">

            <div className="flex gap-3">

              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <LocalPhoneIcon />
              </button>

              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <MapsUgcIcon />
              </button>

              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <DuoIcon />
              </button>

            </div>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow">
              <CalendarMonthIcon fontSize="small" />
              Book Appointment
            </button>

          </div>

        </div>

      </div>

      {/* ================= ABOUT ================= */}
      <div className="bg-white col-span-2 p-5 rounded-xl shadow-sm">

        <h1 className="font-semibold border-b pb-2 mb-4">About</h1>

        <div className="grid grid-cols-2 gap-4 text-sm">

          {aboutData.map((item, i) => (
            <div key={i} className="flex items-center gap-3">

              <div className="p-2 bg-gray-100 rounded-full">
                {item.icon}
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 text-xs">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ================= VITAL SIGNS ================= */}
      <div className="bg-white col-span-2 p-5 rounded-xl shadow-sm">

        <h1 className="font-semibold border-b pb-2 mb-4">Vital Signs</h1>

        <div className="grid grid-cols-3 gap-4 text-sm">

          {vitals.map((item, i) => (
            <div key={i} className="flex items-center gap-3">

              <div className="p-2 bg-gray-100 rounded-full">
                {item.icon}
              </div>

              <div>
                <p className="text-gray-500 text-xs">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ================= TABS ================= */}
      <div className="bg-white col-span-4 p-5 rounded-xl shadow-sm">

        {/* TAB HEADER */}
        <div className="flex gap-6 border-b mb-4">

          <button
            onClick={() => setActiveTab("appointments")}
            className={`pb-2 text-sm font-medium border-b-2 transition ${
              activeTab === "appointments"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
          >
            Appointments
          </button>

          <button
            onClick={() => setActiveTab("transactions")}
            className={`pb-2 text-sm font-medium border-b-2 transition ${
              activeTab === "transactions"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
          >
            Transactions
          </button>

        </div>

        {/* TAB CONTENT */}
        {activeTab === "appointments" && (
        <Table data={appointmentsData}/>

        )}

        {activeTab === "transactions" && (
        <Table data={transactionsData}/>
        )}

      </div>

    </div>
  );
};

export default Page;