import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/ui/home-footer";

export default function DeFiMatrixPayPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Pay: The AI-Powered Web3 Payments Revolution
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          DeFiMatrix Pay bridges the worlds of finance and technology, offering a next-generation Web3 payment ecosystem powered by AI automation, multi-chain liquidity, and non-custodial security. It's more than a crypto wallet. It's your intelligent financial operating system — built for individuals, merchants, creators, and institutions who demand seamless, real-time payments without borders.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          DeFiMatrix Pay combines the speed of fintech with the trustlessness of blockchain, creating a unified payment layer for the decentralized economy.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">The Vision: Banking Without Banks</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          DeFiMatrix Pay reimagines the concept of "banking" as a decentralized network of intelligent wallets, where AI handles compliance, settlement, yield routing, and liquidity balancing autonomously. Like the most advanced neobanks, DeFiMatrix Pay enables you to:
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li>Hold crypto and fiat together.</li>
          <li>Pay with stablecoins or xUSD anywhere.</li>
          <li>Earn yield on idle balances.</li>
          <li>Access DeFi services directly from your payment app.</li>
        </ul>

        <p className="text-gray-300 leading-relaxed mb-8">
          But unlike traditional neobanks, DeFiMatrix Pay doesn't hold your funds — you do. The AI and smart contracts simply make your capital move smarter.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Core Architecture</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          At the heart of DeFiMatrix Pay is a multi-layered architecture that fuses AI decisioning, multi-chain routing, and user-centric design.
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 mb-8 border border-purple-500/20">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="pb-3 text-purple-400 font-semibold">Layer</th>
                <th className="pb-3 text-purple-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">User Layer</td>
                <td className="py-3">Non-custodial wallets, multi-currency support, and smart profiles with AI-driven spending analytics.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Payment Engine Layer</td>
                <td className="py-3">AI routing for optimal cross-chain transactions, instant settlement, and a dynamic fee model.</td>
              </tr>
              <tr className="border-b border-purple-500/10">
                <td className="py-3 font-semibold">Intelligence Layer</td>
                <td className="py-3">AI agents for transaction prioritization, fraud detection, compliance scanning, and yield optimization.</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Compliance & Security Layer</td>
                <td className="py-3">Web3 ID system with zero-knowledge KYC, continuous regulatory checks, and end-to-end encryption.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Everyday Use-Cases</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Payments & Remittances</h3>
            <p className="text-gray-300 leading-relaxed">
              Send stablecoins, xUSD, or DMX globally and instantly with AI-optimized routing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">On-Chain Commerce</h3>
            <p className="text-gray-300 leading-relaxed">
              Businesses can accept crypto payments with auto-conversion to fiat or stablecoins, and set up recurring invoices and subscriptions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Yield on Idle Balances</h3>
            <p className="text-gray-300 leading-relaxed">
              Every xUSD or DMX in your wallet can earn yield via AI-curated pools and staking opportunities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Salary & Payroll Automation</h3>
            <p className="text-gray-300 leading-relaxed">
              Companies can set recurring salaries in stablecoins across multiple chains, with AI handling gas optimization and cross-chain distribution.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why It Matters</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          The future of finance isn't centralized or decentralized — it's intelligent. DeFiMatrix Pay is the manifestation of that future: an AI-driven, multi-chain, non-custodial, compliance-ready payment platform that empowers individuals and enterprises to transact globally, instantly, and autonomously. Every transfer is a smart decision. Every wallet is an intelligent bank. Every user is a node in the next financial revolution.
        </p>
        
        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          This is the future of decentralized finance: AI-driven, autonomous, and human-centric.
        </p>
      </main>
      <Footer />
    </div>
  );
}
