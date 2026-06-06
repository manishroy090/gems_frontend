"use client";

import React, { useEffect, useState } from "react";
import { getAllCountries  } from "../../services/Config";
import { getHospitalDepartments ,getAllBloodGroup,getAllModules,getAllSubModule,getAllAvailableTest} from "../../services/Hoshpital";
import { getAllPatientStatus } from "../../services/Patients";
import Table from "../../components/medinexus/Table";
import { use } from "apexcharts";

// const masterData = {
//   availableTests: ["CBC", "Blood Sugar", "MRI Scan", "X-Ray", "Lipid Profile"],
//   bloodGroups: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
//   countries: ["Nepal", "India", "USA", "UK", "UAE", "Canada"],
//   departments: ["Cardiology", "Neurology", "Orthopedics", "Pathology", "ENT"],
//   modules: ["EMR", "Billing", "Lab", "Pharmacy", "Appointments"],
//   submodules: ["Reports", "Analytics", "Settings", "Notifications"],
//   patientStatus: ["Active", "Discharged", "Critical", "Under Observation"],
// };

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
  const [masterData,setMasterData] = useState({});
  const [data, setData] = useState([]);
  //  const data = masterData[activeTab] || [];


  useEffect(()=>{

    const getMasterData = async () =>{
      const countries = await  getAllCountries();
      const hospitalDepartment = await getHospitalDepartments();
      const getAllBloodGroups = await getAllBloodGroup();
      const modules = await getAllModules();
      const subModules = await getAllSubModule();
      const availableTests = await getAllAvailableTest();
      const patientStatus = await getAllPatientStatus();


      setMasterData({
        countries:countries,
        departments:hospitalDepartment,
        bloodGroups:getAllBloodGroups,
        modules:modules,
        submodules:subModules,
        availableTests:availableTests,
        patientStatus:patientStatus
      })
      // console.log("countries",countries);
    }
    getMasterData();
  },[])


  useEffect(()=>{

    const data =  masterData[activeTab];
    setData(data);

    // console.log("data",data);
    // console.log(activeTab);

  },[activeTab])
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

        <Table data={data}/>

      

      </div>
    </div>
  );
};

export default Page;