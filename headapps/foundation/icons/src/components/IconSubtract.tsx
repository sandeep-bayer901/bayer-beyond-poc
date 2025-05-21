import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconSubtract = ({
  size = "30",
  color = "currentColor",
  className = "",
}: IconProps): JSX.Element => {
  return (
    <svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      className={`icon ${className}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25.563 13H4.938c-.528 0-.938.469-.938.938v1.874c0 .528.41.938.938.938h20.625c.468 0 .937-.41.937-.938v-1.874c0-.47-.469-.938-.938-.938Z" />
    </svg>
  );
};
