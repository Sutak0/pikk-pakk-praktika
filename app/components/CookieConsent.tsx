"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pikkpakk-cookie-consent";

type Consent = "accepted" | "necessary" | null;

function notify(value: Consent) {
  window.dispatchEvent(new CustomEvent("pikkpakk-consent-changed", { detail: value }));
}

export default function CookieConsent() {
  const trackingEnabled = Boolean(
    process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID
  );
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!trackingEnabled) return;
    const saved = window.localStorage.getItem(STORAGE_KEY) as Consent;
    setConsent(saved === "accepted" || saved === "necessary" ? saved : null);
    setReady(true);
  }, [trackingEnabled]);

  if (!trackingEnabled || !ready || consent) return null;

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    notify(value);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-2xl border-2 border-white/10 bg-tinta p-5 text-white shadow-2xl sm:bottom-5 sm:p-6" role="dialog" aria-label="Süti beállítások">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold">Süti beállítások</p>
          <p className="mt-1 text-sm text-white/65">
            A szükséges sütik mellett – csak a hozzájárulásod után – hirdetési és mérési eszközöket is használhatunk az oldal teljesítményének javítására.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button onClick={() => choose("necessary")} className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
            Csak szükséges
          </button>
          <button onClick={() => choose("accepted")} className="rounded-full bg-sarga px-4 py-2 text-sm font-bold uppercase tracking-wide text-tinta">
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  const trackingEnabled = Boolean(
    process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID
  );

  if (!trackingEnabled) return null;

  const reset = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  return (
    <button type="button" onClick={reset} className="hover:text-sarga">
      Süti beállítások
    </button>
  );
}
