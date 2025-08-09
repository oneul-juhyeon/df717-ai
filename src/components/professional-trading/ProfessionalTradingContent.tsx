import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";

const ProfessionalTradingContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <FinancialProductArticleHeader 
        title="Professional Trading: Built by Traders, for Traders"
        subtitle="Experience institutional-grade trading with ICMarkets - where professional execution meets uncompromising safety"
        isMainTitle={true}
      />
      
      <div className="prose prose-invert max-w-none text-left">
        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Why ICMarkets Leads Professional Trading</h2>
        
        <p className="text-gray-300 leading-relaxed mb-6">
          Since 2007, ICMarkets has revolutionized online forex trading by <strong className="text-white">bridging the gap between retail and institutional traders</strong>. We provide access to pricing and liquidity previously only available to investment banks and high net worth individuals.
        </p>

        <h3 className="text-2xl font-bold text-white mb-4">Our Mission: Democratize Institutional Trading</h3>
        
        <p className="text-gray-300 leading-relaxed mb-6">
          ICMarkets was founded by financial services professionals with one clear vision: create the best and most transparent trading experience for both retail and institutional clients, allowing traders to focus on what matters most - their trading.
        </p>

        <div className="bg-black border border-gray-600 p-6 rounded-lg mb-8">
          <p className="text-white text-lg font-semibold">
            <strong className="text-green-400">Built by traders, for traders</strong> - every decision we make is viewed through one lens: "How does this benefit our clients?"
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Superior Trading Conditions</h2>

        <h3 className="text-2xl font-bold text-white mb-4">Raw Spread Pricing: True Institutional Access</h3>
        
        <p className="text-gray-300 leading-relaxed mb-6">
          Experience <strong className="text-green-400">0.0 pip spreads</strong> with our Raw Spread pricing model - no requotes, no price manipulation, no restrictions. Just pure, institutional-grade pricing streamed from over 25 different sources.
        </p>

        <h4 className="text-xl font-bold text-white mb-4">Live Spreads Performance</h4>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 p-3 text-left text-white">Currency Pair</th>
                <th className="border border-gray-600 p-3 text-left text-green-400">ICMarkets Raw</th>
                <th className="border border-gray-600 p-3 text-left text-gray-300">Industry Average</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 p-3 text-white font-semibold">EUR/USD</td>
                <td className="border border-gray-600 p-3 text-green-400 font-semibold">0.02 pips</td>
                <td className="border border-gray-600 p-3 text-gray-300">0.8 pips</td>
              </tr>
              <tr className="bg-gray-900">
                <td className="border border-gray-600 p-3 text-white font-semibold">GBP/USD</td>
                <td className="border border-gray-600 p-3 text-green-400 font-semibold">0.23 pips</td>
                <td className="border border-gray-600 p-3 text-gray-300">1.2 pips</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-3 text-white font-semibold">USD/JPY</td>
                <td className="border border-gray-600 p-3 text-green-400 font-semibold">0.14 pips</td>
                <td className="border border-gray-600 p-3 text-gray-300">0.9 pips</td>
              </tr>
              <tr className="bg-gray-900">
                <td className="border border-gray-600 p-3 text-white font-semibold">AUD/USD</td>
                <td className="border border-gray-600 p-3 text-green-400 font-semibold">0.03 pips</td>
                <td className="border border-gray-600 p-3 text-gray-300">0.7 pips</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">Lightning-Fast Execution</h3>
        
        <div className="bg-black border border-gray-600 p-6 rounded-lg mb-6">
          <p className="text-green-400 text-xl font-bold mb-4">Average execution: Under 40 milliseconds</p>
          <p className="text-gray-300">Our enterprise-grade infrastructure delivers some of the fastest execution speeds in the industry:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">Infrastructure Excellence</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-green-400">Equinix NY4 & LD5 Data Centers:</strong> Premium financial infrastructure</li>
              <li><strong className="text-green-400">Fiber Optic Connectivity:</strong> Direct connections to liquidity providers</li>
            </ul>
          </div>
          
          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">Performance Metrics</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-green-400">25+ Pricing Providers:</strong> Ensuring best possible pricing 24/5</li>
              <li><strong className="text-green-400">99.99% Uptime:</strong> Enterprise reliability you can count on</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Technology That Gives You The Edge</h2>

        <h3 className="text-2xl font-bold text-white mb-4">Professional Platforms for Every Trading Style</h3>

        <div className="space-y-6 mb-8">
          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">MetaTrader 4 & 5: Enhanced for Professionals</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Raw Spread Access:</strong> Direct institutional pricing</li>
              <li><strong className="text-white">No Trading Restrictions:</strong> Scalping, hedging, EA trading fully supported</li>
              <li><strong className="text-white">Advanced Tools:</strong> Depth of Market, spread monitoring, custom indicators</li>
              <li><strong className="text-white">Ultra-Low Latency:</strong> Less than 1ms to major VPS providers</li>
            </ul>
          </div>

          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">cTrader: Built for Transparency</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Level II Pricing:</strong> Full market depth visibility</li>
              <li><strong className="text-white">Advanced Charting:</strong> Professional analysis capabilities</li>
              <li><strong className="text-white">Algorithmic Trading:</strong> Full cBot and automated trading support</li>
              <li><strong className="text-white">Transparent Execution:</strong> Complete order book access</li>
            </ul>
          </div>

          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">TradingView Integration</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">World-Class Charting:</strong> 50+ technical indicators</li>
              <li><strong className="text-white">Social Trading Features:</strong> Community insights and strategies</li>
              <li><strong className="text-white">Real-Time Data:</strong> Professional-grade market information</li>
              <li><strong className="text-white">Seamless Execution:</strong> Direct trading from charts</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">Infrastructure Built for Performance</h3>
        
        <div className="bg-black border border-gray-600 p-6 rounded-lg mb-8">
          <h4 className="text-lg font-semibold text-green-400 mb-3">Enterprise-Grade Technology Stack:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Co-located Servers:</strong> Located in major financial centers</li>
              <li><strong className="text-white">Redundant Systems:</strong> Multiple failsafe mechanisms</li>
            </ul>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Advanced Risk Management:</strong> Real-time position monitoring</li>
              <li><strong className="text-white">Cybersecurity Excellence:</strong> Bank-grade data protection</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Uncompromising Safety & Regulation</h2>

        <h3 className="text-2xl font-bold text-white mb-4">Multi-Jurisdictional Regulatory Oversight</h3>
        
        <p className="text-gray-300 leading-relaxed mb-6">
          ICMarkets operates under the strictest regulatory frameworks globally:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">ASIC (Australia) - License 335692</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Tier-1 Regulation:</strong> World's most stringent framework</li>
              <li><strong className="text-white">Segregated Client Funds:</strong> Complete protection at major banks</li>
              <li><strong className="text-white">Negative Balance Protection:</strong> Never lose more than you invest</li>
              <li><strong className="text-white">Regular Audits:</strong> Independent verification of compliance</li>
            </ul>
          </div>

          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">CySEC (Cyprus) - License 362/18</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">EU MiFID II Compliance:</strong> European regulatory standards</li>
              <li><strong className="text-white">Capital Adequacy:</strong> Strict financial requirements</li>
              <li><strong className="text-white">Investor Protection:</strong> EU-wide compensation schemes</li>
            </ul>
          </div>

          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-3">Additional Oversight</h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">FSA Seychelles:</strong> Securities Dealer License SD018</li>
              <li><strong className="text-white">SCB Bahamas:</strong> Capital markets regulation</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">Client Fund Protection Excellence</h3>
        
        <div className="bg-black border border-gray-600 p-6 rounded-lg mb-8">
          <h4 className="text-lg font-semibold text-green-400 mb-3">Your Money, Completely Protected:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Segregated Accounts:</strong> Funds held separately at tier-1 banks</li>
              <li><strong className="text-white">No Operational Use:</strong> Client money never used for business expenses</li>
            </ul>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Insurance Coverage:</strong> Professional indemnity protection</li>
              <li><strong className="text-white">Transparent Auditing:</strong> Regular third-party verification</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Why 500,000+ Daily Trades Choose ICMarkets</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Proven Track Record</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">15+ Years Operation:</strong> Stability through multiple market cycles</li>
              <li><strong className="text-white">500,000+ Trades Daily:</strong> Processing institutional volumes</li>
              <li><strong className="text-white">Zero Restrictions:</strong> Full support for all trading strategies</li>
              <li><strong className="text-white">Award-Winning Execution:</strong> Industry recognition for performance</li>
            </ul>
          </div>
          
          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Professional-Grade Features</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Institutional Liquidity:</strong> 25+ tier-1 pricing providers</li>
              <li><strong className="text-white">Scalable Infrastructure:</strong> Handle any volume requirement</li>
              <li><strong className="text-white">Advanced Order Types:</strong> Professional trade management</li>
              <li><strong className="text-white">Real-Time Analytics:</strong> Comprehensive performance tracking</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Account Types for Every Professional</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black border border-green-500 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-green-400">Raw Spread Account</h3>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">0.0 Pip Spreads:</strong> True institutional pricing</li>
              <li><strong className="text-white">Low Commission:</strong> From $3.50 per lot round turn</li>
              <li><strong className="text-white">All Platforms:</strong> MT4, MT5, cTrader, TradingView</li>
              <li><strong className="text-white">No Restrictions:</strong> Complete trading freedom</li>
            </ul>
          </div>
          
          <div className="bg-black border border-gray-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Standard Account</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">No Commission:</strong> Zero additional fees</li>
              <li><strong className="text-white">Competitive Spreads:</strong> From 0.8 pips</li>
              <li><strong className="text-white">Full Platform Access:</strong> All trading tools included</li>
              <li><strong className="text-white">Beginner Friendly:</strong> Ideal for new traders</li>
            </ul>
          </div>
        </div>

        <div className="bg-black border border-gray-600 p-6 rounded-lg text-center mb-8">
          <p className="text-green-400 text-lg font-semibold">
            <strong>Minimum Deposit: $200 across all account types</strong>
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Ready to Trade Like a Professional?</h2>
        
        <p className="text-gray-300 leading-relaxed mb-6">
          ICMarkets provides the institutional-grade infrastructure, regulatory protection, and execution quality that professional traders demand. With over 15 years of proven performance and 500,000+ daily trades, we've built our reputation on delivering what matters most: <strong className="text-white">results</strong>.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Whether you're a scalper requiring ultra-fast execution, an algorithmic trader needing reliable infrastructure, or a professional seeking institutional conditions, ICMarkets provides the edge you need to succeed.
        </p>

        <div className="bg-black border border-gray-600 p-6 rounded-lg mb-8">
          <p className="text-gray-400 text-lg text-center">
            ICMarkets provides institutional-grade infrastructure and execution quality that serious traders require for consistent performance.
          </p>
        </div>

        <div className="text-center">
          <a 
            href="/get-started" 
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span className="text-lg">Start Professional Trading</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTradingContent;