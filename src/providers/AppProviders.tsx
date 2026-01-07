
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useColorMode } from './ColorModeProvider';
import { PortfolioDataProvider } from './PortfolioDataProvider';

import { getTheme } from '@app/theme/themeFactory';

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
