import { TimelineItem } from "@app/components/TimeLineItem";
import { PageHero } from "@app/components/ui/PageHero";
import { AutoAwesome, Computer, Hub, Shield, Speed } from "@mui/icons-material";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { SinglePageSection } from "./SinglePageSection";

const guidingPrinciples = [
  {
    key: "performance",
    title: "Performance",
    description:
      "Optimize interaction speed and reduce load cost in every release.",
    icon: Speed,
  },
  {
    key: "scalability",
    title: "Scalability",
    description: "Build modular systems that evolve cleanly as features grow.",
    icon: Hub,
  },
  {
    key: "security",
    title: "Security",
    description:
      "Apply secure defaults across auth, data handling, and access control.",
    icon: Shield,
  },
  {
    key: "craft",
    title: "Code Craft",
    description:
      "Keep architecture readable and maintainable for long-term velocity.",
    icon: AutoAwesome,
  },
] as const;

export const AboutSection = () => (
  <SinglePageSection id="about">
    <Container
      maxWidth="lg"
      sx={{ pt: { xs: 7, md: 8 }, pb: { xs: 10, md: 12 } }}
    >
      <Grid
        container
        spacing={{ xs: 5, lg: 8 }}
        alignItems="center"
        sx={{ mb: 14 }}
      >
        <Grid size={{ xs: 12, lg: 7 }}>
          <PageHero
            label="Profile"
            icon={<Computer color="primary" fontSize="small" />}
            title="Solving Problems With"
            highlight="Modular Architecture"
            description="I build robust full-stack systems with .NET and React, focused on clear boundaries, maintainable code, and measurable business outcomes."
            sx={{ mb: 4 }}
          />

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.05rem",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            My engineering approach connects reliable backend architecture with
            intuitive interfaces. I enjoy turning complex workflows into
            streamlined digital experiences.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ flexWrap: "wrap" }}
            useFlexGap
          >
            <Paper sx={{ px: 3, py: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 900, color: "primary.main" }}
              >
                2+
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: 700 }}
              >
                Years Experience
              </Typography>
            </Paper>
            <Paper sx={{ px: 3, py: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 900, color: "primary.main" }}
              >
                15+
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: 700 }}
              >
                Systems Delivered
              </Typography>
            </Paper>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                inset: "-10% -6%",
                borderRadius: 4,
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.18), transparent 65%)",
                zIndex: 0,
              }}
            />
            <Paper sx={{ overflow: "hidden", position: "relative", zIndex: 1 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
                alt="Workspace setup"
                sx={{
                  width: "100%",
                  maxHeight: { xs: 400, md: "auto" }, 
                  display: "block",
                }}
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mb: 14 }}>
        <PageHero
          align="center"
          label="Career Path"
          title="Professional"
          highlight="Journey"
          description="A quick timeline of the roles and milestones that shaped my engineering perspective."
          sx={{ mb: 8 }}
        />
        <Box sx={{ pt: 3 }}>
          <TimelineItem
            isFirst
            date="January 2023 - Present"
            title="Application Engineer"
            subtitle="Kh Infinite Possibilities Private Limited"
            description="Leading development of enterprise workflows across .NET, React, and SQL systems with end-to-end ownership."
            isRight
          />
          <TimelineItem
            date="August 2022 - January 2023"
            title="Graduate Trainee"
            subtitle="Kh Infinite Possibilities Private Limited"
            description="Worked closely with senior engineers on user management and process automation modules."
            isRight={false}
          />
          <TimelineItem
            date="August 2021 - February 2022"
            title="SDET Certification Program"
            subtitle="Seed Infotech, Pune"
            description="Completed training in manual testing, Java, Selenium, API testing, SQL, and test automation fundamentals."
            isRight
          />
          <TimelineItem
            date="Graduation"
            title="B.E. Mechanical Engineering"
            subtitle="Amravati University"
            description="Built strong analytical and systems-thinking foundations now applied to software architecture."
          />
        </Box>
      </Box>

      <Box>
        <PageHero
          align="center"
          label="Engineering Mindset"
          title="Guiding"
          highlight="Principles"
          description="Core quality standards I apply across product architecture and delivery."
          sx={{ mb: 7 }}
        />

        <Grid container spacing={3}>
          {guidingPrinciples.map((principle) => {
            const PrincipleIcon = principle.icon;
            return (
              <Grid key={principle.key} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  sx={{
                    p: 3.5,
                    height: "100%",
                    textAlign: "center",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      mx: "auto",
                      mb: 2,
                      borderRadius: 999,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "action.hover",
                    }}
                  >
                    <PrincipleIcon color="primary" />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1.2, fontWeight: 900 }}>
                    {principle.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", lineHeight: 1.7 }}
                  >
                    {principle.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  </SinglePageSection>
);
