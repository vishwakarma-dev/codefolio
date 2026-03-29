import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") => {
  const isLight = mode === "light";

  return createTheme({
    palette: {
      mode,
      primary: { main: "#6366f1" },
      secondary: { main: "#ec4899" },
      background: {
        default: isLight ? "#f5f7fb" : "#050816",
        paper: isLight ? "#ffffff" : "#0f172a",
      },
      text: {
        primary: isLight ? "#0f172a" : "#e2e8f0",
        secondary: isLight ? "#475569" : "#94a3b8",
      },
      divider: isLight ? "rgba(15, 23, 42, 0.1)" : "rgba(148, 163, 184, 0.18)",
    },
    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily: "'Inter', 'Space Grotesk', sans-serif",
      h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900 },
      h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900 },
      h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 },
      h4: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 },
      h5: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 },
      h6: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 },
      overline: { fontWeight: 900, letterSpacing: 2.2 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: isLight
              ? "radial-gradient(circle at 10% 10%, rgba(99,102,241,0.08) 0, rgba(99,102,241,0) 40%), radial-gradient(circle at 80% 0%, rgba(236,72,153,0.06) 0, rgba(236,72,153,0) 32%)"
              : "radial-gradient(circle at 10% 10%, rgba(99,102,241,0.2) 0, rgba(99,102,241,0) 45%), radial-gradient(circle at 80% 0%, rgba(236,72,153,0.15) 0, rgba(236,72,153,0) 35%)",
            backgroundAttachment: "fixed",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 18,
            border: `1px solid ${isLight ? "rgba(15, 23, 42, 0.08)" : "rgba(148, 163, 184, 0.18)"}`,
            boxShadow: isLight
              ? "0 14px 36px rgba(15, 23, 42, 0.08)"
              : "0 20px 40px rgba(2, 6, 23, 0.45)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: `1px solid ${isLight ? "rgba(15, 23, 42, 0.08)" : "rgba(148, 163, 184, 0.2)"}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: 20,
            fontWeight: 800,
            textTransform: "none",
          },
          contained: {
            boxShadow: "0 10px 26px rgba(99,102,241,0.35)",
            "&:hover": {
              boxShadow: "0 14px 32px rgba(99,102,241,0.45)",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            fontWeight: 700,
          },
        },
      },
    },
  });
};
