import { bolt, googleMapsLink, nyitvatartas } from "../lib/data";
import Reveal from "./Reveal";
import SectionCim from "./SectionCim";

export default function Hours() {
  const terkepSrc = `https://maps.google.com/maps?q=${encodeURIComponent(bolt.terkepQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="nyitvatartas" className="bg-szen py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionCim
          sotet
          eyebrow="Mikor és hol"
          cim="Nyitvatartás & Google Maps"
          leiras="A Pikk-Pakk Praktika a Google Mapsen is megtalálható: 4031 Debrecen, Derék utca 139."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border-2 border-white/10 bg-tinta p-6 sm:p-8">
            <h3 className="font-display text-2xl uppercase text-sarga">Nyitvatartás</h3>
            <ul className="mt-5 divide-y divide-white/10">
              {nyitvatartas.map((n) => (
                <li key={n.nap} className="flex items-center justify-between gap-4 py-3">
                  <span className="font-semibold uppercase tracking-wide text-white/85">{n.nap}</span>
                  <span className={`text-right font-body tabular-nums ${n.halvany ? "text-white/50" : "font-bold text-white"}`}>
                    {n.ido}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-lg bg-white/5 px-4 py-3 text-sm text-white/60">
              Szombati nyitvatartásért és konkrét szolgáltatással kapcsolatos kérdésért hívd az üzletet: {bolt.telefon}.
            </p>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-2xl border-2 border-white/10 bg-tinta">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl uppercase text-sarga">Pikk-Pakk Praktika</h3>
                  <p className="mt-3 text-lg text-white">{bolt.cim}</p>
                </div>
                <span className="rounded-full border border-sarga/30 bg-sarga/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sarga">
                  Google Maps
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="directions_click"
                  data-track-label="map_section"
                  className="rounded-full bg-sarga px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-tinta transition-transform hover:scale-[1.03]"
                >
                  Útvonalterv
                </a>
                <a
                  href={`tel:${bolt.telefonHivas}`}
                  data-track="phone_click"
                  data-track-label="map_section"
                  className="rounded-full border-2 border-white/30 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-sarga hover:text-sarga"
                >
                  Hívás
                </a>
              </div>
            </div>
            <div className="h-72 w-full border-t-2 border-white/10 sm:h-80">
              <iframe
                title="Google Maps – Pikk-Pakk Praktika, Debrecen, Derék utca 139."
                src={terkepSrc}
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
