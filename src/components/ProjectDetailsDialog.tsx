import { Project } from "@app/types";
import { Close, GitHub, Layers, RocketLaunch } from "@mui/icons-material";
import { 
    Dialog, Fade, useTheme, Box, IconButton, Chip, DialogContent, Stack, Typography, 
    Button
} from "@mui/material";

export const ProjectDetailDialog: React.FC<{ project: Project | null, open: boolean, onClose: () => void }> = ({ project, open, onClose }) => {
    const theme = useTheme();
    if (!project) return null;
  
    return (
      <Dialog 
        open={open} 
        onClose={onClose} 
        maxWidth="md" 
        fullWidth 
        TransitionComponent={Fade}
        PaperProps={{ sx: { bgcolor: 'background.paper', border: `1px solid ${theme.palette.divider}` } }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton 
            onClick={onClose} 
            sx={{ position: 'absolute', right: 16, top: 16, zIndex: 10, bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}
          >
            <Close />
          </IconButton>
          
          <Box sx={{ height: { xs: 200, md: 400 }, width: '100%', overflow: 'hidden' }}>
            <Box component="img" src={project.imageUrl} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
  
          <DialogContent sx={{ p: { xs: 3, md: 6 } }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label={project.category} color="primary" size="small" sx={{ fontWeight: 800 }} />
            </Stack>
  
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 3, fontFamily: 'Space Grotesk' }}>
              {project.title}
            </Typography>
  
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4, fontSize: '1.1rem' }}>
              {project.longDescription}
            </Typography>
  
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Layers color="primary" /> Technical Stack
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 5 }}>
              {project.techStack.map(tech => (
                <Chip key={tech} label={tech} sx={{ fontWeight: 700, border: `1px solid ${theme.palette.divider}`, bgcolor: 'transparent' }} />
              ))}
            </Stack>
  
            <Stack direction="row" spacing={2}>
              <Button variant="contained" startIcon={<RocketLaunch />} sx={{ px: 4, py: 1.2, fontWeight: 700 }}>Live Demo</Button>
              <Button variant="outlined" startIcon={<GitHub />} sx={{ px: 4, py: 1.2, fontWeight: 700 }}>Source Code</Button>
            </Stack>
          </DialogContent>
        </Box>
      </Dialog>
    );
  };