import type { Skill } from "@app/types";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import type { SvgIconProps } from "@thesvg/react";
import Canva from "@thesvg/react/canva";
import Codeberg from "@thesvg/react/codeberg";
import Csharp from "@thesvg/react/csharp";
import Dotnet from "@thesvg/react/dotnet";
import EclipseIde from "@thesvg/react/eclipse-ide";
import Expressdotjs from "@thesvg/react/expressdotjs";
import Git from "@thesvg/react/git";
import Github from "@thesvg/react/github";
import GithubCopilot from "@thesvg/react/github-copilot";
import GithubPages from "@thesvg/react/github-pages";
import Google from "@thesvg/react/google";
import GoogleGemini from "@thesvg/react/google-gemini";
import Java from "@thesvg/react/java";
import Javascript from "@thesvg/react/javascript";
import MicrosoftSqlServer from "@thesvg/react/microsoft-sql-server";
import Mongodb from "@thesvg/react/mongodb";
import Mui from "@thesvg/react/mui";
import Nextdotjs from "@thesvg/react/nextdotjs";
import Postman from "@thesvg/react/postman";
import Python from "@thesvg/react/python";
import ReactLogo from "@thesvg/react/react";
import Selenium from "@thesvg/react/selenium";
import Typescript from "@thesvg/react/typescript";
import Vercel from "@thesvg/react/vercel";
import VisualStudio from "@thesvg/react/visual-studio";
import VisualStudioCode from "@thesvg/react/visual-studio-code";
import Vite from "@thesvg/react/vite";
import type { ComponentType } from "react";

type IconComponent = ComponentType<SvgIconProps>;

const iconMap: Record<string, IconComponent> = {
  JavaScript: Javascript,
  TypeScript: Typescript,
  MUI: Mui,
  "React JS": ReactLogo,
  "Next JS": Nextdotjs,
  Vite: Vite,
  ".Net Core": Dotnet,
  "C#": Csharp,
  "Express JS": Expressdotjs,
  MSSQL: MicrosoftSqlServer,
  MongoDB: Mongodb,
  Python: Python,
  "Gemini AI": GoogleGemini,
  "Stitch by Google": Google,
  "GitHub Copilot": GithubCopilot,
  Git: Git,
  GitHub: Github,
  "GitHub Pages": GithubPages,
  "Git / GitHub": Github,
  Java: Java,
  Selenium: Selenium,
  Canva: Canva,
  "Visual Studio": VisualStudio,
  "VS Code": VisualStudioCode,
  Eclipse: EclipseIde,
  Postman: Postman,
  Vercel: Vercel,
};

export const SkillCard: React.FC<{ skill: Skill; animate: boolean }> = ({
  skill,
  animate,
}) => {
  const theme = useTheme();
  const Icon = iconMap[skill.name] ?? Codeberg;
  const needsThemeMonoIconFix = [
    "GitHub",
    "GitHub Copilot",
    "Git / GitHub",
    "Express JS",
    "GitHub Pages",
    "Vercel",
  ].includes(skill.name);
  const shouldInvertInDarkMode =
    skill.name === "Next JS" && theme.palette.mode === "dark";

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.5,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "12px",
        bgcolor: "background.paper",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(20px)",
        "&:hover": {
          borderColor: "primary.main",
          transform: "translateY(-8px) scale(1.02)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 10px 30px rgba(0,0,0,0.5)"
              : "0 10px 30px rgba(99, 102, 241, 0.1)",
          "& svg": {
            filter: `${shouldInvertInDarkMode ? "invert(1) " : ""}drop-shadow(0 0 8px ${theme.palette.primary.main}44)`,
          },
        },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& svg": {
            width: "100%",
            height: "100%",
            transition: "filter 0.3s ease",
            filter: shouldInvertInDarkMode ? "invert(1)" : "none",
          },
          ...(needsThemeMonoIconFix && {
            "& svg": {
              color: theme.palette.text.primary,
              fill: theme.palette.text.primary,
            },
            "& svg *": {
              fill: `${theme.palette.text.primary} !important`,
              stroke: `${theme.palette.text.primary} !important`,
            },
          }),
        }}
      >
        <Icon width={40} height={40} aria-label={skill.name} role="img" />
      </Box>
      <Typography
        variant="body2"
        sx={{ fontWeight: 800, fontSize: "0.85rem", textAlign: "center" }}
      >
        {skill.name}
      </Typography>
    </Paper>
  );
};
