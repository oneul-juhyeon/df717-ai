
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
}
