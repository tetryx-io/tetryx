import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: any;
  variant?: "primary" | "secondary" | "ghost" | "default" | "danger";
  size?: "small" | "medium" | "large" | "custom";
  styleClass?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const DefaultButton: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size,
  styleClass,
  iconLeft,
  iconRight,
  ...props
}) => {
  const buttonClasses = `text-center flex gap-2 rounded-md flex-none items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed transition-all ${
    variant === "primary"
      ? "bg-black text-white font-medium"
      : variant === "secondary"
      ? "bg-atrium-offWhite text-neutral-500"
      : variant === "danger"
      ? "bg-red-500 text-white"
      : variant === "default"
      ? "text-gray border hover:border-neutral-600 font-semibold bg-none hover:text-black"
      : variant === "ghost"
      ? ""
      : "bg-green-500 text-white"
  } ${
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-sm"
      : size === "large"
      ? "p-2 text-md"
      : size === "custom"
      ? ""
      : "px-4 py-1"
  } ${styleClass}`;

  return (
    <button className={buttonClasses} {...props}>
      {iconLeft} {label} {iconRight}
    </button>
  );
};

export default DefaultButton;
