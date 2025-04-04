
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import CompanyHeader from "@/components/company/CompanyHeader";

const Forex: React.FC = () => {
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
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
              <h1 className="text-5xl font-bold text-white">Forex Trading</h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-12">
              Trade major, minor and exotic currency pairs with tight spreads and exceptional execution.
            </p>
            
            <Card className="bg-[#141432] border-indigo-900 text-white shadow-xl overflow-hidden mb-12">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold mb-4">Trade the Global Currency Markets</h2>
                  <p className="text-gray-300">
                    The foreign exchange market is the largest and most liquid financial market in the world, with trillions of dollars traded daily. Our forex trading platform provides access to a wide range of currency pairs with competitive spreads and reliable execution.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mt-8 mb-4">Key Benefits</h3>
                  <ul className="text-gray-300">
                    <li>Access to 80+ currency pairs</li>
                    <li>Tight spreads starting from 0.0 pips</li>
                    <li>Fast execution with minimal slippage</li>
                    <li>Advanced charting and analysis tools</li>
                    <li>Expert market analysis and research</li>
                    <li>24/5 market access</li>
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

export default Forex;
