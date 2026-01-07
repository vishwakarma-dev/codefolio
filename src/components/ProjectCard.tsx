import React from 'react';
import { 
  Box, Typography, Card, CardMedia, CardContent, 
  Chip, Stack, useTheme, IconButton
} from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { Project } from '../types';


export const ProjectCard: React.FC<{ project: Project, onOpen: (p: Project) => void }> = ({ project, onOpen }) => {
  const theme = useTheme();
  return (
    <Card 
      onClick={() => onOpen(project)}
      sx={{ 
        height: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column',
        border: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-8px)',
          boxShadow: theme.palette.mode === 'dark' ? '0 30px 60px rgba(0,0,0,0.6)' : '0 30px 60px rgba(99, 102, 241, 0.1)',
          '& .project-image': { transform: 'scale(1.1)' }
        }
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: '60%' }}>
        <CardMedia
          className="project-image"
          component="img"
          image={project.imageUrl}
          alt={project.title}
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transition: 'transform 1s ease' }}
        />
        <Stack direction="row" spacing={1} sx={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
          <IconButton size="small" sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: '#000', '&:hover': { bgcolor: '#fff' } }} onClick={(e) => e.stopPropagation()}>
            <GitHub fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="overline" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 2 }}>{project.category}</Typography>
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, fontFamily: 'Space Grotesk' }}>{project.title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, height: 44, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {project.techStack.slice(0, 3).map(tech => (
            <Chip key={tech} label={tech} size="small" sx={{ fontWeight: 700, bgcolor: 'action.hover' }} />
          ))}
          {project.techStack.length > 3 && <Typography variant="caption" sx={{ color: 'text.disabled', alignSelf: 'center', fontWeight: 800 }}>+{project.techStack.length - 3} more</Typography>}
        </Stack>
      </CardContent>
    </Card>
  );
};

