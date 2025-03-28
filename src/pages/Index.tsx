import React from "react";
import Logo from "@/components/landing/Logo";
import HeroSection from "@/components/landing/HeroSection";
import FeatureCard from "@/components/landing/FeatureCard";

const streamingSvg = `<svg id="3:13" layer-name="SVG" width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-[70px] h-[70px]"> <path d="M70 0.5H0V70.5H70V0.5Z" fill="url(#pattern0_3_13)"></path> <defs> <pattern id="pattern0_3_13" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3_13" transform="scale(0.000833333)"></use> </pattern>  </defs> </svg>`;

const connectedCarSvg = `<svg id="3:19" layer-name="SVG" width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-[70px] h-[70px]"> <mask id="mask0_3_19" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="70" height="71"> <path d="M70 0.5H0V70.5H70V0.5Z" fill="white"></path> </mask> <g mask="url(#mask0_3_19)"> <path d="M70 0.5H0V70.5H70V0.5Z" fill="url(#pattern0_3_19)"></path> </g> <defs> <pattern id="pattern0_3_19" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_3_19" transform="scale(0.000976562)"></use> </pattern>  </defs> </svg>`;

const Index: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <header className="pt-14 max-sm:pt-5">
          <Logo />
        </header>

        <section className="flex gap-6 mt-14 max-md:flex-col">
          <div className="flex-1">
            <HeroSection />
          </div>

          <aside className="flex flex-col gap-6 w-[246px] max-md:flex-row max-md:w-full">
            <FeatureCard
              title="스트리밍"
              description="나보다 나를 더 잘 아는 AI 음악친구를 만나보세요"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d70d514ea47a2f0b00dc3eca0001de282906240a"
              svgContent={streamingSvg}
            />

            <FeatureCard
              title="커넥티드카"
              description="운전자와 자동차의 상황,감정 데이터 분석"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d70d514ea47a2f0b00dc3eca0001de282906240a"
              svgContent={connectedCarSvg}
            />

            <FeatureCard
              title="바우처"
              description="AI 바우처 지원사업 바로가기"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/cc7b9cab1a6db2361d80b01266ad5130b9a125dd"
            />
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Index;
