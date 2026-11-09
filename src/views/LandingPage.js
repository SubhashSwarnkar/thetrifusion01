import Header from "parts/Header";
import Hero from "parts/Hero";
import Footer from "parts/Footer";
import BrandTrustStrip from "components/BrandTrustStrip";
import ConnectDairyProductHighlight from "components/ConnectDairyProductHighlight";
import Link from "next/link";

export default function LandingPage({ trending, below }) {
  return (
      <>
        <Header />
        
        <main className="overflow-hidden">
          <Hero />
          <ConnectDairyProductHighlight />
          <BrandTrustStrip />

          <section id="home-explore-hubs" className="container mx-auto px-5 pb-6 pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/services"
                prefetch={false}
                className="rounded-2xl border border-gray-100 bg-white p-5 hover:border-theme-purple/40 transition-colors shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-theme-purple mb-1">Services</p>
                <p className="font-bold text-theme-blue">What we build</p>
                <p className="text-sm text-gray-500 font-light mt-1">Websites, apps, ecommerce, fintech, and more from Jaipur</p>
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
