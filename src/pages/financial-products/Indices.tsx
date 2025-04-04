
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";
import CompanyHeader from "@/components/company/CompanyHeader";

const Indices: React.FC = () => {
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
                <Layers className="h-8 w-8 text-purple-500" />
              </div>
              <h1 className="text-5xl font-bold text-white">Indices Trading</h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-12">
              Trade major global indices representing the world's largest markets with competitive spreads.
            </p>
            
            <Card className="bg-[#141432] border-indigo-900 text-white shadow-xl overflow-hidden mb-12">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold mb-4">Trade Global Market Indices</h2>
                  <p className="text-gray-300">
                    Our indices trading platform provides access to major global market indices, allowing you to gain exposure to entire sectors or markets with a single trade. Trade indices like S&P 500, NASDAQ, FTSE 100, DAX, and many more with competitive spreads and reliable execution.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mt-8 mb-4">Key Benefits</h3>
                  <ul className="text-gray-300">
                    <li>Access to 20+ global indices</li>
                    <li>Competitive spreads</li>
                    <li>Leverage options available</li>
                    <li>Extended trading hours</li>
                    <li>Comprehensive market analysis</li>
                    <li>Advanced charting tools</li>
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

export default Indices;
