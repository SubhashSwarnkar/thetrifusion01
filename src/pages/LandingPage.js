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
