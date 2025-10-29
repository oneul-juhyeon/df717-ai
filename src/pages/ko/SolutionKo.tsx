import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import SolutionHeaderKo from "@/components/solution/ko/SolutionHeaderKo";
import SolutionHeroKo from "@/components/solution/ko/SolutionHeroKo";
import SolutionFeaturesKo from "@/components/solution/ko/SolutionFeaturesKo";
import SolutionStepsKo from "@/components/solution/ko/SolutionStepsKo";
import SolutionResultsKo from "@/components/solution/ko/SolutionResultsKo";
import SolutionProductsKo from "@/components/solution/ko/SolutionProductsKo";
import SolutionContactFormKo from "@/components/solution/ko/SolutionContactFormKo";
import Footer from "@/components/common/Footer";

const SolutionKo: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SEOHead
        title="솔루션 | DF717 - AI 자동투자 시스템"
        description="DF717의 AI 기반 자동투자 솔루션을 만나보세요. 40년의 기술력과 9년의 검증된 실적으로 안전하고 효율적인 자동 트레이딩을 제공합니다."
        keywords="DF717 솔루션, AI 자동투자, 자동투자 시스템, 자동매매, DAP-Plus, DAP-Premium, HANNAH AI, 백테스팅, 실시간 모니터링"
        canonical="https://www.df717.ai/ko/solution"
        type="website"
        lang="ko"
        hreflang={{
          en: "https://www.df717.ai/solution",
          ko: "https://www.df717.ai/ko/solution",
          default: "https://www.df717.ai/solution",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "DF717 AI 자동투자 시스템",
          "description": "AI 기반 자동투자 솔루션으로 40년의 기술력과 9년의 검증된 실적 제공",
          "provider": {
            "@type": "Organization",
            "name": "DF717"
          },
          "serviceType": "자동투자 관리",
          "areaServed": "대한민국"
        }}
      />
      <div className="min-h-screen bg-black">
        <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px]">
          <SolutionHeaderKo scrollToTop={scrollToTop} />
        </div>
        
        <SolutionHeroKo />
        <SolutionFeaturesKo />
        <SolutionResultsKo />
        <SolutionStepsKo />
        <SolutionProductsKo />
        <SolutionContactFormKo />
        
        <Footer />
      </div>
    </>
  );
};

export default SolutionKo;
