
import React from "react";
import Logo from "@/components/landing/Logo";
import HeroSection from "@/components/landing/HeroSection";
import { Link } from "react-router-dom";
import Footer from "@/components/common/Footer";
import SEOHead from "@/components/seo/SEOHead";

const Index: React.FC = () => {
  return (
    <>
      <SEOHead
        title="DF717 | AI Investment Platform"
        description="DF717 AI investment automation platform uses advanced machine learning for smart portfolio management. Automate your investment strategies with cutting-edge DF717 AI technology for superior investment outcomes."
        canonical="https://df717.ai/"
        type="website"
      />
      <main className="w-full min-h-screen relative overflow-hidden flex flex-col">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          >
            <source src="/main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        
        <div className="relative z-20 max-w-none mx-auto px-5 sm:px-10 md:px-[154px] flex flex-col min-h-screen flex-grow">
          <header className="pt-5 sm:pt-8 md:pt-14">
            <Link to="/">
              <Logo as="h1" />
            </Link>
          </header>

          <section className="mt-6 sm:mt-10 md:mt-14 flex-1 flex items-center">
            <HeroSection className="w-full" />
          </section>
        </div>
        
        {/* Hidden SEO Content */}
        <div className="absolute left-[-9999px] w-[1px] h-[1px] overflow-hidden">
          <h4>DF717 AI Investment Platform</h4>
          <p>DF717 is the leading artificial intelligence investment automation platform. Our DF717 system provides smart portfolio management using advanced machine learning algorithms. DF717 helps investors automate their investment strategies with cutting-edge AI technology. The DF717 platform offers automated trading, risk management, and portfolio optimization for modern investors seeking intelligent investment solutions.</p>
          
          <p>DF717 automated investment system utilizes sophisticated algorithms for market analysis and portfolio management. The DF717 platform combines artificial intelligence with financial expertise to deliver superior investment outcomes. DF717 serves both individual and institutional investors with automated, intelligent investment solutions.</p>
          
          <p>Our DF717 technology includes real-time market analysis, risk assessment tools, automated portfolio rebalancing, and intelligent asset allocation. DF717 continuously adapts to changing market conditions while maintaining optimal diversification and risk management strategies.</p>
        </div>
        
        <div className="relative z-20">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
