"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  SquaresPlusIcon,
  XMarkIcon,
  SparklesIcon,
  ArrowsRightLeftIcon,
  CubeTransparentIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  StarIcon,
  BookOpenIcon,
  BellAlertIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  BoltIcon,
  LinkIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon , ChevronUpIcon } from "@heroicons/react/20/solid";

const defiMenuItems = [
  {
    name: "DeFiGPT",
    description:
      "Your AI co-pilot for DeFi — automate trades, monitor portfolios, and execute intelligent strategies using natural language.",
    href: "/defigpt",
    icon: SparklesIcon,
  },
  {
    name: "Swap & Bridge",
    description: "Seamlessly swap and transfer assets across multiple chains with minimal fees and instant execution.",
    href: "/swap-bridge",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Stake",
    description: "Stake tokens to earn dynamic APYs powered by AI-based yield optimization models.",
    href: "/stake",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Unstake",
    description: "Withdraw staked assets anytime with transparent tracking and instant liquidity release.",
    href: "/unstake",
    icon: ArrowPathIcon,
  },
  {
    name: "Liquidity Positions",
    description: "Manage and rebalance liquidity across DEXs with AI-powered optimization and analytics.",
    href: "/liquidity-positions",
    icon: ChartPieIcon,
  },
  {
    name: "Pools",
    description: "Access multi-chain liquidity pools with automated AI allocation for optimal performance and rewards.",
    href: "/pools",
    icon: CubeTransparentIcon,
  },
  {
    name: "Limit Orders",
    description: "Set intelligent limit orders that execute precisely when market conditions align with your strategy.",
    href: "/limit-orders",
    icon: SquaresPlusIcon,
  },
  {
    name: "Strategy",
    description: "Design, backtest, and deploy custom DeFi strategies using adaptive AI and real-time market data.",
    href: "/strategy",
    icon: ChartPieIcon,
  },
  {
    name: "xUSD",
    description: "An algorithmic stablecoin pegged to the USD, providing stability within the DeFiMatrix ecosystem.",
    href: "/xusd",
    icon: BanknotesIcon,
  },
  {
    name: "Rewards",
    description: "Earn $DMX tokens and incentives for providing liquidity, staking, and participating in governance.",
    href: "/rewards",
    icon: StarIcon,
  },
  {
    name: "Documentation",
    description: "Explore the full DeFiMatrix App ecosystem — guides, APIs, and developer documentation await!",
    href: "/documentation",
    icon: BookOpenIcon,
  },
  {
    name: "Subscribe",
    description: "Unlock premium AI automation, strategy tools, and enterprise-grade analytics with DeFiMatrix Pro.",
    href: "/subscribe",
    icon: BellAlertIcon,
  },
];

const defiBankingItems = [
  {
    name: "DeFiMatrix Pay (App)",
    description:
      "A unified DeFi banking app designed to merge traditional financial convenience with on-chain automation and intelligent asset management. Users can send payments, manage portfolios, convert currencies, and access decentralized tools with AI-enhanced security and real-time transparency from one seamless interface.",
    href: "/defimatrix-pay",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "DeFiMatrix Card",
    description:
      "The DeFiMatrix Card allows you to spend crypto effortlessly at millions of online and in-store merchants worldwide. It offers instant conversion at checkout, low fees, global acceptance, and smooth integration with your DeFiMatrix wallet. Enjoy everyday purchases using digital assets with the same convenience as traditional payment cards.",
    href: "/defimatrix-card",
    icon: CreditCardIcon,
  },
  {
    name: "DeFiMatrix Business Card",
    description: 
    "Built for modern teams, the DeFiMatrix Business Card helps companies manage spending, payments, and multi-asset treasury operations. Real-time dashboards, spending controls, and Web3-native transparency provide full visibility and governance, enabling businesses to operate efficiently across global markets and digital ecosystems.",
    href: "/defimatrix-business-card",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Security",
    description:
      "DeFiMatrix delivers enterprise-grade security combining AI-driven monitoring, advanced encryption, and multi-layer wallet protection. Continuous risk analysis and anomaly detection safeguard every transaction, while secure key management and blockchain-native controls ensure complete peace of mind for individual users and businesses alike.",
    href: "/security",
    icon: ShieldCheckIcon,
  },
];

