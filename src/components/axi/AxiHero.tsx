
import React from "react";
import { useLocation } from "react-router-dom";

const AxiHero: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Define content based on current route
  let title = "Our Edge";
  let subtitle = "We give you all the tools and support to unlock your advantage.";
  
  // Set content based on current path
  if (path.includes("trust")) {
    title = "Trade With Trust";
    subtitle = "Partner with a broker you can rely on for every step of your trading journey.";
  } else if (path.includes("pricing")) {
    title = "Best Pricing & Execution";
    subtitle = "Experience competitive spreads and superior execution across all markets.";
  } else if (path.includes("award")) {
    title = "Award-Winning Service";
    subtitle = "When you need a broker you can rely on, trust Axi to give you an edge.";
  }

  return (
    <div className="w-full relative overflow-hidden rounded-2xl">
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 w-full py-20 px-12 max-sm:py-12 max-sm:px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4 max-sm:text-3xl">{title}</h1>
          <p className="text-xl text-white max-w-3xl mx-auto max-sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AxiHero;
