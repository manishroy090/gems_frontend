
import EventIcon from '@mui/icons-material/Event';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoomIcon from '@mui/icons-material/Room';
const PatientCards = () =>{

    return (
          <div className="patient flex justify-between p-4 bg-white ">

                <div className='flex flex-col space-y-4'>

                    <div className='flex items-center space-x-4'>

                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <h1>Alberto Ripley</h1>
                            <span>26, Male</span>
                        </div>

                    </div>

                    <div className='flex flex-col space-y-2'>
                        <div className='flex space-x-4'>
                    <EventIcon style={{ fontSize: "16px" }} />
                            <span>Last Appointment : Mon, 30 Apr 2025</span>

                        </div>

                        <div className='flex space-x-4'>
                            <RoomIcon style={{ fontSize: "16px" }}  />

                            <span>Green Square, New York, USA</span>

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