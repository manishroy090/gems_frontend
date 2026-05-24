"use client"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Table from "../../cutom/Table";
import { useEffect, useState } from "react";
import Link from 'next/link'
import Badge from '@mui/material/Badge';
import { useRouter } from 'next/navigation';


const List = ({ data }) => {

  const router = useRouter();

  const [page, setPage] = useState(1);
 
  const edit = async (doctorId)=>{
    
    router.push(`/superAdmin/doctormanagement/adddoctor/?doctor_id=${doctorId}`);

  }

  const deleteDoctor = async () =>{

  }



  return (
    <div>

      <Table data={data}
        showaction={true}
        actionlist={[
          {
            label: "View",
            icon: "👁️",
            href: (item) =>
              `/superAdmin/doctormanagement/doctors/view/${item.id}`,
          },

          {
            label: "Edit",
            icon: "✏️",
            onClick: (item) => edit(item.id),
          },

          {
            label: "Delete",
            icon: "🗑️",
            confirm: true,
            onClick: (item) => deleteDoctor(item.id),
          },
        ]}

        columnRenderers={{
          status: (value) => {
            if (value === "Available") {
              return <Badge className="bg-yellow-100 text-yellow-700 p-2 rounded">Available</Badge>;
            }
            if (value === "On Leave") {
              return <Badge className="bg-yellow-100 text-yellow-700 p-2 rounded">On Leave</Badge>;
            }
            if (value === "Busy") {
              return <Badge className="bg-green-100 text-green-700 p-2 rounded">Busy</Badge>;
            }
            return <Badge className="bg-blue-100 text-blue-700 p-2 rounded">Under Treatment</Badge>;
          }
        }}

      />
    </div>

  )
}


export default List;