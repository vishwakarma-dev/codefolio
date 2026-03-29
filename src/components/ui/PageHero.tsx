import { Box, Stack, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: string;
  highlight?: string;
  description: string;
  icon?: ReactNode;
  align?: "left" | "center";
  sx?: SxProps<Theme>;
  descriptionMaxWidth?: number;
}

export const PageHero: React.FC<PageHeroProps> = ({
  label,
  title,
  highlight,
  description,
  icon,
  align = "left",
  sx,
  descriptionMaxWidth = 720,
}) => {
  const centered = align === "center";

  return (
    <Box sx={sx}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent={centered ? "center" : "flex-start"}
        sx={{ mb: 1.5 }}
      >
        {icon}
        <Typography
          variant="overline"
          sx={{ fontWeight: 900, color: "primary.main", letterSpacing: 2.4 }}
        >
          {label}
        </Typography>
      </Stack>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          mb: 2,
          fontFamily: "Space Grotesk",
          textAlign: centered ? "center" : "left",
          lineHeight: 1.08,
        }}
      >
        {title}
        {highlight ? (
          <>
            {" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              {highlight}
            </Box>
          </>
        ) : null}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          maxWidth: descriptionMaxWidth,
          mx: centered ? "auto" : 0,
          lineHeight: 1.7,
          textAlign: centered ? "center" : "left",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
