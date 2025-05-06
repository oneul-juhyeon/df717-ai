
import { ReactNode } from "react";

export interface SubmenuItem {
  name: string;
  path: string;
  id?: string;
}

export interface NavigationItem {
  name: string;
  path: string;
  hasSubmenu?: boolean;
  submenu?: SubmenuItem[];
}

export interface HeaderProps {
  scrollToTop: () => void;
  logoAs?: "h1" | "h2" | "div"; // Added the logoAs property
}
