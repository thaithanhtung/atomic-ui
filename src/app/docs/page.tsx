import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Learn how to use Clik Atomic UI components in your projects",
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Learn how to use Clik Atomic UI components in your projects
            </p>
          </div>

          {/* Quick Start */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Quick Start</h2>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Installation</h3>
              <div className="bg-muted rounded-md p-4 mb-4">
                <code className="text-sm">
                  npx atomic-ui-cli add gradient-button
                </code>
              </div>
              <p className="text-muted-foreground mb-4">
                This will add the gradient button component to your project.
              </p>

              <h3 className="text-lg font-medium mb-4">Usage</h3>
              <div className="bg-muted rounded-md p-4">
                <pre className="text-sm overflow-x-auto">
                  {`import { GradientButton } from "@/components/atomic-ui/gradient-button";

export default function MyComponent() {
  return (
    <GradientButton>
      Click me!
    </GradientButton>
  );
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Available Components */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Available Components
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Gradient Button</h3>
                <p className="text-muted-foreground mb-4">
                  An animated gradient border button with customizable colors
                  and duration
                </p>
                <div className="flex gap-2">
                  <Link
                    href="/components#gradient-button"
                    className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-md hover:bg-primary/90"
                  >
                    View Demo
                  </Link>
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    npx atomic-ui-cli add gradient-button
                  </code>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Shiny Card</h3>
                <p className="text-muted-foreground mb-4">
                  A card component with shimmer effect animation on hover
                </p>
                <div className="flex gap-2">
                  <Link
                    href="/components#shiny-card"
                    className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-md hover:bg-primary/90"
                  >
                    View Demo
                  </Link>
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    npx atomic-ui-cli add shiny-card
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* CLI Commands */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">CLI Commands</h2>
            <div className="space-y-4">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">List Components</h3>
                <div className="bg-muted rounded-md p-4 mb-2">
                  <code className="text-sm">npx atomic-ui-cli list</code>
                </div>
                <p className="text-muted-foreground">
                  Shows all available components you can add to your project.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Add Component</h3>
                <div className="bg-muted rounded-md p-4 mb-2">
                  <code className="text-sm">
                    npx atomic-ui-cli add [component-name]
                  </code>
                </div>
                <p className="text-muted-foreground">
                  Adds a specific component to your project with interactive
                  setup.
                </p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Customization</h2>
            <div className="bg-card border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                All components are built with Tailwind CSS and can be easily
                customized by modifying the classes or CSS variables.
              </p>

              <h3 className="text-lg font-medium mb-4">CSS Variables</h3>
              <div className="bg-muted rounded-md p-4">
                <pre className="text-sm overflow-x-auto">
                  {`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Support */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Support</h2>
            <div className="bg-card border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                Need help? Check out these resources:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  •{" "}
                  <Link
                    href="/components"
                    className="text-primary hover:underline"
                  >
                    Component Examples
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/playground"
                    className="text-primary hover:underline"
                  >
                    Interactive Playground
                  </Link>
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://github.com/thaithanhtung/atomic-ui"
                    className="text-primary hover:underline"
                  >
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
