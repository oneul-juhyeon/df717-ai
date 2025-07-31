import React from "react";
import CFDSafetyHeader from "@/components/cfd-safety/CFDSafetyHeader";
import CFDSafetyContent from "@/components/cfd-safety/CFDSafetyContent";
import CFDProductsSidebar from "@/components/cfd-safety/CFDProductsSidebar";
import Footer from "@/components/common/Footer";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

const CFDSafety: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full min-h-screen bg-black financial-product-layout flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        <CFDSafetyHeader scrollToTop={scrollToTop} />
        
        <div className="mt-8 mb-12 flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Left sidebar with CFD labels */}
            <CFDProductsSidebar />
            
            {/* Main content area */}
            <div className="w-full lg:ml-8 text-white">
              <div className="scrollbar-hidden">
                <Breadcrumbs />
                <CFDSafetyContent />
                <AxiSpaceXCallToAction />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CFDSafety;