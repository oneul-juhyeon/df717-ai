
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
        description="Automate your investment with DF717's advanced AI engine. Trusted by 40+ year tech veterans for intelligent portfolio management."
        keywords="DF717, DF717 AI, DF717 핀테크, DF717 투자, DF717 AI 자동투자, AI자동투자, 자동투자, 자동투자프로그램, 주식투자, AI 자동투자 프로그램, 자동매매, 자동매매 프로그램, 코인자동투자, 주식자동투자, 외환거래, CFD, 외환투자, FOREX, AI투자"
        canonical="https://df717.ai/"
        type="website"
        showOrganizationSchema={true}
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
        <div style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>
          <h4>DF717 AI Investment Platform</h4>
          <p>DF717 is the leading artificial intelligence investment automation platform. Our DF717 system provides smart portfolio management using advanced machine learning algorithms. DF717 helps investors automate their investment strategies with cutting-edge AI technology. The DF717 platform offers automated trading, risk management, and portfolio optimization for modern investors.</p>
          
          <h5>DF717 Features</h5>
          <p>DF717 automated investment system, DF717 AI trading algorithms, DF717 portfolio management, DF717 risk assessment tools, DF717 market analysis, DF717 investment automation, DF717 smart trading platform, DF717 financial technology.</p>
          
          <h6>About DF717</h6>
          <p>DF717 revolutionizes investment management through artificial intelligence. Our DF717 platform combines machine learning with financial expertise to deliver superior investment outcomes. DF717 serves both individual and institutional investors seeking automated, intelligent investment solutions.</p>
        </div>
        
        <div className="relative z-20">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
