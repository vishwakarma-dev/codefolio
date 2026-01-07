import React, { useState, useEffect, useContext } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer 
} from 'recharts';
import { 
  Box, Container, Typography, Grid, Stack, useTheme, Paper, Avatar, Tooltip
} from '@mui/material';
import { 
  Terminal, Code, Architecture, TipsAndUpdates, Construction, Storage 
} from '@mui/icons-material';
import { PortfolioDataContext } from '@app/providers/PortfolioDataProvider';
import { Skill } from '@app/types';
import { SkillCard } from '@app/components/SkillVisualizer';
import Head from 'next/head';


const SkillsPage: React.FC = () => {
  const theme = useTheme();
  const [isAnimate, setIsAnimate] = useState(false);
  const data = useContext(PortfolioDataContext);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!data) return null;

  const groupedSkills = data.SKILLS.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const radarData = [
    { subject: 'Frontend', A: 95 },
    { subject: 'Backend', A: 85 },
    { subject: 'Cloud', A: 75 },
    { subject: 'Data', A: 90 },
    { subject: 'Architecture', A: 80 },
    { subject: 'Tools', A: 95 },
  ];

  const getIcon = (cat: string) => {
    switch(cat.toLowerCase()){
      case 'frontend': return <Code fontSize="small" />;
      case 'backend': return <Terminal fontSize="small" />;
      case 'database': return <Storage fontSize="small" />;
      case 'tools': return <Construction fontSize="small" />;
      default: return <TipsAndUpdates fontSize="small" />;
    }
  };

  return (
    <>
      <Head>
        <title>
          Vaibhav Satokar : Skills
        </title>
      </Head>
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Box sx={{ mb: 10 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <Architecture color="primary" fontSize="small" />
            <Typography variant="overline" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 2 }}>Competency Matrix</Typography>
          </Stack>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, fontFamily: 'Space Grotesk' }}>
            Technical <Box component="span" sx={{ color: 'primary.main' }}>Arsenal</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 700 }}>
            A curated selection of languages, frameworks, and tools I use to build modern, scalable engineering solutions.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack spacing={6}>
              {/* Fix: Cast Object.entries result to resolve 'unknown' type inference which caused map error on line 155 */}
              {(Object.entries(groupedSkills) as [string, Skill[]][]).map(([category, skills]) => (
                <Box key={category}>
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>{getIcon(category)}</Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 900, fontFamily: 'Space Grotesk', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                      {category}
                    </Typography>
                  </Stack>
                  <Grid container spacing={2}>
                    {skills.map(skill => (
                      <Grid key={skill.name} size={{ xs: 6, sm: 4, md: 3 }}>
                        <SkillCard skill={skill} animate={isAnimate} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 5, height: 450, display: 'flex', flexDirection: 'column', 
                  alignItems: 'center', justifyContent: 'center',
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: 'background.paper',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, bgcolor: 'primary.main', opacity: 0.05, borderRadius: '50%', filter: 'blur(50px)' }} />
                
                <Typography variant="overline" sx={{ fontWeight: 900, color: 'text.disabled', mb: 4 }}>System Architecture</Typography>
                
                <ResponsiveContainer width="100%" height="80%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke={theme.palette.divider} />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: theme.palette.text.secondary, fontSize: 12, fontWeight: 700 }} />
                    <Radar
                      name="Proficiency"
                      dataKey="A"
                      stroke={theme.palette.primary.main}
                      strokeWidth={3}
                      fill={theme.palette.primary.main}
                      fillOpacity={0.15}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                
                <Typography variant="caption" sx={{ mt: 3, color: 'text.disabled', textAlign: 'center', fontWeight: 700 }}>
                  Full-lifecycle engineering perspective.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SkillsPage