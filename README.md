# Pikk-Pakk Praktika – kész weboldal

Egyoldalas, mobilbarát Next.js landing page a **Pikk-Pakk Praktika** debreceni üzletnek.

## Publikus üzleti adatok

- Cím: **4031 Debrecen, Derék utca 139.**
- Telefon: **+36 30 618 7646**
- Fő szolgáltatások: **kulcsmásolás, késélezés**
- Termékkörök: csavarok és kötőelemek, tiplik, háztartási cikkek, autófelszerelési cikkek
- Cégek és vállalkozások megkeresését is várják
- A Google Maps blokk a **„Pikk-Pakk Praktika, 4031 Debrecen, Derék utca 139.”** keresésre mutat

A korábbi nyitás előtti kommunikáció, visszaszámláló, nyitási akció és minta akciós árak ki lettek véve.

---

## Indítás helyben

Szükséges: Node.js 20+ ajánlott.

```bash
npm install
npm run dev
```

Ezután: `http://localhost:3000`

Éles ellenőrzés:

```bash
npm run build
npm run start
```

---

## Publikálás

A projekt Vercelen vagy bármely Next.js-t támogató tárhelyen publikálható.

A saját domainhez érdemes beállítani ezt a környezeti változót:

```env
NEXT_PUBLIC_SITE_URL=https://sajatdomain.hu
```

Vercelen a projekt a Vercel production URL-jét automatikusan is fel tudja használni, de saját domainnél a fenti változó ajánlott a canonical URL, sitemap és Open Graph URL miatt.

A szükséges változók mintája a `.env.example` fájlban található.

---

## SEO – ami már be van építve

- lokális, debreceni kulcsszavak a title/description/meta adatokban
- egyedi H1 és logikus H2/H3 struktúra
- természetes kulcsszavas szöveg a főoldalon
- kulcsmásolás Debrecen / késélezés Debrecen / barkácsbolt Debrecen fókusz
- Derék utca 139. és Pikk-Pakk Praktika lokációs jelzések
- Google Maps útvonal CTA
- `HardwareStore` LocalBusiness schema.org JSON-LD
- szolgáltatás ajánlatok JSON-LD-ben
- FAQPage strukturált adat
- `robots.txt`
- `sitemap.xml`
- canonical URL
- Open Graph + Twitter meta adatok
- SEO-barát képleírások
- self-hosted betűtípusok
- reszponzív, mobil-first felépítés
- gyors CTA-k mobilon

### Fő keresési témák

- Pikk-Pakk Praktika Debrecen
- barkácsbolt Debrecen
- kulcsmásolás Debrecen
- késélezés Debrecen
- csavar bolt Debrecen
- kötőelemek Debrecen
- tipli Debrecen
- háztartási cikkek Debrecen
- autófelszerelés Debrecen
- Derék utca 139.

---

## Hirdetésmérés – Google / Meta

A weboldal hirdetésmérésre elő van készítve, de az azonosítókat szándékosan nem tartalmazza a forráskód.

`.env.local` vagy a tárhely Environment Variables részében állítható:

```env
NEXT_PUBLIC_GOOGLE_TAG_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO=AW-XXXXXXXXX/XXXXXXXXXXXX
```

- `NEXT_PUBLIC_GOOGLE_TAG_ID`: GA4 vagy Google Ads Google tag
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta/Facebook Pixel
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO`: opcionális közvetlen Google Ads conversion `send_to` érték

Ha nincs tracking ID beállítva, a külső mérőkódok nem töltődnek be és a süti banner sem jelenik meg.

Ha van tracking ID, a mérőkód csak akkor töltődik be, ha a látogató elfogadja a mérési/hirdetési sütiket.

Automatikusan mérhető CTA események:

- `phone_click`
- `directions_click`
- `business_inquiry_click`

Telefonos és céges CTA esetén a Meta Pixel `Lead` eseményt is küld, valamint a Google Ads közvetlen conversion eventet is, ha a `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO` be van állítva.

---

## Adatkezelés

Az `/adatvedelem` oldalon van egy rövid adatkezelési/süti tájékoztató. A weboldalon nincs űrlap, regisztráció vagy online fizetés.

A mérési hozzájárulás visszaállítható a főoldal láblécében a **Süti beállítások** gombbal.

---

## Tartalom módosítása

A fő üzleti adatok az `app/lib/data.ts` fájlban vannak:

- név
- telefonszám
- cím
- Google Maps keresés
- szolgáltatások
- termékkörök
- nyitvatartás
- galéria
- GYIK

### Képek

- fő banner: `public/banner.jpg`
- galéria: `public/gallery/`

---

## Fontos fájlok

```text
app/
  layout.tsx                 SEO meta, Open Graph, tracking komponensek
  page.tsx                   főoldal felépítése
  robots.ts                  robots.txt
  sitemap.ts                 sitemap.xml
  manifest.ts                web app manifest
  adatvedelem/page.tsx       adatkezelési / süti oldal
  lib/data.ts                központi üzleti tartalom
  components/
    Header.tsx
    Hero.tsx
    Categories.tsx
    Business.tsx
    Hours.tsx
    GallerySection.tsx
    Gallery.tsx
    SeoFaq.tsx
    Footer.tsx
    MobileCta.tsx
    JsonLd.tsx
    Analytics.tsx
    CookieConsent.tsx
public/
  banner.jpg
  gallery/
```
