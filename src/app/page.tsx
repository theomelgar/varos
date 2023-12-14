import Image from "next/image";
import { Products } from "./components/products";
import { Info } from "./components/info";

export default function Home() {
  return (
    <main className="relative ">
      <Products />
      <Info />
    </main>
  );
}
