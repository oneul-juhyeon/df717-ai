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
      <div className="space-y-4 container mx-auto py-14 max-sm:py-6">
        <h1 className="text-white leading-[1.1] font-gotham tracking-tight mb-10 font-extrabold text-9xl text-left">
          AI FINANCE<br />
        </h1>
        
        <p className="text-3xl text-white max-sm:text-lg mb-10 max-w-xl font-normal text-left">Automate Your Investment with DF717</p>
        
        <div className="flex gap-6 max-sm:flex-col max-sm:gap-4">
          <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-full">
            <Link to="/home-intro">
              Introduction of company and AI technology
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="border-white text-white hover:bg-gray-900 px-8 py-6 text-lg rounded-full">
            
          </Button>
        </div>
      </div>
    </div>;
};
export default HeroSection;