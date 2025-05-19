import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconAdd = ({
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
      <path d="M25.563 13.375h-8.438V4.937c0-.468-.469-.937-.938-.937h-1.875c-.527 0-.937.469-.937.938v8.437H4.937c-.527 0-.937.469-.937.938v1.874c0 .528.41.938.938.938h8.437v8.438c0 .527.41.937.938.937h1.874c.47 0 .938-.41.938-.938v-8.437h8.438c.468 0 .937-.41.937-.938v-1.875c0-.468-.469-.937-.938-.937Z" />
    </svg>
  );
};
