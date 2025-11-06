import Image from "next/image";

const people = [
  {
    name: "Billy Clarke",
    role: "Chief Technology Officer",
    imageUrl: "/images/teams/Billy.png",
    email: "billy@defimatrix.io",
  },
  {
    name: "Tess Harper",
    role: "Chief Marketing Officer",
    imageUrl: "/images/teams/Tess.png",
    email: "tess@defimatrix.io",
  },
  {
    name: "Dmitriy Sokolov",
    role: "Chief Operating Officer",
    imageUrl: "/images/teams/Dmitry.png",
    email: "dmitriy@defimatrix.io",
  },
  {
    name: "Taarush Bandyopadhyay",
    role: "Chief Financial Officer",
    imageUrl: "/images/teams/Taarush.png",
    email: "taarush@defimatrix.io",
  },
  {
    name: "Vivaan Muhammad",
    role: "Chief Information Officer",
    imageUrl: "/images/teams/Vivaan.png",
    email: "vivaan@defimatrix.io",
  },
  {
    name: "Aleksandr Kuznetsov",
    role: "Chief Development Officer",
    imageUrl: "/images/teams/Aleksandr.png",
    email: "aleksandr@defimatrix.io",
  },
  {
    name: "Sage Kendall",
    role: "Chief Communications Officer",
    imageUrl: "/images/teams/Sage.png",
    email: "sage@defimatrix.io",
  },
  {
    name: "Quinn Barclay",
    role: "Chief Innovation Officer",
    imageUrl: "/images/teams/Quinn.png",
    email: "quinn@defimatrix.io",
  },
];

const teams = [
  {
    name: "Olivia Emerson",
    role: "Social Media Manager",
    imageUrl: "/images/teams/Olivia.png",
    email: "blair@defimatrix.io",
  },
  {
    name: "Emma Jamison",
    role: "Head of Technology & Training",
    imageUrl: "/images/teams/Emma.png",
    email: "reese@defimatrix.io",
  },
  {
    name: "Drew Langley",
    role: "Head of Design & Brand Management",
    imageUrl: "/images/teams/Drew.png",
    email: "drew@defimatrix.io",
  },
  {
    name: "Sophia Peyton",
    role: "Head of Design & Brand Management",
    imageUrl: "/images/teams/Sophia.png",
    email: "alex@defimatrix.io",
  },
  {
    name: "Isabella Smith",
    role: "Lead Digital Marketer & Writer",
    imageUrl: "/images/teams/Isabella.png",
    email: "oliver@defimatrix.io",
  },
  {
    name: "Evelyn Anderson",
    role: "Lead Social Media Champion",
    imageUrl: "/images/teams/Evelyn.png",
    email: "Jack@defimatrix.io",
  },
  {
    name: "Luna Taylor",
    role: "Lead Quality Assurance Engineer",
    imageUrl: "/images/teams/Luna.png",
    email: "Jacob@defimatrix.io",
  },
  {
    name: "George Walker",
    role: "Lead Systems Engineer",
    imageUrl: "/images/teams/George.png",
    email: "george@defimatrix.io",
  },
  {
    name: "William Fletcher",
    role: "Lead Customer Support",
    imageUrl: "/images/teams/William.png",
    email: "William@defimatrix.io",
  },
  {
    name: "Vick Parkins",
    role: "Lead Graphic Designer",
    imageUrl: "/images/teams/Vick.png",
    email: "Vick@defimatrix.io",
  },
  {
    name: "Kevin Beckham",
    role: "Lead Software Engineer",
    imageUrl: "/images/teams/Kevin.png",
    email: "Kevin@defimatrix.io",
  },
  {
    name: "Raj Balakrishnan",
    role: "Lead DevOps",
    imageUrl: "/images/teams/Raj.png",
    email: "Raj@defimatrix.io",
  },
];


