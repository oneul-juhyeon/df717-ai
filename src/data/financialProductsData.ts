
import { Coins, TrendingUp, BarChart4, Layers, CircleDollarSign, Fuel, Bitcoin } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface FinancialProduct {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  iconColor: string;
}

export const getFinancialProducts = (): FinancialProduct[] => [
  {
    title: "Forex",
    description: "Trade major, minor and exotic currency pairs with tight spreads.",
    icon: TrendingUp,
    iconColor: "text-blue-500",
    path: "/financial-products/forex"
  },
  {
    title: "Shares",
    description: "Access global stock markets and invest in world-leading companies.",
    icon: BarChart4,
    iconColor: "text-green-500",
    path: "/financial-products/shares"
  },
  {
    title: "Indices",
    description: "Trade major global indices representing the world's largest markets.",
    icon: Layers,
    iconColor: "text-purple-500",
    path: "/financial-products/indices"
  },
  {
    title: "Commodities",
    description: "Access a wide range of commodity markets with competitive pricing.",
    icon: Coins,
    iconColor: "text-yellow-500",
    path: "/financial-products/commodities"
  },
  {
    title: "Gold",
    description: "Trade gold with competitive spreads and reliable execution.",
    icon: CircleDollarSign,
    iconColor: "text-yellow-600",
    path: "/financial-products/gold"
  },
  {
    title: "Oil",
    description: "Access global oil markets with advanced trading tools.",
    icon: Fuel,
    iconColor: "text-gray-700",
    path: "/financial-products/oil"
  },
  {
    title: "Crypto",
    description: "Trade major cryptocurrencies with institutional-grade liquidity.",
    icon: Bitcoin,
    iconColor: "text-orange-500",
    path: "/financial-products/crypto"
  }
];
