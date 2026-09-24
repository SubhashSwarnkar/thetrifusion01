import Link from "next/link";
import {
  Services,
  Portfolios,
  Advantages,
  Testimonials,
} from "json/landingPageData";
import Service from "parts/Service";
import Portfolio from "parts/Portfolio";
import Advantage from "parts/Advantage";
import Testimonial from "parts/Testimonial";
import Discuss from "parts/Discuss";
import TrustBadges from "components/TrustBadges";
import FeaturedCaseStudy from "components/FeaturedCaseStudy";
import SpecializedSolutions from "components/SpecializedSolutions";
import { HOME_FAQS } from "data/companyInfo";

/** Below-the-fold homepage. Server-rendered so Swiper and section JS stay off the client graph. */
export default function HomeRest() {
  return (
    <div className="cv-auto">
      <Service data={Services} />
      <SpecializedSolutions />

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-light-theme-purple/20 -z-10"></div>
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{ animationDelay: "0s" }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-600 font-medium">Live products you can open</div>
            </div>
            <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">24h</div>
              <div className="text-gray-600 font-medium">Scoped estimate reply</div>
            </div>
            <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">Weekly</div>
              <div className="text-gray-600 font-medium">Demo updates</div>
            </div>
            <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{ animationDelay: "3s" }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">Jaipur</div>
              <div className="text-gray-600 font-medium">Pvt. Ltd. office</div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio data={Portfolios} />
      <FeaturedCaseStudy />
      <TrustBadges />
      <Advantage data={Advantages} />
      <Testimonial data={Testimonials} />
      <section className="container mx-auto px-5 py-16">
        <h2 className="text-4xl sm:text-5xl text-theme-blue font-bold mb-4 text-center">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
          Straight answers about location, services, and how we work.
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {HOME_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer font-bold text-theme-blue list-none flex justify-between items-center">
                {faq.question}
                <span className="text-theme-purple text-xl leading-none">+</span>
              </summary>
              <p className="mt-4 text-gray-600 font-light leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
          <p className="text-center pt-4">
            <Link href="/faq" prefetch={false} className="text-theme-purple font-semibold hover:underline">
              More FAQs →
            </Link>
          </p>
        </div>
      </section>
      <Discuss />
    </div>
  );
}
