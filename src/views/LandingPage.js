"use client";

import React, { Component } from "react";
import {
  Services,
  Portfolios,
  Advantages,
  Testimonials,
} from "json/landingPageData";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Service from "parts/Service";
import Portfolio from "parts/Portfolio";
import Advantage from "parts/Advantage";
import Testimonial from "parts/Testimonial";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";
import TrustBadges from "components/TrustBadges";
import FeaturedCaseStudy from "components/FeaturedCaseStudy";
import SpecializedSolutions from "components/SpecializedSolutions";
import BrandTrustStrip from "components/BrandTrustStrip";
import { Fade } from "react-awesome-reveal";
import SEO from "components/common/SEO";
import Link from "next/link";
import { HOME_FAQS } from "data/companyInfo";
import { getHubTrendingPosts } from "data/blogData";

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <SEO 
          title="Home"
          description="Jaipur agency for React/Next.js websites and mobile apps. TheTriFusion scopes in writing, ships with weekly demos, and stays on after launch."
        />
        <Header />
        
        <main className="overflow-hidden">
          <Hero />
          <BrandTrustStrip />

          <section id="home-ecommerce-offer" className="container mx-auto px-5 py-10">
            <div className="rounded-2xl border border-theme-purple/20 bg-gradient-to-br from-light-theme-purple/50 to-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-sm">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-theme-purple mb-2">
                  Ecommerce offer
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-theme-blue mb-2">
                  Ecommerce website live in 48 hours — or 50% refund
                </h2>
                <p className="text-gray-600 font-light">
                  Single vendor from ₹25,000 · Multi-vendor from ₹35,000 · web + Android + iOS framing · Jaipur team.
                </p>
              </div>
              <Link
                href="/ecommerce-development"
                className="inline-flex items-center justify-center shrink-0 px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg shadow-theme-purple/25 hover:scale-[1.02] transition-transform"
              >
                See ecommerce packages
              </Link>
            </div>
          </section>

          <section id="home-explore-hubs" className="container mx-auto px-5 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/blog"
                className="rounded-2xl border border-gray-100 bg-white p-5 hover:border-theme-purple/40 transition-colors shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-theme-purple mb-1">Insights</p>
                <p className="font-bold text-theme-blue">Blog &amp; guides</p>
                <p className="text-sm text-gray-500 font-light mt-1">Trends, AI, apps, ecommerce how-tos — plus company notes on <span className="text-theme-blue">About</span></p>
              </Link>
              <Link
                href="/portfolio"
                className="rounded-2xl border border-gray-100 bg-white p-5 hover:border-theme-purple/40 transition-colors shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-theme-purple mb-1">Proof</p>
                <p className="font-bold text-theme-blue">Live portfolio</p>
                <p className="text-sm text-gray-500 font-light mt-1">Stores and apps you can open</p>
              </Link>
              <Link
                href="/about"
                className="rounded-2xl border border-gray-100 bg-white p-5 hover:border-theme-purple/40 transition-colors shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-theme-purple mb-1">Company</p>
                <p className="font-bold text-theme-blue">About TheTriFusion</p>
                <p className="text-sm text-gray-500 font-light mt-1">Jaipur Pvt. Ltd. team</p>
              </Link>
            </div>
          </section>

          <section id="home-trending-blog" className="container mx-auto px-5 pb-10">
            <div className="rounded-2xl border border-theme-purple/15 bg-white p-6 sm:p-7 shadow-sm">
              <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-theme-purple mb-1">
                    Trending now
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-theme-blue">
                    Fresh explainers from the blog
                  </h2>
                </div>
                <Link href="/blog" className="text-sm font-semibold text-theme-purple hover:underline">
                  All posts →
                </Link>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                {getHubTrendingPosts().slice(0, 9).map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block rounded-lg px-3 py-2 text-theme-blue hover:bg-light-theme-purple/60 hover:text-theme-purple transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          <Service data={Services} />
          <SpecializedSolutions />
          
          {/* Stats Section with Glassmorphism and Float Animation */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-light-theme-purple/20 -z-10"></div>
            <div className="container mx-auto px-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Fade direction="up" delay={100} triggerOnce>
                  <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '0s'}}>
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</div>
                    <div className="text-gray-600 font-medium">Live products you can open</div>
                  </div>
                </Fade>
                <Fade direction="up" delay={200} triggerOnce>
                  <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '1s'}}>
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">24h</div>
                    <div className="text-gray-600 font-medium">Scoped estimate reply</div>
                  </div>
                </Fade>
                <Fade direction="up" delay={300} triggerOnce>
                  <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '2s'}}>
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">Weekly</div>
                    <div className="text-gray-600 font-medium">Demo updates</div>
                  </div>
                </Fade>
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '3s'}}>
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">Jaipur</div>
                    <div className="text-gray-600 font-medium">Pvt. Ltd. office</div>
                  </div>
                </Fade>
              </div>
            </div>
          </section>
          
          <Portfolio data={Portfolios} />
          <FeaturedCaseStudy />
          <TrustBadges />
          <Advantage data={Advantages} />
          <Testimonial data={Testimonials} />
          <section className="container mx-auto px-5 py-16">
            <Fade direction="up" triggerOnce>
              <h2 className="text-4xl sm:text-5xl text-theme-blue font-bold mb-4 text-center">
                Frequently asked questions
              </h2>
              <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
                Straight answers about location, services, and how we work.
              </p>
            </Fade>
            <div className="max-w-3xl mx-auto space-y-4">
              {HOME_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer font-bold text-theme-blue list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-theme-purple text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
              <p className="text-center pt-4">
                <Link href="/faq" className="text-theme-purple font-semibold hover:underline">
                  More FAQs →
                </Link>
              </p>
            </div>
          </section>
          <Discuss />
        </main>
        
        <Footer />
      </>
    );
  }
}
