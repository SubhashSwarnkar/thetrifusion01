import React from "react";

import { Fade } from "react-awesome-reveal";

import * as emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Form } from "elements/Form";
import Button from "elements/Button";

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const { name, company, email, phone, projectIdea } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )---(${projectIdea})`,
      to_name: "thetrifusion",
      message: projectIdea,
    };

    if (
      name !== "" &&
      company !== "" &&
      email !== "" &&
      phone !== "" &&
      projectIdea !== ""
    ) {
      emailjs
        .send(
          "service_vbs5oio",
          "template_7nvbirx",
          templateParams,
          "n0euqkm11TGyLICcv"
        )
        .then(
          () => {
            toast.success("Success! we'll get back to you soon. Thank you!");
            resetForm();
          },
          (error) => {
            toast.error(error.text || "Failed to send message.");
          }
        );
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <section className="flex flex-col container mx-auto justify-center">
      <div className="bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
        {/* Subtle background blob inside card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-theme-purple/10 rounded-full blur-2xl"></div>
        
        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl text-theme-blue text-center font-black mb-4 tracking-tight">
            Let's <span className="text-theme-purple">Collaborate</span>
          </h2>
        </Fade>

        <Fade direction="up" triggerOnce>
          <p className="font-light text-lg text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Fill out the form below and we'll connect within 24 hours to turn your vision into reality.
          </p>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Form
                  id="name"
                  name="name"
                  type="text"
                  value={data.name}
                  placeholder="Full Name"
                  className="w-full"
                  onChange={actions.onChange}
                />
              </div>
              <div className="space-y-2">
                <Form
                  id="company"
                  name="company"
                  type="text"
                  value={data.company}
                  placeholder="Company Name"
                  className="w-full"
                  onChange={actions.onChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Form
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  placeholder="Work Email"
                  className="w-full"
                  onChange={actions.onChange}
                />
              </div>
              <div className="space-y-2">
                <Form
                  id="phone"
                  name="phone"
                  type="number"
                  value={data.phone}
                  placeholder="Contact Number"
                  className="w-full"
                  onChange={actions.onChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Form
                id="projectIdea"
                name="projectIdea"
                type="textarea"
                value={data.projectIdea}
                placeholder="Briefly describe your project idea..."
                className="w-full"
                onChange={actions.onChange}
              />
            </div>

            <button
              className="group relative px-12 py-5 bg-theme-purple text-white rounded-2xl font-black text-xl shadow-xl shadow-theme-purple/20 overflow-hidden transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 mt-4"
              type="button"
              onClick={submitEmail}
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-theme-purple to-theme-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};
