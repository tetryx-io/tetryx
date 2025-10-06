import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "default" | "danger";
  size?: "default" | "small" | "medium" | "large";
  styleClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "default",
  styleClass,
  ...props
}) => {
  const buttonClasses = `text-center flex items-center justify-center rounded-md hover:cursor-pointer duration-[200ms] disabled:opacity-60 disabled:cursor-not-allowed ${
    variant === "secondary"
      ? "bg-blue-500 text-white"
      : variant === "danger"
      ? "bg-red-500 text-white"
      : variant === "default"
      ? "bg-white border border-black"
      : "bg-black text-white"
  } ${
    size === "default"
      ? "text-base p-2"
      : size === "small"
      ? "text-sm"
      : size === "medium"
      ? "p-2 text-sm"
      : size === "large"
      ? ""
      : ""
  } ${styleClass}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
