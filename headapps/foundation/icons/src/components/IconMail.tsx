import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconMail = ({
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
      <path
        d="M4.6 5H25.4C26.83 5 28 6.17 28 7.6V23.2C28 24.63 26.83 25.8 25.4 25.8H4.6C3.17 25.8 2 24.63 2 23.2V7.6C2 6.17 3.17 5 4.6 5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 7.59998L15 16.7L2 7.59998"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
