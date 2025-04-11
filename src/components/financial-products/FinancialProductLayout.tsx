
import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import FinancialProductsSidebar from "./FinancialProductsSidebar";
import Footer from "../common/Footer";
import AxiSpaceXCallToAction from "../axi/AxiSpaceXCallToAction";

interface FinancialProductLayoutProps {
  children: React.ReactNode;
  renderHeader: (scrollToTop: () => void) => React.ReactNode;
}

const FinancialProductLayout: React.FC<FinancialProductLayoutProps> = ({
  children,
  renderHeader,
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Reset scroll position on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black financial-product-layout flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        {renderHeader(scrollToTop)}
        
        <div className="mt-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar with labels */}
            <FinancialProductsSidebar />
            
            {/* Main content area */}
            <div className="w-full lg:ml-8 text-white">
              <ScrollArea className="h-full">
                {children}
                <AxiSpaceXCallToAction />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FinancialProductLayout;
