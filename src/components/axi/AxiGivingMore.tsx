
import React from "react";
import { DollarSign, TrendingUp, Users } from "lucide-react";

const AxiGivingMore: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="h-12 w-12 text-red-500" />,
      title: "Experience best pricing & execution",
      description: "We offer a rock-solid platform, lightning-fast execution, raw spreads and flexible leverage.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-red-500" />,
      title: "Discover advanced trading tools",
      description: "We're continually investing in innovative products and programmes to give you the upper hand.",
    },
    {
      icon: <Users className="h-12 w-12 text-red-500" />,
      title: "Receive an award-winning service",
      description: "With 24/7 support in your local language, you can benefit from our award-winning service, wherever you are.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Giving you more</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
        We never stop searching for better. We're constantly developing our services,<br />
        so we can give you the ultimate trading experience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-300 mb-6">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiGivingMore;
