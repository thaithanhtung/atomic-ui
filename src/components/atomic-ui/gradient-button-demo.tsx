"use client";

import { GradientButton } from "./gradient-button";

export default function GradientButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      <GradientButton variant="default" size="sm">
        Small Button
      </GradientButton>
      <GradientButton variant="blue" size="md">
        Medium Button
      </GradientButton>
      <GradientButton variant="purple" size="lg">
        Large Button
      </GradientButton>
      <GradientButton variant="pink" size="md">
        Pink Button
      </GradientButton>
    </div>
  );
}
