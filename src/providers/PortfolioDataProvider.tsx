import {
  getPortfolioData,
  type PortfolioData,
} from "@app/services/dataService";
import { Box, CircularProgress, NoSsr } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export const PortfolioDataContext = createContext<PortfolioData | null>(null);

export const PortfolioDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolioData()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <NoSsr>
        <Box sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
          <CircularProgress />
        </Box>
      </NoSsr>
    );

  return (
    <PortfolioDataContext.Provider value={data}>
      {children}
    </PortfolioDataContext.Provider>
  );
};
