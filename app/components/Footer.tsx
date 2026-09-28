import { bolt, googleMapsLink } from "../lib/data";
import { CookieSettingsButton } from "./CookieConsent";

export default function Footer() {
  const ev = new Date().getFullYear();
  return (
    <footer id="kapcsolat" className="bg-szen text-white">
      <div className="hazard h-3 w-full" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6 md:pb-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl uppercase leading-none text-white">Pikk-Pakk</span>
              <span className="font-display text-2xl uppercase leading-none text-narancs">Praktika</span>
            </div>
            <p className="mt-4 max-w-sm text-white/60">
              Barkácsbolt, kulcsmásolás és késélezés Debrecenben. Csavarok, tiplik, háztartási és autófelszerelési cikkek – {bolt.szlogen}
            </p>
            <p className="mt-4 inline-block rounded-full bg-sarga px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-tinta">
              Cégek megkeresését is várjuk
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg uppercase tracking-wide text-sarga">Kapcsolat</h3>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>
                <a href={`tel:${bolt.telefonHivas}`} data-track="phone_click" data-track-label="footer" className="hover:text-sarga">
                  {bolt.telefon}
                </a>
              </li>
              <li>{bolt.cim}</li>
              <li>
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" data-track="directions_click" data-track-label="footer" className="hover:text-sarga">
                  Megnyitás Google Mapsen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg uppercase tracking-wide text-sarga">Nyitvatartás</h3>
            <ul className="mt-4 space-y-2 text-white/75">
              <li className="flex justify-between gap-4">
                <span>Hétfő – Péntek</span>
                <span className="font-semibold text-white">9:00 – 18:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Szombat</span>
                <span className="text-right text-white/50">Érdeklődj telefonon</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Vasárnap</span>
                <span className="text-white/50">Zárva</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center">
          <span>© {ev} Pikk-Pakk Praktika. Minden jog fenntartva.</span>
          <div className="flex gap-4">
            <a href="/adatvedelem" className="hover:text-sarga">Adatkezelés</a>
            <CookieSettingsButton />
            <a href="#top" className="hover:text-sarga">Vissza az oldal tetejére</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
