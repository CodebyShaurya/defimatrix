import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/ui/home-footer";

export default function DeFiMatrixCardPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          DeFiMatrix Card: The Smart Web3 Card for the AI-Powered DeFi Era
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          In the evolving landscape of decentralized finance, payments remain one of the final frontiers of seamless integration. At DeFiMatrix, we believe your wallet should travel as far as your ambition — across chains, across borders, across devices, with the same ease as your trading dashboard.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Introducing the <strong className="text-purple-400">DeFiMatrix Card</strong> — a next-gen Web3 payment vehicle that merges blockchain intelligence with everyday usability: one card, unified liquidity, non-custodial control, AI-driven routing, multi-chain reach, and institutional-grade security.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Whether you're a DeFi strategist, a global traveller, a creator monetising cross-chain, or an AI agent deploying strategies on the fly — the DeFiMatrix Card is your on-chain debit asset for the real world.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Why the DeFiMatrix Card Matters</h2>
        <h3 className="text-xl font-semibold mb-3 text-purple-300">From liquidity to life-flow</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          We talk often of swaps, bridges, LP positions and yield engines — but those assets shouldn't sit passive in your portfolio. They should move, spend, deploy, and integrate with real-world activity. The DeFiMatrix Card bridges that gap: the liquidity you manage on-chain becomes payment capability in the real world.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-purple-300">Key pain-points we solve:</h3>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li><strong>Fragmented crypto/cards:</strong> Many crypto cards require custodial accounts, conversion delays, hidden fees or asset lock-ups.</li>
          <li><strong>Chain-friction:</strong> Holding assets across multiple chains is fine — spending them globally is harder.</li>
          <li><strong>Custody risk:</strong> Many solutions put your crypto under third-party custody when issuing cards.</li>
          <li><strong>Complex UX:</strong> Switching wallets → converting tokens → waiting for settlement is no way to spend.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-purple-300">Our solution:</h3>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Non-custodial:</strong> You retain control of your assets.</li>
          <li><strong>Instant spend:</strong> From wallet to checkout in minimal steps.</li>
          <li><strong>Multi-chain & multi-asset ready:</strong> Use your holdings across chains via one card.</li>
          <li><strong>Transparent fees:</strong> No hidden conditions, no surprise lock-ups.</li>
        </ul>

        <p className="text-gray-300 leading-relaxed mb-8">
          In short: your crypto becomes real-world currency without sacrificing Web3 principles.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">How the DeFiMatrix Card Works</h2>
        <h3 className="text-xl font-semibold mb-3 text-purple-300">Architecture overview</h3>
        
        <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-4">
          <li>
            <strong>Wallet Link & Asset Preparation</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Connect your Web3 wallet (e.g., MetaMask, WalletConnect) to the DeFiMatrix App dashboard.</li>
              <li>Your card is issued or enabled once your wallet is connected and your asset(s) are eligible for spend.</li>
              <li>Deposit or hold supported assets (native tokens, stablecoins, DeFiMatrix native token) in your wallet.</li>
            </ul>
          </li>
          <li>
            <strong>Card Issuance & Activation</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Choose between a virtual card (instant-use) or a physical card (for ATM/POI).</li>
              <li>No pre-funding required: the card draws dynamically from your on-chain wallet via smart contract logic.</li>
              <li>Card parameters are configurable: spend limits, chain routing preferences, fallback assets.</li>
            </ul>
          </li>
          <li>
            <strong>Transaction Flow</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>At checkout (online or offline), the card processor triggers a payment request.</li>
              <li>The DeFiMatrix App routes your wallet asset: if the purchase is in fiat/merchant currency, the system may swap your crypto on-chain (via internal modules) just-in-time.</li>
              <li>Settlement occurs: your crypto is converted (if needed) and fiat is delivered to the merchant; you receive a receipt with transaction hash for on-chain transparency.</li>
              <li>Your wallet retains custody throughout; smart contracts and APIs coordinate the conversion and routing without a third-party custodial account.</li>
            </ul>
          </li>
          <li>
            <strong>Spend, Withdraw, Travel</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Use the card globally wherever the payment network is accepted.</li>
              <li>ATM withdrawals are supported (subject to regulatory regions) with dynamic settlement.</li>
              <li>Spend while travel-chain hopping — your card handles chain conversion behind the scenes.</li>
            </ul>
          </li>
        </ol>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Key Features & Benefits</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">🔐 Non-custodial ownership</h3>
            <p className="text-gray-300 leading-relaxed">
              You hold your private keys; the card simply authorises spend via your wallet. No locked account, no middle-man custody.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">🌐 Multi-asset & multi-chain spend</h3>
            <p className="text-gray-300 leading-relaxed">
              Whether you hold XFI, DMX, BTC, ETH, USDC, or other supported assets across chains, the card supports them. The backend handles conversion and routing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">💎 Transparent, low-fee structure</h3>
            <p className="text-gray-300 leading-relaxed mb-3">We believe in simplicity:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Flat transaction fee (e.g., 2%) on purchases, no hidden marks.</li>
              <li>Free card issuance and account maintenance.</li>
              <li>ATM withdrawals: free below a threshold, transparent above it.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">⚡ Instant spend capability</h3>
            <p className="text-gray-300 leading-relaxed">
              No top-ups. No delays. Just spend your assets when you choose. The card dynamically pulls or swaps from your wallet.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">🌍 Global reach</h3>
            <p className="text-gray-300 leading-relaxed">
              Issue and use your card in 90+ countries. Spend wherever the payment network is accepted. Chain-agnostic and merchant-agnostic.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">🔗 Integrated with the DeFiMatrix ecosystem</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Your card lives in the same app where you manage strategy, liquidity, swaps, bridges, and rewards.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Earn strategy-based rewards and spend them via the card.</li>
              <li>Use your card to fund liquidity positions or pay performance fees.</li>
              <li>AI agents can trigger card spend as part of workflows: e.g., paying a subscription, settling a protocol fee, or covering gas.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Use-Cases & Real-World Scenarios</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Scenario 1: The Web3 Nomad</h3>
            <p className="text-gray-300 leading-relaxed mb-3">You hold crypto, you travel. With the DeFiMatrix Card:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>In Lisbon you pay your hostel with ETH held in a Polygon wallet.</li>
              <li>In Singapore you use the physical card for dinner, the app swaps USDC to Singapore dollars seamlessly.</li>
              <li>In a remote location you withdraw cash at an ATM using your card's withdrawal allowance.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Scenario 2: The DeFi Strategist</h3>
            <p className="text-gray-300 leading-relaxed">
              You execute a multi-chain strategy and receive performance fees in DMX or XFI. Rather than waiting, you spend instantly: Receive fee → hold it → activate card → purchase hardware or services directly. Your spending doesn't interrupt your strategy workflow.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Scenario 3: Merchant & Creator Integration</h3>
            <p className="text-gray-300 leading-relaxed">
              You're a creator accepting crypto payments for content. Your card allows you to accept crypto in your wallet and spend or withdraw that income immediately using the card. You reduce conversion friction and global merchant barriers.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Scenario 4: AI Agent Automation</h3>
            <p className="text-gray-300 leading-relaxed">
              You deploy an AI agent to manage your yield strategy. That agent needs to pay a subscription or service fee. The agent triggers card payment from your wallet automatically. Transaction appears on chain, you monitor receipt, agent continues strategy. The card becomes an embedded financial tool in the agent's workflow.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Security, Compliance & Risk Management</h2>
        
        <h3 className="text-xl font-semibold mb-3 text-purple-300">Built for Web3 security</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          The DeFiMatrix Card solution maintains blockchain-native principles:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Funds remain in your wallet until spend; card authorisation triggers wallet-flow rather than asset transfer into a custodial account.</li>
          <li>All transactions include blockchain receipt / hash for verification.</li>
          <li>Smart contracts handle conversion and settlement — transparent, auditable, verifiable.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-purple-300">Risk & fraud safeguards</h3>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li>Multi-factor authentication in app for card setup, spend limit management, ATM withdrawal triggers.</li>
          <li>Real-time AI agent monitors for anomalous card usage (unusual location, large spend, chain routing irregularities).</li>
          <li>Locked asset fallback: if your wallet falls below a threshold, spend is blocked until you top up or switch asset.</li>
          <li>Regulatory compliance layers: where required, KYC/AML flows are implemented, without compromising your private-key ownership.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Getting Started: How to Activate Your DeFiMatrix Card</h2>
        <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-2">
          <li>Download the DeFiMatrix App (available on iOS/Android) or connect your Web3 wallet via browser.</li>
          <li>Navigate to the "Card" section in your dashboard.</li>
          <li>Link your Web3 wallet (MetaMask, WalletConnect) and verify the wallet address.</li>
          <li>Choose card type: Virtual (instant) or Physical (delivery).</li>
          <li>Configure your card settings: spend limit, chain preference, withdrawal allowance.</li>
          <li>Fund your wallet with supported asset(s).</li>
          <li>Start spending: use your card online or offline; view every transaction with receipt and hash.</li>
          <li>Monitor card performance, spend history, chain conversion fees, ATM withdrawals and rewards in your dashboard.</li>
        </ol>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Fees & Limits</h2>
        <p className="text-gray-300 leading-relaxed mb-4">Our fee structure is designed for clarity and fairness:</p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li><strong>Transaction fee:</strong> 2% on purchases — no minimum, no hidden costs.</li>
          <li><strong>Card issuance & account maintenance:</strong> Free. Physical card shipment cost may apply in certain regions.</li>
          <li><strong>ATM withdrawal:</strong> Free up to a threshold (e.g., US$300 equivalent), then 2% thereafter (user-modifiable limits).</li>
          <li><strong>Spend limit:</strong> Fully user-modifiable — no built-in cap unless set by user or jurisdiction.</li>
          <li><strong>Supported countries:</strong> 90+ (subject to card-network rules and local regulations).</li>
        </ul>

        <p className="text-xl font-semibold text-center text-purple-400 mb-12">
          Your assets. Your wallet. Your card. Your world.
        </p>
      </main>
      <Footer />
    </div>
  );
}
