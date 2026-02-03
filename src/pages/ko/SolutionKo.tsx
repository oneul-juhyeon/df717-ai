import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import { SolutionHeaderKoNew } from "@/components/solution/ko/SolutionHeaderKoNew";
import { HeroSection } from "@/components/solution/ko/new/HeroSection";
import { ProductSection } from "@/components/solution/ko/new/ProductSection";
import { FeaturesSection } from "@/components/solution/ko/new/FeaturesSection";
import { PricingSection } from "@/components/solution/ko/new/PricingSection";
import { FAQSection } from "@/components/solution/ko/new/FAQSection";
import { RefundPolicySection } from "@/components/solution/ko/new/RefundPolicySection";
import FooterKo from "@/components/common/FooterKo";
import { AuthModal } from "@/components/solution/ko/AuthModal";
import { useAuth } from "@/hooks/useAuth";

const SolutionKo: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCTAClick = () => {
    if (user) {
      // User is logged in, go directly to checkout
      navigate('/ko/checkout');
    } else {
      // Show auth modal
      setShowAuthModal(true);
    }
  };

  const handleGuestCheckout = (email: string, password: string) => {
    // Navigate to checkout with guest info
    navigate(`/ko/checkout?guest=true&email=${encodeURIComponent(email)}&pw=${encodeURIComponent(password)}`);
  };

  return (
    <>
      <SEOHead
        title="DF717 - AI 자동매매 솔루션"
        description="DF717의 AI 기반 자동매매 솔루션 DAP-Premium. MetaTrader 연동, 24/7 시스템 모니터링, 실시간 리스크 관리로 스마트한 투자를 시작하세요."
        keywords="DF717 솔루션, DAP-Premium, AI 자동매매, 자동투자 시스템, MetaTrader, HANNAH AI"
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
          "@type": "Product",
          "name": "DF717 DAP-Premium",
          "description": "AI 기반 자동매매 프로그램 솔루션",
          "brand": {
            "@type": "Organization",
            "name": "DF717"
          },
          "offers": {
            "@type": "Offer",
            "price": "5000000",
            "priceCurrency": "KRW",
            "availability": "https://schema.org/InStock"
          }
        }}
      />
      <div className="min-h-screen bg-background">
        <SolutionHeaderKoNew scrollToTop={scrollToTop} />
        
        <HeroSection onCTAClick={handleCTAClick} />
        <ProductSection />
        <FeaturesSection />
        <PricingSection onPurchaseClick={handleCTAClick} />
        <FAQSection />
        <RefundPolicySection />
        
        <FooterKo />
      </div>

      <AuthModal
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onGuestCheckout={handleGuestCheckout}
      />
    </>
  );
};

export default SolutionKo;
