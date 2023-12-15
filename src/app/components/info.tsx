"use client";
import { infoCarteira, infoConsultoria, infoCursos } from "@/constants/infos";
import Image from "next/image";
import React, { useState } from "react";
import { ItemList } from "./item-list";
import { List } from "./list";

export const Info = () => {
  const [showList, setShowList] = useState({
    carteira: true,
    consultoria: false,
    cursos: false,
  });
  const [selected, setSelected] = useState(infoCarteira[0].text);
  const [actualText, setActualText] = useState(infoCarteira[0].text);
  const [actualLogo, setActualLogo] = useState(infoCarteira[0].logo);

  const toggleList = (listName: string) => {
    setShowList((prevState) => {
      const updatedState = Object.keys(prevState).reduce((acc, key) => {
        acc[key as keyof typeof prevState] =
          key === listName ? !prevState[key as keyof typeof prevState] : false;
        return acc;
      }, {} as { [key in keyof typeof prevState]: boolean });

      return updatedState;
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-start gap-y-10">
      <div className="w-full flex-col items-center justify-center  ">
        <h1 className="w-1/2 text-4xl font-bold text-left mb-2">
          Simplifique seus investimentos e alcance seus objetivos
        </h1>

        <h3 className="max-w-[500px] text-lg font-medium">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </h3>
      </div>
      <div className=" w-full flex justify-between gap-x-40">
        <div className="flex flex-col justify-start items-center mr-10 gap-2">
          <List
            listName="Carteira"
            data={infoCarteira}
            toggleList={() => toggleList("carteira")}
            showList={showList.carteira}
            setActualText={setActualText}
            setActualLogo={setActualLogo}
            actualText={actualText}
            selected={selected}
            setSelected={setSelected}
          />
          <List
            listName="Consultoria"
            data={infoConsultoria}
            toggleList={() => toggleList("consultoria")}
            showList={showList.consultoria}
            setActualText={setActualText}
            actualText={actualText}
            setActualLogo={setActualLogo}
            selected={selected}
            setSelected={setSelected}
          />
          <List
            listName="Cursos"
            data={infoCursos}
            toggleList={() => toggleList("cursos")}
            showList={showList.cursos}
            setActualText={setActualText}
            setActualLogo={setActualLogo}
            actualText={actualText}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div
          className=" w-full flex-col items-start justify-evenly border-2 border-[#222729] rounded-md pt-10
         pl-10 relative z-10"
        >
          <div className=" w-1/2 text-left">
            <div className="flex items-center gap-5 mb-10 text">
              <Image
                src={actualLogo}
                alt="icone"
                width={20}
                height={20}
              ></Image>
              <p>{actualText}</p>
            </div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </h3>
          </div>
          <Image
            src="/graph.png"
            alt="grafico"
            width={620}
            height={350}
            className="mt-5 w-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};
