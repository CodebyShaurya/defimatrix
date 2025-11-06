"use client";

import Footer from "@/components/ui/home-footer";

import Faqs from "@/components/Faqs";
import FeaturesSection from "@/components/FeaturesSection";
import PortalSection from "@/components/PortalSection";
import ContactUs from "@/components/ContactUs";
import NftSection from "@/components/NftSection";
import HeroSectionNew from "@/components/hero-section-new";
import BackToTopButton from "@/components/BackToTopButton";
import DefiManagement from "@/components/DefiManagement";
import DefiTools from "@/components/DefiTools";
import AiToolsSection from "@/components/AiToolsSection";
import Marquee from "react-fast-marquee";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <main>
      <HeroSectionNew />
      <DefiManagement />
      <DefiTools />
      <AiToolsSection />
      <FeaturesSection />
      <div className="bg-black py-24">
        <h2 className="mx-auto px-4 pb-10 text-center text-3xl font-bold tracking-tight text-white">
          Supported on 67+ chains
        </h2>
        <Marquee className="items-center py-4" gradient gradientColor="#581c87">
          <img className="h-12" src="/images/support.png" alt="Inbox user interface" />
        </Marquee>
      </div>
      {/* <Feature3 /> */}
      <NftSection />
      <PortalSection />

      <Faqs />
      <LogoCloud />
      <div className="relative bg-[url('/images/footer-globe-bg.png')] bg-cover bg-top bg-no-repeat py-16 sm:py-64 2xl:py-[400px] min-[1900px]:py-[600px]">
        <ContactUs />
      </div>
      <Footer />
      <BackToTopButton />
    </main>
  );
}
