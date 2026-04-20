import { PortfolioDataContext } from "@app/providers/PortfolioDataProvider";
import { AboutSection } from "@app/sections/AboutSection";
import { ContactSection } from "@app/sections/ContactSection";
import { HomeSection } from "@app/sections/HomeSection";
import { ProjectsSection } from "@app/sections/ProjectsSection";
import { SkillsSection } from "@app/sections/SkillsSection";
import Head from "next/head";
import { useContext } from "react";

export default function HomePage() {
  const data = useContext(PortfolioDataContext);
  const fullName = data?.USER.fullName ?? "Portfolio User";

  return (
    <>
      <Head>
        <title>{`${fullName} | Portfolio`}</title>
        <meta
          name="description"
          content={`${fullName} - Application Engineer building scalable, high-performance web solutions with .NET and React.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
