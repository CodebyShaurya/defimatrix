import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function LimitOrdersPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="w-full mb-8">
          <img
            src="/Banners/Limit Orders.png"
            alt="DeFiGPT banner"
            className="w-full h-96 md:object-cover object-fit h-24 rounded-xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Limit Orders: Precision Execution in a Multi-Chain World
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          In the decentralized economy, timing is paramount. The distinction between an optimal trade and a missed opportunity often hinges not just on what you execute, but when. The Limit Orders module on DeFiMatrix.io is engineered to bring precision, automation, and intelligence to your trade execution across more than 80 blockchains and countless decentralized exchanges (DEXs). Built upon our Agentic AI Execution Layer, DeFiMatrix Limit Orders empower you to define precise entry and exit prices while our AI continuously monitors markets, optimizes gas fees, and executes your orders only when conditions are perfectly aligned.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Unlike conventional limit orders, which are confined to a single exchange, DeFiMatrix introduces a cross-chain, AI-enhanced, non-custodial limit order engine. This system combines institutional-grade execution logic with the power of autonomous DeFi intelligence.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why Limit Orders Matter in DeFi</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          In centralized exchanges (CEXs), limit orders are a fundamental feature. However, in the world of decentralized finance (DeFi), where liquidity is fragmented across hundreds of Automated Market Makers (AMMs) and bridges, traditional limit orders are either non-existent or notoriously inefficient and insecure. Most DEXs rely on instant swaps, forcing you to accept the prevailing market price at the moment of transaction. While simple, this approach exposes you to the risks of high slippage, poor entry prices, and suboptimal trades.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          DeFiMatrix fundamentally changes this paradigm. Our Limit Orders feature allows you to set your preferred price, quantity, and chain, and delegate the rest to our AI. It watches the markets 24/7, simulates optimal routes, estimates gas costs, and executes your order only when your specified criteria are met. Whether you are managing entries for a yield strategy, accumulating tokens over time, or automatically taking profits, Limit Orders on DeFiMatrix allow your strategy to operate without constant supervision.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The Power of AI-Driven Order Execution</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Traditional DeFi limit order tools are little more than static scripts. DeFiMatrix, in contrast, integrates Agentic AI — a suite of specialized agents that continuously observe the entire DeFi landscape, analyze market behavior, and make real-time execution decisions.
        </p>
        
        <p className="text-gray-300 leading-relaxed mb-4">Here's how it works:</p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Market Monitoring:</strong> The AI monitors multiple liquidity sources, on-chain oracles, and aggregated price feeds simultaneously.</li>
          <li><strong>Price Target Recognition:</strong> Once your target price is met, the AI validates the order's profitability after accounting for fees and potential slippage.</li>
          <li><strong>Optimal Route Selection:</strong> It identifies the best execution path among a vast array of DEX aggregators and direct DEX pools across all supported chains.</li>
          <li><strong>Gas Optimization:</strong> Leveraging predictive gas models, the AI waits for the most cost-efficient moment to execute the transaction.</li>
          <li><strong>Cross-Chain Coordination:</strong> For orders that span multiple networks, the system utilizes our proprietary Bridge Layer to execute the transaction atomically, ensuring seamless and secure settlement.</li>
        </ul>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          The result is a smart, non-custodial, AI-powered limit order system that provides institutional-grade execution in a fully decentralized manner.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">How DeFiMatrix Limit Orders Work</h2>
        
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 text-purple-400 font-semibold">Step</th>
                <th className="pb-3 text-purple-400 font-semibold">Action</th>
                <th className="pb-3 text-purple-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">1</td>
                <td className="py-3 font-semibold">Connect and Configure</td>
                <td className="py-3">Connect your wallet, navigate to the Limit Orders module, and select your source chain, token pair, and target price. Specify the amount and optional parameters like expiry date and slippage tolerance.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">2</td>
                <td className="py-3 font-semibold">AI Simulation & Preview</td>
                <td className="py-3">Before your order is activated, DeFiMatrix provides a simulation of the potential route, including expected fees, gas costs, and likely DEX/aggregator paths.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">3</td>
                <td className="py-3 font-semibold">Order Activation</td>
                <td className="py-3">Once confirmed, your order becomes active. AI agents begin monitoring live on-chain data streams for your specified conditions.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">4</td>
                <td className="py-3 font-semibold">Execution & Settlement</td>
                <td className="py-3">When all parameters align, the system triggers a secure, non-custodial execution directly from your wallet's smart contract approval.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Advanced Features</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Multi-Chain Aggregation:</strong> Place a limit order on one chain and have it execute on another, enabling cross-chain arbitrage and strategy implementation.</li>
          <li><strong>Partial Fill Support:</strong> For large orders, DeFiMatrix can execute partial fills across different DEXs to minimize slippage and front-running risk.</li>
          <li><strong>Conditional Logic:</strong> Combine Limit Orders with "if-this-then-that" (IFTTT) logic for advanced automation.</li>
          <li><strong>Gas & Fee Optimization:</strong> The AI Gas Agent dynamically adjusts execution priority based on mempool congestion.</li>
          <li><strong>Emergency Cancel & Override:</strong> You retain full control to cancel or adjust any live order instantly.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          In DeFi, every second counts, but so does precision. DeFiMatrix Limit Orders offer both: intelligent timing and algorithmic accuracy. By blending Agentic AI, cross-chain interoperability, and non-custodial execution, we have constructed a system that transforms passive traders into intelligent strategists. You set the targets and define the goals; DeFiMatrix handles the complexity.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
