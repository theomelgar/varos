"use client";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const sidebarInfo = [
  {
    label: "Produtos",
    content: [
      {
        name: "Carteiras",
        desc: "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido.",
      },
      {
        name: "Cursos",
        desc: "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido.",
      },
      {
        name: "Consultoria",
        desc: "Aprenda a encontrar as melhores ações, invista seu dinheiro de maneira inteligente e construa um futuro financeiro sólido.",
      },
    ],
  },
  {
    label: "Blog",
  },
  {
    label: "Quem somos",
  },
  {
    label: "Conteúdos",
  },
];
export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  const { onOpen, onClose, isOpen } = useMobileSidebar();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`flex flex-col justify-start items-center w-full h-screen fixed top-0 left-0 z-10 pt-20 overflow-y-auto p-6 bg-[#131313] xl:hidden gap-y-5 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center gap-y-3 mb-1 font-semibold ">
        <div className="border w-full justify-center items-center flex py-1 rounded-md gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-lime-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          ENTRAR
        </div>
        <div className="border justify-center items-center flex bg-[#19C819] text-black  px-10 py-1 rounded-md">
          ASSINAR AGORA
        </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-y-4">
        {sidebarInfo.map((route) =>
          route.label === "Produtos" ? (
            <div key={route.label} className=" bg-[#222729] rounded-lg">
              <button>
                <h1 className=" text-start border-b  mb-1 p-7">
                  {route.label}
                </h1>
                {route?.content?.map((c) => (
                  <div
                    className="flex items-start justify-between p-6"
                    key={c.name}
                  >
                    <div>
                      <h2 className=" text-left font-semibold">{c.name}</h2>
                      <h3 className=" text-left text-xs">{c.desc}</h3>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-20 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </div>
                ))}
              </button>
            </div>
          ) : (
            <div key={route.label} className=" w-full border-b mt-2">
              <button>
                <h1 className=" text-start mb-2 ">{route.label}</h1>
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};
