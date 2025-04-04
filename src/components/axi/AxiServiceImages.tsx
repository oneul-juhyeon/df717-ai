
import React from "react";

const AxiServiceImages: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center md:order-1 order-2">
        <img 
          src="/lovable-uploads/96e3c620-dbb4-4e53-95c6-745524671b45.png" 
          alt="Personalized online trading consultation" 
          className="max-w-full rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div className="md:order-2 order-1 text-white">
        <h2 className="text-3xl font-bold mb-6">Personalised service</h2>
        <p className="text-gray-300 leading-relaxed">
          Because trading is a personal journey and every trader is different, we give you personalised service. 
          The moment you join Axi we'll connect you with a Relationship Manager dedicated to ensuring you have 
          all the tools and resources you need to discover your trading edge.
        </p>
      </div>
    </div>
  );
};

export default AxiServiceImages;
