"use client";

// components/Card.tsx
import React from "react";
import { cn } from "@/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function Card({ title, description, children, className, ...props }: CardProps) {
  return (
    <div className={cn("card", className)} {...props}>
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  );
}

// components/Button.tsx
import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "muted";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    muted: "bg-muted text-muted-foreground hover:bg-muted/90",
  };

  return (
    <button
      className={cn("button", variantClasses[variant], className)}
      {...props}
    />
  );
}
