import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconStarHalf = ({
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
        d="M25 12.24L17.81 11.62L15 5L12.19 11.63L5 12.24L10.46 16.97L8.82 24L15 20.27L21.18 24L19.55 16.97L25 12.24ZM15 18.4V9.1L16.71 13.14L21.09 13.52L17.77 16.4L18.77 20.68L15 18.4Z"
        fill={color}
      />
    </svg>
  );
};
