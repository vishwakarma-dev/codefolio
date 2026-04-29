import { ProjectCard } from "@app/components/ProjectCard";
import { ProjectDetailDialog } from "@app/components/ProjectDetailsDialog";
import { PageHero } from "@app/components/ui/PageHero";
import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import type { Project } from "../../types";
import { Construction } from "@mui/icons-material";
import { Box, Chip, Container, Grid, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";
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
  const [filterVersion, setFilterVersion] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);

  if (!data) return null;

  const filteredProjects =
    filter === "All"
      ? data.PROJECTS
      : data.PROJECTS.filter((project) => project.category === filter);

  const handleFilterChange = (category: "All" | Project["category"]) => {
    if (category === filter) return;
    setFilter(category);
    setFilterVersion((current) => current + 1);
  };

  return (
    <SinglePageSection id="projects">
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 7, md: 8 }, pb: { xs: 10, md: 12 } }}
      >
        <PageHero
          label="Engineering Portfolio"
          icon={<Construction color="primary" fontSize="small" />}
          title="Selected"
          highlight="Work"
          description="From architecture to interface, these projects focus on reliability, maintainability, and measurable business impact."
          sx={{ mb: { xs: 4, md: 5 } }}
        />

        <Box
          sx={(theme) => ({
            mb: { xs: 4, md: 5 },
            p: 0.75,
            display: "inline-flex",
            maxWidth: "100%",
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            bgcolor:
              theme.palette.mode === "dark"
                ? alpha(theme.palette.background.paper, 0.62)
                : alpha(theme.palette.common.white, 0.7),
            overflowX: "auto",
          })}
        >
          <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
            {PROJECT_CATEGORIES.map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                onClick={() => handleFilterChange(category)}
                color={filter === category ? "primary" : "default"}
                variant={filter === category ? "filled" : "outlined"}
                sx={{
                  borderRadius: 1.5,
                  fontWeight: 800,
                  px: 0.6,
                  borderColor: "transparent",
                  transition:
                    "transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease",
                  "&:hover": {
                    transform: "translateY(-1px)",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        <Grid
          key={`${filter}-${filterVersion}`}
          container
          spacing={2.5}
          className="project-filter-grid"
        >
          {filteredProjects.map((project, index) => (
            <Grid
              key={project.id}
              size={{ xs: 12, sm: 6, md: 4 }}
              className="project-card-enter"
              sx={{ animationDelay: `${index * 70}ms` }}
            >
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
