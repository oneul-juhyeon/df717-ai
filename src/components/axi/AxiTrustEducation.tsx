
import React, { useEffect, useRef } from "react";
import { BookOpen, GraduationCap } from "lucide-react";

const AxiTrustEducation: React.FC = () => {
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
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl text-white font-bold mb-6">Education to help give you an edge</h2>
        <p className="text-gray-300 mb-4">
          We want you to succeed as a trader, so we use our experience and expertise to ensure you have access to top educational resources designed to improve your trading knowledge and help find an edge.
        </p>
        <p className="text-gray-300 mb-4">
          Our education centre is full of resources you can use to become a more informed trader, from video tutorials and eBooks to expert market commentary, industry insights and community groups
        </p>
        <p className="text-gray-300 mb-6">
          You can also take advantage of our exclusive partnership with the London Stock Exchange affiliated Knightsbridge Trading Academy which provides you with complimentary access to online trading courses led by accredited tutors.
        </p>
        <p className="text-gray-300 mb-8">
          When you want to become a smarter trader, trust education from the experts.
        </p>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-sm h-64 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 shadow-lg">
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#161616] rounded-full flex items-center justify-center">
            <GraduationCap className="h-10 w-10 text-red-500" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-[#161616] rounded-full flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-red-500" />
          </div>
          <div className="h-full flex items-center justify-center">
            <h3 className="text-2xl text-white font-bold text-center">
              Comprehensive Trading Education
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiTrustEducation;
