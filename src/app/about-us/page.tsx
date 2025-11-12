"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Repeat,
  Shield,
  Wrench,
  Target,
  Bot,
  Globe,
  LineChart,
  Users,
  TestTube,
  Globe2,
  Hammer,
  Handshake,
  Settings,
  Lock,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
const AboutUsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="w-full">
        <Header />
      </div>
      <main className="relative min-h-screen bg-black pt-20 text-white">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#C450D5]/10 blur-[120px]" />
          <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C450D5]/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-24 text-center">
            <motion.div
              className="mb-8 inline-block rounded-full bg-gradient-to-r from-[#C450D5]/20 to-[#C450D5]/5 px-6 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-[#C450D5] to-[#FF00FF]/80 bg-clip-text text-transparent">
                BUILDING DEFIMATRIX
              </span>
            </motion.div>
            <motion.h1
              className="mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Story
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              DeFiMatrix was born from a radical idea: what if users could express financial goals in natural language,
              and have decentralized agents execute those goals optimally across chains?
            </motion.p>
          </div>

          {/* Story Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1A1F2F] to-black p-8 shadow-2xl">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C450D5]/20 blur-[50px]" />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="mb-6 text-gray-400">
                    What started as a research initiative around DeFi automation has now become the world&apos;s leading
                    intent-driven DeFi platform—fully decentralized, composable, and powered by AI.
                  </p>
                  <p className="text-gray-400">
                    Backed by a global collective of engineers, strategists, researchers, and Web3 pioneers, we are
                    redefining how people interact with decentralized finance.
                  </p>
                </motion.div>
              </div>

              {/* Future of Finance */}
              <div className="space-y-6">
                <motion.h2
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  The Future of Finance is Intentional
                </motion.h2>
                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  DeFiMatrix stands as the #1 truly decentralized Intent-Driven DeFi Platform, empowering your financial
                  goals to shape the crypto journey through cutting-edge AI technology.
                </motion.p>
                <div className="grid gap-4">
                  {[
                    {
                      icon: Target,
                      text: "Express your intent (e.g. &apos;Maximize yield for ETH with low risk&apos;)",
                    },
                    {
                      icon: Bot,
                      text: "AI agents interpret and strategize",
                    },
                    {
                      icon: Globe,
                      text: "Solvers execute actions across protocols",
                    },
                    {
                      icon: LineChart,
                      text: "You get real-time results, transparency, and control",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center space-x-4 rounded-lg bg-[#1A1F2F]/50 p-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <item.icon className="h-6 w-6 text-[#C450D5]" />
                      <span className="text-gray-400">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <Image
            src="/about-us-1.jpg"
            alt="About Us"
            width={1000}
            height={1000}
            className="h-auto w-full overflow-hidden rounded-2xl object-cover"
          />

          {/* Mission Section */}
          <motion.section
            className="my-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#C450D5]/10 via-[#FF00FF]/5 to-transparent p-8 backdrop-blur-sm">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#C450D5]/20 blur-[50px]" />
              <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-[#FF00FF]/10 blur-[80px]" />

              <div className="relative">
                <motion.h2
                  className="mb-6 text-3xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Our Mission
                </motion.h2>
                <motion.p
                  className="mb-6 text-xl text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  To make DeFi as intuitive as telling an assistant what you want, and as powerful as the best fund
                  managers in the world. We are removing friction, abstracting complexity, and creating decentralized
                  automation that anyone can trust.
                </motion.p>
                <motion.p
                  className="text-xl text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We believe that true decentralization isn&apos;t just about protocol ownership. It&apos;s about
                  letting users drive outcomes, not just interact with tools.
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Breakthrough Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <motion.h2
                  className="mb-6 text-3xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Our Breakthrough
                </motion.h2>
                <motion.p
                  className="mb-6 text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  After years of fragmented DeFi UX, we realized the key wasn&apos;t another aggregator—it was a new
                  layer of intelligence: Intent Infrastructure.
                </motion.p>
                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Our platform introduces a network of solvers, on-chain strategy templates, AI decision engines, and
                  autonomous agents—all orchestrated to serve your financial goals.
                </motion.p>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: Brain, text: "Intent parsing & AI-coordination for DeFi" },
                  { icon: Repeat, text: "Modular solver networks with reputation scoring" },
                  { icon: Shield, text: "Strategy templates (DCA, LP optimization, risk-adjusted yield farming)" },
                  { icon: Wrench, text: "Real-time risk alerts & protocol coverage insights" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center space-x-4 rounded-lg bg-[#1A1F2F]/50 p-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <item.icon className="h-6 w-6 text-[#C450D5]" />
                    <span className="text-gray-400">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Global Collective Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl bg-[#1A1F2F] p-8">
              <motion.h2
                className="mb-6 text-3xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                We Are a Global Collective
              </motion.h2>
              <motion.p
                className="mb-8 text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                From Toronto to Colombo, Lisbon to Singapore—we&apos;re a distributed and mission-aligned team united by
                one goal: decentralize access to intelligent, fair, and transparent financial systems.
              </motion.p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Users, text: "100+ contributors across DeFi, AI, and protocol design" },
                  { icon: TestTube, text: "Thousands of test users in our closed alpha" },
                  { icon: Globe2, text: "Global hackathon partnerships with top ecosystems" },
                  { icon: Hammer, text: "Built to be open, auditable, and community-governed" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="rounded-lg bg-black p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <item.icon className="mb-4 h-8 w-8 text-[#C450D5]" />
                    <p className="text-gray-400">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Trust Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-3xl font-bold">Trusted by Users Worldwide</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Handshake, text: "Transparency in execution" },
                { icon: Settings, text: "Modular automation across ecosystems" },
                { icon: Lock, text: "On-chain security with no custodial risk" },
                { icon: TrendingUp, text: "Real returns aligned with personal goals" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="group overflow-hidden rounded-2xl bg-[#1A1F2F] p-8 transition-transform duration-300 hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="relative">
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#C450D5]/20 opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-100" />
                    <item.icon className="mb-4 h-8 w-8 text-[#C450D5]" />
                    <p className="text-gray-400">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Image
            src="/about-us-2.jpg"
            alt="About Us"
            width={1000}
            height={1000}
            className="h-auto w-full overflow-hidden rounded-2xl object-cover"
          />

          {/* Use Cases Section */}
          <motion.section
            className="my-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-3xl font-bold">Our Use Cases</h2>
            <p className="mb-8 text-xl text-gray-400">
              We don&apos;t just build tools—we solve problems in real-world DeFi workflows:
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  icon: Brain,
                  title: "Intent-Based Yield Optimization",
                  description:
                    "Trigger strategies like auto-compounding, yield-maximization, or risk-balanced farming—all from a single prompt.",
                },
                {
                  icon: Repeat,
                  title: "Multi-Chain Execution",
                  description:
                    "Swap, stake, or bridge assets across multiple L1s and L2s without switching apps or wallets.",
                },
                {
                  icon: Shield,
                  title: "Autonomous Risk Management",
                  description:
                    "Get alerted on liquidation risks, APY dips, or high volatility events, and let AI adjust your positions.",
                },
                {
                  icon: Wrench,
                  title: "Build With Us",
                  description:
                    "Developers can plug into our intent infrastructure to create new solvers, strategies, or UX layers using our SDK.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl bg-[#1A1F2F] p-8 transition-all duration-300 hover:bg-[#1A1F2F]/80"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#C450D5]/20 opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-100" />
                  <item.icon className="mb-4 h-8 w-8 text-[#C450D5]" />
                  <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What's Next Section */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold">What&apos;s Next?</h2>
            <p className="mb-8 text-xl text-gray-400">
              We&apos;re building an intent economy for DeFi—where users don&apos;t just react to markets, they shape
              them.
              <br />
              Join us on this journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://app.defimatrix.io/"
                target="_blank"
                className="group flex items-center space-x-2 rounded-full bg-[#C450D5] px-6 py-3 text-white transition-all hover:bg-[#C450D5]/90"
              >
                <span>🚀 Launch App</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group flex items-center space-x-2 rounded-full bg-[#1A1F2F] px-6 py-3 text-white transition-all hover:bg-[#1A1F2F]/80"
              >
                <span>🤝 Partner With Us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/community"
                className="group flex items-center space-x-2 rounded-full bg-[#1A1F2F] px-6 py-3 text-white transition-all hover:bg-[#1A1F2F]/80"
              >
                <span>💬 Join the Community</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
