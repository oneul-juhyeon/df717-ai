
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [{ label: "Home", path: "/" }];
    
    let currentPath = "";
    
    pathnames.forEach((pathname, index) => {
      currentPath += `/${pathname}`;
      
      let label = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      
      // Handle special cases for better readability
      switch (pathname) {
        case "financial-products":
          label = "Financial Products";
          break;
        case "df717":
          label = "DF717";
          break;
        case "axi-cfd":
          label = "AXI CFD";
          break;
        case "axi-edge":
          label = "AXI Edge";
          break;
        case "axi-trust":
          label = "AXI Trust";
          break;
        case "axi-pricing":
          label = "AXI Pricing";
          break;
        case "axi-award":
          label = "AXI Award";
          break;
        case "home-intro":
          label = "Home";
          break;
        case "privacy-policy":
          label = "Privacy Policy";
          break;
        case "forex":
          label = "Forex Trading";
          break;
        case "shares":
          label = "Share Trading";
          break;
        case "indices":
          label = "Indices Trading";
          break;
        case "commodities":
          label = "Commodities Trading";
          break;
        case "gold":
          label = "Gold Trading";
          break;
        case "oil":
          label = "Oil Trading";
          break;
        case "crypto":
          label = "Crypto Trading";
          break;
        case "reliability":
          label = "System Reliability";
          break;
        case "modeling":
          label = "Quant Modeling";
          break;
        case "engine":
          label = "AI Engine";
          break;
        case "execution":
          label = "Execution Framework";
          break;
        case "examples":
          label = "Strategy Examples";
          break;
        default:
          label = label.replace(/-/g, ' ');
          break;
      }
      
      // Don't add path for the last item (current page)
      const isLast = index === pathnames.length - 1;
      items.push({ 
        label, 
        path: isLast ? undefined : currentPath 
      });
    });
    
    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  // Don't show breadcrumbs on home page
  if (location.pathname === "/" || location.pathname === "/home-intro") {
    return null;
  }

  return (
    <div className="mb-6">
      <Breadcrumb>
        <BreadcrumbList className="text-gray-300">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.path ? (
                  <BreadcrumbLink asChild>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-white font-medium">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator className="text-gray-500" />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
