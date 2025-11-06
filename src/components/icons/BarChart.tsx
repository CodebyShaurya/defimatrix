import React from "react";

const BarChart: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="60" height="32" viewBox="0 0 60 32" fill="none" {...props}>
      <style>
        {`
          @keyframes barPulse {
            0% { height: 0; y: 30; }
            30% { height: var(--final-height); y: var(--final-y); }
            70% { height: var(--final-height); y: var(--final-y); }
            100% { height: 0; y: 30; }
          }
          
          .bar {
            animation: barPulse 1.5s ease-in-out infinite;
            transform-origin: bottom;
          }
          
          .bar:nth-child(1) { animation-delay: 0s; }
          .bar:nth-child(2) { animation-delay: 0.25s; }
          .bar:nth-child(3) { animation-delay: 0.5s; }
          .bar:nth-child(4) { animation-delay: 0.75s; }
          .bar:nth-child(5) { animation-delay: 1s; }
          .bar:nth-child(6) { animation-delay: 1.25s; }
        `}
      </style>
      <rect
        className="bar"
        x="2"
        y="16"
        width="6"
        height="14"
        rx="2"
        fill="#00F0FF"
        style={{ "--final-height": "14", "--final-y": "16" } as React.CSSProperties}
      />
      <rect
        className="bar"
        x="12"
        y="8"
        width="6"
        height="22"
        rx="2"
        fill="#00F0FF"
        style={{ "--final-height": "22", "--final-y": "8" } as React.CSSProperties}
      />
      <rect
        className="bar"
        x="22"
        y="20"
        width="6"
        height="10"
        rx="2"
        fill="#A259FF"
        style={{ "--final-height": "10", "--final-y": "20" } as React.CSSProperties}
      />
      <rect
        className="bar"
        x="32"
        y="4"
        width="6"
        height="26"
        rx="2"
        fill="#A259FF"
        style={{ "--final-height": "26", "--final-y": "4" } as React.CSSProperties}
      />
      <rect
        className="bar"
        x="42"
        y="12"
        width="6"
        height="18"
        rx="2"
        fill="#00F0FF"
        style={{ "--final-height": "18", "--final-y": "12" } as React.CSSProperties}
      />
      <rect
        className="bar"
        x="52"
        y="24"
        width="6"
        height="6"
        rx="2"
        fill="#A259FF"
        style={{ "--final-height": "6", "--final-y": "24" } as React.CSSProperties}
      />
    </svg>
  );
};

export default BarChart;
