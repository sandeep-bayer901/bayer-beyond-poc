import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconChevronLeftInactive = ({
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
      <rect width={size} height={size} rx="4" fill="#EAEAEA" />
      <path
        d="M19.1818 22.8644L19.8933 22.1774C20.0356 21.9966 20.0356 21.7073 19.8933 21.5627L13.4545 15.0181L19.8933 8.43729C20.0356 8.29265 20.0356 8.00339 19.8933 7.8226L19.1818 7.13559C19.004 6.9548 18.7549 6.9548 18.5771 7.13559L11.1067 14.6927C10.9644 14.8734 10.9644 15.1266 11.1067 15.3073L18.5771 22.8644C18.7549 23.0452 19.004 23.0452 19.1818 22.8644Z"
        fill="#444444"
      />
    </svg>
  );
};
