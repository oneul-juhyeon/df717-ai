import React from "react";
import { Link, useLocation } from "react-router-dom";

const CFDProductsSidebar: React.FC = () => {
  const location = useLocation();
  const cfdPages = [
    { name: "CFD Safety", path: "/cfd-safety" },
    { name: "CFD Trading", path: "/cfd-trading" },
    { name: "Get Started", path: "/cfd-getstarted" },
    { name: "Professional Trading", path: "/professional-trading" },
    { name: "Award-Winning Service", path: "/award-winning-service" },
  ];

  return (
    <div className="w-64 flex-shrink-0 financial-product-sidebar">
      <div className="sticky top-8">
        <h2 className="text-2xl font-bold text-white mb-8 financial-product-heading">
          CFD
        </h2>
        
        <nav className="space-y-2">
          {cfdPages.map((product) => {
            const isActive = location.pathname === product.path;
            return (
              <Link
                key={product.name}
                to={product.path}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200 financial-product-label ${
                  isActive 
                    ? 'text-white bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {product.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default CFDProductsSidebar;