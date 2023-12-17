import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-around w-full h-full mt-10 mb-10">
      <div className="flex md:flex-row flex-col justify-between items-start lg:gap-x-48 md:gap-x-24">
        <div className="">
          <div className=" flex flex-col gap-3 mb-10 ">
            <Image src="/logo.png" alt="logo" width={80} height={80}></Image>
            <Image src="/varos.svg" alt="VAROS" width={80} height={15}></Image>
          </div>
          <div className=" w-full mb-14 flex flex-col justify-end md:hidden">
            <h4>VAROS 2023</h4>
            <h4>Todos os direitos reservados</h4>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 justify-between items-start w-full gap-10">
          <div className=" flex flex-col gap-y-6 ">
            <a href="/" className="font-bold text-xl">
              Cursos
            </a>
            <a href="/">Valuation do Zero ao Avançado 2.0</a>
            <a href="/">Código.py</a>
            <a href="/">Minicurso Reels</a>
            <a href="/">Enciclopédia de FII</a>
          </div>
          <div className=" flex flex-col gap-y-6">
            <a href="/" className="font-bold text-xl">
              Carteiras
            </a>
            <a href="/">Carteira FATOR</a>
            <a href="/">Carteira Seleção</a>
            <a href="/">Carteira Essencial</a>
            <a href="/">Carteira Small Caps</a>
            <a href="/">Carteira Dividendos</a>
            <a href="/">Carteira FIIs</a>
          </div>
          <div className=" flex flex-col gap-y-6">
            <a href="/" className="font-bold text-xl">
              Soobre
            </a>
            <a href="/">Quem somos</a>
          </div>
          <div className=" flex flex-col gap-y-6">
            <a href="/" className="font-bold text-xl">
              Redes Sociais
            </a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
            <a href="/">Youtube</a>
          </div>
        </div>
      </div>
      <div className=" w-full mb-14 md:flex flex-col justify-end hidden">
        <h4>VAROS 2023</h4>
        <h4>Todos os direitos reservados</h4>
      </div>
    </div>
  );
};
