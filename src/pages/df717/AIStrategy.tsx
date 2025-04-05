
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Brain, Network, Database } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AIStrategy: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="AI & Machine Learning-Integrated Strategy Architecture"
          subtitle="Adaptive intelligence meets data-driven decision making"
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            DF717 moves beyond static rule-based logic by integrating AI-driven adaptive intelligence into its architecture:
          </p>
        </div>
        
        <div className="py-4 mb-6 border-t border-gray-800 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8 mt-6">Key Components</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-300">
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Brain className="h-5 w-5 mr-3 text-red-400" />
                Reinforcement Learning
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Optimizes trading strategies using reward-driven algorithms (e.g., PPO, A2C), adjusting entries based on observed outcomes.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Continuous environment adaptation through reward functions</li>
                    <li>Policy optimization through action-state value models</li>
                    <li>Risk-adjusted reward structures for balanced execution</li>
                    <li>Multi-timeframe training to ensure resilience</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <Brain className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Network className="h-5 w-5 mr-3 text-red-400" />
                Supervised Learning
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row-reverse gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Classifies market states using historical features and dynamically switches strategies to suit the current regime.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Market regime classification through ensemble methods</li>
                    <li>Deep learning-based pattern recognition</li>
                    <li>Feature importance analysis for optimal signal extraction</li>
                    <li>Transfer learning from related financial domains</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <Network className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-red-900/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Database className="h-5 w-5 mr-3 text-red-400" />
                Feature Engineering Layer
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <p className="text-gray-300 leading-relaxed">
                    Extracts derivative indicators from tick-level data and applies PCA or autoencoders for dimensionality reduction and noise elimination.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>High-dimensional feature preprocessing and normalization</li>
                    <li>Temporal feature extraction across multiple timeframes</li>
                    <li>Dimensionality reduction for optimal signal extraction</li>
                    <li>Real-time feature generation pipeline with minimal latency</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-[#161645] rounded-lg p-6 flex items-center justify-center">
                  <Database className="h-32 w-32 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DF717Layout>
  );
};

export default AIStrategy;
