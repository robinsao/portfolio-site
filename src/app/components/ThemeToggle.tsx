"use client";

import useTheme from "@/hooks/useTheme";
import { ThemeToggleButton } from "./shadcn-io/theme-toggle-button";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  console.log();

  return (
    <ThemeToggleButton
      className={cn("hover:cursor-pointer dark:bg-background", className)}
      theme={resolvedTheme as "light" | "dark"}
      variant="circle-blur"
      showLabel
      onClick={() => toggleTheme()}
    />
  );
}
