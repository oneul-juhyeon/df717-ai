
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AxiReadyTrade: React.FC = () => {
  return (
    <div className="w-full bg-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to trade your edge?</h2>
        <p className="text-xl text-white mb-8">
          Start trading with a global, award-winning broker.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-gray-600 hover:bg-gray-700 text-white text-lg font-semibold px-8 py-6 h-auto rounded-md">Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AxiReadyTrade;
