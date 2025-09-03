"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { componentsRegistry } from "@/registry/components-registry";

// Import components for demo
import { GradientButton } from "@/components/atomic-ui/gradient-button";
import { ShinyCard } from "@/components/atomic-ui/shiny-card";

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] =
    useState<string>("gradient-button");
  const [showCode, setShowCode] = useState(false);

  const components = Object.entries(componentsRegistry);

  const renderComponentDemo = (componentKey: string) => {
    switch (componentKey) {
      case "gradient-button":
        return (
          <div className="flex flex-wrap gap-4">
            <GradientButton>Default Button</GradientButton>
            <GradientButton className="bg-red-500">Red Button</GradientButton>
            <GradientButton className="bg-green-500">
              Green Button
            </GradientButton>
          </div>
        );
      case "shiny-card":
        return (
          <div className="grid gap-4 md:grid-cols-2 max-w-2xl">
            <ShinyCard className="p-6">
              <h3 className="text-lg font-semibold mb-2">Card Title</h3>
              <p className="text-muted-foreground">
                This is a shiny card with hover effect. Hover over it to see the
                shimmer animation.
              </p>
            </ShinyCard>
            <ShinyCard className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <h3 className="text-lg font-semibold mb-2">Gradient Card</h3>
              <p className="text-muted-foreground">
                Card with gradient background and shiny effect.
              </p>
            </ShinyCard>
          </div>
        );
      default:
        return <div>Component demo not available</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Components</h1>
            <p className="text-xl text-muted-foreground">
              Explore and interact with all available Clik Atomic UI components
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-4 sticky top-8">
                <h3 className="font-semibold mb-4">Components</h3>
                <nav className="space-y-2">
                  {components.map(([key, component]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedComponent(key)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedComponent === key
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {component.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {selectedComponent && componentsRegistry[selectedComponent] && (
                <div className="space-y-8">
                  {/* Component Info */}
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {componentsRegistry[selectedComponent].title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      {componentsRegistry[selectedComponent].description}
                    </p>

                    {/* Installation */}
                    <div className="bg-muted rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          Installation:
                        </span>
                      </div>
                      <code className="text-sm">
                        npx atomic-ui-cli add {selectedComponent}
                      </code>
                    </div>

                    {/* Dependencies */}
                    {componentsRegistry[selectedComponent].dependencies.length >
                      0 && (
                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Dependencies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {componentsRegistry[
                            selectedComponent
                          ].dependencies.map((dep) => (
                            <span
                              key={dep}
                              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                            >
                              {dep}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Demo */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Preview</h3>
                    <div className="bg-card border rounded-lg p-8 mb-6">
                      <div className="flex items-center justify-center min-h-[200px]">
                        {renderComponentDemo(selectedComponent)}
                      </div>
                    </div>
                  </div>

                  {/* Code */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold">Code</h3>
                      <div className="flex bg-muted rounded-lg p-1">
                        <button
                          onClick={() => setShowCode(false)}
                          className={`px-3 py-1 rounded text-sm transition-colors ${
                            !showCode
                              ? "bg-background shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          Demo
                        </button>
                        <button
                          onClick={() => setShowCode(true)}
                          className={`px-3 py-1 rounded text-sm transition-colors ${
                            showCode
                              ? "bg-background shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          Component
                        </button>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>
                          {showCode
                            ? componentsRegistry[selectedComponent].code
                            : componentsRegistry[selectedComponent].demoCode}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
