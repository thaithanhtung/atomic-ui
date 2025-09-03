"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { GradientButton } from "@/components/atomic-ui/gradient-button";
import { ShinyCard } from "@/components/atomic-ui/shiny-card";

export default function PlaygroundPage() {
  // Gradient Button State
  const [buttonText, setButtonText] = useState("Click me!");
  const [buttonVariant, setButtonVariant] = useState("default");

  // Shiny Card State
  const [cardTitle, setCardTitle] = useState("Card Title");
  const [cardContent, setCardContent] = useState(
    "This is a shiny card with customizable content. Hover over it to see the shimmer effect."
  );
  const [cardBackground, setCardBackground] = useState("default");

  const buttonVariants = {
    default: "",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    purple: "bg-purple-500 hover:bg-purple-600",
  };

  const cardBackgrounds = {
    default: "",
    gradient1: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    gradient2: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    gradient3: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
    dark: "bg-gray-900/50",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Playground</h1>
            <p className="text-xl text-muted-foreground">
              Experiment with components and see changes in real-time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Gradient Button Playground */}
            <div className="space-y-6">
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Gradient Button</h2>

                {/* Controls */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={buttonText}
                      onChange={(e) => setButtonText(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="Enter button text"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Variant
                    </label>
                    <select
                      value={buttonVariant}
                      onChange={(e) => setButtonVariant(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background"
                    >
                      <option value="default">Default</option>
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                    </select>
                  </div>
                </div>

                {/* Preview */}
                <div className="bg-muted rounded-lg p-8 mb-4">
                  <div className="flex justify-center">
                    <GradientButton
                      className={
                        buttonVariants[
                          buttonVariant as keyof typeof buttonVariants
                        ]
                      }
                    >
                      {buttonText}
                    </GradientButton>
                  </div>
                </div>

                {/* Code */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>
                      {`<GradientButton${buttonVariant !== "default" ? ` className="${buttonVariants[buttonVariant as keyof typeof buttonVariants]}"` : ""}>
  ${buttonText}
</GradientButton>`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Shiny Card Playground */}
            <div className="space-y-6">
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Shiny Card</h2>

                {/* Controls */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Card Title
                    </label>
                    <input
                      type="text"
                      value={cardTitle}
                      onChange={(e) => setCardTitle(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="Enter card title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Card Content
                    </label>
                    <textarea
                      value={cardContent}
                      onChange={(e) => setCardContent(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background h-20 resize-none"
                      placeholder="Enter card content"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Background
                    </label>
                    <select
                      value={cardBackground}
                      onChange={(e) => setCardBackground(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background"
                    >
                      <option value="default">Default</option>
                      <option value="gradient1">Purple Gradient</option>
                      <option value="gradient2">Blue Gradient</option>
                      <option value="gradient3">Green Gradient</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                </div>

                {/* Preview */}
                <div className="bg-muted rounded-lg p-8 mb-4">
                  <div className="flex justify-center">
                    <ShinyCard
                      className={`p-6 max-w-sm ${cardBackgrounds[cardBackground as keyof typeof cardBackgrounds]}`}
                    >
                      <h3 className="text-lg font-semibold mb-2">
                        {cardTitle}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {cardContent}
                      </p>
                    </ShinyCard>
                  </div>
                </div>

                {/* Code */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>
                      {`<ShinyCard className="p-6${cardBackground !== "default" ? ` ${cardBackgrounds[cardBackground as keyof typeof cardBackgrounds]}` : ""}">
  <h3 className="text-lg font-semibold mb-2">
    ${cardTitle}
  </h3>
  <p className="text-muted-foreground">
    ${cardContent}
  </p>
</ShinyCard>`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">💡 Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Customization</h3>
                <p className="text-sm text-muted-foreground">
                  All components accept standard className props and can be
                  styled with Tailwind CSS classes.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Use the CLI to add components to your project:{" "}
                  <code className="bg-muted px-1 rounded">
                    npx atomic-ui-cli add [component-name]
                  </code>
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">TypeScript</h3>
                <p className="text-sm text-muted-foreground">
                  All components are built with TypeScript and provide full type
                  safety.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Responsive</h3>
                <p className="text-sm text-muted-foreground">
                  Components work seamlessly across different screen sizes and
                  devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
