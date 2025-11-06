import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css"; // core Swiper
import "swiper/css/autoplay"; // module for autoplay
import "swiper/css/scrollbar"; // module for scrollbar

// Import required modules
import { Autoplay, Scrollbar } from "swiper/modules";

const images = [
  { src: "/images/mobile/m1.png", alt: "App screen 01" },
  { src: "/images/mobile/m2.png", alt: "App screen 02" },
  { src: "/images/mobile/m14.png", alt: "App screen 14" },
  { src: "/images/mobile/m3.png", alt: "App screen 03" },
  { src: "/images/mobile/m4.png", alt: "App screen 04" },
  { src: "/images/mobile/m5.png", alt: "App screen 05" },
  { src: "/images/mobile/m6.png", alt: "App screen 06" },
  { src: "/images/mobile/m7.png", alt: "App screen 07" },
  { src: "/images/mobile/m8.png", alt: "App screen 08" },
  { src: "/images/mobile/m9.png", alt: "App screen 09" },
  { src: "/images/mobile/m10.png", alt: "App screen 10" },
  { src: "/images/mobile/m11.png", alt: "App screen 11" },
  { src: "/images/mobile/m13.png", alt: "App screen 13" },
  
];

export default function MobilePreviews() {
  return (
    <section id="mobile-app" className="container relative mx-auto border-x border-b border-white/10 px-4 py-16 lg:px-8 2xl:max-w-screen-2xl">
      <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-7xl">
        <div className="py-12">
          {/* Section header */}
          <h2 className="mx-auto max-w-4xl text-left text-3xl font-medium tracking-tight text-white sm:leading-tight md:text-center md:text-5xl lg:text-6xl">
            <span className="relative whitespace-nowrap">
              <svg
                className="absolute -bottom-2 left-0 w-full pt-2"
                viewBox="0 0 340 14"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  stroke="url(#a)"
                  strokeWidth={3}
                  d="M.5 8.281c62.654-4.527 222.769-10.866 362 0"
                />
                <defs>
                  <radialGradient
                    id="a"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 3 -181 0 181.5 5.281)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.099} stopColor="#FFC876" />
                    <stop offset={0.526} stopColor="#ACFF8E" />
                    <stop offset={0.74} stopColor="#9453FF" />
                    <stop offset={0.913} stopColor="#FF89C2" />
                  </radialGradient>
                </defs>
              </svg>
              <span className="relative">Introducing</span>
            </span>
          </h2>
          <p className="mx-auto max-w-4xl pt-8 text-left text-3xl font-medium tracking-tight text-white sm:leading-tight md:text-center md:text-5xl">
            the Future of DeFi Trading
          </p>
          <p className="mx-auto my-6 max-w-4xl text-left text-lg tracking-tight text-gray-300 md:text-center">
            Get an exclusive sneak peek of DeFiMatrix&apos;s innovative trading
            app – Your gateway to intuitive and strategic crypto finance.
          </p>
          <Image
            className="pointer-events-none mx-auto mb-8 h-auto max-w-full"
            src="/images/coming-soon.png"
            width={500}
            height="674"
            alt="iPhone mockup"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-6 md:flex-row justify-center items-center mb-8">
          <Image
            className="pointer-events-none h-full w-48 "
            src="/images/app-store.png"
            width={500}
            height="674"
            alt="iPhone mockup"
            aria-hidden="true"
          />
          <Image
            className="pointer-events-none  h-full w-48"
            src="/images/google-play.png"
            width={500}
            height="674"
            alt="iPhone mockup"
            aria-hidden="true"
            />
            </div>
          {/* Glow illustration */}
          <svg
            className="-z-1 pointer-events-none absolute left-1/2 mt-20 hidden -translate-x-1/2 transform md:block lg:mt-40 dark:opacity-20"
            aria-hidden="true"
            width={854}
            height="509"
            viewBox="0 0 854 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__a"
              >
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__b"
              >
                <stop stopColor="#9F7AEA" offset="0%" />
                <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".64"
                fill="url(#iphonesill__a)"
                cx="300"
                cy="300"
                r="300"
              />
              <circle
                fillOpacity=".72"
                fill="url(#iphonesill__b)"
                cx="729"
                cy="384"
                r="240"
              />
            </g>
          </svg>

          {/* <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            draggable={true}
            breakpoints={{
              720: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Scrollbar]} // Add this line to enable modules
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col items-center">
                  <div className="relative inline-flex items-center justify-center">
                   
                    <Image
                      className="absolute"
                      src={image.src}
                      width={290}
                      height="624"
                      style={{ maxWidth: "84.33%" }}
                      alt={image.alt}
                    />
                    <Image
                      className="pointer-events-none relative mx-auto h-auto max-w-full"
                      src="/iphone-mockup.png"
                      width={344}
                      height="674"
                      alt="iPhone mockup"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </section>
  );
}
