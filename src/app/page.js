import Image from "next/image";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";

export default function Home() {
  return (
    <main className="mt-10">
      <Banner />
      <CategorySection />
    </main>
  );
}
