
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bitcoin } from "lucide-react";
import CompanyHeader from "@/components/company/CompanyHeader";

const Crypto: React.FC = () => {
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
                <Bitcoin className="h-8 w-8 text-orange-500" />
              </div>
              <h1 className="text-5xl font-bold text-white">Crypto Trading</h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-12">
              Trade major cryptocurrencies with institutional-grade liquidity and advanced trading tools.
            </p>
            
            <Card className="bg-[#141432] border-indigo-900 text-white shadow-xl overflow-hidden mb-12">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold mb-4">Trade Digital Assets</h2>
                  <p className="text-gray-300">
                    The cryptocurrency market operates 24/7, offering trading opportunities around the clock. Our crypto trading platform provides access to major cryptocurrencies including Bitcoin, Ethereum, and other altcoins with competitive pricing and reliable execution.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mt-8 mb-4">Key Benefits</h3>
                  <ul className="text-gray-300">
                    <li>Access to 20+ cryptocurrencies</li>
                    <li>Competitive spreads</li>
                    <li>Leverage options available</li>
                    <li>24/7 trading</li>
                    <li>Advanced security features</li>
                    <li>Real-time market data</li>
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

export default Crypto;
