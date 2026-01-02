import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website'
}) {
  const siteTitle = 'TheTriFusion - Software House';
  const defaultDescription = 'TheTriFusion is a leading software development company providing web development, mobile app development, UI/UX design, and IT consulting services.';
  const defaultKeywords = 'software development, web development, mobile apps, UI/UX design, IT consulting, TheTriFusion';
  const siteUrl = 'https://thetrifusion.com'; // Replace with actual domain if known
  
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaImage = image || `${siteUrl}/logo.svg`; // Fallback to logo or default og image
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={metaUrl} />
    </Helmet>
  );
}
