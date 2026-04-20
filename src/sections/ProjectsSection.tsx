import { ProjectCard } from "@app/components/ProjectCard";
import { ProjectDetailDialog } from "@app/components/ProjectDetailsDialog";
import { PageHero } from "@app/components/ui/PageHero";
import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import type { Project } from "@app/types";
import { Construction } from "@mui/icons-material";
import { Box, Chip, Container, Grid, Stack } from "@mui/material";
import { useContext, useState } from "react";

import { SinglePageSection } from "./SinglePageSection";

const PROJECT_CATEGORIES: ("All" | Project["category"])[] = [
  "All",
  "Full Stack",
  "Frontend",
  "Mobile",
  "AI/ML",
];

export const ProjectsSection = () => {
  const data = useContext(PortfolioDataContext);
  const [filter, setFilter] = useState<"All" | Project["category"]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  if (!data) return null;

  const filteredProjects =
    filter === "All"
      ? data.PROJECTS
      : data.PROJECTS.filter((project) => project.category === filter);

  return (
    <SinglePageSection id="projects">
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 7, md: 8 }, pb: { xs: 10, md: 12 } }}
      >
        <PageHero
          label="Engineering Portfolio"
          icon={<Construction color="primary" fontSize="small" />}
          title="Powerful"
          highlight="Solutions"
          description="From architecture to interface, these projects focus on reliability, maintainability, and measurable business impact."
          sx={{ mb: 7 }}
        />

        <Box sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
            {PROJECT_CATEGORIES.map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                onClick={() => setFilter(category)}
                color={filter === category ? "primary" : "default"}
                variant={filter === category ? "filled" : "outlined"}
                sx={{ fontWeight: 800, px: 0.6 }}
              />
            ))}
          </Stack>
        </Box>

        <Grid container spacing={2.5}>
          {filteredProjects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard project={project} onOpen={setSelected} />
            </Grid>
          ))}
        </Grid>

        <ProjectDetailDialog
          project={selected}
          open={Boolean(selected)}
          onClose={() => setSelected(null)}
        />
      </Container>
    </SinglePageSection>
  );
};
