
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  type = "website",
  image = "https://df717.ai/lovable-uploads/df717_logo.png",
  article
}) => {
  const fullTitle = title.includes("DF717") ? title : `${title} | DF717`;
  const canonicalUrl = canonical || `https://df717.ai${window.location.pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DF717",
    "url": "https://df717.ai",
    "logo": "https://df717.ai/lovable-uploads/df717_logo.png",
    "description": "DF717 leverages AI technology to analyze real-time movements across global financial markets and apply optimized investment strategies.",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://df717.ai/contact"
    },
    "service": [
      {
        "@type": "Service",
        "name": "AI-Powered Trading Systems",
        "description": "Advanced AI algorithms for financial market analysis and trading optimization"
      },
      {
        "@type": "Service", 
        "name": "Financial Products Trading",
        "description": "Comprehensive trading solutions for Forex, Shares, Indices, Commodities, Gold, Oil, and Cryptocurrency"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="DF717" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article-specific meta tags */}
      {article && type === "article" && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
