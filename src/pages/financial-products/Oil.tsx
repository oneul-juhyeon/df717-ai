
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Fuel } from "lucide-react";
import CompanyHeader from "@/components/company/CompanyHeader";

const Oil: React.FC = () => {
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
        <CompanyHeader scrollToTop={scrollToTop} />
        
        <section className="mt-20 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#191942] flex items-center justify-center">
                <Fuel className="h-8 w-8 text-gray-700" />
              </div>
              <h1 className="text-5xl font-bold text-white">Oil Trading</h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-12">
              Access global oil markets with advanced trading tools and competitive pricing.
            </p>
            
            <Card className="bg-[#141432] border-indigo-900 text-white shadow-xl overflow-hidden mb-12">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold mb-4">Trade Global Oil Markets</h2>
                  <p className="text-gray-300">
                    Oil is one of the world's most actively traded commodities, with its price influenced by a wide range of global factors. Our oil trading platform provides access to major oil markets including WTI and Brent crude, allowing you to speculate on price movements in these vital energy commodities.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mt-8 mb-4">Key Benefits</h3>
                  <ul className="text-gray-300">
                    <li>Access to WTI and Brent crude markets</li>
                    <li>Competitive spreads</li>
                    <li>Multiple contract types available</li>
                    <li>Extended trading hours</li>
                    <li>Comprehensive market analysis</li>
                    <li>Advanced risk management tools</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Oil;
