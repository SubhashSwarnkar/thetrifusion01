"use client";

/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroPortfolio from 'parts/HeroPortfolio';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import AllPortfolioEnhanced from 'parts/AllPortfolioEnhanced';
import Breadcrumbs from 'components/Breadcrumbs';
import SEO from 'components/common/SEO';

import { Portfolios } from 'json/landingPageData';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <SEO 
          title="Portfolio" 
          description="Explore our portfolio of successful projects including web applications, mobile apps, and brand designs."
        />
        <Header />
        <Breadcrumbs />
        <HeroPortfolio />
        <AllPortfolioEnhanced data={Portfolios} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
