
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Zap } from "lucide-react";

const WhyDFSection: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
        <Lightbulb className="mr-3 h-6 w-6 text-yellow-500" />
        Why Choose DF717?
      </h2>
      
      <p className="text-lg mb-6 text-gray-300">
        DF717 is a leading AI trading company that leverages cutting-edge technology to revolutionize the financial market. Our proprietary algorithms analyze market trends, economic indicators, and global events in real-time to make informed trading decisions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-white">
              <Zap className="mr-2 h-5 w-5 text-blue-500" />
              AI-Powered Trading
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Our advanced AI algorithms process millions of data points per second, identifying patterns and trends that human traders might miss, giving you a competitive edge in the market.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-white">
              <Zap className="mr-2 h-5 w-5 text-green-500" />
              Risk Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">We employ sophisticated risk management techniques to protect your investments. Our AI continuously monitors market conditions to minimize risk and maximize returns.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-white">
              <Zap className="mr-2 h-5 w-5 text-purple-500" />
              Tailored Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Our trading strategies are customized to meet your specific financial goals and risk tolerance. We believe in personalized approaches that adapt to your unique situation.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-white">
              <Zap className="mr-2 h-5 w-5 text-red-500" />
              Transparency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">We provide complete transparency in our trading operations. You'll have access to detailed reports and analytics that show exactly how your investments are performing.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhyDFSection;
