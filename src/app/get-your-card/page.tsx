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
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdopQCz9-g_TTRwqCI0TLh9eaLfSOvHt45ldUQAEMuxIJvPpA/viewform?pli=1"
                    className="mt-8 block  rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-center text-sm font-thin text-white transition-all duration-200 hover:from-purple-600 hover:to-pink-600    w-fit mx-auto"
                  >
                    Get Your Cards Now
                  </a>
                   <div className="mt-10 relative" aria-hidden="true" >
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
                          className='absolute bottom-0 left-[-12%] h-[8vh] sm:h-[22vh] object-contain rounded-lg shadow-md animate-slide-from-left-delayed' 
                        />
                        
                        {/* Mid-right floating image */}
                        <img 
                          src='/imagerc.png' 
                          alt='Feature 3' 
                          className='absolute top-1/2 right-[-10%] transform -translate-y-1/2 h-[25vh] sm:h-[80vh] object-contain rounded-lg shadow-md animate-slide-from-right' 
                        />
                      </div>
                    </div>
                
                  <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
              
                  </div>
                </div>

              <div className="mx-auto max-w-4xl text-center">
                  <p className="text-balance text-5xl font-thin tracking-tight text-white sm:text-6xl">
                    The Most Rewarding Crypto Card
                  </p>
                  <p className="text-sm text-gray-400 mt-2">Experience a new standard in crypto spending. Our card rewards you more with every purchase, combining seamless usability with industry-leading benefits—making everyday transactions smarter, faster, and more valuable.</p>
                  
                </div>

                <img src='/Card.png' alt='Get Your Card' className=' h-full sm:h-[80vh] mx-auto mt-10  rounded-xl shadow-lg' />
                
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

        <WhyChooseSpedax />

        <h2 className="text-white text-md sm:text-2xl  mb-5  text-center mt-16">The world's most innovative and trusted companies work with DeFiMatrix. </h2>
        <div className="flex items-center gap-8">

          <div className=" flex mx-auto overflow-hidden mt-5">
            <div className="flex flex-col md:flex-row items-center justify-center  gap-12 md:gap-16">
              {/* First set of logos */}
              <a href="https://emoney.io/" target="_blank" rel="noopener noreferrer">
                <img src="/logo1.png" alt="Company 1" className="h-12 hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://chainbased.io/" target="_blank" rel="noopener noreferrer">
                <img src="partner-logos/chainbased.png" alt="Company 1" className="h-8 hover:opacity-80 transition-opacity" />
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
        <AffiliateFAQ />
      </main>
      <Footer />
    </>
  );
}
