import type { Metadata } from "next";
import { Sora, Orbitron } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Favicon from "@/components/Favicon";

const sora = Sora({ subsets: ["latin"] });
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "#1 Intent-Driven DeFi Platform for Multi-Chain Asset Empowerment - Defimatrix",
  description:
    "Discover DeFiMatrix, the intent-driven DeFi platform transforming how you save, earn, and grow your digital assets. With our advanced multi-chain, multi-token approach, unlock unparalleled opportunities for financial empowerment and yield optimization in the decentralized finance landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${orbitron.variable}`}>
      <Head>
        <meta charSet="utf-8" />
        <Favicon name="DefiMatrix" />
      </Head>
      <body className={sora.className}>{children}</body>
    </html>
  );
}
