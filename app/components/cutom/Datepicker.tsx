const Datepicker = () =>{


    return(

              <div className="bg-white w-fit p-1 flex items-center justify-center rounded font-semibold">
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

    )
}


export default Datepicker;