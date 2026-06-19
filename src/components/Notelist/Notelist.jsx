import Card from "../Card/Card";

function Notelist({ notes, onselect, selectednotes, onAdd }) {
  return (
    <div>
      <div className="bg-gray-100 w-[30vw] h-130 p-3.75 rounded-xl">
        <div className="flex justify-between">
          <h3>یادداشت ها</h3>
          <button
          onAdd={onAdd}
            className="bg-blue-800 text-[15px] rounded-xl w-16 h-8 text-white hover:bg-blue-900 transition-all"
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
          />
        ))}
      </div>
    </div>
  );
}

export default Notelist;
