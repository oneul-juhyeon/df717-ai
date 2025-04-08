
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AxiSpaceXCallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animation sequence when the section is in view
          if (lineRef.current) {
            lineRef.current.classList.add("animate-line");
          }

          // Delay text animation
          setTimeout(() => {
            if (textRef.current) {
              textRef.current.classList.add("animate-fade-in-up");
              textRef.current.classList.remove("opacity-0");
            }
          }, 600); // Wait for line animation to complete

          // Delay button animation
          setTimeout(() => {
            if (buttonRef.current) {
              buttonRef.current.classList.add("animate-fade-in-up");
              buttonRef.current.classList.remove("opacity-0");
            }
          }, 900); // Wait for text animation to start
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-32 bg-black flex flex-col items-center justify-center">
      {/* Vertical line */}
      <div ref={lineRef} className="h-0 w-px bg-white mb-12 transition-all duration-700 ease-out">
        {/* Line will be animated to 20% screen height */}
      </div>

      {/* Text content */}
      <div 
        ref={textRef} 
        className="mb-8 text-center opacity-0 transition-all duration-500 ease-out max-w-lg px-4"
      >
        <p className="text-[#8e8e8e] text-xs md:text-sm">
          Ready to trade your edge?<br />
          Start trading with a global, award-winning broker.
        </p>
      </div>

      {/* Contact button */}
      <div 
        ref={buttonRef}
        className="opacity-0 transition-all duration-500 ease-out"
      >
        <Link to="/contact">
          <Button 
            variant="outline" 
            className="text-white border border-white bg-transparent hover:bg-white/5 hover:text-white rounded-none uppercase tracking-wider font-bold text-sm md:text-base px-8 py-3"
          >
            Contact us
          </Button>
        </Link>
      </div>

      <style>
        {`
        @keyframes growLine {
          from {
            height: 0;
          }
          to {
            height: 20vh; /* 20% of viewport height */
          }
        }

        .animate-line {
          animation: growLine 0.6s ease-out forwards;
        }
      `}
      </style>
    </div>
  );
};

export default AxiSpaceXCallToAction;
