
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/common/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-400 hover:text-blue-300 underline">
            Return to Home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
