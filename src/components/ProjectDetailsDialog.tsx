import type { Project } from "@app/types";
import { Close, GitHub, Layers, RocketLaunch } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  Fade,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export const ProjectDetailDialog: React.FC<{
  project: Project | null;
  open: boolean;
  onClose: () => void;
}> = ({ project, open, onClose }) => {
  const theme = useTheme();
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Fade}
      PaperProps={{
        sx: {
          bgcolor: "background.paper",
          border: `1px solid ${theme.palette.divider}`,
          maxHeight: "86vh",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            zIndex: 10,
            bgcolor: "rgba(0,0,0,0.5)",
            color: "white",
            p: 0.8,
            "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
          }}
        >
          <Close />
        </IconButton>

        <Box
          sx={{
            height: { xs: 160, md: 220 },
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={project.imageUrl}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <DialogContent sx={{ p: { xs: 2.2, md: 3 } }}>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Chip
              label={project.category}
              color="primary"
              size="small"
              sx={{ fontWeight: 800 }}
            />
          </Stack>

          <Typography
            variant="h4"
            sx={{ fontWeight: 900, mb: 1.4, fontFamily: "Space Grotesk" }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.7,
              mb: 2.6,
            }}
          >
            {project.longDescription}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 800,
              mb: 1.2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Layers color="primary" /> Technical Stack
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: 3 }}
          >
            {project.techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  fontWeight: 700,
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: "transparent",
                }}
              />
            ))}
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2}>
            <Button
              variant="contained"
              startIcon={<RocketLaunch />}
              size="small"
              sx={{ px: 2.2, py: 0.8, fontWeight: 700 }}
            >
              Live Demo
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHub />}
              size="small"
              sx={{ px: 2.2, py: 0.8, fontWeight: 700 }}
            >
              Source Code
            </Button>
          </Stack>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
