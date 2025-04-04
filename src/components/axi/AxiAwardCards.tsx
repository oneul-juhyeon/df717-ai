
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const AxiAwardCards: React.FC = () => {
  const awardCards = [
    {
      title: "BEST CFD PROVIDER",
      year: "2021",
      color: "#e5323e"
    },
    {
      title: "BEST CFD PROVIDER",
      year: "2022",
      color: "#e5323e"
    },
    {
      title: "BEST FOREX PROVIDER",
      year: "2023",
      color: "#e5323e"
    },
    {
      title: "BEST TRADING PLATFORM",
      year: "2023",
      color: "#e5323e"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {awardCards.map((card, index) => (
        <Card key={index} className="bg-[#232323] border-none hover:translate-y-[-5px] transition-all duration-300">
          <CardContent className="p-6 flex flex-col items-center">
            <div 
              className="w-full aspect-square flex items-center justify-center mb-4 rounded-md"
              style={{ backgroundColor: card.color }}
            >
              <Award className="h-12 w-12 text-white" />
            </div>
            <div className="text-white text-center">
              <p className="font-bold">{card.title.split(" ")[0]}</p>
              <p className="font-bold">{card.title.split(" ").slice(1).join(" ")}</p>
              <p className="text-sm mt-2">WINNER</p>
              <p className="font-bold mt-1">{card.year}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AxiAwardCards;
