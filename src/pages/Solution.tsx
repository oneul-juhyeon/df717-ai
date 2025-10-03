import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import SolutionHeaderWithLang from "@/components/solution/SolutionHeaderWithLang";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionSteps from "@/components/solution/SolutionSteps";
import SolutionResults from "@/components/solution/SolutionResults";
import SolutionProducts from "@/components/solution/SolutionProducts";
import SolutionContactForm from "@/components/solution/SolutionContactForm";
import Footer from "@/components/common/Footer";

const Solution: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SEOHead
        title="DF717 Solution - Automated Trading Programs | DAP-Plus & DAP-Premium"
        description="Discover DF717's automated trading solutions powered by AI engine HANNAH. Choose between DAP-Plus and DAP-Premium programs with 20+ years of backtesting data and real-time monitoring."
        canonical="https://www.df717.ai/solution"
        type="website"
        lang="en"
        hreflang={{
          en: "https://www.df717.ai/solution",
          ko: "https://www.df717.ai/ko/solution",
          default: "https://www.df717.ai/solution",
        }}
      />
      <div className="min-h-screen bg-black">
        <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px]">
          <SolutionHeaderWithLang scrollToTop={scrollToTop} />
        </div>
        
        <SolutionHero />
        <SolutionFeatures />
        <SolutionResults />
        <SolutionSteps />
        <SolutionProducts />
        <SolutionContactForm />
        
        <Footer />
      </div>
    </>
  );
};

export default Solution;
