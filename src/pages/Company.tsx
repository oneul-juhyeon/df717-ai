
import React, { useEffect } from "react";
import CompanyHeader from "@/components/company/CompanyHeader";
import { Separator } from "@/components/ui/separator";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyBrandSection from "@/components/company/CompanyBrandSection";
import CompanyValueCards from "@/components/company/CompanyValueCards";

const Company: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Add scroll animation effects
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('animate-fade-in-up');
          element.classList.remove('opacity-0');
        }
      });
    };

    // Run once on mount
    setTimeout(animateOnScroll, 100);

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return (
    <main className="w-full min-h-screen bg-[#0a0a1e] flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px]">
        <CompanyHeader scrollToTop={scrollToTop} />
        
        <section className="mt-12 mb-20 w-full max-w-5xl mx-auto">
          <CompanyHero />
          <CompanyBrandSection />
          <CompanyValueCards />
        </section>
      </div>
    </main>
  );
};

export default Company;
