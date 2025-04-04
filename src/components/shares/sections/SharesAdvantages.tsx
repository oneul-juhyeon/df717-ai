
import React from "react";

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
      <ul className="list-disc ml-6 mb-4 text-left text-gray-700">
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
        <table className="w-full text-left border-collapse mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-300">US Stocks</th>
              <th className="p-3 border border-gray-300">UK Stocks</th>
              <th className="p-3 border border-gray-300">EU Stocks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-gray-300">Alibaba</td>
              <td className="p-3 border border-gray-300">Aviva</td>
              <td className="p-3 border border-gray-300">Adidas</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Alphabet</td>
              <td className="p-3 border border-gray-300">BP</td>
              <td className="p-3 border border-gray-300">Airbus</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Amazon</td>
              <td className="p-3 border border-gray-300">easyJet</td>
              <td className="p-3 border border-gray-300">BASF</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Apple</td>
              <td className="p-3 border border-gray-300">HSBC</td>
              <td className="p-3 border border-gray-300">BNP Paribas</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Facebook</td>
              <td className="p-3 border border-gray-300">GSK</td>
              <td className="p-3 border border-gray-300">Daimler</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Microsoft</td>
              <td className="p-3 border border-gray-300">Lloyds</td>
              <td className="p-3 border border-gray-300">Deutsche Bank</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Netflix</td>
              <td className="p-3 border border-gray-300">Rio Tinto</td>
              <td className="p-3 border border-gray-300">Kering</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Pfizer</td>
              <td className="p-3 border border-gray-300">Rolls-Royce Holdings</td>
              <td className="p-3 border border-gray-300">LVMH</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Tesla</td>
              <td className="p-3 border border-gray-300">Tesco</td>
              <td className="p-3 border border-gray-300">Sanofi</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Walt Disney Co.</td>
              <td className="p-3 border border-gray-300">Vodafone</td>
              <td className="p-3 border border-gray-300">Siemens</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SharesAdvantages;
