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
  }, []);

  return (
    <div className="w-full flex md:flex-row flex-col justify-between md:items-start items-center mt-20">
      <div className="flex flex-col justify-between md:items-start items-center gap-y-20">
        <div className="flex flex-col justify-between md:items-start items-center gap-y-2">
          <h1 className="font-bold md:text-4xl text-3xl">
            Didática de verdade
          </h1>
          <h2 className="font-bold text-lg">Garantindo seu aprendizado</h2>
        </div>
        <div
          className="md:w-[520px] h-[400px]  w-full"
          style={{ position: "relative" }}
        >
          <div
            style={{ position: "absolute", zIndex: "2" }}
            className={`absolute flex flex-col items-
              start justify-around md:w-[372px] md:h-[345px] w-full
              border rounded-3xl md:py-6 md:px-12 gap-y-4 border-[#222729] bg-[#131516] transition-all duration-500 ${
                transitioning ? "opacity-0 " : "opacity-100"
              }`}
          >
            <Image src="/quote.png" alt="quote" width={23} height={23}></Image>
            <p className="text-lg text-[#B0B7BE]">
              {quotes[visibleIndex].text}
            </p>
            <h2 className="font-medium text-lg text-white italic">
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
            className={`absolute md:flex hidden flex-col items-start justify-around w-[372px] opacity-0 h-[345px] border rounded-3xl py-6 px-12 gap-y-4 border-[#222729] bg-[#131516] transition-all duration-200 ${
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
        <Image src="/people.png" alt="people" width={600} height={580}></Image>
      </div>
    </div>
  );
};
