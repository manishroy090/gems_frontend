
"use client";

import React, { useState, useEffect } from "react";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Select } from "../../../../components/ui/select";
const page = () => {

    const [sessions, setSessions] = useState([
        {
            day: "Sunday",
            start: "",
            end: "",
            patients: "",
        },
    ]);

    const addRow = () => {
        setSessions([
            ...sessions,
            {
                day: "",
                start: "",
                end: "",
                patients: "",
            },
        ]);
    };

    const deleteRow = (index) => {
        const updated = sessions.filter((_, i) => i !== index);
        setSessions(updated);
    };

    const handleChange = (index, field, value) => {
        const updated = [...sessions];
        updated[index][field] = value;
        setSessions(updated);
    };

    // ======================= STATES =======================

    const [educations, setEducations] = useState([
        {
            degree: "",
            university: "",
            from: "",
            to: "",
        },
    ]);

    const [awards, setAwards] = useState([
        {
            name: "",
            from: "",
        },
    ]);

    const [certifications, setCertifications] = useState([
        {
            name: "",
            from: "",
        },
    ]);

    // ======================= EDUCATION =======================

    const addEducation = () => {
        setEducations([
            ...educations,
            {
                degree: "",
                university: "",
                from: "",
                to: "",
            },
        ]);
    };

    const deleteEducation = (index) => {
        setEducations(educations.filter((_, i) => i !== index));
    };

    const handleEducationChange = (index, field, value) => {
        const updated = [...educations];
        updated[index][field] = value;
        setEducations(updated);
    };

    // ======================= AWARDS =======================

    const addAward = () => {
        setAwards([
            ...awards,
            {
                name: "",
                from: "",
            },
        ]);
    };

    const deleteAward = (index) => {
        setAwards(awards.filter((_, i) => i !== index));
    };

    const handleAwardChange = (index, field, value) => {
        const updated = [...awards];
        updated[index][field] = value;
        setAwards(updated);
    };

    // ======================= CERTIFICATIONS =======================

    const addCertification = () => {
        setCertifications([
            ...certifications,
            {
                name: "",
                from: "",
            },
        ]);
    };

    const deleteCertification = (index) => {
        setCertifications(certifications.filter((_, i) => i !== index));
    };

    const handleCertificationChange = (index, field, value) => {
        const updated = [...certifications];
        updated[index][field] = value;
        setCertifications(updated);
    };

    return (


        <div className="doctor_form bg-white p-8">

            <h1 className="border-b p-4">New Doctor</h1>

            <div className="p-4">
                <h1>Contact Information</h1>

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Name</Label>
                        <Input />

                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Username</Label>
                        <Input />

                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Phone Number</Label>
                        <Input />

                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email Address</Label>
                        <Input />

                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">DOB</Label>
                        <Input />

                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Year of Experience</Label>
                        <Input />
                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Departments</Label>
                        <Input />
                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Designation</Label>
                        <Input />
                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Medical License Number </Label>
                        <Input />
                    </div>



                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Language Spoken</Label>
                        <Input />
                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Blood Group</Label>
                        <Input />
                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Gender</Label>
                        <Input />
                    </div>


                    <div className="col-start-1 col-end-3">
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Bio</Label>
                        <Textarea />
                    </div>

                    <div className="col-start-1 col-end-3 mt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-lg font-semibold">Session Information</h1>

                            <button
                                type="button"
                                onClick={addRow}
                                className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                            >
                                <AddIcon className="!text-sm" />
                                Add Row
                            </button>
                        </div>

                        <div className="space-y-3">

                            {sessions.map((session, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-5 gap-4 items-end border p-4 rounded-xl"
                                >

                                    {/* Day */}
                                    <div>
                                        <Label className="text-xs font-medium text-gray-500 uppercase">
                                            Day
                                        </Label>

                                        <select
                                            value={session.day}
                                            onChange={(e) =>
                                                handleChange(index, "day", e.target.value)
                                            }
                                            className="w-full border rounded-md h-10 px-3"
                                        >
                                            <option value="">Select Day</option>
                                            <option>Sunday</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                            <option>Saturday</option>
                                        </select>
                                    </div>

                                    {/* Start */}
                                    <div>
                                        <Label className="text-xs font-medium text-gray-500 uppercase">
                                            Start
                                        </Label>

                                        <Input
                                            type="time"
                                            value={session.start}
                                            onChange={(e) =>
                                                handleChange(index, "start", e.target.value)
                                            }
                                        />
                                    </div>

                                    {/* End */}
                                    <div>
                                        <Label className="text-xs font-medium text-gray-500 uppercase">
                                            End
                                        </Label>

                                        <Input
                                            type="time"
                                            value={session.end}
                                            onChange={(e) =>
                                                handleChange(index, "end", e.target.value)
                                            }
                                        />
                                    </div>

                                    {/* Patients */}
                                    <div>
                                        <Label className="text-xs font-medium text-gray-500 uppercase">
                                            Max Patients
                                        </Label>

                                        <Input
                                            type="number"
                                            placeholder="20"
                                            value={session.patients}
                                            onChange={(e) =>
                                                handleChange(index, "patients", e.target.value)
                                            }
                                        />
                                    </div>

                                    {/* Delete */}
                                    {index!=0 ?  
                                 
                                    <button
                                        type="button"
                                        onClick={() => deleteAward(index)}
                                        className="h-10 w-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center"
                                    >
                                        <DeleteIcon className="!text-base" />
                                    </button>
                                    : ""

                                      }
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="col-start-1 col-end-3 mt-8">
                        <h1 className="text-lg font-semibold">Appointment Information</h1>


                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Appointment Type</Label>
                                <Input />

                            </div>

                            <div>
                                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    Accept bookings (in Advance)</Label>
                                <Input />

                            </div>


                            <div>
                                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    Appointment Duration
                                </Label>
                                <Input />

                            </div>


                            <div>
                                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    Consultation Charge

                                </Label>
                                <Input />

                            </div>

                            <div>
                                <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    Max Bookings Per Slot

                                </Label>
                                <Input />

                            </div>

                        </div>


                    </div>


                    <div className="col-start-1 col-end-3 mt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-lg font-semibold">Education Information</h1>

                            <button
                                type="button"
                                onClick={addEducation}
                                className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                            >
                                <AddIcon className="!text-sm" />
                                Add Row
                            </button>
                        </div>

                        <div className="space-y-3">

                            {educations.map((edu, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-5 gap-4 items-end border p-4 rounded-xl"
                                >

                                    <div>
                                        <Label className="text-xs uppercase text-gray-500">
                                            Degree
                                        </Label>

                                        <Input
                                            value={edu.degree}
                                            onChange={(e) =>
                                                handleEducationChange(index, "degree", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-xs uppercase text-gray-500">
                                            University
                                        </Label>

                                        <Input
                                            value={edu.university}
                                            onChange={(e) =>
                                                handleEducationChange(index, "university", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-xs uppercase text-gray-500">
                                            From
                                        </Label>

                                        <Input
                                            type="date"
                                            value={edu.from}
                                            onChange={(e) =>
                                                handleEducationChange(index, "from", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-xs uppercase text-gray-500">
                                            To
                                        </Label>

                                        <Input
                                            type="date"
                                            value={edu.to}
                                            onChange={(e) =>
                                                handleEducationChange(index, "to", e.target.value)
                                            }
                                        />
                                    </div>

                                   {index!=0 ?  
                                 
                                    <button
                                        type="button"
                                        onClick={() => deleteAward(index)}
                                        className="h-10 w-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center"
                                    >
                                        <DeleteIcon className="!text-base" />
                                    </button>
                                    : ""

                                      }
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-start-1 col-end-3 mt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-lg font-semibold">
                                Awards & Recognition
                            </h1>

                            <button
                                type="button"
                                onClick={addAward}
                                className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                            >
                                <AddIcon className="!text-sm" />
                                Add Row
                            </button>
                        </div>

                        <div className="space-y-3">

                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-3 gap-4 items-end border p-4 rounded-xl"
                                >

                                    <div className="col-span-1">
                                        <Label className="text-xs uppercase text-gray-500">
                                            Name
                                        </Label>

                                        <Input
                                            value={award.name}
                                            onChange={(e) =>
                                                handleAwardChange(index, "name", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-xs uppercase text-gray-500">
                                            From
                                        </Label>

                                        <Input
                                            value={award.from}
                                            onChange={(e) =>
                                                handleAwardChange(index, "from", e.target.value)
                                            }
                                        />
                                    </div>


                                   {index!=0 ?  
                                 
                                    <button
                                        type="button"
                                        onClick={() => deleteAward(index)}
                                        className="h-10 w-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center"
                                    >
                                        <DeleteIcon className="!text-base" />
                                    </button>
                                    : ""

                                      }
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="col-start-1 col-end-3 mt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-lg font-semibold">Certifications</h1>

                            <button
                                type="button"
                                onClick={addCertification}
                                className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                            >
                                <AddIcon className="!text-sm" />
                                Add Row
                            </button>
                        </div>

                        <div className="space-y-3">

                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-3 gap-4 items-end border p-4 rounded-xl"
                                >

                                    <div className="col-span-1">
                                        <Label className="text-xs uppercase text-gray-500">
                                            Name
                                        </Label>

                                        <Input
                                            value={cert.name}
                                            onChange={(e) =>
                                                handleCertificationChange(index, "name", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-xs uppercase text-gray-500">
                                            From
                                        </Label>

                                        <Input
                                            value={cert.from}
                                            onChange={(e) =>
                                                handleCertificationChange(index, "from", e.target.value)
                                            }
                                        />
                                    </div>

                                   {index!=0 ?  
                                 
                                    <button
                                        type="button"
                                        onClick={() => deleteAward(index)}
                                        className="h-10 w-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center"
                                    >
                                        <DeleteIcon className="!text-base" />
                                    </button>
                                    : ""

                                      }
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}


export default page