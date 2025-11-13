import { AtomIcon, DiamondIcon, EthereumIcon, PolygonIcon } from "./icons";

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
          <div className="mt-4">
            <a href="/defimatrix-card" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-md shadow-md">
              Get your card Now
            </a>
          </div>

          {/* Hidden placeholder image (40vh) kept hidden for now */}
          <div className="mt-6 hidden" aria-hidden="true">
            <img src="/logo3.png" alt="" className="w-full h-[40vh] object-cover rounded-md" />
          </div>
        </div>

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
    </div>
  );
}
