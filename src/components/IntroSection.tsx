
import { WavyBackground } from "./ui/wavy-background";

const features = [
  {
    name: "Seasoned Team",
    description:
      "At DeFiMatrix, our founding team has a proven track record of scaling platforms into multimillion-dollar businesses in the past.",
    href: "#",
    icon: "/images/team.svg",
  },
  {
    name: "KYC Compliance and Partnership with Assure DeFi",
    description:
      "We prioritize Know Your Customer (KYC) processes and have partnered with Assure DeFi to integrate project KYC information seamlessly into the DeFiMatrix platform.",
    href: "#",
    icon: "/images/kyc.svg",
  },
  {
    name: "Pioneering in AI",
    description:
      "DeFiMatrix is spearheading the development of the first Intent-Driven DeFi Platform for Multi-Chain Asset Empowerment. With no significant competitors in this space, we enjoy a distinct first-mover advantage.",
    href: "#",
    icon: "/images/ai.svg",
  },
  {
    name: "Strategic Partnerships",
    description:
      "We've forged alliances with industry leaders to expedite the launch of DeFiMatrix, ensuring rapid market penetration and robust growth.",
    href: "#",
    icon: "/images/partnership.svg",
  },
];

export default function IntroSection() {
  return (
    <div className="py-24 container relative mx-auto border-x border-white/10 2xl:max-w-screen-2xl">
      <WavyBackground className="mx-auto text-center">
        <dl className="mt-10 grid grid-cols-1 items-center justify-center gap-x-6 gap-y-16 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col items-start justify-start rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm"
            >
              <dt className="text-lg text-left font-semibold leading-7 text-white">
                <div className="mb-4">
                  <img
                    src={feature.icon}
                    className="h-12 w-12 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-left text-base leading-7 text-white/70">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </WavyBackground>
    </div>
  );
}
