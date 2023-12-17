import React from "react";
import { ItemList } from "./item-list";

export const List = ({
  listName,
  data,
  toggleList,
  showList,
  setActualText,
  setActualLogo,
  actualText,
  selected,
  setSelected,
}: any) => {
  return (
    <div className="md:w-[270px] w-full md:p-0 p-4">
      <button
        className="flex items-center justify-center w-full h-14 rounded-3xl text-lg font-bold bg-[#222729]"
        onClick={toggleList}
      >
        {listName}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ml-2 transform transition-transform ${
            showList ? "" : "-rotate-90"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {showList && (
        <div className="w-full h-[300px] flex flex-col justify-start items-start pl-5 gap-y-3 mt-4 mb-4 border border-[#222729] rounded-3xl overflow-auto py-4">
          {data.map((info: any) => (
            <>
              <ItemList
                key={info.text}
                logo={info.logo}
                text={info.text}
                actualText={actualText}
                setActualText={setActualText}
                setActualLogo={setActualLogo}
                selected={selected}
                setSelected={setSelected}
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};
