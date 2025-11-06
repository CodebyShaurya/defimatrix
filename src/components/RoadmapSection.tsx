import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const steps = [
  {
    name: "Q2 2023",
    step: "01",
    description: "Foundation, Development, and Fundraising",
    status: "phaseOne",
    texts: [
      "Platform Conceptualisation: We will solidify DeFiMatrix's strategic vision, emphasising our multi-chain and multi-token approach to redefine decentralised finance.",
      "Smart Contract Development: The development of DFMX smart contracts will commence, with a focus on ensuring security, efficiency, and scalability.",
      "Liquidity Bootstrapping Pool (LBP) Launch: We plan to initiate fundraising with a public round using an LBP model, guaranteeing fair token distribution and accurate price discovery.",
      "Security Audits: All developed smart contracts will undergo comprehensive security audits to provide robust protection for our users.",
    ],
  },
  {
    name: "Q1 2024",
    step: "02",
    description: "Testing, Community Engagement, and Alpha Release",
    status: "phaseTwo",
    texts: [
      "Alpha Platform Release: DeFiMatrix will launch its alpha version for closed testing, honing in on user experience and platform stability.",
      "Build Community Presence: Our goal is to cultivate a strong, engaged community across various platforms, setting the stage for widespread adoption.",
      "Iterate Based on Feedback: User feedback from the alpha testing phase will be invaluable in refining our platform's features and interface.",
    ],
  },
  {
    name: "Q2 2024",
    step: "03",
    description: "Platform Launch and Expansion",
    status: "phaseThree",
    texts: [
      "Official Platform Launch: The full version of DeFiMatrix will be released, providing access to a comprehensive range of saving and investment strategies across multiple cryptocurrencies and blockchains.",
      "Strategic Partnerships: We aim to form partnerships with leading entities in the DeFi space to broaden our offerings and enhance user value.",
      "Marketing Campaigns: Extensive marketing efforts will be undertaken to boost platform awareness and grow our user base.",
    ],
  },
  {
    name: "Q3 2024",
    step: "04",
    description: "Growth Strategies and Feature Enhancements",
    status: "phaseFour",
    texts: [
      "Token Support Expansion: DeFiMatrix will continuously integrate support for new cryptocurrencies, responding to market trends and community input.",
      "Launch Advanced Features: We plan to introduce more sophisticated platform functionalities, including automated saving strategies and goal-based saving plans.",
      "Global Market Expansion: Efforts will be made to extend our service availability into new regions, adhering to local regulations and market needs.",
    ],
  },
  {
    name: "Q4 2024",
    step: "05",
    description: "Governance and Sustainability Initiatives",
    status: "phaseFive",
    texts: [
      "Implement Governance Model: A decentralized governance framework will be introduced, allowing DFMX token holders to play a crucial role in decision-making processes.",
      "Promote Sustainable Practices: Initiatives aimed at enhancing sustainability within the blockchain space will be launched, aligning with broader environmental objectives.",
      "Educational Outreach: We will begin community programs focused on increasing financial literacy and highlighting the advantages of decentralized finance.",
    ],
  },
  {
    name: "Q1 2025 and Beyond",
    step: "06",
    description: "Establishing Industry Leadership",
    status: "phaseSix",
    texts: [
      "DeFi Ecosystem Integration: DeFiMatrix will seek further integration with other DeFi protocols, creating seamless investment opportunities for our users.",
      "Research and Development: Ongoing R&D will ensure that DeFiMatrix continues to lead in innovation within the decentralized savings and investment arena.",
      "Legacy and Leadership: Our goal is to establish DeFiMatrix as a benchmark in the DeFi space, renowned for its user-centric design, innovative solutions, and community-driven approach.",
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RoadmapSection() {
  return (
    <>
      <div
        id="roadmap"
        className="container relative mx-auto border-x border-white/10 px-4 py-32 text-center lg:px-8 2xl:max-w-screen-2xl"
      >
        <h2 className="mx-auto max-w-4xl text-left text-3xl font-medium tracking-tight text-white sm:leading-tight md:text-center md:text-5xl lg:text-6xl">
          <span className="relative whitespace-nowrap">
            <svg
              className="absolute -bottom-2 left-0 w-full pt-2"
              viewBox="0 0 340 14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeWidth={3}
                d="M.5 8.281c62.654-4.527 222.769-10.866 362 0"
              />
              <defs>
                <radialGradient
                  id="a"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientTransform="matrix(0 3 -181 0 181.5 5.281)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.099} stopColor="#FFC876" />
                  <stop offset={0.526} stopColor="#ACFF8E" />
                  <stop offset={0.74} stopColor="#9453FF" />
                  <stop offset={0.913} stopColor="#FF89C2" />
                </radialGradient>
              </defs>
            </svg>
            <span className="relative">Roadmap</span>
          </span>
        </h2>
        <p className="mx-auto max-w-4xl pt-8 text-left text-3xl font-medium tracking-tight text-white sm:leading-tight md:text-center md:text-5xl">
          Charting the Future of DeFiMatrix
        </p>
        <p className="mx-auto mt-6 max-w-4xl text-left text-lg tracking-tight text-gray-300 md:text-center">
          Our roadmap reflects a steadfast commitment to innovation and
          empowering our users. From the introduction of new functionalities to
          the expansion of our AI-enhanced solver ecosystem, DeFiMatrix is
          poised to remain at the cutting edge of DeFi technology. Join us as we
          continue to explore new horizons and push the boundaries of
          what&apos;s possible in decentralized finance.
        </p>

        <div className="mx-auto max-w-6xl pt-20 lg:px-8 2xl:max-w-7xl">
          <nav aria-label="Progress">
            <ol role="list" className="">
              {steps.map((step, stepIdx) => (
                <li
                  key={step.name}
                  className={classNames(
                    stepIdx !== steps.length - 1 ? "pb-20" : "",
                    "relative",
                  )}
                >
                  <div className="absolute left-0 right-0 -z-10 mx-auto flex w-full items-center justify-center">
                    <img
                      src="/images/gradient-bg.svg"
                      className="absolute animate-pulse opacity-20 blur-3xl"
                      alt=""
                    />
                  </div>
                  <div
                    className="group relative flex flex-col items-start space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0"
                    aria-current="step"
                  >
                    <div className="z-20 flex w-full max-w-64 items-center">
                      <div className="relative p-2 z-10">
                      <p className="text-white/80 text-shadow uppercase text-center font-semibold text-xs">
                        Phase
                      </p>
                      <p className={`mt-5 text-5xl text-center font-bold`}>{step.step}</p>
                      </div>
                   
                      <span className="text-base text-left ml-4 mt-8 font-medium text-white/80">
                        {step.name}
                      </span>
                      </div>

                    <div className="ml-4 flex max-w-7xl flex-col space-y-4 rounded-2xl p-4 text-left md:p-6 lg:border lg:border-white/10 xl:p-10">
                      <span className="ml-4 pb-2 text-left text-2xl font-bold text-white md:text-3xl">
                        {step.description}
                      </span>
                      {step.texts.map((text, index) => (
                        <div key={index} className="flex space-x-2">
                          <ArrowLongRightIcon className="h-6 w-6 text-white/80" />
                          <p className="text-sm text-white sm:text-base">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="animate-height absolute text-shadow top-24 left-[17px] md:left-[40px] max-h-[30rem] md:max-h-72 w-1 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900"
                      aria-hidden="true"
                    />
                  ) : (
                    <div
                      className="animate-height-wo-padding text-shadow absolute left-[17px] md:left-[40px] max-h-[28rem] top-24 md:max-h-60 w-1 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-8 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500 via-red-600 to-orange-400 p-0.5">
            <p className="rounded-2xl bg-[#15131D] p-4  text-left md:p-8 md:text-center md:text-lg lg:p-10">
              This roadmap outlines our ambitious journey to redefine and lead
              in the decentralized finance space, making DeFi more accessible,
              secure, and beneficial for all. Through continuous innovation,
              strategic growth, and community engagement, DeFiMatrix is poised
              to become a pivotal platform in the evolution of DeFi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
