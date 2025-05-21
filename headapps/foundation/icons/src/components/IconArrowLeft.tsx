import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconArrowLeft = ({
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
        d="M15.2635 25.5161L16.244 24.5844C16.4891 24.3392 16.4891 23.9468 16.244 23.7507L8.64513 16.1005H25.4117C25.7059 16.1005 26 15.8553 26 15.512V14.1389C26 13.8447 25.7059 13.5505 25.4117 13.5505H8.64513L16.244 5.94932C16.4891 5.75316 16.4891 5.36085 16.244 5.11565L15.2635 4.1839C15.0674 3.9387 14.6752 3.9387 14.4301 4.1839L4.18384 14.4332C3.93872 14.6784 3.93872 15.0216 4.18384 15.2668L14.4301 25.5161C14.6752 25.7613 15.0674 25.7613 15.2635 25.5161Z"
        fill={color}
      />
    </svg>
  );
};
