
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FinancialProduct } from "@/data/financialProductsData";

interface ProductCardProps {
  product: FinancialProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const IconComponent = product.icon;
  
  return (
    <Link to={product.path} className="no-underline">
      <Card className="bg-[#141432] border-indigo-900 text-white shadow-xl overflow-hidden hover:bg-[#1d1d4f] transition-all duration-300">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="w-12 h-12 rounded-full bg-[#191942] flex items-center justify-center">
            <IconComponent className={`h-8 w-8 ${product.iconColor}`} />
          </div>
          <CardTitle className="text-xl text-white">{product.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{product.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
