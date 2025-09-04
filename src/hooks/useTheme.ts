import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export default function useTheme() {
  const {
    resolvedTheme: nextThemeResolvedTheme,
    setTheme: setNextTheme,
    ...rest
  } = useNextTheme();

  //
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    setTheme(nextThemeResolvedTheme as "light" | "dark");
  }, [nextThemeResolvedTheme]);

  return { resolvedTheme: theme, setTheme: setNextTheme, ...rest };
}
