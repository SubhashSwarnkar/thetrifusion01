/**
 * Product-style case study for /portfolio/plugone-ev-charging-platform.
 * Visual language matches EvChargingProductLayout; facts stay owner-confirmed only.
 */
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "config/site";
import { canonicalInternalHref } from "lib/internalLinks";
import { accentAt } from "lib/themeAccents";
import EvArchitectureDiagram from "components/EvArchitectureDiagram";
import { portfolioImageAlt } from "json/landingPageData";

const INTEGRATIONS = [
  {
    name: "Ecoplug",
    text: "Charger integration tested against Ecoplug hardware for OCPP session control.",
  },
  {
    name: "Sonic",
    text: "Sonic chargers connected through the same OCPP path used by the PlugOne CMS.",
  },
  {
    name: "ChargeMOD",
    text: "ChargeMOD chargers integrated for live status and session start/stop.",
  },
  {
    name: "ChargeIndia (OCPI hub)",
    text: "OCPI roaming and aggregation through the ChargeIndia hub, including other charging networks reachable via that hub.",
  },
];

const BUILT_MODULES = [
  {
    title: "CMS / CSMS",
    text: "Operator console for charger status, sessions, and the content operators update day to day.",
  },
  {
    title: "Driver app",
    text: "iOS, Android and web clients with an interactive charger map, live status, and session management.",
  },
  {
    title: "OCPP connectivity",
    text: "Direct charger-to-CMS connection so hardware telemetry and remote control stay on an open protocol.",
  },
  {
    title: "OCPI roaming",
    text: "Roaming and aggregation via OCPI, including partner networks through the ChargeIndia hub.",
  },
];

const TECH_POINTS = [
  {
    title: "OCPP for hardware",
    text: "Chargers talk to the CMS over OCPP. That keeps PlugOne portable across OCPP-capable models instead of a one-off vendor lock-in.",
  },
  {
    title: "OCPI for roaming",
    text: "Business-to-business roaming and network aggregation use OCPI. ChargeIndia is the OCPI hub path PlugOne uses to reach other charging networks.",
  },
  {
    title: "Multi-surface product",
    text: "Delivery covered mobile clients and a web surface so drivers and operators share the same session truth — not a brochure site with a fake map.",
  },
  {
    title: "Capabilities, not invented outcomes",
    text: "This page names what shipped and what you can open at plugone.in. Session counts, revenue, and store ratings stay unpublished until the product owner supplies numbers we can verify.",
  },
];

