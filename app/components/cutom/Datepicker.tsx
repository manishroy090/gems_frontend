
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Datepicker = () => {


  return (
    <div>

      <div className="bg-white w-fit px-4 py-1 flex items-center justify-center space-x-4 rounded font-semibold shadow">
        <CalendarMonthIcon  style={{ fontSize: '28px' }}/>
        <span>3 May 26 - 3 May 26</span>
      </div>

      <div className=" hidden bg-white w-fit p-1 flex items-center justify-center rounded font-semibold">
        <select>
          <option>Today</option>
          <option>Yestarday</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>Custom Range</option>
        </select>
      </div>
    </div>

  )
}


export default Datepicker;