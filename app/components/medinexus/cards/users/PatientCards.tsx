
import EventIcon from '@mui/icons-material/Event';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoomIcon from '@mui/icons-material/Room';
import { useEffect } from 'react';
const PatientCards = ({patientDetails}) =>{


   

    return (
          <div className="patient flex justify-between p-4 bg-white ">

                <div className='flex flex-col space-y-4'>

                    <div className='flex items-center space-x-4'>

                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src={patientDetails?.image ?  `http://localhost:8080/uploads/doctors/${patientDetails?.image}` : patientDetails?.gender=='male' ? '/hrm_image/male.png' : '/hrm_image/female.jpg'}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <h1>{patientDetails?.name}</h1>
                            <span>{`${patientDetails?.age}, ${patientDetails?.gender}`}</span>
                        </div>

                    </div>

                    <div className='flex flex-col space-y-2'>
                        <div className='flex space-x-4'>
                    <EventIcon style={{ fontSize: "16px" }} />
                            <span>{patientDetails?.last_visit}</span>

                        </div>

                        <div className='flex space-x-4'>
                            <RoomIcon style={{ fontSize: "16px" }}  />

                            <span>{patientDetails?.location}</span>

                        </div>


                    </div>

                </div>


                <div>
                    <div className='border p-1 rounded-md'>

                        <MoreVertIcon />
                    </div>
                </div>


            </div>
    )
}

export default PatientCards;