import { Skill } from '@app/types';
import { useTheme } from '@mui/material';
import { Box, Paper, Tooltip, Typography } from '@mui/material';

// Mapping skill names to SimpleIcons slugs
const iconMap: Record<string, string> = {
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'React JS': 'react',
  '.Net Core': 'dotnet',
  'C#': 'csharp',
  'MSSQL': 'microsoftsqlserver',
  'MongoDB': 'mongodb',
  'Python': 'python',
  'Gemini AI': 'google-gemini',
  'Git / GitHub': 'github',
  'Docker': 'docker',
  'Node.js': 'nodedotjs',
  'Material UI': 'mui',
  'Bootstrap': 'bootstrap',
  'Canva': 'canva',
  'Visual Studio': 'visualstudio',
  'VS Code': 'visualstudiocode',
  'Postman': 'postman'
};

export const SkillCard: React.FC<{ skill: Skill; animate: boolean }> = ({ skill, animate }) => {
  const theme = useTheme();
  const slug = iconMap[skill.name] || 'code';
  const iconUrl = `https://cdn.simpleicons.org/${slug}/${theme.palette.mode === 'dark' ? 'ffffff' : '000000'}`;

  return (
    <Tooltip title={`Proficiency: ${skill.level}%`} arrow>
      <Paper 
        elevation={2}
        sx={{ 
          p: 2.5, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: 1.5,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '12px',
          bgcolor: 'background.paper',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          opacity: animate ? 1 : 0,
          transform: animate ? 'translateY(0)' : 'translateY(20px)',
          '&:hover': {
            borderColor: 'primary.main',
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: theme.palette.mode === 'dark' ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(99, 102, 241, 0.1)',
            '& img': {
              filter: `drop-shadow(0 0 8px ${theme.palette.primary.main}44)`
            }
          }
        }}
      >
        <Box 
          component="img" 
          src={iconUrl} 
          alt={skill.name}
          sx={{ 
            width: 40, 
            height: 40, 
            objectFit: 'contain',
            transition: 'filter 0.3s ease'
          }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const img = e.currentTarget;
            img.onerror = null; // 🔑 stop infinite retries
          }}
        />
        <Typography variant="body2" sx={{ fontWeight: 800, fontSize: '0.85rem', textAlign: 'center' }}>
          {skill.name}
        </Typography>
      </Paper>
    </Tooltip>
  );
};

