"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "tf_cookie_consent";

function pushConsent(granted) {
  window.dataLayer = window.dataLayer || [];
  const gtag =
    typeof window.gtag === "function"
      ? window.gtag
      : function gtag() {
          window.dataLayer.push(arguments);
        };
  window.gtag = gtag;
  gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "granted") {
      pushConsent(true);
      return;
    }
    if (saved === "denied") {
      pushConsent(false);
      return;
    }
    setVisible(true);
  }, []);

  const choose = (granted) => {
    window.localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    pushConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[60] rounded-2xl bg-theme-blue text-white p-5 shadow-2xl border border-white/10"
    >
      <p className="text-sm font-light leading-relaxed mb-4">
        We use cookies for Google Analytics so we can see which pages help
        visitors. Ads cookies stay off. See our{" "}
        <Link href="/privacy" className="underline text-theme-cyan">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose(true)}
          className="px-4 py-2 rounded-xl bg-theme-purple font-bold text-sm hover:opacity-90"
        >
          Accept analytics
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="px-4 py-2 rounded-xl bg-white/10 font-bold text-sm hover:bg-white/20"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
