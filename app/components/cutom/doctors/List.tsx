"use client"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Table from "../../cutom/Table";
import { useState } from "react";
import Link from 'next/link'


const List = () => {




  const doctorsList = [
    {
      name: "Dr. Anil Sharma",
      designation: "Senior Consultant",
      department: "Cardiology",
      phone: "+977-9801234567",
      email: "anil.sharma@hospital.com",
      fees: 1200,
      status: "Available"
    },
    {
      name: "Dr. Maya Joshi",
      designation: "Consultant",
      department: "Dermatology",
      phone: "+977-9812345678",
      email: "maya.joshi@hospital.com",
      fees: 800,
      status: "On Leave"
    },
    {
      name: "Dr. Ramesh Khatri",
      designation: "Surgeon",
      department: "Orthopedics",
      phone: "+977-9823456789",
      email: "ramesh.khatri@hospital.com",
      fees: 1500,
      status: "Available"
    },
    {
      name: "Dr. Sita Thapa",
      designation: "General Physician",
      department: "General Medicine",
      phone: "+977-9834567890",
      email: "sita.thapa@hospital.com",
      fees: 600,
      status: "Busy"
    },
    {
      name: "Dr. Sita Thapa",
      designation: "General Physician",
      department: "General Medicine",
      phone: "+977-9834567890",
      email: "sita.thapa@hospital.com",
      fees: 600,
      status: "Busy"
    }
    ,
    {
      name: "Dr. Sita Thapa",
      designation: "General Physician",
      department: "General Medicine",
      phone: "+977-9834567890",
      email: "sita.thapa@hospital.com",
      fees: 600,
      status: "Busy"
    }
    ,
    {
      name: "Dr. Sita Thapa",
      designation: "General Physician",
      department: "General Medicine",
      phone: "+977-9834567890",
      email: "sita.thapa@hospital.com",
      fees: 600,
      status: "Busy"
    }
    , {
      name: "Dr. Sita Thapa",
      designation: "General Physician",
      department: "General Medicine",
      phone: "+977-9834567890",
      email: "sita.thapa@hospital.com",
      fees: 600,
      status: "Busy"
    }
    , {
      name: "Dr. Sita Thapa",
      designation: "General Physician",
      department: "General Medicine",
      phone: "+977-9834567890",
      email: "sita.thapa@hospital.com",
      fees: 600,
      status: "Busy"
    }
    , {
      name: "Dr. Sita Thapa",
      designation: "General Physician",
      department: "General Medicine",
      phone: "+977-9834567890",
      email: "sita.thapa@hospital.com",
      fees: 600,
      status: "Busy"
    }

  ];


  return (
    <div>

      <Table data={doctorsList} actionlist={[
        {
          label: "View",
          icon: "👁️",
          href: (item) => `/superAdmin/doctormanagement/doctordetails`,
        },
        {
          label: "Edit",
          icon: "✏️",
          href: (item) => `/superAdmin/doctormanagement/doctordetails`,
        },
        {
          label: "Delete",
          onClick: (item) => console.log("delete", item),
        },
      ]} />
    </div>

  )
}


export default List;