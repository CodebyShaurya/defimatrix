import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Unlimited Transactions & Credits",
  "On-Prem / VPC Deployment Options",
  "Multi-User & Role-Based Access",
  "Dedicated Architect & Onboarding",
  "24/7 Premium Support SLA",
  "Custom Agent Integration & Training Contact Sales",
];

export default function EnterprisePlan() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_-10px_25px_-5px_rgba(196,80,213,0.3),0_10px_25px_-5px_rgba(196,80,213,0.3)]">
          <div className="flex flex-col lg:flex-row">
            <div className="p-8 sm:p-10 lg:flex-1">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-white">Enterprise Plan</h3>
                <p className="mt-2 text-xl font-semibold text-white">$ Custom Pricing</p>
              </div>

              <div className="mt-10">
                <h4 className="mb-4 text-lg font-semibold text-white">Includes:</h4>
                <ul className="space-y-3">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3">
                      <CheckIcon className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-white/10 p-8 sm:p-10 lg:w-96 lg:border-l lg:border-t-0">
              <p className="text-sm text-gray-300">
                For trading desks, DeFi-native hedge funds, and enterprises requiring scale and customization.
              </p>

              <a
                href="mailto:enterpriseplaninquiry@defimatrix.io"
                className="mt-8 block w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:from-purple-600 hover:to-pink-600"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_-10px_25px_-5px_rgba(196,80,213,0.3),0_10px_25px_-5px_rgba(196,80,213,0.3)]">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Have Questions?</h3>
            <p className="mt-4 text-gray-300">
              Contact our Enterprise Support team at{" "}
              <a
                href="mailto:EnterprisePlanInquiry@defimatrix.io"
                className="text-purple-400 transition-colors hover:text-purple-300"
              >
                EnterprisePlanInquiry@defimatrix.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
