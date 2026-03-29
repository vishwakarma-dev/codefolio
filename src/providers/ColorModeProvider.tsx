import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useColorMode = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const value = useMemo(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode],
  );

  return value;
};
