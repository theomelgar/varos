import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-around w-full h-full mt-10">
      <div className="flex justify-between items-start gap-x-48">
        <div className=" flex flex-col gap-3">
          <Image src="/logo.png" alt="logo" width={80} height={80}></Image>
          <Image src="/varos.svg" alt="VAROS" width={80} height={15}></Image>
        </div>
        <div className="flex justify-between items-start w-full">
          <div className=" flex flex-col gap-y-6 ">
            <h3 className="font-bold text-xl">Cursos</h3>
            <h3>Valuation do Zero ao Avançado 2.0</h3>
            <h3>Código.py</h3>
            <h3>Minicurso Reels</h3>
            <h3>Enciclopédia de FII</h3>
          </div>
          <div className=" flex flex-col gap-y-6">
            <h3 className="font-bold text-xl">Carteiras</h3>
            <h3>Carteira FATOR</h3>
            <h3>Carteira Seleção</h3>
            <h3>Carteira Essencial</h3>
            <h3>Carteira Small Caps</h3>
            <h3>Carteira Dividendos</h3>
            <h3>Carteira FIIs</h3>
          </div>
          <div className=" flex flex-col gap-y-6">
            <h3 className="font-bold text-xl">Soobre</h3>
            <h3>Quem somos</h3>
            
          </div>
          <div className=" flex flex-col gap-y-6">
            <h3 className="font-bold text-xl">Redes Sociais</h3>
            <h3>Instagram</h3>
            <h3>Twitter</h3>
            <h3>Youtube</h3>
          </div>
        </div>
      </div>
      <div className=" w-full mb-14 flex flex-col">
        <h4>VAROS 2023</h4>
        <h4>Todos os direitos reservados</h4>
      </div>
    </div>
  );
};
