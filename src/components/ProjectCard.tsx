import { GitHub, OpenInNew } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import type React from "react";
import type { Project } from "../../types";

export const ProjectCard: React.FC<{
  project: Project;
  onOpen: (p: Project) => void;
}> = ({ project, onOpen }) => {
  const theme = useTheme();
  return (
    <Card
      onClick={() => onOpen(project)}
      sx={{
        height: "100%",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        bgcolor:
          theme.palette.mode === "dark"
            ? alpha(theme.palette.background.paper, 0.72)
            : alpha(theme.palette.background.paper, 0.92),
        border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
        boxShadow: "none",
        transition:
          "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          borderColor: alpha(theme.palette.primary.main, 0.45),
          transform: "translateY(-5px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? `0 14px 34px ${alpha("#020617", 0.34)}`
              : `0 14px 34px ${alpha(theme.palette.text.primary, 0.08)}`,
          "& .project-image": {
            opacity: theme.palette.mode === "dark" ? 0.84 : 0.78,
            transform: "scale(1.025)",
          },
          "& .project-actions-overlay": { opacity: 1 },
          "& .project-actions": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "& .project-title": {
            color: "primary.main",
          },
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden", pt: "38%" }}>
        <CardMedia
          className="project-image"
          component="img"
          image={project.imageUrl}
          alt={project.title}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              theme.palette.mode === "dark"
                ? `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0)} 0%, ${alpha(theme.palette.background.paper, 0.18)} 58%, ${theme.palette.background.paper} 100%)`
                : `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0)} 0%, ${alpha(theme.palette.background.paper, 0.28)} 58%, ${theme.palette.background.paper} 100%)`,
            pointerEvents: "none",
          }}
        />
        <Box
          className="project-actions-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            opacity: 0,
            transition: "opacity 0.25s ease",
            background:
              theme.palette.mode === "dark"
                ? "rgba(2, 6, 23, 0.58)"
                : "rgba(15, 23, 42, 0.38)",
            display: "grid",
            placeItems: "center",
            p: 1.5,
          }}
        >
          <Stack
            className="project-actions"
            direction="row"
            spacing={1}
            sx={{
              opacity: 0,
              transform: "translateY(6px)",
              transition: "all 0.25s ease",
            }}
          >
            <Button
              size="small"
              variant="contained"
              startIcon={<OpenInNew fontSize="small" />}
              component="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              sx={{ px: 1.6, py: 0.45, fontWeight: 800, borderRadius: 1.5 }}
            >
              Preview
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<GitHub fontSize="small" />}
              component="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              sx={{
                px: 1.6,
                py: 0.45,
                fontWeight: 800,
                borderRadius: 1.5,
                bgcolor: "rgba(255,255,255,0.92)",
                color: "#0f172a",
                borderColor: "rgba(255,255,255,0.95)",
                "&:hover": { bgcolor: "#fff", borderColor: "#fff" },
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Box>
      <CardContent sx={{ flexGrow: 1, p: { xs: 2.2, md: 2.6 } }}>
        <Typography
          variant="overline"
          sx={{
            fontWeight: 900,
            color: "primary.main",
            letterSpacing: 1,
            fontSize: "0.65rem",
          }}
        >
          {project.category}
        </Typography>
        <Typography
          className="project-title"
          variant="h6"
          sx={{
            fontWeight: 900,
            mb: 0.8,
            fontFamily: "Space Grotesk",
            lineHeight: 1.18,
            transition: "color 180ms ease",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 2,
            minHeight: 42,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            fontSize: "0.9rem",
            lineHeight: 1.55,
          }}
        >
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {project.techStack.slice(0, 2).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                height: 24,
                borderRadius: 1.2,
                fontWeight: 700,
                bgcolor: "transparent",
              }}
            />
          ))}
          {project.techStack.length > 2 && (
            <Typography
              variant="caption"
              sx={{
                color: "text.disabled",
                alignSelf: "center",
                fontWeight: 800,
                fontSize: "0.72rem",
              }}
            >
              +{project.techStack.length - 2} more
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
