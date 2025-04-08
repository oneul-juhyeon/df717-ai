import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Zap, Timer, Shield } from "lucide-react";

const Execution: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Execution Logic"
          subtitle="How DF717 translates signals into precise market actions"
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            DF717's execution logic is designed to translate trading signals into optimal market actions with minimal slippage 
            and maximum precision. Our adaptive execution algorithms adjust to real-time market conditions, ensuring 
            efficient order placement and management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-200">
          <Card className="bg-[#0c0c20] border-white/50 text-white hover:border-white/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-white/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Timer className="h-5 w-5 mr-3 text-white" />
                Timing Optimization
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    Our execution system uses microsecond precision to time order submission based on market microstructure analysis. 
                    By identifying optimal execution windows, we minimize adverse price impact and reduce execution costs.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Liquidity cycle analysis</li>
                    <li>Order flow prediction</li>
                    <li>Execution window optimization</li>
                    <li>Latency compensation algorithms</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-white/50 text-white hover:border-white/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-white/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Zap className="h-5 w-5 mr-3 text-white" />
                Order Execution Strategies
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    DF717 employs a suite of sophisticated order execution algorithms that dynamically adapt to market conditions. 
                    These strategies range from passive limit order placement to aggressive market orders, selected based on 
                    signal strength and market context.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Smart order routing</li>
                    <li>Dynamic order type selection</li>
                    <li>Order splitting and iceberg techniques</li>
                    <li>Execution quality monitoring</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-white/50 text-white hover:border-white/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-white/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Shield className="h-5 w-5 mr-3 text-white" />
                Risk-Aware Position Management
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    Our position management system continuously monitors market conditions and adjusts positions to maintain 
                    optimal risk exposure. This includes dynamic stop-loss adjustment, partial profit taking, and position 
                    sizing based on volatility and signal strength.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Adaptive position sizing</li>
                    <li>Dynamic stop-loss management</li>
                    <li>Partial profit taking strategies</li>
                    <li>Portfolio-level risk constraints</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 p-4 border-t border-gray-800 animate-fade-in-up delay-300">
          <p className="text-amber-300 font-medium flex items-center">
            <span className="mr-2">⚠️</span>
            The execution logic and algorithms described are proprietary to DF717 and continuously refined to maintain optimal performance.
          </p>
        </div>
      </div>
    </DF717Layout>
  );
};

export default Execution;
