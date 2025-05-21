import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconArrowRight = ({
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
      <path
        d="M14.7365 4.18385L13.756 5.1156C13.5109 5.3608 13.5109 5.75311 13.756 5.94927L21.3549 13.5994L4.5883 13.5994C4.29415 13.5994 4 13.8446 4 14.1879L4 15.561C4 15.8553 4.29415 16.1495 4.5883 16.1495L21.3549 16.1495L13.756 23.7506C13.5109 23.9468 13.5109 24.3391 13.756 24.5843L14.7365 25.5161C14.9326 25.7612 15.3248 25.7612 15.5699 25.5161L25.8162 15.2668C26.0613 15.0216 26.0613 14.6783 25.8162 14.4331L15.5699 4.18385C15.3248 3.93865 14.9326 3.93865 14.7365 4.18385Z"
        fill={color}
      />
    </svg>
  );
};
