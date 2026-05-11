
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Doctorcards = () =>{

    return (
            <div className="doctor flex space-x-8 border w-fit p-6 bg-white shadow rounded">

                <div className='bg-red-600 w-40 h-32'>
                    <img
                        src='https://as2.ftcdn.net/v2/jpg/04/75/00/71/1000_F_475007199_FLk7bivHPRIjtiylrMeA4027ehCQWurq.jpg'
                        className='w-full h-full object-cover object-center'
                        alt='preview'
                    />
                </div>

                <div className="flex flex-col space-y-3">
                    <div className="flex flex-col space-y-2">


                        <span>Dr. Mick Thompson</span>
                        <span>Cardiologist</span>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <span>Available : Mon, 20 Jan 2025</span>
                        <span>Starts From : $499 </span>
                    </div>

                </div>

                <div className='flex flex-col justify-between'>
                    <div className='border p-1 rounded-md'>

                        <MoreVertIcon />
                    </div>

                    <div className='border p-1 rounded-md'>

                        <CalendarMonthIcon />
                    </div>

                </div>

            </div>
    )
}

export default Doctorcards