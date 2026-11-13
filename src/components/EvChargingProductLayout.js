/**
 * Product-style layout for /services/ev-charging-app-development.
 * Server-rendered text (no client-only content gates). Uses site theme tokens only.
 */
import Link from "next/link";
import Image from "next/image";
import { siteConfig, absoluteSiteUrl } from "config/site";
import { canonicalInternalHref } from "lib/internalLinks";
import { accentAt } from "lib/themeAccents";
import ServiceIcon from "components/ServiceIcon";
import FounderByline from "components/FounderByline";
import { FOUNDER } from "data/founder";
import { SERVICE_KEYWORD_BY_SLUG } from "data/serviceIndexLinks";

function InlineText({ text }) {
  if (!text) return null;
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes = [];
  let last = 0;
  let match;
  let key = 0;
  while ((match = re.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const href = canonicalInternalHref(match[2]);
    const external = /^https?:\/\//i.test(match[2]);
    if (external) {
      nodes.push(
        <a
          key={key++}
          href={match[2]}
          className="font-semibold text-theme-purple hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[1]}
        </a>
      );
    } else {
      nodes.push(
        <Link
          key={key++}
          href={href}
          className="font-semibold text-theme-purple hover:underline"
        >
          {match[1]}
        </Link>
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function SectionHead({ kicker, title, id, intro }) {
  return (
    <div className="mb-8 max-w-3xl" id={id ? undefined : undefined}>
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
        <p className="mt-5 text-gray-600 font-light leading-relaxed">
          <InlineText text={intro} />
        </p>
      ) : null}
    </div>
  );
}

const MODULE_ICONS = {
  "cms-csms": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H9l-5 3v-3H6a2 2 0 01-2-2V6z"
    />
  ),
  "driver-app": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M10 3.75h4M8.25 3.75h7.5A1.5 1.5 0 0117.25 5.25v13.5a1.5 1.5 0 01-1.5 1.5H8.25a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5zM12 17.25h.01"
    />
  ),
  "billing-settlement": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M9 7h6M9 11h6M9 15h3M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
    />
  ),
  roaming: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M3.75 12a8.25 8.25 0 1016.5 0 8.25 8.25 0 00-16.5 0zm8.25-6v6l4 2"
    />
  ),
  "load-management": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  ),
  "om-complaints": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M11 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M15.5 3.5l4 4M9 15l7.5-7.5"
    />
  ),
  "fleet-depot": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M3 17h2l1-4h8l2 4h2M7 13V8a1 1 0 011-1h6a1 1 0 011 1v5M8 17a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
    />
  ),
  "apis-integrations": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12"
    />
  ),
};

const TRUST_CHIPS = [
  "OCPP 1.6J / 2.0.1",
  "OCPI 2.2.1",
  "White-label",
  "You own the code",
];

const PLUGONE_BADGES = ["Ecoplug", "Sonic", "ChargeMOD", "ChargeIndia (OCPI hub)"];

