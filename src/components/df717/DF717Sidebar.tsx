
import React from "react";
import { Link, useLocation } from "react-router-dom";

const DF717Sidebar: React.FC = () => {
  const location = useLocation();
  
  const sidebarItems = [
    { name: "What is DF717?", path: "/df717" },
    { name: "Reliability & Stability", path: "/df717/stability" },
    { name: "Financial Modeling", path: "/df717/modeling" },
    { name: "AI Strategy", path: "/df717/ai-strategy" },
    { name: "Execution Logic", path: "/df717/execution" },
    { name: "Examples", path: "/df717/examples" },
  ];

  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-gray-800 pr-4">
      <div className="sticky top-24">
        <h3 className="text-lg font-semibold text-white mb-4 pl-4">DF717</h3>
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-indigo-900/40 text-indigo-400 font-medium"
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

export default DF717Sidebar;
