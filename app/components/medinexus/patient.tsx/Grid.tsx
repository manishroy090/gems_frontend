"use client";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PatientCards from "../cards/users/PatientCards";
import { useEffect, useState } from "react";
const Grid = ({ data=[] ,query}) => {
  const [patients, setPatients] = useState();

  useEffect(()=>{
    setPatients(data)
  },[data]);


 

  useEffect(()=>{
    const filtersValue = query?.filters;
     if(filtersValue){
      console.log("filtersValue",filtersValue);
       const filterPatients =  patients?.filter((patient)=>patient?.name == filtersValue?.name || patient?.status == filtersValue?.status || patient.primary_doctor == filtersValue?.primary_doctor);
     setPatients(filterPatients);
     }
   
  },[query])


  return (
    <div className="grid grid-cols-3 gap-4">
      {patients?.map((item,index) => (
        <PatientCards patientDetails={item}  key={index}/>
      ))}
    </div>
  );
};

export default Grid;
