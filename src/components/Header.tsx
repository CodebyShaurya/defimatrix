"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconBolt, IconDevices, IconGraph, IconHome, IconRoad, IconSend } from "@tabler/icons-react";
export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "./#use-cases",
      icon: <IconBolt className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Market Size",
      link: "./#market-size",
      icon: <IconGraph className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  const navItems2 = [
    {
      name: "Portals",
      link: "./#portals",
      icon: <IconDevices className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact us",
      link: "./#contact-us",
      icon: <IconSend className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <FloatingNav
      className="container inset-x-0 !mx-auto 2xl:max-w-screen-2xl"
      navItems={navItems}
      navItems2={navItems2}
    />
  );
}
