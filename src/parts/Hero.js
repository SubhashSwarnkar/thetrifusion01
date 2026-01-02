import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import HeroVideo from "../assets/images/hero/grok-video-a50935b7-1f97-482b-a269-949d5dedccc5 (1).mp4";
import SplashCursor from "components/SplashCursor";

export default function Hero() {
  return (
    <section className="hero relative overflow-hidden py-20 z-10">
      <div className="absolute inset-0 z-[-1]">
        <SplashCursor />
      </div>
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <Fade direction="up" triggerOnce>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
                Growing Your Business{" "}
                <span className="text-gradient">Is Our Calling</span>
              </h1>
            </Fade>

            <Fade direction="up" delay={200} triggerOnce>
              <p className="font-light text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                We provide expert developers & designers using the latest technologies to help
                you scale up your business and achieve digital success.
              </p>
            </Fade>

            <Fade direction="up" delay={400} triggerOnce>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  href="/portfolio"
                  type="link"
                  className="btn-wave flex items-center justify-center px-8 py-4 text-white text-lg rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  See Our Work
                  <svg
                    className="ml-2 w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
                <Link
                  to="/contact"
                  className="flex items-center justify-center px-8 py-4 text-theme-purple text-lg bg-white border-2 border-theme-purple rounded-full shadow-lg hover:bg-light-theme-purple transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Get Started
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </Fade>

            <Fade direction="right" delay={600} triggerOnce>
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100+ Projects Delivered</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </Fade>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center items-center order-first lg:order-last">
            <Fade direction="left" triggerOnce>
              <div className="relative">
                <div className="absolute inset-0 "></div>
                <video 
                  className="relative z-10 w-full max-w-2xl rounded-2xl object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={HeroVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
