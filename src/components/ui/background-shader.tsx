import * as React from "react";
const BackgroundShader = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1920 1156"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    className="h-full w-full"
    {...props}
  >
    <g clipPath="url(#clip0_2384_375)">
      <rect width={1920} height={1156} fill="#0E0C15" />
      <g filter="url(#filter0_f_2384_375)">
        <path
          d="M2059.11 -101.558L2059.11 1257.9L1506.78 578.172L2059.11 -101.558Z"
          fill="#B600B4"
          fillOpacity={0.86}
        />
      </g>
      <g filter="url(#filter1_f_2384_375)">
        <path d="M2058.85 67.1952L2058.85 1089.78L1643.38 578.488L2058.85 67.1952Z" fill="#F7CDF6" />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_2384_375"
        x={930.078}
        y={-678.258}
        width={1705.73}
        height={2512.86}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={288.35} result="effect1_foregroundBlur_2384_375" />
      </filter>
      <filter
        id="filter1_f_2384_375"
        x={1473.38}
        y={-102.805}
        width={755.465}
        height={1362.59}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={85} result="effect1_foregroundBlur_2384_375" />
      </filter>
      <clipPath id="clip0_2384_375">
        <rect width={1920} height={1156} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default BackgroundShader;
