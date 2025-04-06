
import React from "react";
import IndicesHeader from "@/components/indices/IndicesHeader";
import IndicesArticleContent from "@/components/indices/IndicesArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";

const Indices: React.FC = () => {
  return (
    <FinancialProductLayout 
      title="Indices Trading"
      renderHeader={(scrollToTop) => <IndicesHeader scrollToTop={scrollToTop} />}
    >
      <IndicesArticleContent />
    </FinancialProductLayout>
  );
};

export default Indices;
