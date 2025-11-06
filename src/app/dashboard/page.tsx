"use client";
import AppLayout from "@/components/AppLayout";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <AppLayout>
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="py-16 sm:py-24">
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
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
