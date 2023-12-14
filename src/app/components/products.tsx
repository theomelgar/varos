import Image from "next/image";
import React from "react";
import { FloatCard } from "./float-card";

export const Products = () => {
  return (
    <div style={{height:"60svh"}} className="flex justify-between">
      <div className="max-w-[564px] max-h-[533px]">
        <div className="flex flex-col  gap-8">
          <h1 className=" text-6xl font-extrabold">
            Investir de forma mais inteligente passa por aqui.
          </h1>
          <h3 className=" text-lg text-left max-w-[460px]">
            Fazemos de tudo para que você possa conquistar seus sonhos da melhor
            forma possível
          </h3>
          <button className="bg-[#19C81966] text-[#00F700] hover:text-white hover:opacity-75 rounded-2xl w-fit px-14 h-12">
            Comprar agora {"->"}
          </button>
        </div>
        <div className=" w-3/4 mt-16 bg-gradient-to-r from-white/50 to-#131313 h-10 flex justify-end items-center rounded-lg">
          <div className="bg-[#131313]  py-[0.45em] ml-[0.05em] w-full text-center items-center justify-center flex  rounded-lg  ">
            <h1 className="  w-[200px]">
              visto em
            </h1>

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
      <div className="w-full flex flex-col justify-start  items-center gap-10">
        <FloatCard imageUrl="/FATOR.svg" color="#39FFD9">
          Carteira FATOR
        </FloatCard>
        <div className="ml-40">
          <FloatCard imageUrl="/Dividendos.svg" color="#D3D6DF">
            Carteira de dividendos
          </FloatCard>
        </div>
        <FloatCard imageUrl="/CODIGO.svg" color="#1CB799">
          <h1>Código<span className="text-[#1CB799]">.py</span></h1>
        </FloatCard>
      </div>
    </div>
  );
};
