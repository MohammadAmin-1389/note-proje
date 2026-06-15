function Search() {
  return (
    <div className=" p-2.5 rounded-xl w-[88vw]">
      <div className="flex bg-gray-100 w-full h-12.5 p-1.25 rounded-xl justify-between">
        <div>
          <h2 className="font-bold">دفترچه یادداشت</h2>
          <p className="text-[13px]">مدیریت یاداشت ها</p>
        </div>
        <div>
          <input
            className=" rounded-xl w-32.5 text-[10px] bg-gray-200 h-7.5"
            type="search"
            placeholder="جستجو..."
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
