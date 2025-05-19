import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconBulletActive = ({
  size = "30",
  color = "currentColor",
  className = "",
}: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      className={`icon ${className}`}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="3.5" fill={color} stroke={color} />
    </svg>
  );
};
