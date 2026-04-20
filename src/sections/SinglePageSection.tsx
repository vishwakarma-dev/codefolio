import type { SectionId } from "@app/config/navigation";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

interface SinglePageSectionProps {
  id: SectionId;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export const SinglePageSection = ({
  id,
  children,
  sx,
}: SinglePageSectionProps) => {
  const baseSx: SxProps<Theme> = {
    position: "relative",
    scrollMarginTop: id === "home" ? 0 : { xs: "72px", md: "80px" },
  };

  return (
    <Box
      component="section"
      id={id}
      sx={[baseSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    >
      {children}
    </Box>
  );
};
