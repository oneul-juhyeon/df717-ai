
import React, { useEffect } from "react";
import DF717Header from "./DF717Header";
import DF717Sidebar from "./DF717Sidebar";

interface DF717LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const DF717Layout: React.FC<DF717LayoutProps> = ({ 
  children,
  showSidebar = true
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
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <DF717Header scrollToTop={scrollToTop} />
        
        <div className="mt-16 mb-20 flex">
          {showSidebar && <DF717Sidebar />}
          
          <div className={`w-full ${showSidebar ? 'lg:ml-10' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DF717Layout;
