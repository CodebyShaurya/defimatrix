import Image from "next/image";

export default function NftSection() {
  return (
    <div className="bg-black">
      <div id="use-cases" className="container relative mx-auto px-4 pt-12 md:pt-24 text-center lg:px-8 2xl:max-w-screen-2xl">
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
                    <img src="platform-logos/smart-vaults-platform-img-1.png" />
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
                    <img src="/platform-logos/stablecoins-platform-img-1.png" />
                    <img src="/platform-logos/stablecoins-platform-img-2.png" />
                    <img src="/platform-logos/stablecoins-platform-img-3.png" />
                    <img src="/platform-logos/Y2KF.png" />
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
                    <img src="/platform-logos/social-trading-platform-img-1.png" />
                    <img src="/platform-logos/logoMapple.png" />
                    <svg className="h-8 mx-auto w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        width={161}
                        height={218}
                        viewBox="0 0 161 218"
                        fill="none"
                      >
                        <path
                          d="M0 206.143C0 212.518 4.54525 217.775 12.77 217.775C16.7277 217.775 20.0053 216.778 22.3552 215.358V210.221C22.3552 208.66 22.4427 208.031 24.3752 207.865V206.173H14.2851V207.865C16.6041 207.955 17.408 208.348 17.408 210.221V214.391C16.4495 215.176 15.2745 215.539 13.3575 215.539C7.88461 215.539 5.41101 210.735 5.41101 205.025C5.41101 200.13 7.35897 195.749 12.5845 195.749C16.2639 195.749 18.3047 197.532 19.5106 201.188H21.7368L21.6131 195.931C19.8198 194.662 17.006 193.604 13.0173 193.604C5.78205 193.604 0 198.438 0 206.143Z"
                          fill="white"
                        />
                        <path
                          d="M36.2166 215.75C33.2792 215.75 31.7332 212.79 31.7332 208.499C31.7332 205.206 32.7226 202.88 35.258 202.88C38.1645 202.88 39.7105 205.841 39.7105 210.131C39.7105 213.454 38.752 215.75 36.2166 215.75ZM35.4126 217.775C40.5763 217.775 44.5959 214.391 44.5959 209.013C44.5959 204.36 41.1947 200.855 36.031 200.855C30.8674 200.855 26.8478 204.239 26.8478 209.617C26.8478 214.3 30.249 217.775 35.4126 217.775Z"
                          fill="white"
                        />
                        <path
                          d="M52.9732 195.629L53.1278 193H51.9838L46.3872 194.36V195.266L48.397 196.535V214.179C48.397 215.569 47.655 215.72 46.2326 215.902V217.473H55.1685V215.902C53.7462 215.72 52.9732 215.569 52.9732 214.179V195.629Z"
                          fill="white"
                        />
                        <path
                          d="M66.2701 202.819C68.3108 202.819 69.7332 203.967 69.7332 206.173V213.484C68.8365 214.27 67.7234 214.723 66.3629 214.723C63.2709 214.723 61.7867 212.155 61.7867 208.741C61.7867 205.085 63.4873 202.819 66.2701 202.819ZM76.5665 216.747V215.116L75.7935 215.086C74.6185 215.025 74.3093 214.602 74.3093 213.575V195.629L74.4639 193H73.3199L67.7234 194.36V195.266L69.7332 196.535V201.883C68.7747 201.248 67.476 200.855 65.8682 200.855C61.0137 200.855 57.025 204.39 57.025 210.07C57.025 214.633 59.6842 217.775 64.2294 217.775C66.6721 217.775 68.5582 216.596 69.7332 214.904L69.5786 217.775H70.4753L76.5665 216.747Z"
                          fill="white"
                        />
                        <path
                          d="M97.2617 201.158H85.7285V199.556C85.7285 196.384 86.5633 194.752 88.8205 194.752C90.3047 194.752 90.954 195.629 90.954 197.139V198.348H94.3861C95.19 197.955 95.5611 197.139 95.5611 196.293C95.5611 194.36 93.7368 193 89.6863 193C84.3989 193 81.1523 195.749 81.1523 200.281V200.674L78.7715 201.762V203.121H81.1523V214.179C81.1523 215.569 80.4103 215.72 78.9879 215.902V217.473H88.1712V215.902C86.4087 215.69 85.7285 215.569 85.7285 214.119V203.121H92.5V214.179C92.5 215.569 91.7579 215.72 90.3356 215.902V217.473H99.2715V215.902C97.8492 215.72 97.1071 215.569 97.1071 214.179V204.088L97.2617 201.158Z"
                          fill="white"
                        />
                        <path
                          d="M115.007 214.179C115.007 215.569 114.265 215.72 112.843 215.902V217.473H121.779V215.902C120.357 215.72 119.584 215.569 119.584 214.179V205.81C119.584 202.366 117.45 200.855 114.389 200.855C111.823 200.855 109.596 202.366 108.236 203.816L108.391 200.795H107.247L101.65 202.366V203.272L103.66 204.692V214.179C103.66 215.569 102.918 215.72 101.495 215.902V217.473H110.431V215.902C109.009 215.72 108.236 215.569 108.236 214.179V205.176C109.318 204.511 110.926 203.937 112.379 203.937C114.142 203.937 115.007 204.602 115.007 206.384V214.179Z"
                          fill="white"
                        />
                        <path
                          d="M127.462 208.137C127.462 204.723 129.194 202.819 131.636 202.819C133.646 202.819 134.265 204.058 134.265 205.901V207.17H137.233C138.006 206.868 138.531 206.112 138.531 205.025C138.531 202.487 135.934 200.855 132.286 200.855C127.091 200.855 123.195 204.39 123.195 209.829C123.195 214.3 126.163 217.775 131.296 217.775C135.501 217.775 137.882 215.599 138.872 212.638L137.697 212.064C136.645 213.333 135.13 214.33 132.904 214.33C129.286 214.33 127.462 211.944 127.462 208.137Z"
                          fill="white"
                        />
                        <path
                          d="M142.358 196.535V214.179C142.358 215.569 141.615 215.72 140.193 215.902V217.473H149.098V215.902C147.676 215.72 146.934 215.569 146.934 214.179V205.176C147.985 204.511 149.624 203.937 151.046 203.937C152.809 203.937 153.705 204.602 153.705 206.384V214.179C153.705 215.569 152.963 215.72 151.541 215.902V217.473H160.446V215.902C159.023 215.72 158.281 215.569 158.281 214.179V205.81C158.281 202.366 156.117 200.855 153.056 200.855C150.52 200.855 148.294 202.366 146.934 203.816V195.629L147.088 193H145.944L140.348 194.36V195.266L142.358 196.535Z"
                          fill="white"
                        />
                        <path
                          d="M118.988 34.0461C116.168 37.1962 109.588 37.1657 106.768 34.3306C103.948 31.4955 103.008 26.008 106.768 22.5429C110.528 19.0777 116.168 20.3413 118.988 22.8614C121.808 25.3815 121.808 30.896 118.988 34.0461Z"
                          fill="white"
                        />
                        <path
                          d="M89.3969 11.5344C86.3183 15.3078 85.1231 17.5057 82.7999 23.5205C79.7893 31.3148 77.0824 39.9212 75.9829 45.2483C74.8834 50.5755 77.0738 55.1511 82.0664 58.2704C87.348 61.5703 93.0411 64.1391 100.738 67.0247C108.434 69.9102 113.956 74.0238 115.716 78.2411C117.475 82.4584 117.075 90.5798 113.117 98.3486C109.158 106.117 103.642 113.337 93.9667 120.439C84.2911 127.542 77.6819 129.231 68.1142 131.451C58.5466 133.67 61.6886 139.14 64.9871 140.249C68.2855 141.359 75.5419 142.469 85.2179 142.025C94.8938 141.581 104.557 139.14 115.992 133.368C127.427 127.597 138.642 117.609 144.591 104.291C150.54 90.9731 152.913 72.1834 146.019 60.3419C142.013 53.461 139.961 51.8043 138.642 47.468C137.322 43.1317 138.167 39.8274 140.625 36.8137C142.042 35.0761 145.209 33.3267 148.11 31.2347C150.397 29.5859 153.155 27.9351 155.134 26.6033C157.113 25.2715 157.786 24.5758 156.466 23.6879L156.419 23.6561C155.084 22.7578 152.453 20.987 147.877 19.2784C143.247 17.5495 142.375 17.3115 140.625 17.1703C138.874 17.029 136.675 18.5827 133.157 21.2463C129.639 23.9099 128.099 24.4301 127.879 27.4613C127.659 30.4926 126.78 34.3423 124.361 37.6717C121.942 41.0012 118.7 42.6917 114.358 43.1317C110.016 43.5716 104.145 42.2243 101.259 38.8113C98.3719 35.3984 97.2087 33.4519 97.2087 28.6121C97.2087 23.7722 99.0724 20.3584 101.55 17.9168C104.028 15.4752 103.91 14.5874 103.91 13.4775C103.91 12.3677 103.334 8.5926 102.853 6.83265C102.371 5.0727 100.642 4.79565 97.8202 5.72202C94.8652 6.69205 92.4755 7.76097 89.3969 11.5344Z"
                          fill="white"
                        />
                        <path
                          d="M45.7965 104.175C44.3715 104.551 43.3722 106.995 40.575 111.885C37.7777 116.774 35.1534 120.347 30.146 125.8C25.1386 131.254 21.993 133.51 14.0274 138.4L13.8219 138.526C6.02164 143.314 3.72752 144.722 3.18626 146.17C2.64028 147.631 2.96143 149.555 8.81707 150.458C14.6727 151.361 19.5544 151.563 28.0133 145.734C36.4722 139.904 43.1185 134.263 51.8832 130.126C60.6479 125.988 63.3919 126.248 73.2094 123.356C83.0269 120.463 91.9765 114.787 98.1524 107.889C104.328 100.991 107.416 94.0387 108.667 90.0882C109.917 86.1377 110.095 80.8736 106.754 78.2405C103.563 75.7248 101.838 74.9684 94.7936 72.3354C87.3018 69.5352 84.8145 68.8334 79.2951 64.4449C74.0938 60.3094 74.4025 59.321 71.134 58.8822C67.8655 58.4433 65.3882 63.3324 64.2854 65.78C63.4555 67.6218 63.3137 70.8734 65.511 73.9339C67.7083 76.9943 69.7514 80.3628 75.77 83.7824C81.7885 87.2021 84.5926 87.7492 88.6962 88.4331C92.7998 89.1171 94.4021 90.0882 93.2993 92.0361C92.1964 93.9841 89.9906 94.9288 86.2409 94.9288C82.4912 94.9288 77.1976 93.2033 71.9039 90.0882C68.1708 87.8914 65.5074 85.4155 63.5615 82.9679C61.6701 80.5888 60.5357 80.2431 58.7821 80.2431C57.0285 80.2431 55.5859 81.3556 53.4884 84.4708C51.391 87.5859 49.8468 90.9605 49.6263 92.7883C49.4057 94.6162 49.2078 96.6548 52.5164 99.1024C55.825 101.55 58.6837 102.88 62.4334 103.548C66.183 104.215 69.0365 105.387 66.2899 107.889C63.5433 110.391 60.2137 109.837 57.5669 109.169C54.92 108.502 51.0796 106.431 49.6263 105.491C48.173 104.551 47.2214 103.799 45.7965 104.175Z"
                          fill="white"
                        />
                        <path
                          d="M128.924 16.3092C130.914 15.0708 133.114 13.4452 133.114 12.3081C133.114 11.171 131.993 9.80646 127.289 6.84998C122.585 3.89351 116.088 0.535706 111.832 0.0272061C107.575 -0.481294 109.419 6.28239 109.921 8.95722C110.422 11.632 110.572 13.7144 112.341 13.9307C114.11 14.1469 115.436 14.3631 116.984 14.7956C118.532 15.228 120.522 16.1605 122.733 17.458C124.944 18.7554 126.934 17.5477 128.924 16.3092Z"
                          fill="white"
                        />
                      </svg>

                    <img className="h-8" src="/platform-logos/Trufilogo.png" />
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
                    <img src="/platform-logos/bonds-platform-img-1.png" />
                    <img src="/platform-logos/bonds-platform-img-2.png" />
                    <img src="/platform-logos/bonds-platform-img-3.png" />
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
                    <img src="/platform-logos/options-platform-img-1.png" />
                    <img src="/platform-logos/options-platform-img-2.png" />
                    <img src="/platform-logos/options-platform-img-3.png" />
                    <img src="/platform-logos/options-platform-img-4.png" />
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
                    <img src="/platform-logos/nft-platform-img-1.png" />
                    <img src="/platform-logos/nft-platform-img-2.png" />
                    <img src="/platform-logos/logoJapged.png" />
                    <img src="/platform-logos/bend-logo-3x.webp" />
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
                    <img src="/platform-logos/platform-img-1.png" />
                    <img src="/platform-logos/platform-img-2.png" />
                    <img src="/platform-logos/platform-img-3.png" />
                    <img src="/platform-logos/platform-img-4.png" />
                    <img src="/platform-logos/Gansislogo.png" />
                    <img src="/platform-logos/Syntexis-logo.png" />
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
                    <img src="/platform-logos/platform-img-1.png" />
                    <img src="/platform-logos/perps-platform-img-2.png" />
                    <img src="/platform-logos/perps-platform-img-3.png" />
                    <img src="/platform-logos/perps-platform-img-4.png" />
                    <img src="/platform-logos/logoStandfee.png" />
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
                    <img src="/platform-logos/borrowing-platform-img-1.png" />
                    <img src="/platform-logos/borrowing-platform-img-2.png" />
                    <img src="/platform-logos/borrowing-platform-img-3.png" />
                    <img src="/platform-logos/borrowing-platform-img-4.png" />
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
