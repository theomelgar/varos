"use client";
import Image from "next/image";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Sidebar } from "./sidebar";

export const MobileNavbar = () => {
  const { onOpen, isOpen, onClose } = useMobileSidebar(); // Fetching the onOpen function from the hook

  return (
    <>
      <Sidebar />
      <nav className="text-white w-full h-[64px] fixed z-20 bg-[#131313] top-0 left-0 flex justify-between items-center px-[5%]   xl:hidden">
        <Image
          src="/varos.svg"
          alt="logo"
          width={80}
          height={15}
          className="cursor-pointer"
        />
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={onOpen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </nav>
    </>
  );
};
