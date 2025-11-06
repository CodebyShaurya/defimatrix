"use client";

import { useState } from "react";
import Image from "next/image";
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
    href: "#",
    icon: SparklesIcon,
  },
  {
    name: "Swap & Bridge",
    description: "Seamlessly swap and transfer assets across multiple chains with minimal fees and instant execution.",
    href: "#",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Stake",
    description: "Stake tokens to earn dynamic APYs powered by AI-based yield optimization models.",
    href: "#",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Unstake",
    description: "Withdraw staked assets anytime with transparent tracking and instant liquidity release.",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Liquidity Positions",
    description: "Manage and rebalance liquidity across DEXs with AI-powered optimization and analytics.",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Pools",
    description: "Access multi-chain liquidity pools with automated AI allocation for optimal performance and rewards.",
    href: "#",
    icon: CubeTransparentIcon,
  },
  {
    name: "Limit Orders",
    description: "Set intelligent limit orders that execute precisely when market conditions align with your strategy.",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Strategy",
    description: "Design, backtest, and deploy custom DeFi strategies using adaptive AI and real-time market data.",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "xUSD",
    description: "An algorithmic stablecoin pegged to the USD, providing stability within the DeFiMatrix ecosystem.",
    href: "#",
    icon: BanknotesIcon,
  },
  {
    name: "Rewards",
    description: "Earn $DMX tokens and incentives for providing liquidity, staking, and participating in governance.",
    href: "#",
    icon: StarIcon,
  },
  {
    name: "Documentation",
    description: "Explore the full DeFiMatrix App ecosystem — guides, APIs, and developer documentation await!",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Subscribe",
    description: "Unlock premium AI automation, strategy tools, and enterprise-grade analytics with DeFiMatrix Pro.",
    href: "#",
    icon: BellAlertIcon,
  },
];

