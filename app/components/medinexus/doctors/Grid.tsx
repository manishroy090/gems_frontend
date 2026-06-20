"use client";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Doctorcards from "../cards/users/Doctorcards";
import { useEffect, useState } from "react";
const Grid = ({ data = [], query }) => {
  const [doctors, setDoctors] = useState();

  useEffect(() => {
    setDoctors(data);
  }, [data]);

  useEffect(() => {
    // console.log("doctors",doctors);

    const filtersValue = query?.filters;
    const filterDoctors = doctors?.filter(
      (doctor) =>
        doctor?.name == filtersValue?.name ||
        doctor?.designation == filtersValue?.designation ||
        doctor?.department == filtersValue?.department ||
        doctor?.fees == filtersValue?.fees ||
        doctor?.status == filtersValue?.status,
    );

    if (
      !filtersValue?.name &&
      !filtersValue?.designation &&
      !filtersValue?.department &&
      !filtersValue?.fees &&
      !filtersValue?.status
    ) {
      setDoctors(data);
    } else {
      setDoctors(filterDoctors);
    }
  }, [query]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {doctors?.map((item, index) => (
        <Doctorcards doctorDetails={item} key={index} />
      ))}
    </div>
  );
};

export default Grid;
