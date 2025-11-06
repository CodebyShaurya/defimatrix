import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

export default function EmpowerSectionMobile() {
  return (
    <div className="lg:hidden w-full container relative mx-auto overflow-hidden border-x border-t border-white/10 px-4 py-32 lg:px-8 2xl:max-w-screen-2xl">
      <div className="mx-auto max-w-6xl lg:px-8 2xl:max-w-7xl">
        <div className="flex w-full flex-col items-center justify-end gap-x-8 gap-y-16 sm:gap-y-20 lg:flex-row">
           <Marquee>
              <div className="flex w-full gap-6">
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p1.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      To progress
                    </span>
                    <p>Convert 30 ETH to DFMX for governance voting power</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p2.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Stake 1000 DFMX to earn in new reward pool</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p3.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Find best APY for staking 200 LINK</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p4.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Mint exclusive DeFiMatrix NFT with 50 DFMX</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p5.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Trade NFTs on DeFiMatrix with zero gas fees</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p6.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Join DeFiMatrix&apos;s NFT lending program with my digital art</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p7.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Access premium NFT drops as a DeFiMatrix VIP</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p8.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Liquidity mine with NFTs for unique rewards</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p9.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Automatically rebalance portfolio based on DeFiMatrix AI insights</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="mb-6 flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p10.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Invest in DeFiMatrix&apos;s NFT index fund with 500 DFMX</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p1.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      To progress
                    </span>
                    <p>Convert 30 ETH to DFMX for governance voting power</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p2.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Stake 1000 DFMX to earn in new reward pool</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p3.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Find best APY for staking 200 LINK</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p4.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Mint exclusive DeFiMatrix NFT with 50 DFMX</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p5.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Trade NFTs on DeFiMatrix with zero gas fees</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p6.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Join DeFiMatrix&apos;s NFT lending program with my digital art</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p7.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Access premium NFT drops as a DeFiMatrix VIP</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p8.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Liquidity mine with NFTs for unique rewards</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p9.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Automatically rebalance portfolio based on DeFiMatrix AI insights</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
                <div className="mb-6 flex flex-col w-64 items-center gap-2 rounded-2xl bg-white/10 p-4">
                  <Image
                    src="/images/people/p10.png"
                    alt="portal-logo"
                    width={120}
                    height={120}
                    className="w-full max-w-32 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-light text-orange-600 ring-1 ring-inset ring-gray-500/10">
                      In progress
                    </span>
                    <p>Invest in DeFiMatrix&apos;s NFT index fund with 500 DFMX</p>
                    <p className="text-gray-400">Ethereum Chain</p>
                  </div>
                </div>
              </div>
              </Marquee>
          <div className="lg:mt-0 mt-20 lg:max-w-lg ">
            <h2 className="mt-2 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-2xl font-semibold tracking-tight text-transparent md:text-5xl">
              Supercharge any transaction on-chain with AI
            </h2>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/dashboard" className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-indigo-400 to-fuchsia-400" />
                <div className="group relative rounded bg-black px-8 py-3.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
                  TRY INTENT IN 15 SECONDS
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
