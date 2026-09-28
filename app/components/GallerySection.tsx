import Gallery from "./Gallery";
import SectionCim from "./SectionCim";

export default function GallerySection() {
  return (
    <section id="galeria" className="bg-kreta py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionCim
          eyebrow="Nézz be hozzánk"
          cim="A debreceni üzlet"
          leiras="Pillants be a Pikk-Pakk Praktika Derék utcai üzletébe – barkács-, szerelési és háztartási kellékek egy helyen."
        />
        <Gallery />
      </div>
    </section>
  );
}