function SectionHead({ kicker, title, intro }) {
  return (
    <div className="mb-8 max-w-3xl">
      {kicker ? (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-3">
          {kicker}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-black text-theme-blue tracking-tight">
        {title}
      </h2>
      <div className="mt-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
      {intro ? (
        <p className="mt-5 text-gray-600 font-light leading-relaxed">{intro}</p>
      ) : null}
    </div>
  );
}

function StickyCtaBar({ contactHref, whatsappHref, serviceHref }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-theme-purple/15 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(21,44,91,0.08)] md:hidden">
      <div className="container mx-auto px-4 py-3 flex gap-2">
        <Link
          href={serviceHref}
          className="flex-1 inline-flex items-center justify-center rounded-full bg-theme-purple text-white text-sm font-bold py-3"
        >
          EV CMS
        </Link>
        <Link
          href={contactHref}
          className="flex-1 inline-flex items-center justify-center rounded-full border-2 border-theme-purple/40 text-theme-purple text-sm font-bold py-3"
        >
          Contact
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center rounded-full border-2 border-emerald-500 text-emerald-700 text-sm font-bold py-3"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function PlugOneCaseStudyLayout({ project }) {
  const caseStudy = project?.caseStudy || {};
  const serviceHref = canonicalInternalHref(
    `/services/${project?.relatedServiceSlug || "ev-charging-app-development"}`
  );
  const contactHref = canonicalInternalHref("/contact");
  const waNumber = String(siteConfig.whatsappNumber || "").replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Hi TriFusion, I saw the PlugOne case study and need EV charging CMS / driver app software. Please share a scoped estimate."
  )}`;
  const faqs = caseStudy.faqs || [];
  const summary =
    caseStudy.summary ||
    "PlugOne (plugone.in) is a live EV charging platform client of TheTriFusion. It uses OCPP for charger-to-CMS connectivity and OCPI for roaming, with Ecoplug, Sonic, ChargeMOD, and ChargeIndia (OCPI hub) integrations.";

  return (
    <>
      {/* Answer-first hero */}
      <section id="overview" className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-theme-purple via-white to-cyan-50 -z-10" />
        <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-theme-pink/15 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-theme-cyan/10 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-5">
          <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/portfolio" className="hover:text-theme-purple font-medium">
              Portfolio
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-theme-blue font-semibold">PlugOne</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] mb-5 bg-pink-50 text-theme-pink border border-theme-pink/25">
                Live client case study
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-theme-blue tracking-tight leading-[1.12] mb-4">
                PlugOne EV charging platform
              </h1>
              <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6 max-w-xl">
                {summary}
              </p>
              <ul
                className="flex flex-wrap gap-2 mb-8 list-none m-0 p-0"
                aria-label="PlugOne protocol chips"
              >
                {["OCPP", "OCPI", "CMS + driver app", "ChargeIndia hub"].map(
                  (chip) => (
                    <li
                      key={chip}
                      className="px-3 py-1.5 rounded-full bg-theme-blue text-white text-xs font-bold tracking-wide"
                    >
                      {chip}
                    </li>
                  )
                )}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={project?.credit || "https://plugone.in/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg shadow-theme-purple/25 hover:bg-dark-theme-purple hover:scale-[1.02] transition-all"
                >
                  Open plugone.in
                </a>
                <Link
                  href={serviceHref}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-theme-purple border-2 border-theme-purple/40 rounded-full font-bold hover:bg-light-theme-purple transition-colors"
                >
                  EV charging CMS service
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-theme-purple/15 shadow-xl bg-white">
                <Image
                  src={
                    project?.imageUrl ||
                    "/images/portfolio/plugone-ev-charging-platform.jpg"
                  }
                  alt={portfolioImageAlt(project)}
                  width={1280}
                  height={800}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-500 font-medium">
                Live product home — verify at{" "}
                <a
                  href="https://plugone.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-purple font-semibold hover:underline"
                >
                  plugone.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client & challenge */}
      <section
        id="challenge"
        className="container mx-auto px-5 py-16 border-t border-gray-100 scroll-mt-28"
      >
        <SectionHead
          kicker="Client & challenge"
          title="Why PlugOne needed a real product stack"
          intro={caseStudy.problem}
        />
        <p className="text-gray-600 font-light leading-relaxed max-w-3xl -mt-2">
          PlugOne is a TheTriFusion client. The brief was a production EV
          charging surface operators can update and drivers can trust — not a
          marketing mock with invented session counts.
        </p>
      </section>

      {/* What we built */}
      <section
        id="what-we-built"
        className="container mx-auto px-5 py-16 border-t border-gray-100 scroll-mt-28"
      >
        <SectionHead
          kicker="Delivery"
          title="What TheTriFusion built for PlugOne"
          intro={caseStudy.whatWeBuilt}
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none m-0 p-0 max-w-5xl">
          {BUILT_MODULES.map((item, idx) => {
            const accent = accentAt(idx);
            return (
              <li
                key={item.title}
                className={`rounded-2xl border p-6 ${accent.card}`}
              >
                <h3 className="text-lg font-bold text-theme-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Architecture */}
      <section
        id="architecture"
        className="container mx-auto px-5 py-16 border-t border-gray-100 scroll-mt-28"
      >
        <SectionHead
          kicker="Architecture"
          title="How PlugOne connects chargers, CMS, apps and roaming"
          intro="Same flow as our EV charging management software page: hardware on OCPP, product surfaces on the CMS, roaming on OCPI."
        />
        <EvArchitectureDiagram
          markerId="plugoneEvArrow"
          brandLabel="PlugOne"
        />
      </section>

      {/* Integrations */}
      <section
        id="integrations"
        className="container mx-auto px-5 py-16 border-t border-gray-100 scroll-mt-28"
      >
        <SectionHead
          kicker="Integrations"
          title="Chargers and networks PlugOne talks to"
          intro="Owner-confirmed integrations only. Additional networks reach PlugOne through the ChargeIndia OCPI hub rather than a private invented screenshot."
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0 max-w-5xl">
          {INTEGRATIONS.map((item, idx) => {
            const accent = accentAt(idx);
            return (
              <li
                key={item.name}
                className={`rounded-2xl border p-5 ${accent.card}`}
              >
                <h3 className="text-base font-bold text-theme-blue mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Tech approach */}
      <section
        id="tech-approach"
        className="relative py-16 overflow-hidden scroll-mt-28"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-theme-purple/10 via-white to-theme-pink/10" />
        <div className="container mx-auto px-5 relative">
          <SectionHead
            kicker="Tech approach"
            title="Open protocols, multi-surface delivery"
            intro={caseStudy.deliveryNotes}
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none m-0 p-0 max-w-5xl">
            {TECH_POINTS.map((item, idx) => {
              const accent = accentAt(idx);
              return (
                <li
                  key={item.title}
                  className={`rounded-2xl border p-6 bg-white/80 ${accent.card}`}
                >
                  <h3 className="text-lg font-bold text-theme-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {item.text}
                  </p>
                </li>
              );
            })}
          </ul>
          {caseStudy.forBuyers ? (
            <p className="mt-8 text-gray-600 font-light leading-relaxed max-w-3xl">
              {caseStudy.forBuyers}
            </p>
          ) : null}
        </div>
      </section>

      {/* FAQ */}
      {faqs.length ? (
        <section
          id="faq"
          className="container mx-auto px-5 py-16 border-t border-gray-100 scroll-mt-28"
        >
          <SectionHead
            kicker="FAQ"
            title="Questions buyers ask about PlugOne"
          />
          <div className="max-w-3xl divide-y divide-gray-100 border-y border-gray-100">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="w-full cursor-pointer list-none py-5 flex justify-between items-start gap-4 font-semibold text-theme-blue [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-bold">{faq.question}</h3>
                  <span
                    aria-hidden="true"
                    className="text-theme-purple text-xl leading-none flex-shrink-0 group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 -mt-1 text-sm text-gray-600 font-light leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="container mx-auto px-5 pb-24 md:pb-20">
        <div className="bg-gradient-to-r from-theme-blue via-theme-purple to-theme-cyan rounded-[2rem] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Need EV charging CMS and apps like PlugOne?
          </h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto font-light text-base sm:text-lg">
            Start on the EV charging management software page for modules,
            protocols and starting ranges — or message the Jaipur team with your
            charger models and sites.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={serviceHref}
              className="inline-flex items-center px-8 py-3.5 bg-white text-theme-purple rounded-full font-bold hover:bg-light-theme-purple transition-colors shadow-lg"
            >
              EV charging CMS &amp; app
            </Link>
            <Link
              href={contactHref}
              className="inline-flex items-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold border border-white/30 transition-colors"
            >
              Contact / scoped estimate
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <StickyCtaBar
        contactHref={contactHref}
        whatsappHref={whatsappHref}
        serviceHref={serviceHref}
      />
    </>
  );
}
