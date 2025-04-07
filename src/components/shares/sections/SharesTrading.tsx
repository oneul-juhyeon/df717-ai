
import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const SharesTrading: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What is stock trading?</h2>
      <p className="mb-4 text-left">
        Stock trading is a type of investment activity where individuals or institutions buy and sell stocks on various financial markets. It involves analysing market trends, company performance, and economic factors to make informed decisions about buying or selling stocks.
      </p>
      <p className="mb-8 text-left">
        Owning stocks can come with benefits such as a claim on assets, the power to vote, and receiving dividends.
      </p>
      
      <div className="mb-8">
        <h3 className="text-2xl mb-4">Common Stock Types</h3>
        <Table className="min-w-full border-collapse">
          <TableHeader>
            <TableRow className="border-b border-gray-700">
              <TableHead className="text-white bg-[#1e2a3a]">Type</TableHead>
              <TableHead className="text-white bg-[#1e2a3a]">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Growth Stocks</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Companies expected to grow at an above-average rate</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Value Stocks</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Stocks that appear to trade for less than their intrinsic value</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Blue-Chip Stocks</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Shares of large, well-established companies with stable earnings</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SharesTrading;
