import Link from "next/link";
import Image from "next/image";
import { FOUNDER } from "data/founder";

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
      aria-label={`About ${FOUNDER.name}, ${FOUNDER.jobTitle}`}
      className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8"
    >
      <div className="mb-4 flex items-start gap-4">
        <Link href={FOUNDER.profilePath} className="shrink-0">
          <Image
            src={FOUNDER.imagePath}
            alt={`${FOUNDER.name}, ${FOUNDER.jobTitle} of TheTriFusion in Jaipur`}
            width={72}
            height={72}
            className="rounded-full object-cover"
          />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-theme-blue">
            {FOUNDER.name}, {FOUNDER.jobTitle}
          </h2>
          <p className="text-sm font-semibold text-theme-purple">
            TheTriFusion · Jaipur
          </p>
        </div>
      </div>
      <p className="mb-4 leading-relaxed text-gray-600">{FOUNDER.bio}</p>
      <p className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
        <Link
          href={FOUNDER.profilePath}
          className="text-theme-purple underline underline-offset-2"
        >
          Team
        </Link>
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
        Reviewed by {FOUNDER.name}, {FOUNDER.jobTitle}
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
