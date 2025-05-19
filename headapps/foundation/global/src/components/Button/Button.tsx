import React, { JSX } from "react";
import NextLink from "next/link";

export type ButtonProps = {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "tertiary";
  type?: "link" | "button";
  url?: string;
  querystring?: string;
  disabled?: boolean;
  children?: any;
  className?: string;
  target?: string;
};

export const Button = ({
  size = "md",
  variant = "primary",
  type = "link",
  url,
  disabled,
  children,
  className,
  querystring,
  target,
}: ButtonProps): JSX.Element => {
  const prefix = "button";
  const customClass = `${
    className ? className : ""
  } ${prefix} ${prefix}--${variant}
  ${prefix}--${size}`;
  let buttonElement;

  if (type === "link") {
    buttonElement = (
      <NextLink href="#" className={customClass}>
        {/* <NextLink href={{ pathname: url, query: querystring }}> */}
        {children}
      </NextLink>
    );
  } else {
    buttonElement = (
      <button disabled={disabled} className={customClass}>
        {children}
      </button>
    );
  }

  return buttonElement;
};
