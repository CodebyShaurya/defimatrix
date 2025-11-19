import Image from "next/image";

const partnerLogos = [
  {
    name: "OpenAI",
    src: "/partner-logos/open-ai.svg",
    url: "https://www.openai.com",
  },
  {
    name: "Gemini",
    src: "/partner-logos/gemini.svg",
    url: "https://www.gemini.com",
  },
  {
    name: "DeepSeek",
    src: "/partner-logos/deepseek.svg",
    url: "https://www.deepseek.com",
  },
  {
    name: "NVIDIA",
    src: "/partner-logos/nvidia.svg",
    url: "https://www.nvidia.com",
  },
  {
    name: "Meta",
    src: "/partner-logos/meta.svg",
    url: "https://about.meta.com",
  },
  {
    name: "Google",
    src: "/partner-logos/google.svg",
    url: "https://www.google.com",
  },
  {
    name: "Google Analytics",
    src: "/partner-logos/google-analytics.svg",
    url: "https://analytics.google.com",
  },
  {
    name: "GitHub",
    src: "/partner-logos/github.svg",
    url: "https://github.com",
  },
  {
    name: "Microsoft",
    src: "/partner-logos/microsoft.svg",
    url: "https://www.microsoft.com",
  },
];

export default function LogoCloud() {
  return (
    <div className="pt-12 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-xl font-semibold text-white sm:mb-12 sm:text-6xl">Powered by</h2>
  
        {/* Mobile view - stacked grid */}
        <div className="grid grid-cols-2 gap-8 md:hidden">
          {partnerLogos.map((logo) => (
            <a
              key={logo.name}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center transition-opacity hover:opacity-80"
            >
              <div className="relative flex h-10 w-full items-center justify-center sm:h-12">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Tablet and desktop view - two rows */}
        <div className="hidden md:block">
          {/* First row of logos */}
          <div className="mx-auto grid grid-cols-3 items-center gap-x-8 gap-y-10 md:grid-cols-5 lg:gap-x-12">
            {partnerLogos.slice(0, 5).map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center transition-opacity hover:opacity-80"
              >
                <div className="relative h-10 sm:h-12">
                  <Image src={logo.src} alt={logo.name} width={158} height={48} className="h-full object-contain" />
                </div>
              </a>
            ))}
          </div>

          {/* Second row of logos - centered */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-x-8 md:gap-x-12 lg:gap-x-16">
            {partnerLogos.slice(5).map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center transition-opacity hover:opacity-80"
              >
                <div className="relative h-10 sm:h-12">
                  <Image src={logo.src} alt={logo.name} width={158} height={48} className="h-full object-contain" />
                </div>
              </a>
            ))}
          </div>
        </div>
         <div className="flex items-center justify-center gap-4 relative mb-8 z-10  max-w-4xl mx-auto ">
        <div className="bg-black/60 flex items-center rounded-2xl px-4 py-2 mt-7">
          <span className="text-lg sm:text-2xl uppercase tracking-wide text-gray-400">Built on</span>
          <a href="https://www.near.org/" target="_blank" rel="noopener noreferrer">
            <img
              src="/logo3.png"
              alt="Built on logo"
              className="h-6 w-auto ml-3"
              style={{ filter: "grayscale(1) brightness(0.85) contrast(0.9)" }}
            />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
