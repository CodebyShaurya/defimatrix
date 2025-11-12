"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/ui/header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const FAQPage = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const faqItems = [
    {
      icon: "💼",
      title: "Wallet Support",
      question: "Which wallets can I use with DeFiMatrix?",
      answer:
        "DeFiMatrix supports major Web3 wallets including MetaMask, Trust Wallet, and Ledger hardware devices for secure interaction.",
    },
    {
      icon: "🔐",
      title: "Platform Security",
      question: "Is DeFiMatrix secure?",
      answer:
        "Yes. DeFiMatrix is built with advanced cryptographic protocols, on-chain audits, and decentralized infrastructure to ensure robust security for all users and transactions.",
    },
    {
      icon: "📈",
      title: "Staking & Rewards",
      question: "Can I earn rewards through staking on DeFiMatrix?",
      answer:
        "Absolutely. Users can stake and earn yield in $BASD tokens, with reward multipliers and additional perks based on your tier level.",
    },
    {
      icon: "💸",
      title: "Transaction Fees",
      question: "What are the transaction fees?",
      answer:
        "Fees depend on the networks involved and current gas levels, but DeFiMatrix dynamically optimizes them to remain low and competitive.",
    },
    {
      icon: "⏱️",
      title: "Transaction Speed",
      question: "How fast are transactions processed?",
      answer:
        "Most transactions are completed within minutes, thanks to DeFiMatrix&apos;s optimized execution protocols and multi-chain infrastructure.",
    },
    {
      icon: "🌉",
      title: "Cross-Chain Interoperability",
      question: "How does DeFiMatrix support cross-chain functionality?",
      answer:
        "We utilize Swing&apos;s Cross-Chain Interoperability Protocol (CCIP) to enable fast, secure, and seamless asset transfers across multiple blockchain networks.",
    },
    {
      icon: "🧩",
      title: "Business Integrations",
      question: "Can businesses or dApps integrate DeFiMatrix?",
      answer:
        "Yes. DeFiMatrix offers robust developer APIs and SDKs for businesses looking to tap into cross-chain liquidity. Public access to the integration suite is coming soon.",
    },
    {
      icon: "📉",
      title: "Slippage Reduction",
      question: "How does slippage fee reduction work?",
      answer:
        "Users benefit from reduced slippage fees based on their tier level, with top-tier users enjoying the maximum fee savings on high-volume or volatile trades.",
    },
    {
      icon: "💰",
      title: "Cashback Program",
      question: "Does DeFiMatrix offer cashback?",
      answer:
        "Yes. Eligible users receive cashback in USDC based on transaction volume. Higher tiers earn better cashback rates, incentivizing frequent usage.",
    },
    {
      icon: "🆓",
      title: "Zero-Fee Native Transactions",
      question: "Are zero-fee options available?",
      answer:
        "Yes. Users in certain tiers enjoy zero native transaction fees on select blockchain networks, providing significant cost efficiency.",
    },
    {
      icon: "🎁",
      title: "Airdrop Participation",
      question: "Can I access ecosystem airdrops?",
      answer:
        "Yes. All users are eligible for airdrops, but Admiral-tier users enjoy guaranteed participation in exclusive campaigns and early releases.",
    },
    {
      icon: "🧗",
      title: "Tier Progression",
      question: "How can I move up tiers?",
      answer:
        "Earn tier points by transacting, staking, and participating in ecosystem activities. The more active you are, the faster you climb.",
    },
    {
      icon: "🌐",
      title: "Network Access",
      question: "Are there limits on which networks I can use?",
      answer:
        "Network access is tier-based. Higher tiers unlock more blockchain networks, bridges, and DeFi protocols, maximizing your access to liquidity and yield opportunities.",
    },
    {
      icon: "🧭",
      title: "User Experience",
      question: "Is DeFiMatrix beginner-friendly?",
      answer:
        "Definitely. With its AI-driven interface, natural language execution, and intuitive dashboard, DeFiMatrix is designed for both newcomers and DeFi veterans.",
    },
  ];

  return (
    <>
      <div className="w-full">
        <Header />
      </div>
      <main className="relative min-h-screen bg-black pt-20 text-white">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#FF00FF]/10 blur-[120px]" />
          <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C450D5]/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* FAQ Header */}
          <div className="mb-16 text-center">
            <motion.h1
              className="mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-5xl font-bold text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to the DeFiMatrix FAQ Hub — your go-to resource for navigating the world&apos;s leading
              AI-powered, intent-driven DeFi platform. Whether you&apos;re new to decentralized finance or a seasoned
              on-chain strategist, this FAQ covers everything from supported wallets and staking rewards to security,
              cross-chain interoperability, and tier-based benefits.
            </motion.p>
          </div>

          {/* FAQ Items */}
          <motion.div
            className="grid gap-4"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="initial"
            animate="animate"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                className="overflow-hidden rounded-2xl bg-[#1A1F2F]/90 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#1A1F2F]"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-400">{item.question}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-[#C450D5] transition-transform ${
                      openQuestions.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openQuestions.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[#C450D5]/10"
                    >
                      <div className="p-6">
                        <p className="text-gray-400">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
