import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  isRight?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  date,
  description,
  isRight,
  isFirst,
  isLast,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const alignRight = isMobile ? true : isRight;

  return (
    <Box sx={{ position: "relative", minHeight: 150, mb: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          position: "absolute",
          left: { xs: 20, md: "50%" },
          top: 0,
          width: 16,
          height: 16,
          bgcolor: isFirst ? "primary.main" : "background.paper",
          border: `3px solid ${theme.palette.primary.main}`,
          borderRadius: "50%",
          zIndex: 3,
          transform: "translateX(-50%)",
          boxShadow: isFirst
            ? `0 0 10px ${theme.palette.primary.main}`
            : "none",
        }}
      />
      {!isLast && (
        <Box
          sx={{
            position: "absolute",
            left: { xs: 20, md: "50%" },
            top: 16,
            bottom: -64,
            width: 2,
            bgcolor: theme.palette.divider,
            zIndex: 1,
            transform: "translateX(-50%)",
          }}
        />
      )}
      <Grid container>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            order: alignRight ? 2 : 1,
            pl: { xs: 6, md: alignRight ? 4 : 0 },
            pr: { xs: 0, md: alignRight ? 0 : 4 },
            textAlign: { xs: "left", md: alignRight ? "left" : "right" },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              fontWeight: 900,
              color: isFirst ? "primary.main" : "text.disabled",
              letterSpacing: 2,
              display: "block",
              mb: 0.5,
            }}
          >
            {date}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              fontFamily: "Space Grotesk",
              lineHeight: 1.2,
              mb: 0.5,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color: "text.secondary",
              mb: 1.5,
              display: "block",
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              maxWidth: { md: 400 },
              ml: alignRight ? 0 : "auto",
              mr: alignRight ? "auto" : 0,
            }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            order: alignRight ? 1 : 2,
            display: { xs: "none", md: "block" },
          }}
        />
      </Grid>
    </Box>
  );
};
