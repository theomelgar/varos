"use client";
import { quotes } from "@/constants/quotes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Feedback = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setTransitioning(false);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="h-screen w-full flex justify-between items-start">
      <div className="flex flex-col justify-between items-start gap-y-20">
        <div className="flex flex-col justify-between items-start gap-y-2">
          <h1 className="font-bold text-4xl">Didática de verdade</h1>
          <h2 className="font-bold text-lg">Garantindo seu aprendizado</h2>
        </div>
        <div className="w-[520px] " style={{ position: "relative" }}>
          <div
            style={{ position: "absolute", zIndex: "2" }}
            className={`absolute flex flex-col items-start justify-around w-[372px] h-[345px] border rounded-3xl py-6 px-12 gap-y-4 border-[#222729] bg-[#131516] transition-all duration-500 ${
              transitioning ? "opacity-0 " : "opacity-100"
            }`}
          >
            <Image src="/quote.png" alt="quote" width={23} height={23}></Image>
            <p className="text-lg text-[#B0B7BE]">
              {quotes[visibleIndex].text}
            </p>
            <h2 className="font-medium text-lg text-white">
              {quotes[visibleIndex].author}
            </h2>
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: "1",
              top: "100px",
              right: "0",
            }}
            className={`absolute flex flex-col items-start justify-around w-[372px] h-[345px] border rounded-3xl py-6 px-12 gap-y-4 border-[#222729] bg-[#131516] transition-all duration-200 ${
              transitioning
                ? "opacity-100 transform translate-y-[-100px] translate-x-[-150px]"
                : "opacity-40"
            }`}
          >
            <Image src="/quote.png" alt="quote" width={23} height={23}></Image>
            <p className="text-lg text-[#B0B7BE]">
              {quotes[(visibleIndex + 1) % quotes.length].text}
            </p>
            <h2 className="font-medium text-lg text-white">
              {quotes[(visibleIndex + 1) % quotes.length].author}
            </h2>
          </div>
        </div>
      </div>
      <div>
        <Image src="/people.png" alt="people" width={600} height={580} ></Image>
      </div>
    </div>
  );
};
