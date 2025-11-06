import * as React from "react";
const Xicon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={0.0243254} y={0.0243254} width={35.9513} height={35.9513} rx={3.97567} fill="#252134" />
    <rect
      x={0.0243254}
      y={0.0243254}
      width={35.9513}
      height={35.9513}
      rx={3.97567}
      stroke="#252134"
      strokeWidth={0.0486508}
    />
    <rect opacity={0.1} width={36} height={36} rx={4} fill="url(#paint0_radial_2493_3903)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8321 18.6799L8.82568 9.50024H14.7733L18.9659 14.9934L23.6353 9.50024H26.52L20.3306 16.7814L27.7484 26.5002H21.8009L17.1968 20.468L12.069 26.5002H9.18435L15.8321 18.6799ZM22.6668 24.75L12.3633 11.2505H13.9073L24.2108 24.75H22.6668Z"
      fill="url(#paint1_radial_2493_3903)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_2493_3903"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(15.678 29.4981) scale(77.2743 66.3629)"
      >
        <stop stopColor="#C450D5" />
        <stop offset={1} stopColor="#D43E76" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_2493_3903"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.0665 23.4299) scale(40.6179 31.3381)"
      >
        <stop stopColor="#C450D5" />
        <stop offset={1} stopColor="#D43E76" />
      </radialGradient>
    </defs>
  </svg>
);
export default Xicon;
