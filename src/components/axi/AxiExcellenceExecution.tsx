import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
const AxiExcellenceExecution: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <div ref={sectionRef} className="mb-20 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Excellence in execution</h2>
            <p className="text-gray-300 mb-6">Some networks slow you down. Ours speeds you up.</p>
            <p className="text-gray-300 mb-6">
              By making significant investments in world-leading technology, we can actively manage the path your trade takes through the Internet, 
              ensuring your trade takes the least congested – and therefore fastest – route every time. Combined with the ability to speed up the 
              client-side of your MT4 platform, when you execute with Axi you can be confident your trade will be delivered faster than with typical 
              ECN technologies.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/lovable-uploads/7d472582-2363-43c5-a528-62cc31984704.png" alt="Execution performance chart" className="max-w-full h-auto rounded-xl" />
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <img src="/lovable-uploads/ab227cf6-54f6-4b18-a524-ff414ddf1729.png" alt="ECN network diagram" className="max-w-full h-auto rounded-xl" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-white mb-6">Faster than ECN</h2>
            <p className="text-gray-300 mb-6">
              We believe that traditional ECN connections are too slow for today's traders; layers of networks, cables, firewalls 
              and third party platforms only add latency which costs the trader.
            </p>
            <p className="text-gray-300 mb-6">
              So what do we do? We go direct to 20+ top tier liquidity providers and use co-located servers in key locations around the world, 
              we utilise a shorter, therefore faster, connection. This simple approach results in faster execution, more accurate pricing 
              and fewer outages.
            </p>
            
            
          </div>
        </div>
      </div>
    </div>;
};
export default AxiExcellenceExecution;