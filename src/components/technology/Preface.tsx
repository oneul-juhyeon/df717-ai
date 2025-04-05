import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Server, Cpu, Database, Globe } from "lucide-react";
const PrefaceComponent: React.FC = () => {
  return <div className="prose prose-invert max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white">DF717</h2>
      <p className="text-xl text-gray-300 mb-8">DF717은 AI 간편투자 서비스를 위한 로봇입니다.</p>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-white">content-DF717</h3>
        <h4 className="text-xl font-semibold mb-6 text-blue-400">DF717 = Destiny Finance 717 
      </h4>
        <p className="text-gray-300">투자에 있어서 모든 불확실성은 영혼의 안식과 샬롬을 방해하는 것 같습니다.
DF717을 통해 불확실성을 정밀하게 관리하여 투자자들의 샬롬을  </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
              <Server className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">DF717-Account</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">고객별, 계좌별로 모두 다른 포트폴리오를 운용할 수 있습니다. 수만 개의 계좌를 동시에 안정적으로 운용이 가능합니다.</p>
            <div className="mt-2 text-sm text-blue-400">spec01</div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white">DF717-Container</h3>
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
            <h3 className="text-xl font-bold text-white">DF717-Database</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">데이터를 가공하고 클렌징하는 것은 전략 운용과 시뮬레이션의 필수 요소입니다. 다양한 데이터를 빠르고 정확하게 활용합니다.</p>
            <div className="mt-2 text-sm text-purple-400">spec03</div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center">
              <Globe className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white">DF717-Web</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">실시간으로 운용을 모니터링 할 수 있도록 거래 및 계좌현황 등을 제공합니다. 파트너가 자신의 운용 상황을 확인하고 지시할 수 있도록 지원합니다.</p>
            <div className="mt-2 text-sm text-green-400">spec04</div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default PrefaceComponent;