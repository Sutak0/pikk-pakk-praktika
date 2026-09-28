import { bolt, faq, googleMapsLink } from "../lib/data";
import Reveal from "./Reveal";
import SectionCim from "./SectionCim";

export default function SeoFaq() {
  return (
    <section id="gyik" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionCim
          eyebrow="Helyi barkácsbolt Debrecenben"
          cim="Pikk-Pakk Praktika – Derék utca 139."
          leiras="Ha kulcsmásolást, késélezést, csavart, tiplit, háztartási vagy autófelszerelési cikket keresel Debrecenben, nézz be hozzánk."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal className="rounded-2xl border-2 border-tinta/10 bg-kreta p-6 sm:p-8">
            <h3 className="font-display text-2xl uppercase text-tinta">Mit találsz nálunk?</h3>
            <div className="mt-5 space-y-4 text-tinta/75">
              <p>
                A <strong className="text-tinta">Pikk-Pakk Praktika Debrecen</strong> egy helyi barkács- és praktika üzlet a
                <strong className="text-tinta"> Derék utca 139.</strong> alatt. A boltban többek között csavarok, kötőelemek,
                tiplik, háztartási kellékek és autófelszerelési cikkek érhetők el.
              </p>
              <p>
                Szolgáltatásként <strong className="text-tinta">kulcsmásolást</strong> és <strong className="text-tinta">késélezést</strong> is vállalunk.
                Magánvásárlók mellett cégek és vállalkozások megkeresését is várjuk rendszeres vagy nagyobb beszerzési igény esetén.
              </p>
              <p>
                A legegyszerűbben a Google Maps segítségével találsz ide; keresd a <strong className="text-tinta">Pikk-Pakk Praktika</strong> nevet,
                vagy használd az alábbi útvonaltervezőt.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                data-track="directions_click"
                data-track-label="seo_section"
                className="rounded-full bg-tinta px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-sarga"
              >
                Google Maps
              </a>
              <a
                href={`tel:${bolt.telefonHivas}`}
                data-track="phone_click"
                data-track-label="seo_section"
                className="rounded-full border-2 border-tinta/20 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-tinta"
              >
                {bolt.telefon}
              </a>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <Reveal key={item.kerdes} delay={i * 60} className="rounded-2xl border-2 border-tinta/10 bg-white p-5 sm:p-6">
                <h3 className="font-body text-lg font-extrabold text-tinta">{item.kerdes}</h3>
                <p className="mt-2 text-tinta/65">{item.valasz}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
