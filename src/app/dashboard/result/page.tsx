"use client";

import AppLayout from "@/components/AppLayout";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <AppLayout>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 sm:my-8">
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#252134] px-4 pb-4 pt-8 text-left shadow-xl transition-all sm:w-full sm:max-w-2xl sm:p-6 xl:p-24">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="text-3xl font-semibold leading-6 text-white">
                          Result
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-2xl text-gray-300">Your 30 ETH HAS BEEN STAKED At 0KX successfully</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                        onClick={() => setOpen(false)}
                      >
                        Go back to dashboard
                      </button>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className=" py-16 sm:py-24">
          <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex h-16 shrink-0 items-center">
                <img className="h-16 w-auto" src="/defimatrix-logo.svg" alt="Defimatrix" />
              </div>
              <form className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-x-4">
                <label htmlFor="search" className="sr-only mb-2 text-sm font-medium text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center pl-3">
                    <svg
                      className="ml-4 h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    autoComplete="off"
                    className="block w-full rounded-full border-t border-purple-400 bg-[#252134] p-4 pl-16 text-sm  text-white placeholder-gray-400 shadow shadow-purple-500 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:focus:border-purple-500 dark:focus:ring-purple-500"
                    placeholder="What is your intent?"
                  />

                  <button
                    type="submit"
                    className="absolute bottom-2.5  end-2.5 inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mx-auto mt-10 flex max-w-md gap-x-4">
                  <Link href="/dashboard/result" className="relative p-[3px]">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-indigo-400 to-fuchsia-400" />
                    <div className="group relative rounded-md bg-black px-8 py-3.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
                      DeFiMatrix Search
                    </div>
                  </Link>
                  <button className="flex-none rounded-md bg-[#3F3A52] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#3F3A52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    I&apos;m Feeling Lucky
                  </button>
                </div>
              </form>
              <span className="mt-0.5 mt-8 text-lg font-light text-white/70">Results</span>
              <div className="mt-12 grid grid-cols-2 gap-14">
                <div className="flex flex-col space-y-4 rounded-md border border-white/10 bg-[#252134] p-10">
                  <div className="relative p-0.5">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-indigo-400 to-fuchsia-400"></div>
                    <div className="relative z-10 flex flex-col items-center rounded-md bg-[#252134] px-14 py-4">
                      <span className="text-center text-xl font-medium text-white">0KX</span>
                      <span className="mt-0.5 text-lg font-light text-white/70">25% Apy</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-0.5">
                    <span className="mt-0.5 text-sm font-light text-white/30">Total Earnings For</span>
                    <span className="mt-0.5 text-lg font-medium text-white">6 Months</span>
                  </div>

                  <div className="flex space-x-2 self-center">
                    <img src="/images/etherium-logo.svg" className="h-8 w-8" />
                    <span className="mt-0.5 text-lg font-light text-white/70">32.897 ETH</span>
                  </div>

                  <button onClick={() => setOpen(true)} className="relative cursor-pointer self-center p-[3px]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-indigo-400 to-fuchsia-400"></div>
                    <div className="group relative rounded-full bg-gradient-to-b from-indigo-400 to-fuchsia-400 px-12 py-2.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
                      Select
                    </div>
                  </button>
                </div>

                <div className="flex flex-col space-y-4 rounded-md border border-white/10 bg-[#252134] p-10">
                  <div className="relative p-0.5">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-indigo-400 to-fuchsia-400"></div>
                    <div className="relative z-10 flex flex-col items-center rounded-md bg-[#252134] px-14 py-4">
                      <span className="text-center text-xl font-medium text-white">
                        Pancakes <br />
                        Swap
                      </span>
                      <span className="mt-0.5 text-lg font-light text-white/70">25% Apy</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-0.5">
                    <span className="mt-0.5 text-sm font-light text-white/30">Total Earnings For</span>
                    <span className="mt-0.5 text-lg font-medium text-white">6 Months</span>
                  </div>

                  <div className="flex space-x-2 self-center">
                    <img src="/images/etherium-logo.svg" className="h-8 w-8" />
                    <span className="mt-0.5 text-lg font-light text-white/70">31.044 ETH</span>
                  </div>

                  <button onClick={() => setOpen(true)} className="relative cursor-pointer self-center p-[3px]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-indigo-400 to-fuchsia-400"></div>
                    <div className="group relative rounded-full bg-[#252134] px-12 py-2.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
                      Select
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal /> */}
    </AppLayout>
  );
}
