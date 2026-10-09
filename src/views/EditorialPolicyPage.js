"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { siteConfig } from "config/site";

const linkClass = "text-theme-purple underline underline-offset-2";

export default function EditorialPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-3xl px-5 py-20">
        <article>
          <h1 className="mb-4 text-4xl font-black text-theme-blue">
            Editorial policy
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            Last updated: 9 October 2026
          </p>
          <address className="mb-8 not-italic text-gray-500">
            {siteConfig.legalName} (“TheTriFusion”)
            <span className="block">{siteConfig.addressLine}</span>
            <a className={linkClass} href={siteConfig.telHref}>
              {siteConfig.phone}
            </a>
            <span className="block">
              <a className={linkClass} href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </span>
            <span className="block">{siteConfig.hoursLabel}</span>
          </address>
          <div className="space-y-6 font-light leading-relaxed text-gray-600">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">Who publishes</h2>
              <p>
                This page is the editorial policy for the blog on
                thetrifusion.in. The publisher is Trifusion Infotech Private
                Limited, which uses the brand TheTriFusion. The office is on
                the 5th Floor, Amoro Building, Patrakar Colony, Jaipur,
                Rajasthan 302020, India. The phone is +91 63781 33780. Hours
                are Monday to Saturday, 10 AM to 7 PM. Editorial questions go
                to{" "}
                <a className={linkClass} href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">Who writes</h2>
              <p>
                The blog is written by the TheTriFusion team of developers and
                consultants. That is the same team of about ten people who
                build the software on the services pages. An article is a
                company article. It is not attributed to a named staff member,
                and the site does not use a stock photograph as a portrait of
                an author.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                Drafts, review, and sources
              </h2>
              <p>
                A draft may use AI assistance. Assistance is not publication.
                Before an article is published, the team reviews it and
                fact-checks claims that carry a date, a version, a price, a
                statute, or a product behaviour. The check is against primary
                sources: official documentation, standards bodies, and vendor
                pages. A recap on another website, a social post, or a model’s
                memory is not the source of record. If the primary page and the
                draft disagree, the draft changes or the sentence is removed.
                EV charging articles follow the same rule. A protocol version
                has to match the standards material the post cites, and a
                product claim has to match the{" "}
                <Link
                  href="/services/ev-charging-app-development"
                  className={linkClass}
                >
                  EV charging service page
                </Link>
                , including OCPP, OCPI, and the eMSP and CSMS roles. The team
                does not fill a gap with a feature the sources do not state.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">Corrections</h2>
              <p>
                Corrections are handled in the open. Email{" "}
                <a className={linkClass} href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>{" "}
                with the page address and the fact you believe is wrong. The
                team checks that point against the primary source. When the
                correction holds, the article is updated and the date of the
                update is noted on the post. Each article shows the date it was
                last reviewed or, if it has not been updated, the date it was
                published. Changes are never made silently.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                How topics are chosen
              </h2>
              <p>
                Topics come from the work the company does: software, apps, EV
                charging, AI, and business technology relevant to the services
                on this site. A post explains one of those subjects. A topic is
                not accepted because someone offered to pay for it. News
                explainers that the blog publishes still have to name the
                source the sentence depends on. If a source cannot be opened,
                the sentence does not go up.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                No paid or sponsored posts
              </h2>
              <p>
                TheTriFusion does not publish paid posts or sponsored posts. A
                company cannot pay for an article to be written, placed,
                edited, or left unchanged. A mention of a vendor, a protocol,
                or a product is there because the explanation needs it. There
                is no sponsored-content label on this blog because that
                category of post is not accepted.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                Ads and affiliate disclosure
              </h2>
              <p>
                The site may show Google ads. Ads never influence the content.
                They do not decide the headline, the sources, the sentences, or
                which service page an article links to. An advertisement is not
                an endorsement of the advertiser, and the review does not look
                at which ad might sit beside a paragraph. The site does not
                sell coverage and does not run a paid-mention programme. A
                commercial link, if one were ever required so a reader could
                open a source, would be labelled in the article and would still
                have to pass the primary-source check. The disclosure that
                applies today is the advertising one: Google ads may appear,
                and they do not write or approve the page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                Last updated
              </h2>
              <p>
                This policy was last updated on 9 October 2026. The company
                description is on the{" "}
                <Link href="/about" className={linkClass}>
                  About
                </Link>{" "}
                page.{" "}
                <Link href="/services" className={linkClass}>
                  Services
                </Link>
                , the{" "}
                <Link href="/portfolio" className={linkClass}>
                  portfolio
                </Link>
                , the{" "}
                <Link href="/blog" className={linkClass}>
                  blog
                </Link>
                , and{" "}
                <Link href="/contact" className={linkClass}>
                  contact
                </Link>{" "}
                are linked from this page and from the footer.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
