import { kategoriak, elonyok } from "../lib/data";
import { ikonMap } from "./Icons";
import Reveal from "./Reveal";
import SectionCim from "./SectionCim";

export default function Categories() {
  return (
    <section id="szolgaltatasok" className="bg-kreta py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionCim
          eyebrow="Amiért érdemes beugrani"
          cim="Szolgáltatások és termékkörök"
          leiras="Barkácsbolt Debrecenben, ahol a praktikus termékek mellett kulcsmásolást és késélezést is találsz."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kategoriak.map((k, i) => {
            const Ikon = ikonMap[k.ikon];
            return (
              <Reveal
                as="article"
                key={k.cim}
                delay={i * 70}
                className="lift group rounded-2xl border-2 border-tinta/10 bg-white p-6 hover:border-sarga"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-tinta text-sarga transition-colors group-hover:bg-narancs group-hover:text-tinta">
                  <Ikon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-tinta">{k.cim}</h3>
                <p className="mt-2 text-tinta/70">{k.leiras}</p>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {elonyok.map((e, i) => (
            <Reveal key={e.cim} delay={i * 80} className="flex items-start gap-3 rounded-xl border-2 border-tinta/10 bg-white px-5 py-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sarga text-tinta" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12 l5 5 L20 6" />
                </svg>
              </span>
              <div>
                <p className="font-bold uppercase tracking-wide text-tinta">{e.cim}</p>
                <p className="text-sm text-tinta/60">{e.leiras}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
