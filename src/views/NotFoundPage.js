"use client";

import React from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import NotFoundImg from "assets/images/NotFound.png";

const SUGGESTED = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-5 pt-32 pb-20 text-center">
        <p className="text-theme-purple font-bold uppercase tracking-[0.2em] text-xs mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-theme-blue mb-4">
          This page is not on the sitemap
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          The URL may be mistyped or the page moved. Try one of these, or go
          home — TheTriFusion is a software company in Jaipur, Rajasthan.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {SUGGESTED.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-2.5 rounded-full border border-theme-purple/30 text-theme-purple font-bold hover:bg-light-theme-purple"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <img
          src={NotFoundImg}
          alt="TheTriFusion 404 — page not found, return to Jaipur software company homepage"
          className="mx-auto max-w-md w-full opacity-90"
        />
      </main>
      <Footer hideNewsletter />
    </div>
  );
}
