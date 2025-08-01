import { NavigationItem, SubmenuItem } from "./types";

export const brokerSubmenu: SubmenuItem[] = [
  { name: "CFD Safety", path: "/cfd-safety" },
  { name: "CFD Trading", path: "/cfd-trading" },
  { name: "Get Started", path: "/get-started" },
  { name: "Professional Trading", path: "/professional-trading" },
  { name: "Award-Winning Service", path: "/award-winning-service" },
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
  { name: "DF717 Essence", path: "/df717" },
  { name: "System Reliability", path: "/df717/reliability" },
  { name: "Quant Modeling", path: "/df717/modeling" },
  { name: "AI Engine", path: "/df717/engine" },
  { name: "Execution Framework", path: "/df717/execution" },
  { name: "Strategy Examples", path: "/df717/examples" },
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
    name: "CFD", 
    path: "/cfd-safety",
    hasSubmenu: true,
    submenu: brokerSubmenu,
  },
  { name: "Contact", path: "/contact", hasSubmenu: false },
];

/**
 * Helper function to determine if a menu item is active based on the current path
 */
export function isMenuActive(item: NavigationItem, currentPath: string): boolean {
  // Exact match for the path
  if (currentPath === item.path) {
    return true;
  }

  // Special case for Financial Products - check if we're in any of the subpages
  if (item.name === "Financial Products" && currentPath.startsWith("/financial-products/")) {
    return true;
  }

  // Check if we're on a subpage of this item
  if (item.submenu) {
    // For DF717, check if the current path starts with /df717/
    if (item.name === "DF717" && currentPath.startsWith("/df717/")) {
      return true;
    }

    // For CFD, check if the current path is any of the related paths
    if (item.name === "CFD" && 
        (currentPath.startsWith("/cfd-safety") || 
         currentPath.startsWith("/cfd-trading") ||
         currentPath.startsWith("/cfd-getstarted") ||
         currentPath.startsWith("/get-started") ||
         currentPath.startsWith("/professional-trading") ||
         currentPath.startsWith("/award-winning-service"))) {
      return true;
    }
    
    // For any other item with submenu, check if we're on any of the submenu pages
    return item.submenu.some(subItem => subItem.path === currentPath);
  }

  return false;
}
