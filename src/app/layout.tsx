import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const red = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varos",
  description: "Invista de forma mais inteligente com a gente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={red.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
