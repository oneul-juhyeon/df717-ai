
import { Coins, TrendingUp, BarChart4, Layers, CircleDollarSign, Fuel, Bitcoin } from "lucide-react";

export interface FinancialProduct {
  title: string;
  description: string;
  icon: JSX.Element;
  path: string;
}

export const getFinancialProducts = (): FinancialProduct[] => [
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
