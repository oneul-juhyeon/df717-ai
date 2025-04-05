
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, History, BarChart4, LineChart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Stability: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Reliability & Stability"
          subtitle="How DF717 maintains consistent performance and reliability in all market conditions."
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            DF717's stability is built on a foundation of robust infrastructure, redundant systems, and constant monitoring. 
            Our approach to reliability ensures that the platform can continue to operate effectively even in challenging market conditions.
          </p>
        </div>
        
        <div className="py-4 mb-6 border-t border-gray-800 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8 mt-6">Key Components</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 animate-fade-in-up delay-300">
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">System Redundancy</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Multiple server locations with automatic failover ensure continuous operation even during 
                    unexpected outages or technical issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <History className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Performance History</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    DF717 has demonstrated reliable performance across various market conditions, including during high volatility periods.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <BarChart4 className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Risk Management</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Advanced risk management protocols help balance performance with stability, avoiding extreme drawdowns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <LineChart className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Continuous Improvement</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Regular updates and optimizations ensure the system evolves with market conditions while maintaining stability.
                  </p>
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
