import { bolt, faq, googleMapsLink } from "../lib/data";

export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: bolt.nev,
    description:
      "Barkácsbolt Debrecenben kulcsmásolással és késélezéssel. Csavarok, tiplik, háztartási és autófelszerelési cikkek a Derék utca 139. alatt.",
    telephone: bolt.telefonHivas,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Derék utca 139.",
      postalCode: "4031",
      addressLocality: "Debrecen",
      addressCountry: "HU",
    },
    hasMap: googleMapsLink,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kulcsmásolás Debrecen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Késélezés Debrecen" } },
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.kerdes,
      acceptedAnswer: { "@type": "Answer", text: item.valasz },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    </>
  );
}
