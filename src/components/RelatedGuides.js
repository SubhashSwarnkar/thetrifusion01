import Link from "next/link";

export default function RelatedGuides({
  guides = [],
  heading = "Related guides",
  kicker = "Guides",
}) {
  if (!guides?.length) return null;
  return (
    <section
      id="related-guides"
      className="container mx-auto px-5 py-16 border-t border-gray-100"
    >
      {kicker ? (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-3">
          {kicker}
        </span>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-bold text-theme-blue mb-6">
        {heading}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
        {guides.map((guide) => (
          <li key={guide.href || guide.slug}>
            <Link
              href={guide.href || `/blog/${guide.slug}`}
              className="block h-full rounded-2xl border border-gray-100 p-5 hover:border-theme-purple/40"
            >
              <h3 className="text-lg font-bold text-theme-blue mb-2">
                {guide.title}
              </h3>
              {guide.excerpt ? (
                <p className="text-sm text-gray-600 font-light leading-relaxed line-clamp-2">
                  {guide.excerpt}
                </p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
