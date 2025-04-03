
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, BookOpen } from "lucide-react";

const AxiBottomFeatures: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-red-500" />,
      title: "Fast & secure payments",
      description: "Trade securely with high-standard encryption and fast and easy ways to top up your trading account.",
    },
    {
      icon: <FileText className="h-12 w-12 text-red-500" />,
      title: "Trading account types",
      description: "Trade at your level of expertise with our free 30-day demo account, or our two live accounts: standard and pro.",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-red-500" />,
      title: "Axi community",
      description: "Trade with Axi for extensive educational resources, insights from experts and everything you need to grow and develop as a trader.",
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
            <p className="text-gray-300 mb-4">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AxiBottomFeatures;
