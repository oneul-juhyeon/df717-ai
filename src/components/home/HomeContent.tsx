
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomeContent: React.FC = () => {
  return (
    <Card className="bg-[#232323] border-gray-700 text-white shadow-md">
      <CardContent className="p-12 max-sm:p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl mb-10 text-white font-gotham font-bold max-md:text-4xl max-sm:text-3xl">
            Data Driven, Life Inspired
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">Technologies</h2>
              <p className="text-lg text-gray-300 mb-6">
                With years of proven experience in the financial market, we are 
                continuously developing cutting-edge technologies to transform the industry.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our proprietary algorithms and machine learning models can identify patterns 
                that humans might miss, giving you a competitive edge in trading.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 md:mt-0">
              <h2 className="text-3xl font-bold text-white mb-5">December & Company</h2>
              <p className="text-lg text-gray-300 mb-6">
                We are a team of experts in AI, machine learning, and financial markets, 
                dedicated to bringing innovative solutions to traders worldwide.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our mission is to democratize access to sophisticated trading algorithms, 
                making them accessible to both institutions and individual traders.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                About Us
              </Button>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#2a2a2a] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">DF Robot</h3>
                <p className="text-gray-300 mb-6">
                  Fully-automated trading system powered by advanced AI algorithms.
                </p>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                  Explore
                </Button>
              </div>
              
              <div className="bg-[#2a2a2a] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">AXI CFD</h3>
                <p className="text-gray-300 mb-6">
                  Contract for Difference trading with enhanced accuracy and risk management.
                </p>
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                  Explore
                </Button>
              </div>
              
              <div className="bg-[#2a2a2a] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">API Integration</h3>
                <p className="text-gray-300 mb-6">
                  Seamlessly integrate our algorithms with your existing trading platforms.
                </p>
                <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeContent;
