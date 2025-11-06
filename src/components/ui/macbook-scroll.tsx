"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "../../utils/cn";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const words = [
    {
      text: "Your",
    },
    {
      text: "Intent",
      className:
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 text-transparent bg-clip-text",
    },
    {
      text: "-",
      className:
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 text-transparent bg-clip-text",
    },
    {
      text: "Driven",
      className:
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 text-transparent bg-clip-text",
    },
    {
      text: "DeFi",
    },
    {
      text: "Platform.",
    },
  ];

  return (
    <>
      <div className="bg-[url('/images/hero-bg.png')] bg-contain bg-center bg-no-repeat">
        <div
          ref={ref}
          className="sm:scale-85 mx-auto mt-20 flex min-h-[50vh] max-w-6xl flex-shrink-0 scale-[0.50] transform flex-col items-center justify-start [perspective:800px] min-[400px]:scale-[0.65] md:min-h-[200vh] md:scale-100 2xl:min-h-[110vh] 2xl:max-w-7xl"
        >
          <motion.div
            style={{
              translateY: textTransform,
              opacity: textOpacity,
            }}
            className=""
          >
            {title || (
              <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 2xl:max-w-7xl">
                <div className="sm:mb-8 sm:flex sm:justify-center">
                  <h1 className="font-display mb-4 text-center text-5xl font-medium tracking-tight text-white sm:text-6xl sm:leading-tight">
                    Welcome to{" "}
                    <span className="relative whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={340}
                        height={14}
                        fill="none"
                        className="absolute bottom-0 left-0 w-full"
                      >
                        <path stroke="url(#a)" strokeWidth={5} d="M1 11.5c58.5-6.792 208-16.3 338 0" />
                        <defs>
                          <radialGradient
                            id="a"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(0 4.5 -169 0 170 7)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0.099} stopColor="#FFC876" />
                            <stop offset={0.526} stopColor="#ACFF8E" />
                            <stop offset={0.74} stopColor="#9453FF" />
                            <stop offset={0.913} stopColor="#FF89C2" />
                          </radialGradient>
                        </defs>
                      </svg>
                      <span className="relative">DeFiMatrix</span>
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    <TypewriterEffectSmooth words={words} />
                  </h1>
                  <p className="mt-6 max-w-4xl text-xl font-normal leading-8 text-white/70">
                    Discover the future of decentralized finance at DeFiMatrix, where your financial intentions shape
                    the journey.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="relative p-[3px]">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-indigo-400 to-fuchsia-400" />
                      <div className="group relative rounded bg-black px-8 py-3.5 text-xs font-semibold uppercase text-white transition duration-200 hover:bg-transparent">
                        Launch App
                      </div>
                    </button>
                    <button className="rounded-md border border-black bg-white px-8 py-3.5 text-xs font-semibold uppercase text-black transition duration-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
                      Trade
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
          {/* Lid */}
          <Lid src="/linear.png" scaleX={scaleX} scaleY={scaleY} rotate={rotate} translate={translate} />
          {/* Base area */}
          <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
            {/* above keyboard bar */}
            <div className="relative h-10 w-full">
              <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
            </div>
            <div className="relative flex">
              <div className="mx-auto h-full w-[10%]  overflow-hidden">
                <SpeakerGrid />
              </div>
              <div className="mx-auto h-full w-[80%]">
                <Keypad />
              </div>
              <div className="mx-auto h-full w-[10%]  overflow-hidden">
                <SpeakerGrid />
              </div>
            </div>
            <Trackpad />
            <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
            {showGradient && (
              <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
            )}
            {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white">
            <AceternityLogo />
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <Image
          src={src as string}
          alt="aceternity logo"
          fill
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-32  w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="mx-1 h-full rounded-md bg-[#050505] p-1">
      {/* First Row */}
      <Row>
        <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F1</span>
        </KBtn>

        <KBtn>
          <IconBrightnessUp className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F12</span>
        </KBtn>
        <KBtn>
          <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </Row>

      {/* Second row */}
      <Row>
        <KBtn>
          <span className="block">~</span>
          <span className="mt-1 block">`</span>
        </KBtn>

        <KBtn>
          <span className="block ">!</span>
          <span className="block">1</span>
        </KBtn>
        <KBtn>
          <span className="block">@</span>
          <span className="block">2</span>
        </KBtn>
        <KBtn>
          <span className="block">#</span>
          <span className="block">3</span>
        </KBtn>
        <KBtn>
          <span className="block">$</span>
          <span className="block">4</span>
        </KBtn>
        <KBtn>
          <span className="block">%</span>
          <span className="block">5</span>
        </KBtn>
        <KBtn>
          <span className="block">^</span>
          <span className="block">6</span>
        </KBtn>
        <KBtn>
          <span className="block">&</span>
          <span className="block">7</span>
        </KBtn>
        <KBtn>
          <span className="block">*</span>
          <span className="block">8</span>
        </KBtn>
        <KBtn>
          <span className="block">(</span>
          <span className="block">9</span>
        </KBtn>
        <KBtn>
          <span className="block">)</span>
          <span className="block">0</span>
        </KBtn>
        <KBtn>
          <span className="block">&mdash;</span>
          <span className="block">_</span>
        </KBtn>
        <KBtn>
          <span className="block">+</span>
          <span className="block"> = </span>
        </KBtn>
        <KBtn className="w-10 items-end justify-end pb-[2px] pr-[4px]" childrenClassName="items-end">
          delete
        </KBtn>
      </Row>

      {/* Third row */}
      <Row>
        <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">
          tab
        </KBtn>
        <KBtn>
          <span className="block">Q</span>
        </KBtn>

        <KBtn>
          <span className="block">W</span>
        </KBtn>
        <KBtn>
          <span className="block">E</span>
        </KBtn>
        <KBtn>
          <span className="block">R</span>
        </KBtn>
        <KBtn>
          <span className="block">T</span>
        </KBtn>
        <KBtn>
          <span className="block">Y</span>
        </KBtn>
        <KBtn>
          <span className="block">U</span>
        </KBtn>
        <KBtn>
          <span className="block">I</span>
        </KBtn>
        <KBtn>
          <span className="block">O</span>
        </KBtn>
        <KBtn>
          <span className="block">P</span>
        </KBtn>
        <KBtn>
          <span className="block">{`{`}</span>
          <span className="block">{`[`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`}`}</span>
          <span className="block">{`]`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`|`}</span>
          <span className="block">{`\\`}</span>
        </KBtn>
      </Row>

      {/* Fourth Row */}
      <Row>
        <KBtn className="w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">
          caps lock
        </KBtn>
        <KBtn>
          <span className="block">A</span>
        </KBtn>

        <KBtn>
          <span className="block">S</span>
        </KBtn>
        <KBtn>
          <span className="block">D</span>
        </KBtn>
        <KBtn>
          <span className="block">F</span>
        </KBtn>
        <KBtn>
          <span className="block">G</span>
        </KBtn>
        <KBtn>
          <span className="block">H</span>
        </KBtn>
        <KBtn>
          <span className="block">J</span>
        </KBtn>
        <KBtn>
          <span className="block">K</span>
        </KBtn>
        <KBtn>
          <span className="block">L</span>
        </KBtn>
        <KBtn>
          <span className="block">{`:`}</span>
          <span className="block">{`;`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`"`}</span>
          <span className="block">{`'`}</span>
        </KBtn>
        <KBtn className="w-[2.85rem] items-end justify-end pb-[2px] pr-[4px]" childrenClassName="items-end">
          return
        </KBtn>
      </Row>

      {/* Fifth Row */}
      <Row>
        <KBtn className="w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">
          shift
        </KBtn>
        <KBtn>
          <span className="block">Z</span>
        </KBtn>
        <KBtn>
          <span className="block">X</span>
        </KBtn>
        <KBtn>
          <span className="block">C</span>
        </KBtn>
        <KBtn>
          <span className="block">V</span>
        </KBtn>
        <KBtn>
          <span className="block">B</span>
        </KBtn>
        <KBtn>
          <span className="block">N</span>
        </KBtn>
        <KBtn>
          <span className="block">M</span>
        </KBtn>
        <KBtn>
          <span className="block">{`<`}</span>
          <span className="block">{`,`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`>`}</span>
          <span className="block">{`.`}</span>
        </KBtn>{" "}
        <KBtn>
          <span className="block">{`?`}</span>
          <span className="block">{`/`}</span>
        </KBtn>
        <KBtn className="w-[3.65rem] items-end justify-end pb-[2px] pr-[4px]" childrenClassName="items-end">
          shift
        </KBtn>
      </Row>

      {/* sixth Row */}
      <Row>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <span className="block">fn</span>
          </div>
          <div className="flex w-full justify-start pl-1">
            <IconWorld className="h-[6px] w-[6px]" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <IconChevronUp className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="w-[8.2rem]"></KBtn>
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-start pl-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-start pl-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          <KBtn className="h-3 w-6">
            <IconCaretUpFilled className="h-[6px] w-[6px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="h-3 w-6">
              <IconCaretLeftFilled className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="h-3 w-6">
              <IconCaretDownFilled className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="h-3 w-6">
              <IconCaretRightFilled className="h-[6px] w-[6px]" />
            </KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
};
export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div className={cn("rounded-[4px] p-[0.5px]", backlit && "bg-white/[0.2] shadow-xl shadow-white")}>
      <div
        className={cn("flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]", className)}
        style={{
          boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-[2px] flex w-full flex-shrink-0 gap-[2px]">{children}</div>;
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect stroke="currentColor" strokeWidth={2} x="18" y="5" width="10" height="2" />
      <polygon stroke="currentColor" strokeWidth={2} points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 " />
      <rect id="_Transparent_Rectangle_" className="st0" width="32" height="32" stroke="none" />
    </svg>
  );
};

const AceternityLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={153} height={40} fill="none">
      <g clipPath="url(#a)">
        <path
          fill="#C65FD6"
          d="m-15.213 11.501.007-5.213L-5.586 0v4.022L-11.93 8.2l-.005 3.202 2.948 1.996 2.01-1.467V9.446L-3.7 7.204v4.523l5.195 3.188.01 8.42 3.673 2.068 1.885-1.477v-2.438L4.831 19.96v-3.793l4.017 2.688 3.07-1.998 2.806 1.837-4.383 3.001v1.842l3.159 2.138 3.223-2.182V16.23l-4.784-3.24-.005-3.115-6.137 3.952L.64 10.394 3.784 8.56 5.84 9.947l4.482-2.964L5.27 4.036.89 6.603V2.775L5.264.211l9.942 5.797.007 5.215L20 14.465v10.792l-4.787 3.242-.007 5.215L5.586 40v-4.02l6.345-4.177.005-3.203-2.948-1.995-2.01 1.467v2.485L3.7 32.798v-4.523l-5.269-3.187-.059-8.42-3.55-2.069-1.885 1.477v2.438l2.232 1.53v3.793l-4.017-2.689-3.07 1.998-2.806-1.837 4.383-3.003v-1.84L-13.5 14.33l-3.223 2.182v7.261l4.784 3.24.005 3.115 6.137-3.954 5.158 3.41-3.145 1.833-2.057-1.36-4.482 2.963 5.054 2.947 4.379-2.567v3.826l-4.374 2.564-9.942-5.794-.007-5.216L-20 25.537V14.743l4.787-3.242Z"
        />
      </g>
      <path
        fill="#fff"
        d="M27.79 27V13.96h3.6c1.266 0 2.366.227 3.3.68.946.453 1.68 1.16 2.2 2.12.52.947.78 2.167.78 3.66 0 1.493-.26 2.727-.78 3.7-.508.973-1.22 1.7-2.14 2.18-.92.467-1.98.7-3.18.7h-3.78Zm2.96-2.38h.48c.692 0 1.292-.133 1.8-.4.506-.267.9-.707 1.18-1.32.292-.613.44-1.44.44-2.48s-.148-1.853-.44-2.44c-.28-.6-.674-1.02-1.18-1.26-.508-.253-1.108-.38-1.8-.38h-.48v8.28ZM40.92 27V13.96h8.64v2.48h-5.68v2.62h4.82v2.46h-4.82v3h5.88V27h-8.84Zm12.952 0V13.96h8.66v2.48h-5.72v3.02h4.88v2.48h-4.88V27h-2.94Zm12.073 0v-2.48h3.04v-8.08h-3.04v-2.48h9.04v2.48h-3.04v8.08h3.04V27h-9.04Zm12.372 0V13.96h3.08l1.28 4.62.44 1.8h.08l.44-1.8 1.28-4.62h3.08V27h-2.48v-4.04c0-.36.013-.807.04-1.34.026-.547.06-1.113.1-1.7.04-.587.08-1.147.12-1.68.053-.533.093-.973.12-1.32h-.06l-1 3.48-1 3.14h-1.44l-1.02-3.14-.94-3.48h-.06l.1 1.32c.053.533.1 1.093.14 1.68.04.587.073 1.153.1 1.7.026.533.04.98.04 1.34V27h-2.44Zm11.712 0 4.06-13.04h3.52L101.67 27h-3.12l-1.68-6.6c-.16-.653-.333-1.347-.52-2.08-.187-.733-.36-1.44-.52-2.12h-.08l-.5 2.12a78.917 78.917 0 0 1-.52 2.08l-1.7 6.6h-3Zm2.68-3.1v-2.3h6.24v2.3h-6.24Zm14.352 3.1V16.44h-3.9v-2.48h10.76v2.48h-3.9V27h-2.96Zm9.572 0V13.96h4.62c.92 0 1.76.127 2.52.38.76.24 1.367.66 1.82 1.26.467.587.7 1.393.7 2.42 0 1-.233 1.813-.7 2.44-.453.627-1.06 1.093-1.82 1.4-.76.293-1.6.44-2.52.44h-1.68V27h-2.94Zm2.94-7.04h1.44c.774 0 1.36-.16 1.76-.48.414-.333.62-.82.62-1.46s-.206-1.087-.62-1.34c-.4-.253-.986-.38-1.76-.38h-1.44v3.66Zm1.14 1.58 2.04-1.9 4.16 7.36h-3.3l-2.9-5.46Zm8.693 5.46v-2.48h3.04v-8.08h-3.04v-2.48h9.04v2.48h-3.04v8.08h3.04V27h-9.04Zm11.572 0 3.8-6.7-3.58-6.34h3.3l1.26 2.46c.146.293.3.613.46.96.16.347.34.727.54 1.14h.08c.146-.413.293-.793.44-1.14.146-.347.293-.667.44-.96l1.16-2.46h3.16l-3.58 6.48 3.8 6.56h-3.28l-1.42-2.66a84.099 84.099 0 0 0-.52-1.02c-.16-.347-.334-.72-.52-1.12h-.08c-.16.4-.32.773-.48 1.12-.16.333-.32.673-.48 1.02l-1.36 2.66h-3.14Z"
      />
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M20 0H0v40h20z" />
        </clipPath>
      </defs>
    </svg>
  );
};
