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
import ChainBased from "@/components/ChainBased";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <main>
      <HeroSectionNew />
      <ChainBased/>
      
      <DefiManagement />
      <DefiTools />
      <AiToolsSection />
      <FeaturesSection /> 
      <div className="bg-black pt-12 md:pt-24">

        <div className="flex flex-row justify-center mx-auto px-4 pb-10 text-center ">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Supported on 67+
                
            </h2>
             <span className=" flex flex-col items-center w-20 sm:w-[5vw] text-center ml-4">
                <span className="text-3xl font-bold tracking-tight text-white"> chains</span>
                    <svg
                        className=" w-full pt-2"
                        viewBox="0 0 364 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 8C63.6538 3.47226 223.769 -2.86658 363 8"
                          stroke="url(#paint0_radial_2482_631)"
                          strokeWidth="3"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_2482_631"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(158.651 6.91635) scale(777.036 11.0605)"
                          >
                            <stop stopColor="#C450D5" />
                            <stop offset="1" stopColor="#D43E76" />
                          </radialGradient>
                        </defs>
                      </svg>

                </span>

            </div>
        <Marquee className="items-center  w-screen" gradient gradientColor="#581c87">
          <img className="sm:h-12 h-6" src="/Group.png" alt="Inbox user interface" />
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
