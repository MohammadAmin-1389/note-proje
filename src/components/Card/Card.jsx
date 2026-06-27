function Card({ notes, onselect, isActive, isDark }) {
  return (
    <div onClick={onselect} className="cursor-pointer flex flex-wrap gap-4 p-4">
      <div
        className={`p-4 rounded-xl shadow-lg w-100 transition-all duration-200 ${
          isActive
            ? isDark
              ? "bg-gradient-to-r from-green-900/50 to-green-800/50 border-2 border-green-500 shadow-green-500/30 ring-1 ring-green-400/50"
              : "bg-amber-50/90 border-2 border-amber-700 shadow-amber-900/30 ring-1 ring-amber-600/50"
            : isDark
              ? "bg-[#0d1a0d] border border-[#1a3a1a] hover:border-green-500/50 hover:shadow-green-500/10"
              : "bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md"
        }`}
      >
        <a href="#" className="block mb-2">
          <h4
            className={`p-2 rounded-xl w-10 text-[10px] transition-colors duration-200 ${
              isActive
                ? isDark
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white"
                  : "bg-amber-700 text-white"
                : isDark
                  ? "bg-[#0a0f08] text-green-400"
                  : "bg-gray-100 text-gray-700"
            }`}
          >
            {notes.category}
          </h4>
        </a>
        <h3
          className={`font-bold text-[13px] transition-colors duration-200 ${
            isActive
              ? isDark
                ? "text-green-300"
                : "text-amber-900"
              : isDark
                ? "text-green-200"
                : "text-gray-800"
          }`}
        >
          {notes.title}
        </h3>
        <p
          className={`text-[11px] transition-colors duration-200 ${
            isActive
              ? isDark
                ? "text-green-400/80"
                : "text-amber-800/80"
              : isDark
                ? "text-green-400/60"
                : "text-gray-600"
          }`}
        >
          {notes.snippet}
        </p>
        <span
          className={`text-[9px] transition-colors duration-200 ${
            isActive
              ? isDark
                ? "text-green-400"
                : "text-amber-600"
              : isDark
                ? "text-green-500/50"
                : "text-gray-400"
          }`}
        >
          {notes.date}
        </span>
      </div>
    </div>
  );
}
export default Card;
