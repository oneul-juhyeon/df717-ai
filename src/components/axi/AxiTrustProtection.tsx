
import React, { useEffect, useRef } from "react";
import { AlertCircle, TrendingDown, TrendingUp, Bell } from "lucide-react";

const AxiTrustProtection: React.FC = () => {
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
  
  const protections = [
    {
      icon: <TrendingDown className="h-8 w-8 text-white" />,
      title: "Free protection against adverse market movements",
      content: "Set a Stop Loss order to close your position automatically if the market moves against you. Although there's no trigger charge, there's no guarantee of protection against slippage so your position could be closed out at a worse level if the market gaps."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Don't miss out on profits",
      content: "Place a Trailing Stop when you open your trade and it will move with your profit. If the market turns against you, your position will close out at your Trailing Stop's new level. This means you can lock in profits without the need to monitor your position and adjust your stop. Like regular stop-losses, trailing stops don't protect against slippage."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-white" />,
      title: "Take profit automatically",
      content: "Set a limit order in line with your profit target, and we'll close your position for you when the price hits your chosen level!"
    },
    {
      icon: <Bell className="h-8 w-8 text-white" />,
      title: "Stay on top of market movements",
      content: "Set price alerts and we will notify you by text or email when a market reaches your specified price. Push alert notifications are available free of charge and can be set up on our web-based platform and apps, and appear as in-platform pop-ups on PC and mobile app."
    }
  ];
  
  return (
    <div ref={sectionRef} className="transition-all duration-1000 transform opacity-0 translate-y-10">
      <h2 className="text-3xl text-white font-bold mb-6">More ways to protect yourself in our platform</h2>
      <p className="text-gray-300 mb-8">
        While all trading carries an inherent risk, as a transparent and trusted broker we try to ensure all our clients have as much protection as possible. We encourage all traders to consider the benefits of using a range of these protective measures in their day to day trading.
      </p>
      
      <div className="space-y-8">
        {protections.map((protection, index) => (
          <div key={index} className="bg-[#1E1E1E] p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                {protection.icon}
              </div>
              <div>
                <h3 className="text-xl text-white font-bold mb-2">{protection.title}</h3>
                <p className="text-gray-300">{protection.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-[#1E1E1E] rounded-xl">
        <h3 className="text-xl text-white font-bold mb-4">Fraud Awareness</h3>
        <p className="text-gray-300">
          Protect your trading account and funds by taking some important precautions.
        </p>
      </div>
    </div>
  );
};

export default AxiTrustProtection;
