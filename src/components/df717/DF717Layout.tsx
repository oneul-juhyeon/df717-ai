
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
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5 flex-grow">
        <DF717Header scrollToTop={scrollToTop} />
        
        <div className="mt-16 mb-20 flex">
          {showSidebar && <DF717Sidebar />}
          
          <div className={`w-full ${showSidebar ? 'lg:ml-10' : ''}`}>
            {children}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default DF717Layout;
