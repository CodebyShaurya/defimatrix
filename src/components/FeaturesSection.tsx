import Link from "next/link";

export default function FeaturesSection() {
  return (
    <div className="bg-black">
      <div id="features" className="container relative mx-auto overflow-hidden 2xl:max-w-screen-2xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 lg:flex-row 2xl:max-w-7xl">
          <div className="flex !w-full flex-col gap-6">
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-[#15131D] p-4 md:flex-row md:p-10">
              <img src="/images/100x.svg" alt="" />
              <div className="flex flex-col gap-2">
                <p className="text-3xl text-[#CAC6DD]">AI-Powered Autopilot Portfolios</p>
                <p className="text-lg text-[#ADA8C3]">
                  One click deploys your capital - our agent automatically allocates, optimizes, and compounds yields
                  across 100+ vetted protocols 24/7.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-[#15131D] p-4 md:flex-row md:p-10">
              <img src="/images/forgot.svg" alt="" className="h-60" />
              <div className="flex flex-col gap-2">
                <p className="text-4xl text-[#CAC6DD]">Banking-Simple DeFi</p>
                <p className="text-lg text-[#ADA8C3]">
                  Manage your crypto like checking your balance - our AI handles the complex yield strategies behind one
                  intuitive interface.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#15131D] p-4 md:w-2/3 md:p-10">
            <img src="/images/enhance.svg" className="h-80" alt="" />
            <div className="mt-6 flex flex-col gap-2">
              <p className="text-2xl text-[#CAC6DD]">AI-Powered Transaction Supercharger</p>
              <p className="text-lg text-[#ADA8C3]">
                Our autonomous agent compresses hours of complex DeFi actions into one tap, executing swaps, bridges,
                and yield moves at machine speed.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-8 text-left">
          <div className="rounded-2xl border border-white/10 py-8 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 2xl:max-w-7xl">
            <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-white">AI-Streamlined DeFi Execution</h2>
                <p className="mt-4 text-lg text-white/80">
                  Describe your goal in plain English - our autonomous agent handles all complex transactions in one
                  click at blockchain speed.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="https://app.defimatrix.io/" target="_blank" className="relative p-[3px]">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-purple-400 to-pink-400" />
                  <div className="group relative rounded bg-black px-8 py-3.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
                    Start Earning in 15s
                  </div>
                </Link>
              </div>
            </div>
            <img className="mt-20 w-full  py-8" src="/images/accelerate.svg" alt="accelerate" />
          </div>
        </div>
      </div>
    </div>
  );
}
