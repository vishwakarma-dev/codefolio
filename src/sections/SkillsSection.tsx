import { SkillCard } from "@app/components/SkillVisualizer";
import { PageHero } from "@app/components/ui/PageHero";
import { SectionHeading } from "@app/components/ui/SectionHeading";
import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import type { Skill } from "../../types";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import type { SvgIconProps } from "@thesvg/react";
import Codeberg from "@thesvg/react/codeberg";
import Dotnet from "@thesvg/react/dotnet";
import Git from "@thesvg/react/git";
import GoogleGemini from "@thesvg/react/google-gemini";
import Mongodb from "@thesvg/react/mongodb";
import ProTools from "@thesvg/react/pro-tools";
import ReactLogo from "@thesvg/react/react";
import Selenium from "@thesvg/react/selenium";
import type { ComponentType } from "react";
import { useContext, useEffect, useState } from "react";

import { SinglePageSection } from "./SinglePageSection";

type IconComponent = ComponentType<SvgIconProps>;

const CATEGORY_ICONS: Record<string, IconComponent> = {
  frontend: ReactLogo,
  framework: ReactLogo,
  backend: Dotnet,
  database: Mongodb,
  "version control": Git,
  deployment: ProTools,
  ide: ProTools,
  ai: GoogleGemini,
  other: Codeberg,
  testing: Selenium,
};

const CATEGORY_ORDER = [
  "Frontend",
  "Framework",
  "Backend",
  "Database",
  "AI",
  "Testing",
  "Version Control",
  "Deployment",
  "IDE",
  "Tools",
  "Other",
];

export const SkillsSection = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const data = useContext(PortfolioDataContext);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsAnimate(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!data) return null;

  const groupedSkills = data.SKILLS.reduce(
    (acc, skill) => {
      const category = skill.category || "Other";
      if (!acc[category]) acc[category] = [];
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  const categoryEntries = (
    Object.entries(groupedSkills) as [string, Skill[]][]
  ).sort(([a], [b]) => {
    const aIndex = CATEGORY_ORDER.indexOf(a);
    const bIndex = CATEGORY_ORDER.indexOf(b);

    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const getCategoryIcon = (category: string) => {
    const Icon = CATEGORY_ICONS[category.toLowerCase()] ?? Codeberg;
    return <Icon width={18} height={18} aria-hidden="true" />;
  };

  return (
    <SinglePageSection id="skills">
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 7, md: 8 }, pb: { xs: 10, md: 12 } }}
      >
        <PageHero
          label="Competency Matrix"
          icon={<ProTools width={16} height={16} aria-hidden="true" />}
          title="Full-stack"
          highlight="Toolkit"
          description="A practical stack for building responsive interfaces, secure APIs, database-backed systems, automation workflows, and AI-assisted product features."
          sx={{ mb: { xs: 5, md: 7 } }}
        />

        <Stack spacing={{ xs: 5, md: 6 }}>
          {categoryEntries.map(([category, skills]) => (
            <Box key={category}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent="space-between"
                sx={{ mb: 2.5 }}
              >
                <SectionHeading
                  title={category}
                  icon={getCategoryIcon(category)}
                  sx={{ mb: 0 }}
                />

                <Chip
                  label={`${skills.length} ${skills.length === 1 ? "skill" : "skills"}`}
                  size="small"
                  variant="outlined"
                />
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(1, minmax(0, 1fr))",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(3, minmax(0, 1fr))",
                    lg: "repeat(4, minmax(0, 1fr))",
                  },
                  gap: { xs: 1.5, md: 2 },
                }}
              >
                {skills.map((skill) => (
                  <Box key={skill.name} sx={{ minWidth: 0 }}>
                    <SkillCard skill={skill} animate={isAnimate} />
                  </Box>
                ))}
              </Box>

              {category.toLowerCase() === "backend" ? (
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    color: "text.secondary",
                    maxWidth: 760,
                    lineHeight: 1.7,
                  }}
                >
                  Comfortable connecting UI, APIs, databases, and automation
                  into maintainable full-stack workflows.
                </Typography>
              ) : null}
            </Box>
          ))}
        </Stack>
      </Container>
    </SinglePageSection>
  );
};
