"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "blue" | "purple" | "pink";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variants = {
  default:
    "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600",
  blue: "bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700",
  purple:
    "bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700",
  pink: "bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function GradientButton({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: GradientButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg font-medium text-white transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />
    </button>
  );
}
