
import React from "react";
import ProductCard from "./ProductCard";
import { getFinancialProducts } from "@/data/financialProductsData";

const ProductGrid: React.FC = () => {
  const products = getFinancialProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
