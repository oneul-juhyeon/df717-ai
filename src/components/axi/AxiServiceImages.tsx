
import React, { useEffect } from "react";

const AxiServiceImages: React.FC = () => {
  // Add animation effects
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.service-animate');
      elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.85) {
          // Add different animation classes based on index for variety
          setTimeout(() => {
            if (index % 2 === 0) {
              element.classList.add('animate-fade-in-right');
            } else {
              element.classList.add('animate-fade-in-left');
            }
            element.classList.remove('opacity-0');
          }, index * 150); // Stagger the animations
        }
      });
    };

    // Run once on mount
    setTimeout(animateElements, 100);

    // Add scroll event listener
    window.addEventListener('scroll', animateElements);

    // Clean up
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center md:order-1 order-2 service-animate opacity-0">
        <img 
          src="/lovable-uploads/f0c18d2b-b437-48bc-b518-0a36cc537484.png" 
          alt="Personalized online trading consultation" 
          className="max-w-full rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div className="md:order-2 order-1">
        <h2 className="text-3xl font-bold text-white mb-6 service-animate opacity-0">Personalised service</h2>
        <p className="text-gray-300 leading-relaxed service-animate opacity-0">
          Because trading is a personal journey and every trader is different, we give you personalised service. 
          The moment you join Axi we'll connect you with a Relationship Manager dedicated to ensuring you have 
          all the tools and resources you need to discover your trading edge.
        </p>
      </div>
    </div>
  );
};

export default AxiServiceImages;
