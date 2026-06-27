import Card from "../Card/Card";

function Notelist({ notes, onselect, selectednotes, onAdd, isDark }) {
  return (
    <div>
      <div
        className={` w-[30vw] h-130 p-3.75 rounded-xl transition-colors duration-500 ${
          isDark ? "bg-[#0d1a0d] border border-[#1a3a1a]" : "bg-gray-100"
        }`}
      >
        <div className="flex justify-between">
          <h3 className={isDark ? "text-green-300" : "text-black"}>
            یادداشت ها
          </h3>
          <button
            onClick={onAdd}
            className={`text-[15px] rounded-xl w-16 h-8 text-white hover:opacity-90 transition-all ${
              isDark
                ? "bg-gradient-to-r from-green-600 to-green-700 shadow-lg shadow-green-500/20"
                : "bg-blue-800 hover:bg-blue-900"
            }`}
          >
            جدید+
          </button>
        </div>
        {notes.map((note) => (
          <Card
            key={note.id}
            notes={note}
            onselect={() => onselect(note)}
            isActive={selectednotes?.id === note.id}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}

export default Notelist;
