"use client";

/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { DiscussForm } from "parts/DiscussForm";

import Header from "parts/Header";
import Footer from "parts/Footer";

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
      <DiscussForm
        data={data}
        onChange={onChange}
        resetForm={resetForm}
        titleAs="h1"
      />
      <Footer />
    </>
  );
};

export default DiscussProjectPage;
