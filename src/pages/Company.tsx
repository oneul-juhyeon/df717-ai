
import React, { useEffect, useRef } from "react";
import CompanyHeader from "@/components/company/CompanyHeader";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyBrandSection from "@/components/company/CompanyBrandSection";

const Company: React.FC = () => {
  const animatedElementsRef = useRef<HTMLElement[]>([]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    // Reset animation on mount - important for when navigating back to this page
    document.querySelectorAll('.scroll-animate').forEach((element: any) => {
      element.classList.add('opacity-0');
      element.classList.remove('animate-fade-in-up');
    });

    // Initialize animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Delay animation based on element's position in the DOM for staggered effect
          const delay = 150 * Array.from(document.querySelectorAll('.scroll-animate')).indexOf(entry.target);
          
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }, delay);
          
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null, // viewport
      rootMargin: '-10% 0px', // trigger when element is 10% in view
      threshold: 0.1 // trigger when at least 10% of element is visible
    });

    // Start observing all scroll-animate elements
    document.querySelectorAll('.scroll-animate').forEach((element: any) => {
      observer.observe(element);
      animatedElementsRef.current.push(element);
    });

    // Clean up observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once on mount
  
  return (
    <main className="w-full min-h-screen bg-white flex flex-col">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIyMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iLjAyIi8+PC9zdmc+')] mix-blend-overlay opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-80 pointer-events-none"></div>
      
      <div className="relative z-10 w-full mx-auto px-4 md:px-10 lg:px-[154px]">
        <CompanyHeader scrollToTop={scrollToTop} />
        
        <section className="mt-12 mb-20 w-full max-w-5xl mx-auto relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gray-100 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gray-100 rounded-full blur-3xl"></div>
          
          <CompanyHero />
          
          <CompanyBrandSection />
        </section>
      </div>
    </main>
  );
};

export default Company;
