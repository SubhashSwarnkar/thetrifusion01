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
          <Newsletter />
          <Discuss />
        </main>
        
        <Footer />
      </>
    );
  }
}
