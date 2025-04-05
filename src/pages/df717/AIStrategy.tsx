
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Network, Database } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AIStrategy: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="AI Strategy"
          subtitle="How HANNAH leverages artificial intelligence to develop and execute investment strategies."
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            HANNAH, the core AI engine of DF717, uses sophisticated machine learning algorithms to analyze markets, 
            identify opportunities, and execute trades with precision. Our AI strategy combines deep learning with 
            traditional financial expertise to create a robust investment approach.
          </p>
        </div>
        
        <div className="py-4 mb-6 border-t border-gray-800 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8 mt-6">AI Capabilities</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 animate-fade-in-up delay-300">
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <Brain className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Deep Learning Models</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Neural networks trained on vast financial datasets identify complex patterns that traditional 
                    analysis might miss, creating a predictive edge.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <Cpu className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Adaptive Learning</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    HANNAH continuously learns from market data and trading results, refining its strategy 
                    and adapting to changing market conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <Network className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Multi-Strategy Approach</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Multiple AI algorithms work in concert, each specializing in different market conditions or asset classes to 
                    ensure consistent performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0c0c20] border-red-900/50 text-white hover:border-red-800 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <Database className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Big Data Processing</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    Advanced data processing capabilities allow HANNAH to analyze vast amounts of market data, news, and 
                    economic indicators in real-time.
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

export default AIStrategy;
