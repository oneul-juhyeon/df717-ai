
import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/landing/Logo";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight, Cpu, Database, Globe, Lock, Server, Shield, BarChart } from "lucide-react";

const Technology: React.FC = () => {
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
          <Link to="/">
            <Logo />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link to="/" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/company" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Company
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" onClick={e => {
                  e.preventDefault();
                  scrollToTop();
                }} className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Technology
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/robot" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  DF Robot
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/axi-cfd" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  AXI CFD
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
        
        <section className="mt-20 mb-20">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-[#232323] border-gray-700 text-white shadow-xl overflow-hidden">
              <CardContent className="p-12 max-sm:p-6">
                <Tabs defaultValue="core" className="w-full">
                  <TabsList className="w-full mb-8 bg-[#1a1a1a] border-b border-gray-700">
                    <TabsTrigger value="core" className="text-lg font-medium">CORE COMPETENCE</TabsTrigger>
                    <TabsTrigger value="preface" className="text-lg font-medium">PREFACE</TabsTrigger>
                    <TabsTrigger value="isaac" className="text-lg font-medium">ISAAC</TabsTrigger>
                  </TabsList>
                  
                  {/* CORE COMPETENCE Section */}
                  <TabsContent value="core" className="p-6 bg-[#262626] rounded-md">
                    <div className="prose prose-invert max-w-4xl mx-auto">
                      <h2 className="text-4xl font-bold mb-6 text-white">CORE COMPETENCE</h2>
                      <p className="text-xl text-gray-300 mb-12">
                        DF는 차별화된 핵심 경쟁력을 만들어갑니다. 자체 개발한 PREFACE 플랫폼과 아이작 엔진을 통해 금융의 혁신을 이끌어 나갑니다.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <Card className="bg-[#2d2d2d] border-gray-700">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                              <Cpu className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">spec01</h3>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-bold mb-4 text-white">AI 간편투자 엔진 자체 개발</h4>
                            <p className="text-gray-300">자체 개발한 AI엔진 아이작과 플랫폼 PREFACE 를 보유하고 있습니다. 최근 3년간 실거래 운용을 통해 플랫폼 안정성을 검증하였습니다.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#2d2d2d] border-gray-700">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
                              <Globe className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">spec02</h3>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-bold mb-4 text-white">우수한 연구 인력</h4>
                            <p className="text-gray-300">국내외 유수대학, 올림피아드 수상자 등으로 구성된 우수한 연구 인력은, 4차례 이상의 검증 과정을 통해 채용됩니다.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#2d2d2d] border-gray-700">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center">
                              <Shield className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">spec03</h3>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-bold mb-4 text-white">고유의 연구 방법론 적용</h4>
                            <p className="text-gray-300">AI 엔진 개발 중 발생할 수 있는 오류나 미래 참조 이슈를 철저히 배제합니다. 데이터 및 연구 결과를 지속적으로 검증합니다.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#2d2d2d] border-gray-700">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center">
                              <Lock className="h-6 w-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">spec04</h3>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-bold mb-4 text-white">계좌 모니터링 및 보안</h4>
                            <p className="text-gray-300">실시간 모니터링 시스템을 통해 운용시 발생 가능한 이상 상황을 예방하고 대처합니다. 주문 오류가 발생하지 않도록 철저하게 관리합니다.</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* PREFACE Section */}
                  <TabsContent value="preface" className="p-6 bg-[#262626] rounded-md">
                    <div className="prose prose-invert max-w-4xl mx-auto">
                      <h2 className="text-4xl font-bold mb-6 text-white">PREFACE</h2>
                      <p className="text-xl text-gray-300 mb-8">
                        PREFACE는 AI 간편투자 서비스를 위한 DF의 고유 운용 플랫폼입니다.
                      </p>
                      
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4 text-white">content-preface</h3>
                        <h4 className="text-xl font-semibold mb-6 text-blue-400">Personalized Runtime Environments For Automated Customizing Engine</h4>
                        <p className="text-gray-300">투자에 있어 가장 중요한 것은 시장에 대한 예측일 것입니다. 흔히들, 시장은 예측하는 것이 아니라 대응하는 것이라는 이야기를 합니다. 하지만, 대응이라는 것도 결국 일정 기간의 예측을 기반으로 합니다. PREFACE는 예측할 수 있는 플랫폼을 만들자는 의미를 담았습니다.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <Card className="bg-[#2d2d2d] border-gray-700">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                              <Server className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">PREFACE-Account</h3>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">고객별, 계좌별로 모두 다른 포트폴리오를 운용할 수 있도록 계좌 플랫폼을 제공합니다. 수만 개의 계좌를 동시에 안정적으로 운용이 가능합니다.</p>
                            <div className="mt-2 text-sm text-blue-400">spec01</div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#2d2d2d] border-gray-700">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
                              <Cpu className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">PREFACE-Container</h3>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">투자 로직이 실제로 구동되며, 필요한 데이터들이 연산되는 플랫폼입니다. 데이터 기반 투자 방식을 엔진으로 구현하여 다양하게 운용할 수 있습니다.</p>
                            <div className="mt-2 text-sm text-indigo-400">spec02</div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#2d2d2d] border-gray-700">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center">
                              <Database className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">PREFACE-Database</h3>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">데이터를 가공하고 클렌징하는 것은 전략 운용과 시뮬레이션의 필수 요소입니다. 다양한 데이터를 쉽고 빠르게 이용할 수 있도록 제공합니다.</p>
                            <div className="mt-2 text-sm text-purple-400">spec03</div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#2d2d2d] border-gray-700">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center">
                              <Globe className="h-6 w-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">PREFACE-Web</h3>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">실시간으로 운용을 모니터링할 수 있도록 거래 및 계좌현황 등을 제공합니다. 고객이 자신의 운용 상황을 확인하고 지시할 수 있도록 지원합니다.</p>
                            <div className="mt-2 text-sm text-green-400">spec04</div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* ISAAC Section */}
                  <TabsContent value="isaac" className="p-6 bg-[#262626] rounded-md">
                    <div className="prose prose-invert max-w-4xl mx-auto">
                      <h2 className="text-4xl font-bold mb-6 text-white">ISAAC</h2>
                      <p className="text-xl text-gray-300 mb-8">
                        아이작(ISAAC)은 디셈버앤컴퍼니의 AI 간편투자 엔진입니다. 고유의 연구 방법론을 적용한 AI와 머신러닝 기술 집약체입니다.
                      </p>
                      
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4 text-white">content-isaac</h3>
                        <h4 className="text-xl font-semibold mb-6 text-blue-400">Intelligent Strategic<br/>Asset Allocation Core</h4>
                        <p className="text-gray-300">Isaac Newton은 일상생활에서 우주를 움직이는 중요한 물리 법칙을 발견 했습니다. 금융시장에서도 IT 기술을 바탕으로 우리 곁의 수많은 데이터를 해석한다면 시장 전체의 움직임을 이해하고 보다 나은 투자 성과를 만들어 낼 수 있다는 철학을 담았습니다.</p>
                      </div>
                      
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4 text-white">모델포트폴리오 산출</h3>
                        <div className="bg-[#2d2d2d] border border-gray-700 p-6 rounded-lg">
                          <div className="mb-6">
                            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-3">
                                <span className="text-blue-400">1</span>
                              </div>
                              종목 선정 모듈
                            </h4>
                            <p className="text-gray-300 pl-11">글로벌 시장 전체의 데이터를 바탕으로 AI/ML 기술을 접목하여 투자 종목을 선정합니다. 투자 유니버스를 대상으로 클러스터링 분석하고, 상승 가능성이 높은 대표 종목들을 선택합니다.</p>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                                <span className="text-indigo-400">2</span>
                              </div>
                              비중 결정 모듈
                            </h4>
                            <p className="text-gray-300 pl-11">선정된 종목들을 대상으로 AI 및 금융공학 기술을 사용하여 투자 비중을 결정합니다. 위험지표 기반으로 학습된 비중 결정 모듈을 거쳐, 제한 조건 내에서 가장 안정적인 포트폴리오를 완성합니다.</p>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                                <span className="text-purple-400">3</span>
                              </div>
                              일별 MP 산출
                            </h4>
                            <p className="text-gray-300 pl-11">아이작은 변화하는 시장 상황에 대응하기 위해, 매일 MP를 산출합니다. 아이작의 실시간 MP를 기반으로, 신규 고객과 기존 고객 모두 자신의 투자성향에 맞는 포트폴리오를 제공 받습니다.</p>
                          </div>
                        </div>
                        <div className="text-sm text-blue-400 mt-2">spec01</div>
                      </div>
                      
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4 text-white">매매 실행 및 모니터링</h3>
                        <div className="bg-[#2d2d2d] border border-gray-700 p-6 rounded-lg">
                          <div className="mb-6">
                            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-3">
                                <span className="text-blue-400">1</span>
                              </div>
                              자동 매매 모듈
                            </h4>
                            <p className="text-gray-300 pl-11">PREFACE와 아이작은 결정된 종목 및 비중에 대해 계좌별로 실시간 자동 매매합니다. 고객 간 주문 순서를 차별 없이 관리할 뿐 아니라, AI 기반으로 매매 타이밍을 학습하고 실행합니다.</p>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                                <span className="text-indigo-400">2</span>
                              </div>
                              실시간 모니터링
                            </h4>
                            <p className="text-gray-300 pl-11">계좌별 매매 상황을 실시간으로 모니터링하며, 발생할 수 있는 문제 상황에 대해 빠르게 대처합니다. 또한, 실시간 잔고 등 계좌 현황을 고객이 확인할 수 있도록 PC/모바일 등으로 정보를 전달합니다.</p>
                          </div>
                        </div>
                        <div className="text-sm text-indigo-400 mt-2">spec02</div>
                      </div>
                      
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4 text-white">리스크관리</h3>
                        <div className="bg-[#2d2d2d] border border-gray-700 p-6 rounded-lg">
                          <div className="mb-6">
                            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-3">
                                <span className="text-blue-400">1</span>
                              </div>
                              리스크 지표 점검
                            </h4>
                            <p className="text-gray-300 pl-11">고객 재산의 보호를 위해 리스크 지표에 대한 주기적인 점검을 실시합니다. 개별 상품 및 계좌들의 기존 리스크 지표 수치를 확인, 점검하는 작업과 추가 리스크 지표를 정의하고 발전시키는 연구가 진행됩니다.</p>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                                <span className="text-indigo-400">2</span>
                              </div>
                              전략 운용 회의
                            </h4>
                            <p className="text-gray-300 pl-11">리스크관리위원회 등을 통해 각 자산 배분 유형들의 개별 운용 상황 및 이슈를 주기적으로 점검하고, 수익성 향상 및 리스크 관리 방향에 대한 고민합니다.</p>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                                <span className="text-purple-400">3</span>
                              </div>
                              자산 배분 엔진 고도화
                            </h4>
                            <p className="text-gray-300 pl-11">아이작 엔진과 PREFACE 플랫폼은 끊임없이 고도화되고 있습니다. 유수 인력을 통한 기술 개발 및 리서치를 통해, 더 좋은 자산 배분 운용을 위한 노력이 계속되고 있습니다.</p>
                          </div>
                        </div>
                        <div className="text-sm text-purple-400 mt-2">spec03</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Technology;
