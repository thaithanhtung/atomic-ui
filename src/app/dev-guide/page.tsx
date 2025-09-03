"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import {
  ChevronRight,
  Copy,
  Check,
  FolderPlus,
  FileText,
  Settings,
  Terminal,
} from "lucide-react";

export default function DevGuidePage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<string>("overview");

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const steps = [
    {
      id: "overview",
      title: "Tổng quan",
      icon: <Settings className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
              🚀 Developer Guide - Chỉ hiển thị trong Development Mode
            </h3>
            <p className="text-muted-foreground mb-4">
              Trang này chỉ hiển thị khi{" "}
              <code className="bg-muted px-1 rounded">
                NODE_ENV=development
              </code>
              . Trong production, trang này sẽ trả về 404.
            </p>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Cấu trúc project:</p>
              <pre className="text-sm text-muted-foreground">
                {`my-ui/
├── src/
│   ├── components/
│   │   └── atomic-ui/          # Components chính
│   ├── registry/
│   │   └── components-registry.tsx  # Registry cho web
│   └── app/
├── registry-cli.json          # Registry cho CLI
└── registry.json             # Registry cho shadcn/ui`}
              </pre>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-3">📁 File Structure</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • <code>/components/atomic-ui/</code> - Component source
                </li>
                <li>
                  • <code>/registry/</code> - Web registry
                </li>
                <li>
                  • <code>registry-cli.json</code> - CLI registry
                </li>
                <li>
                  • <code>/app/components/</code> - Showcase page
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-3">🔧 Development Flow</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tạo component mới</li>
                <li>• Cập nhật registries</li>
                <li>• Test trên playground</li>
                <li>• Push lên GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "create-component",
      title: "Tạo Component Mới",
      icon: <FolderPlus className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
              Step 1: Tạo Component File
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Tạo file component tại{" "}
                  <code>/src/components/atomic-ui/my-button.tsx</code>:
                </p>
                <div className="relative">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    {`import React from "react";
import { cn } from "@/lib/utils";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
            "border border-input bg-background hover:bg-accent": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          },
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 py-2": size === "md", 
            "h-12 px-8 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

MyButton.displayName = "MyButton";`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import React from "react";
import { cn } from "@/lib/utils";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
            "border border-input bg-background hover:bg-accent": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          },
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 py-2": size === "md", 
            "h-12 px-8 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

MyButton.displayName = "MyButton";`,
                        "component-code"
                      )
                    }
                    className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                  >
                    {copiedCode === "component-code" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Tạo demo component tại{" "}
                  <code>/src/components/atomic-ui/my-button-demo.tsx</code>:
                </p>
                <div className="relative">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    {`import { MyButton } from "./my-button";

export default function MyButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <MyButton>Default</MyButton>
      <MyButton variant="outline">Outline</MyButton>
      <MyButton variant="ghost">Ghost</MyButton>
      <MyButton size="sm">Small</MyButton>
      <MyButton size="lg">Large</MyButton>
    </div>
  );
}`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import { MyButton } from "./my-button";

export default function MyButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <MyButton>Default</MyButton>
      <MyButton variant="outline">Outline</MyButton>
      <MyButton variant="ghost">Ghost</MyButton>
      <MyButton size="sm">Small</MyButton>
      <MyButton size="lg">Large</MyButton>
    </div>
  );
}`,
                        "demo-code"
                      )
                    }
                    className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                  >
                    {copiedCode === "demo-code" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "update-registry",
      title: "Cập nhật Registry",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-orange-600 dark:text-orange-400">
              Step 2: Cập nhật Components Registry
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  1. Cập nhật <code>/src/registry/components-registry.tsx</code>
                  :
                </p>
                <div className="relative">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    {`// Thêm imports
import { MyButton } from "@/components/atomic-ui/my-button";
import MyButtonCode from "@/components/atomic-ui/my-button.tsx?raw";
import MyButtonDemo from "@/components/atomic-ui/my-button-demo";
import MyButtonDemoCode from "@/components/atomic-ui/my-button-demo.tsx?raw";

// Thêm vào componentsRegistry object
export const componentsRegistry: ComponentRegistry = {
  // ... existing components
  "my-button": {
    component: MyButton,
    code: MyButtonCode,
    demo: MyButtonDemo,
    demoCode: MyButtonDemoCode,
    title: "My Button",
    description: "A customizable button component with variants and sizes",
    dependencies: ["clsx", "tailwind-merge"],
  },
};`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `// Thêm imports
import { MyButton } from "@/components/atomic-ui/my-button";
import MyButtonCode from "@/components/atomic-ui/my-button.tsx?raw";
import MyButtonDemo from "@/components/atomic-ui/my-button-demo";
import MyButtonDemoCode from "@/components/atomic-ui/my-button-demo.tsx?raw";

// Thêm vào componentsRegistry object
export const componentsRegistry: ComponentRegistry = {
  // ... existing components
  "my-button": {
    component: MyButton,
    code: MyButtonCode,
    demo: MyButtonDemo,
    demoCode: MyButtonDemoCode,
    title: "My Button",
    description: "A customizable button component with variants and sizes",
    dependencies: ["clsx", "tailwind-merge"],
  },
};`,
                        "registry-web"
                      )
                    }
                    className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                  >
                    {copiedCode === "registry-web" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  2. Cập nhật <code>registry-cli.json</code>:
                </p>
                <div className="relative">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    {`{
  "name": "atomic-ui",
  "homepage": "https://atomic-ui.vercel.app",
  "items": [
    // ... existing items
    {
      "name": "my-button",
      "type": "registry:component",
      "devDependencies": [],
      "dependencies": ["clsx", "tailwind-merge"],
      "registryDependencies": [],
      "files": [
        {
          "path": "./src/components/atomic-ui/my-button.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `{
  "name": "atomic-ui",
  "homepage": "https://atomic-ui.vercel.app",
  "items": [
    // ... existing items
    {
      "name": "my-button",
      "type": "registry:component",
      "devDependencies": [],
      "dependencies": ["clsx", "tailwind-merge"],
      "registryDependencies": [],
      "files": [
        {
          "path": "./src/components/atomic-ui/my-button.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}`,
                        "registry-cli"
                      )
                    }
                    className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                  >
                    {copiedCode === "registry-cli" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "test-component",
      title: "Test & Deploy",
      icon: <Terminal className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">
              Step 3: Test và Deploy
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">1. Test Local</h4>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm">npm run dev</code>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Kiểm tra component tại <code>/components</code> và{" "}
                  <code>/playground</code>
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">2. Test CLI</h4>
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <div>
                    <code className="text-sm">
                      node src/cli/bin/index.js list
                    </code>
                  </div>
                  <div>
                    <code className="text-sm">
                      node src/cli/bin/index.js add my-button
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">3. Commit & Push</h4>
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <div>
                    <code className="text-sm">git add .</code>
                  </div>
                  <div>
                    <code className="text-sm">
                      git commit -m &quot;feat: add my-button component&quot;
                    </code>
                  </div>
                  <div>
                    <code className="text-sm">git push origin main</code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">4. Test từ GitHub</h4>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm">
                    npx atomic-ui-cli add my-button
                  </code>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  CLI sẽ fetch từ GitHub repository và install component
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3">📋 Checklist</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Component file created</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Demo file created</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Web registry updated</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>CLI registry updated</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Local testing passed</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>CLI testing passed</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Code pushed to GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const activeStepData = steps.find((step) => step.id === activeStep);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                DEV ONLY
              </div>
              <h1 className="text-4xl font-bold">Developer Guide</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Hướng dẫn từng bước để thêm mới và chỉnh sửa components
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-4 sticky top-8">
                <h3 className="font-semibold mb-4">Các bước</h3>
                <nav className="space-y-2">
                  {steps.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`w-full text-left px-3 py-3 rounded-md text-sm transition-colors flex items-center gap-3 ${
                        activeStep === step.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded">
                          {index + 1}
                        </span>
                        {step.icon}
                      </div>
                      <span className="font-medium">{step.title}</span>
                      {activeStep === step.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeStepData && (
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    {activeStepData.icon}
                    <h2 className="text-3xl font-bold">
                      {activeStepData.title}
                    </h2>
                  </div>
                  {activeStepData.content}
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
