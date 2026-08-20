"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade } from "react-awesome-reveal";
import SEO from "components/common/SEO";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "100+", label: "Projects Completed", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "🤝" },
    { number: "5+", label: "Years Experience", icon: "📅" },
    { number: "15+", label: "Experts", icon: "👨‍💻" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of the curve with the latest technologies and future-forward trends.",
      color: "purple"
    },
    {
      title: "Quality",
      description: "We deliver nothing but the best, ensuring pixel-perfect excellence in every line of code.",
      color: "cyan"
    },
    {
      title: "Transparency",
      description: "We believe in radical honesty, clear communication, and unbreakable partnerships.",
      color: "pink"
    },
    {
      title: "Client Focus",
      description: "Your success is the fuel for our passion. We are committed to your long-term growth.",
      color: "blue"
    }
  ];

  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about TheTriFusion, our story, values, and the team behind our success in software development and digital solutions."
      />
      <Header />
      
      <main className="overflow-hidden">
        {/* Breadcrumbs wrapper with background */}
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative pt-10 pb-20 bg-white">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-light-theme-purple/30 rounded-full blur-[120px] -z-10 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-theme-cyan/10 rounded-full blur-[100px] -z-10 animate-float" style={{animationDelay: '2s'}}></div>
          
          <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <Fade direction="up" triggerOnce>
                <span className="inline-block px-4 py-1.5 rounded-full bg-light-theme-purple/30 text-theme-purple font-bold text-xs uppercase tracking-[0.2em] mb-6">
                  Our Story
                </span>
                <h1 className="text-6xl md:text-8xl font-black text-theme-blue mb-8 tracking-tighter leading-none">
                  Building the <br />
                  <span className="text-gradient">Future Together</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                  Founded with a vision to catalyze digital transformation, we merge peak engineering with disruptive creativity.
                </p>
              </Fade>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-32">
              {stats.map((stat, index) => (
                <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                  <div className="card-glass p-8 rounded-[2rem] text-center group hover:scale-105 transition-all duration-500">
                    <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                    <div className="text-4xl sm:text-5xl font-black text-theme-purple mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                  </div>
                </Fade>
              ))}
            </div>

            {/* Story Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
              <Fade direction="left" triggerOnce>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-theme-purple to-theme-cyan rounded-[3rem] rotate-3 -z-10 opacity-20"></div>
                  <div className="bg-white p-2 rounded-[3.2rem] shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                      alt="Team collaborating" 
                      className="rounded-[3rem] w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              </Fade>
              <Fade direction="right" triggerOnce>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black text-theme-blue tracking-tight leading-tight">
                    Beyond Code: <br />
                    We Craft <span className="text-theme-purple">Experiences</span>
                  </h2>
                  <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                    <p>
                      At TheTriFusion, we don't just build software. we architect success stories. Our approach is rooted in the belief that technology should be a multiplier for human potential.
                    </p>
                    <p>
                      Our team of passionate developers, designers, and strategists work in a flat hierarchy, ensuring every bold idea gets the spotlight it deserves. We thrive on complexity and deliver elegance.
                    </p>
                    <div className="pt-4">
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border-l-4 border-theme-purple italic text-theme-blue">
                        "Technology is best when it brings people together and solves real-world friction."
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            {/* Values Section */}
            <div className="mb-32 relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
              <div className="text-center mb-16">
                <Fade direction="up" triggerOnce>
                  <h2 className="text-4xl md:text-6xl font-black text-theme-blue tracking-tight mb-4">
                    Our Core DNA
                  </h2>
                  <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                    The fundamental principles that guide every decision we make and every line of code we write.
                  </p>
                </Fade>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Fade
                    key={index}
                    direction="up"
                    delay={index * 100}
                    triggerOnce
                  >
                    <div
                      className="group relative bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl p-8 border border-gray-50 overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                    >
                      <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl opacity-20 -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 bg-theme-${value.color}`}></div>
                      <div className="relative z-10">
                        <h3 className="text-2xl text-theme-blue font-black mb-4">
                          {value.title}
                        </h3>
                        <p className="text-gray-500 font-light leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>

            {/* Team Call to Action */}
            <Fade direction="up" triggerOnce>
              <div className="text-center bg-theme-blue rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-theme-purple/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    The Humans Behind <br />
                    the <span className="text-theme-cyan">Innovation</span>
                  </h2>
                  <p className="text-white/70 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
                    We're a diverse collective of dreamers and doers. Ready to meet the people who will transform your business?
                  </p>
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-theme-blue rounded-full text-lg font-black hover:scale-105 transition-all active:scale-95 shadow-xl shadow-black/20"
                  >
                    Meet the Team
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

