
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
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
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import AxiLayout from "@/components/axi/AxiLayout";

const AxiPricing: React.FC = () => {
  return (
    <AxiLayout 
      renderHeader={(scrollToTop) => <AxiCFDHeader scrollToTop={scrollToTop} />}
    >
      <div className="w-full">
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
        
        <AxiSpaceXCallToAction />
      </div>
    </AxiLayout>
  );
};

export default AxiPricing;
