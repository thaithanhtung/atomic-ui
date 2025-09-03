import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description: "Experiment with components and see changes in real-time",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
