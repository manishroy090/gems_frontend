import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

const Filter = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 shadow-sm hover:shadow-md transition cursor-pointer select-none">
      <FilterAltRoundedIcon style={{ fontSize: 18 }} className="text-gray-700" />

      <span className="text-sm font-medium text-gray-800 leading-none">
        Filters
      </span>
    </div>
  );
};

export default Filter;