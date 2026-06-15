function Sidebar() {
  return (
    <div className="bg-black w-[12vw] h-screen ">
      <div className="pt-3.75">
        <div className="flex items-center pl-2.5">
          <h2 className="bg-linear-to-br from-purple-700 to-pink-500 w-12 h-12 flex justify-center items-center text-white text-[25px] font-bold rounded-xl">
            N
          </h2>
          <h1 className="text-white text-[20px] font-bold flex justify-center pl-1.25">
            NoteX
          </h1>
        </div>
        <p className="text-white text-[12px] flex justify-center pl-1.25">
          React Notes
        </p>
      </div>
      <br />
      <br />
      <div className="">
        <div className="flex justify-center bg-black text-white w-[11vw] hover:bg-gray-900 transition-colors rounded-xl duration-200 h-10">
          <button>همه یاداشت ها🧾</button>
        </div>
        <br />
        <div className="flex justify-center bg-black text-white w-[11vw] hover:bg-gray-900 transition-colors rounded-xl duration-200 h-10">
          <button>سنجاق شده📌</button>
        </div>
        <br />
        <div className="flex justify-center bg-black text-white w-[11vw] hover:bg-gray-900 transition-colors rounded-xl duration-200 h-10">
          <button>دسته بندی📁</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
