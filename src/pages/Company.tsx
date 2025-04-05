
import React, { useEffect } from "react";
import CompanyHeader from "@/components/company/CompanyHeader";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyBrandSection from "@/components/company/CompanyBrandSection";

const Company: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Add scroll animation effects with staggered timing
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Make the condition more lenient to ensure elements appear
        if (elementPosition < windowHeight * 0.9) {
          setTimeout(() => {
            element.classList.add('animate-fade-in-up');
            element.classList.remove('opacity-0');
          }, index * 150); // Staggered animation with 150ms delay between elements
        }
      });
    };

    // Run once on mount with a delay to ensure DOM is ready
    setTimeout(animateOnScroll, 300);

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Set up a periodic check to ensure animations trigger
    const intervalCheck = setInterval(animateOnScroll, 1000);

    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      clearInterval(intervalCheck);
    };
  }, []);
  
  return (
    <main className="w-full min-h-screen bg-[#0e0e0e] flex flex-col">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIyMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iLjAyIi8+PC9zdmc+')] mix-blend-overlay opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-transparent to-[#0e0e0e] opacity-80 pointer-events-none"></div>
      
      <div className="relative z-10 w-full mx-auto px-4 md:px-10 lg:px-[154px]">
        <CompanyHeader scrollToTop={scrollToTop} />
        
        <section className="mt-12 mb-20 w-full max-w-5xl mx-auto relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-900/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-900/5 rounded-full blur-3xl"></div>
          
          <CompanyHero />
          
          <CompanyBrandSection />
        </section>
      </div>
    </main>
  );
};

export default Company;