const blockchainItems = [
  {
    name: "DeFiMatrix Chain",
    description:
      "A modular Layer 1 blockchain designed for AI-native DeFi, enabling cross-chain interoperability and autonomous execution.",
    href: "/defimatrix-chain",
    icon: CubeTransparentIcon,
  },
  {
    name: "Matrix AI Layer",
    description:
      "The intelligent processing layer that powers automated strategies, adaptive learning, and real-time optimization onchain.",
    href: "/matrix-ai-layer",
    icon: CpuChipIcon,
  },
  {
    name: "EVM+",
    description:
      "Enhanced EVM-compatible framework supporting smart contracts, agentic AI modules, and dynamic execution environments.",
    href: "/evm-plus",
    icon: SquaresPlusIcon,
  },
  {
    name: "Mint Power (DMX)",
    description: "A computational unit representing the AI energy required to execute autonomous DeFi transactions.",
    href: "/mint-power",
    icon: BoltIcon,
  },
  {
    name: "MatrixFi (MFI)",
    description:
      "The ecosystem's native utility token granting access to AI tools, liquidity pools, and governance features.",
    href: "/matrixfi",
    icon: BanknotesIcon,
  },
  {
    name: "Cross-Chain Gateway",
    description: "A protocol-level bridge enabling instant asset transfer between 88+ supported blockchains.",
    href: "/cross-chain-gateway",
    icon: LinkIcon,
  },
  {
    name: "AI Security Layer",
    description: "Built-in threat detection and anomaly response powered by AI for real-time onchain protection.",
    href: "/ai-security-layer",
    icon: LockClosedIcon,
  },
  {
    name: "Cosmos Layer",
    description:
      "The foundational infrastructure leveraging Cosmos SDK and Tendermint for high-performance, interoperable DeFi.",
    href: "/cosmos-layer",
    icon: CubeTransparentIcon,
  },
  {
    name: "eDMX",
    description:
      "A liquid EVM-compatible version of DMX with capped emission, ensuring sustainable liquidity and ecosystem balance.",
    href: "/edmx",
    icon: ArrowsRightLeftIcon,
  },
];

const aboutUsItems = [
  {
    name: "About Us",
    href: "/about-us",
    description: "Learn how DeFiMatrix is redefining decentralized finance with autonomous AI-driven solutions.",
  },
  {
    name: "Affiliate",
    href: "/affiliate",
    description: "Partner with us and earn rewards by promoting the DeFiMatrix ecosystem.",
  },
  {
    name: "Build with DeFiGPT",
    href: "https://app.defimatrix.io/",
    description: "Integrate AI-powered DeFi tools and automate strategies using DeFiGPT technology.",
  },
  {
    name: "Careers",
    href: "/careers",
    description: "Join our global team and help shape the next evolution of intelligent decentralized finance.",
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Stay updated with the latest insights, product updates, and industry trends from DeFiMatrix.",
  },
  {
    name: "Contact Us",
    href: "/contact",
    description: "Get in touch with our team for collaborations, partnerships, or general inquiries.",
  },
];

