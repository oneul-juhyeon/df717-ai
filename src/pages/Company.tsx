
import React, { useState } from "react";
import Logo from "@/components/landing/Logo";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Lightbulb, Heart, Zap } from "lucide-react";

const Company: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <header className="flex justify-between items-center pt-14 max-sm:pt-5">
          <Logo />
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link to="/home-intro" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" onClick={e => {
                  e.preventDefault();
                  scrollToTop();
                }} className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Company
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#services" className="text-white hover:text-gray-300 px-4 py-2 transition">Technology</Link>
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
              <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl mb-10 text-white font-gotham font-bold max-md:text-4xl max-sm:text-3xl">
                  About December & Company
                </h1>
                
                <Tabs defaultValue="why-df" className="w-full">
                  <TabsList className="bg-[#222] mb-8 border-b border-gray-700">
                    <TabsTrigger 
                      value="why-df" 
                      className="data-[state=active]:bg-[#333] data-[state=active]:text-white text-gray-300"
                    >
                      <Lightbulb className="mr-2 h-4 w-4" />
                      Why DF?
                    </TabsTrigger>
                    <TabsTrigger 
                      value="value" 
                      className="data-[state=active]:bg-[#333] data-[state=active]:text-white text-gray-300"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Value
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="why-df" className="p-6 bg-[#1a1a1a] rounded-md">
                    <div className="prose prose-invert max-w-4xl">
                      <h2 className="text-3xl font-bold mb-6 flex items-center">
                        <Lightbulb className="mr-3 h-6 w-6 text-yellow-400" />
                        Why Choose DF717?
                      </h2>
                      
                      <p className="text-lg mb-6">
                        DF717 is a leading AI trading company that leverages cutting-edge technology to revolutionize the financial market. Our proprietary algorithms analyze market trends, economic indicators, and global events in real-time to make informed trading decisions.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                        <Card className="bg-[#222] border-[#333]">
                          <CardHeader>
                            <CardTitle className="text-xl flex items-center">
                              <Zap className="mr-2 h-5 w-5 text-blue-400" />
                              AI-Powered Trading
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Our advanced AI algorithms process millions of data points per second, identifying patterns and trends that human traders might miss, giving you a competitive edge in the market.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#222] border-[#333]">
                          <CardHeader>
                            <CardTitle className="text-xl flex items-center">
                              <Zap className="mr-2 h-5 w-5 text-green-400" />
                              Risk Management
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>We employ sophisticated risk management techniques to protect your investments. Our AI continuously monitors market conditions to minimize risk and maximize returns.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#222] border-[#333]">
                          <CardHeader>
                            <CardTitle className="text-xl flex items-center">
                              <Zap className="mr-2 h-5 w-5 text-purple-400" />
                              Tailored Solutions
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Our trading strategies are customized to meet your specific financial goals and risk tolerance. We believe in personalized approaches that adapt to your unique situation.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#222] border-[#333]">
                          <CardHeader>
                            <CardTitle className="text-xl flex items-center">
                              <Zap className="mr-2 h-5 w-5 text-red-400" />
                              Transparency
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>We provide complete transparency in our trading operations. You'll have access to detailed reports and analytics that show exactly how your investments are performing.</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="value" className="p-6 bg-[#1a1a1a] rounded-md">
                    <div className="prose prose-invert max-w-4xl">
                      <h2 className="text-3xl font-bold mb-6 flex items-center">
                        <Heart className="mr-3 h-6 w-6 text-red-400" />
                        Our Values
                      </h2>
                      
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-4">가치</h3>
                        <p className="text-lg">디셈버앤컴퍼니는 더욱 뛰어난 기술을 연구합니다.<br />
                        정교한 기술과 데이터를 바탕으로 보다 나은 삶을 설계합니다.</p>
                      </div>
                      
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-4">기업 브랜드 정의</h3>
                        <p className="text-lg">기술력을 기반으로 금융시장의 변화와 혁신을 이루는 기업</p>
                      </div>
                      
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-4">기업브랜드 주요 스테이트먼트</h3>
                        <p className="text-xl font-bold italic">Data Driven, Life Inspired</p>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-8">기업브랜드 주요 가치</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <Card className="bg-[#222] border-[#333]">
                          <CardHeader>
                            <CardTitle className="text-xl">
                              주요가치01<br />
                              <span className="text-blue-400 font-bold">Innovative Perspective</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-bold mb-4">세상을 바꾸는 혁신적인 관점</h4>
                            <p>디셈버앤컴퍼니는 어려운 길을 피하지 않고 혁신을 추구합니다. 세상에 없던 독창적인 사고로 새로운 길을 개척하며 세상을 바꿀 만한 길을 제시합니다.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#222] border-[#333]">
                          <CardHeader>
                            <CardTitle className="text-xl">
                              주요가치02<br />
                              <span className="text-green-400 font-bold">Outstanding Technology</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-bold mb-4">독보적인 테크놀로지</h4>
                            <p>디셈버앤컴퍼니는 우수한 연구 개발진을 통해 지속적으로 기술을 연구합니다. 정교한 기술과 데이터를 통해 보다 나은 삶을 설계하고 만들어갑니다.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#222] border-[#333]">
                          <CardHeader>
                            <CardTitle className="text-xl">
                              주요가치03<br />
                              <span className="text-yellow-400 font-bold">Trustworthy Attitude</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-bold mb-4">신뢰할 수 있는 태도</h4>
                            <p>디셈버앤컴퍼니는 사람들에게 필요한 편리하고 가치있는 서비스를 제공합니다. 꾸준하고 안정감이 느껴지는 신뢰할 수 있는 태도를 견지합니다.</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Company;
