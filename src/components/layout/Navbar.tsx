"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const Navbar = () => {
  const [stars, setStars] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/thaithanhtung/atomic-ui"
        );
        const data = await response.json();
        console.log(data);
        setStars(data.stargazers_count || 0);
      } catch (error) {
        console.error("Error fetching stars:", error);
      }
    }

    fetchStars();
  }, []);

  // Show navbar on all pages
  // if (pathName.includes("docs") || pathName.includes("preview")) return null;

  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl lg:text-3xl font-bold">
            Clik Atomic UI
          </Link>
          <span className="bg-primary/10 text-primary rounded-full font-semibold px-2 py-0.5 text-xs hidden lg:block">
            Beta
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((nav) => (
            <Link
              key={nav.id}
              href={nav.url}
              className={`font-medium transition-colors hover:text-primary flex items-center gap-2 ${
                pathName === nav.url ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {nav.name}
              {nav.isDev && (
                <span className="bg-yellow-500 text-black px-1.5 py-0.5 rounded text-xs font-bold">
                  DEV
                </span>
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://discord.gg/your-discord"
            target="_blank"
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            <FaDiscord className="text-xl" />
          </Link>
          <Link
            href="https://github.com/thaithanhtung/atomic-ui"
            target="_blank"
            className="flex items-center gap-2 p-2 rounded-full hover:bg-accent transition-colors"
          >
            <FaGithub className="text-xl" />
            {stars > 0 && <span className="text-sm font-medium">{stars}</span>}
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
export { Navbar };

interface NavigationItem {
  id: number;
  name: string;
  url: string;
  isDev?: boolean;
}

const navigation: NavigationItem[] = [
  {
    id: 1,
    name: "Docs",
    url: "/docs",
  },
  {
    id: 2,
    name: "Components",
    url: "/components",
  },
  {
    id: 3,
    name: "Playground",
    url: "/playground",
  },
  // Chỉ hiển thị trong development
  ...(process.env.NODE_ENV === "development"
    ? [
        {
          id: 4,
          name: "Dev Guide",
          url: "/dev-guide",
          isDev: true,
        },
      ]
    : []),
];
