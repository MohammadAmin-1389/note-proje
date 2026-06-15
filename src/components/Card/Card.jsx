function Card({ notes, onselect, isActive }) {
  return (
    <div onClick={onselect} className="cursor-pointer flex flex-wrap gap-4 p-4">
      <div
        className={`p-4 rounded-xl shadow-lg w-100 transition-all duration-200 ${
          isActive
            ? "bg-amber-50/90 border-2 border-amber-700 shadow-amber-900/30 ring-1 ring-amber-600/50"
            : "bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md"
        }`}
      >
        <a href="#" className="block mb-2">
          <h4
            className={`p-2 rounded-xl w-10 text-[10px] ${
              isActive ? "bg-amber-700 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {notes.category}
          </h4>
        </a>
        <h3
          className={`font-bold text-[13px] ${
            isActive ? "text-amber-900" : "text-gray-800"
          }`}
        >
          {notes.title}
        </h3>
        <p
          className={`text-[11px] ${
            isActive ? "text-amber-800/80" : "text-gray-600"
          }`}
        >
          {notes.snippet}
        </p>
        <span
          className={`text-[9px] ${
            isActive ? "text-amber-600" : "text-gray-400"
          }`}
        >
          {notes.date}
        </span>
      </div>
    </div>
  );
}
export default Card;