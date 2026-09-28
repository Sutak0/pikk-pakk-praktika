import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pikk-Pakk Praktika Debrecen",
    short_name: "Pikk-Pakk Praktika",
    description: "Barkácsbolt, kulcsmásolás és késélezés Debrecenben.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4ef",
    theme_color: "#111111",
    lang: "hu",
  };
}
