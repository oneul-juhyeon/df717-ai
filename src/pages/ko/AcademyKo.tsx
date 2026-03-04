import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { AcademyHeaderKo } from '@/components/academy/ko/AcademyHeaderKo';
import { AcademyHeroSection } from '@/components/academy/ko/AcademyHeroSection';
import { WhySection } from '@/components/academy/ko/WhySection';
import { CurriculumSection } from '@/components/academy/ko/CurriculumSection';
import { HowWeTeachSection } from '@/components/academy/ko/HowWeTeachSection';
import { InstructorSection } from '@/components/academy/ko/InstructorSection';
import { AcademyPricingSection } from '@/components/academy/ko/AcademyPricingSection';
import { ReviewsSection } from '@/components/academy/ko/ReviewsSection';
import { AcademyFAQSection } from '@/components/academy/ko/AcademyFAQSection';
import { BottomCTASection } from '@/components/academy/ko/BottomCTASection';
import FooterKo from '@/components/common/FooterKo';

const AcademyKo: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="DF 트레이딩 아카데미 — 트레이딩을 진짜로 배우는 곳 | DF717"
        description="단순 수익 공식이 아닌 금융 시장의 원리를 가르칩니다. 대면·화상 교육, 1:1 멘토링 3개월, 프로그램 무료 체험 포함."
        keywords="트레이딩 교육, 해외선물 교육, 리스크 관리, 1:1 멘토링, DF717 아카데미"
        canonical="https://www.df717.ai/ko/academy"
        type="website"
        lang="ko"
        hreflang={{
          ko: "https://www.df717.ai/ko/academy",
          default: "https://www.df717.ai/ko/academy",
        }}
      />
      <div className="min-h-screen bg-background">
        <AcademyHeaderKo scrollToTop={scrollToTop} />
        <AcademyHeroSection />
        <WhySection />
        <CurriculumSection />
        <HowWeTeachSection />
        <InstructorSection />
        <AcademyPricingSection />
        <ReviewsSection />
        <AcademyFAQSection />
        <BottomCTASection />
        <FooterKo />
      </div>
    </>
  );
};

export default AcademyKo;
