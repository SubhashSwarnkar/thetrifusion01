import Link from "next/link";
import ServiceIcon from "components/ServiceIcon";
import { accentAt } from "lib/themeAccents";

const GROUPS = [
  {
    id: "websites-design-demand",
    heading: "Websites, design, and demand",
    intro: "Marketing sites, product UI, brand kits, and paid/organic growth.",
    items: [
      {
        href: "/services/website-development",
        slug: "website-development",
        title: "Website development",
        benefit: "Company sites and lead-gen pages",
        price: "From ₹15,000",
      },
      {
        href: "/services/ui-ux-design",
        slug: "ui-ux-design",
        title: "UI/UX design",
        benefit: "Figma flows for web and apps",
        price: "From ₹20,000",
      },
      {
        href: "/services/graphic-design",
        slug: "graphic-design",
        title: "Graphic design",
        benefit: "Campaign kits matched to your live site",
        price: "From ₹10,000",
      },
      {
        href: "/services/branding",
        slug: "branding",
        title: "Branding",
        benefit: "Logo, colour, type, and guidelines",
        price: "From ₹30,000",
      },
      {
        href: "/services/digital-marketing",
        slug: "digital-marketing",
        title: "Digital marketing",
        benefit: "SEO, Google Ads, and Meta Ads",
        price: "From ₹15,000",
      },
    ],
  },
  {
    id: "apps-and-cloud",
    heading: "Apps and cloud",
    intro: "Mobile products, AI assistants, infrastructure, and dedicated seats.",
    items: [
      {
        href: "/services/mobile-app-development",
        slug: "mobile-app-development",
        title: "Mobile app development",
        benefit: "iOS + Android MVPs with a shared backend",
        price: "From ₹2,50,000",
      },
      {
        href: "/services/ios-app-development",
        slug: "ios-app-development",
        title: "iOS app development",
        benefit: "App Store-first Swift or React Native",
        price: "From ₹2,50,000",
      },
      {
        href: "/services/android-app-development",
        slug: "android-app-development",
        title: "Android app development",
        benefit: "Play Store-first Kotlin or React Native",
        price: "From ₹2,50,000",
      },
      {
        href: "/services/ai-development",
        slug: "ai-development",
        title: "AI development",
        benefit: "Assistants with a human review step",
        price: "From ₹2,00,000",
      },
      {
        href: "/services/devops",
        slug: "devops",
        title: "DevOps",
        benefit: "CI/CD and cloud — audit first",
        price: null,
      },
      {
        href: "/services/on-demand",
        slug: "on-demand",
        title: "Hire dedicated developers",
        benefit: "Named React, Node, or mobile seats",
        price: null,
      },
    ],
  },
  {
    id: "ops-software",
    heading: "Ops software and rails",
    intro: "Internal tools, CRM/ERP, automation, and industry platforms.",
    items: [
      {
        href: "/services/software-development",
        slug: "software-development",
        title: "Custom software",
        benefit: "Portals, APIs, and product backends",
        price: "From ₹1,00,000",
      },
      {
        href: "/services/crm-erp-development",
        slug: "crm-erp-development",
        title: "CRM & ERP",
        benefit: "Pipelines, inventory, and GST billing",
        price: "From ₹3,00,000",
      },
      {
        href: "/services/rpa",
        slug: "rpa",
        title: "RPA services",
        benefit: "Invoice and Tally automation bots",
        price: "From ₹50,000",
      },
      {
        href: "/services/salesforce",
        slug: "salesforce",
        title: "Salesforce implementation",
        benefit: "Flows on an org you already pay for",
        price: null,
      },
      {
        href: "/services/business-modernization",
        slug: "business-modernization",
        title: "Business modernization",
        benefit: "Spreadsheet-to-software cutovers",
        price: "From ₹1,50,000",
      },
      {
        href: "/services/mlm-crm-development",
        slug: "mlm-crm-development",
        title: "MLM software",
        benefit: "Unilevel CRM, genealogy, and wallets",
        price: "From ₹3,50,000",
      },
      {
        href: "/services/ev-charging-app-development",
        slug: "ev-charging-app-development",
        title: "EV charging apps",
        benefit: "OCPP/OCPI charging CMS",
        price: "From ₹4,50,000",
      },
    ],
  },
  {
    id: "fintech-rails",
    heading: "BBPS, AEPS, DMT, recharge",
    intro: "Fintech hub and white-label retailer panels — you bring network access.",
    items: [
      {
        href: "/services/fintech-app-development",
        slug: "fintech-app-development",
        title: "Fintech app development",
        benefit: "BBPS, AEPS, DMT, and recharge hub",
        price: "From ₹99,999",
      },
      {
        href: "/services/fintech-app-development/bbps-software",
        slug: "fintech-app-development",
        title: "BBPS software",
        benefit: "Bharat BillPay retailer panels",
        price: "From ₹99,999",
      },
      {
        href: "/services/fintech-app-development/aeps-software",
        slug: "fintech-app-development",
        title: "AEPS software",
        benefit: "Aadhaar-enabled retailer software",
        price: null,
      },
      {
        href: "/services/fintech-app-development/dmt-software",
        slug: "fintech-app-development",
        title: "DMT software",
        benefit: "Domestic money transfer panels",
        price: null,
      },
      {
        href: "/services/fintech-app-development/recharge-software",
        slug: "fintech-app-development",
        title: "Recharge software",
        benefit: "Mobile and DTH top-up panels",
        price: null,
      },
    ],
  },
];

