
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import AxiTrustHero from "@/components/axi/AxiTrustHero";
import AxiTrustCreated from "@/components/axi/AxiTrustCreated";
import AxiTrustAwards from "@/components/axi/AxiTrustAwards";
import AxiTrustGlobal from "@/components/axi/AxiTrustGlobal";
import AxiTrustLiquidity from "@/components/axi/AxiTrustLiquidity";
import AxiTrustDemo from "@/components/axi/AxiTrustDemo";
import AxiTrustWithdrawals from "@/components/axi/AxiTrustWithdrawals";
import AxiTrustSecurity from "@/components/axi/AxiTrustSecurity";
import AxiTrustEducation from "@/components/axi/AxiTrustEducation";
import AxiTrustTools from "@/components/axi/AxiTrustTools";
import AxiTrustProtection from "@/components/axi/AxiTrustProtection";
import AxiTrustRisk from "@/components/axi/AxiTrustRisk";
import Footer from "@/components/common/Footer";

const AxiTrust: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5 flex-grow">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <AxiTrustHero />
        
        <section className="mt-20">
          <AxiTrustCreated />
        </section>
        
        <section className="mt-20">
          <AxiTrustAwards />
        </section>
        
        <section className="mt-20">
          <AxiTrustGlobal />
        </section>
        
        <section className="mt-20">
          <AxiTrustLiquidity />
        </section>
        
        <section className="mt-20">
          <AxiTrustDemo />
        </section>
        
        <section className="mt-20">
          <AxiTrustWithdrawals />
        </section>
        
        <section className="mt-20">
          <AxiTrustSecurity />
        </section>
        
        <section className="mt-20">
          <AxiTrustEducation />
        </section>
        
        <section className="mt-20">
          <AxiTrustTools />
        </section>
        
        <section className="mt-20">
          <AxiTrustProtection />
        </section>
        
        <section className="mt-20 mb-20">
          <AxiTrustRisk />
        </section>
      </div>
      
      <AxiSpaceXCallToAction />
      
      <Footer />
    </main>
  );
};

export default AxiTrust;
