import { AtomIcon, DiamondIcon, EthereumIcon, PolygonIcon } from "./icons";
import Link from "next/link";

export default function DefiManagement() {
  return (
    <div  className="relative mx-auto overflow-hidden pt-12 sm:pt-24" >
       <div className=" sm:px-8 max-w-7xl mx-auto">
        {/* Trusted / CTA area */}
        <div className="text-center mb-6">
          <p className="mx-auto max-w-3xl text-left text-3xl font-medium tracking-tight text-white sm:leading-tight text-center md:text-5xl lg:text-6xl">Trusted by DeFi users in 150+ <span className="relative whitespace-nowrap">
            <svg
              className="absolute -bottom-2 left-0 w-full pt-2"
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

            <span className="relative"> countries.</span>
          </span> </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-left text-lg tracking-tight text-gray-300 text-center">
            DeFiMatrix offers the fastest and most seamless way to use your crypto like cash — anytime, anywhere.
          </h1>
          <div className="flex items-end justify-center gap-x-6 mt-4">
            <Link href="/get-your-card"  className="relative p-[3px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-400 to-pink-400" />
              <div className="group relative rounded-2xl bg-black px-8 py-3.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
                Get your card Now
              </div>
            </Link>
          </div>

          {/* Card image with floating animations */}
          <div className="mt-20 relative" aria-hidden="true" >
            <div className="relative w-[50vw] mx-auto mt-5 py-5">
              {/* Center main card image */}
              <img 
                src='/unnamed_Iphone.png' 
                alt='Get Your Card' 
                className='h-[30vh] sm:h-[80vh] rounded-xl shadow-lg animate-float mx-auto' 
              />
              
              {/* Top-left floating image */}
              <img 
                src='/imagelt.png' 
                alt='Feature 1' 
                className='absolute top-0 left-[-5%] sm:left-[-10%] h-[10vh] sm:h-[35vh] object-contain rounded-lg shadow-md animate-slide-from-left' 
              />
              
              {/* Bottom-left floating image */}
              <img 
                src='/imagelb.png' 
                alt='Feature 2' 
                className='absolute bottom-0 left-[-12%] h-[10vh] sm:h-[25vh] object-contain rounded-lg shadow-md animate-slide-from-left-delayed' 
              />
              
              {/* Mid-right floating image */}
              <img 
                src='/imagerc.png' 
                alt='Feature 3' 
                className='absolute top-1/2 right-[-10%] transform -translate-y-1/2 h-[25vh] sm:h-[80vh] object-contain rounded-lg shadow-md animate-slide-from-right' 
              />
            </div>
          </div>
        </div>

        <div id="backed-by" className="mt-16"></div>
        <h2 className="text-white text-md sm:text-2xl  mb-5 text-center mt-16">The world's most innovative and trusted companies work with DeFiMatrix. </h2>
        <div className="flex items-center gap-8">

          <div className=" flex mx-auto overflow-hidden mt-5">
            <div className="flex flex-col sm:flex-row items-center justify-center  gap-12 sm:gap-24">
              {/* First set of logos */}
              <a href="https://emoney.io/" target="_blank" rel="noopener noreferrer">
                <img src="/logo1.png" alt="Company 1" className="h-12 hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://sumsub.com/" target="_blank" rel="noopener noreferrer">
                <img src="/logo2.png" alt="Company 2" className="h-12 hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://www.mastercard.co.in/en-in.html" target="_blank" rel="noopener noreferrer">
                <img src="/logo4.png" alt="Company 4" className="h-16 hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://cuttlecard.com/cuttle-app/landingm" target="_blank" rel="noopener noreferrer">
                <img src="/logo6.png" alt="Company 6" className="h-12 hover:opacity-80 transition-opacity" />
              </a>
              {/* Duplicate set for seamless loop */}
            
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px) translateY(-50%);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(-50%);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-from-left {
          animation: slideFromLeft 1s ease-out forwards;
        }

        .animate-slide-from-left-delayed {
          animation: slideFromLeft 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-slide-from-right {
          animation: slideFromRight 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
