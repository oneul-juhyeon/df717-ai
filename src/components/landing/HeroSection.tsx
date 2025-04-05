
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  className
}) => {
  return <div className={className}>
      <div className="space-y-4 container mx-auto py-6 sm:py-10 md:py-14">
        <h1 className="text-white leading-[1.1] font-gotham tracking-tight mb-4 sm:mb-6 md:mb-10 font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-left">
          AI FINANCE<br />
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-5 sm:mb-8 md:mb-10 max-w-xl font-normal text-left">Automate Your Investment with DF717</p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Button asChild className="bg-white text-black hover:bg-gray-200 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-full">
            <Link to="/home-intro">
              Introduction of company and AI technology
              <ChevronRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="border-white text-white hover:bg-gray-900 px-8 py-6 text-lg rounded-full">
            
          </Button>
        </div>
      </div>
    </div>;
};

export default HeroSection;
