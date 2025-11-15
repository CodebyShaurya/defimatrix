import { AtomIcon, DiamondIcon, EthereumIcon, PolygonIcon } from "./icons";
import Link from "next/link";

export default function DefiManagement() {
  return (
    <div  className="relative mx-auto overflow-hidden mt-12 sm:mt-24" style={{ backgroundImage: 'url(/Group1261155851.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
       <div className=" sm:px-8 max-w-7xl mx-auto">
        {/* Trusted / CTA area */}
        <div className="text-center mb-6">
          <p className="mx-auto max-w-4xl text-left text-3xl font-medium tracking-tight text-white sm:leading-tight md:text-center md:text-5xl lg:text-6xl">Trusted by DeFi users in 150+ countries.</p>
          <h1 className="mx-auto mt-6 max-w-3xl text-left text-lg tracking-tight text-gray-300 md:text-center">
            DeFiMatrix offers the fastest and most seamless way to use your crypto like cash — anytime, anywhere.
          </h1>
          <div className="flex items-end justify-center gap-x-6 mt-4">
            <Link href="/get-your-card" target="_blank" className="relative p-[3px]">
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
                src='/Card1.png' 
                alt='Get Your Card' 
                className='h-[80vh] rounded-xl shadow-lg animate-float mx-auto' 
              />
              
              {/* Top-left floating image */}
              <img 
                src='/Frame1.png' 
                alt='Feature 1' 
                className='absolute top-0 left-[-10%] h-[30vh] object-contain rounded-lg shadow-md animate-slide-from-left' 
              />
              
              {/* Bottom-left floating image */}
              <img 
                src='/Frame.png' 
                alt='Feature 2' 
                className='absolute bottom-0 left-[-12%] h-[30vh] object-contain rounded-lg shadow-md animate-slide-from-left-delayed' 
              />
              
              {/* Mid-right floating image */}
              <img 
                src='/DefiCard.png' 
                alt='Feature 3' 
                className='absolute top-1/2 right-[-10%] transform -translate-y-1/2 h-[50vh] object-contain rounded-lg shadow-md animate-slide-from-right' 
              />
            </div>
          </div>
        </div>

        <div id="backed-by" className="mt-16"></div>
        <h2 className="text-white text-md sm:text-4xl  mb-5 whitespace-nowrap text-center mt-16">Backed By </h2>
        <div className="flex items-center gap-8">

          <div className="flex-1 overflow-hidden">
            <div className="flex items-center justify-center  gap-12 sm:gap-24">
              {/* First set of logos */}
              <img src="/logo1.png" alt="Company 1" className="h-12 " />
              <img src="/logo2.png" alt="Company 2" className="h-12" />
              {/* <img src="/logo3.png" alt="Company 3" className="h-8 " /> */}
              <img src="/logo4.png" alt="Company 4" className="h-16 " />
              {/* <img src="/logo5.png" alt="Company 5" className="h-8 " /> */}
              <img src="/logo6.png" alt="Company 6" className="h-12 " />
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
