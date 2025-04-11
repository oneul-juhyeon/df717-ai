
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiEdgeHero from "@/components/axi/AxiEdgeHero";
import AxiEdgeContent from "@/components/axi/AxiEdgeContent";
import AxiGivingMore from "@/components/axi/AxiGivingMore";
import AxiTrustedPartner from "@/components/axi/AxiTrustedPartner";
import AxiLayout from "@/components/axi/AxiLayout";

const AxiEdge: React.FC = () => {
  return (
    <AxiLayout 
      renderHeader={(scrollToTop) => <AxiCFDHeader scrollToTop={scrollToTop} />}
      showSidebar={true}
    >
      <div className="w-full">
        <AxiEdgeHero />
      
        <section className="w-full py-16 md:py-24">
          <AxiEdgeContent />
        </section>
      
        <section className="w-full py-20">
          <AxiGivingMore />
        </section>
      
        <section className="w-full py-20">
          <AxiTrustedPartner />
        </section>
      </div>
    </AxiLayout>
  );
};

export default AxiEdge;
