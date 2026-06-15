import { useEffect, useState } from "react";

function NoteEditore({ notes, onSave, onDelete }) {
  let [localTitle, setLocalTitle] = useState(notes?.title || "");
  let [localContent, setLocalContent] = useState(notes?.snippet || "");

  useEffect(() => {
    if (notes) {
      setLocalTitle(notes.title);
      setLocalContent(notes.snippet);
    }
  }, [notes]);

  let handleSave = () => {
    let updatedNote = {
      ...notes,
      title: localTitle,
      snippet: localContent,
    };
    onSave(updatedNote);
  };

  let handleDelete = () => {
    onDelete(notes.id);
  };

  if (!notes) {
    return (
      <div className="h-130 w-[58vw] rounded-xl bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">یادداشتی انتخاب نشده است</p>
      </div>
    );
  }

  return (
    <div className="h-130 w-[58vw] rounded-xl bg-gray-100">
      <div className="flex justify-between p-2.5">
        <p className="text-[11px] text-gray-600">مشاهده یادداشت</p>
        <div className="flex gap-2.5">
          <button
            onClick={handleSave}
            className="text-[12px] bg-blue-800 w-14 h-6 text-white rounded-sm"
          >
            ذخیره
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-300 text-[12px] w-14 h-6 text-red-900 font-bold rounded-sm"
          >
            حذف
          </button>
        </div>
      </div>
      <h2 className="font-bold text-[30px]">{notes.title}</h2>
      <br />
      <br />
      <p className="text-[11px] text-gray-600">
        دسته بندی: {notes.category} | تاریخ: {notes.date}
      </p>
      <br />
      <div className="p-3.75">
        <input
          type="text"
          className="bg-gray-200 w-full p-2.5 rounded-sm"
          onChange={(e) => setLocalTitle(e.target.value)}
          value={localTitle}
        />
        <br />
        <br />
        <textarea
          value={localContent}
          onChange={(e) => setLocalContent(e.target.value)}
          className="w-full bg-gray-200 p-3.75 h-50 rounded-xl"
        ></textarea>
      </div>
    </div>
  );
}

export default NoteEditore;
