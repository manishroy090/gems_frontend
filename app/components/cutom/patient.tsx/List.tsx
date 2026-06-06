"use client"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Table from "../../cutom/Table";
import { useState } from "react";
import Link from 'next/link'


const List = ({data}) => {





  return (
    <div>

      <Table 
      data={data}
      showaction={true} 
      actionlist={[
        {
          label: "View",
          icon: "👁️",
          href: (item) => `/superAdmin/patientmanagement/patientsdetails`,
        },
        {
          label: "Edit",
          icon: "✏️",
          href: (item) => `/superAdmin/patientmanagement/createpatients?userId=1`,
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