import Features from "@/components/Features";
import WhyChooseSpedax from "@/components/WhyChooseSpedax";
import Header from "@/components/header-new";
import Footer from "@/components/Footer";
import { AffiliateFAQ } from "@/components/AffiliateFAQ";
import EnterprisePlan from "@/components/enterprise-plan";

export default function PricingPage() {
  return (
    <>
      <main className="bg-[url('/why-background.png')] bg-cover bg-top pt-2">
        <div className="w-full">
          <Header  />
        </div>
            <div className="group/tiers py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-balance text-3xl font-thin tracking-tight text-white sm:text-6xl">
            Spend Crypto Like <span className="font-normal text-[#C450D5]">Cash</span>
          </p>
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-center text-lg font-medium text-white/80">
          Use your crypto for everyday expenses seamlessly
        </p>
         <p className="mx-auto mt-2 max-w-2xl text-pretty text-center text-lg font-medium text-white">
          Anytime. Anywhere.
        </p>
         <a
                href="mailto:enterpriseplaninquiry@defimatrix.io"
                className="mt-8 block  rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-center text-sm font-thin text-white transition-all duration-200 hover:from-purple-600 hover:to-pink-600    w-fit mx-auto"
              >
                Get Your Cards Now
              </a>
        <img src='/Card-your.png' alt='Get Your Card' className='  w-full  rounded-xl shadow-lg' />
      
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
     
        </div>
      </div>

      <div className="mx-auto max-w-4xl text-center">
          <p className="text-balance text-5xl font-thin tracking-tight text-white sm:text-6xl">
            The Most Rewarding Crypto Card
          </p>
        </div>
        <img src='/Card.png' alt='Get Your Card' className='  w-[50vw] mt-5  rounded-xl shadow-lg  mx-auto' />
    </div>
      <div className="hidden md:grid grid-cols-2 gap-8 max-w-7xl mx-auto px-6 lg:px-8 mb-16">
       
                <div
                  className="group relative p-3 rounded-2xl bg-white/5 backdrop-blur-xl text-center border border-[#6a69e0]/20 hover:scale-105 transition-all duration-300 hover:bg-white/10"
                >
                  {/* Image on the left for col-2 layout */}
                  

                  <div>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                      Collateral Injection – Maximize your assets while you transact.
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6a69e0]/20 via-[#3A397A]/20 to-[#6a69e0]/20 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </div>


                 <div  className="group relative p-3 text-center rounded-2xl bg-white/5 backdrop-blur-xl border border-[#6a69e0]/20 hover:scale-105 transition-all duration-300 hover:bg-white/10"
                >
                  {/* Image on the left for col-2 layout */}
                  

                  <div>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                      Earn up to 2% in crypto every time you spend.
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6a69e0]/20 via-[#3A397A]/20 to-[#6a69e0]/20 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
            
          </div>


    <Features />
        {/* <EnterprisePlan /> */}

        <WhyChooseSpedax />

        <h2 className="text-white text-md sm:text-3xl  mb-5 whitespace-nowrap text-center">Backed By </h2>
        <div className="flex items-center gap-8">

          <div className=" flex mx-auto overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-center  gap-12 sm:gap-24">
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
        <AffiliateFAQ />
      </main>
      <Footer />
    </>
  );
}
