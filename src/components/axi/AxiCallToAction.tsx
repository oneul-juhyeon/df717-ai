
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AxiCallToAction: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#e5323e] to-[#ff5757] p-12 rounded-2xl max-sm:p-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-4 max-sm:text-2xl">Ready to trade your edge?</h2>
      <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
        Start trading with a global, award-winning broker.
      </p>
      
      <Link to="/contact">
        <Button className="bg-white text-[#e5323e] hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
          Contact
        </Button>
      </Link>
    </div>
  );
};

export default AxiCallToAction;
