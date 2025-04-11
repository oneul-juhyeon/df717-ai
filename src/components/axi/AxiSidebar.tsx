
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const axiNavigationItems = [
  { name: "CFD", path: "/axi-cfd" },
  { name: "Our Edge", path: "/axi-edge" },
  { name: "Trade With Trust", path: "/axi-trust" },
  { name: "Best Pricing & Execution", path: "/axi-pricing" },
  { name: "Award-Winning Service", path: "/axi-award" }
];

const AxiSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    // Navigate to the new page
    navigate(path);
    // Ensure page scrolls to top - use immediate scroll without smooth behavior for reliability
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };
  
  return (
    <aside className="hidden lg:block w-[51px] shrink-0 border-r border-white/30 pr-6">
      <div className="sticky top-24 animate-fade-in-left">
        <h3 className="text-lg font-semibold text-white mb-6 pl-4 border-l-2 border-white">Axi</h3>
        <ul className="space-y-2">
          {axiNavigationItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.path);
                }}
                className={`block py-2.5 px-4 rounded-lg transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "bg-white/40 text-white font-medium border-l-2 border-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AxiSidebar;
