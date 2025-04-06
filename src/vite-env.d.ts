
/// <reference types="vite/client" />
/// <reference types="three" />
/// <reference types="@react-three/fiber" />
/// <reference types="@react-three/drei" />

declare module '@splinetool/react-spline' {
  import React from 'react';
  
  interface SplineProps {
    scene: string;
    className?: string;
    [key: string]: any;
  }
  
  const Spline: React.FC<SplineProps>;
  
  export default Spline;
}
