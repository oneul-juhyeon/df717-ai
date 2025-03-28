
import React, { useRef, useEffect } from "react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 비디오가 로드되면 자동 재생
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("비디오 자동 재생 에러:", error);
      });
    }
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* 배경 비디오 */}
      <video
        ref={videoRef}
        className="w-full h-[712px] max-lg:h-[500px] max-sm:h-[400px] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/main.mp4" type="video/mp4" />
        {/* 비디오가 지원되지 않을 경우 대체 이미지 표시 */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45741cfa84be8d9b12526837717601fa41dc0ed3"
          alt="Hero background"
          className="w-full h-[712px] max-lg:h-[500px] max-sm:h-[400px] object-cover"
        />
      </video>

      <div className="absolute left-14 top-14 max-sm:left-5 max-sm:top-5">
        <h2 className="font-gotham font-bold text-[891px] max-lg:text-[600px] max-sm:text-[280px] text-[#F9F9FB] leading-none tracking-tight">
          REV7:17
        </h2>
        <h1 className="text-[40px] text-[#F9F9FB] font-[350] mt-8 max-md:text-[32px] max-sm:text-2xl">
          상황・감정으로 연결하는 AI와 나의 연결고리
        </h1>
      </div>

      <div className="absolute flex items-center gap-4 left-14 bottom-14 max-sm:left-5 max-sm:bottom-5">
        <span className="text-[29px] text-[#F9F9FB] max-md:text-2xl max-sm:text-xl">
          회사소개 및 AI기술 소개
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1be2ad89b8db772253e55d39509db1772f4acf6"
          alt="Information icon"
          className="w-[48px] h-[48px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
