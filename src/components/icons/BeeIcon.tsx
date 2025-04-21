
import React from "react";

interface BeeIconProps {
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export const BeeIcon: React.FC<BeeIconProps> = ({
  className = "h-6 w-6",
  strokeWidth = 2,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    fill="none"
    className={className}
    style={style}
  >
    {/* Simple, neat bee logo: head, body (stripes), wings */}
    <ellipse cx="26" cy="37" rx="11" ry="8" fill="#FFC107" stroke="#2E2219" strokeWidth={strokeWidth} />
    <ellipse cx="26" cy="19" rx="8" ry="8" fill="#FFC107" stroke="#2E2219" strokeWidth={strokeWidth} />
    <ellipse cx="15" cy="13" rx="5" ry="7" fill="#fff9e1" stroke="#B87800" strokeWidth={strokeWidth * 0.9} opacity="0.8" />
    <ellipse cx="37" cy="13" rx="5" ry="7" fill="#fff9e1" stroke="#B87800" strokeWidth={strokeWidth * 0.9} opacity="0.8" />
    {/* Stripes */}
    <rect x="22" y="30" width="3" height="15" fill="#2E2219" rx="1.2" />
    <rect x="27" y="30" width="3" height="15" fill="#2E2219" rx="1.2" />
    {/* Face */}
    <circle cx="25.5" cy="17" r="1.3" fill="#2E2219" />
    <circle cx="30.5" cy="17" r="1.3" fill="#2E2219" />
    <path d="M27.5 20 q.6 2 2 0" stroke="#2E2219" strokeWidth=".8" fill="none" />
    {/* Antennae */}
    <path d="M24 12 Q23 7 18 7" stroke="#2E2219" strokeWidth=".8" fill="none" />
    <path d="M31 12 Q32 6 37 7" stroke="#2E2219" strokeWidth=".8" fill="none" />
  </svg>
);

export default BeeIcon;
