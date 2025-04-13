
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";

const Engine: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="AI Engine Architecture" 
          subtitle="How DF717 adapts to shifting market regimes through intelligent learning systems" 
        />
        
        <div className="mb-14 animate-fade-in-up delay-100">
          <p className="text-gray-300 leading-relaxed">
            DF717 moves beyond static rule-based logic by integrating AI-driven adaptive intelligence into its architecture.
            Its strategic layer incorporates reinforcement learning, supervised classification, and real-time feedback loops, enabling ongoing policy refinement.
            By evolving with the market, DF717 transitions seamlessly across regimes with minimal human intervention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 mt-8 animate-fade-in-up delay-200">
          <div className="w-full">
            <h3 className="text-xl font-bold text-white mb-4">
              Reinforcement Learning
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Optimizes trading strategies using reward-driven algorithms (e.g., PPO, A2C), adjusting entries based on observed outcomes.
              Through trial-based learning in simulated and live environments, DF717 calibrates optimal trade behaviors dynamically.
            </p>
            <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
              <li>Custom reward function tuning</li>
              <li>Multi-step policy updates</li>
              <li>Regime-specific learning environments</li>
              <li>Trade-off balancing: exploration vs. exploitation</li>
            </ul>
          </div>
          
          <div className="w-full">
            <h3 className="text-xl font-bold text-white mb-4">
              Supervised Learning
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Classifies market states using historical features and dynamically switches strategies to suit the current regime.
              Models are trained on labeled volatility, momentum, and liquidity indicators to improve real-time classification accuracy.
            </p>
            <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
              <li>Regime labeling with custom feature sets</li>
              <li>Cross-validation for prediction accuracy</li>
              <li>Strategy mapping by classification confidence</li>
              <li>Model refresh with sliding data windows</li>
            </ul>
          </div>
          
          <div className="w-full">
            <h3 className="text-xl font-bold text-white mb-4">
              Feature Engineering Layer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Extracts derivative indicators from tick-level data and applies PCA or autoencoders for dimensionality reduction and noise elimination.
              This layer transforms raw data into usable signal components, enhancing clarity for model decision-making.
            </p>
            <ul className="list-disc pl-5 mt-6 text-gray-300 space-y-2">
              <li>Tick-level feature construction</li>
              <li>PCA-based dimensionality reduction</li>
              <li>Autoencoder-based denoising</li>
              <li>Latent signal representation learning</li>
            </ul>
          </div>
        </div>
      </div>
    </DF717Layout>
  );
};

export default Engine;
