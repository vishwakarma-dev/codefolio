import { KeyboardArrowUp } from "@mui/icons-material";
import { Fade, IconButton, Tooltip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 480);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={isVisible}>
      <Tooltip title="Scroll to top" placement="left" arrow>
        <IconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          sx={(theme) => ({
            position: "fixed",
            right: { xs: 18, md: 28 },
            bottom: { xs: 18, md: 28 },
            zIndex: 1300,
            width: 46,
            height: 46,
            borderRadius: 2,
            border: `1px solid ${theme.palette.divider}`,
            bgcolor:
              theme.palette.mode === "dark"
                ? alpha(theme.palette.background.paper, 0.82)
                : alpha(theme.palette.common.white, 0.86),
            color: "text.primary",
            backdropFilter: "blur(12px)",
            boxShadow:
              theme.palette.mode === "dark"
                ? `0 14px 34px ${alpha("#020617", 0.34)}`
                : `0 14px 34px ${alpha(theme.palette.text.primary, 0.12)}`,
            transition:
              "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
            "&:hover": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
              borderColor: "primary.main",
              transform: "translateY(-3px)",
            },
          })}
        >
          <KeyboardArrowUp />
        </IconButton>
      </Tooltip>
    </Fade>
  );
};
