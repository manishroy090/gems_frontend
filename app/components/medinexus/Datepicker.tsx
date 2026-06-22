import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

interface dateRange{
  from: string | Date;
  to: String |Date;
  label?: String;
  key?:String
};

interface customInputProps {
  onChange?: (value: dateRange) => void;
}

const Datepicker = ({ onChange }: customInputProps) => {
  // State from here
  const [open, setOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [rangeState, setRangeState] = useState<any>([
    {
      from: new Date(),
      to: new Date(),
      key: "created_at",
    },
  ]);

  //Date Readable option form here
  const options = [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Last Month",
    "Custom Range",
  ];

  //Date fromateRange function here
  const formatRange = (start: any, end: any) => {
    return `${format(start, "d MMM yy")} - ${format(end, "d MMM yy")}`;
  };

  //Date Reaable features handle through this function
  const handleSelectOption = (option: any) => {

    
    if (option === "Custom Range") {
      setShowCalendar(true);
      return;
    }

    const today = new Date();
    let start = today;
    let end = today;

    switch (option) {
      case "Yesterday":
        start = end = new Date(today.setDate(today.getDate() - 1));
        break;

      case "Last 7 Days":
        start = new Date(today.setDate(today.getDate() - 6));
        end = new Date();
        break;

      case "Last 30 Days":
        start = new Date(today.setDate(today.getDate() - 29));
        end = new Date();
        break;

      case "This Month":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = new Date();
        break;

      case "Last Month": {
        const d = new Date();
        start = new Date(d.getFullYear(), d.getMonth() - 1, 1);
        end = new Date(d.getFullYear(), d.getMonth(), 0);
        break;
      }

      default:
        break;
    }

    setRangeState([{ from: format(start,'yyy-MM-dd'), to: end, key: "selection" }]);
    onChange?.({ from: format(start,'yyy-MM-dd'), to:format(end,'yyy-MM-dd'), key: option });
    setShowCalendar(false);
    setOpen(false);
  };

  const handleRangeChange = (item:any) => {

    
    const selection = item.selection;
    
    setRangeState([selection]);
    onChange?.({
      from: selection.from,
      to: selection.to,
      label: "Custom Range",
    });
  };

  const currentRange = formatRange(
    rangeState[0].from,
    rangeState[0].to,
  );

  return (
    <div className="relative flex items-start">
      {/* Trigger (optimized UI only) */}
      <div
        onClick={() => setOpen((p) => !p)}
        className="bg-white w-fit px-4 py-2 flex items-center gap-2 rounded font-medium shadow cursor-pointer hover:shadow-md transition"
      >
        <CalendarMonthIcon sx={{ fontSize: 20 }} className="text-gray-600" />

        <span className="text-sm text-gray-800 leading-none whitespace-nowrap">
          {currentRange}
        </span>
      </div>

      {/* Attached Panel (NO GAP between dropdown & calendar) */}
      {open && (
        <div className="absolute top-full left-0 mt-0 flex bg-white shadow rounded overflow-hidden z-50">
          {/* Options */}
          <div className="w-56 border-r">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleSelectOption(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </div>
            ))}
          </div>

          {/* Calendar */}
          {showCalendar && (
            <div className="p-2">
              <DateRange
                editableDateInputs={true}
                onChange={handleRangeChange}
                moveRangeOnFirstSelection={false}
                ranges={rangeState}
              />
              <div className="flex justify-end p-2">
                <button
                  onClick={() => {
                    setShowCalendar(false);
                    setOpen(false);
                  }}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Datepicker;
