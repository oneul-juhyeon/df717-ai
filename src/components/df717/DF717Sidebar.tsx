
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DF717Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const sidebarItems = [
    { name: "DF717 Essence", path: "/df717" },
    { name: "System Reliability", path: "/df717/reliability" },
    { name: "Quant Modeling", path: "/df717/modeling" },
    { name: "AI Engine", path: "/df717/engine" },
    { name: "Execution Framework", path: "/df717/execution" },
    { name: "Strategy Examples", path: "/df717/examples" },
  ];

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
    <aside className="hidden lg:block w-64 shrink-0 border-r border-white/30 pr-6">
      <div className="sticky top-24 animate-fade-in-left">
        <h3 className="text-lg font-semibold text-white mb-6 pl-4 border-l-2 border-white">DF717</h3>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
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

export default DF717Sidebar;
