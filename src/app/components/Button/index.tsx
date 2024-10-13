"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef, Ref, forwardRef } from "react";

type Colors = "primary" | "secondary" | "danger";
type Variants = "fill" | "outline" | "ghost";
type Sizes = "small" | "medium" | "large";

const VARIANTS: Record<"fill" | "outline" | "ghost", Record<Colors, string>> = {
  fill: {
    primary: "bg-blue-500 text-white hover:bg-blue-400",
    secondary: "bg-gray-500 text-white hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-400",
  },
  outline: {
    primary:
      "outline outline-blue-500 hover:outline-blue-400 hover:text-blue-400 text-blue-500 bg-white",
    secondary:
      "outline outline-gray-500 hover:outline-gray-400 hover:text-gray-400 text-gray-500 bg-white",
    danger:
      "outline outline-red-500 hover:outline-red-400 hover:text-red-400 text-red-500 bg-white",
  },
  ghost: {
    primary: "hover:bg-slate-100/25 hover:text-blue-400 text-blue-500",
    secondary: "hover:bg-slate-100/25 hover:text-gray-400 text-gray-500",
    danger: "hover:bg-slate-100/25 hover:text-red-400 text-red-500",
  },
} as const;

const SIZES = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
} as const;

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "ref"> & {
  color?: Colors;
  variant?: Variants;
  size?: Sizes;
  onClick?: () => void;
};

type AnchorProps = Omit<ComponentPropsWithoutRef<typeof Link>, "ref"> & {
  color?: Colors;
  variant?: Variants;
  size?: Sizes;
  disabled?: boolean;
};

type AS = "button" | "Link";

type Props<T extends AS> = T extends "button" ? ButtonProps : AnchorProps;

export const Button = forwardRef<HTMLButtonElement, Props<AS>>((props, ref) => {
  const {
    color = "primary",
    variant = "fill",
    size = "medium",
    ...restProps
  } = props;

  const variantClass = VARIANTS[variant][color];
  const sizeClass = SIZES[size];

  if ("href" in restProps) {
    const { disabled, ...linkAttributes } = props as AnchorProps;
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        className={`${variantClass} ${sizeClass} disabled:bg-slate-300 rounded focus:outline-none inline-block disabled:bg-none disabled:cursor-not-allowed`}
        {...linkAttributes}
      >
        {linkAttributes.children}
      </Link>
    );
  }

  const buttonAttributes = props as ButtonProps;
  return (
    <button
      ref={ref}
      className={`${variantClass} ${sizeClass} disabled:bg-slate-300 rounded focus:outline-none inline-block disabled:bg-none disabled:cursor-not-allowed`}
      {...buttonAttributes}
    >
      {buttonAttributes.children}
    </button>
  );
}) as <T extends "button" | "Link" = "button">(p: Props<T>) => JSX.Element;
