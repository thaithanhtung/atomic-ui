"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const pathName = usePathname();

  if (pathName.includes("docs") || pathName.includes("preview")) return null;

  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-full lg:col-span-1">
            <h3 className="text-2xl lg:text-3xl font-bold">Atomic UI</h3>
            <p className="text-muted-foreground max-w-xs">
              Beautifully crafted, accessible components built with Tailwind CSS
              perfect for modern developers and creative teams.
            </p>
          </div>

          <div className="space-y-4">
            <h6 className="font-semibold text-lg">Products</h6>
            <div className="space-y-2">
              <Link
                href="/components"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Components
              </Link>
              <Link
                href="/docs"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h6 className="font-semibold text-lg">Company</h6>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/playground"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Playground
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h6 className="font-semibold text-lg">Contact</h6>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-muted-foreground">
                <IoLocationOutline className="mt-0.5 flex-shrink-0" />
                <span>Your Location</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MdOutlineMail className="flex-shrink-0" />
                <span>your-email@example.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            {footerNavigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathName === item.url
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Created by{" "}
            <Link
              href="https://github.com/your-username"
              target="_blank"
              className="text-primary hover:underline font-medium"
            >
              Your Name
            </Link>{" "}
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };

const footerNavigation = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Docs", url: "/docs" },
  { id: 3, name: "Components", url: "/components" },
  { id: 4, name: "About", url: "/about" },
  { id: 5, name: "Playground", url: "/playground" },
];
