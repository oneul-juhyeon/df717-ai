
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Globe, Users, Headphones, DollarSign } from "lucide-react";

const AxiAwardWinningService: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5de66] to-[#f8b856] opacity-20"></div>
        <div className="relative py-20 text-center z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Award-Winning Service</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            When you need a broker you can rely on, trust Axi to give you an edge.
          </p>
        </div>
      </div>

      {/* Why traders choose Axi */}
      <div className="py-16 bg-[#161616]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why traders choose Axi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">A trusted trading partner</h3>
              <p className="text-gray-300 leading-relaxed">
                Axi was founded in 2007 on a simple idea: be the broker we'd want to trade with. Since then, we've grown from a two-person startup to a top global broker and the first choice for a community of tens of thousands of traders in more than 100 countries. When you partner with Axi, you can be confident that we're behind you for every step of your trading journey.
              </p>
            </div>
            
            <div>
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
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-[#f8b856]">24/5 award-winning</span> service.
          </h2>
          <h3 className="text-3xl font-bold mb-6">100% committed to you.</h3>
          
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
            We are proud of our global, award-winning** service built on transparency, reliability, and excellent customer service.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="bg-[#232323] border-none">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-full aspect-square bg-[#e5323e] flex items-center justify-center mb-4 rounded-md">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-white text-center">
                    <p className="font-bold">BEST {index % 2 === 0 ? "CFD" : "FOREX"}</p>
                    <p className="font-bold">PROVIDER</p>
                    <p className="text-sm mt-2">WINNER</p>
                    <p className="font-bold mt-1">{2020 + index}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-sm text-gray-400 mt-4">** Axi Group of companies</p>
          
          <div className="mt-12 p-6 bg-[#232323] rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white">Excellent</span>
                  <div className="flex ml-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-green-500">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Based on 3,119 reviews</p>
              </div>
              
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="mb-4 md:mb-0">
                  <div className="flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-green-500">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm truncate max-w-[200px]">Excellent service</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Personalised service */}
      <div className="py-16 bg-[#161616]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Personalised service</h2>
              <p className="text-gray-300 leading-relaxed">
                Because trading is a personal journey and every trader is different, we give you personalised service. The moment you join Axi we'll connect you with a Relationship Manager dedicated to ensuring you have all the tools and resources you need to discover your trading edge.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-[#232323] rounded-full overflow-hidden flex items-center justify-center">
                <Users className="h-24 w-24 text-[#9b87f5]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The right account for you */}
      <div className="py-16 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-64 h-64 bg-[#232323] rounded-full overflow-hidden flex items-center justify-center">
                <Users className="h-24 w-24 text-[#9b87f5]" />
              </div>
            </div>
            <div className="order-1 md:order-2">
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
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">24 hour, multi-lingual support</h2>
              <p className="text-gray-300 leading-relaxed">
                When you need help, we speak your language. Our award-winning, multi-lingual Client Experience team is available to help you any time the markets are open. From personal account managers and online chat to social channels and community forums, our friendly team is easy to get in touch with.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-[#232323] rounded-full overflow-hidden flex items-center justify-center">
                <Headphones className="h-24 w-24 text-[#9b87f5]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A truly global broker */}
      <div className="py-16 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-64 h-64 bg-[#232323] rounded-full overflow-hidden flex items-center justify-center">
                <Globe className="h-24 w-24 text-[#9b87f5]" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">A truly global broker</h2>
              <p className="text-gray-300 leading-relaxed">
                Axi has offices in 8 regions where we use our local expertise to help you find your trading edge. In financial strongholds and emerging markets, our service is strategically positioned to help you succeed and develop your trading, wherever you are in the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Low trading costs */}
      <div className="py-16 bg-[#161616]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Low trading costs</h2>
              <p className="text-gray-300 leading-relaxed">
                Because we want you to have more to trade with, we keep our trading costs low. That means no setup fees, no transaction fees and no commission accounts. And when you're ready to experience low pricing across the full range of trading products, compare ours.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-[#232323] rounded-full overflow-hidden flex items-center justify-center">
                <DollarSign className="h-24 w-24 text-[#9b87f5]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="py-16 bg-gradient-to-r from-[#e5323e] to-[#ff5757]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Ready to trade your edge?</h2>
          <p className="text-white text-xl mb-8">Start trading with a global, award-winning broker.</p>
          
          <Link to="/contact">
            <Button className="bg-white text-[#e5323e] hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AxiAwardWinningService;
