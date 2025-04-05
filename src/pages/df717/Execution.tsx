
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CircleDollarSign, Clock, LineChart } from "lucide-react";

const Execution: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Execution Logic Tailored for the CFD Market"
          subtitle="Asset-aware, symbol-specific execution for global CFD instruments"
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            Since CFD trading spans currencies, indices, commodities, and synthetic equity instruments, 
            DF717 incorporates a flexible and asset-aware execution model:
          </p>
        </div>
        
        <div className="py-4 mb-6 border-t border-gray-800 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8 mt-6">Key Components</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-300">
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <CircleDollarSign className="h-5 w-5 mr-3 text-red-400" />
                Symbol-specific Optimization
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Strategies are optimized per asset (e.g., XAUUSD, US30, WTI), accounting for unique 
                    volatility, volume, and microstructure patterns.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Asset-specific parameter tuning</li>
                    <li>Volatility-adjusted position sizing</li>
                    <li>Market structure pattern recognition</li>
                    <li>Instrument-specific execution rules</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <CircleDollarSign className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Clock className="h-5 w-5 mr-3 text-red-400" />
                Session-aware Scheduling
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row-reverse gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Adjusts strategy aggressiveness and signal thresholds depending on market session 
                    (London, New York, Asia-Pacific).
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Time-based parameter adjustment</li>
                    <li>Liquidity-aware execution timing</li>
                    <li>Session volatility profiling</li>
                    <li>Cross-session transition handling</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <Clock className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <LineChart className="h-5 w-5 mr-3 text-red-400" />
                Slippage & Spread Analysis Module
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Quantifies broker-specific execution characteristics and adapts trade logic accordingly.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Real-time spread monitoring</li>
                    <li>Execution quality assessment</li>
                    <li>Broker performance benchmarking</li>
                    <li>Adaptive order type selection</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <LineChart className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DF717Layout>
  );
};

export default Execution;
