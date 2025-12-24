import Image from "next/image";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsletterSection from "./components/NewsletterSection";

export default function Home() {
  return (
    <main className="mt-10">
      <Banner />
      <CategorySection />
      <ProductSection />
      <TestimonialSection />
      <NewsletterSection />
    </main>
  );
}
