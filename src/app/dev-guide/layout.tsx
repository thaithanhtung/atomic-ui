import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Developer Guide",
  description: "Step-by-step guide for adding and editing components",
};

export default function DevGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Chỉ hiển thị trong development mode
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return children;
}
