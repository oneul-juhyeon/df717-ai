
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CircleDollarSign } from "lucide-react";
import CompanyHeader from "@/components/company/CompanyHeader";

const Gold: React.FC = () => {
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
                <CircleDollarSign className="h-8 w-8 text-yellow-600" />
              </div>
              <h1 className="text-5xl font-bold text-white">Gold Trading</h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-12">
              Trade gold with competitive spreads, reliable execution, and advanced trading tools.
            </p>
            
            <Card className="bg-[#141432] border-indigo-900 text-white shadow-xl overflow-hidden mb-12">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold mb-4">Trade Gold Markets</h2>
                  <p className="text-gray-300">
                    Gold has been a store of value for thousands of years and remains a popular trading instrument today. Our gold trading platform provides access to global gold markets with competitive spreads and reliable execution, allowing you to capitalize on price movements in this timeless asset.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mt-8 mb-4">Key Benefits</h3>
                  <ul className="text-gray-300">
                    <li>Competitive spreads on gold trading</li>
                    <li>Multiple contract types (spot, futures)</li>
                    <li>Leverage options available</li>
                    <li>Extended trading hours</li>
                    <li>Expert market analysis</li>
                    <li>Advanced charting and technical tools</li>
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

export default Gold;
