import React, { useContext, useState } from 'react';
import { 
  Box, Container, Typography, Grid, Stack, Tabs, Tab, useTheme
} from '@mui/material';
import { PortfolioDataContext } from '@app/providers/PortfolioDataProvider';
import { Project } from '@app/types';
import { Construction } from '@mui/icons-material';
import { ProjectDetailDialog } from '@app/components/ProjectDetailsDialog';
import { ProjectCard } from '@app/components/ProjectCard';
import Head from 'next/head';

function ProjectsPage() {
  const data = useContext(PortfolioDataContext);
  const [filter, setFilter] = useState<'All' | Project['category']>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  if (!data) return null;

  const filtered = filter === 'All' ? data.PROJECTS : data.PROJECTS.filter(p => p.category === filter);
  const categories: ('All' | Project['category'])[] = ['All', 'Full Stack', 'Frontend', 'Mobile', 'AI/ML'];

  return (
    <>
      <Head>
        <title>
          Vaibhav Satokar : Projects
        </title>
      </Head>
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Box sx={{ mb: 8 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <Construction color="primary" fontSize="small" />
            <Typography variant="overline" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 2 }}>Engineering Portfolio</Typography>
          </Stack>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, fontFamily: 'Space Grotesk' }}>
            Powerful <Box component="span" sx={{ color: 'primary.main' }}>Solutions</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 650, mb: 6 }}>
            Building reliable, high-performance systems from the database layer to the user interface.
          </Typography>

          <Tabs 
            value={filter} 
            onChange={(_, val) => setFilter(val)} 
            sx={{ borderBottom: 1, borderColor: 'divider', mb: 6, '& .MuiTab-root': { fontWeight: 800 } }}
          >
            {categories.map(cat => <Tab key={cat} label={cat} value={cat} />)}
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {filtered.map(project => (
            <Grid key={project.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <ProjectCard project={project} onOpen={setSelected} />
            </Grid>
          ))}
        </Grid>

        <ProjectDetailDialog project={selected} open={!!selected} onClose={() => setSelected(null)} />
      </Container>
    </>
  );
};

export default ProjectsPage;