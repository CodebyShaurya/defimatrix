import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function DeFiMatrixBusinessCardPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Business Card
        </h1>
        
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">
          The Corporate-Grade Web3 Payment & Expense Card for the New Digital Economy
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          In an era where decentralised finance, cross-chain liquidity and AI-driven strategy dominate the future of capital, businesses are demanding a card solution that is as flexible, borderless and intelligent as the ecosystem itself. Enter the DeFiMatrix Business Card — a payment instrument purpose-built for companies, DAOs, funds and Web3 organisations. It brings together the power of non-custodial wallets, multi-asset spend, real-time analytics and AI expense management into one seamless platform.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Whether you're managing treasury spend for a DAO, paying vendors from global wallets, issuing cards to team members across jurisdictions, or integrating automated payments into your smart-contract workflows — the DeFiMatrix Business Card makes your corporate spend as dynamic as your strategy.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">1. The Need: Why a Specialized Web3 Business Card?</h2>
        
        <h3 className="text-xl font-semibold mb-3 text-purple-300">Traditional payment cards fall short</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Corporate cards in legacy finance often involve long onboarding, centralised custody, fiat-only assets, invisible fees, cross-border constraints, and limited integration with DeFi tools. For Web3-native organisations this presents serious friction:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Treasuries often hold crypto assets, not just fiat, and need direct spend from those holdings.</li>
          <li>Cross-chain liquidity must be mobile and instantly accessible for payments.</li>
          <li>Expense tracking, audit trails and tokenised governance must reflect the smart-contract world.</li>
          <li>Automation (AI agents, contract-based services) needs spend capability built in — not added later.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-purple-300">The Web3 gap</h3>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Many crypto cards require custodial accounts (you surrender control).</li>
          <li>Multi-asset spend usually demands manual conversion (crypto → fiat → spend).</li>
          <li>Teams transacting globally often deal with FX, chain-gas and compliance overhead.</li>
          <li>DeFi treasury and budget flows rarely integrate with card spend tools.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-purple-300">Our solution: the DeFiMatrix Business Card</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          The DeFiMatrix Business Card is more than a payment card — it's a built-in node of your decentralised treasury. Designed with AI & FinTech expertise, it offers:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li>Non-custodial control (you own the wallet).</li>
          <li>Multi-asset & multi-chain spend (crypto, stablecoins, chain-native tokens).</li>
          <li>Transparent fee structure.</li>
          <li>Real-time analytics, expense controls & smart-contract integration.</li>
          <li>Global issuance, scalable for enterprise, DAO or fund operations.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">2. How It Works</h2>
        
        <h3 className="text-xl font-semibold mb-3 text-purple-300">2.1 Setup & Issuance</h3>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Connect your corporate wallet or treasury wallet via the DeFiMatrix dashboard.</li>
          <li>Select Business Card programme: virtual cards (instant) for team & online use, physical cards for in-person or ATM access.</li>
          <li>Configure card controls: spend limits per card/member, approved assets, chain preferences, spending categories.</li>
          <li>Link cards to your smart-contract treasury or governance wallet — so assets remain in your control.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-purple-300">2.2 Transaction Flow</h3>
        <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
          <li>Cardholder initiates a purchase (online or offline).</li>
          <li>The card process routes request: if merchant expects fiat or local currency, assets from your wallet are converted via internal modules (Swap & Bridge, Liquidity) automatically.</li>
          <li>Asset conversion and settlement happen in real time or near-real-time; you receive blockchain transaction hash, merchant receives fiat or token as needed.</li>
          <li>Dashboard reflects spend, asset movements, conversion rates, chain gas and merchant settlement. Each card-transaction is tied to an on-chain proof.</li>
        </ol>

        <h3 className="text-xl font-semibold mb-3 text-purple-300">2.3 Asset & Chain Flexibility</h3>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Hold treasury assets in any supported chain: Ethereum, Arbitrum, Base, Polygon, BNB Smart Chain, Avalanche, etc.</li>
          <li>Hold any supported tokens: stablecoins (USDC, USDT, xUSD), native tokens (ETH, BTC, DMX) or other approved assets.</li>
          <li>Spend from multiple chains without manual bridging — the platform handles optimisation.</li>
          <li>Real-time routing chooses lowest-cost chain, minimal slippage conversion, and fastest settlement.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">3. Key Features & Value Proposition</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Non-Custodial Ownership</h3>
            <p className="text-gray-300 leading-relaxed">
              Your treasury assets never leave your wallet. The card triggers spend via your approved wallet signature — no custodial intermediary holds your assets.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Multi-Asset & Multi-Chain Spend</h3>
            <p className="text-gray-300 leading-relaxed">
              Spend directly from your crypto, stablecoins or native tokens. The system handles swaps, bridging, gas optimisation and settlement automatically.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Transparent Fees & FX</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Fixed transaction fee (e.g., 1–2 %) regardless of chain or asset.</li>
              <li>Real-time asset-to-fiat conversion visibility.</li>
              <li>ATM withdrawals, physical card issuance, and international spend limits set by you.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Corporate-Scale Issuance & Controls</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Issue multiple virtual and physical cards for team members.</li>
              <li>Set spend limits per card, per asset, per chain, per merchant category.</li>
              <li>Approve or restrict spending assets, enforce KYC/AML where needed.</li>
              <li>Role-based access: Admins, approvers, accountants, auditors.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Real-Time Data & AI Optimisation</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>AI routing engine selects chain & asset path to minimise cost and time.</li>
              <li>Spend analytics: gas cost, slippage cost, chain choice.</li>
              <li>Budget alerts: when spend in certain category nears threshold, card locks or reminds.</li>
              <li>Expense automation: AI matches receipts to transactions, flags mismatches.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Global Reach</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Use your card in 90+ countries worldwide.</li>
              <li>Accepts global currencies via major payment networks (Visa-, MasterCard-compatible).</li>
              <li>Supports ATM withdrawals (subject to regional regulations).</li>
              <li>Settles merchant in local currency while you spend from your wallet.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">4. Use Cases for Businesses & Web3 Organisations</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Scenario A: DAO Treasury Spend</h3>
            <p className="text-gray-300 leading-relaxed mb-2">A DAO holds DMX and xUSD in its treasury across multiple chains.</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
              <li>Members have virtual cards for travel, software subscriptions, vendor fees.</li>
              <li>Spend autopilot: Card draws from treasury wallet, asset conversion done automatically.</li>
              <li>Real-time audit: Blockchain proof of each spend, plus dashboard ledger.</li>
              <li>Budget caps: Treasurer sets monthly cap; AI monitors for over-spend or unusual chains.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Scenario B: Web3 Startup Global Operations</h3>
            <p className="text-gray-300 leading-relaxed mb-2">A Web3 startup hires remote developers and runs marketing budgets across regions.</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
              <li>Physical cards for regional staff; virtual cards for remote contractors.</li>
              <li>Treasury holds USDC on Polygon; card spend by team optimised to chain with lowest gas.</li>
              <li>Reconciliation dashboard shows spend by campaign, wallet, chain, merchant.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Scenario C: Creator/Platform Payments</h3>
            <p className="text-gray-300 leading-relaxed mb-2">A crypto-native platform pays out royalties to content creators in crypto and also sells services to businesses.</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
              <li>Card used by platform to purchase cloud services; platform pays creators via xUSD, creators spend or withdraw via card.</li>
              <li>Multi-asset routing: Payouts in stablecoin, card spend in fiat; seamless conversion occurs.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Scenario D: Smart-Contract Agent-Driven Spend</h3>
            <p className="text-gray-300 leading-relaxed mb-2">Your AI agent executing a cross-chain strategy needs to pay a fee to an oracle service, initiate a subscription, and withdraw via ATM for travel.</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
              <li>The agent triggers spend via Business Card interface.</li>
              <li>Wallet funds used, chain selected automatically, transaction executed, receipt recorded on chain and dashboard.</li>
              <li>Human oversight remains but minimal.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why Choose the DeFiMatrix Business Card?</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">For Web3 organisations</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Aligns treasury assets directly to spend — no manual conversions, no custodial lock-in.</li>
              <li>Supports cross-chain operations and global team spends effortlessly.</li>
              <li>Built-in AI routing reduces cost and complexity of spend.</li>
              <li>Transparent on-chain proofs, audit-friendly dashboards enhance trust.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">For traditional businesses moving into Web3</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Bridges fiat and crypto spend with user-friendly interface.</li>
              <li>Keeps private key control while enabling real-world corporate spend.</li>
              <li>Enables teams to deploy crypto budgets without sacrificing compliance or spend-visibility.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">For DAOs, funds and governance models</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Allows token-funded operations, multi-card issuance and smart contract-driven spend.</li>
              <li>Real-time monitoring, wallet linking and expense policy controls built-for-purpose.</li>
              <li>Reduces reliance on legacy finance rails and introduces native crypto spend infrastructure.</li>
            </ul>
          </div>
        </div>

        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          Spend smarter. Scale faster. Stay native. Experience the DeFiMatrix way.
        </p>
      </main>
      <Footer />
    </div>
  );
}
