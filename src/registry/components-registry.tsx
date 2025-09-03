import { GradientButton } from "@/components/atomic-ui/gradient-button";
import GradientButtonCode from "@/components/atomic-ui/gradient-button.tsx?raw";
import GradientButtonDemo from "@/components/atomic-ui/gradient-button-demo";
import GradientButtonDemoCode from "@/components/atomic-ui/gradient-button-demo.tsx?raw";

import { ShinyCard } from "@/components/atomic-ui/shiny-card";
import ShinyCardCode from "@/components/atomic-ui/shiny-card.tsx?raw";
import ShinyCardDemo from "@/components/atomic-ui/shiny-card-demo";
import ShinyCardDemoCode from "@/components/atomic-ui/shiny-card-demo.tsx?raw";

export interface ComponentRegistry {
  [key: string]: {
    component: React.ComponentType<Record<string, unknown>>;
    code: string;
    demo: React.ComponentType<Record<string, unknown>>;
    demoCode: string;
    title: string;
    description: string;
    dependencies: string[];
  };
}

export const componentsRegistry: ComponentRegistry = {
  "gradient-button": {
    component: GradientButton,
    code: GradientButtonCode,
    demo: GradientButtonDemo,
    demoCode: GradientButtonDemoCode,
    title: "Gradient Button",
    description:
      "An animated gradient border button with customizable colors and duration",
    dependencies: ["clsx", "tailwind-merge"],
  },
  "shiny-card": {
    component: ShinyCard,
    code: ShinyCardCode,
    demo: ShinyCardDemo,
    demoCode: ShinyCardDemoCode,
    title: "Shiny Card",
    description: "A card component with shimmer effect animation on hover",
    dependencies: ["clsx", "tailwind-merge"],
  },
};

export const getComponent = (name: string) => {
  return componentsRegistry[name];
};

export const getAllComponents = () => {
  return Object.keys(componentsRegistry).map((key) => ({
    name: key,
    ...componentsRegistry[key],
  }));
};
