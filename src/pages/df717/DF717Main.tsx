
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";

const DF717Main: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="DF717 Essence" 
          subtitle={`DF717 creates peace—by bringing order to chaos.\n'For God is not a God of confusion but of peace.'\n(1 Corinthians 14:33, ESV)`}
        />
        
        <div className="space-y-8 text-gray-300 animate-fade-in-up delay-100">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Algorithmic Core System
            </h3>
            <p className="leading-relaxed">
              <span className="block">DF717 is a modular algorithmic trading system engineered for CFD markets and high-volatility derivatives.</span>
              <span className="block">It is built to process real-time data, generate trading signals, and execute orders through rule-based logic.</span>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Quant Trading Platform
            </h3>
            <p className="leading-relaxed font-medium text-inherit">
              <span className="block">DF717 is a platform that interprets financial markets using mathematical models and real-time system architecture.</span>
              <span className="block">It fuses strategic reasoning with live execution pipelines to deliver adaptive, high-frequency performance.</span>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              AI Execution Robot
            </h3>
            <p className="leading-relaxed">
              <span className="block">DF717 is a robot that transcends automation, embodying the discipline of quant investing with scalable infrastructure.</span>
              <span className="block">It combines control, consistency, and computation to drive decisions beyond human bias.</span>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Hybrid Adaptive Engine
            </h3>
            <p className="leading-relaxed animate-fade-in-up delay-300">
              <span className="block">DF717 is a hybrid system that unites algorithmic structure, financial engineering, and adaptive AI intelligence.</span>
              <span className="block">It responds autonomously to shifting regimes and trades across asset classes without manual intervention.</span>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Structured Alpha Process
            </h3>
            <p className="leading-relaxed animate-fade-in-up delay-400">
              <span className="block">DF717 transforms trading into a structured process—data-driven, risk-quantified, and technically repeatable.</span>
              <span className="block">It brings order to volatility, turning uncertainty into measurable opportunity.</span>
            </p>
          </div>
        </div>
      </div>
    </DF717Layout>
  );
};

export default DF717Main;
