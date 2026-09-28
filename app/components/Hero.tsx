import Image from "next/image";
import { bolt, googleMapsLink } from "../lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-tinta">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "repeating-linear-gradient(-45deg, #ffffff 0 2px, transparent 2px 26px)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12">
        <div className="tick-in overflow-hidden rounded-xl border-2 border-white/10 shadow-2xl">
          <Image
            src="/banner.jpg"
            alt="Pikk-Pakk Praktika Debrecen – kulcsmásolás, csavarok, tiplik, háztartási és autófelszerelési cikkek"
            width={2400}
            height={745}
            priority
            className="h-auto w-full"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sarga px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-tinta">
              <span className="h-2.5 w-2.5 rounded-full bg-narancs" />
              Nyitva • Debrecen, Derék utca 139.
            </span>

            <h1 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-white sm:text-6xl">
              Barkácsbolt, kulcsmásolás
              <br />
              és <span className="text-sarga">késélezés Debrecenben</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-white/75">
              A Pikk-Pakk Praktikában egy helyen találsz barkács- és háztartási kellékeket,
              csavarokat, tipliket és autófelszerelési cikkeket. Kulcsmásolást és késélezést
              is vállalunk üzletünkben.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                data-track="directions_click"
                data-track-label="hero"
                className="rounded-full bg-sarga px-6 py-3 font-bold uppercase tracking-wide text-tinta transition-transform hover:scale-[1.03]"
              >
                Útvonal a Google Mapsen
              </a>
              <a
                href={`tel:${bolt.telefonHivas}`}
                data-track="phone_click"
                data-track-label="hero"
                className="rounded-full border-2 border-white/40 px-6 py-3 font-bold uppercase tracking-wide text-white transition-colors hover:border-sarga hover:text-sarga"
              >
                Hívás: {bolt.telefon}
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border-2 border-sarga/30 bg-szen p-6 sm:p-8" aria-label="Kiemelt szolgáltatások">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-narancs">Helyben, egyszerűen</p>
            <h2 className="mt-2 font-display text-3xl uppercase text-white">Pikk-Pakk elintézed</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              {[
                "Kulcsmásolás helyben",
                "Késélezés az üzletben",
                "Csavarok, tiplik és barkácskellékek",
                "Céges megkereséseket is várunk",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sarga text-sm font-bold text-tinta">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/55">{bolt.cim}</p>
          </aside>
        </div>
      </div>

      <div className="hazard h-3 w-full" aria-hidden />
    </section>
  );
}
