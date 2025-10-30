
import React, { useEffect, useLayoutEffect } from "react";
import DF717Header from "./DF717Header";
import DF717Sidebar from "./DF717Sidebar";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";

interface DF717LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const DF717Layout: React.FC<DF717LayoutProps> = ({ 
  children,
  showSidebar = true
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
        <DF717Header scrollToTop={scrollToTop} />
        
        <div className="mt-8 mb-12 flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {showSidebar && <DF717Sidebar />}
            
            <div className={`w-full ${showSidebar ? 'lg:ml-8' : ''}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default DF717Layout;
