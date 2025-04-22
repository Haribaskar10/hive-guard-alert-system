
import React from "react";

interface BeePulseLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const BeePulseLogo: React.FC<BeePulseLogoProps> = ({ className, style }) => (
  <img
    src="/lovable-uploads/6c07f216-5fc1-4c1d-bc54-32baae74d18a.png"
    alt="BeePulse Logo"
    className={className}
    style={style}
  />
);

export default BeePulseLogo;

