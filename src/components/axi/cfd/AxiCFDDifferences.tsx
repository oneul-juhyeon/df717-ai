
import React from "react";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";

const AxiCFDDifferences: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Differences between CFD trading and traditional trading</h2>
      
      <p className="mb-6 text-left">
        Both CFD and traditional trading (for example, buying stocks) provide exposure to share price movements. However, there are some key differences between the two.
      </p>
      
      <p className="mb-6 text-left">
        When you trade or invest in shares, you take direct ownership of an asset, usually company stocks. In this case, you can only make a profit by selling your shares at a higher price than what you bought them for.
      </p>
      
      <p className="mb-6 text-left">
        With CFD trading, you are only trading price movements, so you can go long (buy) or short (sell) on instruments on a variety of global markets, such as stocks, commodities, forex, and indices. This enables you to potentially profit or lose from price fluctuations on the market without owning the underlying asset.
      </p>
      
      <p className="mb-6 text-left">
        Another key difference between the two is the use of leverage. CFDs are leveraged products, meaning you effectively put down a small percentage of the capital required to open a full trade position, and then borrow the rest from your broker. This allows you to use a small amount of money to potentially make significantly higher returns (or losses). With stock trading, you use your own money to buy a stock, and you are required to pay the full upfront price.
      </p>
      
      <div className="overflow-x-auto mb-8">
        <Table className="min-w-full border-collapse">
          <TableHeader>
            <TableRow className="border-b border-gray-700">
              <TableHead className="text-white bg-[#1e2a3a]"></TableHead>
              <TableHead className="text-white bg-[#1e2a3a]">CFD trading</TableHead>
              <TableHead className="text-white bg-[#1e2a3a]">Traditional trading</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Capital requirement</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Use leverage</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Pay the full upfront price</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Market access</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Multiple markets</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Equities and ETFs</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Asset ownership</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">You do not own the underlying asset</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Ownership of the underlying asset</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Profit potential</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Go short and benefit from falling prices</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">No option to benefit from falling prices</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Shareholder rights</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">No shareholder privileges</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Shareholder privileges and voting rights</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Tax</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">No stamp duty, but profits are liable for capital gains tax</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">You pay stamp duty and capital gains tax on your profits</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-700">
              <TableCell className="text-neutral-200 bg-[#0d1117]">Hedging</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Option to hedge your trades</TableCell>
              <TableCell className="text-neutral-200 bg-[#0d1117]">Hedging requires the use of derivatives (options, futures, and inverse ETFs)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default AxiCFDDifferences;
