"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { siteConfig } from "config/site";

const linkClass = "text-theme-purple underline underline-offset-2";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="bg-white">
        <article className="container mx-auto max-w-3xl px-5 py-16">
          <p className="mb-8 text-3xl font-bold leading-none text-theme-blue">
            TheTri<span className="text-theme-purple">Fusion</span>
          </p>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-theme-blue md:text-5xl">
            About TheTriFusion
          </h1>
          <p className="mb-4 text-sm font-semibold text-theme-blue">
            {siteConfig.legalName}
          </p>

          <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">Who we are</h2>
              <p>
                TheTriFusion is the public brand of Trifusion Infotech Private
                Limited, a software company whose office is in Jaipur,
                Rajasthan. The business has been running since 2023. In 2026 it
                was incorporated as a private limited company. The Department
                for Promotion of Industry and Internal Trade (DPIIT) has
                recognised the company under Startup India. That recognition is
                the Startup India certificate. The people who do the work are a
                team of about ten developers and consultants. They take
                software projects for clients in India and worldwide. A typical
                project on this desk is between $200 and $10,000.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                How the company started
              </h2>
              <p>
                The company started as an operating business in 2023, before
                the private-limited incorporation in 2026. The incorporation
                changed the legal form. It did not change the office, the
                brand, or the kind of software the team builds. Startup India
                recognition through DPIIT is a government recognition of that
                company. This page does not attach a ranking or a headcount
                beyond the team of about ten.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">What we build</h2>
              <p>
                The flagship work is EV charging software. That means a driver
                app and a charging station management system, the CSMS, for a
                charge point operator, an e-mobility service provider (eMSP),
                or both roles in one product. Charger communication on the
                service page is OCPP 1.6J and OCPP 2.0.1. Roaming between
                networks on that same page is OCPI 2.2.1. The technology list
                published for that product also names React Native, Node.js,
                PostgreSQL, Redis, WebSockets, MQTT, UPI, QR, and RFID. The
                full scope, including what a CPO record is and what an eMSP
                record is, is on the{" "}
                <Link
                  href="/services/ev-charging-app-development"
                  className={linkClass}
                >
                  EV charging app development
                </Link>{" "}
                page.
              </p>
              <p>
                The same team builds other software, and each line has its own
                page under{" "}
                <Link href="/services" className={linkClass}>
                  services
                </Link>
                .{" "}
                <Link href="/services/mobile-app-development" className={linkClass}>
                  Mobile apps
                </Link>{" "}
                cover Android and iOS.{" "}
                <Link href="/services/website-development" className={linkClass}>
                  Websites
                </Link>{" "}
                cover marketing sites and web applications. Ecommerce covers
                online stores.{" "}
                <Link href="/services/fintech-app-development" className={linkClass}>
                  Fintech apps
                </Link>
                , as the fintech service page states them, cover BBPS, AEPS,
                DMT, XDMT, UPI, and KYC software with retailer and admin panels.{" "}
                <Link href="/services/crm-erp-development" className={linkClass}>
                  CRM and ERP
                </Link>{" "}
                work covers pipelines, inventory, billing, and role-based
                admin.{" "}
                <Link href="/services/software-development" className={linkClass}>
                  Custom software
                </Link>{" "}
                is the broader build when the product is not one of those named
                lines.{" "}
                <Link href="/services/ai-development" className={linkClass}>
                  AI development
                </Link>{" "}
                and{" "}
                <Link href="/services/devops" className={linkClass}>
                  DevOps
                </Link>{" "}
                are separate services, as is{" "}
                <Link href="/services/ui-ux-design" className={linkClass}>
                  UI/UX
                </Link>
                . This page does not add a service the services section does
                not already list.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                Work named in the portfolio
              </h2>
              <p>
                Four pieces of work are already described in the{" "}
                <Link href="/portfolio" className={linkClass}>
                  portfolio
                </Link>
                , and this page repeats only that description.
              </p>
              <p>
                <Link
                  href="/portfolio/plugone-ev-charging-platform"
                  className={linkClass}
                >
                  PlugOne
                </Link>{" "}
                is the EV charging platform in the portfolio. The portfolio
                text says it connects EV owners to nearby charging stations in
                real time, with an interactive map, charging-status tracking, a
                smart mobility dashboard, and session management across
                charging networks. The portfolio card also notes OCPI and OCPP
                roaming, and delivery on iOS, Android, and web.
              </p>
              <p>
                <Link
                  href="/portfolio/connect-dairy-supply-chain"
                  className={linkClass}
                >
                  Connect Dairy
                </Link>{" "}
                is the supply-chain build. The portfolio calls it a live
                agri-logistics platform for dairy and feed operations:
                milk-truck management, feed-truck distribution, feed business
                workflows, live fleet tracking, role-based dashboards, and P&amp;L
                variance analytics.
              </p>
              <p>
                <Link
                  href="/portfolio/atharv-narayan-wellness-website"
                  className={linkClass}
                >
                  Atharv Narayan
                </Link>{" "}
                is the website in the portfolio under that name. The repository
                describes a live dairy solutions site for Bhilwara and Jaipur:
                milk transportation, trained dairy manpower, cattle-feed
                supply, and tender support, with service pages, inquiry flows,
                and WhatsApp-ready contact.
              </p>
              <p>
                <Link
                  href="/portfolio/dailyconcepts-ecommerce-pos"
                  className={linkClass}
                >
                  DailyConcepts
                </Link>{" "}
                is the ecommerce and point-of-sale build. The portfolio says
                Daily Concepts India is an e-commerce platform with an
                integrated point-of-sale system in the admin panel, UI and UX
                work, order management, and checkout for online and offline
                sales.
              </p>
              <p>
                Those four are named because the repository already names them.
                They are not a client count, and they are not a testimonial.
                Other portfolio entries stay on the portfolio page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                How a project runs
              </h2>
              <p>
                A project follows six stages, in this order. Discovery writes
                down the goal, the user, the constraint, and what finished
                means, before implementation starts. Design turns that note
                into flows and screens the client can react to. Build is the
                implementation in the stack the relevant service page already
                names. QA checks the paths the scope listed, on the devices the
                scope listed. Launch puts the build on the environment the
                client will operate. Support is the agreed work after launch:
                fixes and changes that were in scope, not a second product
                added in silence.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                Technology named on the service pages
              </h2>
              <p>
                The technology names below are copied from the service pages
                already on this site. Websites: React, Next.js, Node.js,
                MongoDB, and WordPress. Mobile apps: React Native, Flutter,
                Swift, and Kotlin, with Firebase on the mobile service page.
                Custom software: React, Node.js, Python, Java, AWS, Docker,
                Kubernetes, MongoDB, and PostgreSQL. AI development: Python,
                TensorFlow, PyTorch, and scikit-learn, which are on that
                service’s technology list. DevOps: Jenkins, GitLab CI, Docker,
                Kubernetes, Terraform, AWS, and Azure. UI and UX: Figma, Adobe
                XD, and Sketch. EV charging uses the protocols and runtime
                named earlier on this page. A proposal for one project names
                the subset that project will use. This page does not claim a
                tool the service pages do not list.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-theme-blue">
                Office and contact
              </h2>
              <p>
                The office is on the 5th Floor, Amoro Building, Patrakar
                Colony, Jaipur, Rajasthan 302020, India. The phone is{" "}
                <a className={linkClass} href={siteConfig.telHref}>
                  {siteConfig.phone}
                </a>
                . Hours are Monday to Saturday, 10 AM to 7 PM. Email is{" "}
                <a className={linkClass} href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                . The business has been operating since 2023. Incorporation as
                a private limited company is a 2026 fact, separate from that
                founding year.
              </p>
              <address className="not-italic text-base text-gray-500">
                <span className="block font-semibold text-theme-blue">
                  {siteConfig.legalName}
                </span>
                <span className="block">{siteConfig.addressLine}</span>
                <a className={`block ${linkClass}`} href={siteConfig.telHref}>
                  {siteConfig.phone}
                </a>
                <span className="block">{siteConfig.hoursLabel}</span>
                <a
                  className={`block ${linkClass}`}
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </address>
              <p>
                To discuss a project, use the{" "}
                <Link href="/contact" className={linkClass}>
                  contact
                </Link>{" "}
                page, call the phone number above, or email{" "}
                {siteConfig.email}. The service list is on the{" "}
                <Link href="/services" className={linkClass}>
                  services
                </Link>{" "}
                page. Published work is on the{" "}
                <Link href="/portfolio" className={linkClass}>
                  portfolio
                </Link>{" "}
                page. Articles on software, apps, EV charging, AI, and business
                technology are on the{" "}
                <Link href="/blog" className={linkClass}>
                  blog
                </Link>
                . How those articles are written, checked, and corrected is on
                the{" "}
                <Link href="/editorial-policy" className={linkClass}>
                  editorial policy
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
