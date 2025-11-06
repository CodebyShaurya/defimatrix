import Image from "next/image";

const people = [
  {
    name: "Duncan Davies",
    role: "Chief Executive Officer",
    imageUrl: "/images/teams/t1.png",
  },
  {
    name: "Billy Clarke",
    role: "Chief Technology Officer",
    imageUrl: "/images/teams/t2.png",
  },
  {
    name: "Oscar Wilson",
    role: "Chief Marketing Officer",
    imageUrl: "/images/teams/t3.png",
  },
  {
    name: "Dmitriy Sokolov",
    role: "Chief Operating Officer",
    imageUrl: "/images/teams/t4.png",
  },
  {
    name: "Taarush Bandyopadhyay",
    role: "Chief Financial Officer",
    imageUrl: "/images/teams/t5.png",
  },
  {
    name: "Vivaan Muhammad",
    role: "Chief Information Officer",
    imageUrl: "/images/teams/t6.png",
  },
  {
    name: "Vivaan Muhammad",
    role: "Chief Information Officer",
    imageUrl: "/images/teams/t6.png",
  },
  {
    name: "Vivaan Muhammad",
    role: "Chief Information Officer",
    imageUrl: "/images/teams/t6.png",
  },
];

export default function Teams2() {
  return (
    <div id="working-team" className="container relative px-4 lg:px-8 mx-auto border-x border-b text-center py-32 border-white/10 2xl:max-w-screen-2xl">
      <div className="absolute inset-0 flex items-center mx-auto right-0 left-0 w-full justify-center -z-10">
          <img src="/images/gradient-bg.svg" className="absolute blur-3xl animate-pulse opacity-20" alt="" />
      </div>
      <div className="mx-auto mb-4 w-auto">
        <Image
          src="/images/cta-icon.svg"
          alt="cta-icon"
          width={120}
          height={120}
          className="md:mx-auto animate-pulse"
        />
      </div>
      <h2 className="mx-auto max-w-4xl text-left text-3xl font-medium tracking-tight text-white sm:leading-loose md:text-center md:text-5xl lg:text-6xl">
      Our Business Development Team&apos;s  <span className="relative whitespace-nowrap">
          
            <svg
              className="absolute -bottom-2 left-0 w-full max-w-xs pt-2"
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
            <span className="relative">Working For You <br /> </span>
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-left text-lg tracking-tight text-gray-300 md:text-center">
        At DeFiMatrix, our team is pioneering the integration of advanced AI to redefine decentralized finance for you. Composed of experts in blockchain, finance, and AI technology, we&apos;re dedicated to delivering a platform that&apos;s not only intuitive and secure but also smart—capable of optimizing your investments and providing personalized insights. By leveraging cutting-edge AI, we ensure DeFiMatrix is a place where technology meets user-centric design, empowering you with a seamless, efficient, and tailored DeFi experience.
        </p>
        <div className="flex max-w-6xl 2xl:max-w-7xl px-4 lg:px-8 mx-auto items-center justify-center flex-col">
          <img src="/images/teams-2.png" className="mt-8" alt="defimatrix-team"/>
          <div className="p-0.5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500 via-red-600 to-orange-400 rounded-2xl">
          <p className="p-4 text-left md:text-center md:text-lg md:p-8 lg:p-10 bg-[#15131D] rounded-2xl">
          Get an exclusive sneak peek of DeFiMatrix&apos;s innovative trading app – Your gateway to intuitive and strategic crypto finance.
          </p>
          </div>
          </div>
    </div>
  );
}
