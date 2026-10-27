import Link from "next/link";
import Image from "next/image";

const PRODUCT_URL = "https://www.connectdairy.in/";
const CASE_STUDY_PATH = "/portfolio/connect-dairy-supply-chain";

const CAPABILITIES = [
  "Milk & feed fleet ops",
  "Live tracking",
  "Role dashboards",
  "P&L analytics",
];

/**
 * Homepage product marketing for Connect Dairy — TheTriFusion's own product.
 * Placed immediately after the hero; primary CTA opens the live product site.
 */
export default function ConnectDairyProductHighlight() {
  return (
    <section
      id="our-product-connect-dairy"
      className="relative overflow-hidden border-y border-theme-purple/15 bg-gradient-to-br from-theme-blue via-[#1a3570] to-dark-theme-purple py-12 sm:py-16"
      aria-labelledby="connect-dairy-product-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-theme-cyan/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-theme-purple/40 blur-3xl"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-5">
        <a
          href={PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.01] hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-7 lg:grid-cols-2 lg:gap-10 lg:p-8"
        >
          <div className="order-2 lg:order-1">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-light-theme-purple">
              Our product
              <span className="h-1 w-1 rounded-full bg-theme-cyan" aria-hidden />
              Built by TheTriFusion
            </p>
            <h2
              id="connect-dairy-product-heading"
              className="mb-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Connect Dairy
            </h2>
            <p className="mb-5 max-w-xl text-base font-light leading-relaxed text-white/80 sm:text-lg">
              Our dairy &amp; agri logistics platform — milk and feed fleets,
              live tracking, and role-based ops dashboards in production.
            </p>
            <ul className="mb-7 flex flex-wrap gap-2">
              {CAPABILITIES.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-theme-blue shadow-lg shadow-black/20 transition-colors group-hover:bg-light-theme-purple sm:text-base">
                Open Connect Dairy
                <span className="ml-2 transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </span>
              <span className="text-center text-sm font-medium text-white/60 sm:text-left">
                connectdairy.in
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-xl shadow-black/30 ring-1 ring-white/10">
              <Image
                src="/images/portfolio/connect-dairy-supply-chain.jpg"
                alt="Connect Dairy — TheTriFusion dairy and agri logistics platform"
                width={1280}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-theme-blue/40 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 inline-flex items-center justify-center rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-theme-purple shadow-md sm:left-auto sm:right-3 sm:w-auto">
                Live product → connectdairy.in
              </span>
            </div>
          </div>
        </a>

        <p className="mt-4 text-center text-sm text-white/55">
          Prefer the write-up?{" "}
          <Link
            href={CASE_STUDY_PATH}
            prefetch={false}
            className="font-semibold text-light-theme-purple underline-offset-2 hover:text-white hover:underline"
          >
            Case study
          </Link>
        </p>
      </div>
    </section>
  );
}
