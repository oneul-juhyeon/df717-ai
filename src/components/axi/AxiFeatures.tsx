
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Users } from "lucide-react";

const AxiFeatures: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="h-12 w-12 text-red-500" />,
      title: "Experience best pricing & execution",
      description: "We offer a rock-solid platform, lightning-fast execution, raw spreads and flexible leverage.",
      buttonText: "TRADE WITH SPEED",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-red-500" />,
      title: "Discover advanced trading tools",
      description: "We're continually investing in innovative products and programmes to give you the upper hand.",
      buttonText: "TRADE SMARTER",
    },
    {
      icon: <Users className="h-12 w-12 text-red-500" />,
      title: "Receive an award-winning service",
      description: "With 24/7 support in your local language, you can benefit from our award-winning service, wherever you are.",
      buttonText: "TRADE WITH SUPPORT",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
      {features.map((feature, index) => (
        <Card key={index} className="bg-[#1E1E1E] border-gray-700 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="mb-6 bg-[#262626] p-4 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-gray-300 mb-6">{feature.description}</p>
            <Button className="bg-red-600 hover:bg-red-700 text-white text-sm">
              {feature.buttonText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AxiFeatures;
