
import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import FinancialProductsSidebar from "./FinancialProductsSidebar";
import { useLocation } from "react-router-dom";

interface FinancialProductLayoutProps {
  children: React.ReactNode;
  renderHeader: (scrollToTop: () => void) => React.ReactNode;
}

const FinancialProductLayout: React.FC<FinancialProductLayoutProps> = ({
  children,
  renderHeader
}) => {
  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="w-full min-h-screen bg-[#0a0a1e] flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        {renderHeader(scrollToTop)}
        
        <div className="mt-8">          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar with labels */}
            <FinancialProductsSidebar />
            
            {/* Main content area */}
            <div className="w-full text-white">
              <ScrollArea className="h-full">
                {children}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FinancialProductLayout;
