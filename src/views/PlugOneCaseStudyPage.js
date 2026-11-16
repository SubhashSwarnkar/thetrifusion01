"use client";

import React, { useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import PlugOneCaseStudyLayout from "components/PlugOneCaseStudyLayout";
import { Portfolios } from "json/landingPageData";

const SLUG = "plugone-ev-charging-platform";

export default function PlugOneCaseStudyPage() {
  const project = Portfolios.find((item) => item.id === SLUG);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <>
      <Header />
      <main>
        <PlugOneCaseStudyLayout project={project} />
      </main>
      <Footer />
    </>
  );
}