const defiBankingItems = [
  {
    name: "DeFiMatrix Pay (App)",
    description:
      "A unified DeFi banking app combining traditional finance simplicity with onchain automation and AI-driven security.",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "DeFiMatrix Card",
    description:
      "Spend your crypto anywhere — online or in-store — just like fiat, accepted by millions of merchants worldwide.",
    href: "#",
    icon: CreditCardIcon,
  },
  {
    name: "DeFiMatrix Business Card",
    description: "Manage company funds, payments, and team spending with real-time analytics and Web3 transparency.",
    href: "#",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Security",
    description:
      "Enterprise-grade blockchain security with AI monitoring and encrypted wallet protection for complete peace of mind.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

const blockchainItems = [
  {
    name: "DeFiMatrix Chain",
    description:
      "A modular Layer 1 blockchain designed for AI-native DeFi, enabling cross-chain interoperability and autonomous execution.",
    href: "#",
    icon: CubeTransparentIcon,
  },
  {
    name: "Matrix AI Layer",
    description:
      "The intelligent processing layer that powers automated strategies, adaptive learning, and real-time optimization onchain.",
    href: "#",
    icon: CpuChipIcon,
  },
  {
    name: "EVM+",
    description:
      "Enhanced EVM-compatible framework supporting smart contracts, agentic AI modules, and dynamic execution environments.",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Mint Power (DMX)",
    description: "A computational unit representing the AI energy required to execute autonomous DeFi transactions.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "MatrixFi (MFI)",
    description:
      "The ecosystem's native utility token granting access to AI tools, liquidity pools, and governance features.",
    href: "#",
    icon: BanknotesIcon,
  },
  {
    name: "Cross-Chain Gateway",
    description: "A protocol-level bridge enabling instant asset transfer between 88+ supported blockchains.",
    href: "#",
    icon: LinkIcon,
  },
  {
    name: "AI Security Layer",
    description: "Built-in threat detection and anomaly response powered by AI for real-time onchain protection.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "eDMX",
    description:
      "A liquid EVM-compatible version of DMX with capped emission, ensuring sustainable liquidity and ecosystem balance.",
    href: "#",
    icon: ArrowsRightLeftIcon,
  },
];

const aboutUsItems = [
  {
    name: "About Us",
    href: "#",
    description: "Learn how DeFiMatrix is redefining decentralized finance with autonomous AI-driven solutions.",
  },
  {
    name: "Company",
    href: "#",
    description: "Explore our mission, leadership, and commitment to building the future of DeFi.",
  },
  {
    name: "Affiliate",
    href: "#",
    description: "Partner with us and earn rewards by promoting the DeFiMatrix ecosystem.",
  },
  {
    name: "Build with DeFiGPT",
    href: "#",
    description: "Integrate AI-powered DeFi tools and automate strategies using DeFiGPT technology.",
  },
  {
    name: "Careers",
    href: "#",
    description: "Join our global team and help shape the next evolution of intelligent decentralized finance.",
  },
  {
    name: "Blog",
    href: "#",
    description: "Stay updated with the latest insights, product updates, and industry trends from DeFiMatrix.",
  },
  {
    name: "Contact Us",
    href: "#",
    description: "Get in touch with our team for collaborations, partnerships, or general inquiries.",
  },
];

export default function HeaderNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mx-auto mt-4 max-w-7xl rounded-full  p-[5px] animated-border-gradient animated-border-glow header-animated">
      <nav
        aria-label="Global"
        className="relative z-10 flex items-center justify-between rounded-full bg-black p-6 backdrop-blur-md lg:px-8"
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
            <a href="#" className="text-sm/6 font-semibold text-white hover:text-purple-300 whitespace-nowrap">
              Home
            </a>

            <Popover>
              {({ open }) => (
                <>
                  <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:text-purple-300 whitespace-nowrap">
                    DeFi
                    {open ? (
                      <ChevronUpIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                    ) : (
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                    )}
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in fixed left-0 right-0 top-24 z-10 mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10 backdrop-blur-xl transition"
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
                      <Image
                        src="/defimatrix-logo.svg"
                        alt="DeFiMatrix"
                        width={200}
                        height={100}
                        className="w-32 opacity-50"
                      />
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
                          <item.icon
                            aria-hidden="true"
                            className="size-5 text-purple-300 group-hover:text-purple-200"
                          />
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
                  </PopoverPanel>
                </>
              )}
            </Popover>

              <Popover>
                {({ open }) => (
                  <>
                    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:text-purple-300 whitespace-nowrap">
                      DeFi Banking
                      {open ? (
                        <ChevronUpIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                      ) : (
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                      )}
                    </PopoverButton>

                    <PopoverPanel
                      transition
                      className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in fixed left-0 right-0 top-24 z-10 mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10 backdrop-blur-xl transition"
                    >
                  <div className="flex gap-4 p-6">
                  {/* Left Featured Card */}
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
                      <Image
                        src="/defimatrix-logo.svg"
                        alt="DeFiMatrix"
                        width={200}
                        height={100}
                        className="w-32 opacity-50"
                      />
                    </div>
                  </div>

                  {/* Right Menu Items Grid */}
                  <div className="grid flex-1 grid-cols-2 gap-3">
                    {defiBankingItems.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-start gap-x-3 rounded-xl p-4 transition-colors hover:bg-purple-900/30"
                      >
                        <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-purple-900/30 ring-1 ring-purple-500/20 transition-colors group-hover:bg-purple-800/50">
                          <item.icon
                            aria-hidden="true"
                            className="size-5 text-purple-300 group-hover:text-purple-200"
                          />
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
                    </PopoverPanel>
                  </>
                )}
              </Popover>

              <Popover>
                {({ open }) => (
                  <>
                    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:text-purple-300 whitespace-nowrap">
                      Blockchain
                      {open ? (
                        <ChevronUpIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                      ) : (
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                      )}
                    </PopoverButton>

                    <PopoverPanel
                      transition
                      className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in fixed left-0 right-0 top-24 z-10 mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10 backdrop-blur-xl transition"
                    >
                  <div className="flex gap-4 p-6">
                  {/* Left Featured Card */}
                  <div className="flex w-80 flex-col justify-between rounded-2xl bg-gradient-to-br from-gray-950 via-purple-950/50 to-gray-950 p-6 ring-1 ring-purple-500/20">
                    <div>
                      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 ring-1 ring-purple-500/30">
                        <CubeTransparentIcon className="h-10 w-10 text-purple-400" />
                      </div>
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                        Blockchain – Coming Soon
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-white">DeFiMatrix Chain</h3>
                      <p className="text-sm leading-relaxed text-gray-400 break-words whitespace-normal">
                        A next-generation modular blockchain built for AI-powered decentralized finance. Unifies
                        performance, scalability, and intelligence through dual-core architecture.
                      </p>
                    </div>
                    <div className="mt-6 flex gap-2">
                      <button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white hover:from-pink-600 hover:to-purple-700">
                        GET DMX
                      </button>
                      <button className="rounded-full bg-purple-900/50 px-4 py-2 text-xs font-semibold text-white ring-1 ring-purple-500/30 hover:bg-purple-800/50">
                        GET MFI
                      </button>
                    </div>
                  </div>

                  {/* Right Menu Items Grid */}
                  <div className="grid flex-1 grid-cols-3 gap-3">
                    {blockchainItems.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-start gap-x-3 rounded-xl p-4 transition-colors hover:bg-purple-900/30"
                      >
                        <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-purple-900/30 ring-1 ring-purple-500/20 transition-colors group-hover:bg-purple-800/50">
                          <item.icon
                            aria-hidden="true"
                            className="size-5 text-purple-300 group-hover:text-purple-200"
                          />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block text-sm font-semibold text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1   text-xs text-gray-400 break-words whitespace-normal">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                    </PopoverPanel>
                  </>
                )}
              </Popover>

              <a href="#" className="text-sm/6 font-semibold text-white hover:text-purple-300 whitespace-nowrap">
                Pricing
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:text-purple-300 whitespace-nowrap">
                      About Us
                      {open ? (
                        <ChevronUpIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                      ) : (
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-purple-300" />
                      )}
                    </PopoverButton>

                    <PopoverPanel
                      transition
                      className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in absolute left-1/2 z-10 mt-3 w-96 -translate-x-1/2 rounded-3xl bg-black p-4 shadow-lg ring-1 ring-white/10 transition"
                    >
                  {aboutUsItems.map((item) => (
                    <div key={item.name} className="relative rounded-lg p-3 hover:bg-purple-900/50">
                      <a href={item.href} className="block text-sm/6 font-semibold text-white whitespace-nowrap">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-sm/6 text-gray-400  break-words whitespace-normal">{item.description}</p>
                    </div>
                  ))}
                    </PopoverPanel>
                  </>
                )}
              </Popover>
            </PopoverGroup>
          </div>

          {/* Right: mobile menu button + Launch App */}
          <div className="flex items-center gap-x-4">
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-x-4">
              <a
                href="#"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-900 shadow-sm hover:bg-purple-100 whitespace-nowrap"
              >
                Launch App
              </a>
            </div>
          </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-gradient-to-b from-black via-purple-900 to-violet-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
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
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
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
                    href="#"
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
                    href="#"
                    className="-mx-3 block rounded-lg bg-white px-3 py-2.5 text-center text-base/7 font-semibold text-purple-900 hover:bg-purple-100"
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
