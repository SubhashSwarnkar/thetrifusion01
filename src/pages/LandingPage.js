import React, { Component } from "react";
import { Link } from "react-router-dom";

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

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Service data={Services} />
        
        {/* Stats Section */}
        <section className="bg-gradient-to-r from-theme-purple to-theme-blue py-16">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Fade direction="up" delay={100} triggerOnce>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                  <div className="text-white/90 text-sm md:text-base">Projects Delivered</div>
                </div>
              </Fade>
              <Fade direction="up" delay={200} triggerOnce>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/90 text-sm md:text-base">Happy Clients</div>
                </div>
              </Fade>
              <Fade direction="up" delay={300} triggerOnce>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
                  <div className="text-white/90 text-sm md:text-base">Team Members</div>
                </div>
              </Fade>
              <Fade direction="up" delay={400} triggerOnce>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
                  <div className="text-white/90 text-sm md:text-base">Years Experience</div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        
        {/* Quick Tools Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-5">
            <Fade direction="up" triggerOnce>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-theme-blue font-bold mb-4">
                  Plan Your Project
                </h2>
                <p className="font-light text-lg text-gray-600 max-w-2xl mx-auto">
                  Use our powerful tools to estimate cost, timeline, and plan your website with ease
                </p>
              </div>
            </Fade>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <Fade direction="up" delay={100} triggerOnce>
                <Link to="/pricing/calculator" className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border border-light-theme-purple transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-full">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💰</div>
                    <h3 className="text-xl text-theme-blue font-bold mb-3">
                      Price Calculator
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get instant price estimates for your project
                    </p>
                    <div className="flex items-center text-theme-purple font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm">Try Now</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Fade>
              
              <Fade direction="up" delay={200} triggerOnce>
                <Link to="/estimate" className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border border-light-theme-purple transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-full">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🤖</div>
                    <h3 className="text-xl text-theme-blue font-bold mb-3">
                      AI Estimator
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get AI-powered project estimates and recommendations
                    </p>
                    <div className="flex items-center text-theme-purple font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm">Try Now</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Fade>
              
              <Fade direction="up" delay={300} triggerOnce>
                <Link to="/planner" className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border border-light-theme-purple transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-full">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📋</div>
                    <h3 className="text-xl text-theme-blue font-bold mb-3">
                      Page Planner
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Visualize and plan your website structure
                    </p>
                    <div className="flex items-center text-theme-purple font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm">Try Now</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Fade>
              
              <Fade direction="up" delay={400} triggerOnce>
                <Link to="/timeline" className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border border-light-theme-purple transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-full">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">⏱️</div>
                    <h3 className="text-xl text-theme-blue font-bold mb-3">
                      Timeline Calculator
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Estimate project delivery timeline
                    </p>
                    <div className="flex items-center text-theme-purple font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm">Try Now</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
          </div>
        </section>
        
        <Portfolio data={Portfolios} />
        <TrustBadges />
        <Advantage data={Advantages} />
        <Testimonial data={Testimonials} />
        <Newsletter />
        <Discuss />
        <Footer />
      </>
    );
  }
}