function ServiceCatalogCard({ item, accent }) {
  return (
    <Link
      href={item.href}
      prefetch={false}
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-purple focus-visible:ring-offset-2"
    >
      <article className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-theme-purple/40 hover:shadow-md">
        <span
          className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl ${accent.bar}`}
          aria-hidden="true"
        />
        <div className="mb-3 flex items-start justify-between gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accent.iconWrap} transition-colors group-hover:bg-theme-purple group-hover:text-white`}
          >
            <ServiceIcon slug={item.slug} className="h-5 w-5" />
          </div>
          {item.price ? (
            <span
              className={`inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${accent.chip}`}
            >
              {item.price}
            </span>
          ) : null}
        </div>
        <h4 className="mb-1 text-base font-bold text-theme-blue transition-colors group-hover:text-theme-purple">
          {item.title}
        </h4>
        <p className="mb-4 flex-1 text-sm font-light leading-relaxed text-gray-500">
          {item.benefit}
        </p>
        <span
          className={`inline-flex items-center text-sm font-semibold ${accent.text}`}
        >
          Open page
          <svg
            className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </article>
    </Link>
  );
}

export default function HomeServiceIndex() {
  return (
    <section
      id="home-service-index"
      aria-labelledby="home-service-index-heading"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-light-theme-purple/15 to-white"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-light-theme-purple/25 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-light-theme-purple/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-theme-purple">
              Service catalog
            </span>
            <h2
              id="home-service-index-heading"
              className="mb-3 text-3xl font-black tracking-tight text-theme-blue sm:text-4xl"
            >
              Software, websites, and apps from Jaipur
            </h2>
            <p className="max-w-2xl font-light leading-relaxed text-gray-600">
              TheTriFusion is a software company in Jaipur. These are the live
              service pages — not ads landings — with published starting prices
              in INR. Open the one that matches the job.
            </p>
          </div>
          <Link
            href="/services"
            prefetch={false}
            className="inline-flex items-center self-start rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-theme-blue transition-colors hover:border-theme-purple hover:text-theme-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-purple focus-visible:ring-offset-2 lg:self-auto"
          >
            All services
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <nav
          aria-label="Service categories"
          className="mb-12 flex flex-wrap gap-2"
        >
          {GROUPS.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-theme-blue transition-colors hover:border-theme-purple hover:text-theme-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-purple focus-visible:ring-offset-2"
            >
              {group.heading}
            </a>
          ))}
        </nav>

        <div className="space-y-14">
          {GROUPS.map((group, groupIdx) => (
            <div key={group.id} id={group.id}>
              <div className="mb-5 max-w-2xl">
                <h3 className="mb-1 text-xl font-black text-theme-blue sm:text-2xl">
                  {group.heading}
                </h3>
                <p className="text-sm font-light text-gray-500 sm:text-base">
                  {group.intro}
                </p>
              </div>
              <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
                {group.items.map((item, idx) => (
                  <li key={item.href}>
                    <ServiceCatalogCard
                      item={item}
                      accent={accentAt(groupIdx + idx)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
