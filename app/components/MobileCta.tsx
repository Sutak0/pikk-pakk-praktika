import { bolt, googleMapsLink } from "../lib/data";

export default function MobileCta() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-tinta/95 p-2 shadow-2xl backdrop-blur md:hidden">
      <a
        href={`tel:${bolt.telefonHivas}`}
        data-track="phone_click"
        data-track-label="mobile_sticky"
        className="rounded-xl bg-sarga px-3 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-tinta"
      >
        Hívás
      </a>
      <a
        href={googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        data-track="directions_click"
        data-track-label="mobile_sticky"
        className="rounded-xl border border-white/25 px-3 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-white"
      >
        Útvonal
      </a>
    </div>
  );
}
