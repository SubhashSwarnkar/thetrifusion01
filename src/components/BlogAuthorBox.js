import Link from "next/link";

function formatReviewDate(value) {
  if (!value) return "";
  const raw = String(value).trim();
  const date = new Date(raw.length === 10 ? `${raw}T00:00:00Z` : raw);
  if (Number.isNaN(date.getTime())) return raw;
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function reviewDateTime(value) {
  if (!value) return undefined;
  const raw = String(value).trim();
  const date = new Date(raw.length === 10 ? `${raw}T00:00:00Z` : raw);
  if (Number.isNaN(date.getTime())) return raw;
  return date.toISOString();
}

export default function BlogAuthorBox({ reviewDate }) {
  const formatted = formatReviewDate(reviewDate);

  return (
    <aside
      aria-label="About TheTriFusion"
      className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8"
    >
      <h2 className="mb-3 text-2xl font-bold text-theme-blue">
        About TheTriFusion
      </h2>
      <p className="mb-4 leading-relaxed text-gray-600">
        TheTriFusion is a software company in Jaipur that has been operating
        since 2023. The team builds EV charging software, mobile apps, websites,
        and AI software. Trifusion Infotech Private Limited works with clients
        in India and worldwide.
      </p>
      <p className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
        <Link
          href="/about"
          className="text-theme-purple underline underline-offset-2"
        >
          About
        </Link>
        <Link
          href="/editorial-policy"
          className="text-theme-purple underline underline-offset-2"
        >
          Editorial policy
        </Link>
      </p>
      <p className="text-sm text-gray-500">
        Reviewed by the TheTriFusion editorial team
        {formatted ? (
          <>
            {" "}
            <time dateTime={reviewDateTime(reviewDate)}>{formatted}</time>
          </>
        ) : null}
      </p>
    </aside>
  );
}
