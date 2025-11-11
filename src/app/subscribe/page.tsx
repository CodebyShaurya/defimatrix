import React from "react";
import HeaderNew from "@/components/header-new";
import Footer from "@/components/Footer";

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderNew />
      <main className="max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
          Subscribe to DeFiMatrix
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Unlock premium AI automation, strategy tools, and enterprise-grade analytics with DeFiMatrix Pro.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">Pricing & Plans</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          For comprehensive information on our subscription plans and pricing, please visit our official pricing page:
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-8 border border-purple-500/20 text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">Visit Our Pricing Page</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Explore our flexible plans designed for individuals, teams, and enterprises. Each tier unlocks powerful features tailored to your DeFi needs.
          </p>
          <a 
            href="https://www.defimatrix.io/pricing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white hover:from-pink-600 hover:to-purple-700"
          >
            View Pricing Plans
          </a>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-purple-400">What You Get</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Premium AI Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Advanced DeFiGPT automation</li>
              <li>Custom strategy templates</li>
              <li>Priority execution</li>
              <li>AI-powered insights</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Enterprise Analytics</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Real-time portfolio tracking</li>
              <li>Risk management dashboard</li>
              <li>Gas optimization reports</li>
              <li>Performance analytics</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Enhanced Support</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>24/7 priority support</li>
              <li>Dedicated account manager</li>
              <li>Custom integration assistance</li>
              <li>Early access to features</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Exclusive Benefits</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Higher transaction limits</li>
              <li>Reduced fees</li>
              <li>Governance voting power</li>
              <li>Community events access</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-lg p-8 border border-purple-500/20">
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">Questions?</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our team is here to help you choose the right plan for your needs. Contact us to discuss enterprise solutions or custom pricing.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/contact" className="rounded-full bg-purple-900/50 px-6 py-3 text-sm font-semibold text-white ring-1 ring-purple-500/30 hover:bg-purple-800/50">
              Contact Sales
            </a>
            <a href="/faq" className="rounded-full bg-purple-900/50 px-6 py-3 text-sm font-semibold text-white ring-1 ring-purple-500/30 hover:bg-purple-800/50">
              View FAQ
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
