
import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FinancialProductLayoutProps {
  children: React.ReactNode;
  title: string;
  renderHeader: (scrollToTop: () => void) => React.ReactNode;
}

const FinancialProductLayout: React.FC<FinancialProductLayoutProps> = ({
  children,
  title,
  renderHeader
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#0a0a1e] flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        {renderHeader(scrollToTop)}
        
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-left tracking-tight">{title}</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar with labels */}
            <div className="lg:w-64 shrink-0 animate-fade-in-left">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-6 pl-4 border-l-2 border-red-700">{title}</h3>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="w-full bg-white text-black rounded-lg overflow-hidden">
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
