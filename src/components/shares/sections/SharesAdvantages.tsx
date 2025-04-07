
import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const SharesAdvantages: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Why trade stock CFDs?</h2>
      <p className="mb-4 text-left">
        Trading stock CFDs allows you to get involved with your favourite global companies by speculating on price movements.
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/shares5.png" 
          alt="Trading Stock CFDs" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <h3 className="text-2xl mt-8 mb-4 font-bold">1. Flexibility to go long and short</h3>
      <p className="mb-4 text-left">
        Trading stock CFDs offers flexibility and allows you to potentially profit from either market direction. You can go long (buy) when you expect prices to go up or go short (sell) when you expect prices to drop.
      </p>
      <p className="mb-4 text-left">
        Traditional stock trading differs from CFD trading in that it derives value from ownership. When you own the underlying asset, the stock price must increase to make a profit - you can only trade in one direction.
      </p>
      
      <h3 className="text-2xl mt-8 mb-4 font-bold">2. Leverage</h3>
      <p className="mb-4 text-left">
        Stock CFDs allow you to trade on margin. This means you only need to put up a small percentage of the full value of a trade to open a position. Investing directly in traditional stocks could often require generous initial capital because you are paying the full price for every single share you are buying.
      </p>
      <p className="mb-4 text-left">
        For most CFD brokers, a trader only needs to pay 5% of the full price of the share. In practice, this means you can enter a position that is 20 times larger with the same amount of capital when compared to traditional shares.
      </p>
      <p className="mb-4 text-left">
        Stock CFDs are leveraged, meaning you can potentially make higher profits with a smaller amount of capital. While this can increase returns, it also increases the risk of loss.
      </p>
      
      <h3 className="text-2xl mt-8 mb-4 font-bold">3. FAANG: Top technology companies</h3>
      <p className="mb-4 text-left">
        FAANG is an acronym for the five largest companies in the technology sector of the US Stock Market. They are:
      </p>
      <ul className="list-disc ml-6 mb-4 text-left text-white">
        <li>F - Facebook (FB)</li>
        <li>A - Apple (AAPL)</li>
        <li>A - Amazon (AMZN)</li>
        <li>N - Netflix (NFLX)</li>
        <li>G - Google (GOOG or GOOGL)</li>
      </ul>
      <p className="mb-8 text-left">
        As well as being household names due to the nature of the services they provide, the FAANG stocks will be familiar to most people simply because of how large and profitable they are. But perhaps the most important thing for traders and investors is that they continue to have strong potential for growth.
      </p>
      
      <div className="overflow-x-auto">
        <Table className="min-w-full border-collapse mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>US Stocks</TableHead>
              <TableHead>UK Stocks</TableHead>
              <TableHead>EU Stocks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Alibaba</TableCell>
              <TableCell>Aviva</TableCell>
              <TableCell>Adidas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Alphabet</TableCell>
              <TableCell>BP</TableCell>
              <TableCell>Airbus</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Amazon</TableCell>
              <TableCell>easyJet</TableCell>
              <TableCell>BASF</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Apple</TableCell>
              <TableCell>HSBC</TableCell>
              <TableCell>BNP Paribas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Facebook</TableCell>
              <TableCell>GSK</TableCell>
              <TableCell>Daimler</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microsoft</TableCell>
              <TableCell>Lloyds</TableCell>
              <TableCell>Deutsche Bank</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Netflix</TableCell>
              <TableCell>Rio Tinto</TableCell>
              <TableCell>Kering</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pfizer</TableCell>
              <TableCell>Rolls-Royce Holdings</TableCell>
              <TableCell>LVMH</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tesla</TableCell>
              <TableCell>Tesco</TableCell>
              <TableCell>Sanofi</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Walt Disney Co.</TableCell>
              <TableCell>Vodafone</TableCell>
              <TableCell>Siemens</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SharesAdvantages;
