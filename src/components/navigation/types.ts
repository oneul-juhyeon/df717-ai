
import { ReactNode } from "react";

export interface NavigationItem {
  path: string;
  label: string;
  children?: NavigationItem[];
}

export interface HeaderProps {
  scrollToTop: () => void;
  logoAs?: "h1" | "h2" | "div"; // Added the logoAs property
}
