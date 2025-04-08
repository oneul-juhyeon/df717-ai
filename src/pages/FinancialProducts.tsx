
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, TrendingUp, BarChart4, Layers, CircleDollarSign, Fuel, Bitcoin } from "lucide-react";
import CompanyHeader from "@/components/company/CompanyHeader";

const FinancialProducts: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Forex",
      description: "Trade major, minor and exotic currency pairs with tight spreads.",
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      path: "/financial-products/forex"
    },
    {
      title: "Shares",
      description: "Access global stock markets and invest in world-leading companies.",
      icon: <BarChart4 className="h-8 w-8 text-green-500" />,
      path: "/financial-products/shares"
    },
    {
      title: "Indices",
      description: "Trade major global indices representing the world's largest markets.",
      icon: <Layers className="h-8 w-8 text-purple-500" />,
      path: "/financial-products/indices"
    },
    {
      title: "Commodities",
      description: "Access a wide range of commodity markets with competitive pricing.",
      icon: <Coins className="h-8 w-8 text-yellow-500" />,
      path: "/financial-products/commodities"
    },
    {
      title: "Gold",
      description: "Trade gold with competitive spreads and reliable execution.",
      icon: <CircleDollarSign className="h-8 w-8 text-yellow-600" />,
      path: "/financial-products/gold"
    },
    {
      title: "Oil",
      description: "Access global oil markets with advanced trading tools.",
      icon: <Fuel className="h-8 w-8 text-gray-700" />,
      path: "/financial-products/oil"
    },
    {
      title: "Crypto",
      description: "Trade major cryptocurrencies with institutional-grade liquidity.",
      icon: <Bitcoin className="h-8 w-8 text-orange-500" />,
      path: "/financial-products/crypto"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <CompanyHeader scrollToTop={scrollToTop} />
        
        <section className="mt-20 mb-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">Financial Products</h1>
            <p className="text-xl text-gray-300 mb-12">
              Explore our comprehensive range of financial products designed to meet your trading needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link to={product.path} key={product.title} className="no-underline">
                  <Card className="bg-[#141432] border-indigo-900 text-white shadow-xl overflow-hidden hover:bg-[#1d1d4f] transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="w-12 h-12 rounded-full bg-[#191942] flex items-center justify-center">
                        {product.icon}
                      </div>
                      <CardTitle className="text-xl text-white">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{product.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FinancialProducts;
