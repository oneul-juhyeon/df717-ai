
import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/landing/Logo";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Bolt, Sparkles, Server, BarChart4, Brain, Monitor } from "lucide-react";

const Robot: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#0a0a1e] flex flex-col">
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
                <Link to="/technology" className="text-white hover:text-gray-300 px-4 py-2 transition">
                  Technology
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" onClick={e => {
                  e.preventDefault();
                  scrollToTop();
                }} className="text-white hover:text-gray-300 px-4 py-2 transition">
                  DF Robot
                </a>
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
            <Card className="bg-[#141432] border-indigo-900 text-white shadow-xl overflow-hidden">
              <CardContent className="p-12 max-sm:p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full mb-8 bg-[#0d0d24] border-b border-indigo-900">
                    <TabsTrigger value="overview" className="text-lg font-medium">OVERVIEW</TabsTrigger>
                    <TabsTrigger value="features" className="text-lg font-medium">FEATURES</TabsTrigger>
                    <TabsTrigger value="specs" className="text-lg font-medium">SPECIFICATIONS</TabsTrigger>
                  </TabsList>
                  
                  {/* OVERVIEW Section */}
                  <TabsContent value="overview" className="p-6 bg-[#191942] rounded-md">
                    <div className="prose prose-invert max-w-4xl mx-auto">
                      <h2 className="text-4xl font-bold mb-6 text-white flex items-center">
                        <Monitor className="mr-4 h-10 w-10 text-indigo-400" />
                        TRADING ROBOT
                      </h2>
                      <p className="text-xl text-gray-300 mb-12">
                        DF717의 트레이딩 로봇은 최첨단 AI 기술을 활용하여 금융 시장을 분석하고 최적의 거래 결정을 내립니다. 감정에 좌우되지 않는 객관적인 분석과 24시간 시장 모니터링으로 투자자에게 안정적인 수익을 제공합니다.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <Card className="bg-[#1d1d4f] border-indigo-800">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
                              <Brain className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">AI 기반 의사결정</h3>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">머신러닝과 딥러닝 기술을 통해 시장 패턴을 분석하고 최적의 거래 결정을 내립니다. 과거 데이터와 실시간 시장 정보를 종합적으로 분석하여 정확한 예측을 제공합니다.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#1d1d4f] border-indigo-800">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
                              <Bolt className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">초고속 거래 실행</h3>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">밀리세컨드 단위의 초고속 거래 실행 능력으로 시장 변화에 즉각적으로 대응합니다. 지연 없는 거래 실행으로 최적의 가격에 매매가 이루어집니다.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#1d1d4f] border-indigo-800">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
                              <BarChart4 className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">리스크 관리</h3>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">자동화된 리스크 관리 시스템으로 투자 안전성을 높입니다. 손실 제한, 포트폴리오 분산, 변동성 대응 전략 등 다양한 리스크 관리 기법을 적용합니다.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-[#1d1d4f] border-indigo-800">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
                              <Server className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">24/7 운영</h3>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">하루 24시간, 주 7일 중단 없는 시장 모니터링과 거래를 수행합니다. 글로벌 시장의 모든 시간대를 커버하며 투자 기회를 놓치지 않습니다.</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* FEATURES Section */}
                  <TabsContent value="features" className="p-6 bg-[#191942] rounded-md">
                    <div className="prose prose-invert max-w-4xl mx-auto">
                      <h2 className="text-4xl font-bold mb-6 text-white">FEATURES</h2>
                      <p className="text-xl text-gray-300 mb-8">
                        DF717 트레이딩 로봇의 핵심 기능과 특징을 소개합니다.
                      </p>
                      
                      <div className="mt-12 space-y-12">
                        <div className="bg-[#1d1d4f] border border-indigo-800 p-8 rounded-lg">
                          <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                            <Sparkles className="mr-3 h-6 w-6 text-indigo-400" />
                            자동화된 거래 시스템
                          </h3>
                          <p className="text-gray-300 mb-6">
                            사전 설정된 전략에 따라 24시간 자동으로 거래를 실행합니다. 사용자 개입 없이도 시장 조건에 맞춰 최적의 매매 타이밍을 포착하고 실행합니다.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#232360] p-4 rounded-md">
                              <h4 className="text-lg font-semibold mb-2 text-indigo-300">전략 기반 거래</h4>
                              <p className="text-gray-300">다양한 트레이딩 전략을 바탕으로 매매 결정을 내립니다. 트렌드 팔로잉, 반전 거래, 스캘핑 등 다양한 방식을 조합하여 최적의 결과를 도출합니다.</p>
                            </div>
                            <div className="bg-[#232360] p-4 rounded-md">
                              <h4 className="text-lg font-semibold mb-2 text-indigo-300">시장 분석</h4>
                              <p className="text-gray-300">기술적 분석과 펀더멘털 분석을 결합하여 포괄적인 시장 분석을 수행합니다. 차트 패턴, 지표, 뉴스 및 경제 데이터를 종합적으로 분석합니다.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-[#1d1d4f] border border-indigo-800 p-8 rounded-lg">
                          <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                            <Cpu className="mr-3 h-6 w-6 text-indigo-400" />
                            인공지능 학습 시스템
                          </h3>
                          <p className="text-gray-300 mb-6">
                            로봇 트레이더는 지속적으로 학습하고 성능을 향상시킵니다. 과거 거래 데이터와 결과를 분석하여 전략을 최적화하고 변화하는 시장 조건에 적응합니다.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#232360] p-4 rounded-md">
                              <h4 className="text-lg font-semibold mb-2 text-indigo-300">심층 강화 학습</h4>
                              <p className="text-gray-300">강화 학습 기법을 통해 로봇이 스스로 경험을 축적하고 보상을 최대화하는 방향으로 행동을 조정합니다. 시장 경험이 쌓일수록 더 정교한 결정을 내립니다.</p>
                            </div>
                            <div className="bg-[#232360] p-4 rounded-md">
                              <h4 className="text-lg font-semibold mb-2 text-indigo-300">패턴 인식</h4>
                              <p className="text-gray-300">딥러닝 알고리즘으로 복잡한 시장 패턴을 인식하고 예측합니다. 인간이 발견하기 어려운 미세한 패턴까지 포착하여 투자 결정에 반영합니다.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* SPECIFICATIONS Section */}
                  <TabsContent value="specs" className="p-6 bg-[#191942] rounded-md">
                    <div className="prose prose-invert max-w-4xl mx-auto">
                      <h2 className="text-4xl font-bold mb-6 text-white">SPECIFICATIONS</h2>
                      <p className="text-xl text-gray-300 mb-8">
                        DF717 트레이딩 로봇의 기술 사양 및 성능 지표입니다.
                      </p>
                      
                      <div className="bg-[#1d1d4f] border border-indigo-800 p-8 rounded-lg mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-white">기술 사양</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-indigo-300">하드웨어</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                              <li>고성능 서버 클러스터</li>
                              <li>초저지연 네트워크 인프라</li>
                              <li>이중화된 전원 및 네트워크</li>
                              <li>전용 FPGA 가속기</li>
                              <li>분산 처리 시스템</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-indigo-300">소프트웨어</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                              <li>자체 개발 AI 엔진</li>
                              <li>실시간 데이터 처리 시스템</li>
                              <li>분산 데이터베이스</li>
                              <li>자동 학습 알고리즘</li>
                              <li>보안 통신 프로토콜</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#1d1d4f] border border-indigo-800 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-6 text-white">성능 지표</h3>
                        <div className="space-y-6">
                          <div className="bg-[#232360] p-5 rounded-md">
                            <h4 className="text-lg font-semibold mb-3 text-indigo-300">실행 속도</h4>
                            <p className="text-gray-300">신호 감지에서 주문 실행까지 평균 5ms 이내</p>
                          </div>
                          <div className="bg-[#232360] p-5 rounded-md">
                            <h4 className="text-lg font-semibold mb-3 text-indigo-300">운영 시간</h4>
                            <p className="text-gray-300">99.99% 가동률 (연간 52분 이하의 다운타임)</p>
                          </div>
                          <div className="bg-[#232360] p-5 rounded-md">
                            <h4 className="text-lg font-semibold mb-3 text-indigo-300">데이터 처리</h4>
                            <p className="text-gray-300">초당 100만 개 이상의 시장 데이터 포인트 처리</p>
                          </div>
                          <div className="bg-[#232360] p-5 rounded-md">
                            <h4 className="text-lg font-semibold mb-3 text-indigo-300">분석 능력</h4>
                            <p className="text-gray-300">3,000개 이상의 자산을 실시간 모니터링 및 분석</p>
                          </div>
                        </div>
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

export default Robot;
