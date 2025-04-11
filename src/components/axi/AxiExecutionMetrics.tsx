
import React, { useEffect, useRef } from "react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

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
        <div className="w-full">
          {/* Table Header */}
          <div className="flex border-b border-[#5b5b5d] py-4">
            <div className="w-1/5 text-center text-white text-[14px] font-bold px-2">Month</div>
            <div className="w-1/5 text-center text-white text-[14px] font-bold px-2">Requested Price<br/>or Better</div>
            <div className="w-1/5 text-center text-white text-[14px] font-bold px-2">Negative<br/>Slippage</div>
            <div className="w-1/5 text-center text-white text-[14px] font-bold px-2">Median Execution<br/>Latency</div>
            <div className="w-1/5 text-center text-white text-[14px] font-bold px-2">Fill Rates</div>
          </div>
          
          {/* Table Rows */}
          {metrics.map((metric, index) => (
            <div key={index} className="flex border-b border-[#5b5b5d] py-[15px]">
              <div className="w-1/5 text-white text-[14px] px-2">{metric.month}</div>
              <div className="w-1/5 text-white text-[14px] px-2">{metric.requestedPrice}</div>
              <div className="w-1/5 text-white text-[14px] px-2">{metric.negativeSlippage}</div>
              <div className="w-1/5 text-white text-[14px] px-2">{metric.medianExecution}</div>
              <div className="w-1/5 text-white text-[14px] px-2">{metric.fillRates}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AxiExecutionMetrics;
