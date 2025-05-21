import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconArrowUp = ({
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
        d="M4.334 15.1135L5.26575 16.094C5.51094 16.3391 5.90326 16.3391 6.09942 16.094L13.7496 8.4951L13.7496 25.2617C13.7496 25.5558 13.9948 25.85 14.3381 25.85L15.7112 25.85C16.0054 25.85 16.2996 25.5558 16.2996 25.2617L16.2996 8.4951L23.9008 16.094C24.0969 16.3391 24.4893 16.3391 24.7344 16.094L25.6662 15.1135C25.9114 14.9174 25.9114 14.5252 25.6662 14.2801L15.4169 4.03382C15.1717 3.78869 14.8285 3.78869 14.5833 4.03382L4.334 14.2801C4.0888 14.5252 4.0888 14.9174 4.334 15.1135Z"
        fill={color}
      />
    </svg>
  );
};
