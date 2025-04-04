
import React from "react";
import { Button } from "@/components/ui/button";

const AxiReadyTrade: React.FC = () => {
  return (
    <div className="bg-red-500 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to trade your edge?</h2>
        <p className="text-white text-lg mb-8">Start trading with a global, award-winning broker.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-500">
            TRY A DEMO FIRST
          </Button>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
            OPEN A LIVE ACCOUNT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AxiReadyTrade;
