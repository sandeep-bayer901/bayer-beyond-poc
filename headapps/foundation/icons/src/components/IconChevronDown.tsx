import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconChevronDown = ({
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
        d="M26.1026 9.85426L25.158 8.85991C24.9094 8.66104 24.5117 8.66104 24.3128 8.85991L15.3139 17.8588L6.26533 8.85991C6.06646 8.66104 5.66872 8.66104 5.42014 8.85991L4.4755 9.85426C4.22692 10.1028 4.22692 10.4509 4.4755 10.6995L14.8665 21.1401C15.1151 21.339 15.4631 21.339 15.7117 21.1401L26.1026 10.6995C26.3512 10.4509 26.3512 10.1028 26.1026 9.85426Z"
        fill={color}
      />
    </svg>
  );
};
