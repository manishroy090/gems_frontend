const SortBy = () => {
  return (
    <div className="inline-flex items-center bg-white border border-gray-300 shadow-sm hover:shadow-md transition px-3 py-2">
      <select className="bg-white text-sm font-medium text-gray-800 outline-none cursor-pointer">
        <option value="recent">Sort By: Recent</option>
        <option value="recent">Recent</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default SortBy;