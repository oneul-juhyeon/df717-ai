
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AreaChart, BarChart3, LineChart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Modeling: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Financial Engineering-Based Modeling Capabilities"
          subtitle="DF717 integrates probabilistic decision-making mechanisms backed by modern financial engineering theory."
        />
        
        <div className="py-4 mb-6 border-t border-red-900/30 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8 mt-6">Key Capabilities</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-300">
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <AreaChart className="h-5 w-5 mr-3 text-red-400" />
                Monte Carlo Simulation
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row-reverse gap-8">
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <AreaChart className="h-32 w-32 text-red-400" />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Simulates return dispersion, expected yield distributions, and potential drawdown clusters for forward-testing.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Multi-path simulation for robust scenario analysis</li>
                    <li>Extreme event modeling with tail risk assessment</li>
                    <li>Statistical confidence measurement across timeframes</li>
                    <li>Correlation-based shock propagation testing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <BarChart3 className="h-5 w-5 mr-3 text-red-400" />
                Markowitz Portfolio Optimization
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <BarChart3 className="h-32 w-32 text-red-400" />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Adjusts capital allocation across CFD instruments based on risk/return profiles and asset correlations.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Efficient frontier calculation for optimal allocations</li>
                    <li>Dynamic weight rebalancing based on volatility shifts</li>
                    <li>Covariance matrix analysis for diversification assessment</li>
                    <li>Risk-adjusted return targeting with portfolio constraints</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <LineChart className="h-5 w-5 mr-3 text-red-400" />
                Sharpe, Sortino, and Calmar Ratios
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row-reverse gap-8">
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <LineChart className="h-32 w-32 text-red-400" />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Monitors system performance quantitatively, triggering strategic transitions when deviations exceed defined thresholds.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Continuous performance measurement against benchmarks</li>
                    <li>Downside risk quantification for capital preservation</li>
                    <li>Maximum drawdown evaluation with recovery forecasting</li>
                    <li>Automated strategy adjustment based on ratio thresholds</li>
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

export default Modeling;
