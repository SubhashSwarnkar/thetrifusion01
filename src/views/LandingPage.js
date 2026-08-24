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
import Newsletter from "components/Newsletter";
import { Fade } from "react-awesome-reveal";
import SEO from "components/common/SEO";
import Link from "next/link";
import { HOME_FAQS } from "data/companyInfo";

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <SEO 
          title="Home"
          description="TheTriFusion is a leading software development company providing web development, mobile app development, UI/UX design, and IT consulting services."
        />
        <Header />
        
        <main className="overflow-hidden">
          <Hero />
          
          <Service data={Services} />
          
          {/* Stats Section with Glassmorphism and Float Animation */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-light-theme-purple/20 -z-10"></div>
            <div className="container mx-auto px-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Fade direction="up" delay={100} triggerOnce>
                  <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '0s'}}>
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">100+</div>
                    <div className="text-gray-600 font-medium">Projects Delivered</div>
                  </div>
                </Fade>
                <Fade direction="up" delay={200} triggerOnce>
                  <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '1s'}}>
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</div>
                    <div className="text-gray-600 font-medium">Happy Clients</div>
                  </div>
                </Fade>
                <Fade direction="up" delay={300} triggerOnce>
                  <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '2s'}}>
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">15+</div>
                    <div className="text-gray-600 font-medium">Team Members</div>
                  </div>
                </Fade>
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="card-glass rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '3s'}}>
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">5+</div>
                    <div className="text-gray-600 font-medium">Years Experience</div>
                  </div>
                </Fade>
              </div>
            </div>
          </section>
          
          <Portfolio data={Portfolios} />
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
          <Newsletter />
          <Discuss />
        </main>
        
        <Footer />
      </>
    );
  }
}
