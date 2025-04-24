
import React from "react";

interface BeePulseLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const BeePulseLogo: React.FC<BeePulseLogoProps> = ({ className, style }) => (
  <div className="rounded-full overflow-hidden bg-white dark:bg-background">
    <img
      src="/lovable-uploads/6c07f216-5fc1-4c1d-bc54-32baae74d18a.png"
      alt="BeePulse Logo"
      className={`h-16 w-16 object-contain p-2 ${className}`}
      style={{
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
        ...style
      }}
    />
  </div>
);

export default BeePulseLogo;
