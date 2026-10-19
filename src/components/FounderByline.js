import Link from "next/link";
import Image from "next/image";
import { FOUNDER } from "data/founder";

export default function FounderByline({ compact = false, publishedLabel }) {
  const size = compact ? 48 : 56;

  return (
    <div className="flex items-center gap-4">
      <Link href={FOUNDER.profilePath} className="shrink-0">
        <Image
          src={FOUNDER.imagePath}
          alt={`${FOUNDER.name}, ${FOUNDER.jobTitle} of TheTriFusion in Jaipur`}
          width={size}
          height={size}
          sizes={`${size}px`}
          className="aspect-square rounded-full object-cover"
        />
      </Link>
      <div>
        <p className="font-medium text-theme-blue">
          <Link href={FOUNDER.profilePath} className="hover:underline">
            {FOUNDER.name}
          </Link>
        </p>
        <p className="text-sm text-gray-500">
          {FOUNDER.jobTitle}, TheTriFusion
        </p>
        {publishedLabel ? (
          <p className="text-sm text-gray-500">{publishedLabel}</p>
        ) : null}
      </div>
    </div>
  );
}
