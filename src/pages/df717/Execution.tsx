
import React from "react";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, Gauge, BarChart4 } from "lucide-react";

const Execution: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="Execution Logic"
          subtitle="How DF717 executes trades with precision and optimal timing."
        />
        
        <div className="mb-12">
          <p className="text-gray-300">
            The execution logic of DF717 is built around precision, speed, and efficiency. Our system is designed to minimize slippage, 
            reduce market impact, and ensure that trades are executed at the most favorable prices possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Low-Latency Infrastructure</h3>
                  <p className="text-gray-300 mt-2">
                    Our cutting-edge infrastructure ensures that trade orders are processed and executed within milliseconds, 
                    giving us a competitive edge in fast-moving markets.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Optimal Timing Algorithms</h3>
                  <p className="text-gray-300 mt-2">
                    AI-powered algorithms determine the best time to execute trades, taking into account market conditions, 
                    volume, volatility, and historical patterns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-4">
                  <Gauge className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Smart Order Routing</h3>
                  <p className="text-gray-300 mt-2">
                    Our system intelligently routes orders across multiple venues to find the best execution price and 
                    minimize market impact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center mr-4">
                  <BarChart4 className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Real-time Performance Analytics</h3>
                  <p className="text-gray-300 mt-2">
                    Continuous monitoring and analysis of execution quality allows for immediate adjustments to 
                    improve performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DF717Layout>
  );
};

export default Execution;
