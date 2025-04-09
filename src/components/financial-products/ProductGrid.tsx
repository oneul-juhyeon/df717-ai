
import React, { useState } from "react";
import { getFinancialProducts } from "@/data/financialProductsData";
import { Link } from "react-router-dom";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const ProductGrid: React.FC = () => {
  const products = getFinancialProducts();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleMouseEnter = (productTitle: string) => {
    setOpenItem(productTitle);
  };

  const handleMouseLeave = () => {
    setOpenItem(null);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {products.map((product, index) => (
          <React.Fragment key={product.title}>
            <AccordionItem 
              value={product.title}
              onMouseEnter={() => handleMouseEnter(product.title)}
              onMouseLeave={handleMouseLeave}
              className={`group transition-all duration-300 hover:bg-white/5 border-none ${openItem === product.title ? 'bg-white/5' : ''}`}
            >
              <Link 
                to={product.path}
                className="block w-full"
              >
                <AccordionTrigger 
                  className="py-4 px-4 flex justify-center text-white text-lg font-medium tracking-wide"
                >
                  {product.title}
                </AccordionTrigger>
              </Link>
              <AccordionContent className="px-4 pb-4 text-center">
                <p className="text-gray-300">
                  {product.description}
                </p>
              </AccordionContent>
            </AccordionItem>
            {index < products.length - 1 && (
              <Separator className="bg-[#5b5b5d]/50 h-[0.5px] w-full" />
            )}
          </React.Fragment>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductGrid;
