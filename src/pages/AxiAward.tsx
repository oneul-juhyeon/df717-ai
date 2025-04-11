
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiAwardWinningService from "@/components/axi/AxiAwardWinningService";
import AxiAwardHero from "@/components/axi/AxiAwardHero";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import AxiLayout from "@/components/axi/AxiLayout";

const AxiAward: React.FC = () => {
  return (
    <AxiLayout 
      renderHeader={(scrollToTop) => <AxiCFDHeader scrollToTop={scrollToTop} />}
    >
      <div className="w-full">
        <AxiAwardHero />
        <AxiAwardWinningService />
        <AxiSpaceXCallToAction />
      </div>
    </AxiLayout>
  );
};

export default AxiAward;
