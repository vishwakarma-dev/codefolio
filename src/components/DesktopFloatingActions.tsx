import { Description, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

export const DESKTOP_FLOATING_ACTIONS = {
    actions: [
      {
        key: "email",
        label: "Email me",
        href: "mailto:vaibhav.satokar@outlook.com",
        icon: Email,
      },
      {
        key: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/vaibhav-satokar/",
        icon: LinkedIn,
        external: true,
      },
      {
        key: "github",
        label: "GitHub",
        href: "https://github.com/vishwakarma-dev",
        icon: GitHub,
        external: true,
      },
      {
        key: "cv",
        label: "Download CV",
        href: "/Vaibhav_Satokar_CV.pdf",
        icon: Description,
        variant: "secondary",
        external: true,
      },
    ],
  };

const baseFabStyle = {
  border: "2px solid",
  borderColor: "palette.secondary",
  width: 52,
  height: 52,
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  transition: "all 0.25s ease",
  "&:hover": {
    bgcolor: "primary.main",
    color: "primary.contrastText",
    transform: "translateX(2px)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.15)"
  },
};

export const DesktopFloatingActions = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        display: { xs: "none", md: "none", lg : "flex" },
        flexDirection: "column",
        gap: 2,
        zIndex: 1200,
      }}
    >
      {DESKTOP_FLOATING_ACTIONS.actions.map((action) => {
        const Icon = action.icon;

        return (
          <Tooltip
            key={action.key}
            title={action.label}
            placement="right"
            arrow
          >
            <IconButton
              component="a"
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              sx={(theme) => ({
                ...baseFabStyle,
                borderColor : theme.palette.secondary.main,
                ...(action.variant === "secondary" && {
                  bgcolor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  "&:hover": {
                    bgcolor: theme.palette.secondary.dark,
                    color: theme.palette.secondary.contrastText,
                    transform: "translateX(4px)",
                  },
                }),
              })}
            >
              <Icon />
            </IconButton>
          </Tooltip>
        );
      })}
    </Box>
  );
};
