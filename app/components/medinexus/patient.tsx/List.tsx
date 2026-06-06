"use client"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Table from "../Table";
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
          href: (item) => `/patients/view`,
        },
        {
          label: "Edit",
          icon: "✏️",
          href: (item) => `/patients/createpatients?userId=1`,
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