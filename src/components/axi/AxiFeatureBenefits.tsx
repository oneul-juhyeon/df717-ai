
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AxiFeatureBenefits: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Giving you more</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We never stop searching for better. We're constantly developing our services,
          so we can give you the ultimate trading experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">Experience best pricing & execution</h3>
          <p className="text-gray-700 mb-4">
            We offer a rock-solid platform, lightning-fast execution, raw spreads and flexible leverage.
          </p>
          <Button variant="outline" className="mt-auto border-red-500 text-red-500 hover:bg-red-50">
            TRADE WITH SPEED
          </Button>
        </div>
        
        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">Discover advanced trading tools</h3>
          <p className="text-gray-700 mb-4">
            We're continually investing in innovative products and programmes to give you the upper hand.
          </p>
          <Button variant="outline" className="mt-auto border-red-500 text-red-500 hover:bg-red-50">
            TRADE SMARTER
          </Button>
        </div>
        
        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">Receive an award-winning service</h3>
          <p className="text-gray-700 mb-4">
            With 24/7 support in your local language, you can benefit from our award-winning service, wherever you are.
          </p>
          <Button variant="outline" className="mt-auto border-red-500 text-red-500 hover:bg-red-50">
            TRADE WITH SUPPORT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AxiFeatureBenefits;
