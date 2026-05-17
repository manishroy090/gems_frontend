"use client"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Table from "../../cutom/Table";
import { useState } from "react";
import Link from 'next/link'


const List = () => {




  const patientsList = [
    {
      patientName: "Aarav Shrestha",
      age: 34,
      sex: "Male",
      phone: "+977-9801112233",
      address: "Kathmandu, Nepal",
      lastVisit: "2026-05-10",
      status: "Under Treatment"
    },
    {
      patientName: "Sushma KC",
      age: 28,
      sex: "Female",
      phone: "+977-9811223344",
      address: "Lalitpur, Nepal",
      lastVisit: "2026-05-08",
      status: "Recovered"
    },
    {
      patientName: "Rajan Adhikari",
      age: 45,
      sex: "Male",
      phone: "+977-9822334455",
      address: "Bhaktapur, Nepal",
      lastVisit: "2026-04-30",
      status: "Follow-up Needed"
    },
    {
      patientName: "Nisha Gurung",
      age: 19,
      sex: "Female",
      phone: "+977-9833445566",
      address: "Pokhara, Nepal",
      lastVisit: "2026-05-12",
      status: "Admitted"
    },
    {
      patientName: "Dipendra Rai",
      age: 52,
      sex: "Male",
      phone: "+977-9844556677",
      address: "Chitwan, Nepal",
      lastVisit: "2026-05-01",
      status: "Critical"
    }
  ];


  return (
    <div>

      <Table data={patientsList} actionlist={[
        {
          label: "View",
          icon: "👁️",
          href: (item) => `/superAdmin/patientmanagement/patientsdetails`,
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