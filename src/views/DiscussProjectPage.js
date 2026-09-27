"use client";

/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { DiscussForm } from "parts/DiscussForm";

import Header from "parts/Header";
import Footer from "parts/Footer";
import { siteConfig } from "config/site";

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectIdea: "",
    serviceInterest: "",
    budgetRange: "",
    timeline: "",
    website: "",
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectIdea: "",
      serviceInterest: "",
      budgetRange: "",
      timeline: "",
      website: "",
    });
  };

  return (
    <>
      <Header />
      <main>
      <address className="not-italic container mx-auto px-5 pt-28 text-center text-sm text-gray-500">
        <span className="block">{siteConfig.addressLine}</span>
        <a className="font-semibold text-theme-purple" href={siteConfig.telHref}>
          {siteConfig.phone}
        </a>
        <span className="block">{siteConfig.hoursLabel}</span>
      </address>
      <DiscussForm
        data={data}
        onChange={onChange}
        resetForm={resetForm}
        titleAs="h1"
      />
      </main>
      <Footer />
    </>
  );
};

export default DiscussProjectPage;
