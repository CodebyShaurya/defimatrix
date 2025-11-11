"use client";

import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/home-footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
