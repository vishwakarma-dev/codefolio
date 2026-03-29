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
import type React from "react";
import type { Project } from "../types";

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
        border: `1px solid ${theme.palette.divider}`,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "primary.main",
          transform: "translateY(-5px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 18px 36px rgba(0,0,0,0.5)"
              : "0 18px 36px rgba(99, 102, 241, 0.12)",
          "& .project-image": { transform: "scale(1.06)" },
          "& .project-actions-overlay": { opacity: 1 },
          "& .project-actions": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden", pt: "52%" }}>
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
            transition: "transform 0.7s ease",
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
                ? "linear-gradient(180deg, rgba(2,6,23,0.22), rgba(2,6,23,0.58))"
                : "linear-gradient(180deg, rgba(15,23,42,0.14), rgba(15,23,42,0.4))",
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
              sx={{ px: 1.6, py: 0.45, fontWeight: 800 }}
            >
              Live Preview
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
            letterSpacing: 1.4,
            fontSize: "0.65rem",
          }}
        >
          {project.category}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            mb: 0.8,
            fontFamily: "Space Grotesk",
            lineHeight: 1.2,
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
              sx={{ fontWeight: 700, bgcolor: "action.hover", height: 24 }}
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
