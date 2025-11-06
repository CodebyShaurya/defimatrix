"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CoinGeckoMarquee from "./CoinGeckoMarquee";
import Link from "next/link";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import CoinMarketIcon from "@/components/icons/CoinMarketIcon";
import DiscordIcon from "./DiscordIcon";
import Xicon from "./Xicon";

const initialNavigation = [
  {
    name: "Start Here",
    href: "/dashboard",
    icon: "/images/icons/start.svg",
    activeIcon: "/images/icons/active/start.svg",
    current: false,
  },
  {
    name: "Borrow",
    href: "/dashboard/borrow",
    icon: "/images/icons/borrow.svg",
    activeIcon: "/images/icons/active/borrow.svg",
    current: false,
  },
  {
    name: "Staking",
    href: "/dashboard/staking",
    icon: "/images/icons/staking.svg",
    activeIcon: "/images/icons/active/staking.svg",
    current: false,
  },
  {
    name: "Yields",
    href: "/dashboard/yields",
    icon: "/images/icons/yeilds.svg",
    activeIcon: "/images/icons/active/yeilds.svg",
    current: false,
  },
  {
    name: "Stability Pool",
    href: "/dashboard/stability",
    icon: "/images/icons/stability.svg",
    activeIcon: "/images/icons/active/stability.svg",
    current: false,
  },
  {
    name: "Asset Tokenization",
    href: "/dashboard/asset",
    icon: "/images/icons/asset.svg",
    activeIcon: "/images/icons/active/asset.svg",
    current: false,
  },
  {
    name: "Bonds",
    href: "/dashboard/bonds",
    icon: "/images/icons/bonds.svg",
    activeIcon: "/images/icons/active/bonds.svg",
    current: false,
  },
  {
    name: "Trading",
    href: "/dashboard/trading",
    icon: "/images/icons/trading.svg",
    activeIcon: "/images/icons/active/trading.svg",
    current: false,
  },
  {
    name: "NFT-Fi",
    href: "/dashboard/nft",
    icon: "/images/icons/nft.svg",
    activeIcon: "/images/icons/active/nft.svg",
    current: false,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: "/images/icons/analytics.svg",
    activeIcon: "/images/icons/active/analytics.svg",
    current: false,
  },
  {
    name: "Knowledge Base",
    href: "/dashboard/knowledge",
    icon: "/images/icons/knowledge.svg",
    activeIcon: "/images/icons/active/knowledge.svg",
    current: false,
  },
  {
    name: "My Portfolio",
    href: "/dashboard/portfolio",
    icon: "/images/icons/portfolio.svg",
    activeIcon: "/images/icons/active/portfolio.svg",
    current: false,
  },
];

const teams = [
  { id: 1, name: "Discord", href: "https://discord.gg/nGEQuEbVcN", icon: DiscordIcon, current: false },
  { id: 3, name: "X", href: "https://x.com/DMatrixOfficial", icon: Xicon, current: false },
  {
    id: 4,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/defimatrix/?viewAsMember=true",
    icon: LinkedinIcon,
    current: false,
  },
  {
    id: 5,
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCKD_C5QKTdapXBORI_-OTbQ",
    icon: YoutubeIcon,
    current: false,
  },
  { id: 6, name: "GitHub", href: "https://github.com", icon: GithubIcon, current: false },
  { id: 7, name: "CoinMarketCap", href: "https://coinmarketcap.com", icon: CoinMarketIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface PageProps {
  children: ReactNode; // Typing the children prop using ReactNode
}

export default function AppLayout({ children }: PageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Initialize navigation state without current property set
  const [navigation, setNavigation] = useState(
    initialNavigation.map((item) => ({
      ...item,
      current: false, // default to false
    })),
  );

  useEffect(() => {
    // This code now runs on client side only, where `window` is defined
    const currentPath = window.location.pathname;

    // Update the navigation state with the correct current property
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.href === currentPath,
    }));

    setNavigation(updatedNavigation);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <div className="h-screen bg-[#15131D]">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img className="h-8 w-auto" src="/logo.svg" alt="Your Company" />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <img
                                    src={item.current ? item.activeIcon : item.icon}
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 flex space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                    <team.icon className="size-6" />
                                  </span>
                                  {/* <span className="truncate">{team.name}</span> */}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#0E0C15] px-6">
            <div className="flex h-16 shrink-0 items-center">
              <Link href="./">
                <img className="h-8 w-auto" src="/defimatrix-logo.svg" alt="Defimatrix" />
              </Link>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <img src={item.current ? item.activeIcon : item.icon} alt="" className="h-6 w-6 shrink-0" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Our Socials</div>
                  <ul role="list" className="-mx-2 mt-2 flex space-x-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-1 text-sm font-semibold leading-6",
                          )}
                        >
                          <span>
                            <team.icon className="size-6" />
                          </span>
                          {/* <span className="truncate">{team.name}</span> */}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-[#0E0C15] px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
        </div>

        <main className="bg-[#15131D] py-10 lg:pl-72">
          <div className="mx-auto flex max-w-7xl justify-between gap-4">
            <div className="ml-6 max-w-3xl overflow-hidden rounded-md">
              <CoinGeckoMarquee coinIds="bitcoin,ethereum,litecoin" currency="usd" />
            </div>

            <div className="mr-6 flex gap-6">
              <Link
                href="/dashboard/coming-soon"
                className="inline-flex h-min items-center justify-center gap-5 rounded-3xl bg-gradient-to-r from-indigo-400 to-pink-300 px-6 py-2.5 text-sm font-semibold text-indigo-900 shadow"
              >
                Connect Wallet
              </Link>
              <Link
                href="/dashboard/coming-soon"
                className="inline-flex h-min  items-center justify-center gap-2 rounded-3xl bg-gray-700 px-6 py-2.5 text-sm shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                Tour
              </Link>
              <div className="h-min rounded-full bg-gray-700 p-2.5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}
