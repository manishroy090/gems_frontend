import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SortBy = ({ handleShorting }: { handleShorting: (value: string) => void }) => {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState('Sort By');

  const options = [
    { value: 'recent', label: 'Sort By' },
    { value: 'asc',    label: 'Recent'  },
    { value: 'desc',   label: 'Oldest'  },
  ];

  const handleSelect = (value: string, label: string) => {
    setLabel(label);
    setOpen(false);
    handleShorting(value);
  };

  return (
    <div className="relative inline-block">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 text-white px-3 py-2 rounded border border-gray-300 shadow-sm hover:shadow-md transition"
        style={{ backgroundColor: '#14967f' }}
      >
        {label}
        <ChevronDown size={16} />
      </button>

      {/* Dropdown menu */}
      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => handleSelect(opt.value, opt.label)}
              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortBy;