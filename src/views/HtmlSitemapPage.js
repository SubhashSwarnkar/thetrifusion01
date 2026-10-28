"use client";

import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";

function Group({ title, items }) {
  if (!items?.length) return null;
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-black text-theme-blue mb-4">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-theme-purple font-semibold hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function HtmlSitemapPage({ groups }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs />
      <main className="container mx-auto px-5 py-12 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-theme-purple mb-3">
          Sitemap
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-theme-blue mb-4 tracking-tight">
          HTML sitemap
        </h1>
        <p className="text-gray-600 font-light mb-10 max-w-2xl">
          Indexable pages on thetrifusion.in — services, solutions, and blog
          posts. XML sitemaps live at{" "}
          <a href="/sitemap.xml" className="font-semibold text-theme-purple hover:underline">
            /sitemap.xml
          </a>
          .
        </p>
        {groups.map((group) => (
          <Group key={group.title} title={group.title} items={group.items} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
