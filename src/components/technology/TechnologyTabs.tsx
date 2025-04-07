
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CoreCompetence from "./CoreCompetence";
import PrefaceComponent from "./Preface";
import IsaacComponent from "./Isaac";

const TechnologyTabs: React.FC = () => {
  return <Card className="bg-[#232323] border-gray-700 text-white shadow-xl overflow-hidden">
      <CardContent className="p-12 max-sm:p-6">
        <Tabs defaultValue="core" className="w-full">
          <TabsList className="w-full mb-8 bg-[#1a1a1a] border-b border-gray-700">
            <TabsTrigger 
              value="core" 
              className="text-lg font-medium text-[#CCCCCC] data-[state=active]:text-white data-[state=active]:border-white"
            >
              CORE COMPETENCE
            </TabsTrigger>
            <TabsTrigger 
              value="preface" 
              className="text-lg font-medium text-[#CCCCCC] data-[state=active]:text-white data-[state=active]:border-white"
            >
              DF717
            </TabsTrigger>
            <TabsTrigger 
              value="isaac" 
              className="text-lg font-medium text-[#CCCCCC] data-[state=active]:text-white data-[state=active]:border-white"
            >
              HANNAH
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="core" className="p-6 bg-[#262626] rounded-md">
            <CoreCompetence />
          </TabsContent>
          
          <TabsContent value="preface" className="p-6 bg-[#262626] rounded-md">
            <PrefaceComponent />
          </TabsContent>
          
          <TabsContent value="isaac" className="p-6 bg-[#262626] rounded-md">
            <IsaacComponent />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>;
};

export default TechnologyTabs;
