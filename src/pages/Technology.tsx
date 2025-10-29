
import React from "react";
import TechnologyHeader from "@/components/technology/TechnologyHeader";
import ModernTechnologyTabs from "@/components/technology/ModernTechnologyTabs";
import Footer from "@/components/common/Footer";
import SEOHead from "@/components/seo/SEOHead";

const Technology: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <SEOHead
        title="Technology - AI-Powered Trading Systems & Innovation"
        description="Discover DF717's cutting-edge AI technology, algorithmic trading systems, and innovative solutions for financial market analysis and automated trading strategies."
        keywords="AI Technology, Trading Systems, Algorithmic Trading, Machine Learning, Financial Technology, AI Innovation, Automated Trading, Market Analysis, DF717 Technology"
        canonical="https://df717.ai/technology"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "DF717 AI-Powered Trading Technology",
          "description": "Cutting-edge AI technology and algorithmic trading systems for financial market analysis.",
          "url": "https://df717.ai/technology",
          "keywords": "AI Trading, Algorithmic Systems, Financial Technology"
        }}
      />
      <main className="w-full min-h-screen bg-black flex flex-col">
        {/* Background effects that stop before the footer */}
        <div className="absolute inset-0 bottom-[80px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIyMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iLjAyIi8+PC9zdmc+')] mix-blend-overlay opacity-50 pointer-events-none z-0"></div>
        <div className="absolute inset-0 bottom-[80px] bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-0"></div>
        <div className="absolute inset-0 bottom-[80px] bg-gradient-to-r from-black via-transparent to-black opacity-80 pointer-events-none z-0"></div>
        
        <div className="relative z-10 w-full px-4 md:px-10 lg:px-[154px] flex-grow">
          <TechnologyHeader scrollToTop={scrollToTop} />
          
          <section className="mt-12 mb-20 w-full max-w-5xl mx-auto relative">
            <ModernTechnologyTabs />
          </section>
        </div>
        
        <Footer />
      </main>
    </>
  );
};

export default Technology;
