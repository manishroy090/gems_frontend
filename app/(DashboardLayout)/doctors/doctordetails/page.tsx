"use client";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const availabilityData = {
  Monday: ["11:30AM - 12:30PM", "2:00PM - 3:00PM"],
  Tuesday: ["10:00AM - 11:00AM", "4:00PM - 5:00PM"],
  Wednesday: ["12:00PM - 1:00PM"],
  Thursday: ["3:00PM - 4:00PM"],
  Friday: ["1:00PM - 2:00PM"],
};

const Page = () => {
  const [activeDay, setActiveDay] = useState("Tuesday");

  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-white">

      {/* ================= HEADER (UPGRADED) ================= */}
      <div className="col-span-3 border p-4 rounded-xl shadow-sm flex justify-between items-center">

        {/* LEFT */}
        <div className="flex space-x-6 items-center">

          <img
            src="https://as2.ftcdn.net/v2/jpg/04/75/00/71/1000_F_475007199_FLk7bivHPRIjtiylrMeA4027ehCQWurq.jpg"
            className="w-32 h-28 object-cover rounded-xl shadow"
          />

          <div className="space-y-1">

            <div className="flex space-x-3 items-center">
              <span className="font-semibold text-xl">Dr. John Smith</span>
              <span className="text-sm text-gray-500">Cardiology</span>
            </div>

            <span className="text-sm text-gray-500">MBBS, MD Cardiology</span>

            <div className="flex space-x-3 text-sm">
              <span>Clinic: Downtown Medical</span>
              <span className="text-green-600 font-medium">Available</span>
            </div>

          </div>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex flex-col items-end space-y-3">

          {/* PRICE */}
          <div className="text-right">
            <span className="text-gray-500 text-sm">Consultation</span>
            <h2 className="font-bold text-xl">$499 / 30min</h2>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2">

            <button className="px-4 py-2 text-sm border rounded-xl hover:bg-gray-100 transition">
              📞 Call
            </button>

            <button className="px-4 py-2 text-sm border rounded-xl hover:bg-gray-100 transition">
              💬 Msg
            </button>

            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md transition flex items-center gap-1">
              <CalendarMonthIcon fontSize="small" />
              Book Appointment
            </button>

          </div>

        </div>

      </div>

      {/* ================= AVAILABILITY ================= */}
      <div className="col-span-2 border p-4 rounded-xl shadow-sm">

        <h1 className="font-semibold mb-3">Availability</h1>

        <div className="flex border-b mb-3">
          {Object.keys(availabilityData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-3 py-2 text-sm border-b-2 transition ${
                activeDay === day
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {availabilityData[activeDay as keyof typeof availabilityData].map((t, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 rounded">
              {t}
            </span>
          ))}
        </div>

      </div>

      {/* ================= ABOUT ================= */}
      <div className="border p-4 rounded-xl shadow-sm">

        <h1 className="font-semibold mb-3">About</h1>

        <div className="space-y-2 text-sm text-gray-600">
          <p>📞 +1 54546 45648</p>
          <p>📧 john@example.com</p>
          <p>📍 Las Vegas</p>
          <p>🩸 O+</p>
          <p>🎓 15+ Years</p>
        </div>

      </div>

      {/* ================= BIO ================= */}
      <div className="col-span-2 border p-4 rounded-xl shadow-sm">

        <h1 className="font-semibold mb-2">Bio</h1>

        <p className="text-sm text-gray-600">
          Dr. John Smith is a cardiologist with 15+ years of experience in heart
          disease treatment and preventive care.
        </p>

      </div>

      {/* ================= EDUCATION ================= */}
      <div className="col-span-3 border p-4 rounded-xl shadow-sm">

        <h1 className="font-semibold mb-3">Education</h1>

        <div className="border-l pl-4 space-y-3 text-sm">

          <div>
            <p className="font-medium">Harvard Medical School</p>
            <p className="text-gray-500">MD Cardiology (2010 - 2014)</p>
          </div>

          <div>
            <p className="font-medium">Boston University</p>
            <p className="text-gray-500">MBBS (2005 - 2009)</p>
          </div>

        </div>

      </div>

      {/* ================= AWARDS ================= */}
      <div className="col-span-3 border p-4 rounded-xl shadow-sm">

        <h1 className="font-semibold mb-3">Awards & Recognition</h1>

        <div className="space-y-3">

          <div className="flex gap-3">
            <span>🏆</span>
            <div>
              <p className="text-sm font-medium">Top Cardiologist Award (2023)</p>
              <p className="text-xs text-gray-500">
                Excellence in patient care and cardiac treatment.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span>⭐</span>
            <div>
              <p className="text-sm font-medium">Patient Choice Award</p>
              <p className="text-xs text-gray-500">
                Highly rated by patients for care quality.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ================= CERTIFICATIONS ================= */}
      <div className="col-span-3 border p-4 rounded-xl shadow-sm">

        <h1 className="font-semibold mb-3">Certifications</h1>

        <div className="space-y-3">

          <div className="flex gap-3">
            <span>🎓</span>
            <div>
              <p className="text-sm font-medium">Board Certified Cardiologist</p>
              <p className="text-xs text-gray-500">
                American Board of Internal Medicine (ABIM)
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span>📜</span>
            <div>
              <p className="text-sm font-medium">ACLS Certified</p>
              <p className="text-xs text-gray-500">
                Advanced cardiac life support certification
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Page;