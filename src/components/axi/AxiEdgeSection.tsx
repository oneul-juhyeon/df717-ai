
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const AxiEdgeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={sectionRef} className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-white mb-6 max-sm:text-3xl">Trade your edge</h2>
        <p className="text-gray-300 text-lg mb-6">
          Whether you're new or a pro, if gold is your goal or
          analytics are your answer, there's one thing that every
          trader looks for. Edge. At Axi, we've got all the trading
          tools to help you unleash yours.
        </p>
      </div>
      
      <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center">
        <div className="absolute inset-0 bg-red-600/20 z-0"></div>
        <div className="w-40 h-40 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-10">
          <h3 className="text-5xl font-bold text-white">Edge</h3>
          <Button size="icon" variant="ghost" className="absolute rounded-full bg-white/20 w-20 h-20 flex items-center justify-center">
            <Play className="h-10 w-10 text-white" />
          </Button>
        </div>
      </div>
      
      <div className="col-span-2 text-center mt-12 max-lg:mt-6">
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We never stop searching for better. We're constantly developing our services,
          so we can give you the ultimate trading experience.
        </p>
      </div>
    </div>
  );
};

export default AxiEdgeSection;
