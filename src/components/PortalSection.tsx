import Image from "next/image";

const portals = [
  { src: "/images/portals/ApeSwap.png", name: "ApeSwap", url: "https://apeswap.finance" },
  { src: "/images/portals/BabyDogeSwap.png", name: "BabyDogeSwap", url: "" },
  { src: "/images/portals/Balancer.png", name: "Balancer", url: "https://balancer.fi" },
  { src: "/images/portals/Baseswap.png", name: "Baseswap", url: "" },
  { src: "/images/portals/Beefy.png", name: "Beefy", url: "https://app.beefy.finance" },
  { src: "/images/portals/Benqi.png", name: "Benqi", url: "https://app.benqi.fi" },
  { src: "/images/portals/Biswap.png", name: "Biswap", url: "https://biswap.org" },
  { src: "/images/portals/COMPound.png", name: "COMPound", url: "https://compound.finance" },
  { src: "/images/portals/Curve.png", name: "Curve", url: "https://curve.fi" },
  { src: "/images/portals/FRAX Swap.png", name: "FRAX Swap", url: "https://frax.finance" },
  { src: "/images/portals/GEIST-token.png", name: "GEIST-token", url: "https://geist.finance" },
  { src: "/images/portals/GEIST.png", name: "GEIST", url: "https://geist.finance" },
  { src: "/images/portals/IronBank.png", name: "IronBank", url: "https://app.iron.finance" },
  { src: "/images/portals/MMFinance.png", name: "MMFinance", url: "https://mm.finance" },
  { src: "/images/portals/Mdex.png", name: "Mdex", url: "https://mdex.com" },
  { src: "/images/portals/Nimiswap.png", name: "Nimiswap", url: "" },
  { src: "/images/portals/PancakeSwap.png", name: "PancakeSwap", url: "https://pancakeswap.finance" },
  { src: "/images/portals/PoolTogether.png", name: "PoolTogether", url: "" },
  { src: "/images/portals/Quickswap.png", name: "Quickswap", url: "https://quickswap.exchange" },
  { src: "/images/portals/Radiant.png", name: "Radiant", url: "https://radiant.capital" },
  { src: "/images/portals/ShibaSwap.png", name: "ShibaSwap", url: "https://shibaswap.com" },
  { src: "/images/portals/SpookySwap.png", name: "SpookySwap", url: "https://spookyswap.finance" },
  { src: "/images/portals/StakeDAO.png", name: "StakeDAO", url: "https://stakedao.org" },
  { src: "/images/portals/Stargate.png", name: "Stargate", url: "https://stargate.finance" },
  { src: "/images/portals/SushiSwap.png", name: "SushiSwap", url: "https://sushi.com" },
  { src: "/images/portals/The Granary.png", name: "The Granary", url: "https://thegranary.finance" },
  { src: "/images/portals/TraderJoe.png", name: "TraderJoe", url: "https://traderjoexyz.com" },
  { src: "/images/portals/Uniswap.png", name: "Uniswap", url: "https://uniswap.org" },
  { src: "/images/portals/Uwulend.png", name: "Uwulend", url: "https://uwu.finance" },
  { src: "/images/portals/Verse.png", name: "Verse", url: "https://verse.xyz" },
  { src: "/images/portals/Vesper.png", name: "Vesper", url: "https://vesper.finance" },
  { src: "/images/portals/aave.png", name: "Aave", url: "https://aave.com" },
  {
    src: "/images/portals/arbitrum.png",
    name: "Arbitrum",
    url: "https://portal.arbitrum.io/projects/defi?project=aave",
  },
  { src: "/images/portals/beets-X.png", name: "Beets-X", url: "" },
  { src: "/images/portals/coingecko.webp", name: "CoinGecko", url: "" },
  { src: "/images/portals/convex.png", name: "Convex", url: "https://convexfinance.com" },
  { src: "/images/portals/flux-finance.png", name: "Flux Finance", url: "https://flux.finance" },
  { src: "/images/portals/rocketswap-base.png", name: "RocketSwap", url: "https://rocketswap.finance" },
  { src: "/images/portals/swapbased.png", name: "SwapBased", url: "https://swapbased.io" },
  { src: "/images/portals/swirllend.png", name: "SwirlLend", url: "https://swirllend.io" },
  { src: "/images/portals/synth.png", name: "Synth", url: "" },
  { src: "/images/portals/uniswap.webp", name: "Uniswap", url: "https://uniswap.org" },
  { src: "/images/portals/venus.png", name: "Venus", url: "https://venus.io" },
  { src: "/images/portals/yearn-crv.png", name: "Yearn CRV", url: "https://yearn.finance" },
  { src: "/images/portals/yearn.png", name: "Yearn", url: "https://yearn.finance" },
];

export default function PortalSection() {
  return (
    <div className="bg-black">
      <div id="portals" className="container relative mx-auto px-4 pt-12 md:pt-36 text-center lg:px-8 2xl:max-w-screen-2xl">
      
        <div className="mx-auto mb-4 w-auto">
          <Image
            src="/images/cta-icon.svg"
            alt="cta-icon"
            width={120}
            height={120}
            className="animate-pulse md:mx-auto"
          />
        </div>
        <h2 className="mx-auto max-w-4xl text-left text-3xl font-medium tracking-tight text-white sm:leading-loose md:text-center md:text-5xl lg:text-6xl">
          Portals are open across{" "}
           <span className="relative whitespace-nowrap">
            <svg
              className="absolute -bottom-2 left-0 w-full pt-2"
              viewBox="0 0 364 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8C63.6538 3.47226 223.769 -2.86658 363 8"
                stroke="url(#paint0_radial_2482_631)"
                strokeWidth="3"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_2482_631"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(158.651 6.91635) scale(777.036 11.0605)"
                >
                  <stop stopColor="#C450D5" />
                  <stop offset="1" stopColor="#D43E76" />
                </radialGradient>
              </defs>
            </svg>

            <span className="relative"> Defi</span>
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-left text-lg tracking-tight text-gray-300 md:text-center">
          Become a liquidity provider, earn yield in vaults, lend your assets, swap any token, and more with
          DeFiMatrix-supported protocols
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-4 md:grid-cols-3 xl:grid-cols-5">
          {portals.map((portal, index) => (
            <a
              key={index}
              href={portal.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-2xl text-white ${portal.url ? "cursor-pointer bg-white/15 transition-colors hover:bg-white/25" : "cursor-default bg-white/15"} p-2 sm:p-4`}
            >
              <Image src={portal.src} alt={`${portal.name}-logo`} width={120} height={120} className="sm:h-10 sm:w-10 h-5 w-5" />
              <p className="text-xs">{portal.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
