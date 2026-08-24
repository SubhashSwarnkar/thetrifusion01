"use client";

import React, { useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { siteConfig } from "config/site";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-5 py-20 max-w-3xl">
        <h1 className="text-4xl font-black text-theme-blue mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-8">
          {siteConfig.legalName}, Jaipur, Rajasthan.
        </p>
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <p>
            Website content is for information. Project work starts only after a
            written scope and commercial agreement.
          </p>
          <p>
            Estimates from calculators or the AI estimator are indicative, not
            binding quotes.
          </p>
          <p>
            You keep ownership of your content and, after full payment, the
            agreed deliverables. We retain the right to show non-confidential
            work in our portfolio unless you opt out in writing.
          </p>
          <p>
            Contact: {siteConfig.email} · {siteConfig.phone}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
