import Image from "next/image";
import React from "react";

interface FloatCardProps {
  children: React.ReactNode
  imageUrl: string;
  color: string;
}
export const FloatCard = ({ children,imageUrl, color }: FloatCardProps) => {
  return (
    <div className={`w-fit h-18 flex items-center justify-start border-[#4D5358] border p-2 pr-10 rounded-lg gap-4 shadow-lg shadow-[${color}]/30`}>
      <Image
        className="border-[#4D5358] border p-1 rounded-md w-12 h-12"
        src={imageUrl}
        alt="float-card"
        width={50}
        height={50}
      ></Image>
      {children}
    </div>
  );
};
