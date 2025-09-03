"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShinyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  shimmer?: boolean;
}

export function ShinyCard({
  className,
  children,
  shimmer = true,
  ...props
}: ShinyCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl group",
        className
      )}
      {...props}
    >
      {shimmer && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent" />
      )}
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
