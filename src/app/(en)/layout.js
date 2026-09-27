import { SiteBody, SiteHead } from "components/SiteDocument";
import { rootMetadata } from "lib/rootMetadata";
import "../globals.css";

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <SiteHead />
      </head>
      <body className="antialiased">
        <SiteBody>{children}</SiteBody>
      </body>
    </html>
  );
}
