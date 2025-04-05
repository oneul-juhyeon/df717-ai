
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp, BarChart4, LineChart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Examples: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Strategy Examples"
          subtitle="Case studies and examples of DF717's strategies in action."
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            These examples demonstrate how DF717 applies its AI-driven strategies across different market scenarios and asset classes.
            Each case represents a real application of our technology, with results that showcase the effectiveness of our approach.
          </p>
        </div>
        
        <div className="py-4 mb-6 border-t border-gray-800 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8 mt-6">Case Studies</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-300">
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <TrendingUp className="h-5 w-5 mr-3 text-red-400" />
                Equity Market Example
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    During the 2022 market correction, DF717 identified defensive sectors with stable cash flows and 
                    strong balance sheets. The AI engine allocated capital to these sectors while reducing exposure to 
                    high-growth stocks vulnerable to rising interest rates.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Early detection of market rotation signals</li>
                    <li>Dynamic adjustment of sector weights</li>
                    <li>Volatility management through position sizing</li>
                    <li>Outperformance of benchmark indices</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <LineChart className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <ArrowUpRight className="h-5 w-5 mr-3 text-red-400" />
                Fixed Income Strategy
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    In anticipation of changing central bank policies, DF717 analyzed yield curve dynamics and 
                    macroeconomic indicators to adjust duration exposure in bond portfolios. This resulted in 
                    effective capital preservation during a challenging bond market.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Predictive analysis of interest rate movements</li>
                    <li>Duration management based on yield curve forecasts</li>
                    <li>Credit risk assessment using proprietary models</li>
                    <li>Strategic positioning ahead of central bank announcements</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <BarChart4 className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DF717Layout>
  );
};

export default Examples;
