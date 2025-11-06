import { useState } from "react";
import { Tab } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { Fragment } from "react";
import TokenTable from "./TokenTable";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TokenomicsSection() {
  return (
    <div
      id="tokenomics"
      className="container relative mx-auto border-x border-white/10 px-4 py-32 text-center lg:px-8 2xl:max-w-screen-2xl"
    >
      <div className="absolute inset-0 left-0 right-0 -z-10 mx-auto flex w-full items-center justify-center">
        <img src="/images/gradient-bg.svg" className="absolute animate-pulse opacity-20 blur-3xl" alt="gradient" />
      </div>
      <div className="mx-auto max-w-6xl lg:px-8 2xl:max-w-7xl">
        <h1 className="font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-5xl sm:leading-tight">
          <span className="relative whitespace-nowrap">
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 340 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11.5C59.5 4.70839 209 -4.79987 339 11.5"
                stroke="url(#paint0_angular_2_29865)"
                strokeWidth={4}
              />
              <defs>
                <radialGradient
                  id="paint0_angular_2_29865"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(170 7) rotate(90) scale(4.5 169)"
                >
                  <stop offset="0.0993526" stopColor="#FFC876" />
                  <stop offset="0.526122" stopColor="#ACFF8E" />
                  <stop offset="0.739587" stopColor="#9453FF" />
                  <stop offset="0.913343" stopColor="#FF89C2" />
                </radialGradient>
              </defs>
            </svg>
            <span className="relative">Tokenomics</span>
          </span>
        </h1>
        <h2 className="font-display mx-auto mt-3 max-w-4xl text-[2rem] font-medium tracking-tight text-white sm:text-[2.4rem] sm:leading-tight">
          The DeFiMatrix Economy Enhanced
        </h2>
        <p className="text-md mx-auto mt-6 max-w-5xl tracking-tight text-gray-300">
          DeFiMatrix introduces a sophisticated tokenomics model designed to sustain and nurture the ecosystem&apos;s
          growth and value. Our native token, DFMX, is central to our platform&apos;s operations, offering numerous
          benefits and utilities to its holders.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <img className="w-auto" src="/images/graph.svg" alt="" />
        </div>
        {/* <div className="mt-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          <p className="flex items-center">
            <span className="mr-3 h-4 w-4 rounded-md bg-[#FFC876]"></span>
            Community & Users (40%)
          </p>
          <p className="flex items-center">
            <span className="mr-2 h-4 w-4 rounded-md bg-[#7ADB78]"></span>
            Liquidity Pool (20%)
          </p>
          <p className="flex items-center">
            <span className="mr-2 h-4 w-4 rounded-md bg-[#C65FD6]"></span>
            Marketing & Partnerships (10%)
          </p>
          <p className="flex items-center">
            <span className="mr-2 h-4 w-4 rounded-md bg-[#FF776F]"></span>
            Reserve Fund (5%)
          </p>
          <p className="flex items-center">
            <span className="mr-2 h-4 w-4 rounded-md bg-[#FF98E2]"></span>Team &
            Founders (15%)
          </p>
        </div> */}
        <div className="mt-10">
          <TokenTable />
          {/* <Tab.Group>
            <Tab.List className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-center text-sm font-medium leading-5",
                    "focus:outline-none ",
                    selected
                      ? " border border-purple-700 !bg-black text-white shadow hover:bg-white/10"
                      : "text-blue-100 hover:bg-white/10 hover:text-white",
                  )
                }
              >
                Total Supply & Allocation
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-center text-sm font-medium leading-5",
                    "focus:outline-none ",
                    selected
                      ? " border border-purple-700 !bg-black text-white shadow hover:bg-white/10"
                      : "text-blue-100 hover:bg-white/10 hover:text-white",
                  )
                }
              >
                Utility & Rewards
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-center text-sm font-medium leading-5",
                    "focus:outline-none ",
                    selected
                      ? " border border-purple-700 !bg-black text-white shadow hover:bg-white/10"
                      : "text-blue-100 hover:bg-white/10 hover:text-white",
                  )
                }
              >
                Growth & Stability Mechanisms
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <p className="text-left text-[#CAC6DD]">
                  The ecosystem is underpinned by a finite total supply of 2
                  billion DFMX tokens, ensuring scarcity and intrinsic value.
                  The strategic allocation of these tokens is designed to
                  support the ecosystem&apos;s diverse needs and long-term
                  viability
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={12}
                        fill="none"
                      >
                        <path
                          fill="#FFC876"
                          d="M9.63 7.131c-.056.058-.27.306-.468.51-1.165 1.283-4.204 3.383-5.795 4.024-.242.103-.853.321-1.179.335-.313 0-.61-.072-.895-.218a1.874 1.874 0 0 1-.795-.904c-.1-.263-.256-1.05-.256-1.064C.086 8.953 0 7.554 0 6.008c0-1.473.086-2.815.213-3.689.015-.014.17-.992.341-1.327A1.785 1.785 0 0 1 2.132 0h.056c.426.015 1.321.395 1.321.409 1.505.642 4.474 2.639 5.668 3.966 0 0 .336.341.482.554.228.306.341.685.341 1.064 0 .423-.128.817-.37 1.138Z"
                        />
                      </svg>
                    </span>
                    <p className="flex flex-col text-left">
                      Community & Users (40%)
                      <span className="mt-2 text-[#ADA8C3]">
                        800 million DFMX are allocated to foster growth and
                        engagement, rewarding our users and community members
                        for their participation and support.
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={12}
                        fill="none"
                      >
                        <path
                          fill="#7ADB78"
                          d="M9.63 7.131c-.056.058-.27.306-.468.51-1.165 1.283-4.204 3.383-5.795 4.024-.242.103-.853.321-1.179.335-.313 0-.61-.072-.895-.218a1.874 1.874 0 0 1-.795-.904c-.1-.263-.256-1.05-.256-1.064C.086 8.953 0 7.554 0 6.008c0-1.473.086-2.815.213-3.689.015-.014.17-.992.341-1.327A1.785 1.785 0 0 1 2.132 0h.056c.426.015 1.321.395 1.321.409 1.505.642 4.474 2.639 5.668 3.966 0 0 .336.341.482.554.228.306.341.685.341 1.064 0 .423-.128.817-.37 1.138Z"
                        />
                      </svg>
                    </span>
                    <p className="flex flex-col text-left">
                      Liquidity Pool (20%)
                      <span className="mt-2 text-[#ADA8C3]">
                        400 million DFMX ensure seamless transactions and
                        liquidity across the platform.
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={12}
                        fill="none"
                      >
                        <path
                          fill="#C65FD6"
                          d="M9.63 7.131c-.056.058-.27.306-.468.51-1.165 1.283-4.204 3.383-5.795 4.024-.242.103-.853.321-1.179.335-.313 0-.61-.072-.895-.218a1.874 1.874 0 0 1-.795-.904c-.1-.263-.256-1.05-.256-1.064C.086 8.953 0 7.554 0 6.008c0-1.473.086-2.815.213-3.689.015-.014.17-.992.341-1.327A1.785 1.785 0 0 1 2.132 0h.056c.426.015 1.321.395 1.321.409 1.505.642 4.474 2.639 5.668 3.966 0 0 .336.341.482.554.228.306.341.685.341 1.064 0 .423-.128.817-.37 1.138Z"
                        />
                      </svg>
                    </span>
                    <p className="flex flex-col text-left">
                      Marketing & Partnerships (10%)
                      <span className="mt-2 text-[#ADA8C3]">
                        200 million DFMX are used to expand our reach and build
                        a robust ecosystem through strategic partnerships.
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={12}
                        fill="none"
                      >
                        <path
                          fill="#FF776F"
                          d="M9.63 7.131c-.056.058-.27.306-.468.51-1.165 1.283-4.204 3.383-5.795 4.024-.242.103-.853.321-1.179.335-.313 0-.61-.072-.895-.218a1.874 1.874 0 0 1-.795-.904c-.1-.263-.256-1.05-.256-1.064C.086 8.953 0 7.554 0 6.008c0-1.473.086-2.815.213-3.689.015-.014.17-.992.341-1.327A1.785 1.785 0 0 1 2.132 0h.056c.426.015 1.321.395 1.321.409 1.505.642 4.474 2.639 5.668 3.966 0 0 .336.341.482.554.228.306.341.685.341 1.064 0 .423-.128.817-.37 1.138Z"
                        />
                      </svg>
                    </span>
                    <p className="flex flex-col text-left">
                      Reserve Fund (5%)
                      <span className="mt-2 text-[#ADA8C3]">
                        100 million DFMX provide stability and flexibility to
                        meet unforeseen needs, ensuring the platform&apos;s
                        resilience.
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={12}
                        fill="none"
                      >
                        <path
                          fill="#FF98E2"
                          d="M9.63 7.131c-.056.058-.27.306-.468.51-1.165 1.283-4.204 3.383-5.795 4.024-.242.103-.853.321-1.179.335-.313 0-.61-.072-.895-.218a1.874 1.874 0 0 1-.795-.904c-.1-.263-.256-1.05-.256-1.064C.086 8.953 0 7.554 0 6.008c0-1.473.086-2.815.213-3.689.015-.014.17-.992.341-1.327A1.785 1.785 0 0 1 2.132 0h.056c.426.015 1.321.395 1.321.409 1.505.642 4.474 2.639 5.668 3.966 0 0 .336.341.482.554.228.306.341.685.341 1.064 0 .423-.128.817-.37 1.138Z"
                        />
                      </svg>
                    </span>
                    <p className="flex flex-col text-left">
                      Team & Founders (15%)
                      <span className="mt-2 text-[#ADA8C3]">
                        300 million DFMX are reserved for the team and founders,
                        aligning &apos;s success through vested stakes.
                      </span>
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group> */}
        </div>
      </div>
    </div>
  );
}
