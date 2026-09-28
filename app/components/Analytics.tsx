"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

const STORAGE_KEY = "pikkpakk-cookie-consent";

export default function Analytics() {
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "";
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
  const googleAdsConversion = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO || "";
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const read = () => setAllowed(window.localStorage.getItem(STORAGE_KEY) === "accepted");
    read();
    const handler = () => read();
    window.addEventListener("pikkpakk-consent-changed", handler);
    return () => window.removeEventListener("pikkpakk-consent-changed", handler);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!allowed) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-track]") : null;
      if (!target) return;
      const eventName = target.dataset.track;
      const label = target.dataset.trackLabel || target.textContent?.trim() || "";
      if (!eventName) return;

      window.gtag?.("event", eventName, {
        event_category: "conversion",
        event_label: label,
      });

      if (googleAdsConversion && (eventName === "phone_click" || eventName === "business_inquiry_click")) {
        window.gtag?.("event", "conversion", { send_to: googleAdsConversion });
      }

      if (eventName === "phone_click" || eventName === "business_inquiry_click") {
        window.fbq?.("track", "Lead", { source: label });
      } else {
        window.fbq?.("trackCustom", eventName, { source: label });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [allowed, googleAdsConversion]);

  if (!allowed) return null;

  return (
    <>
      {googleTagId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} strategy="afterInteractive" />
          <Script id="google-tag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${googleTagId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {metaPixelId && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
