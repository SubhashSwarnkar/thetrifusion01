export default function PortfolioKindBadge({ kind }) {
  const isLive = kind === "live";
  const label =
    kind === "concept"
      ? "Concept / demo"
      : kind === "demo"
        ? "Hosted demo"
        : "Live client site";

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
        isLive
          ? "bg-emerald-600 text-white"
          : "border border-amber-300 bg-amber-100 text-amber-900"
      }`}
    >
      {label}
    </span>
  );
}
