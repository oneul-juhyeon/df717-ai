
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import AxiPricingHero from "@/components/axi/AxiPricingHero";
import AxiCuttingEdgeTechnology from "@/components/axi/AxiCuttingEdgeTechnology";
import AxiExecutionMetrics from "@/components/axi/AxiExecutionMetrics";
import AxiLatencyBenefits from "@/components/axi/AxiLatencyBenefits";
import AxiRawSpreads from "@/components/axi/AxiRawSpreads";
import AxiExcellenceExecution from "@/components/axi/AxiExcellenceExecution";
import AxiTopTierLiquidity from "@/components/axi/AxiTopTierLiquidity";
import AxiTradingProducts from "@/components/axi/AxiTradingProducts";
import AxiSuperiorSetup from "@/components/axi/AxiSuperiorSetup";
import AxiFlexibleLeverage from "@/components/axi/AxiFlexibleLeverage";
import Footer from "@/components/common/Footer";

const AxiPricing: React.FC = () => {
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
        
        <AxiPricingHero />
        
        <section>
          <AxiCuttingEdgeTechnology />
        </section>
        
        <section>
          <AxiExecutionMetrics />
        </section>
        
        <section>
          <AxiLatencyBenefits />
        </section>
        
        <section>
          <AxiRawSpreads />
        </section>
        
        <section>
          <AxiExcellenceExecution />
        </section>
        
        <section>
          <AxiTopTierLiquidity />
        </section>
        
        <section>
          <AxiTradingProducts />
        </section>
        
        <section>
          <AxiSuperiorSetup />
        </section>
        
        <section>
          <AxiFlexibleLeverage />
        </section>
      </div>
      
      <AxiSpaceXCallToAction />
      
      <Footer />
    </main>
  );
};

export default AxiPricing;
