"use client"
import Filter from "@/components/medinexus/Filter";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WindowIcon from "@mui/icons-material/Window";
import { useEffect, useState } from "react";
import Grid from "@/components/medinexus/doctors/Grid";
import List from "@/components/medinexus/doctors/List";
import Link from 'next/link'
import { getAllDoctor } from "@services/Doctor";


export default function Page() {

  const [switchViewwise ,setswitchView] = useState("grid");
  const [doctors ,setDoctors] = useState([]);
  const [loading ,setLoading] = useState(true);

  function switchView (viewaction) {
    setswitchView(viewaction);
  }


  useEffect(()=>{
    const getAllDoctors = async() =>{
        const doctors = await getAllDoctor();
        setLoading(false)
        setDoctors(doctors);

    }
    getAllDoctors();
  },[])


  return (

    <div className="flex flex-col space-y-10">
      <div className="doctor_header flex justify-between w-full bg-yellow-200 px-4 py-3 text-gray-800">
        {/* Left side */}
        <div className="doctor_heading flex space-x-4 items-center">
          <h1 className="text-lg font-semibold">Doctor {switchViewwise}</h1>
          <span className="text-sm">Total Doctors: 565</span>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-center space-x-4">

          <Filter />

          <div className="view_wise flex items-center space-x-4">
            <FormatListBulletedIcon  onClick={()=>switchView("list")} />
            <WindowIcon onClick={()=>switchView("grid")} />
          </div>

           <Link href={"/doctors/adddoctor"}>
          <button className="bg-[#14967f] text-white p-2 rounded">
            New Doctor
          </button>
          </Link>
        </div>


      </div>

      <div className="content">
        { switchViewwise=="grid" ? (<Grid data={doctors}/>) : (<List data={doctors}/>) }
        
      </div>
    </div>
  );
}