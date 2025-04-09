
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AxiReadyTrade: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-800 to-gray-700 p-12 rounded-2xl max-sm:p-6 text-left">
      <h2 className="text-4xl font-bold text-white mb-4">Ready to trade your edge?</h2>
      <p className="text-xl text-white mb-8">
        Start trading with a global, award-winning broker.
      </p>
      
      <div className="flex gap-4">
        <Link to="/contact">
          <Button className="bg-white text-gray-800 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold rounded-md">Contact</Button>
        </Link>
      </div>
    </div>
  );
};

export default AxiReadyTrade;
