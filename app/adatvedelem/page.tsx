import type { Metadata } from "next";
import Link from "next/link";
import { bolt } from "../lib/data";

export const metadata: Metadata = {
  title: "Adatkezelés és sütik",
  description: "A Pikk-Pakk Praktika weboldal adatkezelési és süti tájékoztatója.",
  robots: { index: false, follow: true },
};

export default function Adatvedelem() {
  return (
    <main className="min-h-screen bg-kreta px-4 py-12 text-tinta sm:py-20">
      <article className="mx-auto max-w-3xl rounded-3xl border-2 border-tinta/10 bg-white p-6 shadow-sm sm:p-10">
        <Link href="/" className="text-sm font-bold uppercase tracking-wide text-narancs">← Vissza a főoldalra</Link>
        <h1 className="mt-6 font-display text-4xl uppercase sm:text-5xl">Adatkezelés és sütik</h1>
        <p className="mt-5 text-tinta/70">
          Ez a tájékoztató a Pikk-Pakk Praktika weboldalán alkalmazott technikai és mérési megoldásokat foglalja össze.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-extrabold">Kapcsolat</h2>
          <p className="mt-2 text-tinta/70">
            Pikk-Pakk Praktika<br />
            {bolt.cim}<br />
            Telefon: <a className="font-semibold underline" href={`tel:${bolt.telefonHivas}`}>{bolt.telefon}</a>
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-extrabold">Személyes adatok a weboldalon</h2>
          <p className="mt-2 text-tinta/70">
            A weboldalon nincs kapcsolatfelvételi űrlap, regisztráció vagy online vásárlás. Ha telefonon lépsz kapcsolatba az üzlettel,
            az általad önként megadott adatokat kizárólag a megkeresésed kezeléséhez használjuk fel.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-extrabold">Mérési és hirdetési sütik</h2>
          <p className="mt-2 text-tinta/70">
            Amennyiben a weboldalon Google mérés vagy Meta Pixel van beállítva, ezek csak akkor töltődnek be, ha a süti sávban ezt elfogadod.
            Az elutasítás nem akadályozza az oldal használatát. A választásod a böngésződ helyi tárhelyén kerül megjegyzésre.
          </p>
          <p className="mt-3 text-tinta/70">
            Hozzájárulás esetén a mérési szolgáltatók technikai adatokat kaphatnak az oldal használatáról, például oldalmegtekintésről
            vagy arról, hogy rákattintottál-e a hívás/útvonal gombra. Ezeket az adatokat a Google, illetve a Meta a saját adatkezelési
            feltételei szerint kezeli.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-extrabold">Google Maps</h2>
          <p className="mt-2 text-tinta/70">
            Az oldalon Google Maps térkép és Google Maps hivatkozás is megjelenhet. A térkép betöltésekor a Google technikai adatokat kaphat
            a böngésződtől. A Google szolgáltatásaira a Google saját adatvédelmi feltételei vonatkoznak.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-extrabold">A hozzájárulás módosítása</h2>
          <p className="mt-2 text-tinta/70">
            A főoldal láblécében található „Süti beállítások” gombbal törölheted a korábbi választásodat, és újra megadhatod a beállításokat.
            A böngésződben tárolt adatokat manuálisan is törölheted.
          </p>
        </section>

        <p className="mt-10 border-t border-tinta/10 pt-6 text-sm text-tinta/50">Utolsó frissítés: 2026. szeptember 15.</p>
      </article>
    </main>
  );
}
