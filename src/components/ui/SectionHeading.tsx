import { Avatar, Stack, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  icon: ReactNode;
  uppercase?: boolean;
  sx?: SxProps<Theme>;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  icon,
  uppercase = true,
  sx,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.5}
      sx={{ mb: 3, ...sx }}
    >
      <Avatar
        sx={{
          bgcolor: "background.paper",
          width: 34,
          height: 34,
          border: 1,
          borderColor: "divider",
        }}
      >
        {icon}
      </Avatar>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          fontFamily: "Space Grotesk",
          textTransform: uppercase ? "uppercase" : "none",
          letterSpacing: 1.2,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};
