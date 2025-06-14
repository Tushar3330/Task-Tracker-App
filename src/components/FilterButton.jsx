function FilterButton({ setFilter, activeFilter }) {
  const filters = ['All', 'Completed', 'Incomplete'];

  return (
    <div className="mb-8 flex gap-3 justify-center">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`px-6 py-3 rounded-xl font-medium text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 ${
            activeFilter === filter
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-md border border-slate-200/50'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterButton;