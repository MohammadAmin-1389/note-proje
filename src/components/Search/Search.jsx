function Search({ search, setsearch, isDark, setIsDark }) {
  return (
    <div
      className={`p-2.5 rounded-xl w-[88vw] transition-colors duration-500 ${
        isDark ? "bg-[#0a0f08]" : ""
      }`}
    >
      <div
        className={`flex  w-full h-12.5 p-1.25 rounded-xl justify-between items-center transition-colors duration-500 ${
          isDark ? "bg-[#0d1a0d] border border-[#1a3a1a]" : "bg-gray-100"
        }`}
      >
        <div>
          <h2
            className={`font-bold transition-colors duration-500 ${
              isDark ? "text-green-300" : "text-black"
            }`}
          >
            دفترچه یادداشت
          </h2>
          <p
            className={`text-[13px] transition-colors duration-500 ${
              isDark ? "text-green-400/70" : "text-gray-600"
            }`}
          >
            مدیریت یاداشت ها
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative w-14 h-8 rounded-full transition-all duration-300 shadow-lg ${
              isDark
                ? "bg-gradient-to-r from-green-700 to-green-900 shadow-green-500/30"
                : "bg-gradient-to-r from-gray-300 to-gray-400 shadow-gray-400/30"
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 ${
                isDark
                  ? "left-7 bg-green-300 shadow-lg shadow-green-300/30"
                  : "left-1 bg-white shadow-lg shadow-gray-300/30"
              }`}
            />
            <span className="absolute inset-0 flex items-center justify-between px-1.5 text-[10px]">
              <span
                className={isDark ? "opacity-0" : "opacity-100 text-gray-600"}
              >
                ☀️
              </span>
              <span
                className={isDark ? "opacity-100 text-green-300" : "opacity-0"}
              >
                🌙
              </span>
            </span>
          </button>

          <input
            className={`rounded-xl w-32.5 text-[10px] h-7.5 px-3 transition-colors duration-500 ${
              isDark
                ? "bg-[#0a0f08] text-green-200 placeholder:text-green-700/50 border border-[#1a3a1a] focus:border-green-500 focus:ring-1 focus:ring-green-500/30"
                : "bg-gray-200 text-black placeholder:text-gray-400"
            }`}
            type="search"
            placeholder="جستجو..."
            onChange={(e) => setsearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
