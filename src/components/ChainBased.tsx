import { AtomIcon, DiamondIcon, EthereumIcon, PolygonIcon } from "./icons";
import Link from "next/link";

export default function DefiManagement() {
  return (
    <div  className="relative mx-auto overflow-hidden mt-12">
       <div className=" sm:px-8 max-w-7xl mx-auto">
        {/* Trusted / CTA area */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400">Trusted by DeFi users in 150+ countries.</p>
          <h1 className="text-white text-2xl sm:text-4xl font-extrabold mt-2">
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

          {/* Hidden placeholder image (40vh) kept hidden for now */}
          <div className="mt-6 " aria-hidden="true">
            <img src='/Card.png' alt='Get Your Card' className='  w-[50vw] mt-5  rounded-xl shadow-lg  mx-auto' />
    {/* </div> */}
          </div>
        </div>

        <h2 className="text-white text-md sm:text-3xl  mb-5 whitespace-nowrap text-center">Backed By </h2>
        <div className="flex items-center gap-8">

          <div className="flex-1 overflow-hidden">
            <div className="flex items-center justify-center  gap-12 sm:gap-24">
              {/* First set of logos */}
              <img src="/logo1.png" alt="Company 1" className="h-8 " />
              <img src="/logo2.png" alt="Company 2" className="h-8 " />
              {/* <img src="/logo3.png" alt="Company 3" className="h-8 " /> */}
              <img src="/logo4.png" alt="Company 4" className="h-10 " />
              {/* <img src="/logo5.png" alt="Company 5" className="h-8 " /> */}
              <img src="/logo6.png" alt="Company 6" className="h-8 " />
              {/* Duplicate set for seamless loop */}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
