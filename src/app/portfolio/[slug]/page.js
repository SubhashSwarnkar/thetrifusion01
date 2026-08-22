import Page from "views/ProjectDetailPage";
import JsonLd from "components/JsonLd";
import { Portfolios } from "json/landingPageData";
import { buildMetadata } from "lib/seoConfig";
import { breadcrumbSchema, creativeWorkSchema } from "lib/schema";

export function generateStaticParams() {
  return Portfolios.map((project) => ({ slug: project.id }));
}

export function generateMetadata({ params }) {
  const project = Portfolios.find((item) => item.id === params.slug);

  if (!project) {
    return buildMetadata({
      title: "Project Not Found | TheTriFusion",
      description: "The requested portfolio project could not be found.",
      keywords: "portfolio, TheTriFusion",
      path: `/portfolio/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${project.title} | Portfolio | TheTriFusion`,
    description:
      project.description ||
      `View ${project.title} — a ${project.type} project by TheTriFusion.`,
    keywords: `${project.title}, portfolio, ${project.type}, case study, TheTriFusion`,
    path: `/portfolio/${project.id}`,
  });
}

export default function RoutePage({ params }) {
  const project = Portfolios.find((item) => item.id === params.slug);

  return (
    <>
      {project ? (
        <>
          <JsonLd data={creativeWorkSchema(project)} />
          <JsonLd
            data={breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Portfolio", path: "/portfolio" },
              { name: project.title, path: `/portfolio/${project.id}` },
            ])}
          />
        </>
      ) : null}
      <Page />
    </>
  );
}
