
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, BarChart, PieChart, TrendingUp } from "lucide-react";

const Modeling: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Financial Modeling"
          subtitle="Advanced financial modeling techniques used by DF717 to analyze and predict market behavior."
        />
        
        <div className="mb-12">
          <p className="text-gray-300">
            DF717 employs sophisticated financial modeling techniques to understand market dynamics, identify trends, and make informed investment decisions.
            Our models combine traditional financial theory with cutting-edge machine learning approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mr-4">
                  <LineChart className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Time Series Analysis</h3>
                  <p className="text-gray-300 mt-2">
                    Advanced time series models detect patterns, cycles, and anomalies in market data to predict future price movements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Factor Analysis</h3>
                  <p className="text-gray-300 mt-2">
                    Multi-factor models identify key drivers of asset returns, allowing for better prediction and risk management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-4">
                  <PieChart className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Portfolio Optimization</h3>
                  <p className="text-gray-300 mt-2">
                    Modern portfolio theory combined with advanced optimization techniques to achieve optimal risk-adjusted returns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dynamic Scenario Analysis</h3>
                  <p className="text-gray-300 mt-2">
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
