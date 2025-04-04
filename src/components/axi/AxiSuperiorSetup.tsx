
import React, { useEffect, useRef } from "react";

const AxiSuperiorSetup: React.FC = () => {
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
    <div ref={sectionRef} className="mb-20 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">A superior setup. No comparison.</h2>
            <p className="text-gray-300 mb-6">
              No matter what front end device or connection you use, our specialised low latency network supercharges your back-end execution. 
              That means you'll get faster speeds and greater reliability than the same setup in the same conditions on a different network.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/ee164e58-7962-4059-9bce-c619cf1a4484.png" 
              alt="Multi-device trading setup" 
              className="max-w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiSuperiorSetup;
