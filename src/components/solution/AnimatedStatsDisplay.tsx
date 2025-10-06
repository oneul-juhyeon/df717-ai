import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  target: number;
  suffix: string;
  label: string;
  labelKo?: string;
}

interface AnimatedStatsDisplayProps {
  locale?: string;
}

const AnimatedStatsDisplay: React.FC<AnimatedStatsDisplayProps> = ({ locale = "en" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const stats: Stat[] = [
    { target: 40, suffix: "+ Yrs", label: "Development", labelKo: "개발 경력" },
    { target: 20, suffix: "+ Yrs", label: "Validation", labelKo: "검증 데이터" },
    { target: 100, suffix: "%", label: "Guarantee", labelKo: "환불 보장" }
  ];

  const [counts, setCounts] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500; // 2.5 seconds
    const startTime = Date.now();
    const startValues = [0, 0, 0];

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      const newCounts = stats.map((stat, index) => 
        Math.floor(startValues[index] + (stat.target - startValues[index]) * easedProgress)
      );

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <motion.div
      ref={sectionRef}
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div 
        className="relative overflow-hidden w-full"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 -4px 40px rgba(0, 0, 0, 0.3)"
        }}
      >
        <div className="py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <motion.div 
                    className="flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div 
                      className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tabular-nums tracking-tight"
                      style={{ fontWeight: 700 }}
                      animate={
                        isInView && counts[index] === stat.target
                          ? { scale: [1, 1.05, 1] }
                          : {}
                      }
                      transition={{ duration: 0.4, delay: 2.5 }}
                    >
                      {counts[index]}
                      {counts[index] === stat.target && (
                        <span className="inline-block ml-1">{stat.suffix}</span>
                      )}
                    </motion.div>
                    <div className="text-lg md:text-xl text-white/70 font-light tracking-wider">
                      {locale === "ko" && stat.labelKo ? stat.labelKo : stat.label}
                    </div>
                  </motion.div>
                  
                  {index < stats.length - 1 && (
                    <div className="hidden md:flex items-center justify-center">
                      <div 
                        className="h-32 w-px"
                        style={{ background: "rgba(255, 255, 255, 0.15)" }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedStatsDisplay;
