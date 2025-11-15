"use client";

import { CheckIcon } from "@heroicons/react/20/solid";

const subscriptionPlans = [
  {
    name: "Explorer",
    priceUSD: 0,
    duration: "15 Days",
    durationDays: 15,
    renewal: "No renewal",
    description: "Get a feel for our platform with a free trial.",
    features: [
      "Access to all Starter features",
      "Limited AI chat queries",
      "Basic portfolio tracking",
      "Community support",
    ],
    cta: "Start Free Trial",
    isPopular: false,
  },
  {
    name: "Navigator",
    priceUSD: 25,
    duration: "1 Month",
    durationDays: 30,
    renewal: "Renews every month",
    description: "Perfect for getting started with advanced tools.",
    features: [
      "Unlimited AI chat queries",
      "Real-time balance tracking",
      "Swap and bridge quotes",
      "Transaction history",
    ],
    cta: "Subscribe Now",
    isPopular: false,
  },
  {
    name: "Strategist",
    priceUSD: 60,
    duration: "3 Months",
    durationDays: 90,
    renewal: "Renews every 3 months",
    description: "For active users who need more power and insight.",
    features: [
      "All Starter features",
      "Advanced liquidity pool analysis",
      "Staking position tracking",
      "Priority support",
    ],
    cta: "Subscribe Now",
    isPopular: true,
  },
  {
    name: "Sovereign",
    priceUSD: 90,
    duration: "6 Months",
    durationDays: 180,
    description: "The complete solution for power users and teams.",
    renewal: "Renews every 6 months",
    features: ["All Pro features", "Customizable alerts", "API access (coming soon)", "Dedicated account manager"],
    cta: "Subscribe Now",
    isPopular: false,
  },
];

export default function PricingPlans() {
  return (
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
          {subscriptionPlans.map((plan, index) => (
            <div
              key={plan.name}
              data-featured={plan.isPopular ? "true" : undefined}
              className={`group/tier flex flex-col justify-between rounded-3xl p-8 ring-1 ring-gray-700 transition-all duration-300 hover:shadow-[0_-10px_25px_-5px_rgba(196,80,213,0.3),0_10px_25px_-5px_rgba(196,80,213,0.3)] ${
                plan.isPopular ? "bg-[#C450D5]" : plan.priceUSD === 0 ? "bg-black/30" : "bg-white/10"
              } text-white`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id={`plan-${index}`} className="text-lg/8 font-semibold text-white">
                    {plan.name}
                  </h3>
                  <div className="">
                    {plan.isPopular && (
                      <p className="-translate-y-12 rounded-full bg-[#4031B3] px-2.5 py-1 text-xs/5 font-semibold text-white">
                        MOST POPULAR
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-white">${plan.priceUSD}</span>
                  <span className="text-sm/6 font-semibold text-white">/{plan.duration}</span>
                </p>
                <p className="mt-4 text-xs/6 text-white">{plan.description}</p>

                <p className="mt-6 text-sm/6 font-semibold text-white">Features</p>
                <ul role="list" className="mt-2 space-y-2 text-xs/6 text-white">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-2">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none rounded-full bg-white/10 p-0.5 text-green-400"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="items-end">
                <a
                  href="https://app.defimatrix.io/subscribe"
                  target="_blank"
                  aria-describedby={`plan-${index}`}
                  className={`mt-8 block w-full self-end rounded-full px-6 py-3 text-center text-sm/6 font-semibold ${
                    plan.priceUSD === 0
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white text-gray-900"
                  } hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
