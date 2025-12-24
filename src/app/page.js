import Image from "next/image";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <main className="mt-10">
      <Banner />
      <CategorySection />
      <ProductSection />
    </main>
  );
}
