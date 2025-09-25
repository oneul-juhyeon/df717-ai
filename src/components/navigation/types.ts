
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
  external?: boolean; // New property for external links
}

export interface HeaderProps {
  scrollToTop: () => void;
  logoAs?: "h1" | "h2" | "div"; // Added the logoAs property
}
