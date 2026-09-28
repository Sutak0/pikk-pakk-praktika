/**
 * KÖZPONTI ADATOK — a publikus üzleti információk egy helyen.
 */

export const bolt = {
  nev: "Pikk-Pakk Praktika",
  szlogen: "Minden egy helyen!",
  telefon: "+36 30 618 7646",
  telefonHivas: "+36306187646",
  cim: "4031 Debrecen, Derék utca 139.",
  terkepQuery: "Pikk-Pakk Praktika, 4031 Debrecen, Derék utca 139.",
};

export const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  bolt.terkepQuery
)}`;

export type Kategoria = {
  cim: string;
  leiras: string;
  ikon: "kulcs" | "kes" | "csavar" | "tipli" | "haz" | "auto";
};

export const kategoriak: Kategoria[] = [
  {
    cim: "Kulcsmásolás",
    leiras: "Kulcsmásolás helyben, gyors ügyintézéssel a Derék utcai üzletben.",
    ikon: "kulcs",
  },
  {
    cim: "Késélezés",
    leiras: "Késélezést is vállalunk üzletünkben – hozd be a késeidet személyesen.",
    ikon: "kes",
  },
  {
    cim: "Csavarok és kötőelemek",
    leiras: "Csavarok, anyák, alátétek és egyéb kötőelemek többféle méretben.",
    ikon: "csavar",
  },
  {
    cim: "Tiplik",
    leiras: "Tiplik és rögzítési kellékek otthoni javításhoz, szereléshez és barkácsoláshoz.",
    ikon: "tipli",
  },
  {
    cim: "Háztartási cikkek",
    leiras: "Hasznos háztartási kellékek és mindennapi praktikumok egy helyen.",
    ikon: "haz",
  },
  {
    cim: "Autófelszerelési cikkek",
    leiras: "Praktikus autós kellékek és alapvető felszerelések a mindennapokra.",
    ikon: "auto",
  },
];

export const elonyok = [
  { cim: "Gyors kiszolgálás", leiras: "Helyben intézhető szolgáltatások és praktikus termékek." },
  { cim: "Sokféle termék", leiras: "Barkács, háztartás és autófelszerelés egy üzletben." },
  { cim: "Cégeknek is", leiras: "Vállalkozások és cégek megkeresését is szívesen várjuk." },
];

export const nyitvatartas = [
  { nap: "Hétfő", ido: "9:00 – 18:00" },
  { nap: "Kedd", ido: "9:00 – 18:00" },
  { nap: "Szerda", ido: "9:00 – 18:00" },
  { nap: "Csütörtök", ido: "9:00 – 18:00" },
  { nap: "Péntek", ido: "9:00 – 18:00" },
  { nap: "Szombat", ido: "Érdeklődj telefonon", halvany: true },
  { nap: "Vasárnap", ido: "Zárva", halvany: true },
];

export type GaleriaKep = { src: string; alt: string; felirat: string };

export const galeria: GaleriaKep[] = [
  {
    src: "/gallery/bejarat.jpg",
    alt: "A Pikk-Pakk Praktika bolt bejárata és cégére a Derék utcán, Debrecenben",
    felirat: "Pikk-Pakk Praktika – Derék utca 139.",
  },
  {
    src: "/gallery/szerszamfal.jpg",
    alt: "Szerszámfal csiszolókorongokkal, elosztókkal, gumipókokkal és kéziszerszámokkal",
    felirat: "Szerszámok és barkácskellékek",
  },
  {
    src: "/gallery/csavarok-tiplik.jpg",
    alt: "Polcok tele csavarokkal és tiplikkel méret szerint rendezett tárolókban",
    felirat: "Csavarok és tiplik darabra is",
  },
  {
    src: "/gallery/haztartasi-cikkek.jpg",
    alt: "Vödrök, törlőkendők, lakatok, ecsetek és egyéb háztartási cikkek a boltban",
    felirat: "Háztartási cikkek",
  },
  {
    src: "/gallery/autoapolas.jpg",
    alt: "WD-40, féktisztító spray, szélvédőmosó folyadék és ragasztók a pult mellett",
    felirat: "Autófelszerelés és vegyi áru",
  },
  {
    src: "/gallery/kulcsmasolo-gep.jpg",
    alt: "Kulcsmásoló és élező gép a kulcsnyersdarabokkal teli fal előtt",
    felirat: "Kulcsmásolás és élezés helyben",
  },
  {
    src: "/gallery/kulcsmasolas-keselezes.jpg",
    alt: "Pikk-Pakk kulcsmásolás és késélezés plakátok a bolt előtt",
    felirat: "Kulcsmásolás és késélezés",
  },
];

export const faq = [
  {
    kerdes: "Hol található a Pikk-Pakk Praktika Debrecenben?",
    valasz:
      "A Pikk-Pakk Praktika címe: 4031 Debrecen, Derék utca 139. A Google Mapsen Pikk-Pakk Praktika néven is megtalálsz minket.",
  },
  {
    kerdes: "Vállaltok késélezést Debrecenben?",
    valasz:
      "Igen. Késélezést is vállalunk a Derék utca 139. alatti üzletben. A részletekért és az aktuális vállalási feltételekért hívj minket.",
  },
  {
    kerdes: "Van kulcsmásolás a boltban?",
    valasz:
      "Igen, kulcsmásolás is elérhető üzletünkben. Ha egy konkrét kulcstípusról érdeklődnél, érdemes előtte telefonon egyeztetni.",
  },
  {
    kerdes: "Cégek és vállalkozások is kérhetnek ajánlatot?",
    valasz:
      "Igen. Cégek, vállalkozások, karbantartók és egyéb üzleti partnerek megkeresését is szívesen várjuk nagyobb mennyiségű vagy rendszeres igény esetén.",
  },
];
