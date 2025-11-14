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
            <div className="group/tiers py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Simple, transparent pricing
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-white/80">
          Choose the plan that&apos;s right for you and start optimizing DeFi like never before with AI-powered intent
          execution and multi-chain management.
        </p>
        {/* <div className="mb-10 mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <div className="grid grid-cols-2 gap-x-1 rounded-full bg-gray-900 p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-700">
              <label
                className={`group relative rounded-full px-6 py-2 ${frequency === "monthly" ? "bg-pink-500" : ""}`}
              >
                <input
                  value="monthly"
                  checked={frequency === "monthly"}
                  onChange={() => setFrequency("monthly")}
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full"
                />
                <span className={`${frequency === "monthly" ? "text-white" : "text-gray-300"}`}>MONTHLY</span>
              </label>
              <label
                className={`group relative rounded-full px-6 py-2 ${frequency === "annually" ? "bg-pink-500" : ""}`}
              >
                <input
                  value="annually"
                  checked={frequency === "annually"}
                  onChange={() => setFrequency("annually")}
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full"
                />
                <span className={`${frequency === "annually" ? "text-white" : "text-gray-300"}`}>YEARLY</span>
              </label>
            </div>
          </fieldset>
        </div> */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
     
        </div>
      </div>
    </div>
        <EnterprisePlan />
        <WhyChooseSpedax />
        <AffiliateFAQ />
      </main>
      <Footer />
    </>
  );
}
