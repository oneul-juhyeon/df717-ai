
import React, { useEffect, useLayoutEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import FinancialProductsSidebar from "./FinancialProductsSidebar";
import Footer from "../common/Footer";
import AxiSpaceXCallToAction from "../axi/AxiSpaceXCallToAction";
import { useLocation } from "react-router-dom";

interface FinancialProductLayoutProps {
  children: React.ReactNode;
  renderHeader: (scrollToTop: () => void) => React.ReactNode;
}

const FinancialProductLayout: React.FC<FinancialProductLayoutProps> = ({
  children,
  renderHeader,
}) => {
  const location = useLocation();
  const isMainPage = location.pathname === "/financial-products";
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // UseLayoutEffect runs before browser paint, ensuring scroll reset happens before user sees the page
  useLayoutEffect(() => {
    // Immediate scroll reset using both methods for maximum compatibility
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari
  }, [location.pathname]);
  
  // Additional useEffect as a fallback to ensure scroll reset
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    
    // Add event listener to capture any scroll attempts immediately after navigation
    const preventInitialScroll = (e: Event) => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('scroll', preventInitialScroll, { once: true });
    
    return () => {
      window.removeEventListener('scroll', preventInitialScroll);
    };
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen bg-black financial-product-layout flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        {renderHeader(scrollToTop)}
        
        <div className="mt-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar with labels - only show on subpages */}
            {!isMainPage && <FinancialProductsSidebar />}
            
            {/* Main content area */}
            <div className="w-full lg:ml-8 text-white">
              <ScrollArea className="h-full scrollbar-hidden">
                {children}
                {/* Only show the call to action on subpages */}
                {!isMainPage && <AxiSpaceXCallToAction />}
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
