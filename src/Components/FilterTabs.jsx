function FilterTabs({ filter, setFilter }) {
  return (
    <div className="flex justify-between text-sm mb-4 flex-wrap gap-2 font-thin">
      {["All", "Active", "Completed", "Important"].map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-4 py-1 rounded-full transition 
            ${
              filter === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-blue-200 hover:text-blue-700"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
