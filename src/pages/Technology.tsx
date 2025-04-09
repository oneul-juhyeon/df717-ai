
import React from "react";
import TechnologyHeader from "@/components/technology/TechnologyHeader";
import ModernTechnologyTabs from "@/components/technology/ModernTechnologyTabs";
import Footer from "@/components/common/Footer";

const Technology: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIyMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iLjAyIi8+PC9zdmc+')] mix-blend-overlay opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 pointer-events-none"></div>
      
      <div className="relative z-10 w-full px-4 md:px-10 lg:px-[154px] flex-grow">
        <TechnologyHeader scrollToTop={scrollToTop} />
        
        <section className="mt-12 mb-20 w-full max-w-5xl mx-auto relative">
          <ModernTechnologyTabs />
        </section>
      </div>
      
      <Footer />
    </main>
  );
};

export default Technology;
