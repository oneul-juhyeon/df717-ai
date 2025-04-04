
import React from "react";
import { Button } from "@/components/ui/button";

const AxiFeatureBenefits: React.FC = () => {
  const features = [
    {
      title: "Experience best pricing & execution",
      description: "We offer a rock-solid platform, lightning-fast execution, raw spreads and flexible leverage.",
      buttonText: "TRADE WITH SPEED",
      iconBg: "bg-red-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Discover advanced trading tools",
      description: "We're continually investing in innovative products and programmes to give you the upper hand.",
      buttonText: "TRADE SMARTER",
      iconBg: "bg-red-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Receive an award-winning service",
      description: "With 24/7 support in your local language, you can benefit from our award-winning service, wherever you are.",
      buttonText: "TRADE WITH SUPPORT",
      iconBg: "bg-red-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-[#161616]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Giving you more</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          We never stop searching for better. We're constantly developing our services,
          so we can give you the ultimate trading experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className={`w-24 h-24 rounded-full ${feature.iconBg} flex items-center justify-center mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-300 mb-6">
              {feature.description}
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white mt-auto">
              {feature.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AxiFeatureBenefits;
