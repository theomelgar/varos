import Image from "next/image";
import { Products } from "./components/products";
import { Info } from "./components/info";
import { Feedback } from "./components/feedback";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <main className="relative gap-y-4 flex flex-col">
      <Products />
      <Info />
      <Feedback />
      <Contact />
    </main>
  );
}
