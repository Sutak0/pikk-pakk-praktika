import { bolt } from "../lib/data";
import { CegIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Business() {
  return (
    <section id="cegeknek" className="relative overflow-hidden bg-tinta py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "repeating-linear-gradient(-45deg, #ffffff 0 2px, transparent 2px 28px)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <Reveal className="flex min-h-64 items-center justify-center rounded-3xl border-2 border-sarga/25 bg-szen p-10">
          <CegIcon className="h-36 w-36 text-sarga" aria-hidden />
        </Reveal>

        <Reveal delay={100}>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-narancs">Céges partnereket is várunk</span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
            Beszerzés cégeknek <span className="text-sarga">Debrecenben</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Cégek, vállalkozások, karbantartók és más üzleti partnerek megkeresését is szívesen várjuk.
            Ha rendszeresen van szükségetek barkács- vagy szerelési kellékekre, nagyobb mennyiségre,
            vagy egyedi igényt szeretnétek egyeztetni, keressetek minket telefonon.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Rendszeres beszerzési igények",
              "Nagyobb mennyiség egyeztetése",
              "Egyedi termékigény megbeszélése",
              "Személyes átvétel a Derék utcában",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/80">
                <span className="text-sarga">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href={`tel:${bolt.telefonHivas}`}
            data-track="business_inquiry_click"
            data-track-label="business_section"
            className="mt-8 inline-flex rounded-full bg-sarga px-6 py-3 font-bold uppercase tracking-wide text-tinta transition-transform hover:scale-[1.03]"
          >
            Céges egyeztetés: {bolt.telefon}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
