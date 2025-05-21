import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconMenu = ({
  size = "30",
  color = "currentColor",
  className = "",
}: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      className={`icon ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 7H28" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M2 15.125H28"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2 23.25H28"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
