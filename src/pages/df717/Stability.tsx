
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Shield, Cpu, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Stability: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Technical Reliability & Architectural Stability"
          subtitle="How DF717 maintains consistent performance and reliability in all market conditions."
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            DF717 is built upon a robust and precision-engineered architecture that enables reliable and accurate 
            trade execution. By identifying market inefficiencies through statistical modeling and conditional 
            time-series logic, DF717 achieves emotion-free, logic-based decision automation.
          </p>
        </div>
        
        <div className="py-4 mb-6 border-t border-gray-800 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8 mt-6">Key Components</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-300">
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Cpu className="h-5 w-5 mr-3 text-red-400" />
                Multi-layer Signal Engine
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    Normalizes and filters price, volume, and volatility data. Generates entry signals based on 
                    multi-tiered conditional logic. This sophisticated system ensures that market noise is filtered out
                    and only high-probability trading opportunities are identified.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Advanced data normalization algorithms</li>
                    <li>Multi-factor signal confirmation</li>
                    <li>Adaptive filter parameters based on market conditions</li>
                    <li>Real-time signal quality assessment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Zap className="h-5 w-5 mr-3 text-red-400" />
                Latency-optimized Trade Executor
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    Achieves a system-wide execution latency of 200–300ms, compensating for network delays through 
                    optimized VPS and broker API infrastructure. This ultra-low latency ensures that trades are executed
                    at the intended price points, minimizing slippage.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>High-performance execution algorithms</li>
                    <li>Strategic server locations for minimal latency</li>
                    <li>Advanced network optimization techniques</li>
                    <li>Continuous performance monitoring</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Shield className="h-5 w-5 mr-3 text-red-400" />
                Self-healing Risk Logic
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    Dynamically liquidates or scales down positions based on real-time loss ratios, slippage events, 
                    or inter-asset correlation shifts. This advanced risk management system ensures capital preservation
                    and protects against catastrophic drawdowns.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Automated position sizing based on volatility</li>
                    <li>Dynamic risk parameter adjustment</li>
                    <li>Correlation-based portfolio rebalancing</li>
                    <li>Intelligent stop-loss management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DF717Layout>
  );
};

export default Stability;