export default function Teams() {
  return (
    <div id="team" className="container relative mx-auto border border-white/10 px-4 py-32 text-center lg:px-8 2xl:max-w-screen-2xl">
      <div className="absolute inset-0 left-0 right-0 -z-10 mx-auto flex w-full items-center justify-center">
        <img
          src="/images/gradient-bg.svg"
          className="absolute animate-pulse opacity-20 blur-3xl"
          alt=""
        />
      </div>
      <div className="md:mx-auto mb-4 w-auto">
        <Image
          src="/images/cta-icon.svg"
          alt="cta-icon"
          width={120}
          height={120}
          className="md:mx-auto animate-pulse"
        />
      </div>
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
          <span className="relative">Our Team</span>
        </span>
      </h2>
      <p className="mx-auto mt-6 max-w-4xl text-left text-lg tracking-tight text-gray-300 md:text-center">
        Our team reflects a steadfast commitment to innovation and empowering
        our users. From the introduction of new functionalities to the expansion
        of our AI-enhanced solver ecosystem, DeFiMatrix is poised to remain at
        the cutting edge of DeFi technology. Join us as we continue to explore
        new horizons and push the boundaries of what&apos;s possible in
        decentralized finance.
      </p>
      <p className="mx-auto mt-6 max-w-4xl text-left font-semibold text-3xl tracking-tight text-white md:text-center">
        Our C-Level Executives
      </p>
      <ul
        role="list"
        className="mx-auto mt-12 grid max-w-xs lg:px-8 grid-cols-1 items-center justify-center text-center"
      >
          <li>
            <div className="rounded-2xl bg-gradient-to-b from-gray-700 via-gray-900 to-black p-1">
              <div className="h-[28rem] cursor-pointer rounded-2xl bg-[#0E0C15] p-4 transition-all duration-150 ease-in-out hover:scale-105 hover:bg-[#0E0C15] xl:h-[26rem]">
                <img
                  className="mx-auto w-full rounded-xl"
                  src="/images/teams/t1.png"
                  alt="defimatrix-founder"
                />
                <h3 className="mt-6 text-sm font-semibold uppercase leading-6 tracking-tight text-white xl:text-lg">
                DAVE SILVA
                </h3>
                <p className="text-xs leading-6 text-gray-300 xl:text-sm">
                Founder and CEO
                </p>
                <a href="mailto:dave@defimatrix.io" className="p-2 border rounded-md mt-4 flex w-8 sm:w-10 mx-auto border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:h-6 sm:w-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </a>
              </div>
            </div>
          </li>
      </ul>
      <ul
        role="list"
        className="mx-auto mt-10 grid max-w-6xl 2xl:max-w-7xl lg:px-8 grid-cols-2 gap-2 sm:gap-6 text-center sm:grid-cols-3 md:grid-cols-4"
      >
        {people.map((person) => (
          <li key={person.name}>
            <div className="rounded-2xl bg-gradient-to-b from-gray-700 via-gray-900 to-black p-1">
              <div className="h-[23rem] cursor-pointer rounded-2xl bg-[#0E0C15] p-4 transition-all duration-150 ease-in-out hover:scale-105 hover:bg-[#0E0C15] xl:h-[26rem]">
                <img
                  className="mx-auto w-full rounded-xl"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-sm font-semibold uppercase leading-6 tracking-tight text-white xl:text-lg">
                  {person.name}
                </h3>
                <p className="text-xs leading-6 text-gray-300 xl:text-sm">
                  {person.role}
                </p>
                <a href={`mailto:${person.email}`} className="p-2 border rounded-md mt-4 flex w-8 sm:w-10 mx-auto border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:h-6 sm:w-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mx-auto my-16 max-w-4xl text-left font-semibold text-3xl tracking-tight text-white md:text-center">
        Our Management Level Executives
      </p>
      <ul
        role="list"
        className="mx-auto grid max-w-6xl 2xl:max-w-7xl lg:px-8 grid-cols-2 gap-2 sm:gap-6 text-center sm:grid-cols-3 md:grid-cols-4"
      >
        {teams.map((team) => (
          <li key={team.name}>
            <div className="rounded-2xl bg-gradient-to-b from-gray-700 via-gray-900 to-black p-1">
              <div className="h-[23rem] cursor-pointer rounded-2xl bg-[#0E0C15] p-4 transition-all duration-150 ease-in-out hover:scale-105 hover:bg-[#0E0C15] xl:h-[26rem]">
                <img
                  className="mx-auto w-full rounded-xl"
                  src={team.imageUrl}
                  alt={team.name}
                />
                <h3 className="mt-6 text-sm font-semibold uppercase leading-6 tracking-tight text-white xl:text-lg">
                  {team.name}
                </h3>
                <p className="text-xs leading-6 text-gray-300 xl:text-sm">
                  {team.role}
                </p>
                <a href={`mailto:${team.email}`} className="p-2 border rounded-md mt-4 flex w-8 sm:w-10 mx-auto border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:h-6 sm:w-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
