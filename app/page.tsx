import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Business from "./components/Business";
import Hours from "./components/Hours";
import GallerySection from "./components/GallerySection";
import SeoFaq from "./components/SeoFaq";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import MobileCta from "./components/MobileCta";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Categories />
        <Business />
        <Hours />
        <GallerySection />
        <SeoFaq />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
