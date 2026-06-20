import { useEffect, useState } from "react";
import NoteEditor from "./components/NoteEditore/NoteEditore";
import Notelist from "./components/Notelist/Notelist";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  let [notes, setnotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  let [search, setsearch] = useState("");
  let filterNotes = notes.filter((notes) =>
    notes.title.toLowerCase().includes(search.toLowerCase()),
  );
  let [selectedNotes, setselectedNotes] = useState(null);
  let addNote = () => {
    let newNote = {
      id: Date.now(),
      title: "یادداشت جدید",
      snippet: "متن یادداشت را اینجا بنویسید...",
      category: "عمومی",
      date: new Date().toLocaleDateString("fa-IR"),
    };
    setnotes([newNote, ...notes]);
    setselectedNotes(newNote);
  };

  let deleteNote = (id) => {
    let newNotes = notes.filter((singleNote) => singleNote.id !== id);
    setnotes(newNotes);
    if (selectedNotes?.id === id) {
      if (newNotes.length > 0) {
        setselectedNotes(newNotes[0]);
      } else {
        setselectedNotes(null);
      }
    }
  };

  let updeteNote = (updatedNote) => {
    let newNote = notes.map((singleNote) =>
      singleNote.id === updatedNote.id ? updatedNote : singleNote,
    );
    setnotes(newNote);
  };

  return (
    <div className="flex w-20% h-screen">
      <Sidebar />
      <div className="flex flex-col w-screen flex-1">
        <Search search={search} setsearch={setsearch} />
        <div className="flex flex-1 overflow-hidden gap-2.5 w-[88vw] p-2.5">
          <Notelist
            notes={filterNotes}
            onselect={setselectedNotes}
            selectednotes={selectedNotes}
            onDelete={deleteNote}
            onAdd={addNote}
          />
          <NoteEditor
            notes={selectedNotes}
            key={selectedNotes?.id}
            onSave={updeteNote}
            onDelete={deleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
