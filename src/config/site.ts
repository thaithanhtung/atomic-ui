export const siteConfig = {
  name: "Atomic UI",
  description: "A modern React and Next.js based UI component library",
  url:
    process.env.NODE_ENV !== "development"
      ? "https://atomic-ui.vercel.app"
      : "http://localhost:3000",
  ogImage: "https://atomic-ui.vercel.app/og-image.png",
  creator: "Tung Thai",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "UI Components",
    "Component Library",
    "TypeScript",
    "Animation",
  ],
};
