"use client";

import { ShinyCard } from "./shiny-card";

export default function ShinyCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      <ShinyCard className="p-6">
        <h3 className="text-lg font-semibold mb-2">Basic Card</h3>
        <p className="text-muted-foreground">
          A simple card with shiny hover effect.
        </p>
      </ShinyCard>
      <ShinyCard className="p-6" shimmer={false}>
        <h3 className="text-lg font-semibold mb-2">No Shimmer</h3>
        <p className="text-muted-foreground">Card without shimmer effect.</p>
      </ShinyCard>
      <ShinyCard className="p-6">
        <h3 className="text-lg font-semibold mb-2">With Content</h3>
        <p className="text-muted-foreground">
          Cards can contain any content you want.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
        </div>
      </ShinyCard>
    </div>
  );
}
