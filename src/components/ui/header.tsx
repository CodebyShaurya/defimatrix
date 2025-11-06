"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Button } from "@/components/ui/button";

// Updated navigation links
const mainNavigation = [
  { name: "Home", href: "/" },
  {
    name: "API",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdOX0jlgPL6MwDgYApNRl1d8exeX3toD5zvSD9VAaOzQ-1-sw/viewform",
  },
  { name: "Company", href: "/about-us" },
  // {
  //   name: "Documentation",
  //   href: "https://docs.defimatrix.io/docs/Introduction/introduction",
  // },
  { name: "Affiliate", href: "/affiliate" },
  { name: "Pricing", href: "/pricing" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className={`sticky top-0 z-40 w-full ${transparent ? "" : "bg-black"}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/defimatrix-logo.svg"
                alt="DefiMatrix Logo"
                width={100}
                height={100}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="ml-8 hidden items-center space-x-6 lg:flex">
              {mainNavigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium tracking-wider text-gray-200 transition-all duration-200 ease-in-out hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            {/* Launch App button */}
            <div className="hidden lg:block">
              {/* <Link href="/defigpt">*/}
              <Link href="https://app.defimatrix.io/ " target="_blank">
                <button className="rounded-full border border-white/20 bg-black/50 px-6 py-3 text-base font-medium tracking-wider text-white hover:bg-black/70">
                  Launch App
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu using HeadlessUI Dialog */}
      <Dialog as="div" className="relative z-50 lg:hidden" open={isOpen} onClose={() => setIsOpen(false)}>
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        {/* Full-screen container */}
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <Dialog.Panel className="flex min-h-full flex-col bg-black/95 text-white backdrop-blur-xl">
            {/* Menu Header with Close Button */}
            <div className="flex h-16 items-center border-b border-white/10 px-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Image src="/defimatrix-logo.svg" alt="DefiMatrix Logo" width={200} height={200} />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 ml-auto text-white"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-5 py-4">
              <div className="space-y-6">
                {/* Primary Nav Links */}
                <div className="space-y-3">
                  {mainNavigation.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block py-3 text-sm font-medium tracking-wider text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <Link href="https://app.defimatrix.io/ " target="_blank">
                    <button className="rounded-full border border-white/20 bg-black/50 px-6 py-3 text-base font-medium tracking-wider text-white hover:bg-black/70">
                      Launch App
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}
