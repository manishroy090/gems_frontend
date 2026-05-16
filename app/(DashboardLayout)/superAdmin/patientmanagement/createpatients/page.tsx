
"use client";
import React, { useState, useEffect } from "react";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Select } from "../../../../components/ui/select";
import { IPatient } from "../../../../interface/Ipatient";
import { Patientschema } from "../../../../schemas/Patient.schema";
import { getAllCountries, getAllBloodGroup } from "../../../../services/Hoshpital";
import { getAllPatientStatus ,createPatient} from "../../../../services/Patients";
import { getAllDoctor } from "../../../../services/Doctor";
import {
    useForm,
    useFieldArray,
    SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const page = () => {


    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Patientschema) });
    const [countries, setCountries] = useState([]);
    const [bloodgroups, setBloodgroups] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [patientStatuses, setPatientStatus] = useState([]);

    const onSubmit: SubmitHandler<IPatient> = async (data) => {
        await createPatient(data);
    };


    const onError = (error: any) => {
        console.log("FORM ERROR", error);
    };

    useEffect(() => {

        const callMasterData = async () => {
            const Countries = await getAllCountries();
            const bloodgroup = await getAllBloodGroup();
            const doctors = await getAllDoctor();
            const patientStatus = await getAllPatientStatus();
            setPatientStatus(patientStatus);
            setBloodgroups(bloodgroup);
            setCountries(Countries);
            setDoctors(doctors);
        }

        callMasterData();

    }, [])

    return (
        <div className="doctor_form bg-white p-8">

            <h1 className="border-b p-4">New Patient</h1>

            <div className="p-4">
                <h1 className="py-4">Patient Information</h1>

                <form onSubmit={handleSubmit(onSubmit, onError)}>

                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">First Name</Label>
                            <Input {...register("firstname")} />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.firstname?.message}
                            </p>

                        </div>


                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Last Name</Label>
                            <Input  {...register("lastname")} />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.lastname?.message}
                            </p>

                        </div>


                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Phone Number</Label>
                            <Input {...register("phonenumber")} />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.phonenumber?.message}
                            </p>

                        </div>


                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email Address</Label>
                            <Input {...register("email")} />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.email?.message}
                            </p>

                        </div>

                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Primary Doctor</Label>
                            <select
                                {...register("primary_doctor")}
                                className="w-full border rounded-md h-10 px-3"
                            >
                                <option value="">Select BloodGroup</option>
                                {doctors?.map((doctor: any) => (
                                    <option key={doctor.doctor_id} value={doctor.doctor_id}>{`${doctor.firstname} ${doctor.lastname}`}</option>
                                ))}

                            </select>
                            <p className="text-xs text-red-500 mt-1">
                                {errors.primary_doctor?.message}
                            </p>

                        </div>

                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">DOB</Label>
                            <Input {...register("dob")} type="date" />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.dob?.message}
                            </p>

                        </div>



                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Gender</Label>

                            <select
                                {...register("gender")}
                                className="w-full border rounded-md h-10 px-3"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>

                            </select>
                            <p className="text-xs text-red-500 mt-1">
                                {errors.gender?.message}
                            </p>

                        </div>


                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Blood Group</Label>
                            <select
                                {...register("bloodgroup")}
                                className="w-full border rounded-md h-10 px-3"
                            >
                                <option value="">Select BloodGroup</option>
                                {bloodgroups?.map((bloodgroup: any) => (
                                    <option key={bloodgroup.id} value={bloodgroup.id}>{bloodgroup.title}</option>
                                ))}

                            </select>
                            <p className="text-xs text-red-500 mt-1">
                                {errors.bloodgroup?.message}
                            </p>

                        </div>

                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Status</Label>
                            <select
                                {...register("status")}
                                className="w-full border rounded-md h-10 px-3"
                            >
                                <option value="">Select Status</option>
                                {patientStatuses?.map((patientStatus: any) => (
                                    <option key={patientStatus.id} value={patientStatus.id}>{patientStatus.title}</option>
                                ))}
                            </select>
                            <p className="text-xs text-red-500 mt-1">
                                {errors.status?.message}
                            </p>

                        </div>



                    </div>


                    <h1 className="py-4">Address Information</h1>
                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Address 1 </Label>
                            <Input  {...register("address_one")} />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.address_one?.message}
                            </p>
                        </div>


                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Address 2 </Label>
                            <Input  {...register("address_two")} />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.address_two?.message}
                            </p>
                        </div>


                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Country</Label>

                            <select
                                {...register("country")}
                                className="w-full border rounded-md h-10 px-3"
                            >
                                <option value="">Select Country</option>
                                {countries?.map((country: any) => (
                                    <option key={country.id} value={country.id}>{country.title}</option>
                                ))}
                            </select>
                            <p className="text-xs text-red-500 mt-1">
                                {errors.country?.message}
                            </p>
                        </div>

                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">State</Label>
                            <Input   {...register("state")} />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.state?.message}
                            </p>
                        </div>

                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">City</Label>
                            <Input  {...register("city")} />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.city?.message}
                            </p>
                        </div>


                        <div>
                            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">PineCode</Label>
                            <Input {...register("pinecode")} />
                            <p className="text-xs text-red-500 mt-1">
                                {errors.pinecode?.message}
                            </p>
                        </div>
                    </div>

                    <button type="submit">Submit</button>

                </form>

            </div>

        </div>
    )
}


export default page