"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONSENT_DENIED,
  CONSENT_GRANTED,
  COOKIE_CONSENT_KEY,
} from "lib/gtagConsent";

function gtagUpdate(state) {
  window.dataLayer = window.dataLayer || [];
  const gtag =
    typeof window.gtag === "function"
      ? window.gtag
      : function gtag() {
          window.dataLayer.push(arguments);
        };
  window.gtag = gtag;
  gtag("consent", "update", state);
}

function allConsentGranted() {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, "granted");
  gtagUpdate(CONSENT_GRANTED);
}

function allConsentDenied() {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, "denied");
  gtagUpdate(CONSENT_DENIED);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.allConsentGranted = () => {
      allConsentGranted();
      setVisible(false);
    };

    const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!saved) setVisible(true);

    const open = () => setVisible(true);
    window.addEventListener("tf-open-cookie-settings", open);
    return () => {
      window.removeEventListener("tf-open-cookie-settings", open);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[60] rounded-2xl bg-theme-blue text-white p-5 shadow-2xl border border-white/10"
    >
      <p className="text-sm font-light leading-relaxed mb-4">
        We use cookies for Google Analytics and optional advertising
        measurement. Choose Accept all or Reject. See our{" "}
        <Link href="/privacy" className="underline text-theme-cyan">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            allConsentGranted();
            setVisible(false);
          }}
          className="px-4 py-2 rounded-xl bg-theme-purple font-bold text-sm hover:opacity-90"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={() => {
            allConsentDenied();
            setVisible(false);
          }}
          className="px-4 py-2 rounded-xl bg-white/10 font-bold text-sm hover:bg-white/20"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
