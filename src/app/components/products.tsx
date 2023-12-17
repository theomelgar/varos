import Image from "next/image";
import React from "react";
import { FloatCard } from "./float-card";

export const Products = () => {
  return (
    <div className="w-full flex md:justify-between justify-center pt-10">
      <div className="md:w-1/2 w-full max-h-[533px]">
        <div className="flex flex-col md:items-start items-center gap-8">
          <h1 className=" xl:text-6xl md:text-5xl text-4xl font-extrabold md:text-left text-center">
            Investir de forma mais inteligente passa por aqui.
          </h1>
          <h3 className=" text-lg md:text-left max-w-[460px] text-center">
            Fazemos de tudo para que você possa conquistar seus sonhos da melhor
            forma possível
          </h3>
          <button className="bg-[#19C81966] text-[#00F700] hover:text-white hover:opacity-75 rounded-2xl w-fit px-14 h-12">
            Comprar agora {"->"}
          </button>
        </div>
        <div className=" w-3/4 mt-16 bg-gradient-to-r from-white/50 to-#131313 h-10 flex justify-end items-center rounded-3xl">
          <div className="bg-[#131313]  py-[0.4em] ml-[0.2em] w-full text-center items-center justify-center flex  rounded-3xl  ">
            <h1 className="  w-[200px]">visto em</h1>

            <div className="scroll-left flex overflow-hidden bg-[#131313] h-full w-full">
              <Image
                src="/brands.png"
                alt="roleta"
                width={570}
                height={79}
                className="scrolling-image"
              ></Image>
              <Image
                src="/brands.png"
                alt="roleta"
                width={570}
                height={79}
                className="scrolling-image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 md:flex flex-col justify-start  items-center gap-10 hidden">
        <FloatCard imageUrl="/FATOR.svg" color="#39FFD9">
          Carteira FATOR
        </FloatCard>
        <div className="ml-40">
          <FloatCard imageUrl="/Dividendos.svg" color="#D3D6DF">
            Carteira de dividendos
          </FloatCard>
        </div>
        <FloatCard imageUrl="/CODIGO.svg" color="#1CB799">
          <h1>
            Código<span className="text-[#1CB799]">.py</span>
          </h1>
        </FloatCard>
      </div>
    </div>
  );
};
