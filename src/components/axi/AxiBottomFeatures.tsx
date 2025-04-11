
import React from "react";
import { Shield, Users, BookOpen } from "lucide-react";

const AxiBottomFeatures: React.FC = () => {
  const features = [
    {
      title: "Fast & secure payments",
      description: "Trade securely with high-standard encryption and fast and easy ways to top up your trading account.",
      icon: <Shield className="h-12 w-12 text-white" />
    },
    {
      title: "Trading account types",
      description: "Trade at your level of expertise with our free 30-day demo account, or our two live accounts: standard and pro.",
      icon: <Users className="h-12 w-12 text-white" />
    },
    {
      title: "Axi community",
      description: "Trade with Axi for extensive educational resources, insights from experts and everything you need to grow and develop as a trader.",
      icon: <BookOpen className="h-12 w-12 text-white" />
    }
  ];

  return (
    <section className="py-16 bg-[#161616]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center transition-opacity duration-700 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AxiBottomFeatures;
