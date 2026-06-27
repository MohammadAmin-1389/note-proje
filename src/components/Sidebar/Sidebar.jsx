function Sidebar({ isDark }) {
  return (
    <div
      className={`w-[12vw] h-screen transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#0a0f08] via-[#0d1a0d] to-[#0a0f08] border-r border-[#1a3a1a]"
          : "bg-black"
      }`}
    >
      <div className="pt-3.75">
        <div className="flex items-center pl-2.5">
          <h2
            className={`w-12 h-12 flex justify-center items-center text-white text-[25px] font-bold rounded-xl transition-all duration-500 ${
              isDark
                ? "bg-gradient-to-br from-green-600 to-green-800 shadow-lg shadow-green-500/20"
                : "bg-linear-to-br from-purple-700 to-pink-500"
            }`}
          >
            N
          </h2>
          <h1
            className={`text-white text-[20px] font-bold flex justify-center pl-1.25 transition-colors duration-500 ${
              isDark ? "text-green-300" : "text-white"
            }`}
          >
            NoteX
          </h1>
        </div>
        <p
          className={`text-[12px] flex justify-center pl-1.25 transition-colors duration-500 ${
            isDark ? "text-green-400/70" : "text-white"
          }`}
        >
          React Notes
        </p>
      </div>
      <br />
      <br />
      <div>
        <div
          className={`flex justify-center text-white w-[11vw] transition-colors rounded-xl duration-200 h-10 ${
            isDark
              ? "bg-[#0a0f08] hover:bg-[#0d1a0d] border border-[#1a3a1a] text-green-300"
              : "bg-black hover:bg-gray-900 text-white"
          }`}
        >
          <button>همه یاداشت‌ها 🧾</button>
        </div>
        <br />
        <div
          className={`flex justify-center text-white w-[11vw] transition-colors rounded-xl duration-200 h-10 ${
            isDark
              ? "bg-[#0a0f08] hover:bg-[#0d1a0d] border border-[#1a3a1a] text-green-300"
              : "bg-black hover:bg-gray-900 text-white"
          }`}
        >
          <button>سنجاق شده 📌</button>
        </div>
        <br />
        <div
          className={`flex justify-center text-white w-[11vw] transition-colors rounded-xl duration-200 h-10 ${
            isDark
              ? "bg-[#0a0f08] hover:bg-[#0d1a0d] border border-[#1a3a1a] text-green-300"
              : "bg-black hover:bg-gray-900 text-white"
          }`}
        >
          <button>دسته‌بندی 📁</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
