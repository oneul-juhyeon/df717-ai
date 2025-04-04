
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Headphones, Globe, DollarSign } from "lucide-react";
import AxiAwardCards from "./AxiAwardCards";
import AxiTestimonials from "./AxiTestimonials";
import AxiServiceImages from "./AxiServiceImages";

const AxiAwardWinningService: React.FC = () => {
  // Add scroll animation effects
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };

    // Run once on mount
    setTimeout(animateOnScroll, 100);

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Why traders choose Axi */}
      <div className="py-16 bg-[#161616]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center scroll-animate opacity-0">
            Why traders choose Axi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="scroll-animate opacity-0" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl font-semibold text-white mb-4">A trusted trading partner</h3>
              <p className="text-gray-300 leading-relaxed">
                Axi was founded in 2007 on a simple idea: be the broker we'd want to trade with. Since then, we've grown from a two-person startup to a top global broker and the first choice for a community of tens of thousands of traders in more than 100 countries. When you partner with Axi, you can be confident that we're behind you for every step of your trading journey.
              </p>
            </div>
            
            <div className="scroll-animate opacity-0" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-semibold text-white mb-4">We speak your language</h3>
              <p className="text-gray-300 leading-relaxed">
                Our global strength is built on local service. You can rely on an award-winning multi-lingual client support team that speaks your language.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 24/5 Award-winning service */}
      <div className="py-16 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-2 scroll-animate opacity-0">
            <span className="text-red-500">24/5 award-winning</span> service.
          </h2>
          <h3 className="text-3xl font-bold mb-6 scroll-animate opacity-0" style={{ transitionDelay: '100ms' }}>
            100% committed to you.
          </h3>
          
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto scroll-animate opacity-0" style={{ transitionDelay: '200ms' }}>
            We are proud of our global, award-winning** service built on transparency, reliability, and excellent customer service.
          </p>
          
          <AxiAwardCards />
          
          <p className="text-sm text-gray-400 mt-4 scroll-animate opacity-0" style={{ transitionDelay: '700ms' }}>
            ** Axi Group of companies
          </p>
          
          <AxiTestimonials />
        </div>
      </div>

      {/* Personalised service */}
      <div className="py-16 bg-[#161616]">
        <div className="max-w-6xl mx-auto px-4">
          <AxiServiceImages />
        </div>
      </div>

      {/* The right account for you */}
      <div className="py-16 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center scroll-animate opacity-0" style={{ transitionDelay: '100ms' }}>
              <img 
                src="/lovable-uploads/30eee2f6-1007-434f-97ed-1b71bffda0ea.png" 
                alt="Female trader" 
                className="max-w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2 scroll-animate opacity-0">
              <h2 className="text-3xl font-bold text-white mb-6">The right account for you</h2>
              <p className="text-gray-300 leading-relaxed">
                No matter your level of experience or trading goals, we have a trading account to suit. Whether you want a classic no-commission account or you're a high volume trader looking for preferential pricing, you can choose the account that's right for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 24 hour, multi-lingual support */}
      <div className="py-16 bg-[#161616]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0">
              <h2 className="text-3xl font-bold text-white mb-6">24 hour, multi-lingual support</h2>
              <p className="text-gray-300 leading-relaxed">
                When you need help, we speak your language. Our award-winning, multi-lingual Client Experience team is available to help you any time the markets are open. From personal account managers and online chat to social channels and community forums, our friendly team is easy to get in touch with.
              </p>
            </div>
            <div className="flex justify-center scroll-animate opacity-0" style={{ transitionDelay: '200ms' }}>
              <img 
                src="/lovable-uploads/8335e11c-a525-43db-a8bd-533a8d647451.png" 
                alt="Customer support representative" 
                className="max-w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* A truly global broker */}
      <div className="py-16 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center scroll-animate opacity-0" style={{ transitionDelay: '100ms' }}>
              <img 
                src="/lovable-uploads/ab227cf6-54f6-4b18-a524-ff414ddf1729.png" 
                alt="Global trading" 
                className="max-w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2 scroll-animate opacity-0">
              <h2 className="text-3xl font-bold text-white mb-6">A truly global broker</h2>
              <p className="text-gray-300 leading-relaxed">
                Axi has offices in 8 regions where we use our local expertise to help you find your trading edge.
                In financial strongholds and emerging markets, our service is strategically positioned to help you succeed and develop your trading, wherever you are in the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Low trading costs */}
      <div className="py-16 bg-[#161616]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0">
              <h2 className="text-3xl font-bold text-white mb-6">Low trading costs</h2>
              <p className="text-gray-300 leading-relaxed">
                Because we want you to have more to trade with, we keep our trading costs low. That means no setup fees, no transaction fees and no commission accounts. And when you're ready to experience low pricing across the full range of trading products, compare ours.
              </p>
            </div>
            <div className="flex justify-center scroll-animate opacity-0" style={{ transitionDelay: '200ms' }}>
              <img 
                src="/lovable-uploads/dc155393-715d-4340-920f-f555d7e47b99.png" 
                alt="Trading costs visualization" 
                className="max-w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiAwardWinningService;
