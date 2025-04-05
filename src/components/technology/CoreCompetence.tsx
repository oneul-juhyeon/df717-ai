import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Cpu, Database, Globe, Lock, Shield } from "lucide-react";
const CoreCompetence: React.FC = () => {
  return <div className="prose prose-invert max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white">CORE COMPETENCE</h2>
      <p className="text-xl text-gray-300 mb-12">DF717은 차별화된 핵심 경쟁력을 만들어갑니다. 자체 개발한 DF717 로봇과 HANNAH 엔진을 통해 금융의 혁신을 이끌어 나갑니다.</p>
      
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
            <p className="text-gray-300">자체 개발한 AI엔진 HANNAH와 DF717로봇을 보유하고 있습니다. 최근 10개년 백테스팅 및 실거래 운용을 통해 시스템 안정성을 검증하고 있습니다.</p>
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
            <h4 className="font-bold mb-4 text-white">국내외 우수한 연구 인력</h4>
            <p className="text-gray-300">영성, 인성, 전문성 등 다양한 영역에서 까다로운 HR기준을 통해 검증된 인재만이 채용됩니다.</p>
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
    </div>;
};
export default CoreCompetence;