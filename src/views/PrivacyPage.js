"use client";

import React, { useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { siteConfig } from "config/site";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-5 py-20 max-w-3xl">
        <h1 className="text-4xl font-black text-theme-blue mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-8">
          {siteConfig.legalName} (“TheTriFusion”), Jaipur, Rajasthan.
        </p>
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <p>
            We collect contact details you submit (name, email, phone, project
            notes) to reply to enquiries. Forms may also store marketing
            attribution such as UTM parameters.
          </p>
          <p>
            We do not sell personal data. We use email delivery, analytics, and
            hosting providers as processors. You can ask us to delete your
            enquiry data at {siteConfig.email}.
          </p>
          <p>
            This site may use cookies for analytics. You can block cookies in
            your browser.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
