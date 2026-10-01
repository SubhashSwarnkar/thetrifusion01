"use client";

import React, { useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { siteConfig } from "config/site";

const linkClass = "text-theme-blue underline underline-offset-2";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-5 py-20 max-w-3xl">
        <h1 className="text-4xl font-black text-theme-blue mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: 1 October 2026
        </p>
        <address className="text-gray-500 mb-8 not-italic">
          {siteConfig.legalName} (“TheTriFusion”)
          <span className="block">{siteConfig.addressLine}</span>
          <a className="text-theme-purple" href={siteConfig.telHref}>
            {siteConfig.phone}
          </a>
          <span className="block">
            <a className={linkClass} href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </span>
          <span className="block">{siteConfig.hoursLabel}</span>
        </address>
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">Who we are</h2>
            <p>
              This policy explains how Trifusion Infotech Private Limited
              (“TheTriFusion”, “we”, “us”) handles personal information when
              you use https://thetrifusion.in. We are a software services
              company. The office is on the 5th Floor, Amoro Building, Patrakar
              Colony, Jaipur, Rajasthan 302020, India. You can call +91 63781
              33780 or email contact@thetrifusion.in. This policy covers the
              public website, the forms on it, and the measurement and
              advertising tools that the site code actually loads. It does not
              describe a separate product you might later hire us to build.
              That work is covered by the written scope for the project.
            </p>
            <p>
              We wrote this page to be specific. If a tool is named below, it
              is present in the website code. We do not claim to run a customer
              database, a marketing-automation suite, or a chat product that
              the code does not load.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Information you give us
            </h2>
            <p>
              Contact, estimate, appointment, and project forms ask for the
              details you type: typically your name, email address, phone
              number, company, and a note about the work. Those fields are
              sent through EmailJS to the mailbox we use to read enquiries and
              reply. The public address for privacy questions is
              contact@thetrifusion.in. The website code does not store that
              form in its own database. EmailJS acts as the delivery service.
              We keep the resulting email for as long as we need it to answer
              you, prepare a scope, deliver work you later commission, and meet
              ordinary accounting or legal duties. You can ask us to delete an
              enquiry when the law allows.
            </p>
            <p>
              If you open the WhatsApp button or the floating WhatsApp widget,
              the message is composed in your browser and then opened in
              WhatsApp (wa.me). We do not receive that chat on our server. If
              you also submit a form, only the form follows the EmailJS path
              above. WhatsApp processes the conversation under its own terms
              once the chat leaves our page.
            </p>
            <p>
              The site includes a Tawk.to live-chat loader. The script runs
              only when a Tawk script address is configured for the deployment.
              If it is not configured, the loader does nothing. When the widget
              does load, the text you type in the chat is processed by Tawk.to
              so our team can reply. Do not put passwords, payment card
              numbers, or government identity numbers in a form or a chat.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Information collected automatically
            </h2>
            <p>
              The site records first-touch marketing attribution in your
              browser. That can include the page you landed on, the referrer,
              and UTM parameters when they are present in the URL. The code
              stores that record in session storage for the browsing session
              and in a cookie named tf_attr for 90 days, so a later form can
              include it. This is how we know which page or campaign a lead
              came from. It is not sold.
            </p>
            <p>
              Google Analytics 4 (measurement ID G-NSKGY1KSP4) measures page
              views and events such as clicks on phone, email, and WhatsApp.
              Google Tag Manager (container GTM-M8RQSNHN) loads tags. Google
              Ads conversion tracking (ID AW-18407666983) records conversions
              we have configured, such as a lead. The Meta Pixel (ID
              1703426564054952) measures visits and lead events for Meta
              advertising. These tags are in the site code. We use them to
              understand which pages are used and which campaigns produce
              enquiries. We do not use them to make automated decisions that
              have a legal effect on you.
            </p>
            <p>
              The code does not set a custom retention period inside Google
              Analytics, Google Ads, or Meta. Those services keep data
              according to the settings on our accounts and their own policies.
              You should read those policies if you want the provider’s
              retention detail. We do not publish a different number here,
              because the website does not control it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Advertising and cookies
            </h2>
            <p>
              We may show ads through Google AdSense. The publisher ID in the
              site code is ca-pub-3861153173590764. AdSense is not loaded on
              pages that are only there to collect a lead or complete a tool
              flow, including the thank-you, contact, estimate, planner,
              timeline, appointment, discuss-project, pricing calculator, and
              login paths, or on the 404 page. Content pages, including the
              home page, services, and blog articles, can load it.
            </p>
            <p>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
            </p>
            <p>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to this site and/or other sites on the Internet.
            </p>
            <p>
              You can opt out of personalized advertising from Google at{" "}
              <a
                className={linkClass}
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://adssettings.google.com
              </a>{" "}
              and from participating companies at{" "}
              <a
                className={linkClass}
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aboutads.info
              </a>
              . How Google uses advertising cookies and related technologies is
              described at{" "}
              <a
                className={linkClass}
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/technologies/ads
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Consent Mode and the cookie banner
            </h2>
            <p>
              Before analytics or advertising tags run, an inline script sets
              Google Consent Mode v2 defaults. For visitors in the European
              Economic Area, the United Kingdom, and Switzerland, ad storage,
              ad user data, ad personalization, and analytics storage start as
              denied until an update. Elsewhere they start as granted. If this
              browser already has a saved choice, that choice is applied
              immediately, before the AdSense script.
            </p>
            <p>
              The cookie panel offers Accept all and Reject. It is not pinned
              open on every visit. Open it from Cookie settings in the footer.
              That button fires the page event tf-open-cookie-settings. Accept
              all stores the value “granted” in local storage under the key
              tf_cookie_consent. Reject stores “denied”. If no choice is stored
              yet, the consent component records a grant when it loads, so
              measurement can run, and you can switch to Reject at any time
              from the same footer control. The stored choice remains until you
              change it or clear site data for this browser.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Why we use the information
            </h2>
            <p>
              We use contact details to reply, to send a scope or a meeting
              link you asked for, and to keep a record of that conversation.
              We use attribution and analytics to see which pages and campaigns
              lead to enquiries. We use advertising tools to show and measure
              ads, including ads that may be based on earlier visits where
              that is allowed. We use chat and WhatsApp so you can reach the
              Jaipur team without a form. We do not sell personal information.
              We do not buy lists and match them to site visitors in the
              website code.
            </p>
            <p>
              The providers named on this page process data for us or, in the
              case of Google, Meta, Tawk.to, and WhatsApp, also for their own
              purposes described in their policies. Those companies may process
              data outside India. Their own terms explain the countries and
              the safeguards they offer. We do not copy those terms onto this
              page and we do not add a transfer mechanism the code does not
              implement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              How long we keep it
            </h2>
            <p>
              Form messages delivered by EmailJS are kept in our mailbox while
              we need them to respond, quote, perform a contract, and meet
              ordinary bookkeeping or legal requirements, and then deleted or
              anonymised. The attribution cookie lasts 90 days unless you
              delete it sooner. The session-storage copy lasts for that browser
              session. The consent choice stays in local storage until you
              change it or clear storage. Server logs, if the host keeps them,
              are not given a separate period in this website’s code. Provider
              retention for Analytics, Ads, AdSense, Tag Manager, and the Meta
              Pixel follows those products’ settings, as noted above.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Your rights, including the DPDP Act and the GDPR
            </h2>
            <p>
              If the Digital Personal Data Protection Act, 2023 of India
              applies, you may ask to access personal data we hold about you,
              to correct it, to erase it, and to nominate another person to
              exercise rights if you die or become unable to act. You may
              withdraw consent where processing is based on consent. You may
              raise a grievance with us first, at contact@thetrifusion.in. If
              you are not satisfied, you may approach the Data Protection Board
              of India once that route is available to you.
            </p>
            <p>
              If the EU or UK GDPR applies, you may ask for access,
              rectification, erasure, restriction, and a portable copy of data
              you provided, and you may object to processing based on
              legitimate interests. You may withdraw consent at any time
              without affecting processing that was lawful before the
              withdrawal. You may lodge a complaint with a supervisory
              authority. Consent Mode’s Reject choice, and the ad settings
              links above, are the controls the site gives you for cookies.
              For enquiry emails, write to us and we will act on the request
              when we can identify the message and the law allows the deletion.
            </p>
            <p>
              We will ask for enough detail to find the right email or chat.
              We may refuse a request that is repetitive, that would disclose
              someone else’s data, or that we must keep for a legal duty. We
              will tell you when that happens.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Children&apos;s privacy
            </h2>
            <p>
              The site is written for businesses and adult clients. It is not
              directed at children. We do not knowingly collect personal data
              from anyone under 18 through our forms, chat, or advertising
              tags. If you believe a child has sent us personal data, email
              contact@thetrifusion.in and we will delete it from the mailbox
              or chat we control when we can identify it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-blue">
              Changes and contact
            </h2>
            <p>
              We will post changes on this page and change the “Last updated”
              date. A change applies from the date shown. Continued use of the
              site after that date means you are reading the current policy.
              Project contracts can contain a separate data clause. If that
              clause conflicts with this page for project files, the contract
              controls for those files. This page still controls the public
              website.
            </p>
            <p>
              Privacy questions and requests go to Trifusion Infotech Private
              Limited, 5th Floor, Amoro Building, Patrakar Colony, Jaipur,
              Rajasthan 302020, India. Phone +91 63781 33780. Email
              contact@thetrifusion.in. Office hours are Monday to Saturday,
              10:00 AM to 7:00 PM IST, closed Sunday.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
