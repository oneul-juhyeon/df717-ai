
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, BarChart, PieChart, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Modeling: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Financial Modeling"
          subtitle="Advanced financial modeling techniques used by DF717 to analyze and predict market behavior."
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            DF717 employs sophisticated financial modeling techniques to understand market dynamics, identify trends, and make informed investment decisions.
            Our models combine traditional financial theory with cutting-edge machine learning approaches.
          </p>
        </div>
        
        <div className="py-4 mb-6 border-t border-gray-800 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8 mt-6">Modeling Approaches</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 animate-fade-in-up delay-300">
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <LineChart className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Time Series Analysis</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Advanced time series models detect patterns, cycles, and anomalies in market data to predict future price movements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Factor Analysis</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Multi-factor models identify key drivers of asset returns, allowing for better prediction and risk management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <PieChart className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Portfolio Optimization</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Modern portfolio theory combined with advanced optimization techniques to achieve optimal risk-adjusted returns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dynamic Scenario Analysis</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Simulation of multiple market scenarios to test investment strategies and prepare for various market conditions.
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

export default Modeling;
