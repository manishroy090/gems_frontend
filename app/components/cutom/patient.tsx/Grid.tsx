
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PatientCards from '../cards/users/PatientCards';
const Grid = ({ data }) => {


  return (
    <div className='grid grid-cols-3 gap-4'>

      {data.map((item) => (
        <PatientCards patientDetails={item} />
      ))}
    </div>

  )
}


export default Grid;