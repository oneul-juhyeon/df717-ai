
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
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
    <main className="w-full min-h-screen bg-black text-white flex flex-col">
      {/* SEO H1 Tag */}
      <h1 className="sr-only">404: Page Not Found - DF717</h1>

      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="space-y-6 text-center max-w-md">
          <p className="text-6xl font-bold font-din mb-2">404</p>
          <h2 className="text-2xl font-bold text-gray-300 mb-6 font-din">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button 
                variant="outline" 
                className="font-din group hover:bg-white/10"
              >
                <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Return Home
              </Button>
            </Link>
            <Link to="/df717">
              <Button 
                variant="outline"
                className="font-din hover:bg-white/10"
              >
                Go to DF717
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default NotFound;
