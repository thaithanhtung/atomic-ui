import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientButtonDemo from "@/components/atomic-ui/gradient-button-demo";
import ShinyCardDemo from "@/components/atomic-ui/shiny-card-demo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Build beautiful{" "}
                  <span className="text-primary">components</span> faster
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A modern React and Next.js based UI component library built
                  with Tailwind CSS. Perfect for modern developers and creative
                  teams.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/docs">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/components">View Components</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Component Showcase
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of modern, animated components
              </p>
            </div>

            {/* Gradient Buttons */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Gradient Buttons
              </h3>
              <GradientButtonDemo />
            </div>

            {/* Shiny Cards */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Shiny Cards
              </h3>
              <ShinyCardDemo />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why choose My UI?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with modern technologies and best practices in mind
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CLI Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Easy to Use</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Install components with our CLI tool
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Install components with CLI
                </h3>
                <div className="bg-muted p-4 rounded font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    # List all components
                  </div>
                  <div>npx my-ui list</div>
                  <div className="text-muted-foreground"># Add a component</div>
                  <div>npx my-ui add gradient-button</div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const features = [
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Fast & Lightweight",
    description: "Optimized for performance with minimal bundle size impact",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
        />
      </svg>
    ),
    title: "Customizable",
    description: "Easy to customize with CSS variables and Tailwind CSS",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Accessible",
    description: "Built with accessibility in mind following WCAG guidelines",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "TypeScript",
    description: "Full TypeScript support with comprehensive type definitions",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Modern Animations",
    description: "Smooth animations powered by Framer Motion and GSAP",
  },
];
