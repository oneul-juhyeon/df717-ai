import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
const ValueSection: React.FC = () => {
  return <div className="prose prose-invert max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
        <Heart className="mr-3 h-6 w-6 text-red-500" />
        Our Values
      </h2>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 text-white">가치</h3>
        <p className="text-lg text-white">디셈버앤컴퍼니는 더욱 뛰어난 기술을 연구합니다.<br />
        정교한 기술과 데이터를 바탕으로 보다 나은 삶을 설계합니다.</p>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 text-white">기업 브랜드 정의</h3>
        <p className="text-lg text-white">기술력을 기반으로 금융시장의 변화와 혁신을 이루는 기업</p>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 text-white">기업브랜드 주요 스테이트먼트</h3>
        <p className="text-xl font-bold italic text-white">Without Love, We are nothing.</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-8 text-white">기업브랜드 주요 가치</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              주요가치01<br />
              <span className="text-blue-400 font-bold">Innovative Perspective</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="font-bold mb-4 text-white">세상을 바꾸는 혁신적인 관점</h4>
            <p className="text-gray-300">DF717은 어려운 길을 피하지 않고 혁신을 추구합니다. 세상에 없던 독창적인 사고로 새로운 길을 개척하며 세상을 바꿀 만한 길을 제시합니다.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              주요가치02<br />
              <span className="text-green-400 font-bold">Outstanding Technology</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="font-bold mb-4 text-white">독보적인 테크놀로지</h4>
            <p className="text-gray-300">DF717은 우수한 연구 개발진을 통해 지속적으로 기술을 연구합니다. 정교한 기술과 데이터를 통해 보다 나은 삶을 설계하고 만들어갑니다.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              주요가치03<br />
              <span className="text-yellow-400 font-bold">Trustworthy Attitude</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="font-bold mb-4 text-white">신뢰할 수 있는 태도</h4>
            <p className="text-gray-300">DF717은 사람들에게 필요한 편리하고 가치있는 서비스를 제공합니다. 꾸준하고 안정감이 느껴지는 신뢰할 수 있는 태도를 견지합니다.</p>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default ValueSection;