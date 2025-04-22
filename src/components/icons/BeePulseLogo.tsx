
import React from "react";

interface BeePulseLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const BeePulseLogo: React.FC<BeePulseLogoProps> = ({ className, style }) => (
  <img
    src="/lovable-uploads/6c07f216-5fc1-4c1d-bc54-32baae74d18a.png"
    alt="BeePulse Logo"
    className={`h-16 w-auto object-contain ${className}`}
    style={{
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
      ...style
    }}
  />
);

export default BeePulseLogo;

