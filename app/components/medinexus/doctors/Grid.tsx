"use client";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Doctorcards from "../cards/users/Doctorcards";
import { useEffect, useState } from "react";
const Grid = ({ data = [] }) => {
  const [doctors, setDoctors] = useState();

  useEffect(() => {
    setDoctors(data);
  }, [data]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {doctors?.map((item, index) => (
        <Doctorcards doctorDetails={item} key={index} />
      ))}
    </div>
  );
};

export default Grid;
