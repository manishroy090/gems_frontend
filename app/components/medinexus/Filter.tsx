import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import { useState } from "react";

const Filter = () => {

  const [showfilter,setShow] = useState(false);

 
  return (
    <div className="flex flex-col">
      <div onClick={()=>setShow((p)=>!p)} className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 shadow-sm hover:shadow-md transition cursor-pointer select-none">
        <FilterAltRoundedIcon
          style={{ fontSize: 18 }}
          className="text-gray-700"
        />

        <span className="text-sm font-medium text-gray-800 leading-none">
          Filters
        </span>
      </div>
      <div className={showfilter ?`absolute mt-12 bg-white py-10 px-4 z-10 w-fit shadow-lg  rounded` : `absolute mt-12 bg-white py-10 px-4 z-10 w-fit shadow-lg  hidden`   }>
        <div className="flex justify-between">
          <h1>Filter</h1>
          <span className="text-red-600">clear All</span>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label>Doctor</label>
            <input type="text" className="border w-fit py-1 rounded" />
          </div>
          <div className="flex flex-col space-y-1">
            <label>Designation</label>
            <input type="text" className="border w-fit py-1 rounded" />
          </div>
          <div className="flex flex-col space-y-1">
            <label>Department</label>
            <input type="text" className="border w-fit py-1 rounded" />
          </div>

          <div className="flex flex-col space-y-1">
            <label>Date</label>
            <input type="text" className="border w-fit py-1 rounded" />
          </div>
          <div className="flex flex-col space-y-1">
            <label>Amount</label>
            <input type="text" className="border w-fit py-1 rounded" />
          </div>
            <div className="flex flex-col space-y-1">
            <label>Status</label>
            <input type="text" className="border w-fit py-1 rounded" />
          </div>

          <div className="flex space-x-4">
            <button className="bg-slate-100 p-1 rounded">Close</button>
            <button className="bg-blue-600 text-white p-1 rounded">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
