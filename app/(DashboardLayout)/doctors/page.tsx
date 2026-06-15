"use client";
import Filter from "@/components/medinexus/Filter";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WindowIcon from "@mui/icons-material/Window";
import { useEffect, useState } from "react";
import Grid from "@/components/medinexus/doctors/Grid";
import List from "@/components/medinexus/doctors/List";
import Link from "next/link";
import { getAllDoctor } from "@services/Doctor";
import { Input } from "@/components/medinexus/input";
import CustomDatePicker from "@/components/medinexus/CustomDatePicker";
import {
  getHospitalDepartments,
  getAllCountries,
  getAllBloodGroup,
  getAllDoctorStatus
} from "@services/Config";
import { use } from "apexcharts";
import { Ifilter } from "@/interface/IFilter";
import { SubmitHandler, useForm ,Controller} from "react-hook-form";

export default function Page() {

  const [switchViewwise, setswitchView] = useState("grid");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [departments, setDepartments] = useState([]);
  const [doctorStatus, setDoctorStatus] = useState([]);
  const [query ,setquery] = useState<Ifilter>({
    search: null,
    filters: null,
    dateRange: { key: null, from: null, to: null },
    sort: { key: null, order: null },
  })
  


  function switchView(viewaction) {
    setswitchView(viewaction);
  }

  useEffect(() => {
    const getAllDoctors = async () => {
      const doctors = await getAllDoctor();
      setLoading(false);
      setDoctors(doctors);
    };
    getAllDoctors();
  }, []);


  useEffect(()=>{
    const getfilterdate = async () =>{
      const getAllDepartment = await getHospitalDepartments();
      const doctorStatus = await getAllDoctorStatus();
      setDepartments(getAllDepartment);
      setDoctorStatus(doctorStatus);   
    }
    getfilterdate();
  },[])




   const {register, handleSubmit,control} = useForm();
   const onSubmit:SubmitHandler = (data)=>{
    setquery((filterValue)=>({
      ...filterValue,
      filters:data
    }))
   }


   useEffect(()=>{
    console.log("query",query);
   },[query])

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
          
          <Filter>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1 mt-2">
              <label>Doctors</label>
              <select className="w-full border rounded-md h-10 px-3" {...register("name")}>
                <option value="">Select Doctors</option>
                {doctors?.map((doctor: any) => (
                  <option
                    key={doctor.doctor_id}
                    value={doctor.name}
                  >{doctor.name}</option>
                ))}
              </select>{" "}
            </div>
            <div className="flex flex-col space-y-1">
              <label>Designation</label>
              <Input type="text" className="border border-black rounded py-1" {...register("designation")} />
            </div>
            <div className="flex flex-col space-y-1">
              <label>Department</label>
                <select
                {...register("department")} 
                className="w-full border rounded-md h-10 px-3"
              >
                <option value="">Select Department</option>

                {departments?.map((item: any) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="flex flex-col space-y-1">
              <label>Date</label>
                     <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                  <CustomDatePicker
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div> */}

            <div className="flex flex-col space-y-1">
              <label>Amount</label>
              <Input 
              type="number" 
              className="border border-black rounded py-1" 
               {...register("fees")} 
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label>Status</label>
                    <select
                className="w-full border rounded-md h-10 px-3"
                 {...register("status")} 
              >
                <option value="">Select Status</option>
                {doctorStatus?.map((status: any) => (
                  <option key={status.id} value={status.title}>
                    {status.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end pt-4 space-x-4">
              <button className="bg-red-600 text-white p-1 rounded px-2">
                Cancel
              </button>
              <button className="bg-[#14967f] text-white px-2 rounded" type="submit">
                Filter
              </button>
            </div>
            </form>
          </Filter>

          <div className="view_wise flex items-center space-x-4">
            <FormatListBulletedIcon onClick={() => switchView("list")} />
            <WindowIcon onClick={() => switchView("grid")} />
          </div>

          <Link href={"/doctors/adddoctor"}>
            <button className="bg-[#14967f] text-white p-2 rounded">
              New Doctor
            </button>
          </Link>
        </div>
      </div>

      <div className="content">
        {switchViewwise == "grid" ? (
          <Grid data={doctors} query={query}  />
        ) : (
          <List data={doctors} query={query} />
        )}
      </div>
    </div>
  );
}
