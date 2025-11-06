"use client";

import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/ui/header";
import Footer from "@/components/Footer";

export default function Page() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const text3 = "COMING SOON".split(" ");
  return (
    <main className="h-screen">
      <Header />
      <div className="mx-auto mt-24 flex w-full max-w-6xl flex-col items-center justify-center">
        <a href="./">
          <span className="sr-only">DeFiMatrix</span>
          <Image src="/defi-icon.png" width={140} height={72} alt="Logo" />
        </a>
        <h2 className={`pt-10 text-4xl font-bold text-white sm:text-6xl xl:text-9xl`}>
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
      </div>
      <Footer />
    </main>
  );
}
