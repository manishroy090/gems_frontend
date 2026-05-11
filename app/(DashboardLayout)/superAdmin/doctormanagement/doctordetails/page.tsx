"use client";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AccessibleIcon from '@mui/icons-material/Accessible';
import FemaleIcon from '@mui/icons-material/Female';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { useState } from "react";


const availabilityData = {
    Monday: ['11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM'],
    Tuesday: ['11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM'],
    Wednesday: ['11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM'],
    Thursday: ['11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM'],
    Friday: ['11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM', '11:30AM -12:30PM'],
};

const page = () => {

    const [activeDay, setActiveDay] = useState("Tuesday");


    return (

        <div className='grid grid-cols-3 gap-4'>

            <div className=" flex justify-between bg-white p-4 items-center col-start-1 col-end-4">

                <div className="flex space-x-8 items-center">
                    <div className='bg-red-600 w-40 h-32'>
                        <img
                            src='https://as2.ftcdn.net/v2/jpg/04/75/00/71/1000_F_475007199_FLk7bivHPRIjtiylrMeA4027ehCQWurq.jpg'
                            className='w-full h-full object-cover object-center'
                            alt='preview'
                        />
                    </div>

                    <div className="doctor_details">

                        <div className="doctor_bio flex flex-col space-x-4 ">


                            <div className="flex space-x-4 items-center">
                                <span className="font-semibold text-xl">Dr . John Smit</span>
                                <span>Cardiology</span>
                            </div>

                            <span>MBBS, MD cardiology</span>

                        </div>

                        <div className="flex  space-x-4">
                            <span>Clinic : Downtown Medical clinic</span>
                            <span>Available</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-left space-y-2">
                    <span className="font-semibold text-gray-600">Consultation Charge</span>
                    <span><span className="font-semibold text-xl">$499</span>/30min</span>
                    <button className='bg-blue-600 text-white p-1 rounded'><CalendarMonthIcon /> <span>Book Appointment</span></button>
                </div>
            </div>

            <div className="availability bg-white p-4  col-start-1 col-end-3">
                <h1 className="mb-4 text-xl font-semibold">Availability</h1>

                {/* Tabs */}
                <ul className="flex flex-wrap -mb-px border-b">
                    {Object.keys(availabilityData).map((day) => (
                        <li key={day} className="me-2">
                            <button
                                onClick={() => setActiveDay(day)}
                                className={`inline-block p-4 border-b-2 rounded-t-base transition-colors ${activeDay === day
                                    ? "text-fg-brand border-brand"
                                    : "border-transparent hover:text-fg-brand hover:border-brand"
                                    }`}
                            >
                                {day}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Content */}
                <div className="mt-4 p-4 ">
                    <h2 className="font-medium">{activeDay}</h2>
                    <div className='flex space-x-8'>
                        {availabilityData[activeDay].map((item) => (


                            <p className='bg-slate-100 px-4 py-1'>{item}</p>

                        ))}
                    </div>
                </div>
            </div>

            <div className="availability bg-white p-4  col-start-3 col-end-3">
                <h1>About</h1>

                <div className='details flex flex-col space-y-4'>

                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div>
                            <span>Medical Liscence Number</span>
                            <span>ML566659898</span>

                        </div>


                    </div>
                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <LocalPhoneIcon className="text-black" />
                        </div>

                        <div>
                            <span>Phone Number</span>
                            <span>+1 54546 45648</span>

                        </div>


                    </div>

                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <EmailIcon className="text-black" />
                        </div>

                        <div>
                            <span>Email Address</span>
                            <span>john@example.com</span>

                        </div>


                    </div>


                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <LocationPinIcon className="text-black" />
                        </div>

                        <div>
                            <span>Location</span>
                            <span>4150 Hiney Road, Las Vegas, NV 89109</span>

                        </div>


                    </div>



                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <CalendarMonthIcon className="text-black" />
                        </div>

                        <div>
                            <span>DOB</span>
                            <span>25 Jan 1990</span>

                        </div>


                    </div>



                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <BloodtypeIcon className="text-black" />
                        </div>

                        <div>
                            <span>Blood Group</span>
                            <span>O +ve</span>

                        </div>


                    </div>

                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <AccessibleIcon className="text-black" />
                        </div>

                        <div>
                            <span>Year of Experience</span>
                            <span>15+ Years</span>

                        </div>


                    </div>


                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <FemaleIcon className="text-black" />
                        </div>

                        <div>
                            <span>Gender</span>
                            <span>Male</span>

                        </div>


                    </div>


                </div>

            </div>

            <div className="bio bg-white p-4  col-start-1 col-end-3">
                <h1>Short Bio</h1>

                <p>Dr. John Smith has been practicing family medicine for over 10 years. She has extensive experience in managing chronic illnesses, preventive care, and treating a wide range of medical conditions for patients of all ages.</p>

            </div>


            <div className="bio bg-white p-6 col-start-1 col-end-3 rounded-xl shadow-sm">
                <h1 className="text-xl font-semibold mb-6">Education Information</h1>

                <div className="relative border-l-2 border-gray-300 ml-3 space-y-8">

                    {/* Timeline Item */}
                    <div className="relative pl-8">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-800">
                                Boston Medicine Institution - MD
                            </span>

                            <span className="text-sm text-gray-500">
                                25 May 1990 - 29 Jan 1992
                            </span>
                        </div>
                    </div>

                    {/* Timeline Item */}
                    <div className="relative pl-8">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white "></div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-800">
                                Boston Medicine Institution - MD
                            </span>

                            <span className="text-sm text-gray-500">
                                25 May 1990 - 29 Jan 1992
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="award-recognition bg-white p-6 col-start-1 col-end-3 rounded-xl shadow-sm flex flex-col space-y-4">
                <h1>Awards & Recognition</h1>

                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>

                        <div className='flex space-x-4'>
                            <EmojiEventsIcon/>
                            <span className='font-semibold text-sm'>Top Doctor Award (2023)</span>
                        </div>

                        <span>Demonstrates mastery of comprehensive, ongoing care for individuals and families, across all ages and genders.</span>

                    </div>

                     <div className='flex flex-col'>

                        <div className='flex space-x-4'>
                            <EmojiEventsIcon/>
                            <span className='font-semibold text-sm'>Top Doctor Award (2023)</span>
                        </div>

                        <span>Demonstrates mastery of comprehensive, ongoing care for individuals and families, across all ages and genders.</span>

                    </div>

                </div>


            </div>





        </div>
    )
}


export default page