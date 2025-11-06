import Image from "next/image";

export default function NftSection() {
  return (
    <div className="bg-black">
      <div id="use-cases" className="container relative mx-auto px-4 py-16 text-center lg:px-8 2xl:max-w-screen-2xl">
        <div className="absolute inset-0 left-0 right-0 -z-10 mx-auto flex w-full items-center justify-center">
          <img src="/images/gradient-bg.svg" className="absolute animate-pulse opacity-20 blur-3xl" alt="" />
        </div>
        <div className="mb-4 w-auto md:mx-auto">
          <Image
            src="/images/cta-icon.svg"
            alt="cta-icon"
            width={120}
            height={120}
            className="animate-pulse md:mx-auto"
          />
        </div>
        <h2 className="mx-auto max-w-4xl text-left text-3xl font-medium tracking-tight text-white sm:leading-tight md:text-center md:text-5xl lg:text-6xl">
          AI-Powered
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

            <span className="relative"> Strategies</span>
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-left text-lg tracking-tight text-gray-300 md:text-center">
          Experience autonomous DeFi optimization where plain-English goals transform into high-yield strategies. Our AI
          agent builds and manages sustainable portfolios while maximizing utility for $DMX holders.
        </p>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-4 px-4 text-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:px-8 2xl:max-w-7xl "
        >
          <li>
            <div className="group relative h-[35rem] max-w-sm overflow-hidden rounded-md ring-purple-500 transition-all duration-200 ease-in-out hover:ring-4">
              <img src="/images/nft/AI_optimization.jpg" className="h-full w-full bg-black object-cover" />

              <div className="absolute inset-0 flex h-full flex-col justify-between">
                <div className="mx-4 mt-4 flex justify-between">
                  <span className="border border-white px-4 py-2 text-xs text-white backdrop-blur-md">
                    AI Optimization
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between bg-purple-800 p-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                <img src="/images/nft/AI_optimization.jpg" className="h-40 w-full rounded-md object-cover" />

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">AI for Yield Optimization</span>

                  <p className="font-light text-slate-50/80">
                    DeFiMatrix employs advanced AI technology to automate and refine yield strategies across various
                    blockchains. This ensures that strategies are dynamically adjusted to market conditions, maximizing
                    returns for its users.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Platforms:</span>

                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://eefi.finance/assets/images/png/smart-vaults-platform-img-1.png" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group relative h-[35rem] max-w-sm overflow-hidden rounded-md ring-purple-500 transition-all duration-200 ease-in-out hover:ring-4">
              <img src="/images/nft/Stablecoin-Yield.jpg" className="h-full w-full bg-black object-cover" />

              <div className="absolute inset-0 flex h-full flex-col justify-between">
                <div className="mx-4 mt-4 flex justify-between">
                  <span className="border border-white px-4 py-2 text-xs text-white backdrop-blur-md">
                    Stablecoin Yields
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between bg-purple-800 p-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                <img
                  src="/images/nft/Stablecoin-Yield.jpg"
                  className="h-40 w-full rounded-md object-cover object-top"
                />

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Stablecoin Yield Strategies</span>

                  <p className="font-light text-slate-50/80">
                    Leveraging time-tested methods, DeFiMatrix promises stable and predictable returns through
                    stablecoin lending and liquidity provision, offering a solid foundation for yield generation within
                    the DeFi ecosystem.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Platforms:</span>

                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://eefi.finance/assets/images/png/stablecoins-platform-img-1.png" />
                    <img src="https://eefi.finance/assets/images/png/stablecoins-platform-img-2.png" />
                    <img src="https://eefi.finance/assets/images/png/stablecoins-platform-img-3.png" />
                    <img src="https://eefi.finance/assets/images/png/Y2KF.png" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group relative h-[35rem] max-w-sm overflow-hidden rounded-md ring-purple-500 transition-all duration-200 ease-in-out hover:ring-4">
              <img
                src="/images/nft/real-world-asset-tokenization.jpg"
                className="h-full w-full bg-black object-cover"
              />

              <div className="absolute inset-0 flex h-full flex-col justify-between">
                <div className="mx-4 mt-4 flex justify-between">
                  <span className="border border-white px-4 py-2 text-xs text-white backdrop-blur-md">
                    Asset Tokenization
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between bg-purple-800 p-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                <img
                  src="/images/nft/real-world-asset-tokenization.jpg"
                  className="h-40 w-full rounded-md object-cover object-top"
                />

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Tokenizing Real Assets</span>

                  <p className="font-light text-slate-50/80">
                    DeFiMatrix is expanding the DeFi investment horizon by tokenizing real-world assets. This innovative
                    move allows for yield generation from tangible assets such as real estate and commodities,
                    broadening the scope of DeFi investments.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Platforms:</span>

                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://eefi.finance/assets/images/png/social-trading-platform-img-1.png" />
                    <img src="https://eefi.finance/assets/images/png/logoMapple.png" />
                    <img className="h-8" src="https://eefi.finance/assets/images/svg/GoldFinch.svg" />
                    <img className="h-8" src="https://eefi.finance/assets/images/png/Trufilogo.png" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group relative h-[35rem] max-w-sm overflow-hidden rounded-md ring-purple-500 transition-all duration-200 ease-in-out hover:ring-4">
              <img src="/images/nft/crypto-bonds.jpg" className="h-full w-full bg-black object-cover" />

              <div className="absolute inset-0 flex h-full flex-col justify-between">
                <div className="mx-4 mt-4 flex justify-between">
                  <span className="border border-white px-4 py-2 text-xs text-white backdrop-blur-md">
                    Bond Strategies
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between bg-purple-800 p-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                <img src="/images/nft/crypto-bonds.jpg" className="h-40 w-full rounded-md object-cover object-top" />

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Bonds for Yield & Bond Strategies</span>

                  <p className="font-light text-slate-50/80">
                    In a groundbreaking move, DeFiMatrix merges traditional financial mechanisms with the dynamic world
                    of DeFi, utilizing bonds to introduce a stable and reliable return channel through unique bonding
                    mechanisms.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Platforms:</span>

                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://eefi.finance/assets/images/png/bonds-platform-img-1.png" />
                    <img src="https://eefi.finance/assets/images/png/bonds-platform-img-2.png" />
                    <img src="https://eefi.finance/assets/images/png/bonds-platform-img-3.png" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group relative h-[35rem] max-w-sm overflow-hidden rounded-md ring-purple-500 transition-all duration-200 ease-in-out hover:ring-4">
              <img src="/images/nft/Options-Trading.jpg" className="h-full w-full bg-black object-cover" />

              <div className="absolute inset-0 flex h-full flex-col justify-between">
                <div className="mx-4 mt-4 flex justify-between">
                  <span className="border border-white px-4 py-2 text-xs text-white backdrop-blur-md">
                    Options Trading
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between bg-purple-800 p-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                <img src="/images/nft/Options-Trading.jpg" className="h-40 w-full rounded-md object-cover object-top" />

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Structured Products via Options</span>

                  <p className="font-light text-slate-50/80">
                    Offering sophisticated financial instruments, DeFiMatrix provides its users with options-based
                    strategies, akin to those found on Ribbon Finance. This approach is designed for optimizing earnings
                    and managing investment risks effectively.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Platforms:</span>

                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://eefi.finance/assets/images/png/options-platform-img-1.png" />
                    <img src="https://eefi.finance/assets/images/png/options-platform-img-2.png" />
                    <img src="https://eefi.finance/assets/images/png/options-platform-img-3.png" />
                    <img src="https://eefi.finance/assets/images/png/options-platform-img-4.png" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group relative h-[35rem] max-w-sm overflow-hidden rounded-md ring-purple-500 transition-all duration-200 ease-in-out hover:ring-4">
              <img src="/images/nft/nft-fi-crypto.jpg" className="h-full w-full bg-black object-cover" />

              <div className="absolute inset-0 flex h-full flex-col justify-between">
                <div className="mx-4 mt-4 flex justify-between">
                  <span className="border border-white px-4 py-2 text-xs text-white backdrop-blur-md">NFT Finance</span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between bg-purple-800 p-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                <img src="/images/nft/nft-fi-crypto.jpg" className="h-40 w-full rounded-md object-cover object-top" />

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">NFT-Fi for Yield & NFT Leverage</span>

                  <p className="font-light text-slate-50/80">
                    DeFiMatrix is pioneering the integration of NFTs with finance (NFT-Fi), enabling yield generation
                    through innovative NFT collateralization. This strategy taps into the intrinsic value of digital
                    assets and art, unlocking new financial potentials.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Platforms:</span>

                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://eefi.finance/assets/images/png/nft-platform-img-1.png" />
                    <img src="https://eefi.finance/assets/images/png/nft-platform-img-2.png" />
                    <img src="https://eefi.finance/assets/images/png/logoJapged.png" />
                    <img src="https://eefi.finance/assets/images/webp/bend-logo-3x.webp" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group relative h-[35rem] max-w-sm overflow-hidden rounded-md ring-purple-500 transition-all duration-200 ease-in-out hover:ring-4">
              <img src="/images/nft/Yield-Exploration.jpg" className="h-full w-full bg-black object-cover" />

              <div className="absolute inset-0 flex h-full flex-col justify-between">
                <div className="mx-4 mt-4 flex justify-between">
                  <span className="border border-white px-4 py-2 text-xs text-white backdrop-blur-md">
                    Yield Exploration
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between bg-purple-800 p-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                <img
                  src="/images/nft/Yield-Exploration.jpg"
                  className="h-40 w-full rounded-md object-cover object-top"
                />

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Diversifying Beyond Popular DeFi Protocols</span>

                  <p className="font-light text-slate-50/80">
                    DeFiMatrix embarks on a quest to uncover stable yield opportunities beyond familiar protocols such
                    as Aave or Compound, with the goal of diversifying portfolios and enhancing financial stability for
                    its users.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Platforms:</span>

                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://eefi.finance/assets/images/png/platform-img-1.png" />
                    <img src="https://eefi.finance/assets/images/png/platform-img-2.png" />
                    <img src="https://eefi.finance/assets/images/png/platform-img-3.png" />
                    <img src="https://eefi.finance/assets/images/png/platform-img-4.png" />
                    <img src="https://eefi.finance/assets/images/png/Gansislogo.png" />
                    <img src="https://eefi.finance/assets/images/png/Syntexis-logo.png" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group relative h-[35rem] max-w-sm overflow-hidden rounded-md ring-purple-500 transition-all duration-200 ease-in-out hover:ring-4">
              <img src="/images/nft/Risk-Hedging.jpg" className="h-full w-full bg-black object-cover" />

              <div className="absolute inset-0 flex h-full flex-col justify-between">
                <div className="mx-4 mt-4 flex justify-between">
                  <span className="border border-white px-4 py-2 text-xs text-white backdrop-blur-md">
                    Risk Hedging
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between bg-purple-800 p-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                <img src="/images/nft/Risk-Hedging.jpg" className="h-40 w-full rounded-md object-cover object-top" />

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Risk Management with Perps</span>

                  <p className="font-light text-slate-50/80">
                    With a strategic use of perpetual contracts and delta-neutral strategies, DeFiMatrix aims to protect
                    user investments from the crypto market&apos;s volatility, ensuring a more secure and stable
                    investment environment.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Platforms:</span>

                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://eefi.finance/assets/images/png/platform-img-1.png" />
                    <img src="https://eefi.finance/assets/images/png/perps-platform-img-2.png" />
                    <img src="https://eefi.finance/assets/images/png/perps-platform-img-3.png" />
                    <img src="https://eefi.finance/assets/images/png/perps-platform-img-4.png" />
                    <img src="https://eefi.finance/assets/images/png/logoStandfee.png" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="group relative h-[35rem] max-w-sm overflow-hidden rounded-md ring-purple-500 transition-all duration-200 ease-in-out hover:ring-4">
              <img src="/images/nft/Collateralization-Liquidity.jpg" className="h-full w-full bg-black object-cover" />

              <div className="absolute inset-0 flex h-full flex-col justify-between">
                <div className="mx-4 mt-4 flex justify-between">
                  <span className="border border-white px-4 py-2 text-xs text-white backdrop-blur-md">
                    Collateralization
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between bg-purple-800 p-4 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                <img
                  src="/images/nft/Collateralization-Liquidity.jpg"
                  className="h-40 w-full rounded-md object-cover object-top"
                />

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Liquidity via $DMX Collateralization</span>

                  <p className="font-light text-slate-50/80">
                    By enabling $DMX token collateralization for lending and borrowing, DeFiMatrix enhances the
                    token&apos;s utility, providing its holders with unprecedented liquidity and flexibility.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-white">Platforms:</span>

                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://eefi.finance/assets/images/png/borrowing-platform-img-1.png" />
                    <img src="https://eefi.finance/assets/images/png/borrowing-platform-img-2.png" />
                    <img src="https://eefi.finance/assets/images/png/borrowing-platform-img-3.png" />
                    <img src="https://eefi.finance/assets/images/png/borrowing-platform-img-4.png" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
