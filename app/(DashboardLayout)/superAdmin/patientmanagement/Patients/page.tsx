"use client"
import PatientCards from "../../../../components/cutom/cards/users/PatientCards"
import Filter from "../../../../components/cutom/Filter";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Exportbtn from "../../../../components/cutom/Exportbtn"
import WindowIcon from "@mui/icons-material/Window";
import { useState } from "react";
import { Input } from "../../../../components/ui/input";
import Grid from "../../../../components/cutom/patient.tsx/Grid";
import List from "../../../../components/cutom/patient.tsx/List";
import Link from 'next/link'



const page = () => {

    const [switchViewwise, setswitchView] = useState("list");
    function switchView(viewaction) {
        setswitchView(viewaction);
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
                    {switchViewwise == 'list' ? (

                        <Exportbtn />
                    ) : (
                        <Filter />
                    )}
                    <div className="view_wise flex items-center space-x-4">
                        <FormatListBulletedIcon onClick={() => switchView("list")} />
                        <WindowIcon onClick={() => switchView("grid")} />
                    </div>

                    <Link href={"/superAdmin/patientmanagement/createpatients"}>
                        <button className="bg-[#14967f] text-white p-2 rounded">
                            New Patient
                        </button>
                    </Link>

                </div>
            </div>



            {switchViewwise == 'list' ? (


                <div className="flex justify-between">
                    <div>
                        <Input type="text" placeholder="Search" className="w-96 h-9 bg-white rounded shadow" />
                    </div>

                    <div className="flex space-x-4">

                        <Filter />
                        <div className="bg-white p-2 h-fit font-semibold shadow">
                            <select >
                                <option>Sort By:Recent</option>
                                <option>Recent</option>
                                <option>Oldest</option>
                            </select>
                        </div>

                    </div>
                </div>

            ) : ""}
            <div>
                {switchViewwise == "grid" ? (<Grid />) : (<List />)}
            </div>

        </div>


    )
}


export default page