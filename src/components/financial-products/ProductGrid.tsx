
import React from "react";
import { getFinancialProducts } from "@/data/financialProductsData";
import { Link } from "react-router-dom";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const ProductGrid: React.FC = () => {
  const products = getFinancialProducts();

  return (
    <div className="w-full">
      <Table>
        <TableBody>
          {products.map((product, index) => (
            <React.Fragment key={product.title}>
              <TableRow 
                className="group transition-all duration-300 hover:bg-white/5 cursor-pointer"
              >
                <TableCell className="p-0">
                  <Link 
                    to={product.path} 
                    className="block w-full py-5 px-2 text-left"
                  >
                    <span className="text-white text-lg font-medium tracking-wide">
                      {product.title}
                    </span>
                  </Link>
                </TableCell>
              </TableRow>
              {index < products.length - 1 && (
                <TableRow>
                  <TableCell className="p-0">
                    <Separator className="bg-[#5b5b5d]/50 h-[0.5px] w-full" />
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductGrid;
