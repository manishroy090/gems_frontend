"use client";
import Filter from "@/components/medinexus/Filter";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Exportbtn from "@/components/medinexus/Exportbtn";
import { Input } from "@/components/medinexus/input";
import Grid from "@/components/medinexus/patient.tsx/Grid";
import WindowIcon from "@mui/icons-material/Window";
import { useCallback, useEffect, useState } from "react";
import List from "@/components/medinexus/patient.tsx/List";
import Link from "next/link";
import { getAllPatient,excelExport } from "@services/Patients";
import Datepicker from "@/components/medinexus/Datepicker";
import SortBy from "@/components/medinexus/SortBy";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import CustomDatePicker from "@/components/medinexus/CustomDatePicker";
import { getAllPatientStatus } from "@/services/Config";
import { getAllDoctor } from "@/services/Doctor";

const page = () => {
  const [switchViewwise, setswitchView] = useState<String>("list");
  const [patients, setPatients] = useState([]);
  const params = useSearchParams();
  const patientId = params.get("userId");
  const [patientsStatus, setPatientStatus] = useState();
  const [doctors, setDoctors] = useState();

  interface filter {
    search: null | string;
    filters: null | string;
    dateRange: {
      key: string | null;
      from: string | null;
      to: string | null;
    };
    sort: {
      key: string | null;
      order: string | null;
    };
  }

  const [query, setquery] = useState<filter>({
    search: null,
    filters: null,
    dateRange: { key: null, from: null, to: null },
    sort: { key: null, order: null },
  });

  function switchView(viewaction: String) {
    setswitchView(viewaction);
  }

  useEffect(() => {
    const getAllPatients = async () => {
      const result = await getAllPatient();
      setPatients(result);
    };

    const getAllConfig = async () => {
      const result = await getAllPatientStatus();
      const alldoctors = await getAllDoctor();
      setPatientStatus(result);
      setDoctors(alldoctors);
    };
    getAllConfig();
    getAllPatients();
  }, []);

  const handleFreeSearch = (e) => {
    setquery((filterValue) => ({
      ...filterValue,
      search: e.target.value,
    }));
  };

  // const handleDateFilter = (date) => {
  //   const customdate = { key: "created_at", from: date.from, to: date.to };
  //   setquery((filterValue) => ({
  //     ...filterValue,
  //     dateRange: customdate,
  //   }));
  // };

  const handleShorting = (value) => {
    setquery((filterValue) => ({
      ...filterValue,
      sort: { key: "id", order: value },
    }));
  };

  const { register, handleSubmit, control } = useForm();

  const onSubmit: SubmitHandler = (data) => {
    setquery((filterValue) => ({
      ...filterValue,
      filters: data,
    }));
  };

    const handleExport = async () =>{
      const blob = await excelExport();

      return blob;
    }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center blorder border-b pb-4">
        <div className="flex space-x-4 ">
          <div>
            <h1>Patient List</h1>
          </div>

          <span className="border border-blue-600 p-1 rounded bg-blue-100">
            Total Patients :565
          </span>
        </div>
        <div className="flex space-x-4">
          {switchViewwise == "list" ? (
            <Exportbtn handleExport={handleExport} />
          ) : (
            <Filter>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-1 mt-2">
                  <label>Patients</label>
                  <select
                    className="w-full border rounded-md h-10 px-3"
                    {...register("name")}
                  >
                    <option value="">Select Doctors</option>
                    {patients?.map((patient: any) => (
                      <option key={patient.id} value={patient.name}>
                        {patient.name}
                      </option>
                    ))}
                  </select>{" "}
                </div>

                <div className="flex flex-col space-y-1 mt-2">
                  <label>Doctors</label>
                  <select
                    className="w-full border rounded-md h-10 px-3"
                    {...register("primary_doctor")}
                  >
                    <option value="">Select Doctors</option>
                    {doctors?.map((doctor: any) => (
                      <option key={doctor.id} value={doctor.name}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>{" "}
                </div>
                {/* <div className="flex flex-col space-y-1">
                  <label>Last Visit</label>
                  <Controller
                    name="last_visit"
                    control={control}
                    render={({ field }) => (
                      <CustomDatePicker
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div> */}
                <div className="flex flex-col space-y-1 mt-2">
                  <label>Status</label>
                  <select
                    className="w-full border rounded-md h-10 px-3"
                    {...register("status")}
                  >
                    <option value="">Select Doctors</option>
                    {patientsStatus?.map((patientstatus: any) => (
                      <option
                        key={patientstatus.id}
                        value={patientstatus.title}
                      >
                        {patientstatus.title}
                      </option>
                    ))}
                  </select>{" "}
                </div>

                <div className="flex justify-end pt-4 space-x-4">
                  <button className="bg-red-600 text-white p-1 rounded px-2">
                    Cancel
                  </button>
                  <button
                    className="bg-[#14967f] text-white px-2 rounded"
                    type="submit"
                  >
                    Filter
                  </button>
                </div>
              </form>
            </Filter>
          )}
          <div className="view_wise flex items-center space-x-4">
            <FormatListBulletedIcon onClick={() => switchView("list")} />
            <WindowIcon onClick={() => switchView("grid")} />
          </div>
        </div>
      </div>

      {switchViewwise == "list" && (
        <div className="flex justify-between">
          <div className="flex space-x-8">
            <Input
              onChange={handleFreeSearch}
              type="text"
              placeholder="Search"
              className="w-96 h-9 bg-white rounded shadow"
            />

            {/* //use it when the appointment module done */}
            {/* <Datepicker onChange={handleDateFilter} /> */}
            <SortBy handleShorting={handleShorting} />
          </div>

          <div className="flex space-x-4">
            <Link href={"/patients/createpatients"}>
              <button className="bg-[#14967f] text-white p-2 rounded">
                New Patient
              </button>
            </Link>
          </div>
        </div>
      )}
      <div>
        {switchViewwise == "grid" ? (
          <Grid data={patients} query={query} />
        ) : (
          <List data={patients} query={query} />
        )}
      </div>
    </div>
  );
};

export default page;
