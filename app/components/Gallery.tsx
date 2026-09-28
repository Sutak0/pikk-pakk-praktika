"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { galeria } from "../lib/data";

const N = galeria.length;

/** Körkörös eltolás az aktuális középső képhez képest (-N/2 … N/2). */
function eltolas(i: number, kozep: number) {
  let d = (i - kozep + N) % N;
  if (d > N / 2) d -= N;
  return d;
}

export default function Gallery() {
  const [kozep, setKozep] = useState(0);
  const [aktiv, setAktiv] = useState<number | null>(null);
  const erintesX = useRef<number | null>(null);

  const forgat = useCallback((irany: number) => setKozep((k) => (k + irany + N) % N), []);

  const bezar = useCallback(() => setAktiv(null), []);
  const lep = useCallback(
    (irany: number) =>
      setAktiv((i) => (i === null ? i : (i + irany + N) % N)),
    []
  );

  useEffect(() => {
    if (aktiv === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") bezar();
      if (e.key === "ArrowRight") lep(1);
      if (e.key === "ArrowLeft") lep(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aktiv, bezar, lep]);

  const nyilGomb =
    "absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-tinta bg-sarga text-tinta shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-tinta/40";

  return (
    <>
      <div
        className="relative mt-12 select-none overflow-x-clip py-4 focus:outline-none"
        role="region"
        aria-roledescription="körhinta"
        aria-label="Képgaléria"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") forgat(1);
          if (e.key === "ArrowLeft") forgat(-1);
        }}
        onTouchStart={(e) => { erintesX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (erintesX.current === null) return;
          const dx = e.changedTouches[0].clientX - erintesX.current;
          if (Math.abs(dx) > 40) forgat(dx < 0 ? 1 : -1);
          erintesX.current = null;
        }}
      >
        <div className="relative mx-auto h-[360px] [perspective:1400px] sm:h-[520px]">
          {galeria.map((kep, i) => {
            const d = eltolas(i, kozep);
            const tav = Math.abs(d);
            const lathato = tav <= 1;
            return (
              <button
                key={kep.src}
                type="button"
                onClick={() => (d === 0 ? setAktiv(i) : forgat(d))}
                tabIndex={lathato ? 0 : -1}
                aria-hidden={!lathato}
                aria-label={d === 0 ? `${kep.felirat} – nagyítás` : kep.felirat}
                className="group absolute left-1/2 top-0 aspect-[3/4] h-full -translate-x-1/2 overflow-hidden rounded-2xl border-2 border-tinta/10 shadow-2xl transition-[transform,opacity,filter] duration-500 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-sarga motion-reduce:transition-none"
                style={{
                  transform: `translateX(calc(-50% + ${d * 62}%)) translateZ(${-tav * 220}px) rotateY(${-d * 38}deg)`,
                  opacity: lathato ? 1 : 0,
                  filter: d === 0 ? "none" : "brightness(0.6)",
                  zIndex: 10 - tav,
                  pointerEvents: lathato ? "auto" : "none",
                }}
              >
                <Image
                  src={kep.src}
                  alt={kep.alt}
                  fill
                  sizes="(max-width: 640px) 80vw, 400px"
                  className="object-cover"
                />
                <span
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-tinta/85 to-transparent p-4 pt-10 text-left transition-opacity duration-500 ${d === 0 ? "opacity-100" : "opacity-0"}`}
                >
                  <span className="text-sm font-semibold text-white">{kep.felirat}</span>
                </span>
              </button>
            );
          })}
        </div>

        <button type="button" onClick={() => forgat(-1)} className={`${nyilGomb} left-0 sm:left-4`} aria-label="Előző kép">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"><path d="M15 5 L8 12 L15 19" /></svg>
        </button>
        <button type="button" onClick={() => forgat(1)} className={`${nyilGomb} right-0 sm:right-4`} aria-label="Következő kép">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5 L16 12 L9 19" /></svg>
        </button>

        <div className="mt-6 flex justify-center gap-2">
          {galeria.map((kep, i) => (
            <button
              key={kep.src}
              type="button"
              onClick={() => setKozep(i)}
              aria-label={`${i + 1}. kép: ${kep.felirat}`}
              aria-current={i === kozep}
              className={`h-2.5 rounded-full transition-all ${i === kozep ? "w-8 bg-sarga" : "w-2.5 bg-tinta/25 hover:bg-tinta/50"}`}
            />
          ))}
        </div>
      </div>

      {aktiv !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-tinta/90 p-4"
          onClick={bezar}
          role="dialog"
          aria-modal="true"
          aria-label={galeria[aktiv].felirat}
        >
          <button
            type="button"
            onClick={bezar}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:border-sarga hover:text-sarga"
            aria-label="Bezárás"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); lep(-1); }}
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:border-sarga hover:text-sarga sm:left-6"
            aria-label="Előző"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M15 5 L8 12 L15 19" /></svg>
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[3/4] max-h-[80vh] w-auto">
              <Image
                src={galeria[aktiv].src}
                alt={galeria[aktiv].alt}
                fill
                sizes="90vw"
                className="rounded-xl object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {galeria[aktiv].felirat}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); lep(1); }}
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:border-sarga hover:text-sarga sm:right-6"
            aria-label="Következő"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5 L16 12 L9 19" /></svg>
          </button>
        </div>
      )}
    </>
  );
}
