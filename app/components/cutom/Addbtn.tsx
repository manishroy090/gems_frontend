const Addbtn = ({label,className,type}) => {
  return (
        <button
              type="submit"
              className={`px-5 py-2 rounded-lg bg-[#14967f] text-white font-medium hover:opacity-90 shadow-md transition ${className}`}
            >
              {label}
            </button>
  );
};

export default Addbtn;