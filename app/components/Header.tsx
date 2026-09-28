"use client";

import { useState } from "react";
import { bolt } from "../lib/data";

const linkek = [
  { href: "#szolgaltatasok", cimke: "Szolgáltatások" },
  { href: "#cegeknek", cimke: "Cégeknek" },
  { href: "#nyitvatartas", cimke: "Nyitvatartás" },
  { href: "#galeria", cimke: "Galéria" },
  { href: "#gyik", cimke: "GYIK" },
  { href: "#kapcsolat", cimke: "Kapcsolat" },
];

export default function Header() {
  const [nyitva, setNyitva] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hazard-thin h-2 w-full" aria-hidden />
      <div className="border-b-2 border-tinta bg-kreta/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-baseline gap-2" aria-label="Pikk-Pakk Praktika – kezdőlap">
            <span className="font-display text-xl uppercase leading-none tracking-tight text-tinta sm:text-2xl">
              Pikk-Pakk
            </span>
            <span className="font-display text-xl uppercase leading-none tracking-tight text-narancs sm:text-2xl">
              Praktika
            </span>
          </a>

          <nav className="hidden items-center gap-5 md:flex" aria-label="Fő navigáció">
            {linkek.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wide text-tinta/80 transition-colors hover:text-narancs"
              >
                {l.cimke}
              </a>
            ))}
            <a
              href={`tel:${bolt.telefonHivas}`}
              data-track="phone_click"
              data-track-label="header"
              className="rounded-full bg-tinta px-4 py-2 text-sm font-bold uppercase tracking-wide text-sarga transition-colors hover:bg-narancs hover:text-tinta"
            >
              {bolt.telefon}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setNyitva((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-tinta text-tinta md:hidden"
            aria-expanded={nyitva}
            aria-label="Menü"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-tinta transition-all ${nyitva ? "top-2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-tinta transition-all ${nyitva ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-tinta transition-all ${nyitva ? "top-2 -rotate-45" : "top-4"}`} />
            </span>
          </button>
        </div>

        {nyitva && (
          <nav className="border-t-2 border-tinta/10 bg-kreta px-4 pb-4 md:hidden" aria-label="Mobil navigáció">
            <ul className="flex flex-col">
              {linkek.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setNyitva(false)}
                    className="block border-b border-tinta/10 py-3 font-semibold uppercase tracking-wide text-tinta/85"
                  >
                    {l.cimke}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${bolt.telefonHivas}`}
                  data-track="phone_click"
                  data-track-label="mobile_menu"
                  className="mt-3 block rounded-full bg-tinta py-3 text-center font-bold uppercase tracking-wide text-sarga"
                >
                  {bolt.telefon}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
