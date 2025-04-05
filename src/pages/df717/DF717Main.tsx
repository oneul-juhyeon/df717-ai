
import React from "react";
import { Link } from "react-router-dom";
import DF717Layout from "@/components/df717/DF717Layout";
import DF717ArticleHeader from "@/components/df717/DF717ArticleHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Brain, Cpu, MonitorSmartphone, ArrowRight } from "lucide-react";

const DF717Main: React.FC = () => {
  return (
    <DF717Layout>
      <div className="prose prose-invert max-w-none text-left">
        <DF717ArticleHeader 
          title="What is DF717?"
          subtitle="DF717 is a robot designed to provide simplified AI investment services."
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">DF717 = Destiny Finance 717</h2>
          <p className="text-gray-300">
            All investment uncertainty disturbs our inner peace and undermines true financial shalom. 
            DF717 is a robot that helps investors manage uncertainty with precision and gain peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mr-4">
                  <Server className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">DF717-Account</h3>
                  <p className="text-gray-300 mt-2">
                    Each customer and account can operate a unique portfolio. The system is stable enough to manage 
                    tens of thousands of accounts simultaneously.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center mr-4">
                  <Cpu className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">DF717-Container</h3>
                  <p className="text-gray-300 mt-2">
                    This is the platform where investment logic operates and necessary data is processed. 
                    It enables flexible AI-powered investment logic execution.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-4">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">DF717-Database</h3>
                  <p className="text-gray-300 mt-2">
                    Processing and cleansing data is essential for strategy operation and simulation. 
                    DF717 ensures fast and accurate data handling.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center mr-4">
                  <MonitorSmartphone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">DF717-Web</h3>
                  <p className="text-gray-300 mt-2">
                    Provides real-time operation monitoring, account status, and transaction updates. 
                    Partners can check and give instructions through web or mobile.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-white">HANNAH - The Core AI Engine</h2>
          <p className="text-gray-300 mb-8">
            HANNAH is the core AI engine of DF717, developed with proprietary methodology and advanced machine learning.
          </p>
          
          <Card className="bg-[#141432] border-indigo-900 text-white">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold mb-4 text-white">Intelligent Strategic Asset Allocation Core</h3>
              <p className="text-gray-300">
                Hannah is symbolic of patience and answered prayer. Investing demands perseverance through uncertainty. 
                HANNAH responds with trusted strategies and reliable analysis to bring peace and results.
              </p>
              
              <div className="mt-6 text-sm">
                <Link to="/df717/ai-strategy" className="text-indigo-400 hover:text-indigo-300 flex items-center">
                  Learn more about HANNAH AI Strategy 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DF717Layout>
  );
};

export default DF717Main;
