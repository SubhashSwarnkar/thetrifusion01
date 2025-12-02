import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { getServiceBySlug } from "data/servicesData";
import { Fade } from "react-awesome-reveal";
import NotFoundPage from "./NotFoundPage";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Header />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">{service.icon}</div>
            <h1 className="text-5xl text-theme-blue dark:text-white font-bold mb-5">
              {service.title}
            </h1>
            <p className="font-light text-xl text-gray-400 dark:text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <Fade direction="left" triggerOnce>
            <div>
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div>
              <h2 className="text-2xl sm:text-3xl text-theme-blue dark:text-white font-bold mb-6">
                Key Features
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-theme-purple dark:text-purple-400 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>

        <Fade direction="up" triggerOnce>
          <div className="mb-16">
            <h2 className="text-3xl text-theme-blue dark:text-white font-bold mb-8 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 sm:p-6 border border-light-theme-purple dark:border-gray-700 transform transition duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-theme-purple dark:bg-purple-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl text-theme-blue dark:text-white font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-theme-purple text-white rounded-full text-lg font-medium hover:bg-dark-theme-purple transition duration-200"
            >
              Get Started Today
            </Link>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  );
}

