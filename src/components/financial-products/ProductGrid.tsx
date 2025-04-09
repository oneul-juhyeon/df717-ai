
import React from "react";
import { getFinancialProducts } from "@/data/financialProductsData";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const ProductGrid: React.FC = () => {
  const products = getFinancialProducts();
  
  return (
    <motion.div 
      className="w-full max-w-lg mx-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.8, // Delay after description text appears
          }
        }
      }}
    >
      {products.map((product, index) => (
        <React.Fragment key={product.title}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
          >
            <Link 
              to={product.path}
              className="block w-full py-4 px-4 text-white text-lg font-medium tracking-wide text-center transition-all duration-300 hover:bg-white/5"
            >
              {product.title}
            </Link>
            {index < products.length - 1 && (
              <Separator className="bg-[#5b5b5d]/50 h-[0.5px] w-full" />
            )}
          </motion.div>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
