import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade } from "react-awesome-reveal";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Team Members" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of the curve with the latest technologies and trends."
    },
    {
      title: "Quality",
      description: "We deliver nothing but the best, ensuring excellence in every project."
    },
    {
      title: "Transparency",
      description: "We believe in clear communication and honest partnerships."
    },
    {
      title: "Client Focus",
      description: "Your success is our success. We're committed to your growth."
    }
  ];

  return (
    <>
      <Header />
      <Breadcrumbs />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue font-bold mb-5">
              About TheTriFusion
            </h1>
            <p className="font-light text-xl text-gray-400 max-w-3xl mx-auto">
              Growing Your Business Is Our Calling
            </p>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl text-theme-blue font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              TheTriFusion was founded with a vision to help businesses thrive in the digital world. 
              We combine creativity, technology, and strategic thinking to deliver solutions that make 
              a real difference.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our team of passionate developers, designers, and marketers work together to create 
              digital experiences that not only look great but also drive results. We believe in 
              building long-term partnerships with our clients, understanding their unique needs, 
              and delivering solutions that exceed expectations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From startups to established enterprises, we've helped businesses across various 
              industries establish a strong online presence and achieve their digital goals.
            </p>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-theme-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="mb-16">
            <h2 className="text-3xl text-theme-blue font-bold mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border border-light-theme-purple transform transition duration-300 hover:scale-105"
                >
                  <h3 className="text-lg sm:text-xl text-theme-blue font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="text-center">
            <h2 className="text-3xl text-theme-blue font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-600 mb-8">
              We're a diverse team of talented individuals passionate about creating amazing digital experiences.
            </p>
            <Link
              to="/team"
              className="inline-block px-8 py-4 bg-theme-purple text-white rounded-full text-lg font-medium hover:bg-dark-theme-purple transition duration-200"
            >
              View Our Team
            </Link>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  );
}

