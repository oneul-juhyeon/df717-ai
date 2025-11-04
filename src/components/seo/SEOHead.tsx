
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageAlt?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
  showOrganizationSchema?: boolean;
  structuredData?: object;
  hreflang?: {
    en?: string;
    ko?: string;
    default?: string;
  };
  lang?: "en" | "ko";
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  keywords,
  canonical,
  type = "website",
  image = "https://df717.ai/lovable-uploads/df717_logo.png",
  imageWidth = "1200",
  imageHeight = "630",
  imageAlt = "DF717 AI Investment Platform",
  article,
  showOrganizationSchema = false,
  structuredData: customStructuredData,
  hreflang,
  lang = "en",
}) => {
  const fullTitle = title.includes("DF717") ? title : `${title} | DF717`;
  const canonicalUrl = canonical || `https://df717.ai${window.location.pathname}`;

  const organizationSchema = {
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
      <html lang={lang} />
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* hreflang tags for multilingual SEO */}
      {hreflang?.en && <link rel="alternate" hrefLang="en" href={hreflang.en} />}
      {hreflang?.ko && <link rel="alternate" hrefLang="ko" href={hreflang.ko} />}
      {hreflang?.default && <link rel="alternate" hrefLang="x-default" href={hreflang.default} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="DF717" />
      <meta property="og:locale" content={lang === "ko" ? "ko_KR" : "en_US"} />
      <meta property="og:article:author" content="DF717" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
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
      {showOrganizationSchema && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
      {customStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(customStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
