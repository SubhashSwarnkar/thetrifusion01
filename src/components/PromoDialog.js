"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AWS_PROMO_OFFER } from "data/promoOffer";
import { trackEvent, AnalyticsEvents } from "utils/analytics";

export default function PromoDialog() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Don't interrupt contact / discuss funnel mid-form
    if (
      pathname?.startsWith("/contact") ||
      pathname?.startsWith("/discuss-project")
    ) {
      return;
    }

    try {
      if (sessionStorage.getItem(AWS_PROMO_OFFER.storageKey) === "1") {
        return;
      }
    } catch {
      // ignore storage errors
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
      trackEvent(AnalyticsEvents.PROMO_VIEW, { offer_id: AWS_PROMO_OFFER.id });
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const dismiss = (reason = "close") => {
    setOpen(false);
    try {
      sessionStorage.setItem(AWS_PROMO_OFFER.storageKey, "1");
    } catch {
      // ignore
    }
    trackEvent(AnalyticsEvents.PROMO_DISMISS, {
      offer_id: AWS_PROMO_OFFER.id,
      reason,
    });
  };

  const claimOffer = () => {
    try {
      sessionStorage.setItem(AWS_PROMO_OFFER.storageKey, "1");
    } catch {
      // ignore
    }
    trackEvent(AnalyticsEvents.PROMO_CLAIM, { offer_id: AWS_PROMO_OFFER.id });
    setOpen(false);
    router.push(`/contact?offer=${AWS_PROMO_OFFER.queryValue}#contact-form`);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-theme-blue/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-dialog-title"
      onClick={() => dismiss("backdrop")}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />

        <button
          type="button"
          onClick={() => dismiss("close")}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-50 text-gray-500 hover:text-theme-blue hover:bg-gray-100 transition-colors text-2xl leading-none"
          aria-label="Close offer dialog"
        >
          ×
        </button>

        <div className="p-7 sm:p-8 text-left">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 rounded-full mb-4">
            {AWS_PROMO_OFFER.deadlineLabel}
          </span>

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-2">
            {AWS_PROMO_OFFER.badge}
          </p>

          <h2
            id="promo-dialog-title"
            className="text-2xl sm:text-3xl font-black text-theme-blue tracking-tight mb-3 leading-tight"
          >
            {AWS_PROMO_OFFER.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-5">
            {AWS_PROMO_OFFER.subtitle}
          </p>

          <ul className="space-y-2.5 mb-6">
            {AWS_PROMO_OFFER.benefits.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm text-theme-blue/90 font-medium"
              >
                <span className="text-theme-purple mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="py-4 px-5 mb-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block mb-1">
              {AWS_PROMO_OFFER.priceLabel}
            </span>
            <span className="text-3xl font-black text-theme-blue">
              {AWS_PROMO_OFFER.price}{" "}
              <span className="text-sm font-medium text-gray-500">
                {AWS_PROMO_OFFER.priceSuffix}
              </span>
            </span>
          </div>

          <button
            type="button"
            onClick={claimOffer}
            className="w-full py-3.5 px-4 bg-theme-purple text-white font-bold rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition shadow-xl shadow-theme-purple/25"
          >
            {AWS_PROMO_OFFER.ctaLabel}
          </button>

          <p className="text-xs text-gray-400 text-center mt-4">
            Limited slots before {AWS_PROMO_OFFER.deadlineLabel.replace("Offer ends ", "")}.
            You will fill email & phone on the contact form — we email you back.
          </p>
        </div>
      </div>
    </div>
  );
}
