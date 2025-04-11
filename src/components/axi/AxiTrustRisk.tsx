
import React, { useEffect, useRef } from "react";
import { AlertTriangle, DollarSign, LineChart, Settings } from "lucide-react";

const AxiTrustRisk: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
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
  
  const risks = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "Can you lose more than you deposited?",
      content: "If you trade with leverage, there's always a chance you could lose more than the balance of your account if a trade goes against you. To remove or reduce this potential risk, always check your trade size and level of exposure before you trade and be sure that you can afford to cover any potential loss. Using simple tools like automatic stop-losses also help reduce the risk of a negative balance."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
      title: "Sudden position closures",
      content: "Due to volatile markets and the need to ensure sufficient margin is maintained in your account, it's vital to keep an eye on your bottom line. If you don't have enough in your account, trades may be closed on your behalf in order to prevent a negative balance. For any times you need to add funds to your account quickly, we make it extremely easy."
    },
    {
      icon: <LineChart className="h-8 w-8 text-white" />,
      title: "Slippage",
      content: "Due to fast changing global market conditions, you may notice that sometimes the price you expect differs in a very small way from the actual execution price. This is a common industry practice known as \"Slippage\". To reduce inconvenience to our clients, we invest heavily in technology and infrastructure that greatly reduces slippage across our network. We're now proud to say that Axi has some of the fastest trade execution speeds in the industry."
    },
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "Leverage",
      content: "Because every trader has a different approach to the level of risk they prefer, we make it easy to check and change your leverage level. Simply login to our Client Portal and look for your leverage settings. That way you'll always know your default settings and how much risk you'll be exposed to on your trades."
    }
  ];
  
  return (
    <div ref={sectionRef} className="transition-all duration-1000 transform opacity-0 translate-y-10">
      <h2 className="text-3xl text-white font-bold mb-6">Taking control of your risk</h2>
      <p className="text-gray-300 mb-8">
        Axi offers an array of free tools to help you better manage your risk, complemented by extensive educational resources dedicated to improve your general trading knowledge.
      </p>
      
      <div className="space-y-8">
        {risks.map((risk, index) => (
          <div key={index} className="bg-[#1E1E1E] p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                {risk.icon}
              </div>
              <div>
                <h3 className="text-xl text-white font-bold mb-2">{risk.title}</h3>
                <p className="text-gray-300">{risk.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiTrustRisk;
