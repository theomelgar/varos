import Image from "next/image";
import React from "react";

export const ItemList = ({
  actualText,
  text,
  logo,
  setActualText,
  setActualLogo,
  setSelected,
  selected,
}: any) => {
  const handleItemClick = () => {
    setActualText(text);
    setActualLogo(logo);
    setSelected(text);
    console.log(actualText,text,selected)
  };

  return (
    <div
      onClick={handleItemClick}
      className={`flex items-center justify-center hover:bg-white/10 rounded-full gap-x-4 p-3 px-4 ${
        text===actualText ? "bg-[#22272980]" : ""
      }`}
    >
      <Image src={logo} alt="icone" width={30} height={30} />
      {text}
    </div>
  );
};
