import Page from "views/NotFoundPage";

export const metadata = {
  title: "Page Not Found | TheTriFusion",
  description:
    "The page you're looking for doesn't exist. Return to TheTriFusion homepage to explore our services and portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <Page />;
}
