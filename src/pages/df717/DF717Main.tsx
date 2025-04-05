
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Separator } from "@/components/ui/separator";

const DF717Main: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="What is DF717?"
          subtitle="A modular algorithmic trading system engineered for CFD markets and high-volatility derivatives"
        />
        
        <div className="space-y-8 text-gray-300 animate-fade-in-up delay-100">
          <p className="leading-relaxed">
            DF717 is a modular algorithmic trading system specifically engineered for Contract for Difference (CFD) markets and high-volatility derivatives. DF717 is designed to process real-time market data, generate trading signals, and execute orders automatically based on structured, rules-based logic.
          </p>
          
          <div className="py-2 border-l-2 border-red-800 pl-6 bg-[#0c0c20] rounded-r-lg">
            <p className="leading-relaxed font-medium text-white">
              DF717 interprets financial markets using quantitative modeling and market microstructure analysis. By integrating real-time pipelines with advanced signal logic, DF717 serves as a high-frequency, AI-augmented trading platform capable of outperforming manual discretionary decision-making.
            </p>
          </div>
          
          <p className="leading-relaxed">
            DF717 represents more than automation—it embodies the principles of quantitative portfolio management with consistent risk control. With precise execution mechanisms and horizontally scalable infrastructure, DF717 is suitable for both institutional-grade systems and sophisticated retail traders.
          </p>
          
          <div className="pt-6 pb-6 border-t border-red-900/30 animate-fade-in-up delay-200">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Technical Architecture</h2>
          </div>
          
          <p className="leading-relaxed animate-fade-in-up delay-300">
            DF717 is built as a hybrid engine that fuses algorithmic structure, financial engineering principles, and adaptive artificial intelligence. This enables DF717 to operate seamlessly across diverse asset classes and adapt autonomously to regime shifts without human intervention.
          </p>
          
          <p className="leading-relaxed animate-fade-in-up delay-400">
            DF717 transforms subjective trading into a disciplined, data-driven process. By structuring decision logic, quantifying risk exposure, and ensuring repeatable trade outcomes, DF717 enables technical reproducibility in environments where uncertainty and volatility dominate.
          </p>
        </div>
      </div>
    </DF717Layout>
  );
};

export default DF717Main;
