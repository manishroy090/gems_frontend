
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import DuoIcon from '@mui/icons-material/Duo';


const page = () => {

    return (
        <div className="grid grid-cols-4 gap-4">

            <div className="bg-white col-start-1 col-end-5 p-4">


                <div className="flex justify-between">
                    <div className='flex space-x-4'>
                        <div className=' w-40 h-32 '>
                            <img
                                src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                className='w-full h-full object-cover object-center'
                                alt='preview'
                            />
                        </div>

                        <div className="details flex flex-col justify-center ">
                            <div className="flex flex-col space-y-2">
                                <span>#PT0025</span>
                                <span>Alberto Ripley</span>
                                <span>4150 Hiney Road, Las Vegas, NV 89109</span>
                            </div>

                            <div className='flex space-x-4'>

                                <div className='flex space-x-4'>
                                    <div>
                                        <LocalPhoneIcon />
                                    </div>

                                    <span>Phone</span>
                                    <span>
                                        +1 54546 45648</span>

                                </div>


                                <div className='flex space-x-4'>
                                    <div>
                                        <LocalPhoneIcon />
                                    </div>

                                    <span>Last Visited</span>
                                    <span>
                                        +1 54546 45648</span>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-4'>

                        <div className='action flex space-x-6'>

                            <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                                <LocalPhoneIcon className="text-black" />
                            </div>
                            <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                                <MapsUgcIcon className="text-black" />
                            </div>
                            <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                                <DuoIcon className="text-black" />
                            </div>

                        </div>

                        <button className='bg-blue-600 text-white p-1 rounded'><CalendarMonthIcon /> <span>Book Appointment</span></button>
                    </div>

                </div>
            </div>


            <div className="bg-white col-start-1 col-end-3 p-4 ">
                <h1 className='border-b'>About</h1>

                <div className='grid grid-cols-2 gap-4  py-6 f'>

                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>


                            <span>DOB</span>
                            <span>25 Jan 1990</span>

                        </div>
                    </div>


                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>
                            <span>Blood Group</span>
                            <span>25 Jan 1990</span>

                        </div>
                    </div>



                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>
                            <span>Gender</span>
                            <span>Male</span>

                        </div>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>
                            <span>Email</span>
                            <span>manishkuyadav090@gmail.com</span>

                        </div>
                    </div>
                </div>

            </div>


            <div className="bg-white col-start-3 col-end-5 py-4 px-4">
                <h1 className='border-b'>Vital Signs</h1>

                <div className='grid grid-cols-3 gap-4  py-6 f'>

                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>


                            <span>Blood Pressure</span>
                            <span>100/67 mmHg</span>

                        </div>
                    </div>


                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>
                            <span>Heart Rate</span>
                            <span>89 Bpm</span>

                        </div>
                    </div>



                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>
                            <span>SPO2</span>
                            <span>98 %</span>

                        </div>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>
                            <span>Temperature</span>
                            <span>101 C</span>

                        </div>



                    </div>

                    <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>
                            <span>Respiratory Rate</span>
                            <span>24 rpm
                            </span>

                        </div>



                    </div>

                     <div className='flex items-center space-x-4'>
                        <div className="icons border border-white/30 rounded-full p-2 bg-slate-100 flex items-center justify-center">
                            <InsertDriveFileIcon className="text-black" />
                        </div>

                        <div className='flex flex-col'>
                            <span>Weight</span>
                            <span>100 kg</span>

                        </div>



                    </div>
                </div>

            </div>





            <div className="bg-white col-start-1 col-end-5">
                <h1>Table</h1>
            </div>





        </div>
    )
}


export default page