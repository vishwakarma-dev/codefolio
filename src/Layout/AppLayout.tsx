import { DesktopFloatingActions } from "@app/components/DesktopFloatingActions";
import Header from "@app/components/Header";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter();
  const disablePageScroll =
    router.pathname === "/" || router.pathname === "/contact";

  return (
    <Box
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 0% 0%, rgba(99,102,241,0.08), transparent 35%), radial-gradient(circle at 100% 0%, rgba(236,72,153,0.08), transparent 30%)",
          zIndex: 0,
        }}
      />
      {/* Top Navigation */}
      <Header />
      <DesktopFloatingActions />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          height: "calc(100dvh - 56px)",
          mt: "56px",
          overflowY: disablePageScroll ? "hidden" : "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
          overscrollBehavior: "contain",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
