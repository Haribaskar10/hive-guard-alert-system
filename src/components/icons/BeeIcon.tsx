
import React from 'react';

interface BeeIconProps {
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export const BeeIcon: React.FC<BeeIconProps> = ({ 
  className = "h-6 w-6", 
  strokeWidth = 2, 
  style 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      <path d="M16 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      <path d="M8 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      <path d="M14 7a2 2 0 1 0-4 0" />
      <path d="M18 5a2 2 0 1 0-4 0" />
      <path d="M10 5a2 2 0 1 0-4 0" />
      <path d="M12 14v4" />
      <path d="M14 17c0 1.1-.9 2-2 2s-2-.9-2-2" />
      <path d="M8 12v5" />
      <path d="M16 12v5" />
      <path d="M8 17c0 1.1-.9 2-2 2s-2-.9 2-2" />
      <path d="M18 17c0 1.1.9 2 2 2s2-.9 2-2" />
    </svg>
  );
};

export default BeeIcon;
