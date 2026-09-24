import Header from "parts/Header";
import Hero from "parts/Hero";
import Footer from "parts/Footer";
import BrandTrustStrip from "components/BrandTrustStrip";
import Link from "next/link";

export default function LandingPage({ trending, below }) {
  return (
      <>
        <Header />
        
        <main className="overflow-hidden">
          <Hero />
          <BrandTrustStrip />

          <section id="home-ecommerce-offer" className="container mx-auto px-5 py-10">
            <div className="rounded-2xl border border-theme-purple/20 bg-gradient-to-br from-light-theme-purple/50 to-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-sm">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-theme-purple mb-2">
                  Ecommerce offer
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-theme-blue mb-2">
                  Ecommerce website live in 48 hours — or 50% refund
                </h2>
                <p className="text-gray-600 font-light">
                  Single vendor from ₹25,000 · Multi-vendor from ₹35,000 · web + Android + iOS framing · Jaipur team.
                </p>
              </div>
              <Link
                href="/ecommerce-development"
                prefetch={false}
                className="inline-flex items-center justify-center shrink-0 px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg shadow-theme-purple/25 hover:scale-[1.02] transition-transform"
              >
                See ecommerce packages
              </Link>
            </div>
          </section>

          <section id="home-explore-hubs" className="container mx-auto px-5 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/blog"
                prefetch={false}
                className="rounded-2xl border border-gray-100 bg-white p-5 hover:border-theme-purple/40 transition-colors shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-theme-purple mb-1">Insights</p>
                <p className="font-bold text-theme-blue">Blog &amp; guides</p>
                <p className="text-sm text-gray-500 font-light mt-1">Trends, AI, apps, ecommerce how-tos — plus company notes on <span className="text-theme-blue">About</span></p>
              </Link>
              <Link
                href="/portfolio"
                prefetch={false}
                className="rounded-2xl border border-gray-100 bg-white p-5 hover:border-theme-purple/40 transition-colors shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-theme-purple mb-1">Proof</p>
                <p className="font-bold text-theme-blue">Live portfolio</p>
                <p className="text-sm text-gray-500 font-light mt-1">Stores and apps you can open</p>
              </Link>
              <Link
                href="/about"
                prefetch={false}
                className="rounded-2xl border border-gray-100 bg-white p-5 hover:border-theme-purple/40 transition-colors shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-theme-purple mb-1">Company</p>
                <p className="font-bold text-theme-blue">About TheTriFusion</p>
                <p className="text-sm text-gray-500 font-light mt-1">Jaipur Pvt. Ltd. team</p>
              </Link>
            </div>
          </section>

          {trending}
          {below}
        </main>
        
        <Footer />
      </>
  );
}
