import React from "react";

const YellowLineChart: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="60" height="20" viewBox="0 0 60 20" fill="none" {...props}>
      <style>
        {`
          @keyframes drawLineContinuous {
            0% { stroke-dashoffset: 100; }
            40% { stroke-dashoffset: 0; }
            60% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -100; }
          }
          
          .line {
            stroke-dasharray: 100;
            animation: drawLineContinuous 1.8s linear infinite;
          }
        `}
      </style>
      <polyline
        className="line"
        points="0,18 10,10 20,12 30,6 40,14 50,4 60,10"
        stroke="#FFD600"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default YellowLineChart;
