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
       <div className=" sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-white text-md sm:text-3xl  mb-5 whitespace-nowrap text-center">Backed By </h2>
        <div className="flex items-center gap-8">
          
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-scroll gap-12 sm:gap-24">
              {/* First set of logos */}
              <img src="/logo1.png" alt="Company 1" className="h-8 " />
              <img src="/logo2.png" alt="Company 2" className="h-8 " />
              {/* <img src="/logo3.png" alt="Company 3" className="h-8 " /> */}
              <img src="/logo4.png" alt="Company 4" className="h-10 " />
              {/* <img src="/logo5.png" alt="Company 5" className="h-8 " /> */}
              <img src="/logo6.png" alt="Company 6" className="h-8 " />
              {/* Duplicate set for seamless loop */}
              <img src="/logo1.png" alt="Company 1" className="h-8 " />
              <img src="/logo2.png" alt="Company 2" className="h-8 " />
              {/* <img src="/logo3.png" alt="Company 3" className="h-8 " /> */}
              <img src="/logo4.png" alt="Company 4" className="h-10 " />
              {/* <img src="/logo5.png" alt="Company 5" className="h-8 " /> */}
              <img src="/logo6.png" alt="Company 6" className="h-8 " />
              {/* Duplicate set for seamless loop */}
              <img src="/logo1.png" alt="Company 1" className="h-8 " />
              <img src="/logo2.png" alt="Company 2" className="h-8 " />
              {/* <img src="/logo3.png" alt="Company 3" className="h-8 " /> */}
              <img src="/logo4.png" alt="Company 4" className="h-10 " />
              {/* <img src="/logo5.png" alt="Company 5" className="h-8 " /> */}
              <img src="/logo6.png" alt="Company 6" className="h-8 " />
              {/* Duplicate set for seamless loop */}
              <img src="/logo1.png" alt="Company 1" className="h-8 " />
              <img src="/logo2.png" alt="Company 2" className="h-8 " />
              {/* <img src="/logo3.png" alt="Company 3" className="h-8 " /> */}
              <img src="/logo4.png" alt="Company 4" className="h-10 " />
              {/* <img src="/logo5.png" alt="Company 5" className="h-8 " /> */}
              <img src="/logo6.png" alt="Company 6" className="h-8 " />
            </div>
          </div>
        </div>
      </div>
      <DefiManagement />
      <DefiTools />
      <AiToolsSection />
      <FeaturesSection />
      <div className="bg-black py-24">
        <h2 className="mx-auto px-4 pb-10 text-center text-3xl font-bold tracking-tight text-white">
          Supported on 67+ chains
        </h2>
        <Marquee className="items-center py-4 w-screen" gradient gradientColor="#581c87">
          <img className="sm:h-12 h-6" src="/images/support.png" alt="Inbox user interface" />
        </Marquee>
      </div>
      {/* <Feature3 /> */}
      <NftSection />
      <PortalSection />

      <Faqs />
      <LogoCloud />
      {/* <div className="relative bg-[url('/images/footer-globe-bg.png')] bg-cover bg-top bg-no-repeat py-16 sm:py-64 2xl:py-[400px] min-[1900px]:py-[600px]"> */}
        <ContactUs />
      {/* </div> */}
      <Footer />
      <BackToTopButton />
    </main>
  );
}
