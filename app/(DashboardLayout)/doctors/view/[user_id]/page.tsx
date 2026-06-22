"use client";
import { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { View } from "@services/Doctor";
import { set } from "date-fns";
import { useParams } from "next/navigation";


const page = () => {
  const [activeDay, setActiveDay] = useState("Sunday");
  const [doctordetails, setDoctorDetails] = useState<any>();
  const param = useParams()

  const StructurData = (data: any) => {
    const doctorData = Object.entries(data);
    const result = Object.fromEntries(
      doctorData.map(([key, value]: any) => {
        if (key === "doctor_sessions") {
          let availabilityData: any = {};
          const dayList = [...new Set(value.map((item: any) => item.day))];
          dayList.forEach((day) => {
            availabilityData[day as keyof typeof  availabilityData] = value.filter((item: any) => item.day === day);
          });
          return [key, availabilityData];

        }
        return [key, value];
      })
    );
    return result;
  };


  useEffect(() => {
    const getDoctorDetails = async () => {
      const {user_id} =param;
    
      const result = await View(user_id );
      const structureData = StructurData(result);
      setDoctorDetails(structureData);
    }
    getDoctorDetails();
  }, [])



  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-white">

      {/* ================= HEADER (UPGRADED) ================= */}
      <div className="col-span-3 border p-4 rounded-xl shadow-sm flex justify-between items-center">

        {/* LEFT */}
        <div className="flex space-x-6 items-center">

          <img
            src={`http://localhost:8080/uploads/doctors/${doctordetails?.image}`}
            className="w-32 h-28 object-cover rounded-xl shadow"
          />

          <div className="space-y-1">

            <div className="flex space-x-3 items-center">
              <span className="font-semibold text-xl">{doctordetails?.doctor_name}</span>
              <span className="text-sm text-gray-500">{doctordetails?.department}</span>
            </div>

            <span className="text-sm text-gray-500">{doctordetails?.edutag}</span>

            <div className="flex space-x-3 text-sm">
              <span>Clinic: Downtown Medical</span>
              <span className="text-green-600 font-medium">{doctordetails?.doctor_status}</span>
            </div>

          </div>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex flex-col items-end space-y-3">

          {/* PRICE */}
          <div className="text-right">
            <span className="text-gray-500 text-sm">Consultation</span>
            <h2 className="font-bold text-xl">${doctordetails?.fee}/ 30min</h2>
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
          {doctordetails?.doctor_sessions && Object.keys(doctordetails?.doctor_sessions).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-3 py-2 text-sm border-b-2 transition ${activeDay === day
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
                }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {doctordetails?.doctor_sessions && doctordetails?.doctor_sessions?.[activeDay]?.map((t:any, i:any) => (
            <span key={i} className="px-3 py-1 bg-gray-100 rounded">
              {`${t.start_time} - ${t.end_time}`}
            </span>
          ))}
        </div>

      </div>

      {/* ================= ABOUT ================= */}
      <div className="border p-4 rounded-xl shadow-sm">
        <h1 className="font-semibold mb-3">About</h1>
        <div className="space-y-2 text-sm text-gray-600">
          <p>📞 {doctordetails?.phone_number}</p>
          <p>📧 {doctordetails?.email}</p>
          <p>📍 {doctordetails?.location}</p>
          <p>🩸 {doctordetails?.blood_group}</p>
          <p>🎓 {`${doctordetails?.exp} + Years`}</p>

        </div>

      </div>

      {/* ================= BIO ================= */}
      <div className="col-span-2 border p-4 rounded-xl shadow-sm">
        <h1 className="font-semibold mb-2">Bio</h1>
        <p className="text-sm text-gray-600">
          {doctordetails?.bio}
        </p>
      </div>

      {/* ================= EDUCATION ================= */}
      <div className="col-span-3 border p-4 rounded-xl shadow-sm">

        <h1 className="font-semibold mb-3">Education</h1>

        <div className="border-l pl-4 space-y-3 text-sm">
          {doctordetails?.education.map((item:any,index:any) => (
            <div key={index}>
              <p className="font-medium">{item.university}</p>
              <p className="text-gray-500">{item?.degree} {`(${item.from} - ${item.to})`}</p>
            </div>

          ))}
        </div>

      </div>

      {/* ================= AWARDS ================= */}
      <div className="col-span-3 border p-4 rounded-xl shadow-sm">

        <h1 className="font-semibold mb-3">Awards & Recognition</h1>

        <div className="space-y-3">
          {doctordetails?.award.map((award:any,index:any) => (
            <div className="flex gap-3" key={index}>
              <span>🏆</span>
              <div>
                <p className="text-sm font-medium">{`${award.name} (${award.from})`}</p>
                <p className="text-xs text-gray-500">
                  Excellence in patient care and cardiac treatment.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= CERTIFICATIONS ================= */}
      <div className="col-span-3 border p-4 rounded-xl shadow-sm">

        <h1 className="font-semibold mb-3">Certifications</h1>

        <div className="space-y-3">
          {doctordetails?.certification.map((certifi:any,index:any) => (
            <div className="flex gap-3" key={index}>
              <span>🎓</span>
              <div>
                <p className="text-sm font-medium">{certifi.name}</p>
                <p className="text-xs text-gray-500">
                  American Board of Internal Medicine (ABIM)
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>

  )
};

export default page;
