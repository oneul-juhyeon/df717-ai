
import React, { useEffect, useRef } from "react";

const AxiExecutionMetrics: React.FC = () => {
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
  
  const metrics = [
    { month: "MAR 25", requestedPrice: "95%", negativeSlippage: "5%", medianExecution: "29ms", fillRates: ">99.99%" },
    { month: "FEB 25", requestedPrice: "93%", negativeSlippage: "7%", medianExecution: "29ms", fillRates: ">99.99%" },
    { month: "JAN 25", requestedPrice: "91%", negativeSlippage: "9%", medianExecution: "28ms", fillRates: ">99.99%" },
    { month: "DEC 24", requestedPrice: "92%", negativeSlippage: "8%", medianExecution: "32ms", fillRates: ">99.99%" },
    { month: "NOV 24", requestedPrice: "93%", negativeSlippage: "7%", medianExecution: "33ms", fillRates: ">99.99%" },
    { month: "OCT 24", requestedPrice: "94%", negativeSlippage: "6%", medianExecution: "31ms", fillRates: ">99.99%" },
    { month: "SEP 24", requestedPrice: "95%", negativeSlippage: "5%", medianExecution: "31ms", fillRates: ">99.99%" },
    { month: "AUG 24", requestedPrice: "93%", negativeSlippage: "7%", medianExecution: "29ms", fillRates: ">99.99%" },
  ];
  
  return (
    <div ref={sectionRef} className="mb-20 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#222222] border-b border-gray-700">
              <th className="py-4 px-6 text-left text-sm font-semibold text-white">Month</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-white">Requested Price<br/>or Better</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-white">Negative<br/>Slippage</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-white">Median Execution<br/>Latency</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-white">Fill Rates</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric, index) => (
              <tr 
                key={index} 
                className={`border-b border-gray-700 ${index % 2 === 0 ? 'bg-[#1A1A1A]' : 'bg-[#1E1E1E]'}`}
              >
                <td className="py-4 px-6 text-white">{metric.month}</td>
                <td className="py-4 px-6 text-white">{metric.requestedPrice}</td>
                <td className="py-4 px-6 text-white">{metric.negativeSlippage}</td>
                <td className="py-4 px-6 text-white">{metric.medianExecution}</td>
                <td className="py-4 px-6 text-white">{metric.fillRates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AxiExecutionMetrics;
