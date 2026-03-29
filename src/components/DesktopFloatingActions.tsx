import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import { Description, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import type { ElementType } from "react";
import { useContext } from "react";

type FloatingAction = {
  key: string;
  label: string;
  href: string;
  icon: ElementType;
  external?: boolean;
  variant?: "secondary";
};

export const DesktopFloatingActions = () => {
  const theme = useTheme();
  const data = useContext(PortfolioDataContext);

  if (!data) return null;
  const resumeFileName = decodeURIComponent(
    data.SOCIAL_LINKS.resume.split("/").pop() || "resume.pdf",
  );

  const actions: FloatingAction[] = [
    {
      key: "email",
      label: "Email me",
      href: `mailto:${data.SOCIAL_LINKS.email}`,
      icon: Email,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: data.SOCIAL_LINKS.linkedin,
      icon: LinkedIn,
      external: true,
    },
    {
      key: "github",
      label: "GitHub",
      href: data.SOCIAL_LINKS.github,
      icon: GitHub,
      external: true,
    },
    {
      key: "resume",
      label: "Download CV",
      href: data.SOCIAL_LINKS.resume,
      icon: Description,
      external: true,
      variant: "secondary",
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        gap: 1.5,
        zIndex: 1200,
      }}
    >
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <Tooltip key={action.key} title={action.label} placement="left" arrow>
            <IconButton
              component="a"
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              download={action.key === "resume" ? resumeFileName : undefined}
              sx={{
                width: 50,
                height: 50,
                border: `1px solid ${theme.palette.divider}`,
                bgcolor: "background.paper",
                color: "text.secondary",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  transform: "translateX(3px)",
                },
                ...(action.variant === "secondary" && {
                  bgcolor: "secondary.main",
                  color: "secondary.contrastText",
                  borderColor: "secondary.main",
                  "&:hover": {
                    bgcolor: "secondary.dark",
                    color: "secondary.contrastText",
                    transform: "translateX(3px)",
                  },
                }),
              }}
            >
              <Icon />
            </IconButton>
          </Tooltip>
        );
      })}
    </Box>
  );
};
