
import React from "react";
import { Lightbulb, Bot, Handshake } from "lucide-react";

const CompanyValueCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
      <div className="space-y-6">
        <div className="flex items-center justify-center mb-6">
          <Lightbulb className="text-white" size={48} strokeWidth={1.5} />
        </div>
        <h4 className="text-2xl font-bold text-white">
          Innovative Perspective
        </h4>
        <p className="text-gray-300">
          DF717 pioneers new paths with fearless innovation. Through unparalleled creativity, we lead change and propose solutions that can transform the world.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center justify-center mb-6">
          <Bot className="text-white" size={48} strokeWidth={1.5} />
        </div>
        <h4 className="text-2xl font-bold text-white">
          Outstanding Technology
        </h4>
        <p className="text-gray-300">
          We develop cutting-edge technologies through continuous research and data refinement. Our goal is to design and deliver a better life through technology.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center justify-center mb-6">
          <Handshake className="text-white" size={48} strokeWidth={1.5} />
        </div>
        <h4 className="text-2xl font-bold text-white">
          Trustworthy Attitude
        </h4>
        <p className="text-gray-300">
          We provide consistent, dependable services built on trust. DF717 stands as a reliable partner for those navigating financial innovation.
        </p>
      </div>
    </div>
  );
};

export default CompanyValueCards;
