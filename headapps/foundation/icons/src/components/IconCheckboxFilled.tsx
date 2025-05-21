import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconCheckboxFilled = ({
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
      <rect
        x="2.5"
        y="2.5"
        width="25"
        height="25"
        fill="white"
        stroke={color}
      />
      <rect
        x="8.5"
        y="8.5"
        width="13"
        height="13"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};
