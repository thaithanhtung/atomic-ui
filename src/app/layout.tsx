import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My UI",
    template: "%s | My UI",
  },
  description: "A modern React and Next.js based UI component library",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "UI Components",
    "Component Library",
    "TypeScript",
    "Animation",
  ],
  authors: [
    {
      name: "Your Name",
      url: "https://your-website.com",
    },
  ],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-ui.vercel.app",
    title: "My UI",
    description: "A modern React and Next.js based UI component library",
    siteName: "My UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "My UI",
    description: "A modern React and Next.js based UI component library",
    creator: "@your_twitter",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen font-sans`}>
        <ThemeProvider>
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
