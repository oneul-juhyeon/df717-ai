
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BrainCircuit, Sparkles, Zap } from "lucide-react";

const Examples: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Strategy Examples"
          subtitle="Case studies and examples of DF717's strategies in action"
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            DF717 is composed of several independently operating strategy modules, each with its own decision 
            logic and dynamic risk parameters. Strategy activation is determined based on market regime recognition. 
            All strategies are designed using non-disclosed proprietary algorithms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-200">
          {/* Strategy A */}
          <section className="bg-[#0c0c20] rounded-lg overflow-hidden border border-red-900/50 shadow-lg hover:border-red-800/70 transition-all duration-300">
            <div className="bg-[#12122e] py-6 px-8 border-b border-red-900/30">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Zap className="h-6 w-6 mr-3 text-red-400" />
                Strategy A
              </h2>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Quantifies price stationarity versus non-stationarity to detect micro-inefficiencies.
                    Analyzes volatility, volume clusters, and tick structures to identify micro-pattern transitions.
                    Combines time-series statistical filters with dynamic exposure control to adjust position sizing in real time.
                  </p>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <Zap className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </div>
          </section>
          
          {/* Strategy B */}
          <section className="bg-[#0c0c20] rounded-lg overflow-hidden border border-red-900/50 shadow-lg hover:border-red-800/70 transition-all duration-300">
            <div className="bg-[#12122e] py-6 px-8 border-b border-red-900/30">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Sparkles className="h-6 w-6 mr-3 text-red-400" />
                Strategy B
              </h2>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row-reverse gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Captures momentum surges by detecting composite anomalies in price action, order flow, and velocity profiles.
                    Features a high-risk/high-reward algorithm triggered under volatile regimes.
                    Implements probabilistic sizing techniques at entry based on distributional analytics to minimize asset-level risk.
                  </p>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <Sparkles className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </div>
          </section>
          
          {/* Strategy C */}
          <section className="bg-[#0c0c20] rounded-lg overflow-hidden border border-red-900/50 shadow-lg hover:border-red-800/70 transition-all duration-300">
            <div className="bg-[#12122e] py-6 px-8 border-b border-red-900/30">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <BrainCircuit className="h-6 w-6 mr-3 text-red-400" />
                Strategy C
              </h2>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Employs reinforcement learning algorithms to adaptively learn and respond to nonlinear structural changes in the market.
                    Balances mathematical significance with opportunity readiness through real-time risk–reward simulation.
                    Uses high-dimensional feature extraction and deep learning signal filtration to isolate high-precision entry signals beyond the reach of conventional technical indicators.
                  </p>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <BrainCircuit className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="mt-12 p-4 border-t border-gray-800 animate-fade-in-up delay-400">
          <p className="text-amber-300 font-medium flex items-center">
            <span className="mr-2">⚠️</span>
            All formulae, trigger logics, and internal signal structures within DF717 are strictly proprietary and protected under intellectual property provisions.
          </p>
        </div>
      </div>
    </DF717Layout>
  );
};

export default Examples;
