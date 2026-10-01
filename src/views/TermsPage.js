"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { siteConfig } from "config/site";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-5 py-20 max-w-3xl">
        <h1 className="text-4xl font-black text-theme-blue mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: 1 October 2026
        </p>
        <address className="text-gray-500 mb-8 not-italic">
          {siteConfig.legalName}
          <span className="block">{siteConfig.addressLine}</span>
          <a className="text-theme-purple" href={siteConfig.telHref}>
            {siteConfig.phone}
          </a>
          <span className="block">
            <a
              className="text-theme-blue underline underline-offset-2"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </span>
          <span className="block">{siteConfig.hoursLabel}</span>
        </address>
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Agreement to these terms
            </h2>
            <p>
              These terms govern your use of the website at
              https://thetrifusion.in, operated by Trifusion Infotech Private
              Limited (“TheTriFusion”, “we”, “us”), a software services company
              with its office at 5th Floor, Amoro Building, Patrakar Colony,
              Jaipur, Rajasthan 302020, India. By using the site, sending a
              form, or asking for a call, you agree to these terms and to the{" "}
              <Link href="/privacy" className="text-theme-purple underline">
                Privacy Policy
              </Link>
              . If you do not agree, do not use the site. A paid project starts
              only when both sides have a written scope and a commercial
              agreement. These website terms do not, by themselves, obligate
              either side to build software.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              What the website is for
            </h2>
            <p>
              The site describes services we offer from Jaipur to clients in
              India and elsewhere: custom software, websites, ecommerce,
              mobile apps, UI and UX design, digital marketing, and related
              delivery. Pages, blog posts, calculators, and sample prices are
              information. They are not an offer that you can accept merely by
              filling in a form. Office hours on the site are Monday to
              Saturday, 10:00 AM to 7:00 PM IST, and the office is closed on
              Sunday. A message sent outside those hours is read on the next
              working day unless a written agreement says otherwise.
            </p>
            <p>
              You may browse the site, share public links, and contact us
              about a project. You may not copy the site design or text to
              present it as your own agency, scrape it in a way that degrades
              the service, attempt to break access controls, or use the forms
              to send malware or unlawful content. We may ignore or block
              submissions that look automated, abusive, or unrelated to a
              genuine enquiry.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Estimates, calculators, and published prices
            </h2>
            <p>
              Figures shown on service pages, the pricing page, and any
              calculator or estimator are starting points or illustrations.
              They are not a quotation, a fixed bid, or a promise that a
              feature list can be delivered for that amount. A number becomes
              a price only when it is written into a scope that names what is
              included, what is excluded, the timeline, and how change
              requests are handled. Discovery calls and written replies are
              how we reach that scope. Until then, either side may stop the
              conversation without a cancellation fee, unless a short paid
              discovery piece has already been agreed in writing.
            </p>
            <p>
              Timelines on the site assume a client who answers questions,
              supplies content, and gives feedback when asked. Delay on those
              inputs moves the date. We will say so rather than silently
              absorbing the slip. Third-party accounts, such as a payment
              gateway, an app store, or a cloud provider, have their own
              review times. We do not control those queues.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Your responsibilities
            </h2>
            <p>
              You confirm that the contact details you submit are accurate and
              that you have the authority to enquire for the business you
              name. You are responsible for the materials you send us: text,
              logos, data, and access to existing systems. You must have the
              right to share them. Do not send passwords in a form or a chat
              message. If a project needs access, we will agree a method in
              the scope, such as a role on your own account that you can
              revoke.
            </p>
            <p>
              You will not ask us to build something whose purpose is fraud,
              unauthorised access, or any other unlawful activity. We may
              refuse or stop work that we reasonably believe would put us or
              you in breach of law, including privacy law and platform rules
              for app stores and advertising networks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Intellectual property and portfolio
            </h2>
            <p>
              The website itself, including its layout, original writing, and
              graphics, belongs to Trifusion Infotech Private Limited or its
              licensors. You may not reuse it commercially without written
              permission. Trademarks of third parties mentioned on the site
              remain theirs. A mention of a platform, such as a framework or a
              store, is descriptive. It is not a claim that we are a certified
              partner of that platform.
            </p>
            <p>
              On a client project, you keep ownership of content and data you
              supply. Ownership of deliverables we create transfers as the
              written agreement states, and only after the fees due for those
              deliverables have been paid. Until then we retain the work.
              Tools, libraries, and pre-existing components we already use
              across projects stay ours or stay under their open-source
              licences. We do not assign those away. Unless you opt out in
              writing before launch, we may show non-confidential work in our
              portfolio, with the name of the product and a short description.
              We will not publish credentials, private business data, or
              material you have marked confidential.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Fees and payment
            </h2>
            <p>
              Fees, milestones, and taxes are set in the project agreement,
              not on this page. Invoices are payable as that agreement says.
              Late payment can pause work. We may use a written refund or
              warranty clause in a specific offer. That clause applies only to
              the offer that states it, and only on the conditions written
              there. It does not extend, by silence, to every page of the
              website. GST or other applicable tax is extra unless the
              document says the price includes it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Advertising on the site
            </h2>
            <p>
              The site may display third-party advertisements served by Google
              AdSense and its partners on content pages. Ad delivery,
              measurement, and any personalized ads are governed by Google’s
              terms and by our Privacy Policy. Clicking an advertisement does
              not create a contract with {siteConfig.name} for the
              advertiser’s product. We do not control the landing page an ad
              opens, and we are not responsible for that advertiser’s goods,
              claims, or privacy practices. Lead and tool pages listed in the
              Privacy Policy are not places we intend to run those ads.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Third-party services
            </h2>
            <p>
              The site loads or links to services we do not own, including
              Google Analytics, Google Tag Manager, Google Ads, Google
              AdSense, the Meta Pixel, EmailJS for form delivery, a WhatsApp
              chat link, and Tawk.to live chat when that script is configured.
              Your use of those services is also subject to their terms. A
              failure or change in a third-party script does not make us
              liable for lost measurements or for a form that could not be
              delivered because the provider was unavailable. If a form fails,
              email contact@thetrifusion.in or call +91 63781 33780.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Disclaimers and liability
            </h2>
            <p>
              The site is provided as available information. Blog posts and
              guides are practical notes from a software company. They are not
              legal, tax, medical, or investment advice, and they are not a
              guarantee of a search ranking, a revenue figure, or a store
              approval. We correct errors when we learn of them. We do not
              warrant that the site will be uninterrupted or free of mistakes.
            </p>
            <p>
              To the extent Indian law allows, we are not liable for indirect
              or consequential loss arising only from use of the public
              website, including lost profits or lost data caused by relying
              on a page without a written contract. Nothing on this page
              limits liability that cannot legally be limited, including
              liability for fraud or for death or personal injury caused by
              negligence. For a paid project, the liability cap, if any, is
              the one written in that project’s agreement. If the agreement is
              silent, liability for that project is limited to the fees you
              paid us for the work that gave rise to the claim.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Law, changes, and contact
            </h2>
            <p>
              These terms are governed by the laws of India. Courts at Jaipur,
              Rajasthan have jurisdiction, without preventing either side from
              seeking urgent interim relief where the law allows it. If a
              clause is held unenforceable, the rest of the terms remain in
              effect. We may update these terms by posting a new version on
              this page and changing the date. The version dated 1 October
              2026 is the current one. A project agreement signed after a
              change follows these terms only where that agreement says so.
              Otherwise the signed agreement controls the project, and these
              terms continue to control the website.
            </p>
            <p>
              Questions about these terms: Trifusion Infotech Private Limited,
              5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan
              302020, India. Phone +91 63781 33780. Email
              contact@thetrifusion.in.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
