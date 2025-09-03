export const siteConfig = {
  name: "My UI",
  description: "A modern React and Next.js based UI component library",
  url:
    process.env.NODE_ENV !== "development"
      ? "https://my-ui.vercel.app"
      : "http://localhost:3000",
  ogImage: "https://my-ui.vercel.app/og-image.png",
  creator: "Your Name",
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
