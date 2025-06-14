function FilterButtons({ setFilter, activeFilter }) {
  const filters = ['All', 'Completed', 'Incomplete'];

  return (
    <div className="mb-6 flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`px-4 py-2 rounded-md ${
            activeFilter === filter
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;