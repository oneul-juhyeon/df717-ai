
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { financialProductsSubmenu } from "@/components/navigation/navigationItems";

const FinancialProductsSidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-red-900/30 pr-6">
      <div className="sticky top-24 animate-fade-in-left">
        <h3 className="text-lg font-semibold text-white mb-6 pl-4 border-l-2 border-red-700">Financial Products</h3>
        <ul className="space-y-2">
          {financialProductsSubmenu.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block py-2.5 px-4 rounded-lg transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "bg-red-900/40 text-red-400 font-medium border-l-2 border-red-700"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FinancialProductsSidebar;
