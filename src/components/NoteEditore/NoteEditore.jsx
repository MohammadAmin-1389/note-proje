import { useEffect, useState } from "react";

function NoteEditore({ notes, onSave, onDelete, isDark }) {
  let [localTitle, setLocalTitle] = useState(notes?.title || "");
  let [localContent, setLocalContent] = useState(notes?.snippet || "");
  let [localcategory, setLocalcategory] = useState(notes?.category || "");

  useEffect(() => {
    if (notes) {
      setLocalTitle(notes.title);
      setLocalContent(notes.snippet);
      setLocalcategory(notes.category);
    }
  }, [notes]);

  useEffect(() => {
    if (notes) {
      let updatedNote = {
        ...notes,
        title: localTitle,
        snippet: localContent,
        category: localcategory,
      };
      onSave(updatedNote);
    }
  }, [localTitle, localContent, localcategory]);

  let handleDelete = () => {
    onDelete(notes.id);
  };

  if (!notes) {
    return (
      <div
        className={`h-130 w-[58vw] rounded-xl flex items-center justify-center transition-colors duration-500 ${
          isDark ? "bg-[#0d1a0d] border border-[#1a3a1a]" : "bg-gray-100"
        }`}
      >
        <p className={isDark ? "text-green-400/70" : "text-gray-500"}>
          یادداشتی انتخاب نشده است
        </p>
      </div>
    );
  }

  return (
    <div
      className={`h-130 w-[58vw] rounded-xl transition-colors duration-500 ${
        isDark ? "bg-[#0d1a0d] border border-[#1a3a1a]" : "bg-gray-100"
      }`}
    >
      <div className="flex justify-between p-2.5">
        <p
          className={`text-[11px] transition-colors duration-500 ${
            isDark ? "text-green-400/70" : "text-gray-600"
          }`}
        >
          مشاهده یادداشت
        </p>
        <div className="flex gap-2.5">
          <button
            onClick={handleDelete}
            className={`text-[12px] w-14 h-6 font-bold rounded-sm transition-all ${
              isDark
                ? "bg-gradient-to-r from-red-900/50 to-red-800/50 text-red-300 border border-red-700/30 hover:bg-red-900/70"
                : "bg-red-300 text-red-900 hover:bg-red-400"
            }`}
          >
            حذف
          </button>
        </div>
      </div>
      <h2
        className={`font-bold text-[30px] transition-colors duration-500 ${
          isDark ? "text-green-300" : "text-black"
        }`}
      >
        {notes.title}
      </h2>
      <br />
      <br />
      <p
        className={`text-[11px] transition-colors duration-500 ${
          isDark ? "text-green-400/70" : "text-gray-600"
        }`}
      >
        دسته بندی: {notes.category} | تاریخ: {notes.date}
      </p>
      <br />
      <select
        value={localcategory}
        onChange={(e) => setLocalcategory(e.target.value)}
        className={`transition-colors duration-500 ${
          isDark
            ? "bg-[#0a0f08] text-green-200 border border-[#1a3a1a] rounded-md p-1"
            : "bg-white text-black"
        }`}
      >
        <option value="عمومی">عمومی</option>
        <option value="خانه">خانه</option>
        <option value="محل کار">محل کار</option>
        <option value="مدرسه">مدرسه</option>
        <option value="باشگاه">باشگاه</option>
        <option value="وقت خالی">وقت خالی</option>
      </select>
      <br />
      <div className="p-3.75">
        <input
          type="text"
          className={`w-full p-2.5 rounded-sm transition-colors duration-500 ${
            isDark
              ? "bg-[#0a0f08] text-green-200 placeholder:text-green-700/50 border border-[#1a3a1a] focus:border-green-500"
              : "bg-gray-200 text-black"
          }`}
          onChange={(e) => setLocalTitle(e.target.value)}
          value={localTitle}
        />
        <br />
        <br />
        <textarea
          value={localContent}
          onChange={(e) => setLocalContent(e.target.value)}
          className={`w-full p-3.75 h-50 rounded-xl transition-colors duration-500 ${
            isDark
              ? "bg-[#0a0f08] text-green-200 placeholder:text-green-700/50 border border-[#1a3a1a] focus:border-green-500"
              : "bg-gray-200 text-black"
          }`}
        />
      </div>
    </div>
  );
}

export default NoteEditore;
