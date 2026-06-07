const Exportbtn = () => {
  return (
    <div className="inline-flex items-center border border-gray-300 bg-white shadow-sm hover:shadow-md transition">
      <select className="bg-white px-3 py-2 text-sm font-medium text-gray-800 cursor-pointer outline-none">
        <option value="">Export</option>
        <option value="pdf">Download as PDF</option>
        <option value="excel">Download as Excel</option>
      </select>
    </div>
  );
};

export default Exportbtn;