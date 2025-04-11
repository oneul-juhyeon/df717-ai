
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiCFDArticleContent from "@/components/axi/cfd/AxiCFDArticleContent";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import AxiLayout from "@/components/axi/AxiLayout";

const AxiCFD: React.FC = () => {
  return (
    <AxiLayout 
      renderHeader={(scrollToTop) => <AxiCFDHeader scrollToTop={scrollToTop} />}
    >
      <div className="mt-8">
        <AxiCFDArticleContent />
        <AxiSpaceXCallToAction />
      </div>
    </AxiLayout>
  );
};

export default AxiCFD;
