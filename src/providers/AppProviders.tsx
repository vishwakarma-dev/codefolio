import { getTheme } from "@app/theme/themeFactory";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { ColorModeContext, useColorMode } from "./ColorModeProvider";
import { PortfolioDataProvider } from "./PortfolioDataProvider";

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { mode, toggleColorMode } = useColorMode();
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <PortfolioDataProvider>
      <ColorModeContext.Provider value={{ toggleColorMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </PortfolioDataProvider>
  );
};
