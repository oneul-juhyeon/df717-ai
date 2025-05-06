
import React from "react";
import { Separator } from "@/components/ui/separator";
import CompanyValueCards from "./CompanyValueCards";

const CompanyBrandSection: React.FC = () => {
  return <div className="w-full mb-8 scroll-animate opacity-0">
      <div className="relative p-0">
        <div className="relative z-10">
          {/* Philosophy Section */}
          <h1 className="text-2xl font-bold mb-6 flex items-center justify-center text-white">
            DF717 Philosophy
          </h1>
          
          <div className="scroll-animate opacity-0">
            <p className="text-lg text-gray-300 mb-4">At DF717, "DF" stands for Destiny Finance.

we believe that "destiny" is not merely fate — it's about the unique purpose and calling that
God has already intentionally designed for every individual.</p>
            <p className="text-lg text-gray-300 mb-4">
              In other words, it refers to the direction a person should take in life and the reason for their existence, all within God's divine plan.
            </p>
            <p className="text-lg text-gray-300 mb-4">Our mission is to walk alongside individuals and businesses
as they pursue that God-given destiny, providing financial guidance, practical tools,
and support grounded in trust, purpose, and biblical stewardship.</p>
            <p className="text-lg text-gray-300 mb-4">At DF717, "717" represents Revelation 7:17.
We believe that the journey to discovering our destiny and living in true fulfillment begins with the promise found in Rev 7:17.</p>
            <p className="text-lg text-gray-300 italic mb-4">
              "For the Lamb in the midst of the throne will be their shepherd.<br />
              And he will guide them to springs of living water.<br />
              And God will wipe away every tear from their eyes." – Revelation 7:17
            </p>
            <p className="text-lg text-gray-300">
              DF717 is here to help you move forward in faith, walking with our Shepherd, Jesus Christ — toward the life you were created to live.
            </p>
          </div>
          
          <div className="relative">
            <Separator className="bg-[#333333] h-px my-24" />
          </div>
          
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-center text-white">
            Values
          </h2>
          
          <div className="space-y-24 mt-6">
            <div className="scroll-animate opacity-0">
              <p className="text-lg text-gray-300">At DF717, we're constantly engineering next-generation technologies to shape the future. 
With reliable data and sophisticated systems, we create smarter ways to live.</p>
            </div>
            
            <div className="relative">
              <Separator className="bg-[#333333] h-px my-24" />
            </div>
            
            <div className="scroll-animate opacity-0">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Brand Definition
              </h2>
              <p className="text-lg text-gray-300">A company driving change and innovation in financial markets through technological excellence.</p>
            </div>
            
            <div className="relative">
              <Separator className="bg-[#333333] h-px my-24" />
            </div>
            
            <div className="scroll-animate opacity-0">
              <h2 className="text-2xl font-bold mb-6 text-white">Brand Key Statement</h2>
              <p className="text-lg text-gray-300">
                Without Love, We are nothing.
              </p>
            </div>
            
            <div className="relative">
              <Separator className="bg-[#333333] h-px my-24" />
            </div>
            
            <div className="text-center mb-2 scroll-animate opacity-0">
              <h2 className="text-2xl font-bold text-white">Brand Core Values</h2>
            </div>
            
            <div className="scroll-animate opacity-0 mt-0">
              <CompanyValueCards />
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default CompanyBrandSection;
