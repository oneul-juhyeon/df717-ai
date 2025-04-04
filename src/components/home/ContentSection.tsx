
import React from "react";
import FeatureSection from "./FeatureSection";
import ProductCards from "./ProductCards";

const ContentSection: React.FC = () => {
  return (
    <section className="w-full bg-[#161616] py-24">
      <FeatureSection />
      <ProductCards />
    </section>
  );
};

export default ContentSection;
