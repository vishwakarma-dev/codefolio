import { SkillCard } from "@app/components/SkillVisualizer";
import { PageHero } from "@app/components/ui/PageHero";
import { SectionHeading } from "@app/components/ui/SectionHeading";
import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import type { Skill } from "@app/types";
import { Box, Container, Stack } from "@mui/material";
import type { SvgIconProps } from "@thesvg/react";
import Codeberg from "@thesvg/react/codeberg";
import Dotnet from "@thesvg/react/dotnet";
import Git from "@thesvg/react/git";
import GoogleGemini from "@thesvg/react/google-gemini";
import Mongodb from "@thesvg/react/mongodb";
import ProTools from "@thesvg/react/pro-tools";
import ReactLogo from "@thesvg/react/react";
import Selenium from "@thesvg/react/selenium";
import Head from "next/head";
import type { ComponentType } from "react";
import { useContext, useEffect, useState } from "react";

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

const SkillsPage: React.FC = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const data = useContext(PortfolioDataContext);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!data) return null;
  const fullName = data.USER.fullName;

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
    const aIsOther = a.toLowerCase() === "other";
    const bIsOther = b.toLowerCase() === "other";
    if (aIsOther && !bIsOther) return 1;
    if (!aIsOther && bIsOther) return -1;
    return 0;
  });

  const getCategoryIcon = (category: string) => {
    const Icon = CATEGORY_ICONS[category.toLowerCase()] ?? Codeberg;
    return <Icon width={18} height={18} aria-hidden="true" />;
  };

  return (
    <>
      <Head>
        <title>{`${fullName} : Skills`}</title>
      </Head>

      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 7, md: 8 }, pb: { xs: 10, md: 12 } }}
      >
        <PageHero
          label="Competency Matrix"
          icon={<ProTools width={16} height={16} aria-hidden="true" />}
          title="Technical"
          highlight="Arsenal"
          description="A curated set of frameworks, platforms, and engineering tools I use to ship scalable products."
          sx={{ mb: 8 }}
        />

        <Stack spacing={6}>
          {categoryEntries.map(([category, skills]) => (
            <Box key={category}>
              <SectionHeading
                title={category}
                icon={getCategoryIcon(category)}
              />

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(1, minmax(0, 1fr))",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(3, minmax(0, 1fr))",
                    lg: "repeat(4, minmax(0, 1fr))",
                  },
                  gap: 2,
                }}
              >
                {skills.map((skill) => (
                  <Box key={skill.name} sx={{ minWidth: 0 }}>
                    <SkillCard skill={skill} animate={isAnimate} />
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default SkillsPage;
