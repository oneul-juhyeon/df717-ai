
import React from "react";
import { Button } from "@/components/ui/button";

const AxiCallToAction: React.FC = () => {
  return (
    <div className="text-center bg-[#1E1E1E] p-12 rounded-2xl border border-gray-700 max-sm:p-6">
      <h2 className="text-3xl font-bold text-white mb-4 max-sm:text-2xl">Ready to trade your edge?</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Start trading with a global, award-winning broker.
      </p>
      
      <div className="flex gap-4 justify-center max-sm:flex-col">
        <Button variant="outline" className="border-white text-white hover:bg-gray-800">
          TRY A FREE DEMO
        </Button>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          OPEN A LIVE ACCOUNT
        </Button>
      </div>
    </div>
  );
};

export default AxiCallToAction;
