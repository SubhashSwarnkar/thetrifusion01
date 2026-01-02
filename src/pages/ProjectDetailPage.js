/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import { useParams } from 'react-router-dom';
import PortfolioDetail from 'parts/PortfolioDetail';
import Footer from 'parts/Footer';
import SEO from 'components/common/SEO';

import { Portfolios } from 'json/landingPageData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const detailData = Portfolios.filter((item) => item.id === id);
  const project = detailData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {project && (
        <SEO 
          title={project.title} 
          description={project.description}
          image={project.imageUrl}
          type="article"
        />
      )}
      <Header />
      <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
