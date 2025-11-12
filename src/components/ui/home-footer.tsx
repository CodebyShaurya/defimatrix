"use client";

import React, { useState } from "react";
import Xicon from "../Xicon";
import DiscordIcon from "../DiscordIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import CoinMarketIcon from "@/components/icons/CoinMarketIcon";
import { CTABanner } from "../cta-banner";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "API", href: "/api" },
    { name: "Company", href: "/about-us" },
    { name: "Documentation", href: "https://docs.defimatrix.io/docs/Introduction/introduction" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Terms Of Service", href: "/terms-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Community Guidelines", href: "/community-guidelines" },
    { name: "Brand Guidelines", href: "/brand-guide" },
    { name: "Events", href: "/events" },
  ],
  social: [
    {
      name: "X",
      href: "https://x.com/DeFiMatrixOS",
      icon: Xicon,
    },
    {
      name: "Discord",
      href: "https://discord.gg/nGEQuEbVcN",
      icon: DiscordIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/defimatrix/?viewAsMember=true",
      icon: LinkedinIcon,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCKD_C5QKTdapXBORI_-OTbQ",
      icon: YoutubeIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: GithubIcon,
    },
    {
      name: "CoinMarketCap",
      href: "https://coinmarketcap.com",
      icon: CoinMarketIcon,
    },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to subscribe");
    }
  };

  return (
    <>
    {/* <CTABanner /> */}
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* Navigation Section */}
          <div className="mt-12 flex flex-col justify-between sm:flex-row">
            {/* Header Section */}
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-semibold">
                Defimatrix #1 Intent-Driven
                <br />
                DeFi Platform
              </h2>
              <div className="flex gap-1 sm:space-x-3">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="rounded-lg">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="size-10" aria-hidden="true" />
                  </a>
                ))}
              </div>
              {/* Newsletter Section */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">Subscribe to our newsletter</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Stay updated with the latest DeFi insights and platform updates.
                </p>
                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
                  <div className="flex sm:flex-row flex-col gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="min-w-[250px] rounded-lg bg-[#1A1A24] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B2E8E]"
                      required
                      disabled={status === "loading"}
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-[#7B2E8E] px-4 py-2 font-medium text-white transition-colors hover:bg-[#8B3E9E] disabled:opacity-50"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                  {status === "success" && (
                    <p className="text-sm text-green-400">Successfully subscribed to our newsletter!</p>
                  )}
                  {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
                </form>
              </div>
            </div>
            <div className="flex gap-12 sm:flex-row">
              {/* Main Navigation */}
              <div className="space-y-4">
                {navigation.main.map((item) => (
                  <div key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>

              {/* Legal Links */}
              <div className="space-y-4">
                {navigation.legal.map((item) => (
                  <div key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Large Logo Text */}
          <div className="mx-auto mt-16 w-full">
            <img src="/images/footer-logo.svg" alt="defimatrix-logo" className="h-auto w-full" />
          </div>
          {/* Copyright */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">© 2025 DefiMatrix, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
