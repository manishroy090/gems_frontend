import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { cva } from "class-variance-authority";
import { cn } from "../../libs/utils";

const inputVariants = cva(
  "flex h-10 w-[100%] border rounded-lg px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-0",
  {
    variants: {
      variant: {
        default:
          "border-ld bg-transparent text-ld placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-0",

        gray:
          "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 focus-visible:ring",

        info:
          "border-info bg-info/10 text-info placeholder-info/50 focus:border-info focus:ring-info focus-visible:ring",

        failure:
          "border-error bg-error/10 text-error placeholder-error/50 focus:border-error focus:ring-error focus-visible:ring",

        warning:
          "border-warning bg-warning/10 text-warning placeholder-warning/50 focus:border-warning focus:ring-warning focus-visible:ring",

        success:
          "border-success bg-success/10 text-success placeholder-success/50 focus:border-success focus:ring-success focus-visible:ring",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

function CustomDatePicker({
  value,
  onChange,
  placeholder = "Select date",
  dateFormat = "yyyy-MM-dd",
  error,
  variant = "default",
  className = ""
}:{value?:any,onChange?:any,placeholder?:any,dateFormat?:any,error?:any,variant?:any,className?:string}) {

  const [formatedDate, setFormatedDate] = useState();
  const handleChange = (date:any) => {
    console.log("date",date);
    onChange(date)
  };


  return (
    <div className="">
      <DatePicker
        selected={value}
        onChange={handleChange}
        placeholderText={placeholder}
        dateFormat={dateFormat}
        wrapperClassName="w-full"
        className={cn(
          inputVariants({
            variant: error ? "failure" : variant,
          }),
          className
        )}
      />

      {error && (
        <p className="text-error text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export default CustomDatePicker;