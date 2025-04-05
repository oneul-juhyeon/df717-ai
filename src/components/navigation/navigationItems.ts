
import { NavigationItem, SubmenuItem } from "./types";

export const axiCfdSubmenu: SubmenuItem[] = [
  { name: "CFD", id: "cfd-section", path: "/axi-cfd" },
  { name: "Our Edge", id: "edge-section", path: "/axi-edge" },
  { name: "Trade With Trust", id: "trusted-partner-section", path: "/axi-trust" },
  { name: "Best Pricing & Execution", id: "features-section", path: "/axi-pricing" },
  { name: "Award-Winning Service", id: "award-winning-section", path: "/axi-award" },
];

export const financialProductsSubmenu: SubmenuItem[] = [
  { name: "Forex", path: "/financial-products/forex" },
  { name: "Shares", path: "/financial-products/shares" },
  { name: "Indices", path: "/financial-products/indices" },
  { name: "Commodities", path: "/financial-products/commodities" },
  { name: "Gold", path: "/financial-products/gold" },
  { name: "Oil", path: "/financial-products/oil" },
  { name: "Crypto", path: "/financial-products/crypto" },
];

export const df717Submenu: SubmenuItem[] = [
  { name: "What is DF717?", path: "/df717" },
  { name: "Reliability & Stability", path: "/df717/stability" },
  { name: "Financial Modeling", path: "/df717/modeling" },
  { name: "AI Strategy", path: "/df717/ai-strategy" },
  { name: "Execution Logic", path: "/df717/execution" },
  { name: "Examples", path: "/df717/examples" },
];

export const getNavigationItems = (): NavigationItem[] => [
  { name: "Home", path: "/home-intro", hasSubmenu: false },
  { name: "Company", path: "/company", hasSubmenu: false },
  { name: "Technology", path: "/technology", hasSubmenu: false },
  { 
    name: "Financial Products", 
    path: "/financial-products",
    hasSubmenu: true,
    submenu: financialProductsSubmenu,
  },
  { 
    name: "DF717", 
    path: "/df717",
    hasSubmenu: true,
    submenu: df717Submenu,
  },
  { 
    name: "AXI CFD", 
    path: "/axi-cfd",
    hasSubmenu: true,
    submenu: axiCfdSubmenu,
  },
  { name: "Contact", path: "/contact", hasSubmenu: false },
];

export const isMenuActive = (item: NavigationItem, pathname: string): boolean => {
  if (item.path === '/financial-products') {
    return pathname.startsWith('/financial-products/');
  }
  if (item.path === '/df717') {
    return pathname.startsWith('/df717/');
  }
  if (item.path === '/axi-cfd') {
    return pathname.startsWith('/axi-');
  }
  return pathname === item.path;
};
