// 📁 components/Button.tsx
"use client";

import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "muted";
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-4 py-2",
        {
          "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
          "bg-gray-700 text-white hover:bg-gray-600": variant === "secondary",
          "bg-muted text-muted-foreground hover:bg-muted/80": variant === "muted",
        },
        className
      )}
      {...props}
    />
  );
}


