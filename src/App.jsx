import { useState } from "react";
import NoteEditor from "./components/NoteEditore/NoteEditore";
import Notelist from "./components/Notelist/Notelist";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  let [notes, setnotes] = useState([
    {
      id: 1,
      title: "ایده پروژه",
      snippet: "ساخت یک اپ مدیریت یادداشت با ReactوTailwind",
      content: "متن کامل یادداشت...",
      category: "ایده",
      date: "1403/09/12",
      isPinned: true,
    },
    {
      id: 2,
      title: "مطالب کلاس",
      snippet: "اموزی props,state,React",
      content: "جزئیات یادداشت...",
      category: "آموزش",
      date: "1403/09/10",
      isPinned: false,
    },
    {
      id: 3,
      title: "لیست",
      snippet: "اماده سازی تمرین برای دانشجو ها",
      content: "جزئیات یادداشت...",
      category: "کار",
      date: "1403/09/9",
      isPinned: false,
    },
  ]);
  let [selectedNotes, setselectedNotes] = useState([0]);
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
    setnotes(() => newNote);
  };
  return (
    <div className="flex w-20%  h-screen ">
      <Sidebar />
      <div className="flex flex-col w-screen  flex-1">
        <Search />

        <div className="flex flex-1 overflow-hidden gap-2.5 w-[88vw] p-2.5">
          <Notelist
            notes={notes}
            onselect={setselectedNotes}
            selectednotes={selectedNotes}
            onDelete={deleteNote}
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
