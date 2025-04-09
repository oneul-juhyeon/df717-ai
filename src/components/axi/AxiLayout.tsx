
import React, { useEffect, useLayoutEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import AxiSidebar from "./AxiSidebar";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import AxiSpaceXCallToAction from "./AxiSpaceXCallToAction";

interface AxiLayoutProps {
  children: React.ReactNode;
  renderHeader: (scrollToTop: () => void) => React.ReactNode;
}

const AxiLayout: React.FC<AxiLayoutProps> = ({
  children,
  renderHeader
}) => {
  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
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
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        {renderHeader(scrollToTop)}
        
        <div className="mt-8">          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar with navigation */}
            <AxiSidebar />
            
            {/* Main content area */}
            <div className="w-full text-white">
              <ScrollArea className="h-full">
                {children}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
      
      <AxiSpaceXCallToAction />
      
      <Footer />
    </main>
  );
};

export default AxiLayout;
