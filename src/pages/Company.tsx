
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CompanyHeader from "@/components/company/CompanyHeader";
import ValueSection from "@/components/company/ValueSection";

const Company: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        <CompanyHeader scrollToTop={scrollToTop} />
        
        <section className="mt-20 mb-20 w-full">
          <Card className="bg-[#232323] border-gray-700 text-white shadow-md w-full">
            <CardContent className="p-12 max-sm:p-6">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl mb-10 text-white font-gotham font-bold max-md:text-4xl max-sm:text-3xl">About DF717 & Company</h1>
                
                <div className="p-6 bg-[#262626] rounded-md">
                  <ValueSection />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Company;
