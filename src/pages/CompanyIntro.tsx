
import React from "react";
import Logo from "@/components/landing/Logo";
import { Link } from "react-router-dom";

const CompanyIntro: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <header className="flex justify-between items-center pt-14 max-sm:pt-5">
          <Logo />
          <Link 
            to="/" 
            className="text-white hover:text-gray-300 transition"
          >
            홈으로 돌아가기
          </Link>
        </header>
        
        <section className="mt-20 mb-20">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/60 via-purple-900/60 to-pink-900/60 p-12 max-sm:p-6">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="w-full h-full bg-[url('/lovable-uploads/5e944c9d-56dc-42b0-90e3-87b017e3bb8a.png')] bg-cover bg-center"></div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-6xl mb-16 text-white font-gotham font-bold max-md:text-5xl max-sm:text-4xl max-sm:mb-10">
                상황AI와 감정AI의 어셈블!
              </h1>
              
              <h2 className="text-5xl text-white font-gotham font-bold max-md:text-4xl max-sm:text-3xl">
                inDJ TACT AI <span className="text-3xl max-md:text-2xl max-sm:text-xl">논치 AI</span>
              </h2>
              
              <p className="text-xl text-white mt-10 max-w-2xl max-sm:text-lg">
                inDJ는 사용자의 상황과 감정에 딱 맞는 솔루션을 제공합니다.<br />
                나보다 나를 더 잘 아는 논치있는 AI를 만나보세요.
              </p>
              
              <div className="mt-16 flex gap-6 max-sm:flex-col">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl max-w-md max-sm:p-6">
                  <h3 className="text-2xl text-white font-bold mb-4">AI 기술 소개</h3>
                  <p className="text-white/90">
                    최첨단 AI 알고리즘을 활용하여 사용자의 감정과 상황을 실시간으로 분석합니다. 
                    패턴 인식과 딥러닝 기술을 통해 맞춤형 서비스를 제공합니다.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl max-w-md max-sm:p-6 max-sm:mt-4">
                  <h3 className="text-2xl text-white font-bold mb-4">회사 비전</h3>
                  <p className="text-white/90">
                    우리는 AI 기술을 통해 더 나은 금융 서비스를 제공하고자 합니다.
                    DF717의 혁신적인 접근으로 금융의 미래를 선도합니다.
                  </p>
                </div>
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default CompanyIntro;
