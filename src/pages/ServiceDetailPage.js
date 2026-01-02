import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { getServiceBySlug } from "data/servicesData";
import { Fade, Zoom } from "react-awesome-reveal";
import NotFoundPage from "./NotFoundPage";
import SEO from "components/common/SEO";

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
      <SEO 
        title={service.title} 
        description={service.description}
        image={service.imageUrl}
      />
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-light-theme-purple via-white to-light-theme-purple py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-theme-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-theme-blue rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Fade direction="left" triggerOnce>
              <div className="text-center lg:text-left">
                <div className="inline-block mb-6">
                  <div className="text-7xl md:text-8xl mb-4 transform hover:scale-110 transition-transform duration-300 inline-block">
                    {service.icon}
                  </div>
                  <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto lg:mx-0 rounded-full"></div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-theme-blue font-bold mb-6 leading-tight">
              {service.title}
            </h1>
                <p className="font-light text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {service.description}
            </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-block px-8 py-4 bg-white text-theme-purple border-2 border-theme-purple rounded-full text-lg font-semibold hover:bg-light-theme-purple hover:scale-105 transform transition-all duration-300"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-purple/10 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-12">

        {/* Banner Section */}
        {service.bannerTitle && (
          <Fade direction="up" triggerOnce>
            <div className="relative bg-gradient-to-r from-theme-purple via-purple-600 to-dark-theme-purple rounded-3xl p-8 md:p-16 mb-20 text-white text-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <div className="inline-block mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {service.bannerTitle}
                </h2>
                {service.bannerDescription && (
                  <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
                    {service.bannerDescription}
                  </p>
                )}
              </div>
            </div>
          </Fade>
        )}

        {/* Services Section */}
        {service.services && service.services.length > 0 && (
          <Fade direction="up" triggerOnce>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl text-theme-blue font-bold mb-4">
                  Our {service.title} Services
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Comprehensive solutions tailored to your business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.services.map((item, index) => (
                  <Zoom key={index} delay={index * 100} triggerOnce>
                    <div className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:border-theme-purple transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-light-theme-purple to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-xl flex items-center justify-center mb-6 text-3xl transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-xl text-theme-blue font-bold mb-4 group-hover:text-theme-purple transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Zoom>
                ))}
              </div>
          </div>
        </Fade>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
          <Fade direction="left" triggerOnce>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative">
              <img
                src={service.featuresImage || service.imageUrl}
                alt={service.title}
                  className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              </div>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div>
              <div className="inline-block mb-6">
                <span className="text-theme-purple font-semibold text-sm uppercase tracking-wide">Key Features</span>
                <div className="w-16 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-full mt-2"></div>
              </div>
              <h2 className="text-3xl md:text-4xl text-theme-blue font-bold mb-8">
                Why Choose Our {service.title}?
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-lg flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                        className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    </div>
                    <span className="text-gray-700 text-lg font-medium pt-1 group-hover:text-theme-blue transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>

        {/* Process Section */}
        {service.process && service.process.length > 0 && (
          <div className="mb-20 bg-gradient-to-br from-gray-50 to-white py-16 rounded-3xl">
        <Fade direction="up" triggerOnce>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl text-theme-blue font-bold mb-4">
                  Our {service.title} Process
            </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  A proven methodology that delivers exceptional results
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {service.process.map((step, index) => (
                  <Fade key={index} direction="up" delay={index * 100} triggerOnce>
                    <div className="relative">
                      {index < service.process.length - 1 && (
                        <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-theme-purple to-transparent z-0" style={{ width: 'calc(100% - 3rem)' }}></div>
                      )}
                      <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-theme-purple relative z-10 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-theme-purple to-dark-theme-purple text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                          {step.step || index + 1}
                  </div>
                        <h3 className="text-xl text-theme-blue font-bold mb-3 group-hover:text-theme-purple transition-colors">
                    {step.title}
                  </h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </Fade>
          </div>
        )}

        {/* Technologies Section */}
        {service.technologies && service.technologies.length > 0 && (
          <Fade direction="up" triggerOnce>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl text-theme-blue font-bold mb-4">
                  {typeof service.technologies[0] === 'object' 
                    ? "Advanced Technology Solutions We Master"
                    : "Technologies We Use"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-6"></div>
                {typeof service.technologies[0] === 'object' && (
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                    Our expert developers bring new ideas to digitize your business, creating the best solutions for both you and your customers with their professional advice.
                  </p>
                )}
              </div>
              <div className={`grid grid-cols-1 md:grid-cols-2 ${typeof service.technologies[0] === 'object' ? 'lg:grid-cols-4' : 'lg:grid-cols-5'} gap-6`}>
                {service.technologies.map((tech, index) => (
                  <Zoom key={index} delay={index * 100} triggerOnce>
                    <div className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:shadow-2xl hover:border-theme-purple transition-all duration-300 transform hover:-translate-y-2 ${typeof tech === 'string' ? 'text-center' : ''}`}>
                      {typeof tech === 'object' ? (
                        <>
                          <div className="w-14 h-14 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-xl flex items-center justify-center mb-4 text-2xl">
                            {service.icon}
                          </div>
                          <h3 className="text-xl text-theme-blue font-bold mb-3">
                            {tech.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                        </>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-xl flex items-center justify-center mb-4 text-2xl">
                            {service.icon}
                          </div>
                          <p className="text-theme-blue font-bold text-lg">{tech}</p>
                        </div>
                      )}
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </Fade>
        )}

        {/* Methodologies Section */}
        {service.methodologies && service.methodologies.length > 0 && (
          <div className="mb-20 bg-gradient-to-br from-light-theme-purple/30 to-white py-16 rounded-3xl">
            <Fade direction="up" triggerOnce>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl text-theme-blue font-bold mb-4">
                  Our Methods of {service.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  These methodologies are tailored to different types of organizations, and our choice depends on your specific business needs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.methodologies.map((method, index) => (
                  <Zoom key={index} delay={index * 100} triggerOnce>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:shadow-2xl hover:border-theme-purple transition-all duration-300 transform hover:-translate-y-2 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-xl flex items-center justify-center mb-4 text-xl transform group-hover:rotate-6 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl text-theme-blue font-bold mb-3 group-hover:text-theme-purple transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{method.description}</p>
                    </div>
                  </Zoom>
                ))}
              </div>
            </Fade>
          </div>
        )}

        {/* Industries Section */}
        {service.industries && service.industries.length > 0 && (
          <Fade direction="up" triggerOnce>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl text-theme-blue font-bold mb-4">
                  Industries We Serve
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  As one of the top service providers, we serve diverse industries globally. Our experienced team has deep knowledge in their respective fields.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.industries.map((industry, index) => (
                  <Zoom key={index} delay={index * 100} triggerOnce>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:shadow-2xl hover:border-theme-purple transition-all duration-300 transform hover:-translate-y-2 group">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-xl flex items-center justify-center text-2xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl text-theme-blue font-bold group-hover:text-theme-purple transition-colors pt-2">
                          {industry.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </Fade>
        )}

        {/* Cost Factors Section */}
        {service.costFactors && service.costFactors.length > 0 && (
          <div className="mb-20 bg-gradient-to-br from-gray-50 to-white py-16 rounded-3xl">
            <Fade direction="up" triggerOnce>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl text-theme-blue font-bold mb-4">
                  What Expenses Are Incurred?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  The cost depends on various factors, such as the type, design, and other project details. Here are the key factors:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.costFactors.map((factor, index) => (
                  <Zoom key={index} delay={index * 100} triggerOnce>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:shadow-2xl hover:border-theme-purple transition-all duration-300 transform hover:-translate-y-2 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-xl flex items-center justify-center mb-4 text-xl transform group-hover:rotate-6 transition-transform duration-300">
                        💰
                      </div>
                      <h3 className="text-xl text-theme-blue font-bold mb-3 group-hover:text-theme-purple transition-colors">
                        {factor.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                </div>
                  </Zoom>
                ))}
              </div>
            </Fade>
          </div>
        )}

        {/* CTA Section */}
        <Fade direction="up" triggerOnce>
          <div className="relative bg-gradient-to-r from-theme-purple via-purple-600 to-dark-theme-purple rounded-3xl p-12 md:p-16 mb-12 text-white text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Tech Powered Success Awaits. Empower Your Digital Journey.
              </h2>
              <p className="text-lg md:text-xl opacity-95 mb-8 max-w-2xl mx-auto">
                Ready to transform your business? Let's discuss how we can help you achieve your goals.
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-white text-theme-purple rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </Fade>

        {/* Get Cost CTA */}
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12">
            <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
              <h3 className="text-2xl text-theme-blue font-bold mb-4">
                Get a Custom Quote
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Get the cost of your {service.title.toLowerCase()} project tailored to your specific needs.
              </p>
            <Link
              to="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
                Get Your Quote Now
            </Link>
            </div>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  );
}