function ArchitectureDiagram() {
  const nodes = [
    { id: "charger", label: "Charger", sub: "EVSE" },
    { id: "ocpp", label: "OCPP", sub: "1.6J / 2.0.1" },
    { id: "cms", label: "CMS / CSMS", sub: "Your brand" },
    { id: "app", label: "Driver app", sub: "Pay · UPI" },
    { id: "ocpi", label: "OCPI roaming", sub: "Partners / hubs" },
  ];
  return (
    <figure
      className="rounded-3xl border border-theme-purple/15 bg-gradient-to-br from-light-theme-purple/40 via-white to-cyan-50 p-5 sm:p-8"
      aria-label="EV charging software architecture: charger to OCPP to CMS to driver app and OCPI roaming"
    >
      <figcaption className="sr-only">
        Flow: Charger connects over OCPP to the CMS. The CMS powers the driver
        app and payments, and connects to partner networks over OCPI for roaming.
      </figcaption>
      {/* Mobile: vertical stack */}
      <ol className="flex flex-col gap-3 sm:hidden list-none m-0 p-0">
        {nodes.map((node, idx) => (
          <li key={node.id} className="flex flex-col items-stretch gap-2">
            <div className="rounded-2xl border border-white bg-white px-4 py-3 shadow-sm text-center">
              <span className="block text-sm font-bold text-theme-blue">{node.label}</span>
              <span className="block text-xs text-gray-500 font-medium mt-0.5">{node.sub}</span>
            </div>
            {idx < nodes.length - 1 ? (
              <div className="flex justify-center text-theme-purple" aria-hidden="true">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      {/* Desktop: horizontal flow SVG */}
      <div className="hidden sm:block overflow-x-auto">
        <svg
          viewBox="0 0 920 140"
          className="w-full min-w-[640px] h-auto"
          role="img"
          aria-label="Charger to OCPP to CMS to driver app and payments, with OCPI roaming to partners"
        >
          {[
            { x: 20, label: "Charger", sub: "EVSE" },
            { x: 200, label: "OCPP", sub: "1.6J / 2.0.1" },
            { x: 380, label: "CMS / CSMS", sub: "Your brand" },
            { x: 560, label: "Driver app", sub: "UPI · RFID · QR" },
            { x: 740, label: "OCPI roaming", sub: "Partners / hubs" },
          ].map((box, i, arr) => (
            <g key={box.label}>
              <rect
                x={box.x}
                y={28}
                width={140}
                height={72}
                rx={16}
                fill="white"
                stroke="#6610f2"
                strokeOpacity="0.25"
              />
              <text
                x={box.x + 70}
                y={58}
                textAnchor="middle"
                fill="#152C5B"
                fontSize="14"
                fontWeight="700"
              >
                {box.label}
              </text>
              <text
                x={box.x + 70}
                y={78}
                textAnchor="middle"
                fill="#64748b"
                fontSize="11"
              >
                {box.sub}
              </text>
              {i < arr.length - 1 ? (
                <path
                  d={`M${box.x + 140} 64 H${arr[i + 1].x - 4}`}
                  stroke="#6610f2"
                  strokeWidth="2"
                  markerEnd="url(#evArrow)"
                />
              ) : null}
            </g>
          ))}
          <defs>
            <marker
              id="evArrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#6610f2" />
            </marker>
          </defs>
        </svg>
      </div>
      <p className="mt-4 text-sm text-gray-600 font-light leading-relaxed max-w-3xl">
        Charger ⇄ OCPP ⇄ CMS ⇄ driver app and payments. Separately, CMS ⇄ OCPI ⇄
        partner networks. OCPP is hardware; OCPI is roaming between businesses.
      </p>
    </figure>
  );
}

function StickyCtaBar({ contactHref, whatsappHref, primaryLabel }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-theme-purple/15 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(21,44,91,0.08)] md:hidden">
      <div className="container mx-auto px-4 py-3 flex gap-2">
        <a
          href={contactHref}
          className="flex-1 inline-flex items-center justify-center rounded-full bg-theme-purple text-white text-sm font-bold py-3"
        >
          {primaryLabel}
        </a>
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

export default function EvChargingProductLayout({
  service,
  relatedLinks = [],
  otherServices = [],
}) {
  const modulesSection = service.detailSections?.find((s) => s.id === "modules");
  const whoSection = service.detailSections?.find((s) => s.id === "who-its-for");
  const ocppSection = service.detailSections?.find((s) => s.id === "ocpp-vs-ocpi");
  const protocolsSection = service.detailSections?.find((s) => s.id === "protocols");
  const whiteLabelSection = service.detailSections?.find((s) => s.id === "white-label");
  const plugoneSection = service.detailSections?.find((s) => s.id === "plugone-proof");
  const indiaSection = service.detailSections?.find((s) => s.id === "india-context");
  const costSection = service.detailSections?.find((s) => s.id === "cost-and-timeline");

  const waNumber = String(siteConfig.whatsappNumber || "").replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    service.whatsappMessage ||
      "Hi TriFusion, I need EV charging management software. Please share a scoped estimate."
  )}`;
  const contactHref = canonicalInternalHref(service.primaryCtaHref || "/contact");

  return (
    <>
      {/* Hero */}
      <section id="overview" className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-theme-purple via-white to-cyan-50 -z-10" />
        <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-theme-pink/15 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-theme-cyan/10 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] mb-5 bg-pink-50 text-theme-pink border border-theme-pink/25">
                <ServiceIcon slug={service.slug} className="w-3.5 h-3.5" />
                {service.title}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-theme-blue tracking-tight leading-[1.12] mb-4">
                {service.bannerTitle || service.title}
              </h1>
              <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-5 max-w-xl">
                {service.bannerDescription || service.shortDescription}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-gray-200 text-xs text-theme-blue font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                {service.locationLine}
              </div>

              <ul className="flex flex-wrap gap-2 mb-8 list-none m-0 p-0" aria-label="Trust signals">
                {TRUST_CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="px-3 py-1.5 rounded-full bg-theme-blue text-white text-xs font-bold tracking-wide"
                  >
                    {chip}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg shadow-theme-purple/25 hover:bg-dark-theme-purple hover:scale-[1.02] transition-all"
                >
                  {service.primaryCtaLabel || "Get a scoped estimate"}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-emerald-700 border-2 border-emerald-500/50 rounded-full font-bold hover:bg-emerald-50 transition-colors"
                >
                  WhatsApp quote
                </a>
              </div>
              <Link
                href={canonicalInternalHref("/portfolio/plugone-ev-charging-platform")}
                className="text-sm font-semibold text-theme-purple hover:underline"
              >
                See PlugOne live case study →
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-theme-purple via-theme-cyan to-theme-pink opacity-40 blur-sm" aria-hidden="true" />
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gray-50">
                <Image
                  src={service.imageUrl}
                  alt={
                    service.imageAlt ||
                    "EV charging management software CMS and white-label charging app by TheTriFusion"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={70}
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white border border-gray-100 shadow-xl px-4 py-3 max-w-[14rem]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-theme-purple mb-1">
                  Live client
                </p>
                <p className="text-sm font-bold text-theme-blue leading-snug">
                  PlugOne — OCPP + OCPI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-first + key facts */}
      {service.answerFirst?.text ? (
        <section
          id={service.answerFirst.id || "quick-answer"}
          aria-label={service.answerFirst.heading}
          className="container mx-auto px-5 pb-10 scroll-mt-28"
        >
          <div className="max-w-5xl rounded-3xl border border-theme-purple/20 bg-light-theme-purple/25 p-6 md:p-9">
            <h2 className="text-2xl sm:text-3xl font-black text-theme-blue tracking-tight mb-3">
              {service.answerFirst.heading}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <InlineText text={service.answerFirst.text} />
            </p>
            {service.answerFirst.facts?.length ? (
              <dl className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {service.answerFirst.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl bg-white border border-gray-100 px-4 py-4 shadow-sm"
                  >
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-theme-blue leading-snug">
                      <InlineText text={fact.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </section>
      ) : null}

      <section
        aria-label={`${FOUNDER.name}, ${FOUNDER.jobTitle}`}
        className="container mx-auto px-5 pb-8"
      >
        <div className="max-w-5xl rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
          <FounderByline compact />
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {FOUNDER.bio} This {service.title.toLowerCase()} page is reviewed by{" "}
            {FOUNDER.name}.
          </p>
        </div>
      </section>

      {/* Sticky in-page nav */}
      <nav
        aria-label="On this page"
        className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-y border-gray-100 hidden md:block"
      >
        <div className="container mx-auto px-5 py-3 flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-gray-500 overflow-x-auto">
          {(service.quickNav || []).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-theme-purple whitespace-nowrap transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={contactHref}
            className="ml-auto text-theme-purple font-black hover:underline whitespace-nowrap"
          >
            {service.primaryCtaLabel || "Get a scoped estimate"} →
          </a>
        </div>
      </nav>

      {/* Modules grid */}
      {modulesSection ? (
        <section id="modules" className="container mx-auto px-5 py-16 scroll-mt-28">
          <SectionHead
            kicker="Platform modules"
            title={modulesSection.heading}
            intro={modulesSection.paragraphs?.[0]}
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 list-none m-0 p-0">
            {(modulesSection.roles || []).map((mod, idx) => {
              const accent = accentAt(idx);
              return (
                <li
                  key={mod.id}
                  id={mod.id}
                  className={`rounded-2xl border p-5 scroll-mt-28 ${accent.card}`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${accent.iconWrap}`}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {MODULE_ICONS[mod.id] || MODULE_ICONS["cms-csms"]}
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-theme-blue mb-2 leading-snug">
                    {mod.heading}
                  </h3>
                  {mod.paragraphs?.[0] ? (
                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                      {mod.paragraphs[0]}
                    </p>
                  ) : null}
                  <ul className="space-y-2">
                    {(mod.points || []).slice(0, 3).map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm text-gray-600 font-light leading-snug"
                      >
                        <span className="text-emerald-600 font-bold shrink-0" aria-hidden="true">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {/* Who it's for */}
      {whoSection ? (
        <section
          id="who-its-for"
          className="relative py-16 overflow-hidden scroll-mt-28"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-theme-purple/8 via-white to-cyan-50" />
          <div className="container mx-auto px-5 relative">
            <SectionHead
              kicker="Buyers"
              title={whoSection.heading}
              intro={whoSection.paragraphs?.[0]}
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
              {(whoSection.roles || []).map((role, idx) => {
                const accent = accentAt(idx);
                return (
                  <li
                    key={role.id}
                    id={role.id}
                    className={`rounded-2xl border p-6 scroll-mt-28 ${accent.card}`}
                  >
                    <h3 className="text-lg font-bold text-theme-blue mb-2">
                      {role.heading}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {role.paragraphs?.[0]}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Architecture */}
      <section id="ocpp-vs-ocpi" className="container mx-auto px-5 py-16 scroll-mt-28">
        <SectionHead
          kicker="Architecture"
          title={
            ocppSection?.heading ||
            "How does EV charging management software connect?"
          }
          intro={ocppSection?.paragraphs?.[0]}
        />
        <ArchitectureDiagram />
        {ocppSection?.comparison ? (
          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-full text-sm text-left">
              <caption className="sr-only">
                {ocppSection.comparison.heading}
              </caption>
              <thead className="bg-gray-50 text-theme-blue">
                <tr>
                  <th scope="col" className="px-4 py-3 font-bold">
                    {ocppSection.comparison.rowHeader || " "}
                  </th>
                  {ocppSection.comparison.columns.map((column) => (
                    <th key={column} scope="col" className="px-4 py-3 font-bold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ocppSection.comparison.rows.map((row) => (
                  <tr key={row.label} className="border-t border-gray-100">
                    <th
                      scope="row"
                      className="px-4 py-3 font-semibold text-theme-blue align-top"
                    >
                      {row.label}
                    </th>
                    {row.cells.map((cell, index) => (
                      <td
                        key={`${row.label}-${index}`}
                        className="px-4 py-3 text-gray-600 font-light align-top"
                      >
                        <InlineText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>

      {/* Protocols */}
      {protocolsSection ? (
        <section id="protocols" className="container mx-auto px-5 py-16 border-t border-gray-100 scroll-mt-28">
          <SectionHead
            kicker="Standards"
            title={protocolsSection.heading}
            intro={protocolsSection.paragraphs?.[0]}
          />
          {protocolsSection.comparison ? (
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="min-w-full text-sm text-left">
                <caption className="sr-only">
                  {protocolsSection.comparison.heading}
                </caption>
                <thead className="bg-theme-blue text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold">
                      {protocolsSection.comparison.rowHeader || "Standard"}
                    </th>
                    {protocolsSection.comparison.columns.map((column) => (
                      <th key={column} scope="col" className="px-4 py-3 font-bold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {protocolsSection.comparison.rows.map((row, idx) => (
                    <tr
                      key={row.label}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-semibold text-theme-blue align-top whitespace-nowrap"
                      >
                        {row.label}
                      </th>
                      {row.cells.map((cell, index) => (
                        <td
                          key={`${row.label}-${index}`}
                          className="px-4 py-3 text-gray-600 font-light align-top"
                        >
                          <InlineText text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </section>
      ) : null}

      {/* White-label vs SaaS cards */}
      {whiteLabelSection?.comparison ? (
        <section
          id="white-label"
          className="relative py-16 overflow-hidden scroll-mt-28"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-light-theme-purple/50" />
          <div className="container mx-auto px-5 relative">
            <SectionHead
              kicker="Commercial fit"
              title={whiteLabelSection.heading}
              intro={whiteLabelSection.paragraphs?.[0]}
            />
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 list-none m-0 p-0">
              {whiteLabelSection.comparison.columns.map((column, colIdx) => {
                const accent = accentAt(colIdx);
                const highlight = colIdx === 1;
                return (
                  <li
                    key={column}
                    className={`rounded-3xl border p-6 ${
                      highlight
                        ? "border-theme-purple/40 bg-white shadow-lg shadow-theme-purple/10 ring-2 ring-theme-purple/20"
                        : accent.card
                    }`}
                  >
                    {highlight ? (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-theme-purple mb-2">
                        Recommended for brand owners
                      </span>
                    ) : null}
                    <h3 className="text-xl font-black text-theme-blue mb-5">
                      {column}
                    </h3>
                    <dl className="space-y-4">
                      {whiteLabelSection.comparison.rows.map((row) => (
                        <div key={`${column}-${row.label}`}>
                          <dt className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                            {row.label}
                          </dt>
                          <dd className="mt-1 text-sm text-gray-700 font-light leading-relaxed">
                            <InlineText text={row.cells[colIdx]} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {/* PlugOne proof */}
      <section id="plugone-proof" className="container mx-auto px-5 py-16 scroll-mt-28">
        <SectionHead
          kicker="Proof"
          title={plugoneSection?.heading || service.caseStudy?.title}
          intro={plugoneSection?.paragraphs?.[0] || service.caseStudy?.summary}
        />
        <div className="rounded-3xl border border-theme-purple/20 bg-light-theme-purple/20 p-6 md:p-8 max-w-4xl">
          <p className="text-[11px] font-bold uppercase tracking-widest text-theme-purple mb-3">
            Tested / integrated with
          </p>
          <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mb-6" aria-label="PlugOne integrations">
            {PLUGONE_BADGES.map((badge) => (
              <li
                key={badge}
                className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold text-theme-blue"
              >
                {badge}
              </li>
            ))}
          </ul>
          {plugoneSection?.paragraphs?.[1] ? (
            <p className="text-gray-600 font-light leading-relaxed mb-5">
              <InlineText text={plugoneSection.paragraphs[1]} />
            </p>
          ) : null}
          <div className="flex flex-wrap gap-3">
            {service.caseStudy?.href ? (
              <Link
                href={canonicalInternalHref(service.caseStudy.href)}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-theme-purple text-white text-sm font-bold"
              >
                {service.caseStudy.hrefLabel || "PlugOne case study"} →
              </Link>
            ) : null}
            {service.caseStudy?.liveUrl ? (
              <a
                href={service.caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-theme-blue text-theme-blue text-sm font-bold"
              >
                {service.caseStudy.liveLabel || "Open live site"} →
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* First release + process */}
      {service.starterPack ? (
        <section
          id={service.starterPack.id}
          className="container mx-auto px-5 py-14 border-t border-gray-100 scroll-mt-28"
        >
          <SectionHead
            kicker="MVP"
            title={service.starterPack.heading}
            intro={service.starterPack.intro}
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
            {service.starterPack.items?.map((item, idx) => {
              const accent = accentAt(idx);
              return (
                <li key={item.title} className={`rounded-2xl border p-5 ${accent.card}`}>
                  <h3 className="text-base font-bold text-theme-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {item.text}
                  </p>
                </li>
              );
            })}
          </ul>
          {service.starterPack.note ? (
            <p className="mt-6 text-sm text-gray-600 font-light max-w-3xl">
              {service.starterPack.note}
            </p>
          ) : null}
        </section>
      ) : null}

      {service.process?.length ? (
        <section id="process" className="relative py-16 overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-gradient-to-br from-theme-purple/10 via-white to-theme-pink/10" />
          <div className="container mx-auto px-5 relative">
            <SectionHead
              kicker="Process"
              title={service.processHeading || "How an EV charging CMS project runs"}
            />
            <ol className="relative max-w-3xl space-y-0 list-none m-0 p-0">
              {service.process.map((step, idx) => (
                <li key={step.title} className="relative pl-14 pb-10 last:pb-0">
                  <span
                    className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-theme-purple text-white text-sm font-black flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {idx < service.process.length - 1 ? (
                    <span
                      className="absolute left-[1.15rem] top-10 bottom-0 w-0.5 bg-theme-purple/20"
                      aria-hidden="true"
                    />
                  ) : null}
                  <h3 className="text-lg font-bold text-theme-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* India + cost */}
      {indiaSection ? (
        <section id="india-context" className="container mx-auto px-5 py-14 border-t border-gray-100 scroll-mt-28">
          <SectionHead
            kicker="India"
            title={indiaSection.heading}
            intro={indiaSection.paragraphs?.[0]}
          />
          {indiaSection.paragraphs?.[1] ? (
            <p className="text-gray-600 font-light leading-relaxed max-w-3xl -mt-2 mb-6">
              <InlineText text={indiaSection.paragraphs[1]} />
            </p>
          ) : null}
          {indiaSection.included?.length ? (
            <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
              {indiaSection.included.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-semibold text-theme-blue"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      {costSection ? (
        <section id="cost-and-timeline" className="container mx-auto px-5 py-14 border-t border-gray-100 scroll-mt-28">
          <SectionHead
            kicker="Investment"
            title={costSection.heading}
            intro={costSection.paragraphs?.[0]}
          />
          {costSection.paragraphs?.[1] ? (
            <p className="text-gray-600 font-light leading-relaxed max-w-3xl -mt-2">
              <InlineText text={costSection.paragraphs[1]} />
            </p>
          ) : null}
        </section>
      ) : null}

      {/* Why points */}
      {service.whyPoints?.length ? (
        <section id="why-us" className="container mx-auto px-5 py-16 border-t border-gray-100">
          <SectionHead
            kicker="Why TheTriFusion"
            title={`Why choose TheTriFusion for ${service.title}`}
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
            {service.whyPoints.map((point, idx) => {
              const accent = accentAt(idx);
              return (
                <li key={point.title} className={`rounded-2xl border p-6 ${accent.card}`}>
                  <h3 className="text-lg font-bold text-theme-blue mb-2">{point.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {point.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {/* FAQ accordion — details/summary keeps answers in SSR HTML */}
      {service.faqs?.length ? (
        <section id="faq" className="container mx-auto px-5 py-16 border-t border-gray-100 scroll-mt-28">
          <SectionHead
            kicker="FAQ"
            title={
              service.serviceType
                ? `Frequently asked questions about ${service.serviceType}`
                : `Frequently asked questions about ${service.title}`
            }
          />
          <div className="max-w-3xl divide-y divide-gray-100 border-y border-gray-100">
            {service.faqs.map((faq) => (
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
                  <InlineText text={faq.answer} />
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {/* Related links */}
      {relatedLinks.length ? (
        <section id="further-reading" className="container mx-auto px-5 py-16 border-t border-gray-100">
          <SectionHead kicker="Related" title="Related services and proof" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl list-none m-0 p-0">
            {relatedLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block h-full rounded-2xl border border-gray-100 p-5 hover:border-theme-purple/40 transition-colors"
                >
                  <h3 className="text-lg font-bold text-theme-blue mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {item.text}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {otherServices.length ? (
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/40 to-white" />
          <div className="container mx-auto px-5 relative">
            <SectionHead kicker="More" title="Related services" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
              {otherServices.map((item, idx) => {
                const accent = accentAt(idx);
                return (
                  <li key={item.slug}>
                    <a
                      href={absoluteSiteUrl(`/services/${item.slug}`)}
                      className={`group flex items-center gap-3 p-4 rounded-2xl border ${accent.card}`}
                    >
                      <span
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${accent.iconWrap}`}
                      >
                        <ServiceIcon slug={item.slug} className="w-5 h-5" />
                      </span>
                      <span>
                        <span className="block font-bold text-theme-blue group-hover:text-theme-purple transition-colors">
                          {SERVICE_KEYWORD_BY_SLUG[item.slug] || item.title}
                        </span>
                        <span className={`text-xs font-semibold ${accent.text}`}>
                          Explore →
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Bottom CTA */}
      <section className="container mx-auto px-5 pb-24 md:pb-20">
        <div className="bg-gradient-to-r from-theme-blue via-theme-purple to-theme-cyan rounded-[2rem] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {service.ctaHeading || "Tell us your chargers, sites and brand"}
          </h2>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto font-light text-base sm:text-lg">
            {service.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={contactHref}
              className="inline-flex items-center px-8 py-3.5 bg-white text-theme-purple rounded-full font-bold hover:bg-light-theme-purple transition-colors shadow-lg"
            >
              {service.primaryCtaLabel || "Get a scoped estimate"}
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold border border-white/30 transition-colors"
            >
              WhatsApp the Jaipur team
            </a>
          </div>
        </div>
      </section>

      <StickyCtaBar
        contactHref={contactHref}
        whatsappHref={whatsappHref}
        primaryLabel={service.primaryCtaLabel || "Get a quote"}
      />
    </>
  );
}
