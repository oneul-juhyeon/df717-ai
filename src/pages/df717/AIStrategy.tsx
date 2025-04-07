
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Brain, Cpu, Network } from "lucide-react";

const AIStrategy: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="AI-Powered Strategy"
          subtitle="How DF717 leverages artificial intelligence for optimal trading outcomes"
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            DF717's AI core processes vast quantities of market data to identify patterns and anomalies that would be impossible 
            to detect using traditional analysis. Our sophisticated neural networks and deep learning models continuously 
            adapt to changing market conditions, maintaining their edge in all regimes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-200">
          <Card className="bg-[#0c0c20] border-white/50 text-white hover:border-white/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-white/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Brain className="h-5 w-5 mr-3 text-white" />
                Deep Learning Architecture
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    Our custom neural network architecture combines convolutional, recurrent, and transformer layers to process 
                    multi-dimensional market data across different timeframes. This hybrid approach allows the system to capture 
                    both local patterns and long-range dependencies in market behavior.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Multi-timeframe data integration</li>
                    <li>Pattern recognition and anomaly detection</li>
                    <li>Feature extraction and representation learning</li>
                    <li>Temporal dependency modeling</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-white/50 text-white hover:border-white/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-white/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Cpu className="h-5 w-5 mr-3 text-white" />
                Reinforcement Learning
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    DF717 employs advanced reinforcement learning algorithms that learn optimal trading policies through 
                    continuous interaction with market environments. Our proprietary reward functions balance short-term 
                    profitability with long-term capital preservation objectives.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Multi-objective optimization</li>
                    <li>Risk-constrained policy learning</li>
                    <li>Adaptive exploration strategies</li>
                    <li>Experience replay with prioritization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-white/50 text-white hover:border-white/70 transition-all duration-300 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#12122e] border-b border-white/30">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Network className="h-5 w-5 mr-3 text-white" />
                Ensemble Decision Framework
              </h3>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <p className="text-gray-300 leading-relaxed">
                    Our trading decisions are made by an ensemble of specialized models, each focusing on different 
                    market aspects. This approach increases robustness and reduces the impact of individual model errors, 
                    resulting in more reliable performance across various market conditions.
                  </p>
                  <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
                    <li>Model diversity and specialization</li>
                    <li>Dynamic model weighting</li>
                    <li>Confidence-based decision aggregation</li>
                    <li>Outlier detection and rejection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 p-4 border-t border-gray-800 animate-fade-in-up delay-300">
          <p className="text-amber-300 font-medium flex items-center">
            <span className="mr-2">⚠️</span>
            The AI algorithms and training methodologies described are proprietary to DF717 and represent years of research and development.
          </p>
        </div>
      </div>
    </DF717Layout>
  );
};

export default AIStrategy;
