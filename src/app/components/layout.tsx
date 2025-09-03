import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Explore and interact with all available Clik Atomic UI components",
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
