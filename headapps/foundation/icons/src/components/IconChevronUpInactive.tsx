import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconChevronUpInactive = ({
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
      <rect width={size} height={size} rx="4" fill="#EAEAEA" />
      <path
        d="M7.63559 18.6818L8.3226 19.3933C8.50339 19.5356 8.79266 19.5356 8.93729 19.3933L15.4819 12.9545L22.0627 19.3933C22.2073 19.5356 22.4966 19.5356 22.6774 19.3933L23.3644 18.6818C23.5452 18.504 23.5452 18.2549 23.3644 18.0771L15.8073 10.6067C15.6266 10.4644 15.3734 10.4644 15.1927 10.6067L7.63559 18.0771C7.4548 18.2549 7.4548 18.504 7.63559 18.6818Z"
        fill="#444444"
      />
    </svg>
  );
};
