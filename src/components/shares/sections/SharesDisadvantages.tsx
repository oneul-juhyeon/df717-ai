
import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const SharesDisadvantages: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Advantages of trading stock CFDs</h2>
      <p className="mb-4 text-left">
        CFD trading gives you greater flexibility to open "buy" or "sell" trading positions on a wide range of global markets and potentially benefit from either rising or falling prices. Moreover, the use of leverage could amplify your exposure to the markets.
      </p>
      <p className="mb-8 text-left">
        But what is the right trading method for you? See how stock CFD trading compares to traditional stock trading (investing).
      </p>

      <h2 className="text-3xl mt-12 mb-4">Disadvantages of trading stock CFDs</h2>
      <p className="mb-4 text-left">
        Stock CFDs offer bigger exposure to the markets with the use of leverage, which could potentially amplify profits. However, leverage could also amplify losses. It is also important to remember that, unlike traditional trading, stock CFDs do not give you the option of stock ownership.
      </p>
      <p className="mb-8 text-left">
        When trading with leverage, depending on the region you live in, you might also be subjected to margin requirements. If your total balance falls below the margin requirement, your positions will close automatically with a loss.
      </p>

      <div className="overflow-x-auto">
        <Table className="min-w-full border-collapse mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Stock CFDs</TableHead>
              <TableHead>Traditional stock trading</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Use leverage</TableCell>
              <TableCell>Pay full price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Multiple markets</TableCell>
              <TableCell>Equities and ETFs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>You don't own the underlying asset</TableCell>
              <TableCell>Ownership of the underlying asset</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Go short and benefit from falling prices</TableCell>
              <TableCell>No option to benefit from falling prices</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>No shareholder privileges</TableCell>
              <TableCell>Shareholder privileges and potential voting rights</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Option to hedge your trades</TableCell>
              <TableCell>Hedging requires the use of derivatives (options, futures, and inverse ETFs)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SharesDisadvantages;
