"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import WhatsAppButton from "components/WhatsAppButton";
import { COMPANY_PHONE_DISPLAY } from "data/companyInfo";
import { trackEvent, AnalyticsEvents } from "utils/analytics";

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    trackEvent("ads_thank_you", {
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-theme-purple via-white to-cyan-50 -z-10" />
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-4">
            Request received
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-theme-blue mb-5">
            Thanks — the Jaipur team has your brief
          </h1>
          <p className="text-lg text-gray-600 font-light mb-10">
            We usually reply on WhatsApp the same day. If it is urgent, message
            or call now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <WhatsAppButton
              message="Hi TriFusion, I just sent a project form on the website."
              className="inline-flex items-center justify-center px-8 py-3.5 bg-green-500 text-white rounded-full font-bold hover:bg-green-600"
              label="WhatsApp us"
            >
              Continue on WhatsApp
            </WhatsAppButton>
            <a
              href={`tel:${COMPANY_PHONE_DISPLAY.replace(/\s/g, "")}`}
              onClick={() =>
                trackEvent(AnalyticsEvents.CLICK_PHONE, { source: "thank-you" })
              }
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-theme-purple text-theme-purple rounded-full font-bold"
            >
              Call {COMPANY_PHONE_DISPLAY}
            </a>
          </div>
          <Link href="/portfolio" className="text-sm font-semibold text-theme-purple">
            See live work →
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
