
import React, { useEffect } from "react";
import HomeHeader from "@/components/home/HomeHeader";
import Footer from "@/components/common/Footer";
import ProductGrid from "@/components/financial-products/ProductGrid";

const FinancialProducts: React.FC = () => {
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
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="w-full mx-0 px-5 sm:px-10 md:px-[154px] z-10">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>
      
      <section className="mt-20 mb-20 max-w-[1200px] mx-auto px-5 sm:px-10 md:px-[30px] flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">Financial Products</h1>
          <p className="text-xl text-gray-300 mb-12">
            Explore our comprehensive range of financial products designed to meet your trading needs.
          </p>
          
          <div className="w-full max-w-4xl">
            <ProductGrid />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default FinancialProducts;
