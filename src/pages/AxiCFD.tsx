import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AxiCallToAction from "@/components/axi/AxiCallToAction";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const AxiCFD: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <div className="bg-white text-black rounded-lg mt-8 overflow-hidden">
          {/* Blog Content */}
          <article className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">What is CFD trading and how to trade CFDs?</h1>
              
              <div className="flex items-center gap-2 mb-8">
                <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-100">Education</Badge>
                <span className="text-gray-500">/</span>
                <span className="text-gray-700 font-medium">Milan Cutkovic</span>
              </div>
              
              {/* Hero Image */}
              <div className="mb-12">
                <img 
                  src="/lovable-uploads/axi-cfd1.png" 
                  alt="CFD Trading Guide" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="prose max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
                <h2 className="text-3xl mt-8 mb-4">What are CFDs?</h2>
                <p className="mb-8 text-left">
                  A CFD, short for 'Contract for Difference,' is a type of financial derivative that allows traders to speculate on the price movements of various underlying assets, such as stocks, commodities, currencies, or indices, without owning the actual underlying asset.
                </p>
                
                <h2 className="text-3xl mt-12 mb-4">What is the CFDs market?</h2>
                
                {/* Market Image */}
                <div className="my-8">
                  <img 
                    src="/lovable-uploads/axi-cfd2.png" 
                    alt="CFD Markets" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <p className="mb-4 text-left">
                  A wide variety of products and assets can be traded as contracts for difference. In this market, the main types of CFDs include:
                </p>
                
                <ul className="list-disc pl-6 mb-6 text-left">
                  <li className="mb-4">
                    <strong>Forex:</strong> Forex or 'FX' is short for foreign exchange, while 'forex trading' refers to the act of buying or selling major, minor, and exotic currency pairs. Major forex currency pairs contain the US dollar, such as EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD, and USD/CHF. Minor currency pairs include EUR/GBP, GBP/JPY, GBP/CAD, CHF/JPY, EUR/AUD, and NZD/JPY. Exotic currency pairs include the combination of one of the 8 major currencies and a currency from a developing or emerging economy, such as AUD/SEK (Australian Dollar/Swedish Krona), CAD/SGD (Canadian Dollar/Singapore Dollar), and GBP/CZK (British Pound/Czech Republic Koruna).
                  </li>
                  <li className="mb-4">
                    <strong>Stocks:</strong> The stock market is where investors can buy and sell shares of publicly traded companies. The largest and most popular stock market in the world is the US stock market, made up of 4,000+ companies from stock exchanges such as the NYSE (New York Stock Exchange), NASDAQ, AMEX, and more. Using CFDs, you can trade a wide range of stocks, including top growth stocks (stocks seen as having high future potential) and value stocks (stocks deemed to be trading below their real worth). Popular growth stocks include top American technology companies, frequently referred to as FAANG: Facebook (META), Amazon (AMZN), Apple (AAPPL), Netflix (NFLX), and Alphabet (GOOG).
                  </li>
                  <li className="mb-4">
                    <strong>Indices:</strong> Indices are "baskets" of individual, but related, stocks. For example, the S&P 500 index represents the overall stock performance of 500 of the largest companies listed on stock exchanges in the USA, while the NDXT (NASDAQ-100 Technology Sector Index) measures the performance of 100 top technology companies. Indices are usually ranked by independent institutions like the FTSE Group, Deutsche Börse, and Standard & Poor's. Some of the most popular indices include the S&P 500, Dow Jones, NYSE, NASDAQ, and FTSE 100.
                  </li>
                  <li className="mb-4">
                    <strong>Commodities:</strong> Commodities are common raw materials used in the production of other goods or traded on the open market. Commodities can be split into two categories: soft commodities and hard commodities. Agricultural products, like coffee and cocoa, are considered soft commodities, while precious metals like gold or silver and energy, such as natural gas and oil, are considered hard commodities.
                  </li>
                  <li className="mb-4">
                    <strong>Cryptocurrencies:</strong> Cryptocurrencies such as Bitcoin, Ethereum, and Litecoin are a relatively new form of digital currency powered by decentralised peer-to-peer networks called blockchains. Unlike traditional forms of money issued by central banks, cryptocurrencies are typically not overseen by a government or financial institution and do not require a financial intermediary to operate. Instead, crypto networks are managed by network participants who verify and confirm transactions.
                  </li>
                  <li className="mb-4">
                    <strong>Initial Public Offerings (IPOs):</strong> An IPO is the process through which a privately held company offers its shares to the public for the first time and invites potential investors to gain exposure to its shares via a stock exchange. When you trade an IPO with CFDs, you go long (buy) or short (sell) on stock price movements. This means that you have the option to open a short (sell) position on IPO shares, depending on your strategy and the IPO's expected result.
                  </li>
                </ul>
                
                <h2 className="text-3xl mt-12 mb-4">What is CFD trading?</h2>
                <p className="mb-6 text-left">
                  When trading a CFD, you enter into a contract with a broker to exchange the difference in the price of the underlying asset between the opening and closing of the contract. If you believe the market price of the asset (e.g., forex currencies, stocks, commodities) will rise, you can go long (buy), and if you expect it to fall, you can go short (sell). The profit or loss is determined by the difference in the price movement of the asset in the open market.
                </p>
                
                <h2 className="text-3xl mt-12 mb-4">How does CFD trading work?</h2>
                <p className="mb-6 text-left">
                  CFD trading works by allowing you to speculate on the price movements of a financial instrument without having to take ownership of the underlying asset. If the market price of the asset moves in the same direction as your CFD trade, you will make a profit.
                </p>
                
                <p className="mb-6 text-left">
                  There are two prices to look for in a CFD trade: the "buy" price and the "sell" price. The action you choose to take will depend on whether you think the price will rise or fall.
                </p>
                
                <ul className="list-disc pl-6 mb-6 text-left">
                  <li className="mb-2">
                    <strong>Long position:</strong> A long position takes place when a trader places a BUY trade. Here, the trader expects that the asset value will rise over time. The trader will BUY at a low price but SELL once the price rises.
                  </li>
                  <li className="mb-2">
                    <strong>Short position:</strong> A short position happens when the trader feels there will be a decline in the value of the asset and selects a SELL position.
                  </li>
                </ul>
                
                {/* Buy/Sell Image */}
                <div className="my-8">
                  <img 
                    src="/lovable-uploads/axi-cfd3.png" 
                    alt="Buy and Sell CFDs" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <p className="mb-4 text-left">Let's explore that concept using some examples:</p>
                
                <ul className="list-disc pl-6 mb-6 text-left">
                  <li className="mb-4">
                    <strong>Gold CFD trading example:</strong> You see that gold is currently priced at $1,820. As you follow market news and economic analysis, you speculate that the value of gold will increase. You, therefore, open a 'long' position at gold's current buy price. Let's assume that, at the time of contract closing, the price of gold has gone up to $1,901. The market direction matches the direction of your trade, so your CFD position has made a profit. However, if the price had decreased below your initial purchase price, you would have incurred a loss.
                  </li>
                  <li className="mb-4">
                    <strong>Shares CFD trading example:</strong> After Meta posted a disappointing earnings report, you are convinced the company is overvalued and that this is the beginning of a deeper correction instead of a temporary sell-off. Therefore, you decide to short Meta at $250. If the stock price of Meta did continue to slide, your trade would show a profit. However, if the price of Meta rebounds and rises back above $250, you would face a loss in your position.
                  </li>
                </ul>
                
                <h2 className="text-3xl mt-12 mb-4">Why trade CFDs?</h2>
                <p className="mb-6 text-left">
                  A key advantage of CFD trading is the accessibility it provides to a wide range of markets and assets. With CFDs, traders can access various financial instruments, including stocks, indices, commodities, and currencies, all from a single trading platform. This means traders can diversify their portfolios and take advantage of opportunities in different markets, even if they don't have direct access to those assets. The ability to trade on margin also enhances accessibility, as it allows traders to control larger positions with a smaller amount of capital, potentially amplifying their potential returns.
                </p>
                
                <Alert className="bg-yellow-50 text-yellow-800 border border-yellow-200 mb-8 text-left">
                  <AlertDescription>
                    Note: Trading with leverage can also amplify losses, so strict risk management practices should be followed.
                  </AlertDescription>
                </Alert>
                
                {/* Trading Platform Image */}
                <div className="my-8">
                  <img 
                    src="/lovable-uploads/axi-cfd4.png" 
                    alt="Trading Platform" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <p className="mb-8 text-left">
                  CFD trading also offers flexibility and the opportunity to profit from both rising and falling markets. With CFDs, traders can take long (buy) positions if they expect an asset's price to rise or short (sell) positions if they anticipate a price decline. This means that traders can potentially profit from market movements in either direction, enabling them to capitalise on different market conditions.
                </p>
                
                <h2 className="text-3xl mt-12 mb-4">How to Trade CFDs</h2>
                
                {/* Trading Guide Image */}
                <div className="my-8">
                  <img 
                    src="/lovable-uploads/axi-cfd5.png" 
                    alt="Trading Guide" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <p className="mb-6 text-left">
                  CFD trading is available to anyone who has opened a trading account with an online broker. Once the account has been set up, you can use the following general guide to help with setting up a standard CFD trade:
                </p>
                
                <ol className="list-decimal pl-6 mb-8 text-left">
                  <li className="mb-2">
                    <strong>Select an asset:</strong> Choose the financial instrument you want to trade, such as stocks, indices, commodities, or currencies.
                  </li>
                  <li className="mb-2">
                    <strong>Choose your position:</strong> Decide whether you think the price of your chosen asset will rise (go long) or fall (go short). If you expect the price to increase, you could enter a long position, and if you expect the price to decrease, you could enter a short position.
                  </li>
                  <li className="mb-2">
                    <strong>Determine your trade size:</strong> Specify the number of CFD units you want to trade. CFDs are typically traded in 'lots,' and each contract represents a specific unit size of the underlying asset.
                  </li>
                  <li className="mb-2">
                    <strong>Set your leverage:</strong> Leverage allows you to control a larger trade position with a relatively smaller amount of capital. However, it's important to note that leverage can amplify both profits and losses.
                  </li>
                  <li className="mb-2">
                    <strong>Monitor the market:</strong> Use the trading platform provided by your broker to monitor the price movements of assets in real time. CFD trading platforms typically offer various tools to help analyse and monitor the market.
                  </li>
                  <li className="mb-2">
                    <strong>Place the trade:</strong> When you are ready to enter the market, place your order through the trading platform. You will specify the type of trade (buy or sell), the trade size, and any additional parameters required by the platform. It is also recommended to use tools such as stop-loss and take-profit to lock in profits and reduce potential losses.
                  </li>
                  <li className="mb-2">
                    <strong>Monitor your position:</strong> Once your trade is executed, monitor your position and track the price movements of the asset. If your trade does not have a set expiry, you can choose to close your position at any time according to your trading strategy.
                  </li>
                </ol>
                
                <h2 className="text-3xl mt-12 mb-4">Advantages of trading CFDs</h2>
                
                <ul className="list-disc pl-6 mb-8 text-left">
                  <li className="mb-2"><strong>Access to multiple markets:</strong> CFD trading allows access to a wide range of markets, including stocks, indices, commodities, currencies, and more, providing many potential trading opportunities.</li>
                  <li className="mb-2"><strong>Leverage and margin trading:</strong> CFD trades offer leverage, enabling traders to control larger positions with a smaller amount of capital. This amplifies potential profits (and losses) while allowing for flexibility in terms of capital allocation.</li>
                  <li className="mb-2"><strong>Long and short positions:</strong> CFDs allow traders to take advantage of both rising and falling markets. By taking long positions, traders can potentially benefit from upward price movements, while short positions may allow them to profit from downward price movements.</li>
                  <li className="mb-2"><strong>Ability to hedge:</strong> CFDs can be used as a hedging tool to offset potential losses in an existing portfolio. By taking opposing positions, traders can mitigate risk and protect their investments.</li>
                  <li className="mb-2"><strong>No ownership of the underlying asset:</strong> CFD trading allows traders to speculate on price movements without owning the actual asset, eliminating the need for the often-large upfront investment required for ownership and the potential storage costs of physical assets (e.g., commodities like a barrel of oil or silo of grain).</li>
                  <li className="mb-2"><strong>Flexibility in trade sizes:</strong> CFDs offer flexibility in choosing trade sizes, allowing traders to tailor their positions to their risk appetite and goals.</li>
                  <li className="mb-2"><strong>Quick and convenient execution:</strong> CFD trades can be executed quickly and conveniently through online trading platforms, providing immediate access to markets and real-time price quotes.</li>
                  <li className="mb-2"><strong>Wide access to global markets:</strong> CFD trading provides access to global markets, allowing traders to diversify their portfolios and potentially increase their chances of finding profitable trades.</li>
                  <li className="mb-2"><strong>Availability of risk management tools:</strong> CFD platforms often offer risk management tools, such as stop-loss orders and take-profit orders, to help traders manage and limit potential losses.</li>
                  <li className="mb-2"><strong>Earn dividends:</strong> Traders are eligible to earn dividends if they hold a long position in an individual stock or a stock index. The dividend adjustment is only negative if the trader holds a short position.</li>
                </ul>
                
                <h2 className="text-3xl mt-12 mb-4">Disadvantages of trading CFDs</h2>
                
                <ul className="list-disc pl-6 mb-8 text-left">
                  <li className="mb-2"><strong>Volatility risk:</strong> CFDs can be traded on volatile assets, which can lead to rapid price fluctuations. Sudden market movements can result in substantial losses or trigger margin calls.</li>
                  <li className="mb-2"><strong>Leverage amplifies losses:</strong> While leverage can enhance potential profits, it also magnifies losses. Trading with leverage increases the risk of significant losses, as losses can exceed the initial investment.</li>
                  <li className="mb-2"><strong>Broker risk:</strong> CFD trades are executed with a broker or financial institution, exposing traders to counterparty risk. If the broker fails or goes bankrupt, there is a risk of losing the invested capital or facing difficulties in withdrawing funds. Traders should do their due diligence and choose a licenced, regulated, and reputable broker.</li>
                  <li className="mb-2"><strong>Fees and charges:</strong> Some CFD brokers may have unexpected fees or charges, such as overnight financing costs, commissions, or platform fees. Traders should carefully review the fee structure of their chosen broker to understand the total cost of trading.</li>
                  <li className="mb-2"><strong>Overtrading and emotional decision-making:</strong> The accessibility of CFD trading can lead to overtrading and emotional decision-making. Impulsive trading based on emotions rather than a well-thought-out strategy can result in poor trading outcomes.</li>
                  <li className="mb-2"><strong>Complex pricing structure:</strong> CFD prices in fast-moving markets can be complex and may not always mirror the exact price of the underlying asset. Factors like spreads, commissions, and financing costs can affect the pricing, making it important for traders to understand the pricing structure of CFDs.</li>
                  <li className="mb-2"><strong>Regulatory risks:</strong> The regulatory environment for CFD trading varies across different jurisdictions. Regulatory changes or restrictions imposed by authorities can impact the availability, leverage limits, or other aspects of CFD trading.</li>
                  <li className="mb-2"><strong>Lack of ownership and voting rights:</strong> CFD traders do not own the underlying asset and do not have voting rights in the associated company.</li>
                </ul>
                
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
                  <table className="min-w-full bg-white border border-gray-200 text-left">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CFD trading</th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional trading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Capital requirement</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Use leverage</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Pay the full upfront price</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Market access</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Multiple markets</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Equities and ETFs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Asset ownership</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">You do not own the underlying asset</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Ownership of the underlying asset</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Profit potential</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Go short and benefit from falling prices</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">No option to benefit from falling prices</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Shareholder rights</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">No shareholder privileges</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Shareholder privileges and voting rights</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Tax</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">No stamp duty, but profits are liable for capital gains tax</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">You pay stamp duty and capital gains tax on your profits</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Hedging</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Option to hedge your trades</td>
                        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Hedging requires the use of derivatives (options, futures, and inverse ETFs)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h2 className="text-3xl mt-12 mb-4">How do I manage risk in CFD trading?</h2>
                <p className="mb-6 text-left">
                  In trading, you can have the best strategy in the world, but without risk management, it is hard to stay profitable in the long run. Markets are volatile, so risk management is essential.
                </p>
                
                {/* Risk Management Image */}
                <div className="my-8">
                  <img 
                    src="/lovable-uploads/axi-cfd6.png" 
                    alt="Risk Management" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <h3 className="text-2xl mt-8 mb-4">5 risk management tools and tips</h3>
                <ol className="list-decimal pl-6 mb-8 text-left">
                  <li className="mb-2">
                    <strong>Use a stop-loss:</strong> A stop-loss is a predetermined level at which a trade automatically closes once the set price is reached. It's like a safety net if a trade goes against you, helping ensure a loss is not larger than the amount you are comfortable losing.
                  </li>
                  <li className="mb-2">
                    <strong>Use a take-profit:</strong> Want to secure your gains before the market gets a chance to reverse on you? Set a take-profit level and when the market reaches it, your trade will automatically close and lock in your profit.
                  </li>
                  <li className="mb-2">
                    <strong>Use a trailing stop:</strong> A trailing stop is designed to limit losses AND lock in gains; think of it as being like a stop-loss, with additional flexibility. It sits at a set distance from the current price and moves up and down with the market.
                  </li>
                  <li className="mb-2">
                    <strong>Adjust your lot size:</strong> Size matters in trading. The bigger the position, the greater the potential returns but also the higher the risk. To help determine the right trade size, consider how much you are willing to lose if the trade goes against you.
                  </li>
                  <li className="mb-2">
                    <strong>Use trading calculators:</strong> Use free online calculators to help set your trades:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Margin calculator: See how much margin is needed to open a position.</li>
                        <li>Profit/loss calculator: This tool helps estimate profits and losses and set stop-loss and take-profit levels.</li>
                        <li>Pip calculator: Estimates potential profits or losses based on pip movements.</li>
                      </ul>
                  </li>
                </ol>
                
                <h2 className="text-3xl mt-12 mb-4">FAQ</h2>
                
                <div className="my-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b border-gray-200">
                      <AccordionTrigger className="py-6 flex">
                        <div className="flex items-center">
                          <div className="w-1 h-16 bg-red-500 mr-4"></div>
                          <h3 className="text-xl font-bold">Is CFD trading allowed in my country?</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-5 pb-6 text-gray-700">
                        <p className="text-left">
                          Certain countries do not allow CFD trading. If your country of residence is not displayed on the online application form when opening a trading account, you cannot do so.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-b border-gray-200">
                      <AccordionTrigger className="py-6 flex">
                        <div className="flex items-center">
                          <div className="w-1 h-16 bg-red-500 mr-4"></div>
                          <h3 className="text-xl font-bold">Is trading CFDs safe?</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-5 pb-6 text-gray-700">
                        <p className="text-left">
                          As with any financial instrument or investment, trading CFDs comes with a risk. The use of leverage can make CFDs riskier than non-leveraged products, such as physical shares. Before you start trading with a live account, you should familiarise yourself with those products, practise in a risk-free environment, and learn more about risk management.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-b border-gray-200">
                      <AccordionTrigger className="py-6 flex">
                        <div className="flex items-center">
                          <div className="w-1 h-16 bg-red-500 mr-4"></div>
                          <h3 className="text-xl font-bold">What is the minimum volume I can trade for a CFD product?</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-5 pb-6 text-gray-700">
                        <p className="text-left">
                          The minimum trade size for Standard and Pro accounts with Axi is 0.01 lots. However, this number may change depending on the instrument you are trading.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4" className="border-b border-gray-200">
                      <AccordionTrigger className="py-6 flex">
                        <div className="flex items-center">
                          <div className="w-1 h-16 bg-red-500 mr-4"></div>
                          <h3 className="text-xl font-bold">What is the difference between CFDs and options?</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-5 pb-6 text-gray-700">
                        <p className="text-left">
                          Options and CFDs share some common characteristics. They can both provide high leverage, and flexibility can be used for both hedging and speculation. However, there are some major differences between the two. When you buy a CFD, you agree to exchange the difference in price from when you opened a trade to when you closed it. Options give a trader the right (but not the obligation) to buy or sell an asset at a certain price in the future. Options offer more flexibility, and traders can create complex strategies using these instruments.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5" className="border-b border-gray-200">
                      <AccordionTrigger className="py-6 flex">
                        <div className="flex items-center">
                          <div className="w-1 h-16 bg-red-500 mr-4"></div>
                          <h3 className="text-xl font-bold">What is the difference between CFD trading and futures?</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-5 pb-6 text-gray-700">
                        <p className="text-left mb-2">
                          A CFD depicts the price movement of an asset, which gives the investor a clear picture of the value changes that occur while holding a position open.
                        </p>
                        <p className="text-left mb-2">
                          When a trader agrees to a futures contract, they agree to buy or sell the underlying asset at a predetermined price and date in the future. It is a contract that will be executed in the future, and the set price will stay unchanged, irrespective of the value movement of the asset. The buyer of a futures contract must execute the underlying asset when the contract expires. Consequently, the seller of the contract ordeal has the obligation to provide the asset at the agreed date.
                        </p>
                        <p className="text-left mb-2">
                          Futures operate based on prices established by the markets as they are traded on exchanges, while CFDs work based on prices established by the broker. Thus, the integrity of the price is expected to be higher in the case of futures when compared with CFDs.
                        </p>
                        <p className="text-left">
                          Simply put, futures can be considered a less flexible and more structured alternative to CFDs.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-6" className="border-b border-gray-200">
                      <AccordionTrigger className="py-6 flex">
                        <div className="flex items-center">
                          <div className="w-1 h-16 bg-red-500 mr-4"></div>
                          <h3 className="text-xl font-bold">What is the contract length of CFDs?</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-5 pb-6 text-gray-700">
                        <p className="text-left mb-2">
                          The point at which a CFD contract matures is called the CFD contract rollover date. A futures contract's expiration date serves as the last day you can trade that particular contract.
                        </p>
                        <p className="text-left mb-2">
                          Before contract expiry, a futures trader has three options: offsetting or liquidating the position, settlement, or rollover. A rollover is when a trader moves their position from the front-month contract (close to the expiration date) to another contract date further in the future to avoid the costs or obligations associated with the settlement of the contracts. Contract rollovers are profit-neutral.
                        </p>
                        <p className="text-left">
                          Note: A CFD contract rollover date is not applicable to all trading products.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-7" className="border-b border-gray-200">
                      <AccordionTrigger className="py-6 flex">
                        <div className="flex items-center">
                          <div className="w-1 h-16 bg-red-500 mr-4"></div>
                          <h3 className="text-xl font-bold">Are CFDs better than stocks?</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-5 pb-6 text-gray-700">
                        <p className="text-left mb-2">
                          The decision to trade CFDs versus invest in stocks is up to the individual and their financial means and goals.
                        </p>
                        <p className="text-left mb-2">
                          Share CFDs allow you to utilise leverage when trading the movement of stock prices, meaning you have the potential to make higher profits with a smaller amount of capital. While this can increase returns, it also increases risk. Trading share CFDs allows flexibility; you can go long (buy) when you expect prices to go up or go short (sell) to profit from falling stock prices.
                        </p>
                        <p className="text-left">
                          However, with CFDs, you will not have any voting rights, and the tax liabilities might differ from those of physical shares, depending on your country of residence.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-8" className="border-b border-gray-200">
                      <AccordionTrigger className="py-6 flex">
                        <div className="flex items-center">
                          <div className="w-1 h-16 bg-red-500 mr-4"></div>
                          <h3 className="text-xl font-bold">What markets can I trade with Axi?</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-5 pb-6 text-gray-700">
                        <p className="text-left">
                          Axi provides access to a wide range of markets for CFD trading. Please refer to our Product Schedule for a full list of CFD trading instruments.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </article>
        </div>
        
        <section className="my-20 w-full">
          <AxiCallToAction />
        </section>
      </div>
    </main>
  );
};

export default AxiCFD;
