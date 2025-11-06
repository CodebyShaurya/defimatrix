// types/react-simple-marquee.d.ts
declare module 'react-simple-marquee' {
    import React from 'react';
  
    export interface MarqueeProps {
      speed?: number;
      direction?: 'bottom-top' | 'top-bottom' | 'left-right' | 'right-left'; // Adjust based on actual API
      // Add other props as needed
      children?: React.ReactNode; // This line ensures that `children` is recognized as a valid prop
    }
  
    const Marquee: React.ComponentType<MarqueeProps>;
    export default Marquee;
  }
  