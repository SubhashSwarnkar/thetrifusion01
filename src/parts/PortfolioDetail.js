"use client";

import React from "react";

import { Fade } from "react-awesome-reveal";

import NotFound from "assets/images/NotFound.png";

import Button from "elements/Button";

function isLiveProjectUrl(credit) {
  return typeof credit === "string" && /^https?:\/\//i.test(credit);
}

export default function PortfolioDetail({ data }) {
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade bottom triggerOnce>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img
                src={NotFound}
                alt="Not Found"
                className="sm:w-3/4 xl:w-5/12 mt-5"
              />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button
                href="/portfolio"
                type="link"
                className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900"
              >
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade bottom>
        <Button
          type="link"
          href="/portfolio"
          className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline"
        >
          <svg
            className="w-5 h-5 text-gray-400 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          See All Projects
        </Button>
      </Fade>

      {data.map((item) => (
        <div key={item.id} className="flex flex-col mt-8 justify-center">
          <Fade bottom triggerOnce>
            <h1 className="text-5xl text-theme-blue text-center font-bold">
              {item.title}
            </h1>

            <p className="font-light text-xl text-gray-400 text-center mb-10">
              {item.type}
            </p>
          </Fade>

          <Fade bottom delay={300 * 1} triggerOnce>
            <div className="flex justify-center xl:mb-6">
              <img
                src={item.imageUrl}
                alt={`${item.title} — ${item.type} project by TheTriFusion`}
                className="flex w-4/5 sm:w-4/6"
              />
            </div>
          </Fade>

          <Fade bottom delay={300 * 1} triggerOnce>
            <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
              <h2 className="text-3xl text-theme-blue font-bold mb-3">
                Project Detail
              </h2>

              <p className="font-light text-lg text-gray-400 text-justify">
                {item.description}
              </p>
            </div>

            <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
              <h2 className="text-3xl text-theme-blue font-bold mb-5">
                Project Responsibilities
              </h2>

              <div className="flex flex-row flex-wrap gap-3 ml-1">
                {item.responsibility.map((responsibility, idx) => (
                  <div key={idx} className="px-6 py-3 text-theme-purple border border-theme-purple rounded-full shadow-lg">
                    {responsibility}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Sections */}
            {item.techStack && (
              <Fade bottom delay={300 * 2} triggerOnce>
                <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28 mt-12">
                  <h2 className="text-3xl text-theme-blue font-bold mb-5">
                    Technologies Used
                  </h2>
                  <div className="flex flex-row flex-wrap gap-3">
                    {item.techStack.map((tech, idx) => (
                      <div key={idx} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full shadow-md">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            )}

            {item.metrics && (
              <Fade bottom delay={300 * 3} triggerOnce>
                <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28 mt-12">
                  <h2 className="text-3xl text-theme-blue font-bold mb-5">
                    Project Results
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-theme-purple to-theme-blue p-6 rounded-2xl text-white shadow-lg">
                        <div className="text-4xl font-bold mb-2">{metric.value}</div>
                        <div className="text-white/90">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            )}

            {item.timeline && (
              <Fade bottom delay={300 * 4} triggerOnce>
                <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28 mt-12">
                  <h2 className="text-3xl text-theme-blue font-bold mb-5">
                    Project Timeline
                  </h2>
                  <div className="space-y-4">
                    {item.timeline.map((milestone, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-theme-purple rounded-full flex items-center justify-center text-white font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-theme-blue mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">{milestone.description}</p>
                          <p className="text-sm text-gray-400 mt-1">{milestone.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            )}

            {item.clientTestimonial && (
              <Fade bottom delay={300 * 5} triggerOnce>
                <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28 mt-12 bg-gray-50 p-8 rounded-2xl">
                  <h2 className="text-3xl text-theme-blue font-bold mb-5">
                    Client Testimonial
                  </h2>
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "{item.clientTestimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-theme-purple rounded-full flex items-center justify-center text-white font-bold">
                      {item.clientTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-theme-blue">
                        {item.clientTestimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.clientTestimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mx-8 sm:mx-16 xl:mx-28 mt-12 mb-8">
              {isLiveProjectUrl(item.credit) && (
                <Button
                  type="link"
                  href={item.credit}
                  target="_blank"
                  className="px-8 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition-colors duration-200 shadow-lg text-center"
                  isExternal
                >
                  🌐 View Live Project
                </Button>
              )}
              <Button
                type="link"
                href="/appointment"
                className="px-8 py-3 bg-theme-blue text-white rounded-full hover:bg-gray-900 transition-colors duration-200 shadow-lg text-center"
              >
                📅 Book Similar Project
              </Button>
            </div>

            {isLiveProjectUrl(item.credit) && (
              <p className="font-light text-gray-500 mt-8 mx-8 sm:mx-16 xl:mx-28">
                Live project:{" "}
                <Button
                  type="link"
                  href={item.credit}
                  target="_blank"
                  className="text-theme-purple"
                  isExternal
                >
                  {item.credit}
                </Button>
              </p>
            )}
          </Fade>
        </div>
      ))}
    </section>
  );
}
