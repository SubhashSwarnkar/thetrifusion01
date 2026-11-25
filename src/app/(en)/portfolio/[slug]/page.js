import { permanentRedirect } from "next/navigation";
import Page from "views/ProjectDetailPage";
import PlugOneCaseStudyPage from "views/PlugOneCaseStudyPage";
import JsonLd from "components/JsonLd";
import { Portfolios, isIndexablePortfolio } from "json/landingPageData";
import { buildMetadata } from "lib/seoConfig";
import { breadcrumbSchema, creativeWorkSchema, faqSchema } from "lib/schema";

const PLUGONE_SLUG = "plugone-ev-charging-platform";

export function generateStaticParams() {
  return Portfolios.map((project) => ({ slug: project.id }));
}

function clipMetaDescription(text, max = 160) {
  const value = String(text || "")
    .replace(/\s+/g, " ")
    .trim();
  if (value.length <= max) return value;
  const cut = value.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > 100 ? cut.slice(0, lastSpace) : cut;
  return `${base.trimEnd()}…`;
}

export function generateMetadata({ params }) {
  const project = Portfolios.find((item) => item.id === params.slug);

  // Unknown / junk portfolio slugs permanently redirect to the hub (no 404 crawl).
  if (!project) {
    return {
      title: "Portfolio | TheTriFusion",
      robots: { index: false, follow: true },
    };
  }

  return buildMetadata({
    title:
      project.seoTitle || `${project.title} | Portfolio | TheTriFusion`,
    description: clipMetaDescription(
      project.seoDescription ||
        project.description ||
        `View ${project.title} — a ${project.type} project by TheTriFusion.`
    ),
    keywords: [
      project.title,
      "portfolio",
      "case study",
      project.type,
      "TheTriFusion",
      ...(project.tags || []),
      ...(project.id === PLUGONE_SLUG
        ? ["OCPP", "OCPI", "EV charging CMS", "ChargeIndia"]
        : []),
    ].join(", "),
    path: `/portfolio/${project.id}`,
    type: "article",
    image: project.imageUrl,
    noIndex: !isIndexablePortfolio(project),
  });
}

export default function RoutePage({ params }) {
  const project = Portfolios.find((item) => item.id === params.slug);

  if (!project) {
    permanentRedirect("https://thetrifusion.in/portfolio");
  }

  const isPlugOne = project.id === PLUGONE_SLUG;
  const faqs = project.caseStudy?.faqs;

  return (
    <>
      <JsonLd data={creativeWorkSchema(project, { asArticle: true })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${project.id}` },
        ])}
      />
      {Array.isArray(faqs) && faqs.length > 0 ? (
        <JsonLd data={faqSchema(faqs)} />
      ) : null}
      {isPlugOne ? <PlugOneCaseStudyPage /> : <Page />}
    </>
  );
}
