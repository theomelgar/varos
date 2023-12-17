import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { MobileNavbar } from "./components/mobile-navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const red = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varos",
  description: "Invista de forma mais inteligente com a gente",

  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${red.className} xl:px-[15%] px-[4%] pt-[10%]`}>
        <Navbar />
        <MobileNavbar />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
