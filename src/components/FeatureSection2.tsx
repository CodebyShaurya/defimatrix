import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


export default function FeaturesSection2() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const text3 = "COMING SOON".split(" ");
  return (
    <>
      {showComingSoon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="relative mx-4 flex w-full max-w-6xl flex-col items-center rounded-lg bg-black py-20">
            <button
              className="absolute right-8 top-8 z-50"
              onClick={() => {
                setShowComingSoon(false);
                document.body.style.overflow = "visible";
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L10 10M10 10L19 19M10 10L1 19M10 10L19 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <a href="./">
              <span className="sr-only">DefiMatrix</span>
              <Image src="/logo.svg" width={140} height={72} alt="Logo" />
            </a>
            <h2
              className={`pt-10 text-4xl font-bold text-white sm:text-6xl xl:text-9xl`}
            >
              {text3.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                    type: "spring",
                    stiffness: 260,
                    damping: 50,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </h2>
            <span className={`!pt-14 text-lg font-medium text-[#A8A8A8]`}>
              Connect via:
            </span>

            <a
              href="https://discord.gg/nGEQuEbVcN"
              target="_blank"
              className={`mt-4 flex items-center space-x-2 rounded-md bg-gradient-to-tr from-indigo-400 to-fuchsia-400 px-14 py-4 text-white shadow-md transition-all duration-150 ease-in-out hover:scale-95 hover:from-green-900 hover:via-green-600 hover:to-green-900 hover:shadow-lg active:scale-90`}
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.77635 0C6.96342 0 4.51256 1.00745 4.07286 1.20878C3.63315 1.41012 3.1451 2.03862 2.59131 3.07593C2.03677 4.11323 1.59178 5.32584 0.868758 7.10954C0.146495 8.89324 -0.0219829 12.332 0.00219325 13.3816C0.0263694 14.4311 0.144984 15.251 1.20647 15.8719C2.2672 16.492 3.20554 17.1411 4.19298 17.5316C5.18118 17.922 5.8551 18.2029 6.31293 17.8125C6.77077 17.4221 7.07222 16.7385 7.07222 16.7385C7.07222 16.7385 7.50588 16.1283 6.68691 15.7624C5.86794 15.3957 5.45845 15.1393 5.49396 14.7611C5.53023 14.3829 5.58991 14.1754 5.79465 14.2244C5.9994 14.2734 6.48217 15.1515 8.33693 15.5542C10.1917 15.9569 11.9996 15.8964 11.9996 15.8964C11.9996 15.8964 13.8083 15.9576 15.6631 15.5542C17.5178 15.1515 17.9998 14.2734 18.2046 14.2244C18.4093 14.1754 18.469 14.3829 18.5053 14.7603C18.5415 15.1393 18.1321 15.3957 17.3131 15.7624C16.4941 16.1283 16.9278 16.7385 16.9278 16.7385C16.9278 16.7385 17.2292 17.4213 17.6871 17.8125C18.1441 18.2029 18.8188 17.922 19.8063 17.5316C20.7937 17.1411 21.7328 16.4927 22.7935 15.8719C23.855 15.251 23.9736 14.4311 23.9978 13.3816C24.022 12.3328 23.8535 8.89324 23.1305 7.10954C22.4082 5.32584 21.9625 4.11323 21.4079 3.07593C20.8549 2.03862 20.3661 1.41012 19.9271 1.20802C19.4874 1.00745 17.0358 0 16.2229 0C15.41 0 15.1697 0.574153 15.1697 0.574153L14.8864 1.20878C14.8864 1.20878 12.9825 0.842091 12.0125 0.841325C11.0424 0.841325 9.11359 1.20878 9.11359 1.20878L8.83028 0.573387C8.83028 0.573387 8.59003 0 7.77635 0ZM7.86474 7.61556H7.89496C9.08035 7.61556 10.0406 8.66664 10.0406 9.9627C10.0406 11.2595 9.08035 12.3098 7.89496 12.3098C6.70957 12.3098 5.74932 11.2595 5.74932 9.9627C5.74857 8.67889 6.69144 7.63317 7.86474 7.61556ZM16.105 7.61556H16.1353C17.3086 7.63317 18.2507 8.67966 18.2507 9.9627C18.2507 11.2595 17.2904 12.3098 16.105 12.3098C14.9189 12.3098 13.9594 11.2595 13.9594 9.9627C13.9594 8.66664 14.9189 7.61556 16.105 7.61556Z"
                  fill="white"
                />
              </svg>
              <span className="font-semibold">Join Discord</span>
            </a>
          </div>
        </div>
      )}
      <div className="container relative mx-auto border border-white/10 px-4 py-20 lg:px-8 2xl:max-w-screen-2xl">
        <div className="flex max-w-6xl flex-col items-center justify-between py-10 lg:flex-row lg:px-8 2xl:max-w-7xl">
          <div className="max-w-lg">
            <div className="">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Ensuring Security & Compliance
              </h2>
              <p className="mt-4 text-lg text-white/70">
                DeFiMatrix is committed to upholding the highest standards of
                security and regulatory compliance. Our smart contract and
                operational procedures undergo rigorous audits to ensure a
                secure and trustworthy platform for our users.
              </p>
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
          <img
            className="sm:animate-spin-slow mt-6 h-full w-auto w-full max-w-xl px-4 md:max-w-lg lg:mt-0"
            src="/images/feature-3.png"
            alt="feature"
          />
        </div>
      </div>
    </>
  );
}
