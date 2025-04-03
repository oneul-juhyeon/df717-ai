
import React from "react";
import Logo from "@/components/landing/Logo";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanyIntro: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <header className="flex justify-between items-center pt-14 max-sm:pt-5">
          <Logo />
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link to="/" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#about" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#services" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#team" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Team
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#contact" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
        
        <section className="mt-20 mb-20">
          <Card className="bg-[#111] border-[#222] text-white">
            <CardContent className="p-12 max-sm:p-6">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl mb-16 text-white font-gotham font-bold max-md:text-4xl max-sm:text-3xl max-sm:mb-10">
                  상황AI와 감정AI의 어셈블!
                </h1>
                
                <h2 className="text-4xl text-white font-gotham font-bold max-md:text-3xl max-sm:text-2xl mb-10">
                  inDJ TACT AI <span className="text-3xl max-md:text-2xl max-sm:text-xl">논치 AI</span>
                </h2>
                
                <div className="prose prose-invert max-w-3xl text-lg space-y-6">
                  <p className="text-white/90 italic">
                    "Matthew 24:7, "The nation will rise against the nation, the nation against the nation, and there will be famine and earthquakes everywhere."
                  </p>
                  
                  <p className="text-white/90">
                    Since thousands of years ago, the Bible has foreshadowed the era of famine at the end.
                    Living in the last era, we are already experiencing global economic hardship.
                  </p>
                  
                  <p className="text-white/90 font-bold mt-6">
                    DF717 is an ark of salvation to prepare for famine through financial innovation using AI technology.
                  </p>
                </div>
                
                <div className="mt-16 flex gap-6 max-sm:flex-col">
                  <Card className="bg-[#222] border-[#333] p-0 overflow-hidden flex-1">
                    <CardHeader className="p-6 pb-3">
                      <CardTitle className="text-2xl text-white">AI 기술 소개</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <p className="text-white/90">
                        최첨단 AI 알고리즘을 활용하여 사용자의 감정과 상황을 실시간으로 분석합니다. 
                        패턴 인식과 딥러닝 기술을 통해 맞춤형 서비스를 제공합니다.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#222] border-[#333] p-0 overflow-hidden flex-1">
                    <CardHeader className="p-6 pb-3">
                      <CardTitle className="text-2xl text-white">회사 비전</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <p className="text-white/90">
                        우리는 AI 기술을 통해 더 나은 금융 서비스를 제공하고자 합니다.
                        DF717의 혁신적인 접근으로 금융의 미래를 선도합니다.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute right-10 bottom-10 max-sm:right-5 max-sm:bottom-5">
                  <div className="flex flex-col items-center">
                    <div className="flex">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-full relative">
                          <div className="absolute w-4 h-4 bg-white rounded-full top-1 left-1"></div>
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-pink-600 rounded-full relative">
                          <div className="absolute w-4 h-4 bg-white rounded-full top-1 left-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 px-3 py-2 rounded-full bg-white/20 backdrop-blur">
                      <span className="text-white font-bold">Need AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default CompanyIntro;