export default function HeaderNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navBgWhite, setNavBgWhite] = useState(false);
  const [openDeFi, setOpenDeFi] = useState(false);
  const [openBanking, setOpenBanking] = useState(false);
  const [openBlockchain, setOpenBlockchain] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const deFiCloseRef = useRef<any>(null);
  const bankingCloseRef = useRef<any>(null);
  const blockchainCloseRef = useRef<any>(null);
  const aboutCloseRef = useRef<any>(null);

  return (
    <header className="sticky top-0 z-50 mx-auto mt-4 max-w-7xl rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 p-[3px] animated-border-gradient animated-border-glow header-animated">
      <nav
        aria-label="Global"
        className={`relative z-10 flex items-center justify-between rounded-full p-6 backdrop-blur-md lg:px-8 bg-black text-white`}
      >
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">DeFiMatrix</span>
            <Image
              src="/defimatrix-logo.svg"
              alt="DeFiMatrix Logo"
              width={160}
              height={40}
              className="h-8 w-auto md:h-10"
            />
          </a>
        </div>

        {/* Center: navigation (kept on a single line) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <PopoverGroup className="flex gap-x-8 whitespace-nowrap overflow-hidden">
            {/* <a href="/" className="text-base font-semibold text-current hover:text-purple-300 whitespace-nowrap focus:outline-none focus:ring-0">
              Home
            </a> */}

            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(deFiCloseRef.current);
                setOpenDeFi(true);
                setOpenBanking(false);
                setOpenBlockchain(false);
                setOpenAbout(false);
              }}
              onMouseLeave={() => {
                deFiCloseRef.current = window.setTimeout(() => setOpenDeFi(false), 150);
              }}
            >
              <button
                type="button"
                className="flex items-center text-base font-semibold text-current hover:text-purple-300 whitespace-nowrap focus:outline-none focus:ring-0"
                aria-expanded={openDeFi}
              >
                DeFi
                {openDeFi ? (
                  <ChevronUpIcon className="size-5 text-purple-300" />
                ) : (
                  <ChevronDownIcon className="size-5 text-purple-300" />
                )}
              </button>

              {openDeFi && (
                <div
                  className="fixed left-0 right-0 top-24 z-[9999] mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
                  onMouseEnter={() => {
                    clearTimeout(deFiCloseRef.current);
                    setOpenDeFi(true);
                  }}
                  onMouseLeave={() => {
                    deFiCloseRef.current = window.setTimeout(() => setOpenDeFi(false), 150);
                  }}
                >
                  <div className="flex gap-4 p-2">
                    {/* Left Featured Card */}
                    <div className="flex w-80 flex-col justify-between rounded-2xl bg-gradient-to-br from-gray-950 via-purple-950/50 to-gray-950 p-6 ring-1 ring-purple-500/20">
                      <div>
                        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 ring-1 ring-purple-500/30">
                          <SparklesIcon className="h-10 w-10 text-purple-400" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-white">DeFiMatrix</h3>
                        <p className="text-sm leading-relaxed text-gray-400 break-words whitespace-normal">
                          An AI-powered DeFi ecosystem that automates yield optimization, liquidity management, and
                          cross-chain strategies across 88+ blockchains.
                        </p>
                      </div>
                      <div className="mt-6">
                        <Image src="/defimatrix-logo.svg" alt="DeFiMatrix" width={200} height={100} className="w-32 opacity-50" />
                      </div>
                    </div>

                    {/* Right Menu Items Grid */}
                    <div className="grid flex-1 grid-cols-3 gap-3">
                      {defiMenuItems.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-start gap-x-3 rounded-xl p-4 transition-colors hover:bg-purple-900/30"
                        >
                          <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-purple-900/30 ring-1 ring-purple-500/20 transition-colors group-hover:bg-purple-800/50">
                            <item.icon aria-hidden="true" className="size-5 text-purple-300 group-hover:text-purple-200" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block text-sm font-semibold text-white">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1  text-xs text-gray-400  break-words whitespace-normal">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

              <div
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(bankingCloseRef.current);
                  setOpenBanking(true);
                  setOpenDeFi(false);
                  setOpenBlockchain(false);
                  setOpenAbout(false);
                }}
                onMouseLeave={() => {
                  bankingCloseRef.current = window.setTimeout(() => setOpenBanking(false), 150);
                }}
              >
                <button
                  type="button"
                  className="flex items-center gap-x-1 text-base font-semibold text-current hover:text-purple-300 whitespace-nowrap focus:outline-none focus:ring-0"
                  aria-expanded={openBanking}
                >
                  DeFi Banking
                  {openBanking ? (
                    <ChevronUpIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                  ) : (
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                  )}
                </button>

                {openBanking && (
                  <div
                    className="fixed left-0 right-0 top-24 z-[9999] mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
                    onMouseEnter={() => {
                      clearTimeout(bankingCloseRef.current);
                      setOpenBanking(true);
                    }}
                    onMouseLeave={() => {
                      bankingCloseRef.current = window.setTimeout(() => setOpenBanking(false), 150);
                    }}
                  >
                    <div className="flex gap-4 p-2">
                      <div className="flex w-80 flex-col justify-between rounded-2xl bg-gradient-to-br from-gray-950 via-purple-950/50 to-gray-950 p-6 ring-1 ring-purple-500/20">
                        <div>
                          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 ring-1 ring-purple-500/30">
                            <CreditCardIcon className="h-10 w-10 text-purple-400" />
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-white">DeFi Banking by DeFiMatrix</h3>
                          <p className="text-sm leading-relaxed text-gray-400 break-words whitespace-normal">
                            Next-generation Web3 banking tools for seamless, intelligent, and instant use of digital assets
                            every day.
                          </p>
                        </div>
                        <div className="mt-6">
                          <Image src="/defimatrix-logo.svg" alt="DeFiMatrix" width={200} height={100} className="w-32 opacity-50" />
                        </div>
                      </div>

                      <div className="grid flex-1 grid-cols-2 gap-3">
                        {defiBankingItems.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-start gap-x-3 rounded-xl p-4 transition-colors hover:bg-purple-900/30"
                          >
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-purple-900/30 ring-1 ring-purple-500/20 transition-colors group-hover:bg-purple-800/50">
                              <item.icon aria-hidden="true" className="size-5 text-purple-300 group-hover:text-purple-200" />
                            </div>
                            <div className="flex-auto">
                              <a href={item.href} className="block text-sm font-semibold text-white">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 line-clamp-2 text-xs text-gray-400  break-words whitespace-normal">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(blockchainCloseRef.current);
                  setOpenBlockchain(true);
                  setOpenDeFi(false);
                  setOpenBanking(false);
                  setOpenAbout(false);
                }}
                onMouseLeave={() => {
                  blockchainCloseRef.current = window.setTimeout(() => setOpenBlockchain(false), 150);
                }}
              >
                <button
                  type="button"
                  className="flex items-center gap-x-1 text-base font-semibold text-current hover:text-purple-300 whitespace-nowrap focus:outline-none focus:ring-0"
                  aria-expanded={openBlockchain}
                >
                  Blockchain
                  {openBlockchain ? (
                    <ChevronUpIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                  ) : (
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                  )}
                </button>

                {openBlockchain && (
                  <div
                    className="fixed left-0 right-0 top-24 z-[9999] mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
                    onMouseEnter={() => {
                      clearTimeout(blockchainCloseRef.current);
                      setOpenBlockchain(true);
                    }}
                    onMouseLeave={() => {
                      blockchainCloseRef.current = window.setTimeout(() => setOpenBlockchain(false), 150);
                    }}
                  >
                    <div className="flex gap-4 p-2">
                      <div className="flex w-80 flex-col justify-between rounded-2xl bg-gradient-to-br from-gray-950 via-purple-950/50 to-gray-950 p-6 ring-1 ring-purple-500/20">
                        <div>
                          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 ring-1 ring-purple-500/30">
                            <CubeTransparentIcon className="h-10 w-10 text-purple-400" />
                          </div>
                          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-400">Blockchain – Coming Soon</div>
                          <h3 className="mb-2 text-xl font-bold text-white">DeFiMatrix Chain</h3>
                          <p className="text-sm leading-relaxed text-gray-400 break-words whitespace-normal">
                            A next-generation modular blockchain built for AI-powered decentralized finance. Unifies
                            performance, scalability, and intelligence through dual-core architecture.
                          </p>
                        </div>
                      </div>

                      <div className="grid flex-1 grid-cols-3 gap-3">
                        {blockchainItems.map((item) => (
                          <div key={item.name} className="group relative flex items-start gap-x-3 rounded-xl p-4 transition-colors hover:bg-purple-900/30">
                            <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-purple-900/30 ring-1 ring-purple-500/20 transition-colors group-hover:bg-purple-800/50">
                              <item.icon aria-hidden="true" className="size-5 text-purple-300 group-hover:text-purple-200" />
                            </div>
                            <div className="flex-auto">
                              <a href={item.href} className="block text-sm font-semibold text-white">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-gray-400 break-words whitespace-normal">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="/dmx-402" className="text-base font-semibold text-white hover:text-purple-300 whitespace-nowrap">
                Digital Payments
              </a>

              <a href="/pricing" className="text-base font-semibold text-white hover:text-purple-300 whitespace-nowrap">
                Pricing
              </a>

              <div
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(aboutCloseRef.current);
                  setOpenAbout(true);
                  setOpenDeFi(false);
                  setOpenBanking(false);
                  setOpenBlockchain(false);
                }}
                onMouseLeave={() => {
                  aboutCloseRef.current = window.setTimeout(() => setOpenAbout(false), 150);
                }}
              >
                <button
                  type="button"
                  className="flex items-center gap-x-1 text-base font-semibold text-current hover:text-purple-300 whitespace-nowrap focus:outline-none focus:ring-0"
                  aria-expanded={openAbout}
                >
                  About Us
                  {openAbout ? (
                    <ChevronUpIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                  ) : (
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                  )}
                </button>

                {openAbout && (
                  <div
                    className="fixed left-0 right-0 top-24 z-[9999] mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
                    onMouseEnter={() => {
                      clearTimeout(aboutCloseRef.current);
                      setOpenAbout(true);
                    }}
                    onMouseLeave={() => {
                      aboutCloseRef.current = window.setTimeout(() => setOpenAbout(false), 150);
                    }}
                  >
                    <div className="flex gap-4 p-2">
                      <div className="flex w-80 flex-col justify-between rounded-2xl bg-gradient-to-br from-gray-950 via-purple-950/50 to-gray-950 p-6 ring-1 ring-purple-500/20">
                        <div>
                          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 ring-1 ring-purple-500/30">
                            <CreditCardIcon className="h-10 w-10 text-purple-400" />
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-white">About DeFiMatrix</h3>
                          <p className="text-sm leading-relaxed text-gray-400 break-words whitespace-normal">
                            Next-generation Web3 tools for seamless, intelligent, and instant use of digital assets
                            every day.
                          </p>
                        </div>
                        <div className="mt-6">
                          <Image src="/defimatrix-logo.svg" alt="DeFiMatrix" width={200} height={100} className="w-32 opacity-50" />
                        </div>
                      </div>

                      <div className="grid flex-1 grid-cols-2 gap-3">
                        {aboutUsItems.map((item) => (
                          <div key={item.name} className="group relative flex items-start gap-x-3 rounded-xl p-4 transition-colors hover:bg-purple-900/30">
                            <div className="flex-auto">
                              <a href={item.href} className="block text-sm font-semibold text-white">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 line-clamp-2 text-xs text-gray-400  break-words whitespace-normal">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </PopoverGroup>
          </div>

          {/* Right: mobile menu button + Launch App */}
          <div className="flex items-center gap-x-4">
            <div className="flex lg:hidden">
              {/* Toggle button: show burger when closed, close when open. Keep inside navbar with z-index. */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-expanded={mobileMenuOpen}
                className="inline-flex items-center justify-center rounded-md p-2.5 text-white focus:outline-none focus:ring-0 relative z-20"
              >
                <span className="sr-only">{mobileMenuOpen ? "Close main menu" : "Open main menu"}</span>
                {mobileMenuOpen ? (
                  <XMarkIcon aria-hidden="true" className="size-6" />
                ) : (
                  <Bars3Icon aria-hidden="true" className="size-6" />
                )}
              </button>
            </div>
            <div className=" hidden lg:flex items-center gap-x-6">
                    <Link href="https://app.defimatrix.io/" target="_blank" className="relative p-[3px]">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-400 to-pink-400" />
                      <div className="group relative rounded-2xl bg-black px-5 py-2 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
                        Launch App
                      </div>
                    </Link>
                  </div>

            {/* <div className="hidden lg:flex lg:items-center lg:gap-x-4">
              <a
                href="https://www.defimatrix.io/"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-900 shadow-sm hover:bg-purple-100 whitespace-nowrap focus:outline-none focus:ring-0"
              >
                
              </a>
            </div> */}
          </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-gradient-to-b from-black via-purple-900 to-violet-900 sm:max-w-sm sm:ring-1 sm:ring-white/10 z-[98]">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">DeFiMatrix</span>
                <Image
                  src="/defimatrix-logo.svg"
                  alt="DeFiMatrix Logo"
                  width={160}
                  height={40}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white focus:outline-none focus:ring-0"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-purple-900/50"
                  >
                    Home
                  </a>
                  <div className="space-y-2">
                    <div className="px-3 pt-2 text-sm font-semibold text-purple-300">DeFi</div>
                    {defiMenuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group -mx-3 flex items-center gap-x-4 rounded-lg p-3 text-sm font-semibold text-white hover:bg-purple-900/50"
                      >
                        <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-purple-900/50">
                          <item.icon aria-hidden="true" className="size-5 text-purple-300" />
                        </div>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 py-6">
                  <div className="space-y-2">
                    <div className="px-3 pt-2 text-sm font-semibold text-purple-300">DeFi Banking</div>
                    {defiBankingItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group -mx-3 flex items-center gap-x-4 rounded-lg p-3 text-sm font-semibold text-white hover:bg-purple-900/50"
                      >
                        <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-purple-900/50">
                          <item.icon aria-hidden="true" className="size-5 text-purple-300" />
                        </div>
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="px-3 pt-2 text-sm font-semibold text-purple-300">Blockchain</div>
                    {blockchainItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group -mx-3 flex items-center gap-x-4 rounded-lg p-3 text-sm font-semibold text-white hover:bg-purple-900/50"
                      >
                        <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-purple-900/50">
                          <item.icon aria-hidden="true" className="size-5 text-purple-300" />
                        </div>
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="https://www.defimatrix.io/pricing"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-purple-900/50"
                  >
                    Pricing
                  </a>
                  <div className="px-3 pt-2 text-sm font-semibold text-purple-300">About Us</div>
                  {aboutUsItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-purple-900/50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  
                  <a
                    href="https://app.defimatrix.io/"
                    className="-mx-3 block rounded-lg bg-white px-3 py-2.5 text-center text-base/7 font-semibold text-purple-900 hover:bg-purple-100 focus:outline-none focus:ring-0"
                  >
                    Launch App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
