import React, { JSX } from "react";
import { IconProps } from "../utils/IconProps";

export const IconInstagram = ({
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
        d="M21.5 2H8.5C4.91015 2 2 4.91015 2 8.5V21.5C2 25.0898 4.91015 28 8.5 28H21.5C25.0898 28 28 25.0898 28 21.5V8.5C28 4.91015 25.0898 2 21.5 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.2 14.1811C20.3604 15.2631 20.1756 16.368 19.6718 17.3389C19.1681 18.3097 18.3711 19.097 17.3941 19.5887C16.4171 20.0805 15.3099 20.2516 14.2301 20.0779C13.1502 19.9041 12.1526 19.3943 11.3793 18.6209C10.6059 17.8475 10.096 16.8499 9.92225 15.77C9.74848 14.6902 9.91965 13.583 10.4114 12.606C10.9031 11.6291 11.6904 10.832 12.6612 10.3283C13.6321 9.82451 14.737 9.63971 15.819 9.80015C16.9226 9.9638 17.9443 10.4781 18.7332 11.2669C19.5221 12.0558 20.0363 13.0775 20.2 14.1811Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1499 7.84998H22.1629"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
